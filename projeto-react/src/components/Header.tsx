interface HeaderProps {
    titulo: string
    subtitulo: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className="bg-zinc-800 h-18 flex flex-col justify-center px-5 border-b border-zinc-700">
            <h1 className="font-black text-xl">{props.titulo}</h1>
            <h3 className="text-zinc-400">{props.subtitulo}</h3>
        </div>
    )
}