export function TopBarSkeleton() {
    return (
        <div className="flex justify-between border-b p-2 animate-pulse">
            <div className="p-2 pl-10 font-bold text-xl bg-gray-200 rounded w-24 h-8 "></div>
            <div className="flex items-center pt-1 pr-6">
                <div className="mr-4 bg-gray-200 rounded-lg w-20 h-10 0"></div>
                <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-200 rounded-full "></div>
            </div>
        </div>
    );
}