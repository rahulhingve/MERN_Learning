import { Auth } from "../components/Auth";
import { Input } from "../components/input";
import { Quote } from "./Quote";


export function Signin(){
    return <div className="px-10 grid grid-cols-1 lg:grid-cols-2" >
        <div>
            <div>
                <Auth type="signin"/>
                
            </div>
            
            
        </div>
       <div className="lg:visible">
        <Quote/>
       </div>
    </div>
}