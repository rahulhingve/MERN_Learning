import { Link } from "react-router-dom";

export function TopBar() {
    const name = "Rahul" as string;
    return <div className="flex justify-between border-b p-2 ">
        <div className="p-2 pl-10 font-bold text-xl">
            Medium
        </div>
        <div>
      

        <div className="pt-1 pr-6">
        <Link to="/publish">
        <button type="button" className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </Link>

            <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>

            </div>
        </div>
        </div>
        
    </div>
}