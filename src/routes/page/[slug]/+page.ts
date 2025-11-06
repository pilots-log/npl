import { content } from "$lib/content"

export async function load({ params: { slug } }) {
    console.log(content)
    const page = content.get(slug)
    return {
        page,
    }
}
