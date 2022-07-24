import * as express from "express"
import { AppDataSource } from "./data-source";
import { router }  from "./routes/user";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

AppDataSource.initialize().then(async () => {
    console.log('Data Source Initialized');
}).catch(error => console.log(error))

app.listen(port, () => console.log(`Listening on port ${port}...`));