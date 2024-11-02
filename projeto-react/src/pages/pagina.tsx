import Content from "@/components/Content";
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Pagina() {
    return (
        <div className={`
            bg-black text-white h-screen
            p-4
            flex flex-col gap-4
        `}>
            <Header titulo="Minha Aplicação" subtitulo="Aqui vai o subtitulo"/>
            <Content conteudo="Essa página está sendo chamada de dentro da pasta 'pages'">
                <h4>Lista de nomes:</h4>
                <hr />
                <ul>
                    <li>Yago Moreira</li>
                    <li>Vitória Sales</li>
                    <li>Bob</li>
                    <li>Flor</li>
                </ul>
                <hr />
            </Content>
            <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
        </div>
    )
}