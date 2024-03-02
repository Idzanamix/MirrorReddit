import { useDispatch } from 'react-redux';
import styles from './modalCommentsForm.css'
import React, { ChangeEvent, useRef } from 'react';
import { EColor, Text } from '../../../../../utils/react/Text';
import { MenuFormButtonControls } from './MenuFormButtonControls';
import { GenericList } from '../../../../../utils/react/GenericList';
import { useAdaptiveForm } from '../../../../../hooks/useAdaptiveForm';
import { generateId } from '../../../../../utils/ts/generateRandomIndex';
import { changeFormValue } from '../../../../../storeRedux/form/actions';
import {
    selectCommentFormValue,
    selectUserBlock,
    useAppSelector
} from '../../../../../storeRedux/storeSelectors';
import {
    IconDownload,
    IconFile,
    IconMessage,
    IconPdf,
    IconPencil,
    IconPicture,
    IconRecord,
    IconReverse,
    IconShareForm,
    IconUser,
    IconWord
} from '../../../../Icons';

interface IModalCommentsFormProps {
    rootId: string;
    commentId: string;
    authorName?: string;
    onClose?: () => void;
    cancelBtn?: boolean;
    className?: string;
    autoFocus?: boolean;
}

export function ModalCommentsForm(
    { rootId, authorName, commentId, onClose, cancelBtn, className, autoFocus }: IModalCommentsFormProps) {
    const commentFormValue = useAppSelector(selectCommentFormValue(commentId));
    const { name } = useAppSelector(selectUserBlock);
    const formRef = useRef<HTMLFormElement>(null);
    const [isWidth] = useAdaptiveForm(formRef);
    const $FormBtns = [
        { item: isWidth.maxWidth800 && <IconPicture /> },
        { item: isWidth.maxWidth753 && <IconFile /> },
        { item: isWidth.maxWidth706 && <IconDownload /> },
        { item: isWidth.maxWidth659 && <IconUser /> },
        { item: isWidth.maxWidth612 && <IconReverse /> },
        { item: isWidth.maxWidth565 && <IconShareForm /> },
        { item: isWidth.maxWidth518 && <IconRecord /> },
        { item: isWidth.maxWidth471 && <IconMessage /> },
        { item: isWidth.maxWidth424 && <IconPencil /> },
        { item: isWidth.maxWidth377 && <IconWord /> },
        { item: isWidth.maxWidth330 && <IconPdf /> },
    ].filter(item => item.item).map(generateId);
    const dispatch = useDispatch();

    const handleChangeForm = (event: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeFormValue(commentId, event.target.value, authorName));

    const handleFocus = (event: ChangeEvent<HTMLTextAreaElement>) =>
        event.currentTarget.setSelectionRange(
            event.currentTarget.value.length,
            event.currentTarget.value.length
        );

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => event.preventDefault();

    const handleClose = () => setTimeout(() => onClose?.(), 10);

    return (
        <form
            className={`${styles.form}${className ? ' ' + className : ''}`}
            onSubmit={handleSubmit}
            ref={formRef}
        >

            <textarea
                autoFocus={autoFocus ? true : false}
                className={styles.textarea}
                value={commentFormValue}
                onChange={handleChangeForm}
                onFocus={handleFocus}
            />

            {!commentFormValue &&
                <label className={styles.label}>
                    {name &&
                        <Text
                            size={16}
                            mobileSize={14}
                            color={EColor.blew}
                        >
                            {name}
                        </Text>}

                    {name
                        ? authorName
                            ? `, reply to u/${authorName}`
                            : ', what are your thoughts?'
                        : 'Sign in to add a comment'}
                </label>}

            <div className={styles.buttonsWrapper}>
                {!isWidth.maxWidth800 &&
                    <MenuFormButtonControls
                        className={styles.item}
                        props={isWidth}
                        rootId={rootId}
                        ref={formRef}
                    />}

                <GenericList
                    list={$FormBtns}
                    As={'button'}
                    className={styles.item}
                />

                {cancelBtn &&
                    <button
                        type='button'
                        className={`${styles.cancelBtn}${isWidth.maxWidth330
                            ? ''
                            : ' ' + styles.btnSizeMobile} `}
                        onClick={handleClose}
                    >
                        Cancel
                    </button>}
                <button
                    type='submit'
                    className={`${styles.submitButton}${isWidth.maxWidth330
                        ? ''
                        : ' ' + styles.btnSizeMobile} `}
                    disabled={commentFormValue?.trim()
                        ? false
                        : true}
                    style={commentFormValue?.trim()
                        ? { opacity: '1', cursor: 'pointer' }
                        : { opacity: '.6', cursor: 'not-allowed' }}
                >
                    Comment
                </button>
            </div>
        </form >
    )
}

