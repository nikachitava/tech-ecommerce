import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
	min: number;
	max: number;
	value: [number, number];
	onChange: (value: [number, number]) => void;
}

const PriceFilter = ({ min, max, value, onChange }: PriceFilterProps) => {
	return (
		<div className="space-y-6">
			<h3 className="text-lg font-medium bg-gradient-to-r from-filter-primary to-filter-secondary bg-clip-text text-text1">
				Price Range
			</h3>
			<Slider
				defaultValue={value}
				max={max}
				min={min}
				step={1}
				onValueChange={(vals) => onChange(vals as [number, number])}
				className="w-full"
			/>
			<div className="flex justify-between items-center gap-4">
				<div className="px-4 py-2 bg-gradient-to-r from-filter-primary/5 to-filter-secondary/5 rounded-lg backdrop-blur-sm flex-1">
					<span className="text-sm text-filter-primary/70">$</span>
					<span className="text-sm font-medium text-filter-text ml-1">
						{value[0]}
					</span>
				</div>
				<div className="border-b-2 border-filter-primary/20 w-4" />
				<div className="px-4 py-2 bg-gradient-to-r from-filter-primary/5 to-filter-secondary/5 rounded-lg backdrop-blur-sm flex-1">
					<span className="text-sm text-filter-primary/70">$</span>
					<span className="text-sm font-medium text-filter-text ml-1">
						{value[1]}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PriceFilter;
