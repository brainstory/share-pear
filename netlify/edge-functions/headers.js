export default async (request, context) => {
	const response = await context.next();

	// Only allow requests from our own domains
	let url = request.headers.get("origin");

	// Allowed URLs are:
	// localhost
	// contenda.co
	// contenda.netlify.app
	// contenda-platty-plat.netlify.app
	// contenda-test-platty-plat.netlify.app
	// brainstory.ai
	// brainstory.netlify.app
	// test.brainstory.ai

	let allowedUrlsRegex =
		/^(https?:\/\/)?(localhost|contenda\.co|contenda\.netlify\.app|contenda-platty-plat\.netlify\.app|contenda-test-platty-plat\.netlify\.app|brainstory\.ai|brainstory\.netlify\.app|test\.brainstory\.ai)(:[0-9]+)?$/;

	// Handle preflight requests
	if (request.method === "OPTIONS" && allowedUrlsRegex.test(url)) {
		return new Response("ok", {
			headers: {
				"Access-Control-Allow-Origin": url,
				"Access-Control-Allow-Headers": "Content-Type, markdown"
			}
		});
	}

	if (url && allowedUrlsRegex.test(url)) {
		response.headers.set("Access-Control-Allow-Origin", url);
	}

	// Accept markdown header
	response.headers.set(
		"Access-Control-Allow-Headers",
		"Content-Type, markdown"
	);

	// Cache for 30 days
	response.headers.set("Cache-Control", "public, max-age=2592000, immutable");

	return response;
};
