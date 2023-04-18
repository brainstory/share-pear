export default async (request, context) => {
	const response = await context.next();

	if (request.method === "OPTIONS") {
		return new Response("ok", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type, markdown",
				"X-Your-Custom-Header": "A custom value for testing"
			}
		});
	}

	// TODO: only allow requests from our own domains
	let url = new URL(request.url);

	let allowedUrlsRegex =
		/^(https?:\/\/)?(localhost(:\d+)?|([a-zA-Z0-9-]+\.)?contenda\.co|(contenda(-test)?-platty-plat)\.netlify\.app)(\/.*)?$/;

	if (url && allowedUrlsRegex.test(url)) {
		response.headers.set("Access-Control-Allow-Origin", url);
	}

	// response.headers.set("Access-Control-Allow-Origin", "*");

	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, markdown"
	);
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");
	response.headers.set("X-Your-Custom-Header", "A custom value for testing");

	return response;
};
