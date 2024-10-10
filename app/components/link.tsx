import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  Ref,
} from "react";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { icon?: React.ReactNode };

function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  const { children, icon, ...otherProps } = props;

  return (
    <a
      href=""
      {...otherProps}
      className={
        props.className +
        ` w-full h-20 rounded-[10px] cursor-pointer font-poppins text-[0.8125rem] bg-light-main font-medium mx-2.5
         text-xtiny text-gray-lite dark:text-dark-light-100 justify-center flex flex-col items-center 
         transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-dark-light-0 
         hover:text-white hover:bg-gradient-to-r from-gradients-from to-gradients-to`
      }
      ref={ref}
    >
      <span className="text-xl mb-1 size-4">{icon}</span>
      {props.children}
    </a>
  );
}

export default forwardRef<HTMLAnchorElement, LinkProps>(Link);
