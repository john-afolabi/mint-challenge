import React from "react";
import Search from "../../assets/icons/search.svg";
import Bell from "../../assets/icons/bell.svg";

// -----------------------------------------------
// From Endpoint
// -----------------------------------------------
const notification_count = 8;
const img_url =
	"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png";

const TopNav = () => {
	return (
		<header>
			<div className="logo">TransMonitor</div>

			<div className="nav_search">
				<img src={Search} alt="search" />
				<input name="search" type="text" placeholder="Search..." />
			</div>
			<nav className="top_nav">
				<ul>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
					<li>
						<div className="notification">
							<img src={Bell} alt="notification" />
							<span>{notification_count}</span>
						</div>
					</li>
					<li className="user">
						<p>
							<span>Hello</span> <br />
							Oluwaleke Ojo
						</p>
						<img src={img_url} alt="profile_picture" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
