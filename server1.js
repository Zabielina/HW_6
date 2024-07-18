import express from "express";

const app = express();
const PORT = 3000;

app.get('/', ( res) => {
    res.send("Hello, World!")
});


app.listen(PORT , () => {
    console.log(`Server run  https//localhost:${PORT}`)
})