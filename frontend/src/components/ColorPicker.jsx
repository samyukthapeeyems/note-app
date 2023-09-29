import { COLORS } from "../constants/colours";

export default function ColorPicker({ setColor }) {
  return (
    <ul className="relative cursor-default w-max  flex  gap-1 bg-white shadow rounded p-1.5 z-50">
      {COLORS.map((c) => (
        <li
          key={c}
          onClick={(e) => setColor(c)}
          className="color cursor-pointer w-6 h-6 rounded-full border hover:border-black flex items-center justify-center"
          style={{
            background: c,
          }}
        >
        </li>
      ))}
    </ul>
  )
}