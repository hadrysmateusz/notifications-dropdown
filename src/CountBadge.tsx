import styles from "./CountBadge.module.css";

export const CountBadge = ({ count }: { count: number }) => {
  if (count <= 0) return null;
  return <div className={styles.countBadge}>{count}</div>;
};
