export default async (request, context) => {
	const response = await context.next();
	// const url = new URL(request.url);

	// if (url.pathname.startsWith("/_astro")) {
	// 	response.headers.set(
	// 		"Cache-Control",
	// 		"public, max-age=31536000, immutable"
	// 	);
	// }

	console.log(response);

	return new Response("OK", {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"X-Your-Custom-Header": "A custom value for testing"
		}
	});

	// response.headers.set("Cache-Control", "public, max-age=2592000, immutable");

	// return response;
};
