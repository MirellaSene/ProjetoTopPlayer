// app.js
import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuariosRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "oiii" });
});

app.use("/usuarios", usuarioRoutes);

export default app;