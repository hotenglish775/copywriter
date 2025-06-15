import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6 animate-slide-up">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-text-body leading-relaxed animate-slide-up">
            Have a project in mind? Questions about my services? I'd love to hear from you. 
            Let's discuss how we can work together to achieve your content goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-text-heading mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Email</h3>
                    <p className="text-text-body">hello@sarahmitchell.com</p>
                    <p className="text-sm text-text-light mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Phone</h3>
                    <p className="text-text-body">+1 (555) 123-4567</p>
                    <p className="text-sm text-text-light mt-1">
                      Available Mon-Fri, 9AM-5PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Location</h3>
                    <p className="text-text-body">New York, NY</p>
                    <p className="text-sm text-text-light mt-1">
                      Working with clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-navy-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-text-heading mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      What's your typical turnaround time?
                    </h4>
                    <p className="text-sm text-text-body">
                      Most projects are completed within 5-14 days, depending on scope and complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      Do you offer revisions?
                    </h4>
                    <p className="text-sm text-text-body">
                      Yes! All packages include 2-3 rounds of revisions to ensure you're completely satisfied.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      What information do you need to get started?
                    </h4>
                    <p className="text-sm text-text-body">
                      I'll need details about your business, target audience, goals, and any existing brand guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-navy-100">
                <h3 className="text-2xl font-bold text-text-heading mb-6">
                  Send a Message
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-green-800">
                      Thank you for your message! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
                      Email Address
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

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-heading mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell me about your project or ask any questions..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-gradient-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-200 h-64 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-navy-500 mx-auto mb-4" />
              <p className="text-navy-600 font-medium">Google Maps Integration</p>
              <p className="text-navy-500 text-sm">Working with clients worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;