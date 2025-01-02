const Timer = () => {
	return (
		<div className="flex items-center gap-4">
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Days
				</span>
				<h1 className="text-3xl text-text2 font-bold">03</h1>
			</div>
			<p className="font-bold text-3xl text-secondary2 font-roboto">:</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Hours
				</span>
				<h1 className="text-3xl text-text2 font-bold">23</h1>
			</div>
			<p className="font-bold text-3xl text-secondary2 font-roboto">:</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Minutes
				</span>
				<h1 className="text-3xl text-text2 font-bold">19</h1>
			</div>
			<p className="font-bold text-3xl text-secondary2 font-roboto">:</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Seconds
				</span>
				<h1 className="text-3xl text-text2 font-bold">43</h1>
			</div>
		</div>
	);
};

export default Timer;
