import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

import { teamRoutes } from "./routes/teamRoutes";
import { userRoutes } from "./routes/userRoutes";
import { taskRoutes } from "./routes/taskRoutes";
import { searchRoutes } from "./routes/searchRoutes";
import { projectRoutes } from "./routes/projectRoutes";

/* CONFIGURATIONS */
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/teams", teamRoutes);
app.use("/search", searchRoutes);
app.use("/projects", projectRoutes);

/* SERVER */
const port = Number(process.env.PORT) || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on part ${port}`);
});
