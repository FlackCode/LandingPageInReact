export default function ActionBar() {
    return (
        <>
            <div className="px-48 py-16">
                <div className="bg-blue-500 px-32 py-8 flex flex-row justify-between items-center rounded-lg">
                    <div className="text-white">
                        <h1 className="font-bold text-2xl">Call to action! It's time!</h1>
                        <p>Sign up for our product by clicking that button right over there!</p>
                    </div>
                    <div className="flex items-end">
                        <button className="bg-blue-500 border-2 border-white rounded-md text-white font-bold px-8 py-2
                                            hover:cursor-pointer hover:bg-white hover:text-blue-500
                                            transition-all duration-300 ease-linear">Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}