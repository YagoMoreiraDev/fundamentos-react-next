import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Main(props: any) {
    return (
        <div className={`
            bg-black text-white h-screen
            p-4
            flex flex-col gap-4
        `}>
            <Header titulo={props.titulo} subtitulo={props.subtitulo}/>

            <div className="flex flex-1 gap-4">
                <Menu />
                <Content>
                    {props.children}
                </Content>
            </div>
            <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
        </div>
    )
}