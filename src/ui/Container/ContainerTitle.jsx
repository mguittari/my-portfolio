import styles from "./containerTitle.module.scss";

export default function ContainerTitle({ title, containerId, titleId }) {
	return (
		<div id={styles[containerId]}>
			<h1 id={styles[titleId]}>{title}</h1>
		</div>
	);
}
