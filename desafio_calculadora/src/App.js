/* eslint-disable eqeqeq */
import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row, Column } from './styles'
import { useState, useEffect } from 'react'

const App = () => {
  const [ displayNumber, setDisplayNumber ] = useState('0')
  const [ auxNumber, setAuxNumber ] = useState('0') 
  const [ operator, setOperator ] = useState('')

  const handleAddNumber = (number) => {
    if(auxNumber == '0' && operator) {
      setAuxNumber(displayNumber)
      setDisplayNumber(number)
    }
    else {
      displayNumber == '0' ?
        setDisplayNumber(number)
      : setDisplayNumber(prev => `${prev}${number}`)
    }
  }

  const handleClear = () => {
    setDisplayNumber('0')
    setAuxNumber('0')
    setOperator('')
  }

  const handleSum = () => {
    setOperator('+')
    if(auxNumber == '0') {
      setAuxNumber(displayNumber)
      setDisplayNumber('0')
    }
    else {
      const sum = Number(auxNumber) + Number(displayNumber)
      setDisplayNumber(String(sum))
      setAuxNumber('0')
    }
  }

  const handleSubtraction = () => {
    setOperator('-')
    if(auxNumber == '0') {
      setAuxNumber(displayNumber)
      setDisplayNumber('0')
    }
    else {
      const sum = Number(auxNumber) - Number(displayNumber)
      setDisplayNumber(String(sum))
      setAuxNumber('0')
    }
  }

  const handleMultiplication = () => {
    setOperator('x')
    if(auxNumber == '0') {
      setAuxNumber(displayNumber)
      setDisplayNumber('0')
    }
    else {
      const sum = Number(auxNumber) * Number(displayNumber)
      setDisplayNumber(String(sum))
      setAuxNumber('0')
    }
  }

  const handleDivision = () => {
    setOperator('/')
    if(auxNumber == '0') {
      setAuxNumber(displayNumber)
      setDisplayNumber('0')
    }
    else {
      const sum = Number(auxNumber) / Number(displayNumber)
      setDisplayNumber(String(sum))
      setAuxNumber('0')
    }
  }

  const handleEquals = () => {
    const first = Number(auxNumber), second = Number(displayNumber)

    const operatorsMap = {
      '+': first + second,
      '-': first - second,
      'x': first * second,
      '/': first / second,
    };

    const result = String(operatorsMap[operator]) ?? 'ERROR';

    setDisplayNumber(result)
    setAuxNumber('0')
  }

  useEffect(() => {
    console.log("displayNumber operator auxNumber");
    console.log(`${displayNumber} ${operator} ${auxNumber}`);
    console.log('\n\n\n')

  }, [displayNumber, operator, auxNumber])

  return (
    <Container>
      <Content>
        <Column>
          <Input value={displayNumber}/>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />  
            <Button label="C" onClick={handleClear} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="/" onClick={handleDivision}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="x" onClick={handleMultiplication}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="+" onClick={handleSum} />
            <Button label="-" onClick={handleSubtraction}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Column>
      </Content>
    </Container>
  );
}

export default App;
