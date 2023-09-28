import './form.css'
import { useForm } from "react-hook-form"

export default function Form({ note, actions }) {

  console.log("hello")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()  

  const onSubmit = (data) => console.log(data)

  console.log(watch("title")) // watch input value by passing the name of it

  return (
    <form className="w-1/2 " onSubmit={handleSubmit(onSubmit)}>
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-white  dark:border-gray-600">
        <div class="px-4 py-4 bg-white rounded-t-lg">
          <label for="title" class="sr-only ">Title</label>
          <input id="title" class="w-full px-0 text-md font-bold text-gray-900 bg-white border-0 outline-0 focus:ring-0 dark:text-black dark:placeholder-gray-400" placeholder="Title" defaultValue={note.title} {...register("title")} />
        </div>
        <div class="px-4 py-1 bg-white ">
          <label for="tagline" class="sr-only">Tagline</label>
          <input id="tagline" class="w-full px-0 text-sm text-gray-900 bg-white border-0 outline-0 focus:ring-0 dark:text-black dark:placeholder-gray-400" placeholder="Tagline" defaultValue={note.tagline} {...register("tagline")}/>
        </div>
        <div class="px-4 py-10 bg-white ">
          <label for="body" class="sr-only">Body</label>
          <textarea id="body" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 outline-0 focus:ring-0 dark:text-black dark:placeholder-gray-400" placeholder="Write a note..." defaultValue={note.body} {...register("body")}></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <input type="submit" className="submit-btn" value={"Save"} />
        

          <div class="mt-12 md:mt-14 w-full flex justify-center">
            <button onClick={actions.closeEditModal} class=" bg-black dark:text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">Close</button>
          </div>
        </div>
      </div>
    </form>
  )
}




{/* <div class="flex pl-0 space-x-1 sm:pl-2">
                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                  </svg>
                  <span class="sr-only">Attach file</span>
                </button>
                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span class="sr-only">Set location</span>
                </button>
                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span class="sr-only">Upload image</span>
                </button>
              </div> */}