const { request } = require("express");
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

// find person with given ID
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

//Delete person with given ID
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(persons => persons.id !== id)

    response.status(204).end()
})

// Adding a person
const generateId = () => {
    const maxId = persons.length > 0 
    ? Math.max(...persons.map ( n => n.id)) : 0
    return maxId +5
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.content) {
        return response.status(404).json({
            error: 'content missing'
        })
    }

    const  personToAdd = {
        content: body.content,
        important: body.important || false,
        id: generateId()

    }
    persons = persons.concat(personToAdd)
    console.log(personToAdd)
    response.json(personToAdd)
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
