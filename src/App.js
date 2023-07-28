import { styled } from "styled-components";
import { MainLayout } from "./styles/layouts";
import Navigation from "./components/Navigation";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expenses from "./components/Expenses";

function App() {
  const [active, setActive] = useState(1)
 const displayData = () =>{
  switch (active) {
    case 1:
      return <Dashboard/>
    case 2:
      return <Dashboard/>
    case 3:
        return <Income/>
    case 4:
        return <Expenses/>
    default:
      <Dashboard/>
  }
 }
  return (
    <AppStyled className="App">
       <MainLayout>
          <Navigation active={active} setActive={setActive}/>
          <main>
            {displayData()}
          </main>
        </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-color: #f9eff1;
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  border-radius:32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width:0;
  }
}

`

export default App;
