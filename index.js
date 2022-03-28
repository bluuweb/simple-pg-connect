const express = require("express");
const { getTodos } = require("./db");
const app = express();

app.get("/", async (req, res) => {
    const { data } = await getTodos();
    res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("🔥🔥🔥🔥"));
