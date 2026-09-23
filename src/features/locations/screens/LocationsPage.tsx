import { useNavigate } from "react-router-dom";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Locations.module.css";

interface PointInfo {
  name: string;
  distance: string;
  status: "available" | "unknown";
  to?: string;
}

const points: PointInfo[] = [
  { name: "Éxito Norte", distance: "1.2 km", status: "available", to: "/locations/detail" },
  { name: "Cruz Verde 127", distance: "2.5 km", status: "unknown" },
];

const statusLabel: Record<PointInfo["status"], string> = {
  available: "Disponible",
  unknown: "Sin dato",
};

export function LocationsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="locations" />
      <main className={styles.main} id="main-content">
        <h1 className={styles.pageTitle}>Dónde reclamar</h1>
        <div className={styles.layout}>
          <section className={styles.list} aria-label="Puntos en convenio">
            {points.map((point) => {
              const cardContent = (
                <>
                  <div className={styles.pointHeader}>
                    <span className={styles.pointName}>{point.name}</span>
                    <span
                      className={`${styles.badge} ${styles[point.status]}`}
                    >
                      {point.status === "available" ? "✓" : "⏱"}{" "}
                      {statusLabel[point.status]}
                    </span>
                  </div>
                  <span className={styles.pointDistance}>
                    {point.distance}
                  </span>
                </>
              );

              if (!point.to) {
                return (
                  <div key={point.name} className={styles.pointCard}>
                    {cardContent}
                  </div>
                );
              }

              return (
                <button
                  key={point.name}
                  type="button"
                  className={styles.pointCard}
                  onClick={() => navigate(point.to!)}
                >
                  {cardContent}
                </button>
              );
            })}
          </section>

          <div className={styles.mapPlaceholder} aria-label="Mapa de puntos">
            <svg
              aria-hidden="true"
              focusable="false"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Z" />
              <path d="M9 3v16" />
              <path d="M15 5v16" />
            </svg>
            <span className={styles.mapLabel}>Mapa de puntos</span>
          </div>
        </div>
      </main>
    </div>
  );
}
