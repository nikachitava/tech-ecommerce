import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceFilterProps {
	min: number;
	max: number;
	onChange: (value: number, type: "min" | "max") => void;
}

const PriceFilter = ({ min, max, onChange }: PriceFilterProps) => {
	return (
		<div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
			<h3 className="mb-4 text-lg font-medium bg-gradient-to-r from-filter-primary to-filter-secondary bg-clip-text text-text1">
				Price Range
			</h3>
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="min-price" className="text-gray-700">
						Min Price ($)
					</Label>
					<Input
						id="min-price"
						type="number"
						min="0"
						value={min}
						onChange={(e) =>
							onChange(Number(e.target.value), "min")
						}
						className="w-full text-gray-700"
						placeholder="Min price"
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="max-price" className="text-gray-700">
						Max Price ($)
					</Label>
					<Input
						id="max-price"
						type="number"
						min="0"
						value={max}
						onChange={(e) =>
							onChange(Number(e.target.value), "max")
						}
						className="w-full text-gray-700"
						placeholder="Max price"
					/>
				</div>
			</div>
		</div>
	);
};

export default PriceFilter;
