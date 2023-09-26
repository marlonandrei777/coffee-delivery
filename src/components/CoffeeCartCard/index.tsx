import { CountSelect } from "../CountSelect";
import { Coffee } from "../../context/CartContext";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";
import { Trash } from "phosphor-react";

import {
  CoffeeDetailContainer,
  CountAndButtonWarapper,
  CountAndRemoveContainer,
  InfoContainer,
  RemoveButton,
} from "./styles";

type CoffeeCartCardProps = {
  coffee: Coffee;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeDetailContainer>
      <InfoContainer>
        <img src={coffee.image} alt="" />

        <CountAndRemoveContainer>
          <span>{coffee.title}</span>

          <CountAndButtonWarapper>
            <CountSelect
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />

            <RemoveButton onClick={handleRemove}>
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </RemoveButton>
          </CountAndButtonWarapper>
        </CountAndRemoveContainer>
      </InfoContainer>
      <strong>R$ {formattedPrice}</strong>
    </CoffeeDetailContainer>
  );
}