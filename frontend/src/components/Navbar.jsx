import Note from "./Note";

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
      {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
      </div> */}

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Note></Note>
      </div>
    </nav>
  )
}





{/* <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black hover:text-gray-600 hover:border-black">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> */}


{/* <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */ }
