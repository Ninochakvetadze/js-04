import { Children } from "react";
import { createContext } from "react";
export const LanguageContext = createContext();

export function LanguageProvider({ Children }) {
    return (
        <LanguageProvider.Provider value="Reed">
            {Children}
        </LanguageProvider.Provider>
    );
}
