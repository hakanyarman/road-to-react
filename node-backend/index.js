// console.log("hello world! from macbook air m3");

// const http = require("http");
const express = require("express");

const app = express();

const notes = [
  { id: "1", content: "HTML is easy", important: true },
  { id: "2", content: "Browser can execute only JavaScript", important: true },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/notes", (req, res) => {
    res.end(JSON.stringify(notes[2]))
});

// params => : ile başlayan subpathler bunlar değişkendir statik değilir.
app.get('/notes/:id', (req,res) => {
    // const id = req.params.id;
    const {id} = req.params;
    const note = notes.find((note) => {
        return note.id === id;
    })
    note ? res.json(note) : res.status(404).end();
    // res.json(note)
})

const port = 3050;
app.listen(port);
