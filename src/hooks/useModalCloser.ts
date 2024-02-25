import { RefObject, useEffect } from "react";

interface IUseModalCloser {
    onClose: () => void;
    ref?: RefObject<refType>;
    ref2?: RefObject<refType>;
    timeDelay?: number;
}

type refType = HTMLDivElement | HTMLUListElement | HTMLButtonElement | HTMLSpanElement;

export function useModalCloser({ onClose, ref, ref2, timeDelay }: IUseModalCloser) {

    useEffect(() => {
        let isUnmount = false;

        function handleClick(event: MouseEvent) {
            if (!isUnmount &&
                event.target instanceof Node &&
                !ref?.current?.contains(event.target) &&
                !ref2?.current?.contains(event.target)) {

                setTimeout(() => {
                    onClose?.();
                    
                }, timeDelay);

            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            isUnmount = true;
        }

    }, []);
}

