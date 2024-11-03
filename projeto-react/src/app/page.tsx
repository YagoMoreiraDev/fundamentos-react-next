import Main from "@/components/Main";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Main titulo="Fundamentos React" subtitulo="Bem vindo ao mundo React - Next">
        <div className="flex flex-col justify-center items-center w-full h-full text-zinc-500">
          <IconBrandReact size={200} stroke={1}/>
          <span className="font-black">Curso Fundamentos de React</span>
        </div>
    </Main>
  );
}
