export function postConverter(data: any, isLast?: boolean) {
    return {
        postId: data.id,
        postSubreddit: data.subreddit,
        anchorName: data.author,
        postTitle: data.title,
        postUrl: data.url,
        createdTime: data.created_utc,
        numberComments: data.num_comments,
        karmaNumber: data.score,
        postHint: data.post_hint,
        postThumbnail: data.thumbnail,
        postHighQualityVideoUrl: data.secure_media?.reddit_video?.hls_url,
        postVideoUrl: data.secure_media?.reddit_video?.scrubber_media_url,
        postText: data.selftext_html,
        isLast: isLast || false,
    }
}