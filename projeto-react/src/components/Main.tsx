import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainMenu from "./MainMenu";

interface MainProps {
    titulo: string
    subtitulo: string
    children?: string
}
export default function Main(props: MainProps) {
    return (
        <div className={`bg-black text-white h-screen flex`}>
            <MainMenu />
            <div className="flex flex-col flex-1 ">
                <Header titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Content>
                    {props.children}
                </Content>
                <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
            </div>
        </div>
    )
}