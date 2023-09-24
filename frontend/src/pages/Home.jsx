import Card from "../components/Card";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  let cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
    
      <Navbar></Navbar>


      <div className=" flex justify-center md:max-h-xl ">
        {/* cards */}
        <div className="grid grid-cols-1 mx-10 md:mx-20 lg:mx-20 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((x) => <Card />)}
      </div>

        {/* <div className="flex flex-col w-1/2 p-10 border space-y-5">
        <input type="text" placeholder="Title" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
        <input type="text" placeholder="Tagline" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
        <textarea type="text" placeholder="Body" className="block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows={10}></textarea>
      </div> */}


        {/* <Form></Form> */}
        

      </div>

      



    </>
  )
}