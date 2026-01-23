import { query } from '$app/server';

const google_script_url =
	'https://script.google.com/macros/s/AKfycbysmrQw4GWfQOC8JDZjoFoJo_s6QToTBWUP9h9jsKc66ODFFm_Lo4fKY6SroRmRED-5pg/exec';

export const getCount = query<number>(async () => {
	try {
		const resp = await fetch(google_script_url);
		const txt = await resp.text();
		console.log(resp, txt);

		return parseInt(txt);
	} catch {
		return 0;
	}
});
