interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<div className="flex items-center gap-4">
			<div className="bg-secondary2 w-5 h-10 rounded"></div>
			<h4 className="text-secondary2 font-semibold font-poppins">
				{title}
			</h4>
		</div>
	);
};

export default Header;
