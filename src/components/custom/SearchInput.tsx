const SearchInput = () => {
	return (
		<div className="relative rounded bg-secondary py-2 px-3">
			<input
				placeholder="What are you looking for?"
				className="font-poppins border-none outline-none bg-transparent w-full pr-10"
			/>
			<img
				src="/icons/search.svg"
				alt="search_icon"
				className="absolute top-1/2 right-3 transform -translate-y-1/2"
			/>
		</div>
	);
};

export default SearchInput;
