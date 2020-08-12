import React from "react";
import "../assets/styles/dashboard.scss";
import SmallChart from "../assets/icons/small-chart.svg";

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
								<div></div>
							</div>
						</div>
						<div className="data_chart"></div>
					</div>

					<div className="main_summary_right">
						<div className="main_summary_card">
							<h4>Orders</h4>

							<hr />
							<hr />
							<p>Pending Orders:</p>
							<p>Reconciled Orders:</p>
							<p>Total Orders:</p>
						</div>

						<div className="main_summary_card">
							<h4>Payments</h4>

							<hr />
							<hr />
							<p>Un-reconciled Payments:</p>
							<p>Reconciled Payments:</p>
							<p>Total Payments:</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
