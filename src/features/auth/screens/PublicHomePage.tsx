import { Link } from "react-router-dom";
import { ActionButton } from "../../../shared/components/ActionButton";
import { AppHeader } from "../../../shared/components/AppHeader";
import styles from "./PublicHomePage.module.css";

export function PublicHomePage() {
  return (
    <div className={styles.screen}>
      <AppHeader
        action={
          <Link className={styles.headerLink} to="/login">
            Iniciar sesión
          </Link>
        }
      />
      <main className={styles.main} id="main-content">
        <section className={styles.introduction}>
          <h1>Prepara tu reclamo desde el computador</h1>
          <p>
            Consulta el punto en convenio y el stock; el turno lo sacas en la app
            móvil.
          </p>
        </section>

        <section className={styles.accessPanel} aria-label="Opciones de acceso">
          <ActionButton to="/signup">Crear cuenta</ActionButton>
          <ActionButton to="/login" variant="outlined">
            Iniciar sesión
          </ActionButton>
        </section>
      </main>
    </div>
  );
}
