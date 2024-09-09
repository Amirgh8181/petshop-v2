export const useExchangePrice = (arg: string, local: string) => {
    if (local === "fa") {
        let price:number = parseFloat(arg.replace("$", ""))
        let toman:string=`${price * 50000}`
        return `${toman.replace(/\B(?=(\d{3})+(?!\d))/g,',')}  تومان`
    } else {
        return arg
    }
}