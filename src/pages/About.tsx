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
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Sarah Mitchell
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A passionate copywriter and content strategist who believes that the right words 
                can transform businesses. I help brands find their voice and create content that 
                not only engages but converts.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 5 years of experience working with startups, agencies, and established 
                businesses, I've learned that great copy isn't just about clever words—it's about 
                understanding your audience and crafting messages that resonate with their needs, 
                desires, and pain points.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-beige-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Certified Copywriter
                </span>
                <span className="bg-beige-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Content Strategy Expert
                </span>
                <span className="bg-beige-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  SEO Specialist
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Sarah Mitchell"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            My Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I believe every business has a unique story worth telling. My mission is to help you 
            tell that story in a way that connects with your audience and drives real results. 
            Whether it's crafting compelling website copy, creating engaging blog content, or 
            developing email sequences that convert, I'm here to help your words work harder for your business.
          </p>
          <blockquote className="text-2xl font-light text-gray-800 italic border-l-4 border-gray-300 pl-6">
            "Great copy doesn't just inform—it transforms. It turns visitors into customers, 
            browsers into believers, and prospects into passionate advocates."
          </blockquote>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers don't lie—here's the impact we've created together
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-beige-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-gray-700" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped my copywriting career
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white shadow-md"></div>

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-sm font-semibold text-gray-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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