import React, { useState, useEffect, useContext } from 'react';
import logo from "./image/Vintage-Sale.png"
import { ProductsContext } from '../context/ProductContextProvider';
import { OfferTenContext } from '../context/CartContextProvider';
const ModalOffer = () => {
    const [modalAnime, setModalAnime] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [op, setOp] = useState(false)
 
    const { offerTen,setOfferTen } = useContext(OfferTenContext)
    useEffect(() => {

        setTimeout(() => setOpenModal(true), 2000)
        setTimeout(() => setModalAnime(true), 2200)

    }, [])
    const ProductsData = useContext(ProductsContext)

    if (!openModal || !ProductsData.length) return null
    return (


        <div onClick={() => { setTimeout(() => setOpenModal(false), 500); setOp(true) }} className={`overlay `} >
            <div onClick={(e) => e.stopPropagation()} className={`modal-container ${modalAnime && "modalAnime"} ${op ? "closeAnime" : ""}`}>
                <img src={logo} />
                <div className='modal-right'>
                    <p onClick={() => { setTimeout(() => setOpenModal(false), 500); setOp(true) }} className='close-btn'>x</p>
                    <div className='content'>
                        <p>do you want a</p>
                        <p>$10 discount</p>
                        <p>for your first purchase</p>
                    </div>
                    <div className='btn-container'>

                        <button onClick={() => { setOfferTen(true); setTimeout(() => setOpenModal(false), 500); setOp(true) }} className='btn-primery'>
                            <span className='bold'>YES</span>  i want

                        </button>


                        <button onClick={() => { setTimeout(() => setOpenModal(false), 500); setOp(true) }} className='btn-outline'>
                            <span className='bold'>NO</span> thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOffer;