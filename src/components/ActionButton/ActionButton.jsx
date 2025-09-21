import styles from "./ActionButton.module.scss";

function ActionButton({isActive, label, onAction}) {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.active : ""}`}
			onClick={onAction}
			type="button"
		>
			{label}
		</button>
	);
}

export default ActionButton;