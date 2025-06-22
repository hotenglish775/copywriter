import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Lead Gen Funnel Overhaul',
      client: 'TechFlow',
      category: 'Lead Gen Funnels',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Complete lead generation funnel redesign that increased lead quality by 85% and conversion rates by 65%.',
      results: '+85% lead quality, +65% conversion rate',
      tags: ['Lead Generation', 'Funnel Optimization', 'B2B'],
    },
    {
      id: 2,
      title: 'E-commerce Sales Funnel',
      client: 'EcoBeauty',
      category: 'Ecom Sales Funnels',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Multi-step sales funnel with upsells and cross-sells that boosted average order value by 40%.',
      results: '+40% AOV, +30% conversion rate',
      tags: ['E-commerce', 'Sales Funnel', 'Upsells'],
    },
    {
      id: 3,
      title: 'AI-Powered Lead System',
      client: 'FinanceFirst',
      category: 'AI-Powered Automation',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Automated lead nurturing system with AI chatbots and follow-up sequences generating 50+ qualified leads daily.',
      results: '50+ daily leads, 35% automation rate',
      tags: ['AI Automation', 'Lead Nurturing', 'Chatbots'],
    },
    {
      id: 4,
      title: 'Google Search Funnel Campaign',
      client: 'HealthHub Pro',
      category: 'Google Search Funnels',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'SEO-optimized funnel targeting high-intent search traffic with 200% organic growth in 6 months.',
      results: '200% organic growth, 45% search conversion',
      tags: ['SEO', 'Search Marketing', 'Organic Traffic'],
    },
    {
      id: 5,
      title: 'Complete Funnel Overhaul',
      client: 'Creative Minds Agency',
      category: 'Funnel Overhauls',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'End-to-end funnel reconstruction for digital marketing agency, from ad copy to client onboarding.',
      results: '+120% qualified leads, +80% client retention',
      tags: ['Agency', 'Complete Overhaul', 'B2B Services'],
    },
    {
      id: 6,
      title: 'Ad Copy Testing Campaign',
      client: 'FitTech Startup',
      category: 'Ad Copy & Testing',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Comprehensive ad copy testing pack with 15+ variations that reduced cost-per-acquisition by 60%.',
      results: '-60% CPA, +90% click-through rate',
      tags: ['Ad Copy', 'A/B Testing', 'Performance Marketing'],
    },
    {
      id: 7,
      title: 'Lead Magnet + Landing Page',
      client: 'ConsultPro',
      category: 'Lead Magnets',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'High-converting lead magnet with dedicated landing page that captured 2,000+ leads in first month.',
      results: '2,000+ leads, 42% opt-in rate',
      tags: ['Lead Magnets', 'Landing Pages', 'Consulting'],
    },
    {
      id: 8,
      title: 'AI Follow-Up Automation',
      client: 'RealEstate Pro',
      category: 'AI-Powered Automation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'AI-powered follow-up system with personalized sequences that increased appointment bookings by 75%.',
      results: '+75% appointments, 25% automation savings',
      tags: ['AI Automation', 'Real Estate', 'Appointment Setting'],
    },
    {
      id: 9,
      title: 'Offer Positioning Refresh',
      client: 'SaaS Solutions Inc',
      category: 'Offer Positioning',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
      description: 'Complete offer restructuring and positioning that transformed a struggling SaaS into market leader.',
      results: '+300% trial signups, +150% conversions',
      tags: ['SaaS', 'Offer Positioning', 'Market Leadership'],
    },
  ];

  const categories = [
    'All', 
    'Lead Gen Funnels', 
    'Ecom Sales Funnels', 
    'Google Search Funnels',
    'AI-Powered Automation', 
    'Ad Copy & Testing',
    'Lead Magnets',
    'Funnel Overhauls',
    'Offer Positioning'
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-cyber relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6 animate-slide-up">
            Portfolio
          </h1>
          <p className="text-xl text-text-body leading-relaxed animate-slide-up font-sans">
            Real funnel projects, real results. Explore successful copywriting campaigns that delivered 
            measurable growth through strategic funnel building and AI-powered automation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-navy-900 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-6">
              <Filter className="h-5 w-5 text-text-accent" />
              <span className="text-text-body font-medium font-sans">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-sans ${
                    activeFilter === category
                      ? 'bg-gradient-primary text-white shadow-glow'
                      : 'bg-teal-500/20 text-text-body hover:bg-teal-500/30 hover:shadow-cyber border border-teal-500/30'
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
      <section className="py-16 lg:py-24 bg-gradient-navy relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-navy-800/50 backdrop-blur-cyber rounded-3xl shadow-soft hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group animate-fade-in hover:shadow-glow border border-teal-500/20 hover:border-teal-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-navy-800/90 backdrop-blur-sm p-2 rounded-full shadow-glow border border-teal-500/30">
                      <ExternalLink className="h-4 w-4 text-text-accent" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-text-accent font-sans">
                      {project.client}
                    </span>
                    <span className="bg-teal-500/20 text-text-accent px-3 py-1 rounded-full text-xs font-medium font-sans border border-teal-500/30">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-text-heading mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-body mb-4 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-4 rounded-2xl mb-4 border border-teal-500/30">
                    <span className="text-sm font-semibold text-text-accent font-sans">Results: </span>
                    <span className="text-sm text-text-body font-sans">{project.results}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-navy-700/50 text-text-body px-3 py-1 rounded-full text-xs font-medium font-sans hover:bg-navy-600/50 transition-colors border border-navy-600/30"
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
      <section className="py-16 lg:py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              Proven Funnel Results
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto font-sans">
              These numbers represent real business impact achieved through strategic funnel building and copywriting
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Funnels Built', description: 'Complete funnel systems delivered' },
              { number: '65%', label: 'Average Conversion Lift', description: 'Improvement in funnel performance' },
              { number: '$5M+', label: 'Revenue Generated', description: 'Through optimized funnels' },
              { number: '50+', label: 'AI Automations', description: 'Deployed and optimized' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-navy-800/50 backdrop-blur-cyber rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 border border-teal-500/20">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-text-accent mb-1 font-sans">
                  {stat.label}
                </div>
                <div className="text-sm text-text-body font-sans">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-text-body font-sans">
              Deep dives into our most successful funnel transformations
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'TechFlow: 85% Lead Quality Improvement',
                challenge: 'Low-quality leads flooding their sales team',
                solution: 'Complete lead gen funnel overhaul with qualification sequences',
                result: '85% improvement in lead quality, 65% higher conversion rates'
              },
              {
                title: 'EcoBeauty: $250K Revenue Boost',
                challenge: 'Low average order value and poor upsell performance',
                solution: 'Multi-step sales funnel with strategic upsells and cross-sells',
                result: '40% increase in AOV, $250K additional revenue in 3 months'
              },
              {
                title: 'FinanceFirst: 50+ Daily Qualified Leads',
                challenge: 'Manual lead follow-up consuming too much time',
                solution: 'AI-powered automation with personalized nurture sequences',
                result: '50+ qualified leads daily, 75% reduction in manual work'
              }
            ].map((study, index) => (
              <div key={index} className="bg-navy-800/30 backdrop-blur-cyber p-8 rounded-3xl shadow-soft border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-accent mb-2 font-sans">Challenge</h4>
                    <p className="text-text-body text-sm font-sans">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-accent mb-2 font-sans">Solution</h4>
                    <p className="text-text-body text-sm font-sans">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-accent mb-2 font-sans">Result</h4>
                    <p className="text-text-body text-sm font-bold font-sans">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-text-body mb-8 leading-relaxed font-sans">
            Let's build high-converting funnels and automated systems that deliver similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-gradient-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 font-sans animate-pulse-glow"
            >
              Start Your Funnel Project
            </a>
            <a
              href="/contact"
              className="bg-transparent text-text-heading px-10 py-5 rounded-full text-xl font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 transform hover:scale-105 font-sans hover:shadow-glow"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;