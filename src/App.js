import './App.css';

function App() {

//Exemplo1 com Set ES6
  const numeros1 = [1,1,2,3,4,6,6,5,7,8,9,0,9];
  let unique1 = [...new Set(numeros1)];


//Exemplo2 com filter ES5
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);


//Exemplo3 com pure es6
// const list = list.filter((x, i, a) => a.indexOf(x) == i)


  return (
    <div className="App">

<h2>{numeros1}</h2>
<h3>{unique1}</h3>
<h3>{unique}</h3>




    </div>
  );
}

export default App;
