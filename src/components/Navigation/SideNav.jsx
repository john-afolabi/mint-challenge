import React from "react";
import "../../assets/styles/sidenav.scss";
import Overview from "../../assets/icons/overview.svg";
import Payments from "../../assets/icons/payments.svg";
import ReconciledPayments from "../../assets/icons/reconciled-payments.svg";
import UnReconciledPayments from "../../assets/icons/unreconciled-payments.svg";
import ManualSettlement from "../../assets/icons/manual-settlement.svg";
import AllOrders from "../../assets/icons/all-orders.svg";
import PendingOrders from "../../assets/icons/pending-orders.svg";
import ReconciledOrders from "../../assets/icons/reconciled-orders.svg";
import MerchantProfile from "../../assets/icons/merchant-profile.svg";

const SideNav = () => {
	return (
		<div className="side_bar">
			<button>Generate Invoice</button>

			<nav className="side_nav">
				<ul>
					<p>Main</p>
					<li>
						<img src={Overview} alt="overview" />
						Overview
					</li>
				</ul>
				<ul>
					<p>Payments</p>
					<li>
						<img src={Payments} alt="all payments" />
						All Payments
					</li>
					<li>
						<img
							src={ReconciledPayments}
							alt="reconciled payments"
						/>
						Reconciled Payments
					</li>
					<li>
						<img
							src={UnReconciledPayments}
							alt="unreconciled payments"
						/>
						Un - Reconciled Payments
					</li>
					<li>
						<img src={ManualSettlement} alt="manual settlement" />
						Manual Settlement
					</li>
				</ul>
				<ul>
					<p>Orders</p>
					<li>
						<img src={AllOrders} alt="all orders" />
						All Orders
					</li>
					<li>
						<img src={PendingOrders} alt="pending orders" />
						Pending Orders
					</li>
					<li>
						<img src={ReconciledOrders} alt="reconciled orders" />
						Reconciled Orders
					</li>
				</ul>
				<ul>
					<p>
						<img src={MerchantProfile} alt="merchant profile" />
						Merchant Profile
					</p>
				</ul>
			</nav>
		</div>
	);
};

export default SideNav;
