import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2 gap-3">
      <Header titulo="Minha Página Home" subtitulo="....."/>
      <div className="flex flex-1 gap-3">
        <Menu />
        <Content>
          <h1>Bem vindo a Página Home - Estudos React + Next</h1>
        </Content>
      </div>
      <Footer textoE="Texto lado esquerdo" textoD="Texto lado direito"/>
    </div>
  );
}
