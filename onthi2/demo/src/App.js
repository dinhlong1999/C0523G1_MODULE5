import './App.css';
import Children from "./Children";
import Product from "./component/product";


function App() {
  //  const handleDataFromChildren = (data) => {
  //   console.log("Xin chào: ",data);
  // }

  return (
      <div>
        {/*<Children sendData={handleDataFromChildren}/>*/}
          <Product/>
      </div>

  );
}

export default App;
