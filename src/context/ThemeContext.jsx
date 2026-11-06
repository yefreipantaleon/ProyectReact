import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [dark, setDark] = useLocalStorage('s13_tema', false);

    return (
        <ThemeContext.Provider value={{ dark, toggle: () => setDark(v => !v) }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
