import { menuItems } from '@/data/navigation';
import NavbarDropdownMenuItem from './NavbarDropdownMenuItem';

const DesktopNavigation = () => {
  return (
    <div className="hidden lg:flex items-center justify-center h-full flex-1 mx-8">
      <div className="flex items-center space-x-8 h-full">
        {menuItems.map((item, index) => (
          <NavbarDropdownMenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
