import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticatedHeader } from "../../../shared/components/AuthenticatedHeader";
import styles from "./Medicines.module.css";

const medicines = [
  { name: "Losartán 50 mg", detail: "Tableta · caja x30" },
  { name: "Metformina 850 mg", detail: "Tableta · caja x60" },
];

export function MedicineSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      medicines.filter((medicine) =>
        medicine.name.toLocaleLowerCase("es").includes(
          query.trim().toLocaleLowerCase("es"),
        ),
      ),
    [query],
  );

  return (
    <div className={styles.screen}>
      <AuthenticatedHeader activeSection="medicines" />
      <main className={styles.content} id="main-content">
        <h1 className={styles.pageTitle}>Buscar medicamento</h1>

        <label className={styles.searchBox}>
          <span className={styles.searchIcon} aria-hidden="true">
            ⌕
          </span>
          <span className="srOnly">Nombre del medicamento</span>
          <input
            className={styles.searchInput}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre del medicamento"
            type="search"
            value={query}
          />
        </label>

        <span className={styles.resultsLabel}>Resultados</span>
        <span className="srOnly" role="status" aria-live="polite">
          {results.length} resultados encontrados
        </span>
        <section className={styles.list} aria-label="Resultados">
          {results.map((medicine) => (
            <button
              className={styles.resultRow}
              key={medicine.name}
              onClick={() => {
                if (medicine.name === "Losartán 50 mg") {
                  navigate("/medicines/detail");
                }
              }}
              type="button"
            >
              <span className={styles.rowCopy}>
                <span className={styles.rowTitle}>{medicine.name}</span>
                <span className={styles.rowDetail}>{medicine.detail}</span>
              </span>
              <span className={styles.chevron} aria-hidden="true">
                ›
              </span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
