import { InputContainer } from './styles'

export default function Input({ value, onChange }) {
    return (
        <InputContainer value={value} onChange={onChange}>
            <input /> 
        </InputContainer>
    )
}