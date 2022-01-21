import Item from "./components/Item/index"
import ItemChildren from "./components/Item/index"
import Card from "./components/Card"

const App = () => {
  return(
    //Devemos colocar dentro de uma div ou um react fragment <> e </>
    //Pois não é permitido trabalhar com componentes no mesmo nivel
    <>
      <h1>Aplicação com React</h1>
      <p>Test do React Fragment</p>
      <ul>
        <Item texto="Item 1"/>
        <Item texto="Item 2"/>
        <Item texto="Item 3"/>
        <ItemChildren>
          Item 4
        </ItemChildren>
      </ul>
      <Card/>
    </>
  )
}

export default App;