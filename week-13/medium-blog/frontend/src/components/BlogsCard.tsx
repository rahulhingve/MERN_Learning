export function BlogsCrad() {

     const name = "Rahul" as string;
    const date = new Date();
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum obcaecati totam culpa quas eligendi autem dolor, vitae molestias dignissimos rem tempora rerum reprehenderit veritatis nemo illum architecto delectus. Quisquam rerum ullam hic officiis quia obcaecati perspiciatis nisi ea! Possimus voluptatum incidunt laboriosam maxime ipsam. Unde commodi mollitia quis eos magnam voluptas neque quaerat quod pariatur, eligendi, architecto nam dolores eaque doloribus suscipit praesentium totam laborum quae! Doloribus saepe tenetur et, soluta nisi autem deleniti minus. Sed neque cumque fuga inventore ducimus doloribus error dignissimos eius mollitia sequi veritatis, dolor repellat pariatur illum. Neque eum magnam cumque quam reprehenderit voluptas tempore quod facere animi quae, esse ratione nemo placeat porro, deleniti dolorum omnis nobis voluptates, iusto soluta blanditiis? Adipisci, libero. Unde eius odio blanditiis voluptatibus iste aliquam aspernatur rerum, commodi culpa corrupti ipsum doloribus sequi dolore molestias dolorum laudantium magni est exercitationem earum? Laudantium pariatur error quae, recusandae excepturi ut reprehenderit ipsam. Commodi consequatur ratione, harum distinctio officiis accusantium at et eligendi ad molestiae dignissimos fugit quia officia veniam, cumque reprehenderit nihil blanditiis cupiditate provident facilis dolorum aliquid nulla. Nesciunt cupiditate atque laudantium, quae, animi odio fuga, excepturi temporibus at culpa dignissimos asperiores voluptate recusandae. Quam delectus facere molestias sapiente id?elit. Ipsum obcaecati totam culpa quas eligendi autem dolor, vitae molestias dignissimos rem tempora rerum reprehenderit veritatis nemo illum architecto delectus. Quisquam rerum ullam hic officiis quia obcaecati perspiciatis nisi ea! Possimus voluptatum incidunt laboriosam maxime ipsam. Unde commodi mollitia quis eos magnam voluptas neque quaerat quod pariatur, eligendi, architecto nam dolores eaque doloribus suscipit praesentium totam laborum quae! Doloribus saepe tenetur et, soluta nisi autem deleniti minus. Sed neque cumque fuga inventore ducimus doloribus error dignissimos eius mollitia sequi veritatis, dolor repellat pariatur illum. Neque eum magnam cumque quam reprehenderit voluptas tempore quod facere animi quae, esse ratione nemo placeat porro, deleniti dolorum omnis nobis voluptates, iusto soluta blanditiis? Adipisci, libero. Unde eius odio blanditiis voluptatibus iste aliquam aspernatur rerum, commodi culpa corrupti ipsum doloribus sequi dolore molestias dolorum laudantium magni est exercitationem earum? Laudantium pariatur error quae, recusandae excepturi ut reprehenderit ipsam. Commodi consequatur ratione, harum distinctio officiis accusantium at et eligendi ad molestiae dignissimos fugit quia officia veniam, cumque reprehenderit nihil blanditiis cupiditate provident facilis dolorum aliquid nulla. Nesciunt cupiditate atque laudantium, quae, animi odio fuga, excepturi temporibus at culpa dignissimos asperiores voluptate recusandae. Quam delectus facere molestias sapiente id?" as string

    function readingTime(content:string) {
        const wpm = 225; // average adult reading speed (words per minute).
        const words = content.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time;
      }

    return <div className="border-b p-2">

        <div className="flex  mt-2	">

            <div className="pt-1.5">
            <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>

            </div>
            </div>
            <div className="p-2.5 font-semibold text-sm">
                {name}
            </div>
            <div className="pt-2 font-bold text-slate-400">
                ·
            </div>
            <div className="pt-2.5 pl-1 font-light text-sm">
                {date.toDateString()}
            </div>

            

        </div>
        {/* ///////////title& content down////////// */}
        <div className="p-2 font-bold text-2xl	">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odio at numquam .
            </div>
            <div className="pt-1 p-2 pb-1 font-normal text-lg 	">
                {content.slice(0,200)+"..."}
            </div>
            <div className="text-light pl-4 pt-0 p-2 text-slate-400">
            {readingTime(content)}  min read
            </div>
    </div>




}