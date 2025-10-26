import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'ETHOnline 2025 Kickoff',
      date: 'October 28, 2025',
      time: '10:00 AM UTC',
      location: 'Virtual',
      description: 'Join us for the official launch of Tithi.xyz at ETHOnline 2025!',
      attendees: 150,
      link: '#'
    },
    {
      id: 2,
      title: 'Cross-Chain Workshop',
      date: 'October 30, 2025',
      time: '2:00 PM UTC',
      location: 'Virtual',
      description: 'Learn how to build cross-chain applications with Tithi SDK.',
      attendees: 75,
      link: '#'
    },
    {
      id: 3,
      title: 'Developer Meetup',
      date: 'November 2, 2025',
      time: '6:00 PM UTC',
      location: 'Virtual',
      description: 'Network with other developers and share your Tithi integrations.',
      attendees: 45,
      link: '#'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Events & Workshops</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our community events and learn how to build the future of cross-chain applications.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-moon-400/30 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-moon-400" />
                <span className="text-sm text-gray-400">{event.date}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              
              <p className="text-gray-300 text-sm">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              
              <a
                href={event.link}
                className="inline-flex items-center text-moon-400 hover:text-moon-300 text-sm font-medium"
              >
                Join Event
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-moon-400/10 to-moon-600/10 border border-moon-400/30 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Can't Make It?</h3>
        <p className="text-gray-300 mb-6">
          All events are recorded and available on our YouTube channel. Follow us for updates!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-moon-400 text-moon-900 font-semibold rounded-lg hover:bg-moon-300 transition-all duration-200"
          >
            Subscribe to Updates
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-moon-400 text-moon-300 font-semibold rounded-lg hover:bg-moon-400/10 transition-all duration-200"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
