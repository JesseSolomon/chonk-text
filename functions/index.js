const functions = require('firebase-functions');

exports.preview = functions.https.onRequest((request, response) => {
	response.writeHead(200, {
		"Content-Type": "image/svg+xml"
	});

	let text = decodeURIComponent(request.path.split("/").filter(seg => seg !== "preview.svg").find(seg => seg.length > 0) || "chonk your text!");
	// let length = text.split(/\s/g).sort((a, b) => b.length - a.length)[0].length || 1;

	let fontSize = (1000 / text.length) + "px";

	response.write(`<svg width="700" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg"><rect width="700" height="300" fill="#F44336"></rect><text x="350" y="150" style="dominant-baseline: middle; text-anchor: middle; text-align: center; font-weight: bold; font-size: ${fontSize}; font-family: sans-serif; fill: #ffffff; line-height: 1.2em;">${text.toUpperCase()}</text></svg>`);
	response.end();
});