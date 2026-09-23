import styles from "./PlaceholderScreen.module.css";

interface PlaceholderScreenProps {
  frameLabel: string;
  name: string;
  visualNodeId: string;
  checkpoint: string;
}

export function PlaceholderScreen({
  frameLabel,
  name,
  visualNodeId,
  checkpoint,
}: PlaceholderScreenProps) {
  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <span className={styles.title}>Medicamentos</span>
      </header>
      <main className={styles.body} id="main-content">
        <span className={styles.name}>
          {frameLabel} — {name}
        </span>
        <span className={styles.meta}>
          Nodo Figma {visualNodeId} · pendiente en {checkpoint}
        </span>
      </main>
    </div>
  );
}
