import React, { useEffect, useState } from "react";
import redditDefaultImageBlue from '../../img/redditAnonimBlue.png'
import redditDefaultImageGreen from '../../img/redditAnonimGreen.png'
import redditDefaultImageBrown from '../../img/redditAnonimBrown.png'
import redditDefaultImageYellow from '../../img/redditAnonimYellow.png'
import redditDefaultImageRed from '../../img/redditAnonimRed.png'
import redditDefaultImagePurple from '../../img/redditDefaultImagePurple.png'


export function IconRedditDefault({ className }: { className?: string }) {

    const imagesDefault: any = [
        { image: redditDefaultImageBlue },
        { image: redditDefaultImageGreen },
        { image: redditDefaultImageBrown },
        { image: redditDefaultImageYellow },
        { image: redditDefaultImageRed },
        { image: redditDefaultImagePurple },
    ]


    function shuffle(array: any) {
        const [image, setImage] = useState('')

        useEffect(() => {
            setImage(array.sort(() => Math.random() - 0.5)[0].image)
        }, [])

        return image
    }

    return (
        <img
            className={className}
            src={shuffle(imagesDefault)}
        />
    )
}