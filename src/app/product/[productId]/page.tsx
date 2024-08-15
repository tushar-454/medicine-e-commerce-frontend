'use client';
import { fetchProductById } from '@/api/product';
import RelatedProductCard from '@/components/product/RelatedProductCard';
import Container from '@/components/shared/Container';
import { AppDispatch, RootState } from '@/store/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

const ProductPage = () => {
  const { productId } = useParams();
  const { product, isLoading, isError } = useSelector(
    (state: RootState) => state.product,
  );
  const [selectedVarient, setSelectedVarient] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  // update quantity on blur
  const updateQuantityOnBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    cartId: string,
  ) => {
    console.log(e.target.value, cartId);
  };

  // cart quantity update handler
  const cartQuantityUpdateHandler = (
    cartId: string,
    type: string,
    quantity: number,
  ) => {
    console.log(cartId, type, quantity);
  };
  const cart = {
    _id: '1',
    quantity: 1,
  };
  useEffect(() => {
    if (productId) dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        <section>
          <Container>
            <div className='flex flex-col gap-10 p-2 md:flex-row'>
              <div className='w-full md:w-1/2'>
                <Image
                  src={product?.product?.photo}
                  alt={product?.product?.name}
                  width={500}
                  height={500}
                  className='w-full rounded-lg'
                />
              </div>
              <div className='w-full space-y-4 md:w-1/2'>
                <p className='text-2xl font-bold'>{product?.product?.name}</p>
                <p className='text-lg'>{product?.product?.description}</p>
                <p className='text-lg'>
                  <b>Category:</b> {product?.product?.category}
                </p>
                <p className='text-lg'>
                  <b>Quantity:</b> {product?.product?.quantity} left in stock
                </p>
                <p className='text-lg text-red-600'>
                  🔥{' '}
                  <span className='line-through'>
                    {product?.product?.discount}% OFF
                  </span>
                </p>
                <div className='flex-grow'>
                  <p className='text-lg font-bold'>Varients</p>
                  {product?.product?.variants?.map((variant, idx) => (
                    <div
                      key={variant._id}
                      onClick={() => setSelectedVarient(idx)}
                      className={`flex cursor-pointer gap-5 border-b-2 p-2 text-lg active:bg-surfie-green-200 ${selectedVarient === idx ? 'bg-surfie-green-200' : 'bg-white text-black'}`}
                    >
                      <span>{variant.dose}</span>
                      <span>{variant.package_size}</span>
                      <span className='flex items-center'>
                        <TbCurrencyTaka className='text-xl' />
                        {variant.price}
                      </span>
                    </div>
                  ))}
                </div>
                {/* quantity */}
                <div className='mt-5 flex items-center gap-5'>
                  <span className='flex w-28 items-center justify-between gap-1 rounded-lg border-2 border-surfie-green-500 p-2'>
                    <span>
                      <MdKeyboardArrowDown
                        onClick={() =>
                          cartQuantityUpdateHandler(
                            cart._id,
                            '-',
                            cart.quantity - 1,
                          )
                        }
                        className='cursor-pointer'
                      />
                    </span>
                    <span>
                      <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        value={quantity || cart.quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        onBlur={(e) => updateQuantityOnBlur(e, cart._id)}
                        className='w-6 text-lg font-bold'
                      />
                    </span>
                    <span>
                      <MdKeyboardArrowDown
                        onClick={() =>
                          cartQuantityUpdateHandler(
                            cart._id,
                            '+',
                            cart.quantity + 1,
                          )
                        }
                        className='rotate-180 cursor-pointer'
                      />
                    </span>
                  </span>
                  <button className='atc-button'>Add to cart</button>
                </div>
              </div>
            </div>
            <div className='my-10'>
              <h2 className='text-xl font-medium'>Related Products</h2>
              <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {product?.relatedProduct?.map((relatedProduct) => (
                  <RelatedProductCard
                    key={relatedProduct._id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
