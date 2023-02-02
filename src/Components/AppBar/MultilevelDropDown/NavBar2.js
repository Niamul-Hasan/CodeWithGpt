import { menuItems } from "./MenuItems";

const Navbar2 = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    return (
                        <li className="menu-items" key={index}>
                            <a href={menu.url}>{menu.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar2;