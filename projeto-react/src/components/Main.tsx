import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

interface MainProps {
    titulo: string
    subtitulo: string
    children?: string
}
export default function Main(props: MainProps) {
    return (
        <div className={`bg-black text-white h-screen p-4 flex gap-4`}>
            <Menu />
            <div className="flex flex-col flex-1 gap-4">
                <Header titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Content>
                    {props.children}
                </Content>
                <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
            </div>
        </div>
    )
}