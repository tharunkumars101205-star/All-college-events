import React from 'react';
import { BarChart, Users, Calendar, DollarSign, Plus } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">{title}</span>
            <div className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>
                <Icon className="h-5 w-5" />
            </div>
        </div>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="mt-2 text-sm text-green-600 font-medium">+12% from last month</div>
    </div>
);

const DashboardPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Organizer Dashboard</h1>
                    <button className="bg-brand-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-brand-700 transition shadow-sm">
                        <Plus className="h-5 w-5 mr-2" />
                        Create New Event
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Sales" value="₹124,000" icon={DollarSign} color="blue" />
                    <StatCard title="Active Events" value="12" icon={Calendar} color="purple" />
                    <StatCard title="Total Attendees" value="1,420" icon={Users} color="emerald" />
                    <StatCard title="Page Views" value="45.2k" icon={BarChart} color="orange" />
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">Recent Registrations</h3>
                        <button className="text-sm text-brand-600 hover:text-brand-700 font-medium">View All</button>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Attendee</th>
                                    <th className="px-6 py-3 font-medium">Event</th>
                                    <th className="px-6 py-3 font-medium">Date</th>
                                    <th className="px-6 py-3 font-medium">Amount</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">A{i}</div>
                                                <span className="ml-3 font-medium text-gray-900">Attendee {i}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">AI Workshop 2025</td>
                                        <td className="px-6 py-4 text-gray-500">Dec 15, 2025</td>
                                        <td className="px-6 py-4 font-medium">₹499</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Confirmed
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
