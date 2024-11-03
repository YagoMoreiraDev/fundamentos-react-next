import Link from "next/link";

interface MenuItemProps {
    url: string
    texto: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className=" text-white p-2 rounded-lg w-full">
            <Link href={props.url}>{props.texto}</Link>
        </div>
    )
}