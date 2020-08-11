import React from "react";

const SideNav = () => {
	return (
		<div className="side_bar">
			<button>Generate Invoice</button>

			<nav className="side_nav">
				<ul>
					<p>Main</p>
					<li>Overview</li>
				</ul>

				<ul>
					<p>Payments</p>
					<li>All Payments</li>
					<li>Reconciled Payments</li>
					<li>Un - Reconciled Payments</li>
					<li>Manual Settlement</li>
				</ul>
				<ul>
					<p>Orders</p>
					<li>All Orders</li>
					<li>Pending Orders</li>
					<li>Reconciled Orders</li>
				</ul>
				<ul>
					<p>Merchant Profile</p>
				</ul>
			</nav>
		</div>
	);
};

export default SideNav;
