export default function Leaderboard({ title, list }: { title: string; list: ILeaderboardList }) {
	return (
		<div className="max-w-4xl mx-auto mb-6 p-3 bg-white rounded-xl">
			<h2 className="font-semibold mb-4">{title}</h2>
			<div className="space-y-4">
				{list.map((element) => (
					<div
						key={element.id}
						className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
					>
						{/* Left Side: Avatar and Element Info */}
						<div className="flex items-center space-x-4">
							<img
								className="w-12 h-12 rounded-full"
								src={element.avatar}
								alt={`${element.name}'s Avatar`}
							/>
							<div>
								<p className="text-xl font-semibold">{element.name}</p>
								<p className="text-gray-500">Bonjour</p>
							</div>
						</div>

						{/* Right Side: Follow Button */}
						<span className="rounded-full items-center bg-sky-500 px-1.5 py-0.5 border border-transparent text-sm text-white transition-all shadow-sm">
							Follow
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
