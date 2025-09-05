'use client';

import AdminLayout from '@/components/AdminLayout';
import { restaurants } from '@/data/restaurants';
import { 
  Star, 
  MapPin, 
  Phone, 
  Eye, 
  Store, 
  ChefHat, 
  Euro, 
  Users, 
  Clock, 
  Wifi, 
  Car, 
  Heart, 
  Calendar,
  Award,
  Filter,
  Search,
  Grid,
  List,
  Utensils
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function RestaurantsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [cuisineFilter, setCuisineFilter] = useState<string>('all');

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || restaurant.priceRange === priceFilter;
    const matchesCuisine = cuisineFilter === 'all' || restaurant.cuisine === cuisineFilter;
    
    return matchesSearch && matchesPrice && matchesCuisine;
  });

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isOpenNow = (restaurant: typeof restaurants[0]) => {
    const currentDay = getCurrentDay();
    const hours = restaurant.openingHours[currentDay];
    if (!hours || hours === 'Closed') return false;
    
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    return currentTime >= 1200 && currentTime <= 2300;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Restaurants</h1>
            <p className="text-gray-600">AI-powered restaurant discovery in Príncipe Real, Lisbon</p>
          </div>
          <div className="text-sm text-gray-500">
            {filteredRestaurants.length} of {restaurants.length} restaurants
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search restaurants or cuisine..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Price Filter */}
            <div className="lg:w-48">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="all">All Prices</option>
                <option value="€">€ (Budget)</option>
                <option value="€€">€€ (Moderate)</option>
                <option value="€€€">€€€ (Expensive)</option>
              </select>
            </div>

            {/* Cuisine Filter */}
            <div className="lg:w-48">
              <select
                value={cuisineFilter}
                onChange={(e) => setCuisineFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="all">All Cuisines</option>
                <option value="Portuguese Contemporary">Portuguese Contemporary</option>
                <option value="Traditional Portuguese">Traditional Portuguese</option>
                <option value="Peruvian">Peruvian</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Restaurants Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Restaurant Image */}
                {restaurant.images && restaurant.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={restaurant.images[0]}
                      alt={restaurant.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        isOpenNow(restaurant) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {isOpenNow(restaurant) ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-900">
                        {restaurant.priceRange}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-sm text-purple-600 font-medium">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex items-center ml-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{restaurant.rating}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{restaurant.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Euro className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Avg Price</p>
                      <p className="text-sm font-medium text-gray-900">€{restaurant.averagePrice}</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Reviews</p>
                      <p className="text-sm font-medium text-gray-900">{restaurant.reviewCount}</p>
                    </div>
                    <div className="text-center">
                      <Utensils className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Menu Items</p>
                      <p className="text-sm font-medium text-gray-900">{restaurant.menus.length}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {restaurant.amenities.wifi && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Wifi className="h-3 w-3 mr-1" />
                        WiFi
                      </span>
                    )}
                    {restaurant.amenities.outdoorSeating && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Heart className="h-3 w-3 mr-1" />
                        Outdoor
                      </span>
                    )}
                    {restaurant.amenities.delivery && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Delivery
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/restaurants/${restaurant.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  {/* Restaurant Image */}
                  {restaurant.images && restaurant.images.length > 0 && (
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={restaurant.images[0]}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            isOpenNow(restaurant) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {isOpenNow(restaurant) ? 'Open' : 'Closed'}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {restaurant.priceRange}
                          </span>
                        </div>
                        
                        <p className="text-sm text-purple-600 font-medium mb-2">{restaurant.cuisine}</p>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {restaurant.location}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            {restaurant.rating} ({restaurant.reviewCount} reviews)
                          </div>
                          <div className="flex items-center">
                            <Euro className="h-4 w-4 mr-1" />
                            €{restaurant.averagePrice} avg
                          </div>
                          <div className="flex items-center">
                            <Utensils className="h-4 w-4 mr-1" />
                            {restaurant.menus.length} menu items
                          </div>
                        </div>
                      </div>

                      <div className="ml-4">
                        <Link
                          href={`/restaurants/${restaurant.id}`}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <Store className="h-12 w-12" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No restaurants found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || priceFilter !== 'all' || cuisineFilter !== 'all' 
                ? 'Try adjusting your search or filters.' 
                : 'Get started by adding your first restaurant.'
              }
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
