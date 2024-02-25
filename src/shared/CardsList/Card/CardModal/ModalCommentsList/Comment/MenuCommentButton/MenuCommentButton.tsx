import { createPortal } from 'react-dom';
import styles from './menuCommentButton.css'
import React, { useRef, useState } from 'react';
import { IconMenu } from '../../../../../../Icons';
import { MenuCommentDropdown } from './MenuCommentDropdown';
import { useCoords } from '../../../../../../../hooks/useCoords';

interface IMenuCommentButton {
    className?: string;
}

export function MenuCommentButton({ className }: IMenuCommentButton) {
    const commentsRoot = document.getElementById('comments_root');
    if (!commentsRoot) return null;

    const [isCommentMenuOpen, setisCommentMenuOpen] = useState(false);
    const controlRef = useRef<HTMLButtonElement>(null);
    const [coords] = useCoords(controlRef, isCommentMenuOpen);

    return (
        <>
            <button
                className={`${className ? className + ' ' : ''}${styles.button}`}
                onClick={() => setisCommentMenuOpen(true)}
                ref={controlRef}
            >
                <IconMenu />
            </button>
            
            {isCommentMenuOpen && coords && createPortal(
                <MenuCommentDropdown
                    style={{
                        left: coords?.left + 'px',
                        top: coords?.top + 'px',
                    }}
                    className={className}
                    onClose={() => setisCommentMenuOpen(false)}
                />, commentsRoot)
            }
        </>
    )
}