import React from "react";
import { useTable } from "react-table";
import "../assets/styles/table.scss";

const Table = ({ getCellProps }) => {
	// --------------------------------------------
	// Table data from endpoint
	// --------------------------------------------
	const data = [
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "reconciled",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "reconciled",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "unreconciled",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "unreconciled",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
		{
			item_type: "Apple Mac Book 15” 250 SSD 12GB",
			price: "$73430",
			transaction_no: 1234567890,
			time: "12:30",
			status: "pending",
		},
	];

	const columns = [
		{
			Header: "Item Type",
			accessor: "item_type",
		},
		{
			Header: "Price",
			accessor: "price",
		},
		{
			Header: "Transaction No",
			accessor: "transaction_no",
		},
		{
			Header: "Time",
			accessor: "time",
		},
		{
			Header: "Status",
			accessor: "status",
		},
	];

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<table
			{...getTableProps()}
			style={{
				width: "100%",
				border: "none",
				borderCollapse: "collapse",
			}}
		>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										{...cell.getCellProps([
											getCellProps(cell),
										])}
									>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
