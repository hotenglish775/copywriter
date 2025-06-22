import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }

      try {
        // In a real implementation, you'd fetch order details from your API
        // For now, we'll simulate order details
        const mockOrder = {
          id: orderId,
          product_title: 'Lead Gen Funnel Package',
          amount: 299,
          customer_email: 'customer@example.com',
          status: 'completed'
        };
        
        setOrderDetails(mockOrder);
      } catch (error) {
        console.error('Failed to fetch order details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-cyber flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
          <p className="text-text-body font-sans">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-cyber relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="bg-teal-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-500/30 shadow-glow">
            <CheckCircle className="h-12 w-12 text-text-accent" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-text-body mb-8 font-sans">
            Thank you for your purchase. Your order has been processed successfully.
          </p>
        </div>

        {orderDetails && (
          <div className="bg-navy-800/50 backdrop-blur-cyber rounded-3xl shadow-glow border border-teal-500/20 overflow-hidden mb-12">
            <div className="bg-navy-700/50 px-8 py-6 border-b border-teal-500/20">
              <h2 className="text-2xl font-serif font-bold text-text-heading">Order Details</h2>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-text-heading mb-4 font-sans">
                    Product Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-body font-sans">Product:</span>
                      <span className="text-text-heading font-semibold font-sans">
                        {orderDetails.product_title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-body font-sans">Amount:</span>
                      <span className="text-text-heading font-semibold font-sans">
                        ${orderDetails.amount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-body font-sans">Order ID:</span>
                      <span className="text-text-heading font-semibold font-mono text-sm">
                        {orderDetails.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-body font-sans">Status:</span>
                      <span className="bg-teal-500/20 text-text-accent px-3 py-1 rounded-full text-sm font-medium border border-teal-500/30 font-sans">
                        {orderDetails.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-heading mb-4 font-sans">
                    What's Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-text-accent mt-0.5" />
                      <div>
                        <div className="font-semibold text-text-heading text-sm font-sans">
                          Confirmation Email
                        </div>
                        <div className="text-text-body text-sm font-sans">
                          Check your inbox for order confirmation and next steps
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Download className="h-5 w-5 text-text-accent mt-0.5" />
                      <div>
                        <div className="font-semibold text-text-heading text-sm font-sans">
                          Project Kickoff
                        </div>
                        <div className="text-text-body text-sm font-sans">
                          I'll contact you within 24 hours to start your project
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-text-accent mt-0.5" />
                      <div>
                        <div className="font-semibold text-text-heading text-sm font-sans">
                          Project Delivery
                        </div>
                        <div className="text-text-body text-sm font-sans">
                          Your completed funnel will be delivered as scheduled
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-navy-800/30 backdrop-blur-cyber p-8 rounded-3xl border border-teal-500/20 text-center">
          <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
            Questions About Your Order?
          </h3>
          <p className="text-text-body mb-6 font-sans">
            If you have any questions or need assistance, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gradient-primary-hover transition-colors shadow-glow font-sans"
            >
              Contact Support
            </Link>
            <Link
              to="/"
              className="bg-transparent text-text-heading px-8 py-3 rounded-full font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 font-sans"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;