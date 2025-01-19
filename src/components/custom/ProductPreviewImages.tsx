interface IProductPreviewImages {
	images: string[];
	thumbnail: string;
}

const ProductPreviewImages: React.FC<IProductPreviewImages> = ({
	images,
	thumbnail,
}) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row max-w-[710px]">
			{images.length > 0 && (
				<div className="flex flex-row  lg:flex-col flex-3 lg:space-y-6">
					{images.map((image, index) => (
						<div key={index} className={`bg-secondary py-3 px-6`}>
							<img
								src={image}
								alt={image}
								loading="lazy"
								className="size-32"
							/>
						</div>
					))}
				</div>
			)}

			<div
				className={`bg-secondary flex-1 flex items-center justify-center`}
			>
				<img src={thumbnail} alt={thumbnail} loading="lazy" />
			</div>
		</div>
	);
};

export default ProductPreviewImages;
