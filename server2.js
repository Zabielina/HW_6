import express from "express";

const app = express();

const PORT = 4000;

app.use(express.json());

app.post('/data', (req, res) => {

    if (req.method == 'POST') {
        (res.json.body)

    }



});


app.listen(PORT, () => {
    console.log(`Server task2 https://localhost:${PORT}`)
});