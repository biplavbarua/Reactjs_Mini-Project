import MenuList from "./menu-list";
import './styles.css';

export default function StackedMenu({ menus = [] }) {
  return <div className="stacked-menu-container">
    <MenuList list={menus}/>
  </div>;
}