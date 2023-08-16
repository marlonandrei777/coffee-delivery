import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, DescriptionContainer, FormContainer, FormContainerCard, MethodPaymentContainer, PayDetailContainer } from "./styles";

export function Checkout() {
  return (
    <>
      <Header />

      <CheckoutContainer>
        <FormContainer>
          <h3>Complete o seu pedido</h3>

          <FormContainerCard>
            <MapPinLine size={22} color="#C47F17" />

            <DescriptionContainer>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </DescriptionContainer>

            <form action="">
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </FormContainerCard>

          <PayDetailContainer>
            <CurrencyDollar size={22} color="#8047F8" />

            <DescriptionContainer>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </DescriptionContainer>

            <MethodPaymentContainer>
              <div>
                <CreditCard size={16} color="#8047F8" />
                <span>Cartão de crédito</span>
              </div>
              <div>
                <Bank size={16} color="#8047F8" />
                <span>cartão de débito</span>
              </div>
              <div>
                <Money size={16} color="#8047F8" />
                <span>dinheiro</span>
              </div>
            </MethodPaymentContainer>
          </PayDetailContainer>
        </FormContainer>

        {/* <CafesSelecionados> */}
      </CheckoutContainer>
    </>
  );
}