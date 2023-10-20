export function Customer() {
    return (
        <div className="container-fluid">
            <h1 id="bd" className="h3 mb-2 text-gray-800">LIST OF CUSTOMER</h1>

            <a className="btn btn-light" href="/" role="button">Back to menu</a>

            <div className="card-body">
                <div className="table-responsive" >
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>N0.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Phone number</th>
                            <th>Room rented</th>
                            <th>Brith day</th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}