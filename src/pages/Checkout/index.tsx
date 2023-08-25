import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, DescriptionContainer, FormContainer, FormContainerCard, InputWrapper, InputWrapperText, PayDetailContainerCard, TransactionType, TransactionTypeButton } from "./styles";
import { CoffeeSelect } from "../../components/CoffeeSelect";

export function Checkout() {
  return (
    <>
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
                <span>CARTÃO DE CRÉDITO</span>
              </TransactionTypeButton>

              <TransactionTypeButton value="Cartão de Débito">
                <Bank size={16} color="#8047F8" />
                <span>CARTÃO DE DÉBITO</span>
              </TransactionTypeButton>

              <TransactionTypeButton value="Cartão de Débito">
                <Money size={16} color="#8047F8" />
                <span>DINHEIRO</span>
              </TransactionTypeButton>
            </TransactionType>
          </PayDetailContainerCard>
        </FormContainer>

        <CoffeeSelect />
      </CheckoutContainer>
    </>
  );
}