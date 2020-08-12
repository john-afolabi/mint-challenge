import React from "react";
import "../assets/styles/dashboard.scss";
import SmallChart from "../assets/icons/small-chart.svg";
import LeftButton from "../assets/icons/left-button.svg";
import RightButton from "../assets/icons/right-button.svg";
import Search from "../assets/icons/search.svg";
import Chart from "./Chart";
import Table from "./Table";

// -------------------------------------
// Order data from endpoint
// -------------------------------------
const PendingOrders = 20;
const ReconciledOrders = 80;
const TotalOrders = 100;
const UnreconciledPayments = 20;
const ReconciledPayments = 80;
const TotalPayments = 100;

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
									width: `${ReconciledOrders}%`,
									backgroundColor: "#27AE60",
									borderTopLeftRadius: "2px",
									borderBottomLeftRadius: "2px",
								}}
							/>
							<hr
								style={{
									width: `${PendingOrders}%`,
									backgroundColor: "#FDC203",
									borderTopRightRadius: "2px",
									borderBottomRightRadius: "2px",
								}}
							/>
							<p>
								Pending Orders: <span>{PendingOrders}</span>
							</p>
							<p>
								Reconciled Orders:{" "}
								<span>{ReconciledOrders}</span>
							</p>
							<p>
								Total Orders: <span>{TotalOrders}</span>
							</p>
						</div>

						<div className="main_summary_card">
							<h4>Payments</h4>
							{/* -------------------------------------------------
                                Inline styles so the width can be set dynamically
                                -------------------------------------------------
                                */}
							<hr
								style={{
									width: `${ReconciledPayments}%`,
									backgroundColor: "#27AE60",
									borderTopLeftRadius: "2px",
									borderBottomLeftRadius: "2px",
								}}
							/>
							<hr
								style={{
									width: `${UnreconciledPayments}%`,
									backgroundColor: "#FDC203",
									borderTopRightRadius: "2px",
									borderBottomRightRadius: "2px",
								}}
							/>
							<p>
								Un-reconciled Payments:{" "}
								<span>{UnreconciledPayments}</span>
							</p>
							<p>
								Reconciled Payments:{" "}
								<span>{ReconciledPayments}</span>
							</p>
							<p>
								Total Payments: <span>{TotalPayments}</span>
							</p>
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
				<Table
					getCellProps={(cellInfo) => ({
						// -------------------------------------------------------
						// Add classname Dynamically on cell value
						// -------------------------------------------------------

						className:
							cellInfo.column.id === "status"
								? `payment-status-${cellInfo.value}`
								: null,
					})}
				/>

				<div className="payments_table_pages">
					<p>Showing 1 to 10 of 500 entries</p>

					<div>
						<button>Previous</button>
						<button>1</button>
						<button>2</button>
						<button>Next</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
