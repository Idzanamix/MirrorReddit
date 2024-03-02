import React from "react";
import styles from "../../shared/Header/LogoLink/logoLink.css";

export function RedditLogo() {
    return (<>
        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 216 216">
            <defs>
                <radialGradient id="snoo-radial-gragient" cx="169.75" cy="92.19" fx="169.75" fy="92.19" r="50.98" gradientTransform="translate(0 11.64) scale(1 .87)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#feffff"></stop>
                    <stop offset=".4" stopColor="#feffff"></stop>
                    <stop offset=".51" stopColor="#f9fcfc"></stop>
                    <stop offset=".62" stopColor="#edf3f5"></stop>
                    <stop offset=".7" stopColor="#dee9ec"></stop>
                    <stop offset=".72" stopColor="#d8e4e8"></stop>
                    <stop offset=".76" stopColor="#ccd8df"></stop>
                    <stop offset=".8" stopColor="#c8d5dd"></stop>
                    <stop offset=".83" stopColor="#ccd6de"></stop>
                    <stop offset=".85" stopColor="#d8dbe2"></stop>
                    <stop offset=".88" stopColor="#ede3e9"></stop>
                    <stop offset=".9" stopColor="#ffebef"></stop>
                </radialGradient>
                <radialGradient id="snoo-radial-gragient-2" cx="47.31" fx="47.31" r="50.98" xlinkHref="#snoo-radial-gragient"></radialGradient>
                <radialGradient id="snoo-radial-gragient-3" cx="109.61" cy="85.59" fx="109.61" fy="85.59" r="153.78" gradientTransform="translate(0 25.56) scale(1 .7)" xlinkHref="#snoo-radial-gragient"></radialGradient>
                <radialGradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" fx="-6.01" fy="64.68" r="12.85" gradientTransform="translate(81.08 27.26) scale(1.07 1.55)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#f60"></stop>
                    <stop offset=".5" stopColor="#ff4500"></stop>
                    <stop offset=".7" stopColor="#fc4301"></stop>
                    <stop offset=".82" stopColor="#f43f07"></stop>
                    <stop offset=".92" stopColor="#e53812"></stop>
                    <stop offset="1" stopColor="#d4301f"></stop>
                </radialGradient>
                <radialGradient id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" fx="-73.55" fy="64.68" r="12.85" gradientTransform="translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)" xlinkHref="#snoo-radial-gragient-4"></radialGradient>
                <radialGradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" fx="107.93" fy="166.96" r="45.3" gradientTransform="translate(0 57.4) scale(1 .66)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#172e35"></stop>
                    <stop offset=".29" stopColor="#0e1c21"></stop>
                    <stop offset=".73" stopColor="#030708"></stop>
                    <stop offset="1" stopColor="#000"></stop>
                </radialGradient>
                <radialGradient id="snoo-radial-gragient-7" cx="147.88" cy="32.94" fx="147.88" fy="32.94" r="39.77" gradientTransform="translate(0 .54) scale(1 .98)" xlinkHref="#snoo-radial-gragient"></radialGradient>
                <radialGradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" fx="131.31" fy="73.08" r="32.6" gradientUnits="userSpaceOnUse">
                    <stop offset=".48" stopColor="#7a9299"></stop>
                    <stop offset=".67" stopColor="#172e35"></stop>
                    <stop offset=".75" stopColor="#000"></stop>
                    <stop offset=".82" stopColor="#172e35"></stop>
                </radialGradient>
            </defs>
            <path fill="#ff4500" d="m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z"></path>
            <circle fill="url(#snoo-radial-gragient)" cx="169.22" cy="106.98" r="25.22"></circle>
            <circle fill="url(#snoo-radial-gragient-2)" cx="46.78" cy="106.98" r="25.22"></circle>
            <ellipse fill="url(#snoo-radial-gragient-3)" cx="108.06" cy="128.64" rx="72" ry="54"></ellipse>
            <path fill="url(#snoo-radial-gragient-4)" d="m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z"></path>
            <path fill="url(#snoo-radial-gragient-5)" d="m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z"></path>
            <ellipse fill="#ffc49c" cx="79.63" cy="116.37" rx="2.8" ry="3.05"></ellipse>
            <ellipse fill="#ffc49c" cx="146.21" cy="116.37" rx="2.8" ry="3.05"></ellipse>
            <path fill="url(#snoo-radial-gragient-6)" d="m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"></path>
            <circle fill="url(#snoo-radial-gragient-7)" cx="147.49" cy="49.43" r="17.87"></circle>
            <path fill="url(#snoo-radial-gragient-8)" d="m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z"></path>
            <path fill="#842123" d="m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z"></path>
            <path fill="#842123" d="m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z"></path>
        </svg>

        <svg className={styles.title} viewBox="0 0 439 149" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <g fill="var(--logoColor)">
                <path d="m71.62,45.92l-12.01,28.56c-1.51-.76-5.11-1.61-8.51-1.61s-6.81.85-10.12,2.46c-6.53,3.31-11.35,9.93-11.35,19.48v52.3H-.26V45.35h29.04v14.28h.57c6.81-9.08,17.21-15.79,30.74-15.79,4.92,0,9.65.95,11.54,2.08Z"></path>
                <path d="m65.84,96.52c0-29.41,20.15-52.68,50.32-52.68,27.33,0,46.91,19.96,46.91,48.05,0,4.92-.47,9.55-1.51,14h-68.48c3.12,10.69,12.39,19.01,26.29,19.01,7.66,0,18.54-2.74,24.4-7.28l9.27,22.32c-8.61,5.86-21.75,8.7-33.29,8.7-32.25,0-53.91-20.81-53.91-52.11Zm26.67-9.36h43.03c0-13.05-8.89-19.96-19.77-19.96-12.3,0-20.62,7.94-23.27,19.96Z"></path>
                <path d="m419.53-.37c10.03,0,18.25,8.23,18.25,18.25s-8.23,18.25-18.25,18.25-18.25-8.23-18.25-18.25S409.51-.37,419.53-.37Zm14.94,147.49h-29.89V45.35h29.89v101.77Z"></path>
                <path d="m246,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.42,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z"></path>
                <path d="m360.15,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.28,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z"></path>
            </g>
        </svg>
        <svg className={styles.namix} viewBox="0 0 65 22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g transform="translate(0 0)">
                <text transform="translate(1 20)" fill="#9e9e9e" fontSize="22" fontFamily="Roboto-Bold,Roboto">
                    <tspan x="0" y="0">namix</tspan>
                </text>
            </g>
        </svg>
    </>)
}