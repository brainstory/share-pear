export default async (request, context) => {
	const response = await context.next();
	// const url = new URL(request.url);

	// if (url.pathname.startsWith("/_astro")) {
	// 	response.headers.set(
	// 		"Cache-Control",
	// 		"public, max-age=31536000, immutable"
	// 	);
	// }

	response.headers.set("X-Your-Custom-Header", "A custom value");
	response.headers.set("Access-Control-Allow-Origin", "*");
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");
	response.headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");

	return response;
};
