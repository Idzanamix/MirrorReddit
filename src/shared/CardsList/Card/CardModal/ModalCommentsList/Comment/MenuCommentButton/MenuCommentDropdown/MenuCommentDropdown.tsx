import React from 'react';
import { HTMLAttributes } from 'enzyme';
import styles from './menuCommentDropdown.css'
import { IconHide, IconReport, IconSave } from '../../../../../../../Icons';
import { GenericList } from '../../../../../../../../utils/react/GenericList';
import { useModalCloser } from '../../../../../../../../hooks/useModalCloser';
import { useResizeCloser } from '../../../../../../../../hooks/useResizeCloser';
import { generateId } from '../../../../../../../../utils/ts/generateRandomIndex';

interface IMenuCommentDropdown extends HTMLAttributes {
    onClose: () => void;
}

export function MenuCommentDropdown({ className, onClose, style }: IMenuCommentDropdown) {
    const $CommentBtnsDropdown = [
        { item: <IconReport />, text: 'Report' },
        { item: <IconSave />, text: 'Save' },
        { item: <IconHide />, text: 'Hide' },
    ].map(generateId);
    useModalCloser({ onClose });
    useResizeCloser(onClose);

    return (
        <ul
            className={styles.list}
            style={style}
        >
            <GenericList
                As={'button'}
                className={`${className ? className + ' ' : ''}${styles.item}`}
                list={$CommentBtnsDropdown}
            />
        </ul>
    )
}
