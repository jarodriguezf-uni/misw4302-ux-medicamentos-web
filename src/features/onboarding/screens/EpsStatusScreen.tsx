import { AppHeader } from "../../../shared/components/AppHeader";
import { ActionButton } from "../../../shared/components/ActionButton";
import styles from "./EpsStatusScreen.module.css";

export function EpsStatusScreen() {
  return (
    <div className={styles.screen}>
      <AppHeader action={<span className={styles.step}>Paso 5 de 5</span>} />
      <main className={styles.main} id="main-content">
        <section className={styles.card} aria-labelledby="eps-status-title">
          <h1 id="eps-status-title" className={styles.badge}>
            ✓ Afiliación activa
          </h1>
          <p className={styles.subtitle}>Ya puedes preparar tus reclamos.</p>
          <ActionButton to="/medicines">Buscar un medicamento</ActionButton>
        </section>
      </main>
    </div>
  );
}
