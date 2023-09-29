import { useState } from "react";
import ColorPicker from "./ColorPicker";
export default function Card({ note, actions }) {

    const [displayColorPicker, setDisplayColorPicker] = useState(false)


    return (
        <>
            <div onClick={() => actions.openEditModal(note)} className="max-w-sm rounded-xl overflow-hidden m-5 opacity-100 bg-white shadow-lg squeeze-animation">
                


                <div class="px-6 py-4 ">
                    <div class="font-bold text-gray-800 text-xl mb-2 ">{note.title}</div>
                    <p class="text-gray-700 text-base">
                        {note.body}
                    </p>
                    
                </div>
                <div class="px-6 pt-1">
                    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{note.tagline}</span>
                </div>





                {/* COLOR */}



                <div className="flex w-full h-12 align-middle justify-end px-2.5 py-1">
                    {/* <div className="flex px-2 justify-end mt-3 items-center h-10"> */}
                    {displayColorPicker && <ColorPicker></ColorPicker>}

                    <button className="btn" onClick={(event) => {
                        console.log("ff")
                        event.stopPropagation();
                        setDisplayColorPicker(true)
                    }}
                        onBlur={() => setDisplayColorPicker(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-xs"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                        </svg>
                    </button>


                    <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M387 128c-11.8 0-21.3 9.5-21.3 21.3v213.3c0 58.9-47.7 106.7-106.7 106.7s-106.7-47.8-106.7-106.7v-256c0-35.3 28.6-64 64-64s64 28.7 64 64V320c0 11.8-9.6 21.3-21.3 21.3s-21.3-9.5-21.3-21.3V149.3c0-11.8-9.6-21.3-21.3-21.3c-11.8 0-21.3 9.5-21.3 21.3V320c0 35.4 28.6 64 64 64s64-28.6 64-64V106.7C323 47.8 275.2 0 216.3 0S109.7 47.8 109.7 106.7v256c0 82.5 66.9 149.3 149.3 149.3s149.3-66.9 149.3-149.3V149.3c0-11.8-9.5-21.3-21.3-21.3z"/></svg>
                </button>

                    {/* labl */}

                    <button className="btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-xs"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                            />
                        </svg>
                    </button>

                    {/* DLETE */}
                    <button className="btn" onClick={async (event) => {
                        event.stopPropagation();
                        await actions.deleteNote(note._id);
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-sm text-gray-600"
                            fill="none"
                            viewBox="0 0 25 25"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

        </>
    )
}