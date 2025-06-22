import React from 'react';
import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Started Freelance Journey',
      description: 'Began helping small businesses with their content needs',
    },
    {
      year: '2020',
      title: 'First 6-Figure Campaign',
      description: 'Launched email series that generated $150K in revenue',
    },
    {
      year: '2021',
      title: 'Agency Partnerships',
      description: 'Started collaborating with leading marketing agencies',
    },
    {
      year: '2022',
      title: 'Content Strategy Expansion',
      description: 'Added comprehensive content strategy to service offerings',
    },
    {
      year: '2023',
      title: '100+ Projects Completed',
      description: 'Reached milestone of 100 successful client projects',
    },
  ];

  const stats = [
    { icon: Users, number: '150+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '40%', label: 'Average Conversion Lift' },
    { icon: BookOpen, number: '500+', label: 'Articles Written' },
    { icon: Award, number: '5', label: 'Years Experience' },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-cyber relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6">
                Hi, We're Revolution AI CopyWriters
              </h1>
              <p className="text-xl text-text-body mb-6 leading-relaxed">
                A passionate team of copywriters and content strategists who believe that the right words 
                can transform businesses. We help brands find their voice and create content that 
                not only engages but converts.
              </p>
              <p className="text-lg text-text-body mb-8 leading-relaxed">
                With over 5 years of experience working with startups, agencies, and established 
                businesses, we've learned that great copy isn't just about clever words—it's about 
                understanding your audience and crafting messages that resonate with their needs, 
                desires, and pain points.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-teal-500/20 text-text-accent px-4 py-2 rounded-full text-sm font-medium border border-teal-500/30">
                  Certified Copywriter
                </span>
                <span className="bg-teal-500/20 text-text-accent px-4 py-2 rounded-full text-sm font-medium border border-teal-500/30">
                  Content Strategy Expert
                </span>
                <span className="bg-teal-500/20 text-text-accent px-4 py-2 rounded-full text-sm font-medium border border-teal-500/30">
                  SEO Specialist
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Revolution AI CopyWriters"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-glow border border-teal-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-text-body leading-relaxed mb-8">
            We believe every business has a unique story worth telling. Our mission is to help you 
            tell that story in a way that connects with your audience and drives real results. 
            Whether it's crafting compelling website copy, creating engaging blog content, or 
            developing email sequences that convert, we're here to help your words work harder for your business.
          </p>
          <blockquote className="text-2xl font-light text-text-heading italic border-l-4 border-teal-400 pl-6 bg-navy-800/30 p-6 rounded-r-2xl shadow-cyber">
            "Great copy doesn't just inform—it transforms. It turns visitors into customers, 
            browsers into believers, and prospects into passionate advocates."
          </blockquote>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              Numbers don't lie—here's the impact we've created together
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-navy-800/50 backdrop-blur-cyber rounded-2xl shadow-soft hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-2 border border-teal-500/20 hover:border-teal-400/40"
              >
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-text-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-text-body font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-text-body">
              Key milestones that shaped our copywriting career
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary shadow-glow"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full border-4 border-navy-900 shadow-glow animate-pulse"></div>

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <div className="bg-navy-800/50 backdrop-blur-cyber p-6 rounded-2xl shadow-soft hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 border border-teal-500/20 hover:border-teal-400/40">
                      <div className="text-sm font-semibold text-text-accent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-text-heading mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-text-body leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;