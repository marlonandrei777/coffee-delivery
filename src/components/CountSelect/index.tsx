import { Minus, Plus } from "phosphor-react";
import { CountCoffee } from "./styles";

type CountSelectProps = {
  handleCountAdd: () => void;
}

export function CountSelect({ handleCountAdd }: CountSelectProps) {
  return (
    <CountCoffee>
      <button>
        <Minus size={12} color="#8047F8" weight="bold" />
      </button>
      <span>1</span>
      <button onClick={handleCountAdd}>
        <Plus size={12} color="#8047F8" weight="bold" />
      </button>
    </CountCoffee>
  );
}