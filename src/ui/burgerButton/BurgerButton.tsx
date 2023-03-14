import { useRef, useState } from "react"
import './burgebutton.scss'
interface BurgerButtonProps {
    function: Function
    className: string
}
export default function BurgerButton(props: BurgerButtonProps) {
    const { className } = props

    const [isActive, setActive] = useState(false)
    const startRer = useRef(true)
    const openButtonState = isActive ?
        'burgerbutton-active' :
        'burgerbutton-inactive'

    const openButtonStart = startRer.current ?
        'burgerbutton-on-start' :
        ''
    const openButtonClases = [
        "burgerbutton",
        openButtonState,
        openButtonStart,
        className,
    ]
    function handleButtonClick() {
        startRer.current = false
        setActive(!isActive)
        props.function()
    }
    return (
        <button className={`${openButtonClases.join(' ')}`}
            onClick={handleButtonClick}>
            <span></span><span></span><span></span>
        </button>
    )
}