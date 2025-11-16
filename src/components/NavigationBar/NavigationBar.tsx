import { Link } from 'react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className="NavBarContainer bg-black text-white top-0 w-full h-1/7 p-4 border-b-2 shadow-2xl">
      <h1 className="Logo">
        Michael Akinyemi <sub className="Subscript">Software Engineer</sub>
      </h1>
      <NavigationMenu className="NavMenu">
        <NavigationMenuList className="NavMenuList">
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink className="NavMenuLink">
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink className="NavMenuLink">
              <Link to="about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink>
              <Link to="work">Work</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink>
              <Link to="projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavigationBar
