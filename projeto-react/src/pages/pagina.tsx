import Content from "@/components/Content";
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";


export default function Pagina() {
    return (
        <div className={`
            bg-black text-white h-screen
            p-4
            flex flex-col gap-4
        `}>
            <Header titulo="Minha Aplicação" subtitulo="Aqui vai o subtitulo"/>

            <div className="flex flex-1 gap-4">
                <Menu />
                <Content>
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
                </Content>
            </div>
            
            <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
        </div>
    )
}