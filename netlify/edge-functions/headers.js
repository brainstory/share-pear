export default async (request, context) => {
	const response = await context.next();
	// const url = new URL(request.url);

	if (request.method === "OPTIONS") {
		return new Response("ok", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type, markdown",
				"X-Your-Custom-Header": "A custom value for testing"
			}
		});
	}

	// if (url.pathname.startsWith("/_astro")) {
	// 	response.headers.set(
	// 		"Cache-Control",
	// 		"public, max-age=31536000, immutable"
	// 	);
	// }

	// return new Response("OK", {
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Access-Control-Allow-Headers": "Content-Type, markdown",
	// 		"X-Your-Custom-Header": "A custom value for testing"
	// 	}
	// });

	response.headers.set("Access-Control-Allow-Origin", "*");
	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, markdown"
	);
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");
	response.headers.set("X-Your-Custom-Header", "A custom value for testing");

	console.log(response);

	return response;
};
