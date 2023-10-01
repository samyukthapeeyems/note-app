import { PinIcon, TrashIcon } from "../assets/Icons";

export default function Card({ note, actions }) {

    return (
        <>
            <div onClick={() => actions.openEditModal(note)} className="max-w-sm rounded-xl overflow-hidden m-5 mb-0 shadow-lg squeeze-animation"
                style={{
                    backgroundColor: note.color
                }}
            >
                <div class="px-6 py-4 ">
                    <div class="font-bold text-gray-800 text-xl mb-2 ">{note.title}</div>
                    <p class="text-gray-700 text-base line-clamp-3">
                        {note.body}
                    </p>

                </div>
                <div class="px-6 pt-1">
                    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{note.tagline}</span>
                </div>

                {/* COLOR */}

                <div className="flex w-full h-12 align-middle justify-end px-2.5 py-1">

                    {/* PIN */}
                    <button className="btn" onClick={(event) => {
                        console.log("ff")
                        event.stopPropagation();
                        actions.handlePinToggle(note._id)
                    }}>
                        <PinIcon></PinIcon>
                    </button>



                    {/* DELETE */}
                    <button className="btn" onClick={async (event) => {
                        event.stopPropagation();
                        await actions.deleteNote(note._id);
                    }}>
                        <TrashIcon></TrashIcon>
                    </button>
                </div>
            </div>

        </>
    )
}