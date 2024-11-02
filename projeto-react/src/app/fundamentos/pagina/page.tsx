import Content from "@/components/Content"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Page() {
    return (
        //h-screen faz com que todo o conteudo da página inteira seja preenchido;
        <div className={`
            flex flex-col gap-4 
            p-4 h-screen
        `}>
            <Header titulo="Meu Titulo" subtitulo="Meu Subtitulo"/>
            <Content conteudo="Essa aplicação está sendo chamada da pasta 'app'"/>
            <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
        </div>
    )
}