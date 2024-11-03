import HeaderMenu from "./HeaderMenu";
import Menu from "./Menu";

export default function MainMenu() {
    return (
        <div className="flex flex-col gap-6">
            <HeaderMenu />
            <Menu />
        </div>
    )
}