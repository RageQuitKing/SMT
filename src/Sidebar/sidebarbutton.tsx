import React, {PropsWithChildren} from "react";
import "./sidebar.css";

type SidebarButtonProps = {
	name: string;
	sidebarState: Map<string, boolean>;
	setSidebarState: (sidebarState: Map<string, boolean>) => void;
};

export function SidebarButton(props: PropsWithChildren<SidebarButtonProps>) {
	return (
		<div>
			<button
				className="dropdown-btn"
				onClick={() => {
					let buttonState = props.sidebarState.get(props.name);

					if (buttonState === undefined) {
						buttonState = false;
					}

					props.sidebarState.set(props.name, !buttonState);
					props.setSidebarState(cloneMap(props.sidebarState));
				}}
			>
				{props.name}
				<i className="fa fa-caret-down"></i>
			</button>
			{props.sidebarState.get(props.name) && props.children}
		</div>
	);
}

function cloneMap(oldMap: Map<string, boolean>): Map<string, boolean> {
	const newMap = new Map<string, boolean>();

	const oldKeys = Array.from(oldMap.keys());

	oldKeys.forEach((item) => {
		const oldVal = oldMap.get(item);

		if (oldVal) {
			newMap.set(item, oldVal);
		}
	});

	return newMap;
}
