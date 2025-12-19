import React, { useState } from 'react';
import { Search, Filter, FileText, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const PortfolioList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGroup, setFilterGroup] = useState('All');

    // Mock data
    const records = [
        { id: 1, title: 'Reduction of Waiting Time in OPD', population: 'DM', type: 'Chart Review', date: '2023-10-15', status: 'Completed', dimension: 'Prevention' },
        { id: 2, title: 'Fall Prevention Protocol', population: 'Elderly', type: 'RCA', date: '2023-11-02', status: 'Active', dimension: 'Prevention' },
        { id: 3, title: 'Hypertension Screening Rate', population: 'HT', type: 'Audit', date: '2023-09-20', status: 'Completed', dimension: 'Promotion' },
        { id: 4, title: 'Post-Stroke Rehabilitation Program', population: 'Stroke', type: 'Innovation', date: '2023-12-01', status: 'Active', dimension: 'Rehabilitation' },
        { id: 5, title: 'Pediatric Asthma Management', population: 'Pediatric', type: 'Med Error', date: '2023-08-10', status: 'Completed', dimension: 'Cure' },
    ];

    const getGroupColor = (population) => {
        switch (population) {
            case 'DM': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'HT': return 'bg-red-100 text-red-800 border-red-200';
            case 'Elderly': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'Stroke': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Pediatric': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const filteredRecords = records.filter(record => {
        const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterGroup === 'All' || record.population === filterGroup;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Project Portfolio</h1>
                    <p className="mt-2 text-gray-600">Browse all quality improvement records and active projects.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-sage-500 focus:border-sage-500 w-full sm:w-64"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <select
                            value={filterGroup}
                            onChange={(e) => setFilterGroup(e.target.value)}
                            className="pl-9 pr-8 py-2 border border-gray-300 rounded-xl focus:ring-sage-500 focus:border-sage-500 w-full sm:w-40 appearance-none bg-white"
                        >
                            <option value="All">All Groups</option>
                            <option value="DM">DM</option>
                            <option value="HT">HT</option>
                            <option value="Elderly">Elderly</option>
                            <option value="Stroke">Stroke</option>
                            <option value="Pediatric">Pediatric</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecords.map((record) => (
                    <div key={record.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getGroupColor(record.population)}`}>
                                    {record.population}
                                </span>
                                <span className="text-xs text-gray-400">{format(new Date(record.date), 'MMM d, yyyy')}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sage-600 transition-colors mb-2 line-clamp-2">
                                {record.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                                    {record.type}
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                                    {record.dimension}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-50">
                            <button className="text-sage-600 hover:text-sage-700 text-sm font-medium flex items-center">
                                View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredRecords.length === 0 && (
                <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-300" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
                    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
};

export default PortfolioList;
