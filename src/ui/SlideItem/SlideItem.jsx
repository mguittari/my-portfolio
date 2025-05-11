import { useContext } from "react";
import styles from "./slideItem.module.scss";
import Button from "../Button/Button";
import ContrastContext from "../../context/ContrastContext/ContrastContext";

export default function SlideItem({
	title,
	image,
	index,
	description,
	githubUrl,
	appUrl,
}) {
	const { contrast } = useContext(ContrastContext);
	return (
		<div
			className={`${styles["slide-item-container"]} ${index % 2 === 0 ? styles.even : styles.odd} ${contrast ? styles.contrasted : ""}`}
		>
			<h3 className={styles.title}>{title}</h3>
			<div
				className={`${styles["item-sub-container"]}  ${index % 2 === 1 ? styles.even : styles.odd} ${contrast ? styles.contrasted : ""}`}
			>
				<div className={styles.content}>
					<div>
						<img className={styles.img} src={image} alt="" />
						<p className={styles.description}>{description}</p>
					</div>
					<div>
						<Button text="Github" url={githubUrl} />
						{appUrl && <Button text="Web" url={appUrl} />}
					</div>
				</div>
			</div>
		</div>
	);
}
