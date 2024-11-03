interface FooterProps {
    textoE: string
    textoD: string
    icone: any
}

export default function Footer(props: FooterProps) {
    return (
        <div className="bg-zinc-900 h-18 p-4 flex justify-between items-center text-base text-zinc-500 border-t border-zinc-800">
            <span className="flex gap-3">
                {props.icone}
                {props.textoE}
            </span>
            <span>
                {props.textoD}
            </span>
        </div>
    )
}