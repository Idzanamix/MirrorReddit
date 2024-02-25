import React, { forwardRef, useState } from 'react';
import { IconMenu } from '../../../../../Icons';
import { MenuFormBtnsDropdown } from './MenuFormBtnsDropdown';
import { createPortal } from 'react-dom';
import { useCoords } from '../../../../../../hooks/useCoords';

interface IMenuFormButtonControlsProps {
    className?: string;
    props?: {
        [k: string]: boolean;
    }
    rootId: string;
}

export const MenuFormButtonControls =
    forwardRef(({ className, props, rootId }: IMenuFormButtonControlsProps, ref) => {
        const buttonsRoot = document.getElementById(rootId);

        if (!buttonsRoot) return null;

        const [isBtnsDropdownOpen, setBtnDropdownOpen] = useState(false);
        const [coords] = useCoords(ref, isBtnsDropdownOpen);

        return (
            <>
                <button
                    className={className}
                    onClick={() => setBtnDropdownOpen(true)}
                >
                    <IconMenu />
                </button>

                {isBtnsDropdownOpen &&
                    createPortal(
                        <MenuFormBtnsDropdown
                            style={{
                                left: coords?.left + 'px',
                                top: coords?.top + 'px',
                            }}
                            className={className}
                            onClose={() => setBtnDropdownOpen(false)}
                            props={props}
                        />, buttonsRoot)}
            </>
        )
    })
