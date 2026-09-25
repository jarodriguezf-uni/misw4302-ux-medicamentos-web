import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../../shared/components/AppHeader";
import styles from "./EpsScreen.module.css";

export function EpsScreen() {
  const navigate = useNavigate();
  const [eps, setEps] = useState("Compensar");
  const [validating, setValidating] = useState(false);

  function handleValidate() {
    setValidating(true);
    window.setTimeout(() => navigate("/signup/eps/status"), 1200);
  }

  return (
    <div className={styles.screen}>
      <AppHeader action={<span className={styles.step}>Paso 4 de 5</span>} />
      <main className={styles.main} id="main-content">
        <section
          className={styles.card}
          aria-busy={validating}
          aria-labelledby="eps-title"
        >
          <h1 id="eps-title">Vincular tu EPS</h1>

          <label className={styles.field}>
            <span>EPS</span>
            <select
              disabled={validating}
              name="eps"
              value={eps}
              onChange={(event) => setEps(event.target.value)}
            >
              <option value="Sanitas">Sanitas</option>
              <option value="Compensar">Compensar</option>
            </select>
          </label>

          {validating && (
            <div
              className={styles.validatingRow}
              role="status"
              aria-live="polite"
            >
              <span className={styles.spinner} aria-hidden="true" />
              <span>Validando la afiliación en línea...</span>
            </div>
          )}

          <button
            className={styles.submitButton}
            type="button"
            disabled={validating}
            onClick={handleValidate}
          >
            Validar afiliación
          </button>

        </section>
      </main>
    </div>
  );
}
