import { Container, Content, Row } from "./styles";
import Input from './components/Input'
import Button from './components/Button'
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation,setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '':prev}${num}`);
  };
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };
  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  };
  const handleMultiNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x')
    }else{
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('');
    }
  };
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  };
  const handleModNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%')
    }else{
      const mod = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(mod));
      setOperation('');
    }
  };
  const handleEquals = () => {
    if(firstNumber !== "0" && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case "x":
          handleMultiNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '%':
          handleModNumbers();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
            <Button label="X" onClick={handleMultiNumbers}/>
            <Button label="/" onClick={handleDivNumbers}/>
            <Button label="%" onClick={handleModNumbers}/>
            <Button label="C" onClick={handleOnClear}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleSubNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
