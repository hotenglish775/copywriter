import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageSquare, Mail, Star, ChevronRight, Globe, FileText, Edit } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Writing',
      description: 'Optimized content that ranks high and converts visitors into customers',
    },
    {
      icon: MessageSquare,
      title: 'Brand Copy',
      description: 'Clear, compelling brand voice that resonates with your audience',
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Strategic sequences that nurture leads and drive sales',
    },
    {
      icon: Globe,
      title: 'Website Copy',
      description: 'Conversion-focused web content that tells your story effectively',
    },
    {
      icon: FileText,
      title: 'Sales Pages',
      description: 'High-converting landing pages that turn visitors into buyers',
    },
    {
      icon: Edit,
      title: 'Content Strategy',
      description: 'Comprehensive content planning that aligns with your business goals',
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Hayes',
      company: 'Digital Marketing Agency',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Sarah transformed our website copy and our conversion rates increased by 40%. Her strategic approach to messaging is incredible.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Startup',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Working with Sarah was a game-changer. She helped us find our brand voice and create content that actually sells.',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      company: 'SaaS Company',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Sarah\'s email sequences generated 6-figure revenue for our product launch. She truly understands conversion psychology.',
      rating: 5,
    },
  ];

  const portfolioSamples = [
    {
      title: 'SaaS Landing Page',
      client: 'TechFlow',
      description: 'Complete homepage redesign that increased signups by 65%',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
    {
      title: 'Email Campaign Series',
      client: 'EcoBeauty',
      description: '7-part welcome sequence with 35% open rates',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
    {
      title: 'Blog Content Strategy',
      client: 'FinanceFirst',
      description: 'SEO-optimized articles driving 50K monthly visitors',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Full-Screen Hero Banner */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bronze-50 via-white to-background-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-bronze-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-bronze-300 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-bronze-100 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-heading leading-tight mb-8 animate-slide-up">
            Powerful Words.{' '}
            <span className="text-bronze-600 block lg:inline">Real Results.</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-text-body mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up font-sans">
            Helping brands communicate clearly and convert effectively through strategic copywriting and content that drives measurable business growth.
          </p>
          
          <div className="animate-slide-up">
            <Link
              to="/booking"
              className="inline-flex items-center bg-gradient-bronze text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-gradient-bronze-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Let's Work Together
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-bronze-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-bronze-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - 6 Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-heading mb-6">
              What I Do Best
            </h2>
            <p className="text-xl lg:text-2xl text-text-body max-w-3xl mx-auto leading-relaxed font-sans">
              Specialized copywriting services that transform your business communication and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 border border-bronze-100 group animate-glow hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-bronze-100 to-bronze-200 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-10 w-10 text-bronze-700" />
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
      <section className="py-20 lg:py-32 bg-gradient-to-b from-bronze-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-bronze text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold shadow-glow">
                    "
                  </div>
                </div>

                <div className="flex items-center mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-bronze-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-body mb-8 leading-relaxed text-lg italic font-sans">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-bronze-100 shadow-soft"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-text-heading text-lg">{testimonial.name}</h4>
                    <p className="text-text-body font-sans">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Latest 3 Projects */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bronze-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-bronze-600 mb-2 uppercase tracking-wider font-sans">
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
              className="inline-flex items-center text-bronze-600 font-bold text-xl hover:text-bronze-700 transition-colors group font-sans"
            >
              View All Projects
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-bronze-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-bronze-300 rounded-full mix-blend-multiply filter blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-sans">
            Let's create compelling copy that connects with your audience and drives real business results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-bronze text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-gradient-bronze-hover hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 font-sans"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-10 py-5 rounded-full text-xl font-semibold border-2 border-bronze-400 hover:bg-bronze-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 font-sans"
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