import Wrapper from './components/Wrapper.js';
import Screen from './components/Screen.js';
import ButtonBox from './components/ButtonBox.js';
import Button from './components/Button.js';
import CalcProvider from './context/CalcContext.js';

const btnValues = [
  ["AC", "+/-", "%", "÷"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];


function App() {
 
  return (
    <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, index) => (
              <Button 
                value = {btn}
                key = {index}
               />
            ))}
          </ButtonBox>
        </Wrapper>
    </CalcProvider>
  );
}

export default App;
