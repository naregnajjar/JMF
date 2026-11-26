import Link from "next/link";
import { DonorItem } from "../DonorItem/DonorItem";
import styles from "./DonorList.module.css";
import type { DonorListProps } from "./props";

export function DonorList({ list, locale }: DonorListProps) {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{list.title}</h1>
          <nav aria-label="Language" className={styles.languages}>
            <Link
              aria-current={locale === "en" ? "page" : undefined}
              className={locale === "en" ? styles.activeLanguage : styles.language}
              href="/en"
              hrefLang="en"
            >
              English
            </Link>
            <Link
              aria-current={locale === "hy" ? "page" : undefined}
              className={locale === "hy" ? styles.activeLanguage : styles.language}
              href="/hy"
              hrefLang="hy"
            >
              Հայերեն
            </Link>
          </nav>
        </header>
        <ul className={styles.grid}>
          {list.donors.map((donor) => (
            <li className={styles.gridItem} key={donor._key}>
              <DonorItem donor={donor} locale={locale} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
