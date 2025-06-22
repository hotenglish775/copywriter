import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, CreditCard, Coins, Lock, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    price: string;
    description: string;
    features: string[];
  };
}

interface PaymentFormData {
  fullName: string;
  email: string;
  phone: string;
  paymentMethod: 'stripe' | 'cryptomus';
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, product }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success' | 'error'>('form');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<PaymentFormData>({
    defaultValues: {
      paymentMethod: 'stripe'
    }
  });
  
  const paymentMethod = watch('paymentMethod');

  const onSubmit = async (data: PaymentFormData) => {
    setIsProcessing(true);
    setPaymentStep('processing');
    setErrorMessage('');

    try {
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          product: {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description
          }
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Payment processing failed');
      }

      if (data.paymentMethod === 'stripe') {
        // Redirect to Stripe Checkout
        window.location.href = result.checkoutUrl;
      } else {
        // Handle Cryptomus payment
        setPaymentStep('success');
        // You could show QR code or payment instructions here
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setPaymentStep('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      reset();
      setPaymentStep('form');
      setErrorMessage('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-navy-800/95 backdrop-blur-cyber rounded-3xl shadow-glow-lg border border-teal-500/30 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-teal-500/20">
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-heading">
              Complete Your Purchase
            </h2>
            <p className="text-text-body font-sans">
              Secure payment processing with multiple options
            </p>
          </div>
          <button
            onClick={handleClose}
            disabled={isProcessing}
            className="p-2 text-text-light hover:text-text-accent transition-colors rounded-lg hover:bg-teal-500/10 disabled:opacity-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Product Summary */}
        <div className="p-6 bg-navy-700/30 border-b border-teal-500/20">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-serif font-bold text-text-heading mb-2">
                {product.title}
              </h3>
              <p className="text-text-body text-sm mb-3 font-sans">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-teal-500/20 text-text-accent px-3 py-1 rounded-full text-xs font-medium border border-teal-500/30 font-sans"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-serif font-bold text-text-accent">
                {product.price}
              </div>
              <div className="text-sm text-text-light font-sans">
                One-time payment
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="p-6">
          {paymentStep === 'form' && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Customer Information */}
              <div>
                <h4 className="text-lg font-serif font-semibold text-text-heading mb-4">
                  Customer Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-text-heading mb-2 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light font-sans"
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400 font-sans">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light font-sans"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 font-sans">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-text-heading mb-2 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light font-sans"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h4 className="text-lg font-serif font-semibold text-text-heading mb-4">
                  Payment Method
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <label
                    className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      paymentMethod === 'stripe'
                        ? 'border-teal-500 bg-teal-500/10 shadow-cyber'
                        : 'border-teal-500/30 hover:border-teal-500/50 bg-navy-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      value="stripe"
                      {...register('paymentMethod')}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-heading font-sans">Credit Card</div>
                        <div className="text-sm text-text-body font-sans">Visa, Mastercard, Amex</div>
                      </div>
                    </div>
                    {paymentMethod === 'stripe' && (
                      <div className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full shadow-glow"></div>
                    )}
                  </label>

                  <label
                    className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      paymentMethod === 'cryptomus'
                        ? 'border-teal-500 bg-teal-500/10 shadow-cyber'
                        : 'border-teal-500/30 hover:border-teal-500/50 bg-navy-700/30'
                    }`}
                  >
                    <input
                      type="radio"
                      value="cryptomus"
                      {...register('paymentMethod')}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-2 rounded-lg shadow-glow">
                        <Coins className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-heading font-sans">Cryptocurrency</div>
                        <div className="text-sm text-text-body font-sans">BTC, ETH, USDT, etc.</div>
                      </div>
                    </div>
                    {paymentMethod === 'cryptomus' && (
                      <div className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full shadow-glow"></div>
                    )}
                  </label>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-navy-700/30 p-4 rounded-xl border border-teal-500/20">
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-text-heading text-sm font-sans">
                      Secure Payment Processing
                    </div>
                    <div className="text-text-body text-sm mt-1 font-sans">
                      Your payment information is encrypted and processed securely. We never store your payment details.
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-gradient-primary-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center shadow-glow hover:shadow-glow-lg animate-pulse-glow font-sans"
              >
                {isProcessing ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-3" />
                    Processing...
                  </>
                ) : (
                  <>
                    Complete Purchase {product.price}
                    <Lock className="ml-3 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {paymentStep === 'processing' && (
            <div className="text-center py-12">
              <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow animate-pulse-glow">
                <Loader className="h-10 w-10 text-white animate-spin" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
                Processing Payment
              </h3>
              <p className="text-text-body font-sans">
                Please wait while we securely process your payment...
              </p>
            </div>
          )}

          {paymentStep === 'success' && (
            <div className="text-center py-12">
              <div className="bg-teal-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-500/30">
                <CheckCircle className="h-10 w-10 text-text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
                Payment Successful!
              </h3>
              <p className="text-text-body mb-6 font-sans">
                Your order has been processed successfully. You'll receive a confirmation email shortly.
              </p>
              <button
                onClick={handleClose}
                className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gradient-primary-hover transition-colors shadow-glow font-sans"
              >
                Continue
              </button>
            </div>
          )}

          {paymentStep === 'error' && (
            <div className="text-center py-12">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <AlertCircle className="h-10 w-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
                Payment Failed
              </h3>
              <p className="text-text-body mb-6 font-sans">
                {errorMessage || 'There was an error processing your payment. Please try again.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setPaymentStep('form')}
                  className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gradient-primary-hover transition-colors shadow-glow font-sans"
                >
                  Try Again
                </button>
                <button
                  onClick={handleClose}
                  className="bg-transparent text-text-heading px-8 py-3 rounded-full font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 font-sans"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;