import styles from './menuDropdown.css';
import React, { useContext, useRef } from 'react';
import { EColor } from '../../../../utils/react/Text';
import { cardContext } from '../../../../context/CardContext';
import { GenericList } from '../../../../utils/react/GenericList';
import { useModalCloser } from '../../../../hooks/useModalCloser';
import { generateId } from '../../../../utils/ts/generateRandomIndex';
import {
    IconComments,
    IconHide,
    IconReport,
    IconSave,
    IconShare
} from '../../../Icons';
import { Link } from 'react-router-dom';

interface IDropdownProps {
    onClose: () => void;
}

export function MenuDropdown({ onClose }: IDropdownProps) {
    const { postSubreddit, postId } = useContext(cardContext);
    const $MenuList = [
        {
            item:
                <Link
                    to={`${postSubreddit}/comments/${postId}`}
                >
                    <IconComments />
                    Comments
                </Link>,
            onClose: () => {
                onClose();
            }
        },
        {
            text: 'Share',
            item: <IconShare />,
            onClose: onClose
        },
        {
            text: 'Hide',
            item: <IconHide />,
            onClose: onClose
        },
        {
            text: 'Save',
            item: <IconSave />,
            onClose: onClose
        },
        {
            text: 'Report',
            item: <IconReport />,
            onClose: onClose
        }
    ].map(generateId);
    const refDropdown = useRef(null);
    useModalCloser({ onClose, ref: refDropdown });

    return (
        <ul
            ref={refDropdown}
            className={styles.dropdownList}
        >
            <GenericList
                As={'li'}
                className={styles.dropdownItem}
                list={$MenuList}
                size={14}
                mobileSize={12}
                color={EColor.gray99}
            />
        </ul>
    );
}

