
const initState = {}
const saveTicketReducer = (state = initState ,action) => {
    switch (action.type) {
        case 'SAVE_TICKET': {
            const newSaveTicketList = action.payload;
            const listTotal = {...state,...newSaveTicketList}
            return listTotal;
        }
        
        default:
            return state;
    }
}


export default saveTicketReducer;
