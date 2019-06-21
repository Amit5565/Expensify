// //SET TEXT FILTER

// export const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// })


// //SORT BY DATE

// export  const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// })

// // SORT BY AMOUNT
// export  const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// })


// //SET START DATE
// export const setStartDate = (num = undefined) => ({

//     type: 'SET_START_DATE',
//     num
// })
// //SET END DATE
// export const setEndDate = (num = undefined) => ({

//     type: 'SET_END_DATE',
//     num
// })


// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
  });
  
  // SORT_BY_DATE
  export const sortByDate = () => ({
    type: "SORT_BY_DATE"
  });
  
  // SORT_BY_AMOUNT
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
  });
  
  // SET_START_DATE
  export const setStartDate = startDate => ({
    type: "SET_START_DATE",
    startDate
  });
  
  // SET_END_DATE
  export const setEndDate = endDate => ({
    type: "SET_END_DATE",
    endDate
  });