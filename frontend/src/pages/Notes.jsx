import { useNotes } from "../context/NoteContext"
import Card from "../components/Card"
export default function Notes({ openEditModal ,deleteNote }) {



    const { pinnedNotes, notes, handlePinToggle } = useNotes()
    return (
        <>
            {/* Pinned Notes */}
            <div id="notes" class=" container grid grid-cols-1 mx-10 md:mx-20 lg:mx-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 md:px-10 ">
                {pinnedNotes.map((note) => <Card note={note} actions={{ openEditModal, deleteNote, handlePinToggle }} />)}
            </div>
            {/* Notes */}
            <div id="notes" class=" container grid grid-cols-1 mx-10 md:mx-20 lg:mx-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 md:px-10 ">
                {notes.map((note) => <Card note={note} actions={{ openEditModal, deleteNote, handlePinToggle }} />)}
            </div>
        </>
    )
}