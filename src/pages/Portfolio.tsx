import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'SaaS Landing Page Redesign',
      client: 'TechFlow Solutions',
      category: 'Website Copy',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Complete homepage redesign that increased signups by 65% and improved user engagement metrics.',
      results: '+65% signups, +40% time on page',
      tags: ['SaaS', 'Conversion', 'Landing Page'],
    },
    {
      id: 2,
      title: 'E-commerce Product Descriptions',
      client: 'EcoBeauty',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Compelling product descriptions for 50+ beauty products that boosted conversion rates.',
      results: '+30% conversion rate, +25% average order value',
      tags: ['E-commerce', 'Beauty', 'Product Copy'],
    },
    {
      id: 3,
      title: 'Email Welcome Series',
      client: 'FinanceFirst',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: '7-part email sequence that nurtures leads and converts them into paying customers.',
      results: '35% open rate, 8% conversion rate',
      tags: ['Email', 'Finance', 'Automation'],
    },
    {
      id: 4,
      title: 'Blog Content Strategy',
      client: 'HealthHub',
      category: 'Blog Content',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Monthly blog articles that established thought leadership and drove organic traffic.',
      results: '50K monthly visitors, 200% organic growth',
      tags: ['SEO', 'Health', 'Content Strategy'],
    },
    {
      id: 5,
      title: 'Agency Website Overhaul',
      client: 'Creative Minds Agency',
      category: 'Website Copy',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Complete website copy refresh for a digital marketing agency, focusing on trust and expertise.',
      results: '+50% qualified leads, +35% consultation bookings',
      tags: ['Agency', 'B2B', 'Professional Services'],
    },
    {
      id: 6,
      title: 'Product Launch Campaign',
      client: 'FitTech',
      category: 'Sales Pages',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Multi-page sales funnel for fitness app launch, including landing pages and email sequences.',
      results: '$250K revenue in first month',
      tags: ['Fitness', 'App Launch', 'Sales Funnel'],
    },
  ];

  const categories = ['All', 'Website Copy', 'E-commerce', 'Email Marketing', 'Blog Content', 'Sales Pages'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-slide-up">
            Real projects, real results. Explore successful copywriting campaigns that delivered 
            measurable growth for businesses across various industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-6">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500">
                      {project.client}
                    </span>
                    <span className="bg-beige-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-beige-50 p-3 rounded-lg mb-4">
                    <span className="text-sm font-medium text-gray-900">Results: </span>
                    <span className="text-sm text-gray-700">{project.results}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers represent real business impact achieved through strategic copywriting
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed', description: 'Successful copywriting projects' },
              { number: '40%', label: 'Average Conversion Lift', description: 'Improvement in conversion rates' },
              { number: '$2M+', label: 'Revenue Generated', description: 'For clients through copy' },
              { number: '98%', label: 'Client Satisfaction', description: 'Happy clients and referrals' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's create compelling copy that drives similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              View More Examples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;