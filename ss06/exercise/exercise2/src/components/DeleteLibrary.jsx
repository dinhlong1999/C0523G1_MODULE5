import * as libraryService from "../service/libraryService.jsx";
import {toast} from "react-toastify";

export function DeleteLibrary(book) {

    const {isShow, bookDelete, closeModal} = book;

    const remove = async (bookDelete) => {
        const temp = await libraryService.deleteBook(bookDelete.id);
        console.log(temp)
        if (temp.status === 200) {
            closeModal()
            toast.success("Delete success")
        }else {
            alert("lỗi")
        }
    }
    return (
        <>
            {
                isShow && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you want to delete {bookDelete.title}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={closeModal}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => {remove(bookDelete)}}>Delete
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