import { create } from 'zustand';

const useBookingStore = create((set) => ({
  bookings: [],
  loading: false,

  scheduleVisit: async (bookingData) => {
    set({ loading: true });
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    set((state) => ({
      bookings: [newBooking, ...state.bookings],
      loading: false
    }));

    return { success: true };
  },

  cancelBooking: (id) => {
    set((state) => ({
      bookings: state.bookings.filter(b => b.id !== id)
    }));
  }
}));

export default useBookingStore;
