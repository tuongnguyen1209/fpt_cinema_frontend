

export const saveTicketList = (infoTicket) => {
    return {
        type: 'SAVE_TICKET',
        payload: infoTicket,
    }
}