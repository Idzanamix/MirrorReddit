import { RefObject, useEffect, useState } from "react";

type setIsWidthType = {
    [k: string]: boolean;
}


export function useAdaptiveForm(ref: RefObject<HTMLElement>) {
    const [isWidth, setIsWidth] = useState<setIsWidthType>({});

    useEffect(() => {

        let isUnmount = false;

        function handleResizeForm() {
            if (ref.current && !isUnmount) {
                setIsWidth(
                    {
                        maxWidth800: ref.current?.offsetWidth >= 800 ? true : false,
                        maxWidth753: ref.current?.offsetWidth >= 753 ? true : false,
                        maxWidth706: ref.current?.offsetWidth >= 706 ? true : false,
                        maxWidth659: ref.current?.offsetWidth >= 659 ? true : false,
                        maxWidth612: ref.current?.offsetWidth >= 612 ? true : false,
                        maxWidth565: ref.current?.offsetWidth >= 565 ? true : false,
                        maxWidth518: ref.current?.offsetWidth >= 518 ? true : false,
                        maxWidth471: ref.current?.offsetWidth >= 471 ? true : false,
                        maxWidth424: ref.current?.offsetWidth >= 424 ? true : false,
                        maxWidth377: ref.current?.offsetWidth >= 377 ? true : false,
                        maxWidth330: ref.current?.offsetWidth >= 330 ? true : false,
                        maxWidth295: ref.current?.offsetWidth >= 295 ? true : false,
                        maxWidth200: ref.current?.offsetWidth >= 200 ? true : false,
                    }
                )
            }
        }
        handleResizeForm();

        window.addEventListener('resize', handleResizeForm);

        return () => {
            window.removeEventListener('resize', handleResizeForm);

            isUnmount = true;
        }
    }, [])

    return [isWidth]
}