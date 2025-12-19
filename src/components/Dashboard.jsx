import React, { useEffect, useState } from 'react';
import { Activity, ClipboardCheck, Lightbulb, Users } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white overflow-hidden rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center mb-4 sm:mb-0">
        <div className={`p-4 rounded-xl ${colorClass} bg-opacity-10 mr-4`}>
            <Icon className={`w-8 h-8 ${colorClass} text-opacity-100`} />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
    // Mock data for now, eventually fetch from Supabase
    const [stats, setStats] = useState({
        totalReviews: 124,
        successRate: '87%',
        activeProjects: 8,
        clinicalGroups: 5
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-2 text-gray-600">Overview of clinical quality improvements and indicators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Reviews"
                    value={stats.totalReviews}
                    icon={ClipboardCheck}
                    colorClass="text-blue-600 bg-blue-600"
                />
                <StatCard
                    title="Success Rate"
                    value={stats.successRate}
                    icon={Activity}
                    colorClass="text-sage-500 bg-sage-500"
                />
                <StatCard
                    title="Active Projects"
                    value={stats.activeProjects}
                    icon={Lightbulb}
                    colorClass="text-amber-500 bg-amber-500"
                />
                <StatCard
                    title="Clinical Groups"
                    value={stats.clinicalGroups}
                    icon={Users}
                    colorClass="text-indigo-500 bg-indigo-500"
                />
            </div>

            {/* Placeholder for recent activity or charts */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-dashed border-gray-300 flex items-center justify-center h-64">
                <p className="text-gray-500">Recent Activity Stream / Quick Actions Placeholder</p>
            </div>
        </div>
    );
};

export default Dashboard;
