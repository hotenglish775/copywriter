import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, Target, Search, ShoppingCart, Megaphone, TestTube, Bot } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Gen Funnels',
      description: 'Complete lead generation systems that capture and convert your ideal prospects',
    },
    {
      icon: Search,
      title: 'Google Search Funnels',
      description: 'SEO-optimized funnels designed to capture and convert search traffic',
    },
    {
      icon: ShoppingCart,
      title: 'Ecom Sales Funnels',
      description: 'E-commerce focused sales funnels with product pages and checkout optimization',
    },
    {
      icon: Megaphone,
      title: 'Ad Copy & Offers',
      description: 'High-converting ad copy and irresistible offer positioning for your campaigns',
    },
    {
      icon: TestTube,
      title: 'Copy Testing Packs',
      description: 'Multiple ad variations for A/B testing and continuous optimization',
    },
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Cutting-edge AI tools for lead follow-up, content creation, and automation',
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Hayes',
      company: 'Digital Marketing Agency',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Sarah transformed our lead generation funnel and our conversion rates increased by 65%. Her strategic approach to funnel building is incredible.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Startup',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Working with Sarah was a game-changer. She helped us build a complete sales funnel that generated $250K in the first month.',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      company: 'SaaS Company',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Sarah\'s AI-powered follow-up sequences and lead magnets have completely automated our lead nurturing process with amazing results.',
      rating: 5,
    },
  ];

  const portfolioSamples = [
    {
      title: 'Lead Gen Funnel Overhaul',
      client: 'TechFlow',
      description: 'Complete funnel redesign that increased lead quality by 85% and conversion rates by 65%',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
    {
      title: 'E-commerce Sales Funnel',
      client: 'EcoBeauty',
      description: 'Multi-step sales funnel with upsells that boosted average order value by 40%',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
    {
      title: 'AI-Powered Lead System',
      client: 'FinanceFirst',
      description: 'Automated lead nurturing system with AI chatbots generating 50+ qualified leads daily',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Full-Screen Hero Banner */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-cyber relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-heading leading-tight mb-8 animate-slide-up">
            Powerful Words.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary block lg:inline animate-cyber-flicker">Real Results.</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-text-body mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up font-sans">
            Helping brands build high-converting funnels and automated systems that turn prospects into customers and customers into advocates.
          </p>
          
          <div className="animate-slide-up">
            <Link
              to="/booking"
              className="inline-flex items-center bg-gradient-primary text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 group animate-pulse-glow"
            >
              Let's Work Together
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center shadow-glow">
              <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - 6 Services */}
      <section className="py-20 lg:py-32 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
              What I Do Best
            </h2>
            <p className="text-xl lg:text-2xl text-text-body max-w-3xl mx-auto leading-relaxed font-sans">
              Specialized funnel building and copywriting services that transform your business communication and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-cyber p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 border border-teal-500/20 group animate-glow hover:shadow-glow hover:border-teal-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 animate-pulse-glow">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
                  {service.title}
                </h3>
                <p className="text-text-body leading-relaxed text-lg font-sans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Profile Pictures */}
      <section className="py-20 lg:py-32 bg-gradient-navy relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
              What Clients Say
            </h2>
            <p className="text-xl lg:text-2xl text-text-body max-w-3xl mx-auto leading-relaxed font-sans">
              Real results from real partnerships that transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-cyber p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 relative animate-fade-in border border-teal-500/20 hover:border-teal-400/40"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold shadow-glow">
                    "
                  </div>
                </div>

                <div className="flex items-center mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-teal-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-body mb-8 leading-relaxed text-lg italic font-sans">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-teal-500/30 shadow-glow"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-text-heading text-lg">{testimonial.name}</h4>
                    <p className="text-text-accent font-sans">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Latest 3 Projects */}
      <section className="py-20 lg:py-32 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
              Recent Work
            </h2>
            <p className="text-xl lg:text-2xl text-text-body max-w-3xl mx-auto leading-relaxed font-sans">
              A glimpse into successful projects that delivered measurable results and transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {portfolioSamples.map((project, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-cyber rounded-3xl shadow-soft hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group animate-fade-in border border-teal-500/20 hover:border-teal-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-text-accent mb-2 uppercase tracking-wider font-sans">
                    {project.client}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-text-heading mb-4">
                    {project.title}
                  </h3>
                  <p className="text-text-body leading-relaxed text-lg font-sans">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-text-accent font-bold text-xl hover:text-teal-300 transition-colors group font-sans"
            >
              View All Projects
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 lg:py-32 bg-navy-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-8">
            Ready to Transform Your Funnels?
          </h2>
          <p className="text-xl lg:text-2xl text-text-body mb-12 leading-relaxed max-w-4xl mx-auto font-sans">
            Let's build high-converting funnels and automated systems that turn your prospects into customers and scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gradient-primary-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 font-sans animate-pulse-glow"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-text-heading px-10 py-5 rounded-full text-xl font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 transform hover:scale-105 font-sans hover:shadow-glow"
            >
              Let's Chat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;