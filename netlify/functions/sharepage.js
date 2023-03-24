const { builder } = require("@netlify/functions");

async function handler(event, context) {
	return {
		statusCode: 200,
		headers: {
			"Content-Type": "text/html",
		},
		body: `
    <!DOCTYPE html>
    <html>
		<Layout title="Contenda Sharing!">
			Does this even work?
		</Layout>
    </html>
    `,
	};
}

exports.handler = builder(handler);
