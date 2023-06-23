interface HyperlinkProps {
  href?: string;
  download?: string | boolean;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Hyperlink = ({
  download = false,
  href,
  ariaLabel,
  target,
  rel,
  onClick,
  children,
}: HyperlinkProps) => {
  return (
    <div className="flex justify-center lg:block">
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="py-2.5 sm:py-3 px-6 shadow-lg rounded-lg duration-500 flex justify-center items-center dark:hover:border border border-primary
        hover:border-primary dark:border dark:border-neutral-900 dark:hover:border-primaryDark bg-primary dark:bg-primaryDark
        hover:bg-white text-white dark:text-neutral-900 hover:text-primary dark:hover:text-primaryDark dark:hover:bg-neutral-900"
      >
        {children}
      </a>
    </div>
  );
};

export default Hyperlink;
