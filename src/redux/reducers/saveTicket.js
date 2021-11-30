const initState = JSON.parse(localStorage.getItem("ticket")) || {}

const saveTicketReducer = (state = initState ,action) => {
    switch (action.type) {
        case 'SAVE_TICKET': {
            const newSaveTicketList = action.payload;
            const listTotal = {...state,...newSaveTicketList}
            localStorage.setItem("ticket", JSON.stringify(listTotal));
            return listTotal;
        }
        
        default:
            return state;
    }
}


export default saveTicketReducer;
