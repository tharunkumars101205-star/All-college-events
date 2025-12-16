import React from 'react';
import { MousePointer2, Users, GraduationCap, Briefcase, ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl transform -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        One Platform. <br />
                        <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">Limitless Opportunities.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Discover and promote educational events, connect with mentors, and accelerate your career.
                        The ultimate hub for students, faculty, and professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3.5 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-500/30 flex items-center justify-center">
                            Find Events <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition flex items-center justify-center">
                            Host an Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PersonaCard = ({ icon: Icon, title, description, colorClass }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
        <div className={`w-14 h-14 rounded-xl ${colorClass} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <Icon className={`w-7 h-7 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Who Are You?</h2>
                    <p className="mt-4 text-lg text-gray-600">Personalized experiences for every role in the ecosystem.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PersonaCard
                        icon={GraduationCap}
                        title="Student"
                        description="Find workshops, hackathons, and internships to boost your skills and career."
                        colorClass="bg-blue-500 text-blue-500"
                    />
                    <PersonaCard
                        icon={Users}
                        title="Faculty"
                        description="Share knowledge, mentor students, and network with industry peers."
                        colorClass="bg-emerald-500 text-emerald-500"
                    />
                    <PersonaCard
                        icon={Briefcase}
                        title="Professional"
                        description="Network with top talent, judge events, and find your next hire."
                        colorClass="bg-purple-500 text-purple-500"
                    />
                    <PersonaCard
                        icon={Zap}
                        title="Freelancer"
                        description="Showcase your portfolio, find gigs, and connect with potential clients."
                        colorClass="bg-orange-500 text-orange-500"
                    />
                </div>
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Features />
            <div className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to grow?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Join thousands of learners and leaders on AllCollegeEvent.</p>
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800">Join Now for Free</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
