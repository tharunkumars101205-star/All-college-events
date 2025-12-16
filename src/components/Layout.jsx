import React, { useState } from 'react';
import { Menu, X, Rocket, Calendar, Users, Briefcase } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Rocket className="h-8 w-8 text-brand-600" />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">AllCollegeEvent</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Events</a>
                        <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Organizers</a>
                        <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">For Faculty</a>
                        <button className="bg-brand-600 text-white px-4 py-2 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-brand-600">Events</a>
                        <a href="#" className="block px-3 py-2 text-gray-600 hover:text-brand-600">Organizers</a>
                        <a href="#" className="block px-3 py-2 text-brand-600 font-medium">Log In</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center mb-4">
                    <Rocket className="h-6 w-6 text-brand-500" />
                    <span className="ml-2 text-lg font-bold text-white">AllCollegeEvent</span>
                </div>
                <p className="text-sm">Developed by ECLearnix. Connecting students, faculty, and professionals to the future.</p>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Browse Events</a></li>
                    <li><a href="#" className="hover:text-white">For Organizers</a></li>
                    <li><a href="#" className="hover:text-white">Success Stories</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Students</a></li>
                    <li><a href="#" className="hover:text-white">Faculty</a></li>
                    <li><a href="#" className="hover:text-white">Startups</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © 2025 AllCollegeEvent.com. All rights reserved.
        </div>
    </footer>
);

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
