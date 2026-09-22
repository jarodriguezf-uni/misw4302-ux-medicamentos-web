import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../../shared/components/AppHeader";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("medicamento");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/desktop");
  }

  return (
    <div className={styles.screen}>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.card} aria-labelledby="login-title">
          <h1 id="login-title">Iniciar sesión</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Documento o correo</span>
              <input
                autoComplete="username"
                name="identity"
                onChange={(event) => setIdentity(event.target.value)}
                type="text"
                value={identity}
              />
            </label>

            <label className={styles.field}>
              <span>Contraseña</span>
              <input
                autoComplete="current-password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                value={password}
              />
            </label>

            <button className={styles.submitButton} type="submit">
              Entrar
            </button>
          </form>

          <button className={styles.recoveryButton} type="button">
            ¿Olvidaste tu contraseña?
          </button>
        </section>
      </main>
    </div>
  );
}
