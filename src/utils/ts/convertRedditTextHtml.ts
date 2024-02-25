export function convertRedditTextHtml(str: string) {
    str = str.replace(/&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;/g, '')
        .replace("&lt;/div&gt;&lt;!-- SC_ON --&gt;", '')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;quot;/g, '"')
        .replace(/&amp;/g, '&')

    return str;
}