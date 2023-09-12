import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.
    connect('mongodb+srv://dummyuser:p9zJMuum6jQJWx42@cluster0.nllie0o.mongodb.net/CRMdb?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(PORT, () =>
            console.log(`Your Server is running on port ${PORT}`)
        )
    }
    )
    .catch((err) => {
        console.log(err);
    })

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

routes(app);

app.get('/', (req, res) =>
    res.send(`NODE and EXPRESS server is running on port ${PORT}`)
);

