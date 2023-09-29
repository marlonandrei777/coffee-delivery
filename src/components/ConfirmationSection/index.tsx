import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";
import { Button, ValuesWrapper } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE);
  const formattedCartTotal = formatMoney(cartTotal);

  return (
    <>
      <ValuesWrapper>
        <div>
          <p>Total de itens</p>
          <span>R$ {formattedItemsTotal}</span>
        </div>

        <div>
          <p>Entrega</p>
          <span>R$ {formatDeliveryPrice}</span>
        </div>

        <div>
          <p>Total</p>
          <span>R$ {formattedCartTotal}</span>
        </div>
      </ValuesWrapper>

      <Button title="Sucesso" disabled={cartQuantity <= 0} type="submit">
        CONFIRMAR PEDIDO
      </Button>
    </>
  );
}