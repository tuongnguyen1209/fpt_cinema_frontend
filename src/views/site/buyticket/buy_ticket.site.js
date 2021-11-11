import React from "react";
import BuyTicketCPN from "../../../components/molecules/list_buy_ticket/list_buy_ticket";
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