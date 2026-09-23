import { ActionButton } from "../../../shared/components/ActionButton";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Medicines.module.css";

const treatments = [
  { name: "Losartán 50 mg", quantity: "30 tab" },
  { name: "Metformina 850 mg", quantity: "60 tab" },
];

export function TreatmentPage() {
  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="medicines" />
      <main className={styles.treatmentContent} id="main-content">
        <h1 className={styles.pageTitle}>Tu tratamiento</h1>
        <section className={styles.treatmentList} aria-label="Medicamentos">
          {treatments.map((treatment) => (
            <button
              className={styles.treatmentRow}
              key={treatment.name}
              onClick={() => {}}
              type="button"
            >
              <span className={styles.rowCopy}>
                <span className={styles.rowTitle}>{treatment.name}</span>
                <span className={styles.rowDetail}>{treatment.quantity}</span>
              </span>
              <span className={styles.chevron} aria-hidden="true">
                ›
              </span>
            </button>
          ))}
        </section>
        <div className={styles.locationsButton}>
          <ActionButton to="/locations">Ver dónde reclamar</ActionButton>
        </div>
      </main>
    </div>
  );
}
