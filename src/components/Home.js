import React from 'react';
const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
        <img
          src='http://www.pngmart.com/files/7/Cart-Transparent-PNG.png'
          alt='srry'
        />
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img
            src='http://pngimg.com/uploads/iphone_12/iphone_12_PNG30.png'
            alt='srry'
          />
        </div>
        <div className='text-wrapper item'>
          <span>iPhone</span>
          <span>Price: $1000</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
