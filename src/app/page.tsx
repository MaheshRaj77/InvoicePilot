import Link from 'next/link';
import { ArrowRight, CheckCircle, BarChart3, FileText, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">InvoicePilot</div>
          <div className="space-x-4">
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Invoice Management
            {' '}
            <span className="text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, manage, and send invoices with ease. Built for businesses of all sizes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/features"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Features That Make a Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'feat-invoices',
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: 'Professional Invoices',
                description: 'Create customizable invoices with your company branding.',
              },
              {
                id: 'feat-customers',
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Customer Management',
                description: 'Manage unlimited customers and their billing information.',
              },
              {
                id: 'feat-reports',
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: 'Advanced Reports',
                description: 'Track revenue, expenses, and financial metrics in real-time.',
              },
            ].map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow">
                {feature.icon}
                <h3 className="text-lg font-medium text-gray-900 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose InvoicePilot?
          </h2>
          <div className="space-y-4">
            {[
              {
                id: 'ben-time',
                text: 'Save time with automated invoice generation',
              },
              {
                id: 'ben-payment',
                text: 'Never miss a payment with payment reminders',
              },
              {
                id: 'ben-access',
                text: 'Access your invoices from anywhere',
              },
              {
                id: 'ben-storage',
                text: 'Secure cloud storage for all documents',
              },
              {
                id: 'ben-users',
                text: 'Multi-user support with role-based access',
              },
              {
                id: 'ben-gst',
                text: 'GST compliance for Indian businesses',
              },
            ].map((benefit) => (
              <div key={benefit.id} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-lg text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Simplify Your Invoicing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses already using InvoicePilot.
          </p>
          <Link
            href="/auth/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 font-medium"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">InvoicePilot</h3>
            <p className="text-gray-400 text-sm">Professional invoice management for modern businesses.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} InvoicePilot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
