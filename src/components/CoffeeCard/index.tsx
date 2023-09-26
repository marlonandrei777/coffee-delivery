import { useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";
import { CountSelect } from "../../components/CountSelect";
import { BuyDetail, CartButton, CoffeeCardContainer, CoffeeInfoContainer, FooterPrice, SmallSpanContainer } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Coffee } from "../../context/CartContext";
import { formatMoney } from "../../utils/formatMoney";

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart();

  const formattedPrice = formatMoney(coffee.price);

  function handleIncreaseQuantity() {
    setQuantity(state => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity(state => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }

    // pegar do contexto
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <CoffeeInfoContainer>
        <img src={coffee.image} alt="Café em uma chicara" />
        <span>{coffee.tag}</span>
        <strong>{coffee.title}</strong>
        <p>{coffee.description}</p>
      </CoffeeInfoContainer>

      <FooterPrice>
        <SmallSpanContainer>
          <small>R$</small>
          <span>{formattedPrice}</span>
        </SmallSpanContainer>

        <BuyDetail>
          <CountSelect
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            quantity={quantity}
          />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
          </CartButton>
        </BuyDetail>
      </FooterPrice>
    </CoffeeCardContainer>
  );
}