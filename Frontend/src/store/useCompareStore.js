import { create } from 'zustand';

const useCompareStore = create((set) => ({
  comparedProperties: [],
  addToCompare: (property) => set((state) => {
    if (state.comparedProperties.length >= 4) {
      // Limit to 4 properties
      return state;
    }
    if (state.comparedProperties.find(p => p.id === property.id)) {
      return state;
    }
    return { comparedProperties: [...state.comparedProperties, property] };
  }),
  removeFromCompare: (id) => set((state) => ({
    comparedProperties: state.comparedProperties.filter(p => p.id !== id)
  })),
  clearCompare: () => set({ comparedProperties: [] }),
}));

export default useCompareStore;
