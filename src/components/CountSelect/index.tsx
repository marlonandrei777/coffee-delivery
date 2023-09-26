import { Minus, Plus } from "phosphor-react";
import { CountCoffee } from "./styles";

type CountSelectProps = {
  quantity: number,
  onIncrease: () => void;
  onDecrease: () => void;
}

export function CountSelect({ quantity, onIncrease, onDecrease, }: CountSelectProps) {

  return (
    <CountCoffee>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={12} color="#06020f" weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={12} color="#8047F8" weight="bold" />
      </button>
    </CountCoffee>
  );
}
