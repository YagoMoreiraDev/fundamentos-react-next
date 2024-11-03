interface FooterProps {
    textoE: string
    textoD: string
}

export default function Footer(props: FooterProps) {
    return (
        <div className="bg-cyan-600 h-20 p-4 flex justify-between items-center text-2xl rounded-lg">
            <span>{props.textoE}</span>
            <span>{props.textoD}</span>
        </div>
    )
}