import { faker } from '@faker-js/faker';
import { useContext, useState } from 'react';
import { CartPage } from '../Context';
import SingleProduct from './SingleProduct';

faker.seed(50);
function Home(){
  
    const productsArray = [...Array(20)].map(() => ({
        userId: faker.string.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.image.urlPicsumPhotos(),
    }));

    console.log(productsArray)
   

    const [products] = useState(productsArray)
    return<> 
       <div className='productContainer'>
          {
            products.map((prod) => (
                <SingleProduct prod={prod} key={prod.userId}/>
            ))
          }
       </div>
    </>
  }
  
  export default Home;