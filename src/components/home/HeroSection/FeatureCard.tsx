import styles from "@/assets/sass/modules/home/feature-card.module.scss";

interface PropsTypes {
  title: string;
  value: string;
}

export function FeatureCard({ title, value }: PropsTypes) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.title}>{title}</span>
      <br />
      <span className={styles.value}>{value}</span>
    </div>
  );
}
