export default (expenses) =>{
if(expenses.length === 0){
    return 0
    } else {
        // let total = 0
        // expenses.map((expense) =>{
        //     total += expense.amount
        // })
        return expenses
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0)
}
return total
}
