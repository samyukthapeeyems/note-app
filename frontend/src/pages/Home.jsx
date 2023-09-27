import { useEffect } from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import './home.css'
import { useNotes } from "../context/NoteContext";

export default function Home() {
  let cards = [1, 2, 3, 4, 5, 6];
  const { fetchNotes, notes } = useNotes();
  useEffect(async () => {
    (async () => {
      await fetchNotes()
    })()
  }, [])
  return (
    <>

      <Navbar></Navbar>


      <div className=" flex justify-center md:max-h-xl items-center">
        {/* cards */}


        {/* <div className="flex flex-col w-1/2 p-10 border space-y-5">
        <input type="text" placeholder="Title" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
        <input type="text" placeholder="Tagline" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
        <textarea type="text" placeholder="Body" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows={10}></textarea>
      </div> */}
        <button class="chevron-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>

        <div className="grid grid-cols-1 mx-10 md:mx-20 lg:mx-20 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((x) => <Card />)}
        </div>


        <button class="chevron-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>

        {/* <Form></Form> */}


      </div>





    </>
  )
}