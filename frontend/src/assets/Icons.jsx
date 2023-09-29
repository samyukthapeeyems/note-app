

export function ChevronRight() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 6l6 6l-6 6" />
    </svg>
}


export function ChevronLeft() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" color="rgb(55 65 81)">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l-6 6l6 6" />
    </svg>
}

export function ColorIcon() {
    return <svg
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
}


export function PinIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
        <path fill="currentColor" d="M387 128c-11.8 0-21.3 9.5-21.3 21.3v213.3c0 58.9-47.7 106.7-106.7 106.7s-106.7-47.8-106.7-106.7v-256c0-35.3 28.6-64 64-64s64 28.7 64 64V320c0 11.8-9.6 21.3-21.3 21.3s-21.3-9.5-21.3-21.3V149.3c0-11.8-9.6-21.3-21.3-21.3c-11.8 0-21.3 9.5-21.3 21.3V320c0 35.4 28.6 64 64 64s64-28.6 64-64V106.7C323 47.8 275.2 0 216.3 0S109.7 47.8 109.7 106.7v256c0 82.5 66.9 149.3 149.3 149.3s149.3-66.9 149.3-149.3V149.3c0-11.8-9.5-21.3-21.3-21.3z" />
    </svg>
}

export function TrashIcon() {
    return <svg
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
}