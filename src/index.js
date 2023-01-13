import express, { application } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";
import { PORT } from "./config.js";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(indexRoutes);

app.listen(PORT);
console.log("In port", PORT);
