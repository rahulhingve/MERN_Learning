import { Auth } from "../components/Auth";
import { Input } from "../components/input";
import { Quote } from "./Quote";


export function Signup(){
    return <div className="px-10 grid grid-cols-1 lg:grid-cols-2" >
        <div>
            <div>
                <Auth type="signup"/>
                
            </div>
            
            
        </div>
       <div className="lg:visible">
        <Quote/>
       </div>
    </div>
}