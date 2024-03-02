import DOMPurify from "dompurify";
import styles from './cardmodal.css';
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { CardVisual } from "../CardVisual";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ModalSortBlock } from "./ModalSortBlock";
import { Text } from "../../../../utils/react/Text";
import { UserLink } from "../CardTextContent/UserLink";
import { ModalControlPanel } from "./ModalControlPanel";
import { ModalCommentsForm } from "./ModalCommentsForm";
import { ModalCommentsList } from "./ModalCommentsList";
import { BackToTopButton } from "../../BackToTopButton";
import { CreatedAd } from "../CardTextContent/CreatedAd";
import { ModalButtonCloserX } from "./ModalButtonCloserX";
import { MoreCommentsButton } from "./MoreCommentsButton";
import { KarmaCounter } from "../CardControls/KarmaCounter";
import { RedditLoader } from "../../../../Loader/RedditLoader";
import { useModalCloser } from "../../../../hooks/useModalCloser";
import { CardTitlePostLink } from "../CardTextContent/CardTitlePostLink";
import { resetModalData } from "../../../../storeRedux/modal/modalSlice";
import { useCustomMatchMedia } from "../../../../hooks/useCustomMatchMedia";
import { useModalCommentsData } from "../../../../hooks/useCommentsPostData";
import { convertRedditTextHtml } from "../../../../utils/ts/convertRedditTextHtml";

export function CardModal() {
    const modalRoot = document.querySelector('#modal_root');
    const { postId, subreddit, post } = useParams();

    if (!modalRoot || !subreddit || !postId) return null;

    const {
        commentsList: {
            comments,
            moreComments,
            loading },
        modalData: { postHint,
            postThumbnail,
            postText,
            karmaNumber,
            postTitle,
            postUrl,
            createdTime,
            anchorName,
            postVideoUrl,
            postHighQualityVideoUrl,
            numberComments }
    } = useModalCommentsData(subreddit, postId);
    const dispatch = useDispatch();
    const refModal = useRef<HTMLDivElement>(null);
    const refButtonToTop = useRef(null);
    const { desktop } = useCustomMatchMedia();

    const scrollToTop = () => refModal.current && refModal.current.scrollTo({ top: 0 });

    const navigate = useNavigate();

    const onClose = () => {
        dispatch(resetModalData());
        navigate(`/${post}`);
    };

    useModalCloser({
        onClose: onClose,
        ref: refModal,
        ref2: refButtonToTop,
        timeDelay: 20
    });

    return createPortal((
        <div className={styles.modal}>
            <BackToTopButton
                ref={refButtonToTop}
                className={styles.buttonBackToTop}
                onClick={scrollToTop}
            />
            <div
                className={styles.container}
                ref={refModal}
            >
                <ModalButtonCloserX
                    className={styles.buttonCloserX}
                    onClose={onClose}
                />

                {!postTitle && loading
                    ?
                    <RedditLoader className={styles.loader} />
                    :
                    <>
                        <div className={styles.header}>
                            <KarmaCounter
                                className={styles.karmaCounter}
                                carmaNumber={karmaNumber}
                            />
                            <div className={styles.popupHeaderWrapper}>
                                <CardTitlePostLink
                                    postTitle={postTitle}
                                    postUrl={postUrl}
                                />
                                <div className={styles.popupMediaUser}>
                                    <CreatedAd createdTime={createdTime} />
                                    <UserLink anchorName={anchorName} />
                                </div>
                            </div>
                        </div>

                        {postHint !== undefined &&
                            postThumbnail &&
                            postThumbnail !== "self" &&
                            postThumbnail !== "default" &&
                            <CardVisual
                                className={styles.preview}
                                props={{
                                    postThumbnail,
                                    postVideoUrl,
                                    postUrl,
                                    postHighQualityVideoUrl,
                                    postHint
                                }}
                            />}

                        {postText &&
                            <Text
                                As="div"
                                size={14}
                                mobileSize={12}
                                className={styles.textContent}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(convertRedditTextHtml(postText))
                                }}
                            />}

                        <div
                            className={styles.footer}
                            id="footer_root"
                        >
                            <ModalControlPanel props={numberComments} />
                            <ModalCommentsForm
                                autoFocus={desktop ? true : false}
                                commentId="modalFormComment"
                                rootId="footer_root"
                            />
                            <ModalSortBlock />
                        </div>
                        <div
                            className={styles.commentsBlock}
                            id="comments_root"
                        >
                            <ModalCommentsList
                                commentsData={comments}
                                loading={loading}
                            />
                            <MoreCommentsButton
                                postId={postId}
                                moreCommentsData={moreComments}
                            />
                        </div>
                    </>}
            </div>
        </div >
    ), modalRoot)
}