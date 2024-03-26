import {useParams} from "react-router-dom";

export function Product() {
    let {categoryId} = useParams();
    return(
        <div>
            <h3>Id selected {categoryId}</h3>
        </div>
    )
}