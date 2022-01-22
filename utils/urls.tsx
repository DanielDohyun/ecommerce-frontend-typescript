const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * given an img return the url
 * @param {any} img 
 */

export const fromImgToUrl = (img) => {
    if (!img) return '/vercel.svg'

    // if / is first character = its relative path 
    if (img.url.indexOf('/') === 0) {
        return `${API_URL}${img.url}`
    }

    return img.url
}