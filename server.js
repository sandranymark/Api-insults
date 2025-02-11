import express, { response } from 'express'

const app = express()
const PORT = 9000

//Middleware för att tillåta JSON från req.body
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
});


//GET requset to /insults
app.get('/insults/', (req, res) => {
    res.send(insults)
});



//GET request to Random /insults
app.get('/insults/random', (req, res) => {
    const randomInsult = Math.floor(Math.random() * insults.length);
    const insult = insults[randomInsult];

    if (insult) {
        res.send(insult);
    } else {
        res.status(404).send('Insult not found');
    }

});


//POst request to new /insults
app.post('/insults/', (req, res) => {
    const newInsult = req.body;

    if (newInsult) {
        insults.push(newInsult);
        res.status(201).json(newInsult);
    } else {
        res.status(400).send('insult could not be created');
    }
});

//PUT request to update insults
app.put('/insults/:id', (req, res) => {
    const id = req.params.id;
    const updatedInsult = req.body;

    if (insults[id]) {
        insults[id] = updatedInsult;
        res.json(updatedInsult);
    } else {
        res.status(400).send('Insult not found');
    }
});


//DELETE request to delete insults
app.delete('/insults/:id', (req, res) => {
    const id = req.params.id;
    const deletedInsult = insults.splice(id, 1);
    res.status(200).json(deletedInsult);
});




//GET request to Specific /insults/:id
app.get('/insults/:id', (req, res) => {
    const id = req.params.id;
    const insult = insults[id];

    if (insult) {
        res.send(insult);
    } else {
        res.status(404).send('Insult not found');
    }
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});




const insults =
    [
        {
            "insult": "Or have we eaten on the insane root That takes the reason prisoner?",
            "play": "Macbeth"
        },
        {
            "insult": "Never hung poison on a fouler toad",
            "play": "Richard III"
        },
        {
            "insult": "He thinks too much: such men are dangerous.",
            "play": "Julius Caesar"
        },
        {
            "insult": "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
            "play": "The Merchant of Venice"
        },
        {
            "insult": "Give me your hand...I can tell your fortune. You are a fool.",
            "play": "The Two Noble Kinsmen"
        },
        {
            "insult": "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
            "play": "The Tempest"
        },
        {
            "insult": "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
            "play": "Macbeth"
        },
        {
            "insult": "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
            "play": "Titus Andronicus"
        },
        {
            "insult": "He hath eaten me out of house and home; he hath put all substance into that fat belly of his.",
            "play": "Henry IV, Part 2"
        },
        {
            "insult": "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
            "play": "Romeo and Juliet"
        }
    ]
