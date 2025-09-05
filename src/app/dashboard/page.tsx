import AdminLayout from '@/components/AdminLayout';
import { dashboardStats } from '@/data/restaurants';
import { Store, ShoppingCart, DollarSign, Star } from '@/components/icons';

export default function DashboardPage() {
  const stats = [
    {
      name: 'Total Restaurants',
      value: dashboardStats.totalRestaurants,
      icon: Store,
      color: 'bg-purple-500',
      change: '+2 new',
      changeType: 'positive',
      description: 'in Príncipe Real'
    },
    {
      name: 'AI Searches',
      value: dashboardStats.aiSearches.toLocaleString(),
      icon: ShoppingCart,
      color: 'bg-blue-500',
      change: '+23%',
      changeType: 'positive',
      description: 'this month'
    },
    {
      name: 'User Interactions',
      value: dashboardStats.userInteractions.toLocaleString(),
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+18%',
      changeType: 'positive',
      description: 'platform engagement'
    },
    {
      name: 'Average Rating',
      value: dashboardStats.averageRating,
      icon: Star,
      color: 'bg-yellow-500',
      change: '+0.1',
      changeType: 'positive',
      description: 'restaurant quality'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ONKCO Dashboard</h1>
          <p className="text-gray-600">AI-powered restaurant discovery platform for Príncipe Real, Lisbon</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{stat.description}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent AI Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">AI search: "Best seafood restaurant near me"</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">User discovered "A Cevicheria" via AI recommendation</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Menu data updated for "Cantinho do Avillez"</p>
                  <p className="text-xs text-gray-500">6 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">AI generated personalized recommendations for 15 users</p>
                  <p className="text-xs text-gray-500">8 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
