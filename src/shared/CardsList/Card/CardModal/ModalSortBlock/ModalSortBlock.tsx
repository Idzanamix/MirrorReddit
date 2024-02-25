import React from 'react';
import styles from './modalSortBlock.css'
import { EColor, Text } from '../../../../../utils/react/Text';
import { IconArrow } from '../../../../Icons';

export function ModalSortBlock() {
    return (
        <div className={styles.sortblock}>
            <Text size={14} mobileSize={12} color={EColor.blew}>
                {'Sort by: '}
            </Text>
            
            <button className={styles.button}>
                {'Best '}
                <IconArrow />
            </button>
        </div>
    )
}
