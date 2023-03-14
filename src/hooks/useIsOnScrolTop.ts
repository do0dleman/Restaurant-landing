import { useEffect, useState } from "react";

export default function useIsOnScrolTop() {
    const [isOnTop, setOnTop] = useState(true)

    useEffect(() => {
        if (window.scrollY !== 0)
            setOnTop(false)
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0)
                setOnTop(true)
            if (window.scrollY !== 0)
                setOnTop(false)
        })
    }, [])

    return isOnTop
}