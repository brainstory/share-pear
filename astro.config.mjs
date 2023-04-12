import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
	output: "server",
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	adapter: netlify({
		builders: true
	})
});
