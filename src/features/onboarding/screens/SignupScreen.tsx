import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../../shared/components/AppHeader";
import styles from "./SignupScreen.module.css";

export function SignupScreen() {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/signup/verify-email");
  }

  return (
    <div className={styles.screen}>
      <AppHeader action={<span className={styles.step}>Paso 1 de 5</span>} />
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="signup-title">
          <h1 id="signup-title">Crear cuenta</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Tipo de documento</span>
              <select
                name="documentType"
                value={documentType}
                onChange={(event) => setDocumentType(event.target.value)}
              >
                <option value="" disabled>
                  Selecciona
                </option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="passport">Pasaporte</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>Documento</span>
              <input name="document" type="text" />
            </label>

            <label className={styles.field}>
              <span>Correo</span>
              <input autoComplete="email" name="email" type="email" />
            </label>

            <label className={styles.field}>
              <span>Celular</span>
              <input name="phone" type="tel" />
            </label>

            <label className={styles.field}>
              <span>Contraseña</span>
              <input
                autoComplete="new-password"
                name="password"
                type="password"
              />
            </label>

            <button className={styles.submitButton} type="submit">
              Crear cuenta
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
