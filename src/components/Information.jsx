export default function Information() {
    return (
        <>
            <div className="bg-white flex flex-col items-center justify-center xl:p-16 md:p-8 xsm:p-4">
                <h1 className="text-black font-bold xl:text-4xl md:text-2xl xsm:text-xl xl:mb-16 md:mb-8 xsm:mb-8">Some random information</h1>
                <div className="flex flex-col items-center xl:gap-16 xsm:gap-4">
                    <div className="flex xl:flex-row md:flex-row xsm:flex-col xl:gap-16 md:gap-8 xsm:gap-4">
                        <div className="">
                            <div className="w-40 h-40 border-blue-500 border-4 rounded-2xl"></div>
                            <div className="px-2 py-1 w-40 text-center text-gray-500">this is some subtext under an illustration or image</div>
                        </div>
                        <div>
                            <div className="w-40 h-40 border-blue-500 border-4 rounded-2xl"></div>
                            <div className="px-2 py-1 w-40 text-center text-gray-500">this is some subtext under an illustration or image</div>
                        </div>
                        <div>
                            <div className="w-40 h-40 border-blue-500 border-4 rounded-2xl"></div>
                            <div className="px-2 py-1 w-40 text-center text-gray-500">this is some subtext under an illustration or image</div>
                        </div>
                        <div>
                            <div className="w-40 h-40 border-blue-500 border-4 rounded-2xl"></div>
                            <div className="px-2 py-1 w-40 text-center text-gray-500">this is some subtext under an illustration or image</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}