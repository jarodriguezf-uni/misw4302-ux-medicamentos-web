import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Locations.module.css";

export function LocationDetailPage() {
  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="locations" />
      <main className={styles.detailMain}>
        <section
          className={styles.detailCard}
          aria-labelledby="location-detail-title"
        >
          <h1 id="location-detail-title">Éxito Norte</h1>

          <dl className={styles.detailGrid}>
            <div className={styles.detailField}>
              <dt>Dirección</dt>
              <dd>Cra 15 #100-20</dd>
            </div>
            <div className={styles.detailField}>
              <dt>Horario</dt>
              <dd>8:00 – 20:00</dd>
            </div>
          </dl>

          <span className={styles.availabilityBadge}>
            ✓ Losartán 50 mg · Disponible
          </span>

          <div className={styles.updatedRow}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 9v4l2.5 2.5" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <span>Actualizado hace 2 h</span>
          </div>

          <p className={styles.infoNote}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5" />
              <path d="M12 8h.01" />
            </svg>
            El turno se saca desde la app móvil.
          </p>
        </section>
      </main>
    </div>
  );
}
