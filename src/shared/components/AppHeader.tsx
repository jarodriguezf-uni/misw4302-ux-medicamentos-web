import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  action?: ReactNode;
}

export function AppHeader({ action }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} to="/" aria-label="Ir al inicio">
        <span aria-hidden="true">+</span>
        <span>Medicamentos EPS</span>
      </Link>
      {action ? <div className={styles.action}>{action}</div> : null}
    </header>
  );
}
