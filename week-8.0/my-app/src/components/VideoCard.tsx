export function  VideoCard(props:any){

return <div>
    <img className="p-2" src={props.thumnail} alt="" ></img>
    <div className="grid grid-cols-12 ">
        <div className=" pt-7 ml-auto mr-auto">

            <img className="rounded-full w-12" src={props.channelLogo} alt="" />

        </div>
        <div >
           <div className="col-span-12 pl-5 w-80 pt-5   ">
        {props.title}
        </div> 
        <div className="col-span-11  pl-5 text-base text-gray-400">
        {props.author}
        </div>
        <div className="col-span-11  pl-5 w-40 text-base  text-gray-400">
       {props.views} | {props.time} 
        </div>
        </div>
        
        
    </div>
</div>

}