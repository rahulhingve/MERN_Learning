
import axios from "axios";

async function getUserData (){

   const response =await  axios.get("http://localhost:3000/api/user")
   return response.data;
}


export default async  function Home() {
const data = await getUserData();


    // const [loading,setLoading]=useState(true)
    // const [data,setData] = useState({
    //     email:"",
    //     name:""
    // })

    // useEffect(()=>{
    //     axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    //     .then(response=>{
    //        setData(response.data)
    //        setLoading(false)
    //     })
        
    // },[])

// if (loading){
//     return <div>Loading..</div>
// }




    return (<>


  
    <div>
     {data.name}
    </div>
    <div>
        {data.email}
    </div>
  </>
  
     );
  }