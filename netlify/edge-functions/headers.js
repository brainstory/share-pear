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
			"Allow-Access-Control-Origin": "*",
			"X-Your-Custom-Header": "A custom value for testing"
		}
	});

	// return response;
};
