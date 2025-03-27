import styles from "./containerTitle.module.scss";

export default function ContainerTitle({ title, containerId, titleId }) {
	return (
		<div id={styles[containerId]}>
			<h2 id={styles[titleId]}>{title}</h2>
		</div>
	);
}
