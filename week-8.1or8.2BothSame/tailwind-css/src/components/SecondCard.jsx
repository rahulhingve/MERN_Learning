export function SecondCard() {
    return <div>
        <div className="bg-white rounded shadow-md">
            <div className="flex p-4">
                <div className=" text-gray-500 pr-1">
                    Amount Pending
                </div>
                <div>
                    <svg className="w-5 text-gray-500 pt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>

                </div>
            </div>
            <div className="flex justify-between p-2">
                <div className="font-bold">
                    ₹92,312.20
                </div>
                <div className="flex underline underline-offset-1 text-[#146EB4] ">
                    13 Orders <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>


                </div>
            </div>

        </div>
    </div>
}