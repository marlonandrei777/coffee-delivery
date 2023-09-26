import { useCart } from "../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "../ConfirmationSection";
import {
  CoffeeSelectCard,
  CoffeeSelectContainer,
} from "./styles";

export function CoffeeSelect() {
  const { cartItem } = useCart();

  return (
    <CoffeeSelectContainer>
      <h3>Cafés selecionados</h3>

      <CoffeeSelectCard>
        {cartItem.map(item => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </CoffeeSelectCard>
    </CoffeeSelectContainer>
  );
}