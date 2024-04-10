export default function Quote() {
    return (
        <>
            <div className="xl:p-32 md:p-16 xsm:p-8 bg-gray-200 flex flex-col items-center">
                <div className="xsm:w-full xl:w-1/2">
                    <p className="xl:text-4xl md:text-2xl xsm:text-xl text-gray-800 italic font-light">This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice</p>
                </div>
                <div className="xsm:w-full xl:w-1/2">
                    <p className="xl:text-2xl md:text-xl xsm:text-lg text-gray-800 font-bold text-right">-Thor, God of Thunder</p>
                </div>
            </div>
        </>
    )
}