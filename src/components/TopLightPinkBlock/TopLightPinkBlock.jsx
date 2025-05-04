import styles from "./topLightPinkBlock.module.scss";

export default function TopLightPinkBlock() {
	const now = new Date();

	const date = now.getDate().toString();
	const month = (now.getMonth() + 1).toString().padStart(2, "0");
	const year = now.getFullYear();

	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");

	return (
		<div className={styles.container}>
			<div className={styles["container-text"]}>
				<p className={styles.text}>
					Bienvenue sur ce portfolio. Nous sommes le{" "}
					{`${date}/${month}/${year}`}, il est {`${hours}:${minutes}`}.
				</p>
			</div>
		</div>
	);
}
