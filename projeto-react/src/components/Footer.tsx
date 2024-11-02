export default function Footer(props: any) {
    return (
        <div className="bg-cyan-600 h-36 p-4 flex justify-between items-center text-3xl rounded-lg">
            <span>{props.textoE}</span>
            <span>{props.textoD}</span>
        </div>
    )
}