import Content from "@/components/Content"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Menu from "@/components/Menu"

export default function Page() {
    return (
        //h-screen faz com que todo o conteudo da página inteira seja preenchido;
        <div className={`
            flex flex-col gap-4 
            p-4 h-screen
        `}>
            <Header titulo="Minha Página #2" subtitulo="Meu Subtitulo"/>
            <div className="flex flex-1 gap-4">
                <Menu />
                <Content>
                    <h1>Outra página</h1>
                </Content>
            </div>
            
            <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
        </div>
    )
}