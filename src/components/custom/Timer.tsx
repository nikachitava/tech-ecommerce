import { useEffect, useState } from "react";

interface CountdownProps {
	targetDate: Date;
}

const Timer: React.FC<CountdownProps> = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const now = new Date().getTime();
		const difference = targetDate.getTime() - now;

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className="flex items-center gap-4">
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Days
				</span>
				<h1 className="text-3xl text-text2 font-bold">
					{timeLeft.days}
				</h1>
			</div>
			<p className="animate-pulse font-bold text-3xl text-secondary2 font-roboto">
				:
			</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Hours
				</span>
				<h1 className="text-3xl text-text2 font-bold">
					{timeLeft.hours}
				</h1>
			</div>
			<p className="animate-pulse font-bold text-3xl text-secondary2 font-roboto">
				:
			</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Minutes
				</span>
				<h1 className="text-3xl text-text2 font-bold">
					{timeLeft.minutes}
				</h1>
			</div>
			<p className="animate-pulse font-bold text-3xl text-secondary2 font-roboto">
				:
			</p>
			<div>
				<span className="text-sm font-poppins text-text2 font-medium">
					Seconds
				</span>
				<h1 className="text-3xl text-text2 font-bold">
					{timeLeft.seconds}
				</h1>
			</div>
		</div>
	);
};

export default Timer;
