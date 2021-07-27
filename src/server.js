import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("bye.");
}

const handleLogin = (req, res) => {
    return res.send("<h1>login here</h1>");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
    console.log(`Server listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);