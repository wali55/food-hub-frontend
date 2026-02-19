import { Card } from "@/components/ui/card";
import { CartMeal, decrement, increment, removeCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/hooks";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

const CartItem = ({ mealItem }: { mealItem: CartMeal }) => {
  const dispatch = useAppDispatch();
  const { meal, quantity, mealPrice } = mealItem;
  const { title } = meal;

  const handleAdd = () => {
    dispatch(increment({ mealId: mealItem.mealId }));
  };

  const handleSubtract = () => {
    dispatch(decrement({ mealId: mealItem.mealId }));
  };

  const handleRemove = () => {
    dispatch(removeCart({ mealId: mealItem.mealId }));
  };

  return (
    <Card className="text-[#FF5322] p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button className="cursor-pointer" onClick={handleRemove}>
          <Trash2 />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button
            disabled={quantity <= 1}
            className="cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={handleSubtract}
          >
            <CircleMinus />
          </button>
          <p className="text-lg font-semibold">{quantity}</p>
          <button
            className="cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={handleAdd}
          >
            <CirclePlus />
          </button>
        </div>
        <p className="text-lg font-semibold">৳{mealPrice}</p>
      </div>
    </Card>
  );
};

export default CartItem;
