import React from "react";
import styles from './loader.css'
import { HTMLAttributes } from "enzyme";

export function Loader({ className }: HTMLAttributes) {
    return (
        <div className={`${styles.loader}${className ? ' ' + className : ''}`}></div>
    )
}