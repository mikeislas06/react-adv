import { createContext, ReactElement, CSSProperties } from 'react';

import useProduct from '../hooks/useProduct';

import {
  InitialValues,
  onChangeArgs,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/products.interfaces';

import styles from '../styles/styles.module.css';
import { Product } from '../interfaces/products.interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          maxCount,
          product,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
