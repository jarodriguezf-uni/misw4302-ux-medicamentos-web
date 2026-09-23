import { ActionButton } from "../../../shared/components/ActionButton";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Medicines.module.css";

export function MedicineDetailPage() {
  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="medicines" />
      <main className={styles.detailContent} id="main-content">
        <h1 className={styles.pageTitle}>Losartán 50 mg</h1>
        <div className={styles.detailGrid}>
          <section className={styles.detailCard}>
            <h2>Detalle</h2>
            <p>Tableta · caja x30</p>
            <p>Vigencia 12/2026</p>
          </section>
          <section className={styles.detailCard}>
            <h2>Equivalentes genéricos</h2>
            <p>Losartán potásico</p>
            <p>Losartán MK</p>
          </section>
        </div>
        <div className={styles.buttonWidth}>
          <ActionButton to="/medicines/prescription">Elegir este</ActionButton>
        </div>
      </main>
    </div>
  );
}
