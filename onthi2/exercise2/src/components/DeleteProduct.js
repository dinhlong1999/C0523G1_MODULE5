import {useNavigate} from "react-router-dom";
import * as  productService from "../service/productService";
import {toast} from "react-toastify";
export function DeleteProduct({show,select,close}) {

        const navigate = useNavigate();
        const remove = async (select) => {
            let result = await productService.deleteProduct(select)
            if (result.status === 200){
                toast.success("ok")
                close();
                navigate("/")
            }
        }


    return(
       <div>
           {
               show   && (
                   <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                       <div className="modal-dialog">
                           <div className="modal-content">
                               <div className="modal-header">
                                   <h5 className="modal-title">Confirm Deletion</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                           onClick={close}></button>
                               </div>
                               <div className="modal-body">
                                   <p>Do you want to delete<span style={{color:"red"}}> {select.name}?</span></p>
                               </div>
                               <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                           onClick={close}>Close
                                   </button>
                                   <button type="button" className="btn btn-primary"
                                           onClick={()=>remove(select)}>
                                       Remove
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               ) }
       </div>

)
}