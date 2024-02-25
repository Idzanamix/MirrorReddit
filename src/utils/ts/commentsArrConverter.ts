import { ICommentReplies } from "../../storeRedux/comments/commentsSlice";

export function commentsArrConverter(arr: any, postId: string) {

    if (!arr) return;

    return arr.map((item: any) => {

        const comment = item.data;

        const moreCommentsData = comment?.replies?.data?.children
            ?.filter((item: ICommentReplies) => item.kind === 'more')[0]?.data?.children
            ?.join(',')
            ?.substring(0, 799);

        return {
            postId: postId,
            commentId: comment.id,
            authorName: comment.author,
            createdTime: comment.created,
            commentText: comment.body,
            commentHtml: comment.body_html,
            karmaCounter: comment.score,
            commentReplies: comment.replies?.data?.children,
            children: comment.children,
            moreCommentsData: moreCommentsData
        }
    })
}