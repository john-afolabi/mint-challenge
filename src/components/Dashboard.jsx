import React from "react";
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
			</section>
		</div>
	);
};

export default Dashboard;
