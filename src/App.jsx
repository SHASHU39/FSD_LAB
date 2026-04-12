import { useState } from 'react';
import './App.css';

function App() {
  const [currentOperand, setCurrentOperand] = useState('0');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState('');

  const clear = () => {
    setCurrentOperand('0');
    setPreviousOperand('');
    setOperation('');
  };

  const deleteNumber = () => {
    if (currentOperand === '0') return;
    if (currentOperand.length === 1) {
      setCurrentOperand('0');
      return;
    }
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
      setCurrentOperand(number);
      return;
    }
    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === '0' && previousOperand === '') return;
    if (previousOperand !== '') {
      let result = compute();
      setPreviousOperand(result);
      setOperation(op);
      setCurrentOperand('0');
      return;
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('0');
  };

  const compute = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return '';
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '÷':
        if (current === 0) return 'Error';
        result = prev / current;
        break;
      default:
        return;
    }
    // Handle floating point precision issues
    return result.toString().length > 10 ? parseFloat(result.toPrecision(10)).toString() : result.toString();
  };

  const evaluate = () => {
    if (operation === '' || previousOperand === '') return;
    const result = compute();
    if (result === 'Error') {
      setCurrentOperand('Error');
    } else {
      setCurrentOperand(result);
    }
    setPreviousOperand('');
    setOperation('');
  };

  const formatOperand = (operand) => {
    if (operand === 'Error') return operand;
    const stringNumber = operand.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
      }).format(integerDigits);
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="previous-operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <div className="keypad">
          <button className="btn btn-clear span-two" onClick={clear}>AC</button>
          <button className="btn btn-operator" onClick={deleteNumber}>DEL</button>
          <button className="btn btn-operator" onClick={() => chooseOperation('÷')}>÷</button>
          
          <button className="btn" onClick={() => appendNumber('7')}>7</button>
          <button className="btn" onClick={() => appendNumber('8')}>8</button>
          <button className="btn" onClick={() => appendNumber('9')}>9</button>
          <button className="btn btn-operator" onClick={() => chooseOperation('*')}>×</button>
          
          <button className="btn" onClick={() => appendNumber('4')}>4</button>
          <button className="btn" onClick={() => appendNumber('5')}>5</button>
          <button className="btn" onClick={() => appendNumber('6')}>6</button>
          <button className="btn btn-operator" onClick={() => chooseOperation('-')}>−</button>
          
          <button className="btn" onClick={() => appendNumber('1')}>1</button>
          <button className="btn" onClick={() => appendNumber('2')}>2</button>
          <button className="btn" onClick={() => appendNumber('3')}>3</button>
          <button className="btn btn-operator" onClick={() => chooseOperation('+')}>+</button>
          
          <button className="btn span-two" onClick={() => appendNumber('0')}>0</button>
          <button className="btn" onClick={() => appendNumber('.')}>.</button>
          <button className="btn btn-equals" onClick={evaluate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
