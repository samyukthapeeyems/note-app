import { useEffect, useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import './home.css'
import { useNotes } from "../context/NoteContext";

import Modal from 'react-modal';
Modal.setAppElement('#root');


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Home() {

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [editNote, setEditNote] = useState({})

  function openEditModal(note) {
    setEditNote(note)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeEditModal() {
    setIsOpen(false);
    setEditNote("")
  }

  const { fetchNotes,
    notes,
    handleDeleteNote,
    handleEditNote,
    handlePinNote,
    handleUnpinNote, } = useNotes();

  useEffect(() => {
    (async () => {
      await fetchNotes()
    })()
  }, [])


  return (
    <>

      <Navbar></Navbar>


      <div className=" flex justify-center md:max-h-xl items-center">


        <button class="chevron-btn ml-5 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>




        <div id="notes" class="container grid grid-cols-1 mx-10 md:mx-20 lg:mx-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 md:px-10 ">
          {notes.map((note) => <Card note={note} actions={{
            openEditModal, handleDeleteNote, handlePinNote, handleUnpinNote
          }} />)}
        </div>


        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <div className="container ml-52 md:px-10 py-20"> */}
          <Form note={editNote} actions={{ closeEditModal, handleEditNote }}></Form>
          {/* </div> */}
        </Modal>

        <button class="chevron-btn mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>



      </div>





    </>
  )
}