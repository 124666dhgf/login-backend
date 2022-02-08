
import express from "express";
import router1 from "./routes/login";
import router from "./routes/auth";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}));
app.use('/add', router);
app.use('/login',router1);
app.listen(3002);