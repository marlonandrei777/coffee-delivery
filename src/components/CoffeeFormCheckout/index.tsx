
import { useFormContext } from "react-hook-form";
import { FormContainer, InputWrapper, InputWrapperText } from "./styled";

export function CoffeFormCheckout() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <input
        type="number"
        placeholder="CEP"
        required
        {...register('cep', { valueAsNumber: true })}

      />
      <input
        type="text"
        placeholder="Rua"
        required
        {...register('street')}
      />

      <div>
        <input
          type="number"
          placeholder="Número"
          required
          {...register('number', { valueAsNumber: true })}
        />

        <InputWrapper data-required="Opcional">
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputWrapper>
      </div>

      <InputWrapperText>
        <input
          type="text"
          placeholder="Bairro"
          required
          {...register('district')}
        />
        <input
          type="text"
          placeholder="Cidade"
          required
          {...register('city')}
        />
        <input
          type="text"
          placeholder="UF"
          required
          {...register('uf')}
        />
      </InputWrapperText>
    </FormContainer>
  );
}