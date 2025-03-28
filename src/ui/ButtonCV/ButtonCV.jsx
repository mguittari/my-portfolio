import styles from "./buttonCV.module.scss";

export default function ButtonCV({ text, fileName }) {
	return (
		<a href="/path/to/CV.pdf" download={fileName} className={styles.button}>
			{text}
		</a>
	);
}
