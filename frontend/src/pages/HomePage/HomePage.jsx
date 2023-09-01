import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect } from 'react'

import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';
import { 
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
  PageHeader,
  Product1,
  NewLetter,
  ProContainer,
  Pro,
} from './style'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  return (
    <>
      <PageHeader style={{backgroundImage: `url(${backgroundHeader})`}}>
          <h1>#add to cart</h1>
          <p>"Unlock Knowledge, Expand Your Mind - Buying Books is Investing in Your Intellect."</p>
      </PageHeader>
      <Loading isLoading={isLoading || loading}>
      <div style={{ margin: '50px 0 0 70px', }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%',}}>
        <div id="container" style={{ margin: '70px', }}>
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  id={product._id}
                />
              )
            })}
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Load more' : "Load more"} type="outline" styleButton={{
                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                width: '240px', height: '38px', borderRadius: '4px', marginTop: '50px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>
        </div>
      </div>
    </Loading>
    <NewLetter className="section_p1" style={{backgroundImage: `url(${backgroundFooter})`}}>
          <div className="newstext">
              <h4>Sign Up For Newsletters</h4>
              <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
          </div>
          <div className="form">
              <input type="text" placeholder="Your email address..."/>
              <button>Sign Up</button>
          </div>
    </NewLetter>
    </>
  )
}

export default HomePage 