import { dbName, dbPass, dbUsername } from '../secret/dbConfig.js';
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});
const connectionString = `mongodb+srv://${dbUsername}:${dbPass}@cluster0.ggwfo7z.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const gameSchema = new Schema({
    title: { type: String, required: true },
    genre: String,
    yearReleased: String,
    studio: String,
});

export const Game = mongoose.model('Game', gameSchema);