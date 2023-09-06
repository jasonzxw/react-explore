import { createContext } from 'react'
import { Theme } from '../hooks/useTheme';

export interface ThemeProp{
    theme: Theme,
    switchTheme: () => void
}
const ThemeContext = createContext<ThemeProp>({theme: Theme.LIGHT , switchTheme: ()=> void 0}) ;

export default ThemeContext