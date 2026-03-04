// usuarioModel.js
import { conexao } from "../config/db.js";

export async function listarUsuarios() {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC"
    );
    return rows;
}

export async function buscarPorId(id) {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarUsuario({ nome, email, senha_hash }) {
    const [resultado] = await conexao.query(
        "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?,?,?)",
        [nome, email, senha_hash]
    );
    return resultado.insertId;
}

export async function buscarUsuarioPorEmail(email) {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, senha_hash FROM usuarios WHERE email = ?",
        [email]
    );
    return rows[0];
}