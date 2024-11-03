import { IconBraces, IconClipboardText, IconFunction, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="p-3 gap-3 w-48">
            <MenuItem icone={<IconHome />} texto="Home" url="/"/>

            <div className="flex flex-col mt-4">
                <p className="text-sm text-zinc-700 mb-2">Fundamentos:</p>
                <MenuItem icone={<IconBraces />} texto="JSX - Call Var" url="/fundamentos/chamando-variaveis"/>
                <MenuItem icone={<IconFunction />} texto="Call Funções" url="/fundamentos/chamando-funcoes"/>
                <MenuItem icone={<IconClipboardText />} texto="Pagina #1" url="/pagina"/>
                <MenuItem icone={<IconClipboardText />} texto="Pagina #2" url="/fundamentos/pagina"/>
            </div>
        </div>
    )
}