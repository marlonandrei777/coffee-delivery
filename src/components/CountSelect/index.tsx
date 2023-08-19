import { Minus, Plus } from "phosphor-react";
import { CountCoffee } from "./styles";

export function CountSelect() {
  return (
    <CountCoffee>
      <button>
        <Minus size={12} color="#8047F8" weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={12} color="#8047F8" weight="bold" />
      </button>
    </CountCoffee>
  );
}