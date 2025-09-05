export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  contact: string;
  email?: string;
  website?: string;
  cuisine: string;
  priceRange: string;
  averagePrice: number;
  openingHours: {
    [key: string]: string;
  };
  features: string[];
  description: string;
  menus: MenuItem[];
  images: string[];
  reviews: Review[];
  amenities: {
    wifi: boolean;
    parking: boolean;
    outdoorSeating: boolean;
    wheelchairAccessible: boolean;
    petFriendly: boolean;
    reservations: boolean;
    delivery: boolean;
    takeaway: boolean;
  };
  chef?: string;
  established?: number;
  capacity?: number;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Cantinho do Avillez",
    location: "Príncipe Real, Lisbon",
    address: "Rua Duques de Bragança 7, 1200-162 Lisboa",
    rating: 4.6,
    reviewCount: 1247,
    contact: "+351 21 199 2369",
    email: "info@cantinhodoavillez.pt",
    website: "www.cantinhodoavillez.pt",
    cuisine: "Portuguese Contemporary",
    priceRange: "€€€",
    averagePrice: 35,
    chef: "José Avillez",
    established: 2012,
    capacity: 80,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 23:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 23:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 23:00",
      "Thursday": "12:00 - 15:00, 19:00 - 23:00",
      "Friday": "12:00 - 15:00, 19:00 - 23:00",
      "Saturday": "12:00 - 15:00, 19:00 - 23:00",
      "Sunday": "12:00 - 15:00, 19:00 - 23:00"
    },
    features: ["Outdoor Seating", "WiFi", "Reservations", "Wheelchair Accessible", "Pet Friendly"],
    description: "A modern Portuguese restaurant by renowned chef José Avillez, offering innovative takes on traditional Portuguese cuisine in a contemporary setting. Known for its creative presentation and exceptional service.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: false,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: true,
      reservations: true,
      delivery: false,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Bacalhau à Brás", price: 18, description: "Traditional Portuguese cod dish with eggs and potatoes", category: "Main Course", isPopular: true },
      { id: 2, name: "Arroz de Marisco", price: 22, description: "Rich seafood rice with fresh catch of the day", category: "Main Course", isPopular: true },
      { id: 3, name: "Pastéis de Nata", price: 3, description: "Classic Portuguese custard tarts", category: "Dessert" },
      { id: 4, name: "Vinho Verde", price: 8, description: "Refreshing young Portuguese wine", category: "Beverages" },
      { id: 5, name: "Ameijoas à Bulhão Pato", price: 15, description: "Clams in white wine and garlic sauce", category: "Appetizer" },
      { id: 6, name: "Polvo à Lagareiro", price: 24, description: "Octopus with roasted potatoes and olive oil", category: "Main Course" },
      { id: 7, name: "Sopa de Peixe", price: 12, description: "Traditional fish soup with fresh herbs", category: "Appetizer" },
      { id: 8, name: "Queijo da Serra", price: 9, description: "Aged mountain cheese with quince jam", category: "Appetizer", isVegetarian: true },
      { id: 9, name: "Leite Creme", price: 6, description: "Portuguese crème brûlée", category: "Dessert", isVegetarian: true },
      { id: 10, name: "Porto Tinto", price: 12, description: "Aged port wine", category: "Beverages" }
    ],
    reviews: [
      {
        id: 1,
        userName: "Maria Silva",
        rating: 5,
        comment: "Absolutely fantastic! The Bacalhau à Brás was incredible and the service was impeccable. Highly recommend!",
        date: "2024-01-15",
        helpful: 23
      },
      {
        id: 2,
        userName: "João Santos",
        rating: 4,
        comment: "Great atmosphere and delicious food. The seafood rice was outstanding. A bit pricey but worth it.",
        date: "2024-01-12",
        helpful: 18
      },
      {
        id: 3,
        userName: "Ana Costa",
        rating: 5,
        comment: "Perfect for a special occasion. The chef's attention to detail is remarkable. Will definitely return!",
        date: "2024-01-10",
        helpful: 31
      }
    ]
  },
  {
    id: 2,
    name: "Taberna da Rua das Flores",
    location: "Príncipe Real, Lisbon",
    address: "Rua das Flores 103, 1200-194 Lisboa",
    rating: 4.4,
    reviewCount: 892,
    contact: "+351 21 347 9419",
    email: "reservas@tabernadasflores.pt",
    cuisine: "Traditional Portuguese",
    priceRange: "€€",
    averagePrice: 22,
    established: 2015,
    capacity: 45,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 22:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 22:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 22:00",
      "Thursday": "12:00 - 15:00, 19:00 - 22:00",
      "Friday": "12:00 - 15:00, 19:00 - 22:00",
      "Saturday": "12:00 - 15:00, 19:00 - 22:00",
      "Sunday": "Closed"
    },
    features: ["Traditional Atmosphere", "Local Ingredients", "Wine Selection", "Group Friendly"],
    description: "An authentic Portuguese tavern serving traditional dishes in a cozy, historic setting with a focus on local ingredients and regional specialties.",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: false,
      parking: false,
      outdoorSeating: false,
      wheelchairAccessible: false,
      petFriendly: false,
      reservations: true,
      delivery: false,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Sardinhas Assadas", price: 12, description: "Grilled sardines with olive oil and herbs", category: "Main Course", isPopular: true },
      { id: 2, name: "Cataplana de Marisco", price: 25, description: "Traditional seafood stew in copper pot", category: "Main Course", isPopular: true },
      { id: 3, name: "Queijo da Serra", price: 8, description: "Aged mountain cheese with honey", category: "Appetizer", isVegetarian: true },
      { id: 4, name: "Porto Tinto", price: 6, description: "Aged port wine", category: "Beverages" },
      { id: 5, name: "Caldo Verde", price: 7, description: "Traditional kale soup with chorizo", category: "Appetizer" },
      { id: 6, name: "Bifana", price: 5, description: "Traditional pork sandwich", category: "Main Course" },
      { id: 7, name: "Francesinha", price: 14, description: "Porto-style sandwich with beer sauce", category: "Main Course" },
      { id: 8, name: "Pudim Abade de Priscos", price: 6, description: "Traditional Portuguese pudding", category: "Dessert", isVegetarian: true },
      { id: 9, name: "Vinho da Casa", price: 4, description: "House wine", category: "Beverages" },
      { id: 10, name: "Azeitonas", price: 3, description: "Marinated olives", category: "Appetizer", isVegetarian: true, isGlutenFree: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "Pedro Almeida",
        rating: 4,
        comment: "Authentic Portuguese food in a traditional setting. The sardines were perfectly grilled!",
        date: "2024-01-14",
        helpful: 15
      },
      {
        id: 2,
        userName: "Carla Mendes",
        rating: 5,
        comment: "Love the cozy atmosphere and traditional recipes. The cataplana is a must-try!",
        date: "2024-01-11",
        helpful: 22
      }
    ]
  },
  {
    id: 3,
    name: "A Cevicheria",
    location: "Príncipe Real, Lisbon",
    address: "Rua Dom Pedro V 129, 1250-096 Lisboa",
    rating: 4.7,
    reviewCount: 1156,
    contact: "+351 21 803 8815",
    email: "hello@acevicheria.pt",
    website: "www.acevicheria.pt",
    cuisine: "Peruvian",
    priceRange: "€€€",
    averagePrice: 28,
    chef: "Kiko Martins",
    established: 2018,
    capacity: 60,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 23:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 23:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 23:00",
      "Thursday": "12:00 - 15:00, 19:00 - 23:00",
      "Friday": "12:00 - 15:00, 19:00 - 23:00",
      "Saturday": "12:00 - 15:00, 19:00 - 23:00",
      "Sunday": "12:00 - 15:00, 19:00 - 23:00"
    },
    features: ["Fresh Seafood", "Cocktails", "Modern Interior", "Chef's Table", "Takeaway"],
    description: "Lisbon's premier Peruvian restaurant specializing in fresh ceviche and authentic Peruvian cuisine with a modern twist. Known for its vibrant atmosphere and exceptional cocktails.",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: false,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: false,
      reservations: true,
      delivery: true,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Ceviche Clássico", price: 16, description: "Fresh fish marinated in citrus with red onion", category: "Main Course", isPopular: true },
      { id: 2, name: "Tiradito de Salmão", price: 18, description: "Salmon sashimi with tiger's milk", category: "Main Course", isPopular: true },
      { id: 3, name: "Pisco Sour", price: 9, description: "Classic Peruvian cocktail", category: "Beverages", isPopular: true },
      { id: 4, name: "Causa Limeña", price: 14, description: "Layered potato dish with chicken", category: "Main Course" },
      { id: 5, name: "Anticuchos", price: 12, description: "Grilled beef heart skewers", category: "Appetizer" },
      { id: 6, name: "Lomo Saltado", price: 20, description: "Stir-fried beef with vegetables and fries", category: "Main Course" },
      { id: 7, name: "Aji de Gallina", price: 16, description: "Shredded chicken in yellow pepper sauce", category: "Main Course" },
      { id: 8, name: "Chicha Morada", price: 5, description: "Traditional purple corn drink", category: "Beverages", isVegetarian: true },
      { id: 9, name: "Suspiro Limeño", price: 7, description: "Traditional Peruvian dessert", category: "Dessert", isVegetarian: true },
      { id: 10, name: "Ceviche Nikkei", price: 19, description: "Japanese-Peruvian fusion ceviche", category: "Main Course", isPopular: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "Ricardo Lima",
        rating: 5,
        comment: "Best ceviche in Lisbon! The flavors are incredible and the Pisco Sour is perfect.",
        date: "2024-01-16",
        helpful: 28
      },
      {
        id: 2,
        userName: "Sofia Rodrigues",
        rating: 4,
        comment: "Amazing Peruvian food with a modern twist. The atmosphere is vibrant and fun!",
        date: "2024-01-13",
        helpful: 19
      },
      {
        id: 3,
        userName: "Miguel Torres",
        rating: 5,
        comment: "Outstanding quality and presentation. The chef's table experience was unforgettable!",
        date: "2024-01-09",
        helpful: 35
      }
    ]
  },
  {
    id: 4,
    name: "Bairro do Avillez",
    location: "Príncipe Real, Lisbon",
    address: "Rua Nova da Trindade 18, 1200-301 Lisboa",
    rating: 4.8,
    reviewCount: 2156,
    contact: "+351 21 199 2369",
    email: "info@bairrodoavillez.pt",
    website: "www.bairrodoavillez.pt",
    cuisine: "Portuguese Contemporary",
    priceRange: "€€€",
    averagePrice: 42,
    chef: "José Avillez",
    established: 2014,
    capacity: 120,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 23:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 23:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 23:00",
      "Thursday": "12:00 - 15:00, 19:00 - 23:00",
      "Friday": "12:00 - 15:00, 19:00 - 23:00",
      "Saturday": "12:00 - 15:00, 19:00 - 23:00",
      "Sunday": "12:00 - 15:00, 19:00 - 23:00"
    },
    features: ["Fine Dining", "Wine Cellar", "Private Dining", "Chef's Table", "Outdoor Terrace"],
    description: "An upscale Portuguese restaurant featuring innovative cuisine in a sophisticated setting with an extensive wine collection and exceptional service.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: true,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: false,
      reservations: true,
      delivery: false,
      takeaway: false
    },
    menus: [
      { id: 1, name: "Açorda de Marisco", price: 24, description: "Traditional bread soup with seafood", category: "Main Course", isPopular: true },
      { id: 2, name: "Bacalhau Confitado", price: 28, description: "Confit cod with olive oil and herbs", category: "Main Course", isPopular: true },
      { id: 3, name: "Amêijoas à Bulhão Pato", price: 18, description: "Clams in white wine and garlic", category: "Appetizer" },
      { id: 4, name: "Vinho Tinto Reserva", price: 15, description: "Aged red wine", category: "Beverages" },
      { id: 5, name: "Polvo à Lagareiro", price: 32, description: "Octopus with roasted potatoes", category: "Main Course" },
      { id: 6, name: "Queijo da Serra", price: 12, description: "Mountain cheese with quince", category: "Appetizer", isVegetarian: true },
      { id: 7, name: "Leite Creme", price: 8, description: "Portuguese crème brûlée", category: "Dessert", isVegetarian: true },
      { id: 8, name: "Porto Vintage", price: 18, description: "Vintage port wine", category: "Beverages" }
    ],
    reviews: [
      {
        id: 1,
        userName: "Isabel Ferreira",
        rating: 5,
        comment: "Absolutely exceptional dining experience. The service and food quality are outstanding!",
        date: "2024-01-17",
        helpful: 42
      },
      {
        id: 2,
        userName: "Carlos Mendes",
        rating: 5,
        comment: "Perfect for special occasions. The wine selection is incredible and the chef's attention to detail is remarkable.",
        date: "2024-01-14",
        helpful: 38
      }
    ]
  },
  {
    id: 5,
    name: "O Prego da Peixaria",
    location: "Príncipe Real, Lisbon",
    address: "Rua da Escola Politécnica 40, 1250-102 Lisboa",
    rating: 4.3,
    reviewCount: 743,
    contact: "+351 21 342 0589",
    email: "info@opregodapeixaria.pt",
    cuisine: "Seafood",
    priceRange: "€€",
    averagePrice: 19,
    established: 2016,
    capacity: 50,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 22:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 22:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 22:00",
      "Thursday": "12:00 - 15:00, 19:00 - 22:00",
      "Friday": "12:00 - 15:00, 19:00 - 22:00",
      "Saturday": "12:00 - 15:00, 19:00 - 22:00",
      "Sunday": "Closed"
    },
    features: ["Fresh Fish", "Traditional Recipes", "Local Catch", "Casual Dining"],
    description: "A charming seafood restaurant specializing in fresh fish and traditional Portuguese seafood dishes in a relaxed, family-friendly atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: false,
      parking: false,
      outdoorSeating: false,
      wheelchairAccessible: false,
      petFriendly: true,
      reservations: true,
      delivery: false,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Peixe Grelhado", price: 16, description: "Grilled fish of the day", category: "Main Course", isPopular: true },
      { id: 2, name: "Arroz de Tamboril", price: 18, description: "Monkfish rice", category: "Main Course", isPopular: true },
      { id: 3, name: "Sardinhas Assadas", price: 12, description: "Grilled sardines", category: "Main Course" },
      { id: 4, name: "Caldeirada", price: 20, description: "Traditional fish stew", category: "Main Course" },
      { id: 5, name: "Ameijoas à Bulhão Pato", price: 14, description: "Clams in garlic sauce", category: "Appetizer" },
      { id: 6, name: "Vinho Verde", price: 6, description: "Young Portuguese wine", category: "Beverages" }
    ],
    reviews: [
      {
        id: 1,
        userName: "Fernanda Costa",
        rating: 4,
        comment: "Great fresh fish and traditional flavors. The grilled fish is always perfectly cooked.",
        date: "2024-01-15",
        helpful: 12
      }
    ]
  },
  {
    id: 6,
    name: "Café de São Bento",
    location: "Príncipe Real, Lisbon",
    address: "Rua de São Bento 212, 1200-109 Lisboa",
    rating: 4.2,
    reviewCount: 567,
    contact: "+351 21 396 3335",
    email: "info@cafesaobento.pt",
    cuisine: "Portuguese Traditional",
    priceRange: "€€",
    averagePrice: 16,
    established: 1982,
    capacity: 35,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 22:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 22:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 22:00",
      "Thursday": "12:00 - 15:00, 19:00 - 22:00",
      "Friday": "12:00 - 15:00, 19:00 - 22:00",
      "Saturday": "12:00 - 15:00, 19:00 - 22:00",
      "Sunday": "Closed"
    },
    features: ["Historic Setting", "Traditional Recipes", "Local Favorites", "Authentic Atmosphere"],
    description: "A historic café serving traditional Portuguese dishes in an authentic, time-honored setting that has been a local favorite for decades.",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: false,
      parking: false,
      outdoorSeating: false,
      wheelchairAccessible: false,
      petFriendly: false,
      reservations: false,
      delivery: false,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Bifana Tradicional", price: 4, description: "Traditional pork sandwich", category: "Main Course", isPopular: true },
      { id: 2, name: "Prego no Prato", price: 8, description: "Steak sandwich on plate", category: "Main Course" },
      { id: 3, name: "Café", price: 1, description: "Portuguese espresso", category: "Beverages" },
      { id: 4, name: "Pastel de Nata", price: 2, description: "Custard tart", category: "Dessert" },
      { id: 5, name: "Sandes Mista", price: 3, description: "Mixed sandwich", category: "Main Course" }
    ],
    reviews: [
      {
        id: 1,
        userName: "António Silva",
        rating: 4,
        comment: "Authentic Portuguese café with great traditional food. The bifana is excellent!",
        date: "2024-01-13",
        helpful: 8
      }
    ]
  },
  {
    id: 7,
    name: "Restaurante Tágide",
    location: "Príncipe Real, Lisbon",
    address: "Largo da Academia Nacional de Belas Artes 18, 1200-005 Lisboa",
    rating: 4.6,
    reviewCount: 1089,
    contact: "+351 21 342 2070",
    email: "reservas@tagide.pt",
    website: "www.tagide.pt",
    cuisine: "Portuguese Fine Dining",
    priceRange: "€€€",
    averagePrice: 38,
    chef: "Vítor Sobral",
    established: 1997,
    capacity: 80,
    openingHours: {
      "Monday": "19:00 - 23:00",
      "Tuesday": "19:00 - 23:00",
      "Wednesday": "19:00 - 23:00",
      "Thursday": "19:00 - 23:00",
      "Friday": "19:00 - 23:00",
      "Saturday": "19:00 - 23:00",
      "Sunday": "Closed"
    },
    features: ["Fine Dining", "Historic Building", "Wine Pairing", "Romantic Setting", "Terrace Views"],
    description: "An elegant fine dining restaurant located in a historic building with stunning views over Lisbon, offering refined Portuguese cuisine with modern techniques.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: true,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: false,
      reservations: true,
      delivery: false,
      takeaway: false
    },
    menus: [
      { id: 1, name: "Menu Degustação", price: 65, description: "Tasting menu with wine pairing", category: "Main Course", isPopular: true },
      { id: 2, name: "Bacalhau à Brás", price: 22, description: "Traditional cod with eggs and potatoes", category: "Main Course" },
      { id: 3, name: "Açorda de Marisco", price: 26, description: "Seafood bread soup", category: "Main Course" },
      { id: 4, name: "Vinho Reserva", price: 18, description: "Aged Portuguese wine", category: "Beverages" },
      { id: 5, name: "Leite Creme", price: 9, description: "Portuguese crème brûlée", category: "Dessert", isVegetarian: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "Elena Vasquez",
        rating: 5,
        comment: "Absolutely magical dining experience with breathtaking views. The tasting menu was exceptional!",
        date: "2024-01-16",
        helpful: 29
      },
      {
        id: 2,
        userName: "Roberto Santos",
        rating: 4,
        comment: "Perfect for romantic dinners. The food quality and service are outstanding.",
        date: "2024-01-12",
        helpful: 21
      }
    ]
  },
  {
    id: 8,
    name: "Pizzeria Mozzarella",
    location: "Príncipe Real, Lisbon",
    address: "Rua da Escola Politécnica 8, 1250-102 Lisboa",
    rating: 4.1,
    reviewCount: 432,
    contact: "+351 21 342 1234",
    email: "info@mozzarella.pt",
    cuisine: "Italian",
    priceRange: "€€",
    averagePrice: 18,
    established: 2019,
    capacity: 40,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 23:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 23:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 23:00",
      "Thursday": "12:00 - 15:00, 19:00 - 23:00",
      "Friday": "12:00 - 15:00, 19:00 - 23:00",
      "Saturday": "12:00 - 15:00, 19:00 - 23:00",
      "Sunday": "12:00 - 15:00, 19:00 - 23:00"
    },
    features: ["Wood-fired Pizza", "Fresh Ingredients", "Italian Wines", "Family Friendly"],
    description: "Authentic Italian pizzeria serving traditional wood-fired pizzas with fresh ingredients and a selection of Italian wines in a cozy atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: false,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: true,
      reservations: true,
      delivery: true,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Margherita", price: 12, description: "Tomato, mozzarella, basil", category: "Main Course", isPopular: true, isVegetarian: true },
      { id: 2, name: "Quattro Stagioni", price: 16, description: "Four seasons pizza", category: "Main Course" },
      { id: 3, name: "Prosciutto e Funghi", price: 15, description: "Ham and mushroom pizza", category: "Main Course" },
      { id: 4, name: "Tiramisu", price: 6, description: "Classic Italian dessert", category: "Dessert", isVegetarian: true },
      { id: 5, name: "Chianti", price: 8, description: "Italian red wine", category: "Beverages" },
      { id: 6, name: "Bruschetta", price: 7, description: "Toasted bread with tomatoes", category: "Appetizer", isVegetarian: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "Marco Rossi",
        rating: 4,
        comment: "Great authentic Italian pizza! The wood-fired oven gives it that perfect taste.",
        date: "2024-01-14",
        helpful: 15
      }
    ]
  },
  {
    id: 9,
    name: "Sushi Zen",
    location: "Príncipe Real, Lisbon",
    address: "Rua Dom Pedro V 45, 1250-096 Lisboa",
    rating: 4.4,
    reviewCount: 678,
    contact: "+351 21 342 5678",
    email: "info@sushizen.pt",
    cuisine: "Japanese",
    priceRange: "€€€",
    averagePrice: 32,
    established: 2020,
    capacity: 30,
    openingHours: {
      "Monday": "12:00 - 15:00, 19:00 - 23:00",
      "Tuesday": "12:00 - 15:00, 19:00 - 23:00",
      "Wednesday": "12:00 - 15:00, 19:00 - 23:00",
      "Thursday": "12:00 - 15:00, 19:00 - 23:00",
      "Friday": "12:00 - 15:00, 19:00 - 23:00",
      "Saturday": "12:00 - 15:00, 19:00 - 23:00",
      "Sunday": "Closed"
    },
    features: ["Fresh Sushi", "Omakase", "Sake Selection", "Minimalist Design"],
    description: "A modern Japanese restaurant specializing in fresh sushi and sashimi with a minimalist design and authentic Japanese dining experience.",
    images: [
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: false,
      outdoorSeating: false,
      wheelchairAccessible: true,
      petFriendly: false,
      reservations: true,
      delivery: true,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Sashimi Moriawase", price: 28, description: "Assorted fresh sashimi", category: "Main Course", isPopular: true },
      { id: 2, name: "Nigiri Set", price: 24, description: "Selection of nigiri sushi", category: "Main Course", isPopular: true },
      { id: 3, name: "California Roll", price: 12, description: "Crab, avocado, cucumber", category: "Main Course" },
      { id: 4, name: "Miso Soup", price: 4, description: "Traditional Japanese soup", category: "Appetizer", isVegetarian: true },
      { id: 5, name: "Sake", price: 12, description: "Premium Japanese rice wine", category: "Beverages" },
      { id: 6, name: "Tempura", price: 16, description: "Lightly battered vegetables", category: "Appetizer", isVegetarian: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "Yuki Tanaka",
        rating: 5,
        comment: "Authentic Japanese sushi with fresh ingredients. The omakase experience is incredible!",
        date: "2024-01-15",
        helpful: 22
      }
    ]
  },
  {
    id: 10,
    name: "Burger & Co",
    location: "Príncipe Real, Lisbon",
    address: "Rua Nova da Trindade 12, 1200-301 Lisboa",
    rating: 4.0,
    reviewCount: 389,
    contact: "+351 21 342 9876",
    email: "info@burgerco.pt",
    cuisine: "American",
    priceRange: "€€",
    averagePrice: 14,
    established: 2021,
    capacity: 45,
    openingHours: {
      "Monday": "12:00 - 23:00",
      "Tuesday": "12:00 - 23:00",
      "Wednesday": "12:00 - 23:00",
      "Thursday": "12:00 - 23:00",
      "Friday": "12:00 - 23:00",
      "Saturday": "12:00 - 23:00",
      "Sunday": "12:00 - 23:00"
    },
    features: ["Gourmet Burgers", "Craft Beer", "Late Night", "Casual Dining"],
    description: "A trendy burger joint serving gourmet burgers with premium ingredients, craft beers, and a relaxed atmosphere perfect for casual dining.",
    images: [
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
    ],
    amenities: {
      wifi: true,
      parking: false,
      outdoorSeating: true,
      wheelchairAccessible: true,
      petFriendly: true,
      reservations: false,
      delivery: true,
      takeaway: true
    },
    menus: [
      { id: 1, name: "Classic Burger", price: 10, description: "Beef patty, lettuce, tomato, onion", category: "Main Course", isPopular: true },
      { id: 2, name: "Cheese Burger", price: 12, description: "Classic burger with cheese", category: "Main Course", isPopular: true },
      { id: 3, name: "Bacon Deluxe", price: 14, description: "Burger with bacon and special sauce", category: "Main Course" },
      { id: 4, name: "Veggie Burger", price: 11, description: "Plant-based patty with vegetables", category: "Main Course", isVegetarian: true },
      { id: 5, name: "Craft Beer", price: 5, description: "Local craft beer", category: "Beverages" },
      { id: 6, name: "Sweet Potato Fries", price: 6, description: "Crispy sweet potato fries", category: "Appetizer", isVegetarian: true, isGlutenFree: true }
    ],
    reviews: [
      {
        id: 1,
        userName: "João Silva",
        rating: 4,
        comment: "Great burgers and craft beer selection. Perfect for a casual meal with friends!",
        date: "2024-01-13",
        helpful: 11
      }
    ]
  }
];

export const dashboardStats = {
  totalRestaurants: restaurants.length,
  aiSearches: 1247,
  userInteractions: 3421,
  averageRating: 4.5,
  coverageArea: "Príncipe Real, Lisbon"
};
