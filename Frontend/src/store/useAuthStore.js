import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { currentUser, users } from '../data/users';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const user = users.find((u) => u.email === email);
        if (user) {
          set({ user, isAuthenticated: true, loading: false });
          return { success: true };
        } else {
          set({ error: 'Invalid credentials', loading: false });
          return { success: false, error: 'Invalid credentials' };
        }
      },

      register: async (userData) => {
        set({ loading: true, error: null });
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const newUser = {
          id: users.length + 1,
          ...userData,
          role: 'User',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
          wishlist: [],
          recentActivity: [],
          notifications: []
        };
        
        set({ user: newUser, isAuthenticated: true, loading: false });
        return { success: true };
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (updatedData) => {
        set((state) => ({
          user: { ...state.user, ...updatedData }
        }));
      },

      toggleWishlist: (propertyId) => {
        set((state) => {
          if (!state.user) return state;
          const isWishlisted = state.user.wishlist.includes(propertyId);
          const newWishlist = isWishlisted
            ? state.user.wishlist.filter((id) => id !== propertyId)
            : [...state.user.wishlist, propertyId];
          
          return {
            user: { ...state.user, wishlist: newWishlist }
          };
        });
      }
    }),
    {
      name: 'disharealty-auth-storage',
    }
  )
);

export default useAuthStore;
