const Currency_Formatter = new Intl.NumberFormat(undefined,{
    currency: "USD", style: "currency"
})



export function formatCurrency (number: number) {
    return Currency_Formatter.format(number)
}