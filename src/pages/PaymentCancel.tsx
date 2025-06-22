import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

const PaymentCancel = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <div className="pt-20 min-h-screen bg-gradient-cyber relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="bg-red-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/30">
            <XCircle className="h-12 w-12 text-red-400" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
            Payment Cancelled
          </h1>
          
          <p className="text-xl text-text-body mb-8 font-sans">
            Your payment was cancelled. No charges have been made to your account.
          </p>
        </div>

        <div className="bg-navy-800/50 backdrop-blur-cyber rounded-3xl shadow-glow border border-teal-500/20 p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-text-heading mb-6 text-center">
            What Would You Like To Do?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-navy-700/30 rounded-2xl border border-teal-500/20">
              <RefreshCw className="h-8 w-8 text-text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                Try Again
              </h3>
              <p className="text-text-body text-sm mb-4 font-sans">
                Return to complete your purchase with a different payment method
              </p>
              <Link
                to="/services"
                className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gradient-primary-hover transition-colors shadow-glow font-sans"
              >
                Choose Service
              </Link>
            </div>
            
            <div className="text-center p-6 bg-navy-700/30 rounded-2xl border border-teal-500/20">
              <ArrowLeft className="h-8 w-8 text-text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                Browse Services
              </h3>
              <p className="text-text-body text-sm mb-4 font-sans">
                Explore our other copywriting and funnel services
              </p>
              <Link
                to="/services"
                className="bg-transparent text-text-heading px-6 py-2 rounded-full text-sm font-semibold border border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 font-sans"
              >
                View Services
              </Link>
            </div>
            
            <div className="text-center p-6 bg-navy-700/30 rounded-2xl border border-teal-500/20">
              <XCircle className="h-8 w-8 text-text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                Need Help?
              </h3>
              <p className="text-text-body text-sm mb-4 font-sans">
                Have questions about our services or payment options?
              </p>
              <Link
                to="/contact"
                className="bg-transparent text-text-heading px-6 py-2 rounded-full text-sm font-semibold border border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 font-sans"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {orderId && (
          <div className="bg-navy-800/30 backdrop-blur-cyber p-6 rounded-2xl border border-teal-500/20 text-center">
            <p className="text-text-body text-sm font-sans">
              <strong>Order ID:</strong> <span className="font-mono">{orderId}</span>
            </p>
            <p className="text-text-light text-xs mt-2 font-sans">
              Your order has been cancelled and no payment was processed.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-text-accent hover:text-teal-300 transition-colors font-sans"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;