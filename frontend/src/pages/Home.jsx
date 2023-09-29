import { useEffect, useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import './home.css'
import { useNotes } from "../context/NoteContext";
import AlertModal from "../components/AlertModal";
import LoadingScreen from "../components/LoadingScreen";

import Modal from 'react-modal';
import { COLORS } from "../constants/colours";
import ColorPicker from "../components/ColorPicker";
Modal.setAppElement('#root');



export default function Home() {

  const { fetchNotes, notes, handleDeleteNote, handleEditNote, handlePinNote, handleUnpinNote } = useNotes();


  const [isLoading, setIsloading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editNote, setEditNote] = useState({})
  const [alertProps, setAlertProps] = useState(undefined)

  let subtitle;

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



  async function deleteNote(noteId) {
    setAlertProps({
      title: "Delete Note",
      message: "Are you sure ?",
      handleAccept: handleDeleteNote,
      handleAcceptParams: [noteId],
      handleReject: setAlertProps,
      handleRejectParams: [undefined]
    });
  }

  useEffect(() => {
    (async () => {
      // setIsloading(true);
      await fetchNotes();
      // setIsloading(false)
    })()
  }, [])


  return (
    <>

      <Navbar />
      {isLoading ? <LoadingScreen> </LoadingScreen> :
        <div className=" flex flex-col justify-center items-center">
          <div className="md:max-h-xl">
            <div id="notes" class=" container grid grid-cols-1 mx-10 md:mx-20 lg:mx-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 md:px-10 ">
              {notes.map((note) => <Card note={note} actions={{ openEditModal, deleteNote, handlePinNote, handleUnpinNote }} />)}
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeEditModal}
              contentLabel="Example Modal"
              className={"p-6  shadow-lg"}
              style={{
                overlay: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                },
                content: {
                  inset: "0px",
                  padding: 0,
                  margin: 0,
                  position: "relative",
                  width: "40%",
                  borderRadius: "8px",
                  border: 0,
                  overflow: "auto",
                }
              }}
            >
              <Form note={editNote} actions={{ closeEditModal, handleEditNote }}></Form>
            </Modal>
          </div>



          <div className="flex">
            <button class="chevron-btn ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l-6 6l6 6" />
              </svg>
            </button>

            <button class="chevron-btn mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>

          {(alertProps) && (
            <AlertModal
              title={alertProps.title}
              message={alertProps.message}
              onYesClick={async () => {
                await alertProps.handleAccept(...alertProps.handleAcceptParams)
                if (alertProps) setAlertProps(undefined)
              }}
              onNoClick={async () => {
                await alertProps.handleReject(...alertProps.handleRejectParams)
                if (alertProps) setAlertProps(undefined)
              }}
            />
          )}
      
        </div>
      }
    </>
  )
}