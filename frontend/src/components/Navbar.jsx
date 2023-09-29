import Note from "./Note";

export default function Navbar() {

  return (
    <>
    
    <nav className="flex items-center justify-between flex-wraps p-6">
    <div className=" text-black ">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 64 64">
          <path fill="#3e4347" d="m41.2 3.4l-26.1 7.5l-4.1 1.2c-3 .9-3.2 2.6-2.4 5.6l11.3 41.1c.8 3 1.6 3.5 4.7 2.6l4.1-1.2l26.1-7.5c3-.9 4.8-4 4-7.1L48.2 7.4c-.8-3.1-4-4.8-7-4"/>
        <path fill="#d0d0d0" d="m39 2.8l-25.8 8.5l-4.1 1.3c-3 1-3.1 2.7-2.2 5.7l13 40.6c1 3 1.8 3.4 4.8 2.4l4.1-1.3l25.8-8.5c3-1 4.7-4.2 3.7-7.2L46.2 6.5c-1-3-4.2-4.6-7.2-3.7"/>
        <path fill="#42ade2" d="m37.1 2.4l-25.5 9.4L28.8 60l25.5-9.4c3-1.1 4.5-4.4 3.4-7.4L44.4 5.7c-1-2.9-4.3-4.4-7.3-3.3"/>
        <path fill="#3e4347" d="M7.6 13.3c-3 1.1-3 2.8-2 5.8L20 59.2c1.1 3 1.9 3.4 4.9 2.3l4-1.5l-17.3-48.2l-4 1.5"/>
        <path fill="#fff" d="m41.5 21.4l-15.8 5.9l-2.2-6.3l15.8-5.8z"/>
        </svg>
      </div>

      <div className="w-full block flex-grow lg:flex lg:justify-center lg:items-center lg:w-auto">
        <Note></Note>
      </div>
    </nav>
    </>
  )
}





{/* <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black hover:text-gray-600 hover:border-black">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> */}


{/* <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */ }
