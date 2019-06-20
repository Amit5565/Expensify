//Get Visible Expenses
const getVisibleExpenses=(expenses,{text,sortBy,endDate,startDate})=>{

    return expenses.filter((expense)=>{

        const startDateMatch= typeof startDate!=='number' || expense.createdAt>=startDate;

        const EndDateMatch=typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text);

        return startDateMatch && EndDateMatch && textMatch
    }).sort((a , b)=>{
              
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;

