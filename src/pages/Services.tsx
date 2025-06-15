import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Search, ShoppingCart, Megaphone, TestTube, 
  FileText, MessageSquare, RefreshCw, Wrench, Hammer,
  Bot, Zap, Brain, Lightbulb, MessageCircle, 
  Star, Share2, Calendar, Video, Crown
} from 'lucide-react';

const Services = () => {
  const tier1Services = [
    {
      icon: Target,
      title: 'Lead Gen Funnel Package',
      description: 'Complete lead generation funnel with landing page, opt-in forms, and nurture sequence',
      price: '$300–$500',
      features: ['Landing page copy', 'Lead magnet content', 'Email sequence', 'Thank you page']
    },
    {
      icon: Search,
      title: 'Google Search Funnel Package',
      description: 'SEO-optimized funnel designed to capture and convert search traffic',
      price: '$400–$600',
      features: ['SEO landing pages', 'Search-focused copy', 'Local SEO content', 'Conversion optimization']
    },
    {
      icon: ShoppingCart,
      title: 'Ecom Sales Funnel Package',
      description: 'E-commerce focused sales funnel with product pages and checkout optimization',
      price: '$350–$550',
      features: ['Product descriptions', 'Sales pages', 'Cart abandonment emails', 'Upsell sequences']
    },
    {
      icon: Megaphone,
      title: 'Starter Ads & Offer Setup',
      description: 'Ad copy and offer positioning for new advertising campaigns',
      price: '$150–$300',
      features: ['Ad headlines', 'Offer positioning', 'CTA optimization', 'Audience targeting copy']
    },
    {
      icon: TestTube,
      title: 'Ad Copy Testing Pack',
      description: 'Multiple ad variations for A/B testing and optimization',
      price: '$150 one-time / $100 retainer',
      features: ['5+ ad variations', 'Testing framework', 'Performance tracking', 'Monthly updates']
    }
  ];

  const tier2Services = [
    {
      icon: FileText,
      title: 'Lead Magnet Creation + Page Copy',
      description: 'High-converting lead magnets with dedicated landing pages',
      price: '$200–$350',
      features: ['Lead magnet content', 'Landing page copy', 'Opt-in forms', 'Thank you sequence']
    },
    {
      icon: MessageSquare,
      title: 'Follow-Up Script Pack',
      description: 'Email and SMS follow-up sequences for lead nurturing',
      price: '$100–$200',
      features: ['Email sequences', 'SMS scripts', 'Follow-up timing', 'Conversion tracking']
    },
    {
      icon: RefreshCw,
      title: 'Offer Rebuild & Positioning Refresh',
      description: 'Complete offer restructuring and market positioning',
      price: '$250–$400',
      features: ['Market analysis', 'Offer restructuring', 'Value proposition', 'Pricing strategy']
    },
    {
      icon: Wrench,
      title: 'Mini Funnel Audit + Upgrade',
      description: 'Quick funnel analysis with optimization recommendations',
      price: '$100–$250',
      features: ['Funnel analysis', 'Conversion audit', 'Copy improvements', 'Implementation guide']
    },
    {
      icon: Hammer,
      title: 'Complete Funnel Overhaul',
      description: 'Full funnel reconstruction from strategy to implementation',
      price: '$750–$1,200',
      features: ['Strategy development', 'Complete rewrite', 'A/B test setup', 'Performance monitoring']
    }
  ];

  const tier3Services = [
    {
      icon: Bot,
      title: 'AI Ad Variation Generator',
      description: 'AI-powered system for generating unlimited ad variations',
      price: '$100–$250',
      features: ['Custom AI prompts', 'Variation templates', 'Brand voice training', 'Output optimization']
    },
    {
      icon: Zap,
      title: 'AI Lead Follow-Up Automation',
      description: 'Automated follow-up sequences powered by AI personalization',
      price: '$150–$300',
      features: ['AI personalization', 'Behavioral triggers', 'Dynamic content', 'Performance analytics']
    },
    {
      icon: Brain,
      title: 'AI Lead Magnet Creator',
      description: 'AI system for creating targeted lead magnets at scale',
      price: '$200–$400',
      features: ['Content generation', 'Design templates', 'Audience targeting', 'Performance tracking']
    },
    {
      icon: Lightbulb,
      title: 'AI Offer Angle Generator',
      description: 'Generate multiple offer angles and positioning strategies',
      price: '$150–$250',
      features: ['Angle generation', 'Market research', 'Competitor analysis', 'Testing framework']
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Script + Setup',
      description: 'Conversational chatbot scripts for lead qualification',
      price: '$200–$400',
      features: ['Conversation flows', 'Lead qualification', 'Integration setup', 'Response optimization']
    },
    {
      icon: Star,
      title: 'AI Testimonial Collector',
      description: 'Automated system for collecting and organizing testimonials',
      price: '$100–$250',
      features: ['Collection automation', 'Review prompts', 'Organization system', 'Display optimization']
    },
    {
      icon: Share2,
      title: 'Social Proof Automation Kit',
      description: 'Automated social proof collection and display system',
      price: '$150–$300',
      features: ['Proof collection', 'Display widgets', 'Automation rules', 'Performance tracking']
    },
    {
      icon: Calendar,
      title: 'Auto-Scheduling Lead Flow',
      description: 'Automated scheduling system for lead appointments',
      price: '$200–$350',
      features: ['Booking automation', 'Calendar integration', 'Reminder sequences', 'No-show prevention']
    },
    {
      icon: Video,
      title: 'AI Video Script Generator + Tools',
      description: 'AI-powered video script creation with production tools',
      price: '$250–$450',
      features: ['Script generation', 'Storyboard creation', 'Voice-over tools', 'Video optimization']
    }
  ];

  const premiumFeatures = [
    'Full Funnel Build (Ad Copy, Targeting, Landing Page)',
    'Lead Magnet Creation',
    'Follow-Up Scripts & Setup',
    'AI Chatbot for FB or Website',
    'Short Video Script + AI Voiceover',
    '30-Day Results Booster',
    'BONUS: CRM + Review Automation Templates'
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6 animate-slide-up">
            Copywriting Services That Convert
          </h1>
          <p className="text-xl text-text-body leading-relaxed animate-slide-up font-sans">
            Choose from our tiered service packages designed to grow your business at every stage. 
            From starter funnels to AI-powered automation, we have the perfect solution for your needs.
          </p>
        </div>
      </section>

      {/* Tier 1 - Core Starter Funnels */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-glow">
              💡 TIER 1
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              Core Starter Funnels
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto font-sans">
              Essential funnel packages to get your business generating leads and sales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier1Services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 border border-teal-100 group animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-teal-700" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-text-heading mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-body mb-4 leading-relaxed font-sans">
                  {service.description}
                </p>

                <div className="text-2xl font-bold text-teal-600 mb-4 font-serif">
                  {service.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-body font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className="w-full bg-gradient-primary text-white py-3 px-6 rounded-full font-medium hover:bg-gradient-primary-hover hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-center block font-sans"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 - Value-Add & Growth Packages */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-navy-900 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-glow">
              🧱 TIER 2
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              Value-Add & Growth Packages
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto font-sans">
              Advanced services to optimize and scale your existing funnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier2Services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 border border-navy-200 group animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-navy-100 to-navy-200 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-navy-700" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-text-heading mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-body mb-4 leading-relaxed font-sans">
                  {service.description}
                </p>

                <div className="text-2xl font-bold text-navy-600 mb-4 font-serif">
                  {service.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-navy-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-body font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className="w-full bg-navy-900 text-white py-3 px-6 rounded-full font-medium hover:bg-navy-800 hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-center block font-sans"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 - AI-Powered Add-Ons */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-glow">
              🤖 TIER 3
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              AI-Powered Add-Ons
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto font-sans">
              Cutting-edge AI automation tools to supercharge your marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier3Services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 group animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-blue-700" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-text-heading mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-body mb-4 leading-relaxed font-sans">
                  {service.description}
                </p>

                <div className="text-2xl font-bold text-blue-600 mb-4 font-serif">
                  {service.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-body font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-full font-medium hover:from-blue-700 hover:to-teal-700 hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-center block font-sans"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Package Section */}
      <section className="py-16 lg:py-24 bg-navy-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-glow-lg">
              <Crown className="h-6 w-6 mr-3" />
              💼 PREMIUM OFFER
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              All-In-One Growth Package
            </h2>
            <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-8 font-serif">
              $950–$1,500
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
              Everything you need to build, launch, and scale your business with cutting-edge automation
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 shadow-glow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-200 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-teal-100 p-6 rounded-2xl mb-6">
                  <h4 className="text-lg font-bold text-navy-900 mb-2 font-serif">30-Day Results Guarantee</h4>
                  <p className="text-navy-700 text-sm font-sans">
                    See measurable improvements in your conversion rates within 30 days, or we'll work with you until you do.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 text-center font-sans"
                  >
                    Get This Package
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 transform hover:scale-105 text-center font-sans"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-text-body font-sans">
              A streamlined process designed for maximum results and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, audience, and goals to create the perfect strategy' },
              { step: '02', title: 'Strategy', description: 'Custom funnel strategy developed specifically for your market and objectives' },
              { step: '03', title: 'Creation', description: 'Professional copywriting and funnel building with your brand voice in mind' },
              { step: '04', title: 'Optimization', description: 'Continuous testing and optimization to maximize your conversion rates' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-xl font-bold text-white font-serif">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-heading mb-2 font-serif">
                  {process.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed font-sans">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-text-body mb-8 leading-relaxed font-sans">
            Choose the perfect package for your business stage and start seeing results within 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 font-sans"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="bg-white text-text-heading px-10 py-5 rounded-full text-xl font-semibold border-2 border-teal-200 hover:border-teal-400 hover:shadow-soft transition-all duration-300 transform hover:scale-105 font-sans"
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