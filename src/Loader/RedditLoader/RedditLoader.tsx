import React from "react";
import styles from './redditLoader.css'

interface IRedditLoader {
    className?: string;
}

export function RedditLoader({ className }: IRedditLoader) {
    return (
        <div className={`${styles.loader}${className ? ' ' + className : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
                <defs>
                    <linearGradient id="orangeredGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#FE7B0E"></stop>
                        <stop offset="100%" stopColor="#EF0A22"></stop>
                    </linearGradient>
                </defs>
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
                    </radialGradient></defs>
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
        </div>
    )
}