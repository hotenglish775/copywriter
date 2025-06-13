import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, BookOpen, FileText, Mail, Search, Edit, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Copywriting',
      description: 'Complete website copy that converts visitors into customers with compelling headlines, persuasive product descriptions, and clear calls-to-action.',
      features: [
        'Homepage copy that captures attention',
        'About page that builds trust',
        'Service pages that sell',
        'Landing pages optimized for conversion',
      ],
      price: 'Starting at $1,200',
    },
    {
      icon: BookOpen,
      title: 'Blog Articles',
      description: 'SEO-optimized blog content that establishes authority, drives traffic, and engages your audience with valuable, actionable insights.',
      features: [
        'Keyword research and optimization',
        'Engaging, shareable content',
        'Industry expertise and thought leadership',
        'Content calendar planning',
      ],
      price: 'Starting at $299',
    },
    {
      icon: FileText,
      title: 'Sales Pages',
      description: 'High-converting sales pages that tell your story, address objections, and guide prospects through a compelling buying journey.',
      features: [
        'Psychological triggers and persuasion',
        'Compelling storytelling',
        'Objection handling',
        'A/B testing recommendations',
      ],
      price: 'Starting at $1,500',
    },
    {
      icon: Mail,
      title: 'Email Sequences',
      description: 'Strategic email campaigns that nurture leads, build relationships, and drive sales through personalized, value-driven messaging.',
      features: [
        'Welcome series automation',
        'Sales funnel sequences',
        'Newsletter campaigns',
        'Segmentation strategies',
      ],
      price: 'Starting at $800',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Content optimization that improves search rankings while maintaining readability and user engagement for maximum visibility.',
      features: [
        'Keyword strategy development',
        'On-page optimization',
        'Meta descriptions and titles',
        'Content structure for SEO',
      ],
      price: 'Starting at $500',
    },
    {
      icon: Edit,
      title: 'Editing & Proofreading',
      description: 'Professional editing services that polish your existing content for clarity, consistency, and maximum impact.',
      features: [
        'Copy editing for clarity',
        'Proofreading for errors',
        'Style and tone consistency',
        'Brand voice alignment',
      ],
      price: 'Starting at $200',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for small businesses getting started',
      features: [
        'One blog post (1,000 words)',
        'SEO optimization',
        'Basic keyword research',
        '2 rounds of revisions',
        '5-day turnaround',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$799',
      description: 'Ideal for growing businesses',
      features: [
        'Complete website copy (Home, About, Services)',
        'Up to 3,000 words total',
        'SEO optimization',
        'Competitor analysis',
        '3 rounds of revisions',
        '7-day turnaround',
        'Brand voice guidelines',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Elite',
      price: '$1,499',
      description: 'Complete copywriting solution',
      features: [
        'Full brand copywriting package',
        'Website copy + blog articles',
        'Email sequence (5-part series)',
        'SEO content strategy',
        'Unlimited revisions',
        '14-day turnaround',
        'Content calendar (3 months)',
        '1-hour strategy call',
      ],
      cta: 'Get Started',
      popular: false,
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Services That Drive Results
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-slide-up">
            Professional copywriting services designed to transform your business communication 
            and accelerate your growth through strategic, conversion-focused content.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-beige-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-beige-200 transition-colors">
                  <service.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    {service.price}
                  </span>
                  <Link
                    to="/booking"
                    className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center group"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your needs and budget. All packages include dedicated support and satisfaction guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  tier.popular ? 'ring-2 ring-gray-900 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`w-full py-3 px-6 rounded-full font-medium text-center transition-colors block ${
                      tier.popular
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined process designed for maximum results and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We discuss your goals, audience, and project requirements' },
              { step: '02', title: 'Strategy', description: 'I develop a content strategy tailored to your objectives' },
              { step: '03', title: 'Creation', description: 'Professional copywriting with your brand voice in mind' },
              { step: '04', title: 'Delivery', description: 'Final copy delivered with revisions and optimization tips' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-beige-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-700">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create copy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Book a Project
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;