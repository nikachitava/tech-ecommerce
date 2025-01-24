import { useCart } from "@/states/cartStore";
import remove_icon from "/icons/remove.svg";
import QuantityCounter from "@/components/custom/QuantityCounter";

interface ICartItem {
	id: string;
	image: string;
	title: string;
	price: number;
}

const CartItem: React.FC<ICartItem> = ({ id, image, title, price }) => {
	const { removeFromCart } = useCart((state) => state);

	const subtotal = price * 12;
	return (
		<div className="grid grid-cols-4 items-center">
			<div className="flex items-center gap-4 relative">
				<img
					src={remove_icon}
					alt={remove_icon}
					className="absolute top-[-10px] left-[-10px] cursor-pointer"
					onClick={() => removeFromCart(id)}
				/>
				<img src={image} alt={image} width={54} height={54} />
				<p className="font-poppins">{title}</p>
			</div>
			<div className="text-center font-poppins">$ {price}</div>
			<div className="flex items-center justify-center">
				<QuantityCounter />
			</div>
			<div className="text-right font-poppins">$ {subtotal}</div>
		</div>
	);
};

export default CartItem;
