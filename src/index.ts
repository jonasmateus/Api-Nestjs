import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}...`));


AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))

/* console.log("Inserting a new user into the database...")
const user = new User()
user.name = "Chistian"
user.email = "chis@cargon.com"
user.password = "4p*M006AdF3TM1qv"
await AppDataSource.manager.save(user)
console.log("Saved a new user with id: " + user.id)

console.log("Loading users from the database...")
const users = await AppDataSource.manager.find(User)
console.log("Loaded users: ", users)

console.log("Here you can setup and run express / fastify / any other framework.")
*/