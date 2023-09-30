import { useEffect, useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import './home.css'
import { useNotes } from "../context/NoteContext";
import AlertModal from "../components/AlertModal";
import LoadingScreen from "../components/LoadingScreen";
import ReactPaginate from 'react-paginate';

import Modal from 'react-modal';
import Notes from "./Notes";
import Note from "../components/Note";
import { ChevronLeft, ChevronRight } from "../assets/Icons";

Modal.setAppElement('#root');

export default function Home() {

  const handlePageClick = async (event) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: event.selected + 1 });
  };

  const { fetchNotes, handleDeleteNote, handleEditNote, totalPages, dispatch } = useNotes();


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
      setIsloading(true);
      await fetchNotes();
      setIsloading(false)
    })()
  }, [])


  return (
    <>

      <Navbar />
      {isLoading ? <LoadingScreen> </LoadingScreen> :
        <div className=" flex flex-col justify-evenly items-center ">
          <div className="md:max-h-xl">
            <Notes openEditModal={openEditModal} deleteNote={deleteNote} />


            {/* {modalIsOpen &&
              <div className="flex align-center justify-center">
                <Note note={editNote} actions={{ closeEditModal }}></Note>
              </div>
            } */}


            <div>
              <ReactPaginate
                containerClassName="pagination-class"
                breakLabel="..."
                pageClassName="page-btn"
                previousClassName="chevron-btn"
                nextClassName="chevron-btn"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel={<ChevronLeft />}
                nextLabel={<ChevronRight />}
                renderOnZeroPageCount={null}
              />
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
                  padding: "0px",
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

