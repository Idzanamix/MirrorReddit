import { Actions } from './Actions';
import styles from './cardcontrols.css';
import React, { useContext } from 'react';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { cardContext } from '../../../../context/CardContext';
import { useCustomMatchMedia } from '../../../../hooks/useCustomMatchMedia';

export function CardControls() {
    const { karmaNumber } = useContext(cardContext);
    const { mobile } = useCustomMatchMedia();

    return (
        <div className={styles.controls}>
            <KarmaCounter
                className={styles.karmaCounter}
                carmaNumber={karmaNumber}
            />

            {mobile &&
                <>
                    <CommentsButton className={styles.commentsButton} />
                    
                    <Actions />
                </>
            }
        </div>
    );
}
