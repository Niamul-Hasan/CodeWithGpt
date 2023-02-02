import MenuItems from "./MenuItemRender";
import { menuItems } from "./MenuItems";

const Navbar2 = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar2;