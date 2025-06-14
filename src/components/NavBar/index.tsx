import { useScrollSection } from '@/hooks/useScrollSection';
import { navItems, type NavItem } from './constants/navigation.constants';

export const NavBar = () => {
  const { active, setActive } = useScrollSection(navItems);

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    let targetId = item.sectionIds[0];
    if (item.label === '이력' && item.sectionIds.length > 1) {
      targetId = item.sectionIds[1];
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(item.label);
    }
  };

  return (
    <nav
      className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1.5 shadow-lg backdrop-blur-md sm:top-8 sm:gap-3 sm:px-4 sm:py-2"
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="mr-1 flex items-center gap-0.5 sm:mr-2 sm:gap-1">
        <span className="bg-blue block h-2 w-2 rounded-full sm:h-3 sm:w-3" />
        <span className="bg-pink block h-2 w-2 rounded-full sm:h-3 sm:w-3" />
        <span className="bg-yellow block h-2 w-2 rounded-full sm:h-3 sm:w-3" />
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.sectionIds[0]}`}
            onClick={(e) => handleClick(e, item)}
            className={`rounded-full px-2 py-0.5 text-xs font-normal whitespace-nowrap transition-all duration-150 sm:px-3 sm:text-sm md:text-base ${
              active === item.label
                ? 'bg-[#0E1623] text-white shadow'
                : 'text-gray-300 hover:text-white'
            }`}
            aria-current={active === item.label ? 'page' : undefined}
            tabIndex={0}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
