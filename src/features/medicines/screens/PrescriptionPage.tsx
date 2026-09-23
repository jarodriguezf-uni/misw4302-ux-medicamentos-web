import { ActionButton } from "../../../shared/components/ActionButton";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Medicines.module.css";

export function PrescriptionPage() {
  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="medicines" />
      <main className={styles.prescriptionMain} id="main-content">
        <section className={styles.prescriptionCard}>
          <h1>Datos de la fórmula</h1>
          <dl className={styles.summaryRows}>
            <div className={styles.summaryRow}>
              <dt>Medicamento</dt>
              <dd>Losartán 50 mg</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>Dosis</dt>
              <dd>1 tableta al día</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>Cantidad</dt>
              <dd>30</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>Vigencia</dt>
              <dd>12/2026</dd>
            </div>
          </dl>
          <div className={styles.formulaFooter}>
            <span className={styles.validBadge}>✓ Fórmula vigente</span>
            <div className={styles.buttonWidth}>
              <ActionButton to="/medicines/treatment">Continuar</ActionButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
