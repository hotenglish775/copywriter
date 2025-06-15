import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, DollarSign, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingFormData {
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  deadline: string;
  projectDetails: string;
}

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<BookingFormData>();
  
  const projectType = watch('projectType');

  const projectTypes = [
    { value: 'blog', label: 'Blog Article', price: '$299+' },
    { value: 'website', label: 'Website Copy', price: '$799+' },
    { value: 'email', label: 'Email Sequence', price: '$800+' },
    { value: 'sales', label: 'Sales Page', price: '$1,500+' },
    { value: 'seo', label: 'SEO Content', price: '$500+' },
    { value: 'other', label: 'Other', price: 'Custom' },
  ];

  const budgetRanges = [
    '$299 - $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Not sure yet'
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Here you would typically send the data to your backend/Supabase
      console.log('Booking form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just simulate success
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      setSubmitError('There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-navy-50 to-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-navy-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-text-heading mb-4">
              Thank You for Your Booking!
            </h1>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              I've received your project request and will get back to you within 24 hours with next steps, 
              timeline, and any additional questions I might have.
            </p>
            <div className="bg-navy-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-text-body">
                <strong>What happens next:</strong><br />
                • I'll review your project details<br />
                • Send you a detailed proposal and timeline<br />
                • Schedule a brief call to discuss your goals<br />
                • Get started on creating amazing copy for you!
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:bg-gradient-primary-hover transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6 animate-slide-up">
            Book Your Project
          </h1>
          <p className="text-xl text-text-body leading-relaxed animate-slide-up">
            Ready to get started? Fill out the form below and I'll send you a detailed proposal 
            within 24 hours. Let's create copy that converts!
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden">
            <div className="bg-navy-50 px-8 py-6 border-b border-navy-200">
              <h2 className="text-2xl font-bold text-text-heading">Project Details</h2>
              <p className="text-text-body mt-2">
                Tell me about your project so I can provide the best possible service
              </p>
            </div>

            {submitError && (
              <div className="mx-8 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-text-heading mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
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
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-text-heading mb-3">
                  Project Type *
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        projectType === type.value
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-navy-200 hover:border-navy-300'
                      }`}
                    >
                      <input
                        type="radio"
                        value={type.value}
                        {...register('projectType', { required: 'Please select a project type' })}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-heading">{type.label}</span>
                          <span className="text-sm text-text-light">{type.price}</span>
                        </div>
                      </div>
                      {projectType === type.value && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full"></div>
                      )}
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-2 text-sm text-red-600">{errors.projectType.message}</p>
                )}
              </div>

              {/* Budget and Deadline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-heading mb-2">
                    <DollarSign className="inline h-4 w-4 mr-1" />
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    {...register('budget', { required: 'Please select a budget range' })}
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-text-heading mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    {...register('deadline')}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-text-heading mb-2">
                  <FileText className="inline h-4 w-4 mr-1" />
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  rows={6}
                  {...register('projectDetails', { required: 'Please provide project details' })}
                  className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your project in detail. Include information about:
• Your business and target audience
• Current challenges or goals
• Specific requirements or preferences
• Any existing content or brand guidelines
• Expected outcomes or success metrics"
                ></textarea>
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectDetails.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="border-t border-navy-200 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm text-text-body">
                      By submitting this form, you agree to receive a project proposal and further communication about your project.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gradient-primary-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      'Submit Project Request'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-text-body">
              Here's my simple, transparent process for new projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Review & Response',
                description: 'I\'ll review your project details and respond within 24 hours with initial thoughts and questions.',
                time: 'Within 24 hours'
              },
              {
                step: '2',
                title: 'Proposal & Call',
                description: 'You\'ll receive a detailed proposal with timeline, pricing, and next steps. We can schedule a call if needed.',
                time: '2-3 days'
              },
              {
                step: '3',
                title: 'Project Kickoff',
                description: 'Once approved, I\'ll send a contract and get started on creating amazing copy for your business.',
                time: '1-2 days'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-text-body mb-2 leading-relaxed">
                  {step.description}
                </p>
                <span className="text-sm font-medium text-text-light">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;