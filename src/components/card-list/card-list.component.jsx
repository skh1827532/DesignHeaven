import React, { useMemo, useState } from "react";
import "../../App.scss"
import { Card } from "../card/card.component";
import Pagination from "../Pagination/pagination.component";


let PageSize = 8;
export const CardList = ({ designs, extendedStyle }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const currentDesigns = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return designs.slice(firstPageIndex, lastPageIndex);
    });
    let colorModifier = ""
    let hoverEffect = ""
    const handleExtendedStyle = () => {
        if (extendedStyle) {
            if (extendedStyle.includes("white")) {
                colorModifier = "white"
            }
            else if (extendedStyle.includes("black")) {
                colorModifier = "black"
            }
            if (extendedStyle.includes("hoverEffect")) {
                hoverEffect = "card--hoverEffect"
            }

            return `${extendedStyle}`
        }
        return ""
    }

    return (
        <div>
            <div className={`card-list ${handleExtendedStyle()}`}>
                {
                    currentDesigns.map(
                        design =>
                            <Card
                                key={design.id}
                                design={design}
                                extendedStyle={hoverEffect}

                            />)
                }

            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={designs.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                colorModifier={colorModifier}
            />
        </div>

    )
}