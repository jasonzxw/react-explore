import React, { useState ,useContext  , useEffect} from 'react'
import ThemeContext from '../context/themeContext'
interface CounterProps{
    text: string,
    children?: React.ReactNode
}
const Counter = ({text , children}: CounterProps) => {
    const [count , setCount] = useState<number>(0)
    const {switchTheme} = useContext(ThemeContext)
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setCount(count+1);
        setCount(count+1);
        setCount((count) => count +3);
        // prevent event propagation
        e.stopPropagation();
        console.log(e)
        switchTheme()
    }
    useEffect(() => {
        document.body.addEventListener('click',()=> console.log(`dispatch body event`),true)
    },[])
    return(
        <div onClick={handleClick}>
            {text} count is {count}
            { children }
        </div>
    )
}

export default Counter