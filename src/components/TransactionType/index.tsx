import { useFormContext, Controller } from "react-hook-form";
import { Bank, CreditCard, Money } from "phosphor-react";
import { TransactionTypeButton, TransactionTypeContainer } from "./styles";

export function TransactionType() {
  const { control, formState: { errors } } = useFormContext()

  const transactionTypeError = errors?.paymentType?.message as unknown as string

  return (
    <Controller
      control={control}
      name="paymentType"
      render={({ field }) => (
        <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>
          <TransactionTypeButton value="Cartão de Crédito">
            <CreditCard size={16} color="#8047F8" />
            <span>CARTÃO DE CRÉDITO</span>
          </TransactionTypeButton>

          <TransactionTypeButton value="Cartão de Débito">
            <Bank size={16} color="#8047F8" />
            <span>CARTÃO DE DÉBITO</span>
          </TransactionTypeButton>

          <TransactionTypeButton value="Dinheiro">
            <Money size={16} color="#8047F8" />
            <span>DINHEIRO</span>
          </TransactionTypeButton>

          {transactionTypeError && <span>{transactionTypeError}</span>}
        </TransactionTypeContainer>
      )}
    />
  );
}

