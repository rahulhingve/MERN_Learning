import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
},
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}
    ,
{
    title: "chal na be bsdk",
    thumnail: "thumbnail.jpg",
    channelLogo: "profile.jpg",
    views: "46k",
    time: "12 days ago",
    author: "Rahul Boltey",
}]

export function VideoGrid
    () {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video =>
            <div>
                <VideoCard
                    title={video.title}
                    thumnail={video.thumnail}
                    channelLogo={video.channelLogo}
                    views={video.views}
                    time={video.time}
                    author={video.author}

                ></VideoCard>
            </div>
        )}
    </div>
}