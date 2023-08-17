import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, DescriptionContainer, FormContainer, FormContainerCard, InputWrapper, InputWrapperText, PayDetailContainerCard, TransactionType, TransactionTypeButton } from "./styles";

export function Checkout() {
  return (
    <>
      <Header />

      <CheckoutContainer>
        <FormContainer>
          <h3>Complete o seu pedido</h3>

          <FormContainerCard>
            <DescriptionContainer>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </DescriptionContainer>

            <form action="">
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />

              <div>
                <input type="number" placeholder="Número" />

                <InputWrapper data-required="Opcional">
                  <input type="text" placeholder="Complemento" />
                </InputWrapper>
              </div>

              <InputWrapperText>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </InputWrapperText>
            </form>
          </FormContainerCard>

          <PayDetailContainerCard>
            <DescriptionContainer>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </DescriptionContainer>

            <TransactionType>
              <TransactionTypeButton value="Cartão de Crédito">
                <CreditCard size={16} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </TransactionTypeButton>

              <TransactionTypeButton value="Cartão de Débito">
                <Bank size={16} color="#8047F8" />
                CARTÃO DE DÉBITO
              </TransactionTypeButton>

              <TransactionTypeButton value="Dinheiro">
                <Money size={16} color="#8047F8" />
                DINNHEIRO
              </TransactionTypeButton>
            </TransactionType>
          </PayDetailContainerCard>
        </FormContainer>

        {/* <CafesSelecionados> */}
      </CheckoutContainer>
    </>
  );
}