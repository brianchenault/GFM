import styled from 'styled-components';
import './App.css';
import Search from './Search/Index';

const Title = styled.h1`
  color: #000;
`;

function App() {
  return (
    <div className="App">
      <Title>Search GoFundMe</Title>
      <Search />
    </div>
  );
}

export default App;
