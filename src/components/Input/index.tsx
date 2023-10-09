import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputContainer hasError={!!error}>
        <input
          ref={ref}
          {...props}
        />
        {error && <span>{error}</span>}
      </InputContainer>
    );
  }
)

