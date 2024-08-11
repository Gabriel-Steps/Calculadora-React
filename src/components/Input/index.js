import { InputContainer } from "./styles";

const Input = ({value}) => {
  return (
    <div>
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    </div>
  )
}

export default Input;