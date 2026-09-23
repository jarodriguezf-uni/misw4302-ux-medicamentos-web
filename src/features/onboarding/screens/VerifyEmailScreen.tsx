import { useState } from "react";
import { AppHeader } from "../../../shared/components/AppHeader";
import { ActionButton } from "../../../shared/components/ActionButton";
import actionButtonStyles from "../../../shared/components/ActionButton.module.css";
import styles from "./VerifyEmailScreen.module.css";

export function VerifyEmailScreen() {
  const [resent, setResent] = useState(false);

  return (
    <div className={styles.screen}>
      <AppHeader action={<span className={styles.step}>Paso 2 de 5</span>} />
      <main className={styles.main} id="main-content">
        <section className={styles.card} aria-labelledby="verify-email-title">
          <svg
            aria-hidden="true"
            className={styles.icon}
            focusable="false"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <h1 id="verify-email-title">Verifica tu correo</h1>
          <p className={styles.subtitle}>
            Te enviamos un enlace a tucorreo@correo.com
          </p>
          <div className={styles.actions}>
            <ActionButton to="/signup/consent">Continuar</ActionButton>
            <button
              aria-live="polite"
              type="button"
              className={`${actionButtonStyles.button} ${actionButtonStyles.outlined}`}
              onClick={() => setResent(true)}
            >
              {resent ? "Enlace reenviado" : "Reenviar enlace"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
