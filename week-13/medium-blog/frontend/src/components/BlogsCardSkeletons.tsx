

export function BlogsCardSkeleton() {
    return (
        <div className="border-b p-2 animate-pulse w-screen max-w-screen-md mx-auto">
            <div className="flex mt-2">
                <div className="pt-1.5">
                    <div className="relative inline-flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full "></div>
                </div>
                <div className="p-2.5 font-semibold text-sm bg-gray-200 rounded w-24 h-6 ml-2 "></div>
                <div className="pt-2 font-bold text-slate-400 ml-2">
                    ·
                </div>
                <div className="pt-2.5 pl-1 font-light text-sm bg-gray-200 rounded w-32 h-6 ml-2 "></div>
            </div>
            {/* Title and Content */}
            <div className="p-2 font-bold text-2xl bg-gray-200 rounded w-3/4 h-8 mt-4 "></div>
            <div className="pt-1 p-2 pb-1 font-normal text-lg bg-gray-200 rounded w-full h-16 mt-2 "></div>
            <div className="text-light pl-4 pt-0 p-2 text-slate-400 bg-gray-200 rounded w-24 h-6 mt-2 "></div>
        </div>
    );
}
