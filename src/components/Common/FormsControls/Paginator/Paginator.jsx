import React, {useState} from "react";
import s from '../../../Users/Users.module.css';

let Paginator = ({usersItemsCount,pageSize,currentPage,onPageChanged, portionSize=10}) => {

    let pagesCount = Math.ceil(usersItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.numbersBlock}>
            {portionNumber>1&&
                <button onClick={() => setPortionNumber(portionNumber-1)}>PREV</button>
            }
            <div>
                {pages.filter(p=>p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                        onClick={(e) => { onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {portionCount>portionNumber&&
                <button onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button>
            }
        </div>
    )
}

export default Paginator;