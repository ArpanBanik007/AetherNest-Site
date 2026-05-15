export const dashboardStats = {
  overview: [
    { title: "Total Properties", value: 12, change: "+20%", trend: "up" },
    { title: "Active Listings", value: 8, change: "+5%", trend: "up" },
    { title: "Total Views", value: "24.5K", change: "+12%", trend: "up" },
    { title: "Inquiries", value: 156, change: "-3%", trend: "down" }
  ],
  revenueData: [
    { name: "Jan", revenue: 4000, target: 3500 },
    { name: "Feb", revenue: 3000, target: 3500 },
    { name: "Mar", revenue: 2000, target: 3500 },
    { name: "Apr", revenue: 2780, target: 3500 },
    { name: "May", revenue: 1890, target: 3500 },
    { name: "Jun", revenue: 2390, target: 3500 },
    { name: "Jul", revenue: 3490, target: 3500 }
  ],
  propertyDistribution: [
    { name: "Villa", value: 5 },
    { name: "Penthouse", value: 2 },
    { name: "Apartment", value: 1 },
    { name: "Townhouse", value: 1 }
  ],
  recentInquiries: [
    { id: 1, user: "Sarah Smith", property: "The Glass Pavilion", status: "New", date: "2024-05-14T10:00:00Z" },
    { id: 2, user: "James Brown", property: "Azure Marina Suite", status: "Replied", date: "2024-05-13T14:30:00Z" },
    { id: 3, user: "Emily Davis", property: "Sky Garden Villa", status: "Contacted", date: "2024-05-12T09:15:00Z" }
  ]
};
