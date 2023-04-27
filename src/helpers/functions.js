// const shorter = (title) => {
//     const splitedTitle = title.split(" ")

//     const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]}`


//   if (splitedTitle[3]==undefined) {
//     const newTitle =`${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`

//     return newTitle
//   }else{
//     return newTitle
//   }



// }

// export {shorter}

const shorter = (title) => {

    const splitedTitle = title.split(" ")

    if (splitedTitle[3] === undefined) {


        splitedTitle.push("")
        const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]}`

        return newTitle
    } else {
        const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]}`
        return newTitle
    }
}

const newPrice = (price) => {
    const splitedPrice = price.toString().split(".");
    const realDigits = splitedPrice.map(Number)
    const first = realDigits[0]
    const sec = realDigits[1]
    if (splitedPrice[1] === undefined) {

        const newPricee = {
            first: first,
        }
        return Object.values(newPricee)
    } else {
        const newPricee = {
            first: first,
            sec: sec,
        }
        return Object.values(newPricee)
    }
    // or
    // if (splitedPrice[1] == undefined) {
    //     const newPricee = [first]
    //     return Object.values(newPricee)
    // } else {
    //     const newPricee = [first,sec]
    //     return newPricee
    // }

}


const rateStars = (rate) => {
    let color
    if (rate >= 3.5) {
        color = "#ffd700e5"
    } else if (rate > 2 && rate < 3.5) {
        color = "#ffa500db"
    } else {
        color = "#f75959"
    }
    return color
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}
const quan = (state, id) => {
    const q = state.selectedItems.findIndex(item => item.id === id);
    console.log(q)
    return q

}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}



const offer = (items) => {
    console.log(items.offerPrice);


    const percent = (items.price * items.offerPrice) / 100
    const total = (items.price - percent).toFixed(2)




    // const offerSale = ((items.price) - (items.price * 10) / 100).toFixed(2)


    // return items.price = offerSale
    return items.price = total

}






export { shorter, newPrice, rateStars, isInCart, quan, quantityCount, offer, }



