import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    }
    next();
}

const handleHome = (req, res) => {
    return res.send("bye.");
}

const handleLogin = (req, res) => {
    return res.send("<h1>login here</h1>");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
    console.log(`Server listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);