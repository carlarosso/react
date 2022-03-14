
function App() {
    return (
    
    <div className = "App" >
        <header className = "App-header" >
            <NavBar />
        </header>

        <body className='bodyApp'>
            <ItemListContainer />

           {/*  <Items titleCard="El Argento" cardImg={process.env.PUBLIC_URL + "/el-argento.jpg"} />

            <Items titleCard="Marie Antoinette" cardImg={process.env.PUBLIC_URL + "/marie-antoinette.jpg"} />

            <Items titleCard="Willy Wonka" cardImg={process.env.PUBLIC_URL + "/willy-wonka.jpg"} />
             */}
        </body>

        
        
    </div>
         
         )
};

export default App;



//ITEMS.JS


  
//API DE pokemon
  /*     import React from 'react';
      import { useState, useEffect } from 'react';
      
      const UseApi = () => {
        const [items, setItems] = useState([{}]);
        const [bool, setBoolean] = useState(true);
      
        useEffect(() => {
          const url='https://pokeapi.co/api/v2/pokemon-species'
          fetch(url)
            .then((response) => response.json())
            .then((json) => setItems(() => json.results))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false));
        }, []);
      
        if (bool) {
          return (
            <div>
              <h1>"Loading ..."</h1>
            </div>
          );
        } else {
          console.log(items)
          return (
            <div className="flex-container-card py-10">
              <div className="flex-container-card">
               {items.map(item =>{
                  return(
                    <li key={item.name}>
                      {item.name} ,
                      {item.url}
                    </li>
                  )
                })}
              </div>
            </div>
          );
        }
      };
      
      export default UseApi;
      



  
})

 */


  

/*   return (
    <>
      
      <CardGroup className="cardGroup">

        <Card className="singleCard">

          <Card.Img src={cardImg} className="imgCard" />


          <Card.Body className="cardBody">
            
            <Card.Title className="cardTitle"> {titleCard} </Card.Title>

          </Card.Body>


          <Card.Footer className="cardFooter">

            <ItemCount stock="10" initial="1" onAdd="Su cantidad seleccionada es" />

          </Card.Footer>

        </Card>

      </CardGroup>

    </>
  ); */
//}

//export default Items;


