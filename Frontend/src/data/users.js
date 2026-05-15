export const users = [
  {
    id: 1,
    name: "Arpan Banik",
    email: "arpan@example.com",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arpan",
    phone: "+971 50 123 4567",
    wishlist: [1, 3, 7],
    recentActivity: [
      { id: 1, type: "view", propertyId: 1, date: "2024-05-14T10:00:00Z" },
      { id: 2, type: "save", propertyId: 7, date: "2024-05-13T15:30:00Z" }
    ],
    notifications: [
      { id: 1, title: "Price Drop!", message: "The Glass Pavilion price decreased by 5%", type: "info", read: false, date: "2024-05-14T09:00:00Z" },
      { id: 2, title: "Booking Confirmed", message: "Your visit to Azure Marina Suite is confirmed for tomorrow.", type: "success", read: true, date: "2024-05-13T11:00:00Z" }
    ]
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    phone: "+971 50 765 4321",
    wishlist: [2, 5],
    recentActivity: [],
    notifications: []
  }
];

export const currentUser = users[0];
