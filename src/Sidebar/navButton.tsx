import React, {PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

type NavButtonProps = {
	sidebarState: Map<string, boolean>;
	path: string;
};

export function NavButton(props: PropsWithChildren<NavButtonProps>) {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => {
				navigate(props.path, {state: {sidebarState: props.sidebarState}});
			}}
			className="nav-button"
		>
			{props.children}
		</button>
	);
}
