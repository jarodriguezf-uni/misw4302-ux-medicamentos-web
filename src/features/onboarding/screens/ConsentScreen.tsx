import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../../shared/components/AppHeader";
import styles from "./ConsentScreen.module.css";

export function ConsentScreen() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/signup/eps");
  }

  return (
    <div className={styles.screen}>
      <AppHeader action={<span className={styles.step}>Paso 3 de 5</span>} />
      <main className={styles.main} id="main-content">
        <section className={styles.card} aria-labelledby="consent-title">
          <h1 id="consent-title">Tratamiento de datos de salud</h1>
          <p className={styles.subtitle}>
            Tu fórmula y tus medicamentos son datos sensibles (Ley 1581).
          </p>

          <form onSubmit={handleSubmit}>
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                required
              />
              <span className={styles.checkboxLabel}>
                Autorizo el tratamiento de mis datos de salud
              </span>
            </label>

            <button
              className={styles.submitButton}
              type="submit"
              disabled={!accepted}
            >
              Acepto y continúo
            </button>
          </form>

          <p className={styles.note}>
            Sistema E02 · confirmación "Registro guardado".
          </p>
        </section>
      </main>
    </div>
  );
}
