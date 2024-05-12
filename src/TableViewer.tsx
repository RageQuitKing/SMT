import React from "react";
import "./TableViewer.css";

export default function TableViewer({
	tableIndex,
	tablesMap,
}: {
	tableIndex: number;
	tablesMap: Map<number, JSX.Element>;
}) {
	return <div className="table-viewer">{tableIndex !== -1 && tablesMap.get(tableIndex)}</div>;
}
