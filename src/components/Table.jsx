import React from "react";
import { useTable } from "react-table";

const Table = () => {
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
			status: "pending",
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

	const columns = React.useMemo(
		() => [
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
		],
		[]
	);

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
							<th
								{...column.getHeaderProps()}
								style={{
									background: "#EAEEF0",
									color: "#7F8FA4",
									height: "42px",
									fontSize: "1.4rem",
									lineHeight: "19px",
									fontWeight: "400",
									textAlign: "left",
									padding: "0 20px",
								}}
							>
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
										{...cell.getCellProps()}
										style={{
											padding: "25px 20px",
											fontSize: "1.4rem",
											lineHeight: "19px",
											background: "white",
											color: "#414042",
											borderBottom: "1px solid #CCCFD4",
										}}
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
