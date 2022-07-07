import React, { ChildContextProvider, FC, PropsWithChildren } from 'react'
import ContextProvider from '.';
export interface Props {

}
const ContextState:FC<PropsWithChildren<Props>> = ({children}) => {
    const states = {}
    return(
        <ContextProvider.Provider value={states}>
                {children}
        </ContextProvider.Provider>
    )
}
export default ContextState