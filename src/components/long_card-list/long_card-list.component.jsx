import React, { useState,useMemo } from "react";
import "../../App.scss"
import { LongCard } from "../long_card/long_card.component";
import Pagination from "../Pagination/pagination.component";


let PageSize = 5;

export const LongCardList = ({ competitions }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const currentCompetitions = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return competitions.slice(firstPageIndex, lastPageIndex);
    });
    console.log(competitions)
    return (
        <div className="long__card-list">
            {
                currentCompetitions.map(competition => <LongCard  competition={competition} />)
            }
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={competitions.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                colorModifier = "black"
            />
        </div>
    )
}