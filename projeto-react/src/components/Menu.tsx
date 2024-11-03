import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="bg-slate-700 flex flex-col justify-start items-center p-3 gap-3 rounded-lg w-48">
            <MenuItem texto="Pagina #Home" url="/"/>
            <MenuItem texto="Pagina #1" url="/pagina"/>
            <MenuItem texto="Pagina #2" url="/fundamentos/pagina"/>
        </div>
    )
}