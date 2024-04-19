import React, {PropsWithChildren, useState} from "react";
import "./sidebar.css";

type SidebarButtonProps = {
	name: string;
};
//export function SidebarButton(name: string,props: PropsWithChildren) {
export function SidebarButton(props: PropsWithChildren<SidebarButtonProps>) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div>
			<button
				className="dropdown-btn"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{props.name}
			</button>
			{isOpen && props.children}
		</div>
	);
}
