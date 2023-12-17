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

app.get("/info", (req, res) => {
    res.send(`Phonebook has info for ${persons.length} people   \n${new Date()}`);
  });


  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const personID = persons.find(personID => personID.id === id)

    if(personID) {
        response.json(personID)
    } else {
        response.status(404).end()
        console.log("not found with this ID");
    }

})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(persons => persons.id !== id)

    response.status(204).end()
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
