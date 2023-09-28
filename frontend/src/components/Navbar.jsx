export default function Navbar() {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          {/* <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
        </div>
        
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            
            <div className="space-x-60">
            <input className="border-amber-800 border-opacity-10 bg-amber-800 bg-opacity-10 backdrop-blur-lg appearance-none border rounded-lg w-1/3 py-4 px-4 text-gray-700 font-bold leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a note..."/>
            {/* <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/> */}
            </div>
            
          </div>
          {/* <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div> */}
        </div>
      </nav>
    )
}