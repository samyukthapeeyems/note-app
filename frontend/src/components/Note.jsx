import ClickAwayListener from 'react-click-away-listener';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import './Note.css'
import { useNotes } from '../context/NoteContext';
import { COLORS } from '../constants/colours';
import ColorPicker from './ColorPicker';

export default function Note({ note, actions }) {
    const [showTextField, setShowTextField] = useState(false);
    const [color, setColor] = useState(note?.color || COLORS[0])
    const { handleCreateNote, handleEditNote } = useNotes();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: note?.title || '',
            tagline: note?.tagline || '',
            body: note?.body || '',
        }
    })


    const onSubmit = async (data) => {
        let payload = { ...data, color }
        if (!note)
            await handleCreateNote(payload);
        else
            await handleEditNote(note._id, payload)
        closeNoteOverlay()
    }

    function closeNoteOverlay() {
        reset()
        setColor()
        setShowTextField(false)
        actions.closeEditModal()
    }

    useEffect(() => {
        if (note) {
            setShowTextField(true)
        }
    }, [note])
    return (
        <>
            <ClickAwayListener onClickAway={closeNoteOverlay} >
                <div className="note-container" style={{
                    backgroundColor: color,
                }}

                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {showTextField &&
                            <>
                                <input className="title-input" id="title" type="text" placeholder="Title" {...register("title")} />
                                <input className="tagline-input" id="tagline" type="text" placeholder="Tagline" {...register("tagline")} />
                            </>
                        }
                        <textarea rows="1" className="body-input" id="body" type="text" placeholder="Add a note..." onFocus={() => setShowTextField(true)} {...register("body")} />
                        {showTextField &&
                            <div class="action-bar">
                                <button onClick={handleSubmit(onSubmit)} className="btn-submit">Save</button>
                                <ColorPicker setColor={setColor}></ColorPicker>
                                <button onClick={() => { }} class="btn-close">Close</button>
                            </div>
                        }
                    </form>
                </div>
            </ClickAwayListener>
        </>
    )
}