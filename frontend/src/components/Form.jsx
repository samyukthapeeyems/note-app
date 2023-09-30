import { useState } from 'react';
import ColorPicker from './ColorPicker'
import './form.css'
import { useForm } from "react-hook-form"
import { COLORS } from '../constants/colours';


export default function Form({ note, actions }) {

  const [color, setColor] = useState(note?.color || COLORS[0])


  console.log("hello")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await actions.handleEditNote(note._id, data);
    actions.closeEditModal();
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)} >
      <div class="w-full  border-0 rounded-lg " style={{
        backgroundColor: color,
      }}>
        <div class="px-4 py-4 bg-transparent rounded-t-lg">
          <label for="title" class="sr-only ">Title</label>
          <input id="title" class="w-full px-2 py-2 text-lg font-bold text-gray-900 bg-transparent border-0 outline-0 focus:ring-0  dark:placeholder-gray-700" placeholder="Title" defaultValue={note.title} {...register("title")} />
        </div>
        <div class="px-4 py-1 bg-transparent ">
          <label for="tagline" class="sr-only">Tagline</label>
          <input id="tagline" class="w-full px-2 text-md font-semibold text-gray-900 bg-transparent border-0 outline-0 focus:ring-0  dark:placeholder-gray-700" placeholder="Tagline" defaultValue={note.tagline} {...register("tagline")} />
        </div>
        <div class="px-4 py-10 bg-transparent ">
          <label for="body" class="sr-only">Body</label>
          <textarea id="body" rows="9" class="w-full px-2 text-sm text-gray-900 bg-transparent border-0 outline-0 focus:ring-0 dark:text-black dark:placeholder-gray-700" placeholder="Write a note..." defaultValue={note.body} {...register("body")}></textarea>
        </div>
        <div class="flex items-center justify-between px-5 py-4 border-0 dark:border-gray-600">
          <input type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2" value="Save" />
          <ColorPicker setColor={setColor}></ColorPicker>
          <button onClick={actions.closeEditModal} class=" bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">Close</button>
        </div>
      </div>
    </form>
  )
}
