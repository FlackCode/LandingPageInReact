export default function Header() {
    return ( <>
        <nav className="px-48 py-4 bg-gray-800 flex items-center justify-between">
            <div>
                <p className="text-2xl font-bold text-white">Header Logo</p>
            </div>
            <div className="flex gap-4 font-bold text-white text-xl">
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">Main</p>
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">Contacts</p>
                <p className="transition-all duration-300 ease-linear
                            hover: cursor-pointer hover:text-blue-500">About</p>
            </div>
        </nav>
        <header className="px-48 py-24 bg-gray-800 flex items-center justify-between">
            <div className="w-1/3 h-64 flex flex-col justify-around">
                <h1 className="text-5xl text-white font-bold">This website is awesome</h1>
                <p className="text-white font-bold">This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.</p>
                <button className="px-8 py-2 bg-blue-500 text-white font-bold rounded-lg
                                    hover:text-blue-500 hover:bg-white
                                    transition-all duration-300">Sign Up</button>
            </div>
            <div className="w-1/3 flex justify-end">
                <div className="bg-slate-300 w-96 h-64"></div>
            </div>
        </header>
        </>
    )
}
