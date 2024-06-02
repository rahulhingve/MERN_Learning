

import { TopBarSkeleton } from './TopBarSkeletons';

export function FullBlogSkeleton() {
    return (
        <div>
            <TopBarSkeleton />
            <div className="grid grid-cols-12 px-10 w-full p-10 bg-slate-200 animate-pulse">
                <div className="grid col-span-8">
                    <div className="font-bold text-4xl bg-gray-200 rounded w-3/4 h-10 mb-4"></div>
                    <div className="bg-gray-200 rounded w-1/2 h-6 mb-4"></div>
                    <div className="font-semibold text-xl bg-gray-200 rounded w-full h-40 mb-4"></div>
                </div>
                <div className="grid col-span-4 p-3 shadow-lg">
                    <div className="font-bold text-2xl flex items-center mb-4">
                        <div className="relative inline-flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full mr-2"></div>
                        <div className="bg-gray-200 rounded w-24 h-7"></div>
                    </div>
                    <div className="font-semibold bg-gray-200 rounded w-full h-20"></div>
                </div>
            </div>
        </div>
    );
}
