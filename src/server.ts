import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";

const PORT = process.env.PORT; // eslint-disable-line prefer-destructuring
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const main = require.main === module || require.main?.filename.match(/__sapper__\/build\/index.js$/);

const createServer = async (): Promise<Express> => {
	const app = express();

	if (main) {
		app.use(sirv("static", { dev }));
	}

	app.use(
		compression({ threshold: 0 }),
		sapper.middleware(),
	);

	return app;
};

if (main) {
	createServer().then((app) => {
		app.listen(PORT, (err?: any): void => { // eslint-disable-line
			if (err) console.log("error", err);
		});
	});
}

export { createServer };

// For more Cloud Functions, write and export them here
// and import and set them up in `/index.js`
