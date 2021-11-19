import React from "react";
import BuyTicketCPN from "../../../components/molecules/buy_ticket_component/list_buy_ticket";
import { BuyTicketStyle } from "./buy_ticketStyle";

const BuyTicketSite  = () =>  {
    return (
        <BuyTicketStyle>
            <div className="container">
                <BuyTicketCPN />
            </div>
        </BuyTicketStyle>
    )
}

export default BuyTicketSite