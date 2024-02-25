import { ReactNode, RefObject, createContext, useRef } from "react";
import React from "react";

interface ICardListContext {
    rowHeights?: RefObject<any>;
    refCardList?: RefObject<any>;
}

interface ICardListContextProvider {
    children: ReactNode
}

export const CardListContext = createContext<ICardListContext>({});

export function CardListContextProvider({ children }: ICardListContextProvider) {
    const rowHeights = useRef({});
    const refCardList = useRef({});

    return (
        <CardListContext.Provider value={{ rowHeights, refCardList }}>
            {children}
        </CardListContext.Provider>
    )
}