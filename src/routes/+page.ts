import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(307, '/wip');
    return {
        title: "Home",
        showHome: true,
        isLimited: false
    }
}
