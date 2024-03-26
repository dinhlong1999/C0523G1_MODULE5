export function PageList({currentPage,totalCustomer,sentPage}) {
    const totalPage = Math.ceil(totalCustomer/5);
    let pageNumbers = [];
    for (let i = 1; i <= totalPage ; i++) {
        pageNumbers.push(
            <button
            key={i}
            onClick={() => sentPage(i)}
            className={currentPage === i ?"on":""}
            style={{width:"40px"}}
            >{i}</button>
        )
    }
    return(
        <div>
            <ul className="pagination pagination-lg" >
                {pageNumbers.map((item)=>
                    <li className={"page-item"}>{item}</li>
                )}
            </ul>
        </div>
    )
}