import { ICommentsData } from "../storeRedux/comments/commentsSlice";
import { useEffect, useState } from "react";
import axios from "axios";

interface IUseMoreCommentsProps {
    commentsData: any;
    postId: string;
}

let count = 0;

export function useMoreComments({ commentsData, postId }: IUseMoreCommentsProps) {
    const [moreComments, setMoreCommentsData] = useState<ICommentsData[]>()

    useEffect(() => {
        let isUnmount = false;

        const timer = setTimeout(() => {
            axios.get(`https://oauth.reddit.com/api/morechildren?link_id=t3_${postId}&children=${commentsData}&api_type=json`)
                .then((response) => {
                    if (!isUnmount && response.data.json.data) {
                        const comments = response.data.json.data.things;

                        setMoreCommentsData(
                            comments.filter((commentItem: any) => commentItem.data.contentHTML &&
                                commentItem.data.contentHTML !== '[удалено]' &&
                                commentItem.data.contentHTML !== '[deleted]')
                                .map((commentItem: any) => {
                                    const comment = commentItem.data;
                                    const indexStartName = comment.content
                                        .indexOf('data-author="') + 13;
                                    const indexEndName = comment.content
                                        .substring(indexStartName)
                                        .indexOf('"') + indexStartName;
                                    const authorName = comment.content
                                        .substring(indexStartName, indexEndName);
                                    const indexStartTime = comment.content
                                        .indexOf('live-timestamp') + 19;
                                    const indexEndTime = comment.content
                                        .substring(indexStartTime)
                                        .indexOf('&') + indexStartTime;
                                    const createdAt = comment.content
                                        .substring(indexStartTime, indexEndTime)
                                        .trim()
                                        .replace('мин назад', 'min. ago')
                                        .replace('ч назад', 'hr. ago');
                                    const indexStartScore = comment.content
                                        .indexOf('"score unvoted" title="') + 23;
                                    const indexEndScore = comment.content
                                        .substring(indexStartScore)
                                        .indexOf('"') + indexStartScore;
                                    const score = comment.content
                                        .substring(indexStartScore, indexEndScore);

                                    return {
                                        postId: postId,
                                        commentId: comment.id,
                                        authorName: authorName,
                                        createdTime: createdAt,
                                        commentText: comment.contentText,
                                        commentHtml: comment.contentHTML,
                                        karmaCounter: score,
                                    }
                                })
                        );
                    }
                })
                .catch(console.log);

        }, count++ * 300);

        return () => {
            clearTimeout(timer);
            isUnmount = true;
            count = 0;
        }
    }, [commentsData]);

    return [moreComments]
}