type HeaderNavigationProps = {
  items: NavItem[];
};

type NavItem = {
  title: string;
  icon?: JSX.Element;
  link?: string;
};

export const HeaderNavigation = ({ items }: HeaderNavigationProps) => (
  <nav className="flex grow">
    <ul className="flex gap-4">
      {items.map(({ title, icon, link }, i) => (
        <li key={i}>
          <a className="flex justify-between gap-2.5" href={link}>
            {icon}
            <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
              {title}
            </div>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
