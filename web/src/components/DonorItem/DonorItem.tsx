import styles from "./DonorItem.module.css";
import type { DonorItemProps } from "./props";

export function DonorItem({ donor, locale }: DonorItemProps) {
  const amount = new Intl.NumberFormat(locale === "hy" ? "hy-AM" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(donor.amount);

  return (
    <article className={styles.card}>
      <p className={styles.amount}>{amount}</p>
      <h2 className={styles.name}>{donor.name}</h2>
      {donor.location && <p className={styles.location}>{donor.location}</p>}
    </article>
  );
}
