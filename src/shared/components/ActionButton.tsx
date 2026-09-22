import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./ActionButton.module.css";

type ActionButtonVariant = "filled" | "outlined";

interface ActionButtonProps {
  children: ReactNode;
  to: string;
  variant?: ActionButtonVariant;
}

export function ActionButton({
  children,
  to,
  variant = "filled",
}: ActionButtonProps) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} to={to}>
      {children}
    </Link>
  );
}
