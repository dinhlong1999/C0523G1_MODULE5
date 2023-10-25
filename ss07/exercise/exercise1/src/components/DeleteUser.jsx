import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../redux/middleaware/UserMiddleware.jsx";
import {deleteUser} from "../service/userService.jsx";

export function DeleteUser({show,select,close}) {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    const remove = async (user) =>{
        dispatch(removeUser(user.id));
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
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you want to delete {select.title}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={close}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => {remove(select)}}>Delete
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