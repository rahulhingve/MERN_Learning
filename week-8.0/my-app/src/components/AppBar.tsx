import { SearchBar } from "./SearchBar";

export function AppBar() {
    return <div className="flex justify-between">
        <div className="p-2">
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div className="p-2">
            Signin
        </div>
    </div>
}