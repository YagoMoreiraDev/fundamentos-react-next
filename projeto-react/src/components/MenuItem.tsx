import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <div className="bg-orange-300 text-black p-2 rounded-lg w-full">
            <Link href={props.url}>{props.texto}</Link>
        </div>
    )
}