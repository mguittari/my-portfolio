import styles from "./button.module.scss";

export default function Button({ text, url }) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<button className={styles.button} type="button">
				<p className={styles["text-button"]}>{text}</p>
			</button>
		</a>
	);
}
