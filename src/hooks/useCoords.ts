import { useState, useEffect } from "react";

type Coords = {
    left: number;
    top: number;
};

export function useCoords(ref: any, isOpen: boolean) {
    const [coords, setCoords] = useState<Coords | null>(null);

    const getCoords = (): Coords | null => {
        if (ref.current) {
            return {
                left: ref.current.offsetLeft,
                top: ref.current.offsetTop + ref.current.offsetHeight,
            };
        }

        return null;
    };

    useEffect(() => {
        if (!isOpen) return;
        setCoords(getCoords());
    }, [isOpen]);

    return [coords]
}