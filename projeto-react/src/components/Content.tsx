export default function Content(props: any) {
    return (
        //O flex-1 faz com que o conteudo onde ele é chamado ocupe todo o espaço restante;
        <div className="bg-emerald-500 h-36 flex flex-col justify-center items-center flex-1 text-3xl rounded-lg">
            <div>{props.conteudo}</div>
            <div>{props.children}</div>
        </div>
    )
}