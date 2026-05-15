import { create } from 'zustand';
import { properties as initialProperties } from '../data/properties';

const usePropertyStore = create((set, get) => ({
  properties: initialProperties,
  filteredProperties: initialProperties,
  loading: false,
  filters: {
    search: '',
    type: 'All',
    location: 'All',
    priceRange: [0, 20000000],
    beds: 'Any',
    baths: 'Any',
    amenities: []
  },
  sortBy: 'latest',

  setFilter: (key, value) => {
    set((state) => ({
      filters: { ...state.filters, [key]: value }
    }));
    get().applyFilters();
  },

  setSort: (sort) => {
    set({ sortBy: sort });
    get().applyFilters();
  },

  applyFilters: async () => {
    set({ loading: true });
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const { filters, sortBy } = get();
    let result = [...initialProperties];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchLower) || 
        p.location.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type !== 'All') {
      result = result.filter(p => p.type === filters.type);
    }

    // Location filter
    if (filters.location !== 'All') {
      result = result.filter(p => p.location.includes(filters.location));
    }

    // Price range
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Beds
    if (filters.beds !== 'Any') {
      result = result.filter(p => p.beds >= parseInt(filters.beds));
    }

    // Baths
    if (filters.baths !== 'Any') {
      result = result.filter(p => p.baths >= parseInt(filters.baths));
    }

    // Amenities
    if (filters.amenities.length > 0) {
      result = result.filter(p => 
        filters.amenities.every(amenity => p.amenities.includes(amenity))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'match') {
      result.sort((a, b) => parseInt(b.match) - parseInt(a.match));
    }

    set({ filteredProperties: result, loading: false });
  },

  resetFilters: () => {
    set({
      filters: {
        search: '',
        type: 'All',
        location: 'All',
        priceRange: [0, 20000000],
        beds: 'Any',
        baths: 'Any',
        amenities: []
      }
    });
    get().applyFilters();
  }
}));

export default usePropertyStore;
