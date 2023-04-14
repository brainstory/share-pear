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

	let url = new URL(request.url);

	if (
		url &&
		(url.startsWith("localhost") ||
			url.endsWith(".contenda.co") ||
			url.endsWith(".contenda.co/") ||
			url.endsWith("contenda-test-platty-plat.netlify.app/") ||
			url.endsWith("contenda-test-platty-plat.netlify.app") ||
			url.endsWith("contenda-platty-plat.netlify.app/") ||
			url.endsWith("contenda-platty-plat.netlify.app"))
	) {
		response.headers.set("Access-Control-Allow-Origin", origin);
	}

	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, markdown"
	);
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");
	response.headers.set("X-Your-Custom-Header", "A custom value for testing");

	return response;
};
