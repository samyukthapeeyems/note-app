import { COLORS } from "../constants/colours";

export default function ColorPicker({ setColor }) {
  return (
    <ul id="colors" className="relative cursor-default w-max flex gap-1 bg-transparent rounded p-1.5 z-50">
      {COLORS.map((c) => (
        <li
          key={c}
          onClick={(e) => setColor(c)}
          className="color cursor-pointer w-6 h-6 rounded-full border hover:border-gray-500 flex items-center justify-center"
          style={{
            background: c,
          }}
        >
        </li>
      ))}
    </ul>
  )
}