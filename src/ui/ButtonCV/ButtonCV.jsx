import styles from "./buttonCV.module.scss";

export default function ButtonCV({ text, fileName, path }) {
	return (
		<a href={path} download={fileName} className={styles.button}>
			{text}
		</a>
	);
}
