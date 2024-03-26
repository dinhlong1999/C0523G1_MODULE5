import {useNavigate} from "react-router-dom";
import * as facilityService from "../../../service/facilityService"
import {toast} from "react-toastify";
export function DeleteRoom({show,select,closeModal}) {
    const navigate = useNavigate();

    const remove = async (select) => {
        let actionDelete = await facilityService.deleteRoom(select.id);
        if (actionDelete.status === 200){
            closeModal();
            navigate("/room");
            toast.success("Delete success")
        }else {
            closeModal();
            toast.error("Failed")
        }
    }
    return(
        <>
            {
                            show && (
                                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Confirm Deletion</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                                        onClick={closeModal}></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Do you want to delete<span style={{color:"red"}}> {select.name}?</span></p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                                        onClick={closeModal}>Close
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
                            )
                        }
        </>
    )
}