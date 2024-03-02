export function useDarkMode(isDark: boolean) {
    const page = document.body;

    isDark
        ? page.classList.add('isDark')
        : page.classList.remove('isDark')

    !page.classList.length && page.removeAttribute('class')
}
