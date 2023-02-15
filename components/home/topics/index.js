import topics from "./topics";

export default function Topics() {
    return (
        <div className="w-full flex flex-col mt-5 mb-10">
            <h3 className="font-medium text-2xl">
                Topics covered on the bootcamp
            </h3>
            <div>
                <ul className="list-disc">
                    {topics.map((topics, index) => {
                        return <li key={index}>{topics}</li>
                    }
                    )}

                </ul>
            </div>
        </div>
    )
}

