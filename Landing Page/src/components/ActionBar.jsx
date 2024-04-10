export default function ActionBar() {
    return (
        <>
            <div className="xl:px-48 xl:py-16 xsm:px-8 xsm:py-4">
                <div className="bg-blue-500 xl:px-32 xl:py-8 xsm:px-2 xsm:py-2 flex flex-row justify-between items-center rounded-lg">
                    <div className="text-white">
                        <h1 className="font-bold xl:text-2xl xsm:text-sm">Call to action! It's time!</h1>
                        <p className="xl:text-base xsm:text-xs">Sign up for our product by clicking that button right over there!</p>
                    </div>
                    <div className="flex items-end">
                        <button className="bg-blue-500 border-2 border-white rounded-md text-white font-bold xl:px-8 xl:py-2 xsm:px-4 xsm:py-0.5 xl:text-base xsm:text-xs
                                            hover:cursor-pointer hover:bg-white hover:text-blue-500
                                            transition-all duration-300 ease-linear">Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}