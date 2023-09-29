import { useEffect, useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import './home.css'
import { useNotes } from "../context/NoteContext";
import AlertModal from "../components/AlertModal";
import LoadingScreen from "../components/LoadingScreen";
import ReactPaginate from 'react-paginate';

import Modal from 'react-modal';

Modal.setAppElement('#root');



export default function Home() {

  let itemsPerPage = 4;
  let initialPage = 1;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [pageCount, setPageCount] = useState(1);
  // const [itemOffset, setItemOffset] = useState(0);
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setcurrentPage] = useState(0);


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setcurrentPage(event.selected);
		handleFetch();
  };

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
        <div className=" flex flex-col justify-evenly items-center ">
          <div className="md:max-h-xl">
            <div id="notes" class=" container grid grid-cols-1 mx-10 md:mx-20 lg:mx-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 md:px-10 ">
              {notes.map((note) => <Card note={note} actions={{ openEditModal, deleteNote, handlePinNote, handleUnpinNote }} />)}
            </div>
            <div>
            <ReactPaginate
              containerClassName="pagination-class"
              breakLabel="..."
              nextLabel={
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 6l6 6l-6 6" />
              </svg>
              }
              pageClassName="page-btn"
              previousClassName="chevron-btn"
              nextClassName="chevron-btn"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l-6 6l6 6" />
              </svg>
              }
              renderOnZeroPageCount={null}
            /></div>



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



          <div className="flex ">
            {/* <button class="chevron-btn ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l-6 6l6 6" />
              </svg>
            </button> */}

            {/* <button class="chevron-btn mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 6l6 6l-6 6" />
              </svg>
            </button> */}
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