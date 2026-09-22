import { Link, NavLink } from "react-router-dom";
import styles from "./AuthenticatedHeader.module.css";

type AuthenticatedSection = "desktop" | "account" | "medicines" | "locations";

interface AuthenticatedHeaderProps {
  activeSection: AuthenticatedSection;
}

const navigationItems: Array<{
  label: string;
  section: AuthenticatedSection;
  to: string;
}> = [
  { label: "Escritorio", section: "desktop", to: "/desktop" },
  { label: "Mi cuenta", section: "account", to: "/account" },
  { label: "Mis medicamentos", section: "medicines", to: "/medicines" },
  { label: "Dónde reclamar", section: "locations", to: "/locations" },
];

export function AuthenticatedHeader({
  activeSection,
}: AuthenticatedHeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} to="/desktop" aria-label="Ir al escritorio">
        <span aria-hidden="true">+</span>
        <span>Medicamentos EPS</span>
      </Link>

      <nav className={styles.navigation} aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            className={`${styles.link} ${
              item.section === activeSection ? styles.active : ""
            }`}
            key={item.section}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
