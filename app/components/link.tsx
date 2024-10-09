import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
  Ref,
} from "react";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
function Link(props: LinkProps, ref: Ref<HTMLAnchorElement>) {
  return (
    <a
      href=""
      {...props}
      className={props.className + " text-black rounded-md font-bold px-7 py-1"}
      ref={ref}
    ></a>
  );
}

export default forwardRef<HTMLAnchorElement, LinkProps>(Link);
