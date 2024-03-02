import React from "react";

interface IIconVk {
    className?: string;
}

export function IconVk({ className }: IIconVk) {
    return (
        <svg className={className} width="31" height="31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 24h1c5.44 0 8.15 0 9.83-1.68C24 20.64 24 17.92 24 12.5v-1.02c0-5.4 0-8.12-1.67-9.8C20.65 0 17.93 0 12.5 0h-1C6.06 0 3.35 0 1.67 1.68 0 3.36 0 6.08 0 11.5v1.02c0 5.4 0 8.12 1.68 9.8C3.36 24 6.08 24 11.5 24Z" fill="#07F"></path>
            <path d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z" fill="#fff"></path>
        </svg>
    )
}