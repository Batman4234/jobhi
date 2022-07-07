import React, {createContext, useContext as ContextUse} from 'react';
const context = createContext({});
export default context;
export const useContext = () => {
    return ContextUse(context)
} 