import React from 'react';
import styles from './menuFormBtnsDropdown.css'
import { useModalCloser } from '../../../../../../../hooks/useModalCloser';
import { GenericList } from '../../../../../../../utils/react/GenericList';
import { generateId } from '../../../../../../../utils/ts/generateRandomIndex';
import { HTMLAttributes } from 'enzyme';
import {
    IconPicture,
    IconFile,
    IconDownload,
    IconUser,
    IconReverse,
    IconShareForm,
    IconRecord,
    IconMessage,
    IconPencil,
    IconWord,
    IconPdf
} from '../../../../../../Icons';
import { useResizeCloser } from '../../../../../../../hooks/useResizeCloser';

interface IMenuFormBtnsDropdownProps extends HTMLAttributes {
    onClose: () => void;
    props?: {
        [k: string]: boolean;
    };
}

export function MenuFormBtnsDropdown({ className, onClose, props, style }: IMenuFormBtnsDropdownProps) {
    const $FormBtnsDropdown = [
        { item: !props?.maxWidth800 && <IconPicture /> },
        { item: !props?.maxWidth753 && <IconFile /> },
        { item: !props?.maxWidth706 && <IconDownload /> },
        { item: !props?.maxWidth659 && <IconUser /> },
        { item: !props?.maxWidth612 && <IconReverse /> },
        { item: !props?.maxWidth565 && <IconShareForm /> },
        { item: !props?.maxWidth518 && <IconRecord /> },
        { item: !props?.maxWidth471 && <IconMessage /> },
        { item: !props?.maxWidth424 && <IconPencil /> },
        { item: !props?.maxWidth377 && <IconWord /> },
        { item: !props?.maxWidth330 && <IconPdf /> },
    ].filter(item => item.item).map(generateId);

    useModalCloser({ onClose });
    useResizeCloser(onClose);

    return (
        <ul
            className={styles.list}
            style={style}
        >
            <GenericList
                As={'button'}
                className={className}
                list={$FormBtnsDropdown}
            />
        </ul>
    )
}
