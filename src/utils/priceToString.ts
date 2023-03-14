

export default function priceToString(price: number) {
    let cents = `${price - Math.trunc(price)}`
    if (Math.trunc(+cents * 10) !== +cents * 10 || cents === '0')
        cents = `${cents}0`
    const priceString = `$ ${Math.trunc(price)}.${cents}`
    return priceString
}