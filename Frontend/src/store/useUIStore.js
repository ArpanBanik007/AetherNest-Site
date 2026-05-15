import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUIStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      isSidebarOpen: false,
      setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
      
      toasts: [],
      addToast: (toast) => {
        const id = Date.now();
        set((state) => ({ 
          toasts: [...state.toasts, { id, duration: 3000, ...toast }] 
        }));
        
        // Auto remove toast
        setTimeout(() => {
          set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id)
          }));
        }, toast.duration || 3000);
      },
      removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id)
      })),

      globalLoading: false,
      setGlobalLoading: (isLoading) => set({ globalLoading: isLoading }),
    }),
    {
      name: 'aethernest-ui-storage',
      partialize: (state) => ({ isDarkMode: state.isDarkMode }), // Only persist dark mode
    }
  )
);


export default useUIStore;
