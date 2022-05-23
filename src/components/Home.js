import React,{useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyList,addCurrency } from '../actions/generalAction'

export default function Home() {
    const dispatch = useDispatch()
    const { basket } = useSelector((state) => state.cart);
    const Currency =useSelector(state=>state.currency)
    const {loading,error,currency}=Currency

    useEffect(()=>{
        dispatch(getCurrencyList())
     console.log(basket.length,'ok' )
    // if(basket.length > 22){
    //   console.log('heloo')
    // }
       
    },[basket])
    const addToCartHandler=(id,slug,symbol,price,percentage)=>{
        console.log(id,slug,symbol,price,percentage)
        const item={
            id,
            slug,
            symbol,
            price,
            percentage,
        }
        dispatch(addCurrency(item))
    }
    return (
        <div>
           <Container className='homcur'>
              <Row>
                 <Col>
                 {basket.length > 0 ? basket.map((itm)=>(
                           <>
                           <Row key={itm.id}>
                              <Col md={2}>
                                 <img src='/assets/img/logo.png'/>
                               </Col>
                               <Col md={6}>
                                 <h1 >{itm.slug}</h1>
                                 <h2 >{itm.symbol}</h2>
                               </Col>
                             
                               <Col md={4}>
                                   <Row style={{float:"right"}}>
                                      <h4 >${itm.price}</h4>
                                    </Row>  
                                  <Row style={{float:"right"}}>  
                                 <h4 >{itm.percentage.toFixed(2)}%</h4>
                                 </Row>
                               </Col>
                               
                               <hr/>
                           </Row>
                           </>
                       )):(
                        <h1>no items</h1>
                       )}
                 </Col>
       
                  {loading ? (<h1>loading....</h1>):
                  error? (<h1>something error</h1>):
                  (
                    <Col style={{marginLeft:"50px"}}>
                       {currency.map((itm)=>(
                           <>
                           <Row key={itm.id}>
                               <Col>
                                 <h1 >{itm.slug}</h1>
                                 <h2 >{itm.symbol}</h2>
                               </Col>
                               <Col>
                                 {/* <h1>{itm.symbol}</h1> */}
                               </Col>
                               <Col>
                                 <h3 onClick={() => addToCartHandler(itm.id, itm.slug,itm.symbol, itm.metrics.market_data.price_usd, itm.metrics.market_data.percent_change_usd_last_24_hours)}>+</h3>
                               </Col>
                               
                               <hr/>
                           </Row>
                           </>
                       ))}
                      
                    </Col>
                  )}
                 
              </Row>   
           </Container>
        </div>
    )
}
