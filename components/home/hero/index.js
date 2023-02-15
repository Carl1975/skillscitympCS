export default function Hero({ imgUrl, title, subtitle }) {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="w-full flex flex-row space-x-2 py-4">
                <div className="w-3/12">
                    <img src={imgUrl} className="rounded-lg h-22" />
                </div>
                <div className="w-9/12">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="txt-xl text-gray-700">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
