import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getPostsAsyncThunk } from "../storeRedux/posts/getPostsAsyncThunk";


export function useScrollPostsData() {
    const dispatch = useDispatch();
    const refEndingOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((enrties) => {
            if (enrties[0].isIntersecting) {
                dispatch(getPostsAsyncThunk());
            }
        },
            { rootMargin: '100px' });

        if (refEndingOfList.current) {
            observer.observe(refEndingOfList.current);
        }

        return () => {
            if (refEndingOfList.current) {
                observer.unobserve(refEndingOfList.current);
            }
        }
    }, [refEndingOfList.current])

    return [refEndingOfList]
}
