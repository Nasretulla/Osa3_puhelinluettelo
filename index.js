const http = require("http");

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

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(persons));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
