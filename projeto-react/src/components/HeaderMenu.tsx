import { IconBrandReact } from "@tabler/icons-react";

export default function HeaderMenu() {
    return (
        <div className="h-16 flex items-center text-3xl font-black px-4 bg-purple-800 gap-2">
            <span><IconBrandReact/></span>
            <span>React</span>
        </div>
    )
} 