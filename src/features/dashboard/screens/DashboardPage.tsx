import { useNavigate } from "react-router-dom";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./DashboardPage.module.css";

const shortcuts = [
  {
    title: "Reclamo en curso",
    detail: "Losartán · turno A-045",
    to: "/medicines/treatment",
  },
  {
    title: "Preparar un reclamo",
    detail: "Busca y valida tu fórmula",
    to: "/medicines",
  },
  {
    title: "Mis fórmulas",
    detail: "2 activas",
    to: "/medicines/treatment",
  },
  {
    title: "Mis puntos",
    detail: "Éxito Norte",
    to: "/locations",
  },
];

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="desktop" />
      <main className={styles.main}>
        <h1>Bienvenida, María</h1>
        <section className={styles.grid} aria-label="Accesos del escritorio">
          {shortcuts.map((shortcut) => (
            <button
              className={styles.shortcut}
              key={shortcut.title}
              onClick={() => navigate(shortcut.to)}
              type="button"
            >
              <span className={styles.shortcutTitle}>{shortcut.title}</span>
              <span className={styles.shortcutDetail}>{shortcut.detail}</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
