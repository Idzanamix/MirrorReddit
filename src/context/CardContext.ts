import { createContext } from "react";
import { IPostsData } from "../storeRedux/posts/postsSlice";

export const cardContext = createContext<IPostsData>({
    postId: '',
    anchorName: '',
    postSubreddit: '',
    karmaNumber: 0,
    postTitle: '',
    postUrl: '',
    createdTime: 0,
    numberComments: 0,
    isLast: false, 
});
