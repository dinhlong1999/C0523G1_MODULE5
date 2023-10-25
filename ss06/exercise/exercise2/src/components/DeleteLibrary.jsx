import * as libraryService from "../service/libraryService.jsx";
import {toast} from "react-toastify";

export function DeleteLibrary({show, select, close}) {
    const remove = async (bookDelete) => {
        const temp = await libraryService.deleteBook(bookDelete.id);
        console.log(temp)
        if (temp.status === 200) {
            close()
            toast.success("Delete success")
        }else {
            alert("lỗi")
        }
    }
    return (
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