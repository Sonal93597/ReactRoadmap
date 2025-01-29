import { useState } from "react"

export default function Button({label, onClick})  {
const [show, setShow] = useState(true);

const handleToggle =() => {
    setShow(!show);
}

return(
    <button onClick={onClick} type="button">
        {label}
    </button>
)
}