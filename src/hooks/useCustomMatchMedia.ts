import useMatchMedia from 'use-match-media-hook'

export function useCustomMatchMedia() {
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)',
        '(max-width: 411px)'
    ]
    
    const [mobile, desktop, mobile411] = useMatchMedia(queries);

    return {
        mobile: mobile,
        desktop: desktop,
        mobile411: mobile411
    }
}


