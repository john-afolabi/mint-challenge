import React from "react";
import "../assets/styles/dashboard.scss";
import SmallChart from "../assets/icons/small-chart.svg";
import LeftButton from "../assets/icons/left-button.svg";
import RightButton from "../assets/icons/right-button.svg";
import Search from "../assets/icons/search.svg";
import Chart from "./Chart";
import Table from "./Table";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<section className="summary">
				<div className="quick_summary">
					<div>
						<p>
							<span>Daily Transaction Volume</span>
							<br />
							2342
						</p>
						<img src={SmallChart} alt="daily transaction volume" />
					</div>

					<div>
						<p>
							<span>Daily Transaction Value</span>
							<br />
							₦4,000,000
						</p>
						<img src={SmallChart} alt="daily transaction value" />
					</div>

					<div>
						<p>
							<span>Total Transaction Volume</span>
							<br />
							452,000
						</p>
						<img src={SmallChart} alt="total transaction volume" />
					</div>

					<div>
						<p>
							<span>Daily Transaction Value</span>
							<br />
							₦4,000,000
						</p>
						<img src={SmallChart} alt="total transaction value" />
					</div>
				</div>
				<div className="main_summary">
					<div className="main_summary_left">
						<div className="main_summary_filter">
							<h3>Today: 9, Aug 2020</h3>
							<div>
								<select name="months">
									<option>1 Jan - 1 Jun</option>
									<option>1 Jan - 1 Jun</option>
									<option>1 Jan - 1 Jun</option>
								</select>
								<div>
									<img src={LeftButton} alt="left-button" />
									<img src={RightButton} alt="right-button" />
								</div>
							</div>
						</div>
						<div className="data_chart">
							<Chart />
						</div>
					</div>

					<div className="main_summary_right">
						<div className="main_summary_card">
							<h4>Orders</h4>
							{/* -------------------------------------------------
                                Inline styles so the width can be set dynamically
                                -------------------------------------------------
                                */}
							<hr
								style={{
									width: "80%",
									backgroundColor: "#27AE60",
									borderTopLeftRadius: "2px",
									borderBottomLeftRadius: "2px",
								}}
							/>
							<hr
								style={{
									width: "20%",
									backgroundColor: "#FDC203",
									borderTopRightRadius: "2px",
									borderBottomRightRadius: "2px",
								}}
							/>
							<p>Pending Orders:</p>
							<p>Reconciled Orders:</p>
							<p>Total Orders:</p>
						</div>

						<div className="main_summary_card">
							<h4>Payments</h4>
							{/* -------------------------------------------------
                                Inline styles so the width can be set dynamically
                                -------------------------------------------------
                                */}
							<hr
								style={{
									width: "80%",
									backgroundColor: "#27AE60",
									borderTopLeftRadius: "2px",
									borderBottomLeftRadius: "2px",
								}}
							/>
							<hr
								style={{
									width: "20%",
									backgroundColor: "#FDC203",
									borderTopRightRadius: "2px",
									borderBottomRightRadius: "2px",
								}}
							/>
							<p>Un-reconciled Payments:</p>
							<p>Reconciled Payments:</p>
							<p>Total Payments:</p>
						</div>
					</div>
				</div>
			</section>
			<section className="payments_table">
				<h2>Payments</h2>
				<div className="payments_table_filters">
					<p>Showing 20 out of 500 payments</p>

					<label htmlFor="table_search">
						<img src={Search} alt="search" />
						<input
							type="text"
							name="table_search"
							placeholder="Search payments"
						/>
					</label>

					<div>
						<p>Show</p>
						<select name="payment_type">
							<option>All</option>
							<option>Reconciled</option>
							<option>Un-reconciled</option>
							<option>Settled</option>
							<option>Unsettled</option>
						</select>
					</div>
				</div>
				<div>
					<Table />
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
