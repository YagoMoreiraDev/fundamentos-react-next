import Link from "next/link";

interface MenuItemProps {
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="py-2 flex items-center gap-2 w-full hover:bg-zinc-800 rounded-lg">
            <span>{props.icone}</span> 
            <span>{props.texto}</span>
        </Link>
    )
}