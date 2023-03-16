import { useRef, useState } from "react"
import './burgebutton.scss'
interface BurgerButtonProps {
    function: Function
    className: string
    state: boolean
}
export default function BurgerButton(props: BurgerButtonProps) {
    const { className, state } = props

    const startRer = useRef(true)
    const openButtonState = state ?
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
        props.function()
    }
    return (
        <button className={`${openButtonClases.join(' ')}`}
            onClick={handleButtonClick}>
            <span></span><span></span><span></span>
        </button>
    )
}