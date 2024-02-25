import React from "react";
import styles from './error.css';
import errorReddit from '../img/errorReddit.png';


export function Error(massage: { massage: string }) {
    console.log(massage);

    return (
        <div role="alert" className={styles.error}>
            <div className={styles.container}>
                <img className={styles.image} src={errorReddit} alt="Error" />
                <div className={styles.wrapper}>
                    <span className={styles.descr}>
                        Something went wrong...
                    </span>
                    <span className={styles.message}>
                        {massage.massage}
                    </span>
                </div>
            </div>
        </div>
    )
}