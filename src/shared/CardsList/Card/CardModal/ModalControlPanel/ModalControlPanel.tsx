import React from 'react';
import styles from './modalControlPanel.css'
import { EColor } from '../../../../../utils/react/Text';
import { GenericList } from '../../../../../utils/react/GenericList';
import { generateId } from '../../../../../utils/ts/generateRandomIndex';
import { shortFormatNumber } from '../../../../../utils/ts/shortFormatNumber';
import { IconComments, IconHide, IconSave, IconReport, IconShare } from '../../../../Icons';

interface IModalControlPanel {
    props?: number;
}

export function ModalControlPanel({ props }: IModalControlPanel) {
    const $ControlPanelList = [
        {
            text: `${shortFormatNumber(props) || ''} Comments`,
            item: <IconComments />,
            disabled: true
        },
        {
            text: 'Share',
            item: <IconShare />,
        },
        {
            text: 'Hide',
            item: <IconHide />,
        },
        {
            text: 'Save',
            item: <IconSave />,
        },
        {
            text: 'Report',
            item: <IconReport />,
        }
    ].map(generateId);

    return (
        <div className={styles.panel}>
            <GenericList
                list={$ControlPanelList}
                As={'button'}
                className={styles.item}
                size={14}
                mobileSize={12}
                color={EColor.grayC4}
            />
        </div>
    )
}
