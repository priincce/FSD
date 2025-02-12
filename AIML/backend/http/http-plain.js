const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    try {
        const data = await fs.readFile("./index.html", "utf8");
        res.end(data);
    } catch (error) {
        console.error("Error reading file:", error.message);
        res.statusCode = 500;
        res.end("Error loading the page.");
    }
});

const port = 3000;  // Properly declaring the variable

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
