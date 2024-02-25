import React from 'react';
import { IconShare } from '../../../../../../Icons';

interface IShareCommentButton {
    className?: string
}

export function ShareCommentButton({ className }: IShareCommentButton) {
    return (
        <button
            className={className}
        >
            <IconShare />
            Share
        </button >
    )
}
