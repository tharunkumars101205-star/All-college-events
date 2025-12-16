import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Tag } from 'lucide-react';

const EVENTS = [
    {
        id: 1,
        title: "AI & Machine Learning Workshop",
        organizer: "TechLearn Academy",
        date: "Dec 20, 2025",
        price: "₹1,299",
        category: "Workshop",
        image: "from-brand-50 to-brand-100", // placeholder gradient
        tags: ["AI", "Coding", "Beginner"]
    },
    {
        id: 2,
        title: "Startup Networking Event",
        organizer: "Startup Hub",
        date: "Dec 22, 2025",
        price: "Free",
        category: "Networking",
        image: "from-purple-50 to-purple-100",
        tags: ["Business", "Networking"]
    },
    {
        id: 3,
        title: "Full Stack Development Course",
        organizer: "CodeAcademy",
        date: "Jan 10, 2026",
        price: "₹4,999",
        category: "Course",
        image: "from-blue-50 to-blue-100",
        tags: ["Web Dev", "React", "Node.js"]
    },
    {
        id: 4,
        title: "Digital Marketing Masterclass",
        organizer: "Growth Hackers",
        date: "Dec 28, 2025",
        price: "₹999",
        category: "Workshop",
        image: "from-orange-50 to-orange-100",
        tags: ["Marketing", "Social Media"]
    },
];

const EventsPage = () => {
    const [filter, setFilter] = useState('');

    const filteredEvents = EVENTS.filter(e =>
        e.title.toLowerCase().includes(filter.toLowerCase()) ||
        e.organizer.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Discover Events</h1>
                        <p className="text-gray-600 mt-2">Find the perfect opportunity for your growth.</p>
                    </div>

                    <div className="mt-4 md:mt-0 relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search events, organizers..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <div className={`h-48 bg-gradient-to-br ${event.image} p-6 relative`}>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                    {event.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-brand-600 font-semibold mb-2">{event.organizer}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{event.title}</h3>

                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {event.date}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {event.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                                    <span className="text-lg font-bold text-gray-900">{event.price}</span>
                                    <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
