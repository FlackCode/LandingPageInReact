export default function Header() {
    return ( <>
        <nav className="xl:px-48 md:px-24 xsm:px-8 py-4 bg-gray-800 flex items-center justify-between">
            <div>
                <p className="font-bold text-white xl:text-2xl md:text-lg xsm:text-sm">Header Logo</p>
            </div>
            <div className="flex gap-4 font-bold text-white items-center xl:text-xl md:text-base xsm:text-sm">
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">Main</p>
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">Contacts</p>
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">About</p>
            </div>
        </nav>
        <header className="xl:px-48 xl:py-24
                            md:px-24 md:py-18 
                            xsm:px-6 xsm:py-12
                            bg-gray-800 flex items-center justify-between">
            <div className="xl:w-1/3 xl:h-64
                            md:w-2/3 md:h-32 
                            xsm:w-2/3 xsm:h-32
                            flex flex-col justify-around ">
                <h1 className="xl:text-5xl md:text-2xl xsm:text-lg text-white font-bold">This website is awesome</h1>
                <p className="text-white font-bold xl:text-base md:text-sm xsm:text-xs">This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.</p>
                <button className="xl:px-8 xl:py-2 md:px-4 md:py-1 xsm:px-2 xsm:p-0.5 bg-blue-500 text-white font-bold rounded-lg
                                    hover:text-blue-500 hover:bg-white
                                    transition-all duration-300">Sign Up</button>
            </div>
            <div className="w-1/3 flex justify-end">
                <div className="bg-slate-300 xl:w-96 xl:h-64 md:w-32 md:h-32 xsm:w-24 xsm:h-24"></div>
            </div>
        </header>
        </>
    )
}
