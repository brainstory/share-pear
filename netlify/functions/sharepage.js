const { builder } = require("@netlify/functions");

async function handler(event, context) {
	const htmlResponse = "<h1>Does this even work?</h1>";

	return {
		statusCode: 200,
		headers: {
			"Content-Type": "text/html"
		},
		body: `
    <!DOCTYPE html>
    <html>
		<Layout title="Contenda Sharing!">
			${htmlResponse}
			Let's find out!
		</Layout>
    </html>
    `
	};
}

exports.handler = builder(handler);
