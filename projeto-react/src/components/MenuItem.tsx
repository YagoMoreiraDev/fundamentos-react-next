import Link from "next/link";

interface MenuItemProps {
    url: string
    texto: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className="bg-orange-300 text-black p-2 rounded-lg w-full">
            <Link href={props.url}>{props.texto}</Link>
        </div>
    )
}