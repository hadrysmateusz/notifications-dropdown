import styles from "./CountBadge.module.css";

export const CountBadge = ({ count }: { count: number }) => {
  return <div className={styles.countBadge}>{count}</div>;
};
