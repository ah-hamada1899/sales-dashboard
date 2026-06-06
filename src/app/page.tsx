import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sales Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Interactive sales dashboard with multiple chart types, filtering, and real-time data visualization
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Multiple Chart Types</h3>
            <p className="text-gray-600">Switch between bar, line, and pie charts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Custom Filtering</h3>
            <p className="text-gray-600">Set your own sales threshold</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">Toggle between mock and API data</p>
          </div>
        </div>
      </div>
    </div>
  );
}