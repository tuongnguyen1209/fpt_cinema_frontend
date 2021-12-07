import React, { useEffect } from "react";
import BookTicketFood from "../../../components/molecules/bookticket_food/bookticket_food";
import { PageBookTicketFoodStyle } from "./page_bookticket_foodStyle";


const PageBookTicketFood = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageBookTicketFoodStyle>
            <BookTicketFood />
        </PageBookTicketFoodStyle>
    )
}

export default PageBookTicketFood;