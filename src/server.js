import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => {
    console.log("Somebody to trying to go home");
}

app.get("/", handleHome);

const handleListening = () => {
    console.log(`Server listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);