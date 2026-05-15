import { create } from 'zustand';
import { blogs as initialBlogs } from '../data/blogs';

const useBlogStore = create((set, get) => ({

  blogs: initialBlogs,
  filteredPosts: initialBlogs,
  categories: ['All', 'Architecture', 'Investment', 'Design', 'Lifestyle'],
  loading: false,
  activeCategory: 'All',
  searchQuery: '',

  setCategory: (category) => {
    set({ activeCategory: category });
    get().applyFilters();
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  applyFilters: async () => {
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 600));

    const { activeCategory, searchQuery } = get();
    let result = [...initialBlogs];

    if (activeCategory !== 'All') {
      result = result.filter(b => b.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.excerpt.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    set({ filteredPosts: result, loading: false });
  }
}));


export default useBlogStore;
