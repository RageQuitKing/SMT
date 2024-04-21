import React, {PropsWithChildren, useState} from "react";
import {Sidebar} from "./Sidebar/sidebar";
import {useLocation} from "react-router-dom";

type PageState = {
	sidebarState: Map<string, boolean>;
};

function isPageState(item: unknown): item is PageState {
	return (item as PageState) !== undefined;
}

export default function Page(props: PropsWithChildren) {
	const location = useLocation();

	const [sidebarState, setSidebarState] = useState<Map<string, boolean>>(new Map());

	if (
		location.state &&
		isPageState(location.state) &&
		location.state.sidebarState &&
		areStatesDifferent(location.state.sidebarState, sidebarState)
	) {
		setSidebarState(location.state.sidebarState);
	}

	return (
		<div>
			<Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
			{props.children}
		</div>
	);
}

function areStatesDifferent(state1: Map<string, boolean>, state2: Map<string, boolean>): boolean {
	const state1Keys = Array.from(state1.keys());
	const state2Keys = Array.from(state2.keys());

	for (let i = 0; i < state1Keys.length; i++) {
		if (!state2.has(state1Keys[i])) {
			return true;
		}
	}
	for (let i = 0; i < state2Keys.length; i++) {
		if (!state1.has(state2Keys[i])) {
			return true;
		}
	}
	for (let i = 0; i < state1Keys.length; i++) {
		if (state1.get(state1Keys[i]) !== state2.get(state1Keys[i])) {
			return true;
		}
	}

	return false;
}
