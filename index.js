import express from 'express'
import mysql from 'mysql'
import cors from 'cors';
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "books"
});

app.use(express.json()); // middleware
app.use(cors());

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json("There error SELECT query!");
        return res.json(data);
    });
});


app.post("/books", (req, res) => {
    const q = "INSERT INTO books (title, description, cover) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/books/:id", (req, res) => {
    const q = "DELETE FROM books WHERE id=?";
    const id = req.params.id;

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.put("/books/:id", (req, res) => {
    const q = "UPDATE books SET title=?, description=?, cover=? WHERE id=?";
    const id = req.params.id;

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover
    ];


    db.query(q, [...values, parseInt(id)], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.get("/", (req, res) => {
    res.json("Loading books from database");
});


app.listen(3000, () => {
    console.log("Server is running!");
});