export const getAnimeResponse = async (resource, query, secondQuery) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}&${secondQuery}`)
    const anime = await response.json()
    return anime
}