import ClickAwayListener from 'react-click-away-listener';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import './Note.css'
import { useNotes } from '../context/NoteContext';

export default function Note({ note, actions }) {
    const [showTextField, setShowTextField] = useState(false);

    const { handleCreateNote } = useNotes();



    const onSubmit = async (data) => {
        await handleCreateNote(data);
        // actions.closeEditModal();
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: note?.title || '',
            tagline: note?.tagline || '',
            body: note?.body || ''
        }
    })

    function handleClickAway() {
        setShowTextField(false)
    }
    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway} >
                <div className="note-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {showTextField &&
                            <>
                                <input className="text-input" id="title" type="text" placeholder="Title" {...register("title")} />
                                <input className="text-input" id="tagline" type="text" placeholder="Tagline" {...register("tagline")} />
                            </>
                        }
                        <textarea rows="1" className="text-input" id="body" type="text" placeholder="Add a note..." onFocus={() => setShowTextField(true)} {...register("body")} />
                        {showTextField &&
                            <div class="action-bar">
                                <button onClick={handleSubmit(onSubmit)} className="btn-submit">Save</button>
                                <button onClick={() => { }} class="btn-close">Close</button>
                            </div>
                        }
                    </form>
                </div>
            </ClickAwayListener>
        </>
    )
}