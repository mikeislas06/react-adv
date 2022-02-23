import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button onClick={reset}>Reset</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <div>
              {count} - {maxCount}
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
