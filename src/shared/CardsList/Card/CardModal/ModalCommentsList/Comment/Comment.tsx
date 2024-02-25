import { selectFormIsOpen, useAppSelector } from '../../../../../../storeRedux/storeSelectors';
import { ITextCommentState } from '../../../../../../storeRedux/form/commentsFormReducer';
import { convertRedditTextHtml } from '../../../../../../utils/ts/convertRedditTextHtml';
import { commentsArrConverter } from '../../../../../../utils/ts/commentsArrConverter';
import { ICommentsData } from '../../../../../../storeRedux/comments/commentsSlice';
import { setIsOpenComment } from '../../../../../../storeRedux/form/actions';
import { storeRedux } from '../../../../../../storeRedux/storeRedux';
import { KarmaCounter } from '../../../CardControls/KarmaCounter';
import { CreatedAd } from '../../../CardTextContent/CreatedAd';
import { MoreCommentsButton } from '../../MoreCommentsButton';
import { UserLink } from '../../../CardTextContent/UserLink';
import { ModalCommentsForm } from '../../ModalCommentsForm';
import { ShareCommentButton } from './ShareCommentButton';
import { Text } from '../../../../../../utils/react/Text';
import { ReplyCommentButton } from './ReplyCommentButton';
import { ModalCommentsList } from '../ModalCommentsList';
import { MenuCommentButton } from './MenuCommentButton';
import { IconSwitch } from '../../../../../Icons';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './comment.css';
import DOMPurify from "dompurify";

interface ICommentProps {
    commentItemData: ICommentsData;
}

export const Comment = memo(({ commentItemData }: ICommentProps) => {
    const {
        commentReplies,
        authorName,
        createdTime,
        commentHtml,
        karmaCounter,
        postId,
        commentId,
        moreCommentsData
    } = commentItemData;
    const dispatch = useDispatch();

    const [isCommentOpen, setIsCommentOpen] = useState(true);

    const handleHideCommentToggle = () => setTimeout(() => setIsCommentOpen(!isCommentOpen), 10);

    const formIsOpen = useAppSelector(selectFormIsOpen(commentId));

    const setCloseAllCommentsForm = () => storeRedux
        .getState()?.commentsForm
        .filter((comment: ITextCommentState) => comment.formIsOpen === true)
        .map(comment => dispatch(setIsOpenComment(comment.commentId, false)));

    const setCloseCommentForm = () => dispatch(setIsOpenComment(commentId, false));

    const setOpenCommentForm = () => dispatch(setIsOpenComment(commentId, true));

    function handleToggleComments() {
        if (formIsOpen) return setCloseAllCommentsForm();

        setOpenCommentForm();
    }


    return (
        <li className={styles.container}>
            <div
                className={styles.header}
                style={isCommentOpen
                    ? { transform: 'translateX(0)' }
                    : { transform: 'translateX(30px)' }}
            >
                {!isCommentOpen &&
                    <button
                        className={styles.buttonOpen}
                        onClick={handleHideCommentToggle}
                    >
                        <IconSwitch />
                    </button>}

                <UserLink
                    className={styles.userLinkAvatar}
                    styleAvatar={styles.styleAvatar}
                    anchorName={authorName}
                />
                <CreatedAd
                    className={styles.createdAd}
                    createdTime={createdTime}
                    noLabel
                />
            </div>

            {isCommentOpen &&
                <>
                    {authorName !== '[deleted]' &&
                        authorName !== ';div class=' &&
                        <div className={styles.body}>
                            <button
                                className={styles.buttonLine}
                                onClick={handleHideCommentToggle}
                            />
                            <div className={styles.content}>
                                <Text
                                    As="div"
                                    size={14}
                                    mobileSize={12}
                                    className={styles.text}
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify
                                            .sanitize(convertRedditTextHtml(commentHtml))
                                    }}
                                />
                                <div className={styles.controlPanel}>
                                    <KarmaCounter
                                        className={styles.karmaCounter}
                                        carmaNumber={karmaCounter}
                                        authorName={authorName}
                                    />
                                    <ReplyCommentButton
                                        className={styles.button}
                                        onOpen={handleToggleComments}
                                    />
                                    <ShareCommentButton className={styles.button} />
                                    <MenuCommentButton className={styles.button} />
                                </div>

                                {(formIsOpen || commentReplies) &&
                                    <div className={styles.commentsBlock}>

                                        {formIsOpen &&
                                            <ModalCommentsForm
                                                className={styles.formComment}
                                                authorName={authorName}
                                                commentId={commentId}
                                                onClose={setCloseCommentForm}
                                                rootId='comments_root'
                                                cancelBtn
                                            />}

                                        <ModalCommentsList
                                            commentsData={commentsArrConverter(commentReplies, postId)}
                                        />
                                        <MoreCommentsButton
                                            postId={postId}
                                            moreCommentsData={moreCommentsData}
                                        />
                                    </div>}
                            </div>
                        </div>
                    }
                </>}
        </li>
    )
});