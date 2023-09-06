import { useState ,useEffect} from 'react'
import { ThemeProp } from '../context/themeContext';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

function useTheme() : ThemeProp{
    const [theme , setTheme] = useState<Theme>(Theme.LIGHT);
    useEffect(() => {
        document.documentElement.className = theme ;
    } , [theme])

    const switchTheme = () => {
        if(theme === Theme.DARK){
            setTheme(Theme.LIGHT)
        }else{
            setTheme(Theme.DARK)
        }
    } 
    return {theme , switchTheme}
}

export default useTheme