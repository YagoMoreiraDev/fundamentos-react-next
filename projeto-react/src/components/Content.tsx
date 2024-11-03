interface ContentProps {
    children?: string
}

export default function Content(props: ContentProps) {
    return (
        //O flex-1 faz com que o conteudo onde ele é chamado ocupe todo o espaço restante;
        <div className="bg-emerald-500 flex flex-1 justify-center items-center text-3xl rounded-lg">
            {props.children}
        </div>
    )
}