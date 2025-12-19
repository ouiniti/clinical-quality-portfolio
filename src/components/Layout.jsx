import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, FolderOpen, PieChart, Settings, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', icon: LayoutDashboard },
        { name: 'Submission', href: '/submission', icon: FileText },
        { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
        { name: 'Analytics', href: '/analytics', icon: PieChart },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-light-gray flex flex-col">
            {/* Top Navigation Bar */}
            <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center mr-2">
                                    <span className="text-white font-bold text-lg">Q</span>
                                </div>
                                <span className="text-xl font-semibold text-gray-900 tracking-tight">Clinical Quality</span>
                            </div>
                            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                                {navigation.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={cn(
                                                location.pathname === item.href
                                                    ? "border-sage-500 text-gray-900"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                                            )}
                                        >
                                            <Icon className="w-4 h-4 mr-2" />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={cn("sm:hidden", isMobileMenuOpen ? "block" : "hidden")}>
                    <div className="pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    location.pathname === item.href
                                        ? "bg-sage-50 border-sage-500 text-sage-600"
                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 min-h-[calc(100vh-8rem)]">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
