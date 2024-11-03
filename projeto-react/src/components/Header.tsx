interface HeaderProps {
    titulo: string
    subtitulo: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className="bg-purple-500 h-28 flex flex-col justify-center items-center rounded-lg">
            <h1 className="font-black text-3xl">{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        </div>
    )
}