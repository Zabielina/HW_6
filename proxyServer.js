import express from "express";
import fetch from "node-fetch";

const app = express();

const PORT = 3300;



app.get('/proxy', async (res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});


app.listen(PORT, () => {

    console.log(`Proxy server is running on http://localhost:${PORT}`)
})