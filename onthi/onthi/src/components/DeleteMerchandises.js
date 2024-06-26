import * as merchandisesService from "../Service/merchandisesService"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export function DeleteMerchandises({show,select,close}) {
    const navigate = useNavigate();

    const remove = async (select) => {
       let result = merchandisesService.deleteMerchandises(select.id)
        if (result.status === 200 ){
            close();
            toast("success")
            navigate("/")
        }else {
            toast("failed")
        }
    }
    return(
        <>
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
                            onClick={() => {
                                remove(select)
                            }}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
        </div>
    ) }
        </>


    )

}