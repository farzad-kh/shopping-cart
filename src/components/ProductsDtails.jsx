
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { getData } from "../data/Api"
import { ProductsContext } from "../context/ProductContextProvider"
import ProductDtail from "./shared/ProductDtail"

const ProductsDtails = () => {
    const params = useParams()
    const idParams = params.id
const offerPercent=useContext(ProductsContext)

    const [productId, setProductId] = useState("")
    useEffect(() => {
        const getDataID = async () => {
            setProductId(await getData())
        }
        getDataID()
       
    }, [])

    const productDetails = productId[idParams - 1]
const a=offerPercent[idParams - 1]


console.log();


    
    return (
        <div style={{ width: "100%" }}>
           
            <div className='shop-cart-container ' style={{ display: "flex", justifyContent: "center" }} >



                {!productId.length ? <div className='loading-container' ><span className='loading'></span></div>
                    :
                    <ProductDtail
                        key={productDetails?.id}
                        image={productDetails?.image}
                        title={productDetails?.title}
                        price={productDetails?.price}
                        id={productDetails?.id}
                        description={productDetails?.description}
                        category={productDetails?.category}
                        rate={productDetails?.rating.rate}
                        offerPrice={a?.offer}
                    />


                }


            </div>
        </div>

    );
};

export default ProductsDtails;




// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from "axios";
// import { getDataID } from '../data/Api';
// import ProductDtail from "./shared/ProductDtail"




// const ProductsDtails = () => {







//     const params = useParams()
//     const id = params.id

//     const [dataId, setDataID] = useState("")
//     useEffect(() => {
//         const getDataIDProduct = async () => {
//             setDataID(await getDataID(id))
//         }
//         getDataIDProduct()
//     }, [])
// // cant map on object we must turn it into a array
// const dataIDArray=Object.values(dataId)

// console.log(dataIDArray)

//     return (
//         <div style={{ display: "flex",
//         gap: "15px",
//         flexWrap: "wrap",
//         maxWidth: "100%",
//         width: "1350px",
//         margin: "0 auto",
//         padding: "22px",
//         justifyContent: "center"}}>


//             {!dataIDArray.length ?  <div className='loading-container' ><span className='loading'></span></div>
//             :
//             <ProductDtail
//             key={dataIDArray[0]}
//             image={dataIDArray[5]}
//             title={dataIDArray[1]}
//            price={dataIDArray[2]}
//            id={dataIDArray[0]}
//              description={dataIDArray[3]}
//            category={dataIDArray[4]}
//            rate={dataIDArray[6].rate}
//            />

//             }


//         </div>
//     );
// };

// export default ProductsDtails;
