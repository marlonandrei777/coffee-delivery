import { useFormContext } from "react-hook-form";
import { FormContainer, InputWrapper, InputWrapperText } from "./styled";
import { Input } from "../Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function CoffeFormCheckout() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  console.log(errors);

  return (
    <FormContainer>
      <Input
        type="number"
        placeholder="CEP"
        {...register('cep')}
        error={errors.cep?.message}
      />

      <Input
        type="text"
        placeholder="Rua"
        {...register('street')}
        error={errors.street?.message}
      />

      <div>
        <Input
          type="number"
          placeholder="Número"
          {...register('number')}
          error={errors.number?.message}
        />

        <InputWrapper data-required="Opcional">
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            error={errors.complement?.message}
          />
        </InputWrapper>
      </div>

      <InputWrapperText>
        <Input
          type="text"
          placeholder="Bairro"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          type="text"
          placeholder="Cidade"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          type="text"
          placeholder="UF"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </InputWrapperText>
    </FormContainer>
  );
}