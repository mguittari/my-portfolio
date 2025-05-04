import data from "../../myDatas.json";
import styles from "./linksComponent.module.scss";

export default function LinksComponent() {
	const links = data.links;
	return (
		<div className={styles["links-container"]}>
			{links.map((item) => {
				return (
					<p className={styles.link} key={item}>
						<a href={item} target="_blank" rel="noopener noreferrer">
							{item}
						</a>
					</p>
				);
			})}
			<p className={styles.mail}>
				<a href="mailto:mattias.guittari@gmail.com">
					mattias.guittari@gmail.com
				</a>
			</p>
		</div>
	);
}
