import { FormProvider, useForm } from "react-hook-form";
import * as z from 'zod'
import { CoffeeSelect } from "../../components/CoffeeSelect";
import { CoffeFormCheckout } from "../../components/CoffeeFormCheckout";
import { TransactionType } from "../../components/TransactionType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../../hooks/useCart";
import {
  CheckoutContainer,
  DescriptionContainer,
  FormContainer,
  FormContainerCard,
  PayDetailContainerCard,
} from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CartEnpty } from "../../components/CartEnpty";
import { useNavigate } from "react-router-dom";

const coffeeFormSchema = z.object({
  cep: z.number(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentType: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'])
})

export type coffeeFormInputs = z.infer<typeof coffeeFormSchema>

export function Checkout() {
  const { cartItem, cleanCart } = useCart()

  const coffeForm = useForm<coffeeFormInputs>({
    resolver: zodResolver(coffeeFormSchema)
  });

  const { handleSubmit } = coffeForm;

  const navigate = useNavigate();

  function handleSubmitCoffeForm(data: coffeeFormInputs) {
    /* passando os dados do form pela rota */
    navigate("/checkout/success", {
      state: data
    })

    cleanCart()
  }

  return (
    <FormProvider {...coffeForm}>
      {!cartItem.length ?
        <CartEnpty />
        :
        <CheckoutContainer onSubmit={handleSubmit(handleSubmitCoffeForm)}>
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

              <CoffeFormCheckout />
            </FormContainerCard>

            <PayDetailContainerCard>
              <DescriptionContainer>
                <CurrencyDollar size={22} color="#8047F8" />
                <div>
                  <span>Pagamento</span>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </DescriptionContainer>

              <TransactionType />
            </PayDetailContainerCard>
          </FormContainer>

          <CoffeeSelect />
        </CheckoutContainer>
      }
    </FormProvider>
  );
}