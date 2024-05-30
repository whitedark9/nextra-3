import clsx from "clsx";
import { ReactNode, useMemo } from "react";
import { Variants } from "~/constants/types";

type BoxProps = {
  variant?: Variants;
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Box(props: BoxProps) {
  const { variant = "info", size = "md" } = props;

  const boxVariant = useMemo(
    () =>
      `bg-${variant}-container text-on-${variant}-container border border-${variant}`,
    [variant],
  );
  const boxSize = useMemo(() => `p-${size} rounded-${size}`, [size]);

  return (
    <div className={clsx(boxVariant, boxSize, props.className)}>
      {props.children}
    </div>
  );
}
