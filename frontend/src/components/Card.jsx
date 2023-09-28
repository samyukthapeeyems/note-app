export default function Card({ note, actions }) {



    return (
        <>
            <div onClick={() => actions.openEditModal(note)} className="max-w-sm rounded-xl overflow-hidden border border-amber-800 border-opacity-10 m-5 bg-amber-800 bg-opacity-10 backdrop-blur-lg drop-shadow-lg squeeze-animation">
                {/* <button className="btn">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`icon-sm transform ${
                note.isPinned === true ? "-rotate-45" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
                </button> */}

                <div class="px-6 py-4 ">
                    <div class="font-bold text-gray-800 text-xl mb-2">{note.title}</div>
                    <p class="text-gray-700 text-base">
                        {note.body}
                    </p>
                </div>
                <div class="px-6 pt-1">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{note.tagline}</span>
                </div>
                <div className="w-full h-12 flex align-middle justify-end px-2.5 py-1">
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
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                        </svg>
                    </button>



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


                    {/* <button className="btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-600"
                            width="21"
                            height="21"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19ZM7 7V17H17V7H7ZM11 15.362L8.3 12.715L9.7 11.285L11 12.556L14.3 9.289L15.7 10.711L11 15.361V15.362Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>


                    <button className="btn">
                        <svg
                            className="text-gray-600"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM5 5V19H19V5H5ZM17 13H7V11H17V13Z"
                                fill="currentColor"
                            ></path>
                        </svg>

                    </button> */}


                    <button className="btn" onClick={async(event) => {
                        event.stopPropagation();
                        await actions.deleteNote(note._id);
                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-sm text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
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