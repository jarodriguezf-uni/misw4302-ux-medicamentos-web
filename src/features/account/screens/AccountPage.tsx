import { useNavigate } from "react-router-dom";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./AccountPage.module.css";

interface AccountAction {
  label: string;
  to?: string;
}

const accountActions: AccountAction[] = [
  { label: "Datos personales" },
  { label: "Centro de consentimiento", to: "/signup/consent" },
  { label: "Notificaciones" },
  { label: "Cerrar sesión", to: "/" },
];

export function AccountPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="account" />
      <main className={styles.main} id="main-content">
        <h1>Cuenta y privacidad</h1>
        <section className={styles.actions} aria-label="Opciones de la cuenta">
          {accountActions.map((action) => (
            <button
              className={styles.action}
              key={action.label}
              onClick={action.to ? () => navigate(action.to!) : undefined}
              type="button"
            >
              <span>{action.label}</span>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
