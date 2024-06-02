
export function TopBar() {
    const name = "Rahul" as string;
    return <div className="flex justify-between border-b p-2 ">
        <div className="p-2 pl-10 font-bold text-xl">
            Medium
        </div>
        <div className="pt-1 pr-6">
            <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>

            </div>
        </div>
    </div>
}