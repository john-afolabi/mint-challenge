import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

// -------------------------------------
// Order data from endpoint
// -------------------------------------
const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const Chart = () => {
	return (
		<ResponsiveContainer width="100%" height={310}>
			<AreaChart data={data}>
				<defs>
					<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="rgba(2, 148, 255)" />
						<stop
							offset="95%"
							stopColor="rgba(255, 255, 255, 0.5)"
						/>
					</linearGradient>
				</defs>
				<CartesianGrid horizontal={false} />
				<XAxis dataKey="name" dy={-270} dx={-75} tickSize={0} />

				<Tooltip />
				<Area
					type="linear"
					legendType="none"
					dataKey="uv"
					stroke="rgba(2, 148, 255)"
					fill="url(#gradient)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default Chart;
