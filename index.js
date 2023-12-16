const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "30-44-567890",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-23-23456",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

// Use express.json() middleware for JSON parsing
app.use(express.json());

// GET route
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
