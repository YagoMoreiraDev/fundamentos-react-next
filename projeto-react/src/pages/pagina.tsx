import "../app/globals.css";
import Main from "@/components/Main";

export default function Pagina() {
    return (
        <Main titulo="Minha Página #1" subtitulo="Meu Subtitulo 1">
            <div>
                <h4>Lista de nomes:</h4>
                <hr />
                <ul>
                    <li>Yago Moreira</li>
                    <li>Vitória Sales</li>
                    <li>Bob</li>
                    <li>Flor</li>
                </ul>
                <hr />
            </div>
        </Main>
    )
}