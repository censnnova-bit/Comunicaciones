import SocialDashboard from "@/components/SocialDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Social Viz</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">v1.0.0</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-6">
        <SocialDashboard />
      </div>
    </main>
  );
}
