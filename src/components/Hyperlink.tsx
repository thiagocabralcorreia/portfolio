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
        className="py-2.5 sm:py-3 px-6 shadow-lg rounded-lg duration-500 flex justify-center items-center dark:hover:border
        hover:border-amber-400 bg-amber-400 hover:bg-neutral-900 text-neutral-900 hover:text-amber-400"
      >
        {children}
      </a>
    </div>
  );
};

export default Hyperlink;
