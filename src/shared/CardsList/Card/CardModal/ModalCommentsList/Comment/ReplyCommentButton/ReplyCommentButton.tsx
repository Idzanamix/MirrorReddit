import React from 'react';
import { IconComments } from '../../../../../../Icons';

interface IReplyCommentButton {
    className?: string;
    onOpen?: () => void;
}

export function ReplyCommentButton({ className, onOpen }: IReplyCommentButton) {
    return (
        <button
            className={className}
            onClick={onOpen}
        >
            <IconComments />
            Reply
        </button >
    )
}
