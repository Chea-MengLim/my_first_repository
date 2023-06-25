function pgcd(a, b){
    while( a!= b){
      if(a>b) a -= b
      else b -= a
    }
    return a;
  }
  
  const display = (name) =>{
    return "My name is" + " " + name
  }
  let x = {
    id : "001",
    "name" : "MengLim", 
    "Sex" : "Male"
  }
  let mm = 1
  let num = 10
  let name = "jfkdjkf"
  function App(){
    name = "haha"
    return (
      <div>
        <h1> {display("txt")} {mm} </h1>
        <h3> pgcd of 12 and 18 is {pgcd(12, 18)} </h3>
        <h2> id is {x["name"]} </h2>
        <h3> {num + " "  + name} </h3>
      </div>
    )
  }
  export default App;
  

  