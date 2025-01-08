const Dashboard = () => {
	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
					>
						<h2 className="text-lg font-semibold text-gray-800">
							Card {i}
						</h2>
						<p className="mt-2 text-gray-600">
							This is a sample card in the dashboard layout.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
