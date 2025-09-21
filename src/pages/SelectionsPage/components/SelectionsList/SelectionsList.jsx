import styles from "./SelectionsList.module.scss";
import ItemList from "../ItemList/ItemList";

function SelectionsList({ data, selectedData, removeItem }) {
	return (
		<div className={styles.list}>
			{selectedData.map((id) => {
				const item = data.find((item) => item.id === id);
				return (
					<ItemList
						key={item.id}
						data={item}
						removeItem={removeItem}
					/>
				);
			})}
		</div>
	);
}

export default SelectionsList;
