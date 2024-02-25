import React from 'react';
import { IconX } from '../../../../Icons';

interface IModalButtonCloserX {
    onClose?: () => void;
    className?: string;
}

export function ModalButtonCloserX({ onClose, className }: IModalButtonCloserX) {
    return (
        <button
            className={className}
            onClick={onClose}
        >
            <IconX />
        </button>
    )
}
