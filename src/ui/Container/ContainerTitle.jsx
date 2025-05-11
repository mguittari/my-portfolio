import styles from "./containerTitle.module.scss";

export default function ContainerTitle({
	title,
	containerId,
	titleId,
	containerClassName,
}) {
	return (
		<div id={styles[containerId]} className={styles[containerClassName]}>
			<h2 id={styles[titleId]}>{title}</h2>
		</div>
	);
}
