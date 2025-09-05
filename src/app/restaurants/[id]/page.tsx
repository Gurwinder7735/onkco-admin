import AdminLayout from '@/components/AdminLayout';
import { restaurants } from '@/data/restaurants';
import { 
  Star, 
  MapPin, 
  Phone, 
  ArrowLeft, 
  Utensils, 
  Clock, 
  Globe, 
  Mail, 
  Euro, 
  Users, 
  Wifi, 
  Car, 
  Heart,
  ChefHat,
  Calendar,
  Users2,
  Camera,
  ThumbsUp,
  Award,
  Leaf,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface RestaurantDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
  const { id } = await params;
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    notFound();
  }

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isOpenNow = () => {
    const currentDay = getCurrentDay();
    const hours = restaurant.openingHours[currentDay];
    if (!hours || hours === 'Closed') return false;
    
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    // Simple check - in real app you'd parse the time ranges properly
    return currentTime >= 1200 && currentTime <= 2300;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/restaurants"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Restaurants
          </Link>
          
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isOpenNow() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isOpenNow() ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>

        {/* Restaurant Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg text-white p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-purple-100 text-lg mb-4">{restaurant.cuisine} • {restaurant.priceRange} • €{restaurant.averagePrice} avg</p>
              <p className="text-purple-100 mb-4">{restaurant.description}</p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 fill-current mr-1" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="text-purple-200 ml-1">({restaurant.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-200 mr-1" />
                  <span className="text-purple-100">{restaurant.location}</span>
                </div>
                {restaurant.chef && (
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 text-purple-200 mr-1" />
                    <span className="text-purple-100">Chef {restaurant.chef}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Images */}
        {restaurant.images && restaurant.images.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Camera className="h-5 w-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Restaurant Photos</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restaurant.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${restaurant.name} photo ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Restaurant Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Restaurant Information</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {restaurant.established && (
                    <div className="text-center">
                      <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Est. {restaurant.established}</p>
                      <p className="text-xs text-gray-500">Established</p>
                    </div>
                  )}
                  {restaurant.capacity && (
                    <div className="text-center">
                      <Users2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">{restaurant.capacity}</p>
                      <p className="text-xs text-gray-500">Capacity</p>
                    </div>
                  )}
                  <div className="text-center">
                    <Euro className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">€{restaurant.averagePrice}</p>
                    <p className="text-xs text-gray-500">Average Price</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{restaurant.rating}/5</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Location */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Contact & Location</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Address</p>
                        <p className="text-sm text-gray-600">{restaurant.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <p className="text-sm text-gray-600">{restaurant.contact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {restaurant.email && (
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Email</p>
                          <p className="text-sm text-gray-600">{restaurant.email}</p>
                        </div>
                      </div>
                    )}
                    
                    {restaurant.website && (
                      <div className="flex items-start">
                        <Globe className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Website</p>
                          <a href={`https://${restaurant.website}`} className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                            {restaurant.website}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Opening Hours</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {Object.entries(restaurant.openingHours).map(([day, hours]) => (
                    <div key={day} className={`flex justify-between py-2 px-3 rounded-md ${
                      day === getCurrentDay() ? 'bg-purple-50 border border-purple-200' : ''
                    }`}>
                      <span className={`font-medium ${day === getCurrentDay() ? 'text-purple-900' : 'text-gray-900'}`}>
                        {day}
                      </span>
                      <span className={`${day === getCurrentDay() ? 'text-purple-700' : 'text-gray-600'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Amenities</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(restaurant.amenities).map(([amenity, available]) => (
                    <div key={amenity} className={`flex items-center p-3 rounded-lg ${
                      available ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
                    }`}>
                      <div className="flex-shrink-0 mr-2">
                        {amenity === 'wifi' && <Wifi className="h-4 w-4" />}
                        {amenity === 'parking' && <Car className="h-4 w-4" />}
                        {amenity === 'outdoorSeating' && <Heart className="h-4 w-4" />}
                        {amenity === 'wheelchairAccessible' && <Users className="h-4 w-4" />}
                        {amenity === 'petFriendly' && <Heart className="h-4 w-4" />}
                        {amenity === 'reservations' && <Calendar className="h-4 w-4" />}
                        {amenity === 'delivery' && <Zap className="h-4 w-4" />}
                        {amenity === 'takeaway' && <Utensils className="h-4 w-4" />}
                      </div>
                      <span className="text-sm font-medium capitalize">
                        {amenity.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Customer Reviews</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {restaurant.reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-900">{review.userName}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {review.helpful}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Menu */}
          <div className="space-y-6">
            {/* Menu Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 text-gray-400 mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                  </div>
                  <span className="text-sm text-gray-500">{restaurant.menus.length} items</span>
                </div>
              </div>
              <div className="p-6">
                {restaurant.menus.length > 0 ? (
                  <div className="space-y-4">
                    {restaurant.menus.map((menuItem) => (
                      <div key={menuItem.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h3 className="text-sm font-medium text-gray-900">{menuItem.name}</h3>
                              {menuItem.isPopular && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-purple-600 font-medium">{menuItem.category}</p>
                            <div className="flex items-center mt-1 space-x-2">
                              {menuItem.isVegetarian && (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <Leaf className="h-3 w-3 mr-1" />
                                  Veg
                                </span>
                              )}
                              {menuItem.isGlutenFree && (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  GF
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">€{menuItem.price}</p>
                          </div>
                        </div>
                        {menuItem.description && (
                          <p className="text-xs text-gray-600">{menuItem.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Utensils className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No menu items</h3>
                    <p className="mt-1 text-sm text-gray-500">This restaurant hasn't added any menu items yet.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">AI Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Generate AI Recommendations
                  </button>
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    View AI Analytics
                  </button>
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Update Menu Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
