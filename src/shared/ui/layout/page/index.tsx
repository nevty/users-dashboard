import cx from 'clsx';
import { FC } from 'react';

type BaseProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const PageLayoutBase: FC<BaseProps> = ({ children, className }) => (
  <div
    className={cx(
      'h-full w-full flex flex-col bg-zinc-950 text-white',
      className,
    )}
  >
    {children}
  </div>
);

const Container: FC<BaseProps> = ({ children }) => (
  <div className="w-full px-4 py-3 md:px-5 md:py-4">{children}</div>
);

export const PageLayout = PageLayoutBase as typeof PageLayoutBase & {
  Container: typeof Container;
};
PageLayout.Container = Container;
