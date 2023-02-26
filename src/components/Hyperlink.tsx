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
        className="border border-neutral-900 hover:border-amber-300 py-2.5 sm:py-3 px-6
        shadow-lg rounded-lg bg-amber-300 hover:bg-neutral-900 text-neutral-900
        hover:text-amber-300 duration-500 flex justify-center items-center"
      >
        {children}
      </a>
    </div>
  );
};

export default Hyperlink;
