import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import jogoRoutes from "./routes/JogoRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "oiii" });
});

app.use("/Usuarios", usuarioRoutes);
app.use("/Jogos", jogoRoutes);

export default app;