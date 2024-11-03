export default function Content(props: any) {
    return (
        //O flex-1 faz com que o conteudo onde ele é chamado ocupe todo o espaço restante;
        <div className="bg-zinc-900 flex flex-1 justify-center items-center text-3xl">
            {props.children}
        </div>
    )
}