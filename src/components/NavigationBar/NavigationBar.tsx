import { NavLink } from 'react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className="NavBarContainer bg-black text-white top-0 w-full p-4 border-b-2 shadow-2xl">
      <h1 className="Logo">
        Michael Akinyemi <sub className="Subscript">Software Engineer</sub>
      </h1>
      <NavigationMenu className="NavMenu">
        <NavigationMenuList className="NavMenuList">
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink className="NavMenuLink">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                end
              >
                Home
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink className="NavMenuLink">
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                end
              >
                About
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink>
              <NavLink
                to="work"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                end
              >
                Work
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="NavMenuItem">
            <NavigationMenuLink>
              <NavLink
                to="projects"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                end
              >
                Projects
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavigationBar
