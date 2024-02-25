import { useEffect, useState } from "react";
import axios from "axios";

let count = 0;

export function useUserAvatar(userName?: string) {
    const [snoovatar, setSnoovatarData] = useState();

    useEffect(() => {
        if (!userName || userName === '[deleted]' || userName.includes(' ')) return;

        let isUnmount = false;

        let timer = setTimeout(async () => {
            try {
                const { data: { data: { snoovatar_img } } } =
                    await axios.get(`https://www.reddit.com/user/${userName}/about.json`);
                if (!isUnmount) {
                    setSnoovatarData(snoovatar_img);
                }
            } catch (error: any) {
                console.log(error);
            }
        }, count++ * 200);

        return () => {
            clearTimeout(timer);
            isUnmount = true;
            count = 0;
        }
    }, []);

    return [snoovatar]
}