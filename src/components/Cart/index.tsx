/* import { NavLink } from 'react-router-dom' */
import { useCart } from "../../hooks/useCart";
import { StyledLink } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function Cart() {
  const { cartQuantity } = useCart();

  return (
    <StyledLink to="checkout" title='Checkout'>
      <div>
        <span>{cartQuantity}</span>
      </div>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
    </StyledLink>
  );
}