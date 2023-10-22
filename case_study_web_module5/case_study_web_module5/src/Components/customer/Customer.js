import {getAll} from "../../service/customerService"
export function Customer() {
    return (
        <div className="container-fluid">
            <h1 id="bd" className="h3 mb-2 text-gray-800">CUSTOMER</h1>
            <div className="card-body">
                <div className="table-responsive" style={{overflowX:"visible"}}>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>N0.</th>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Phone number</th>
                            <th>Room rented</th>
                            <th>Rank</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getAll().map((customer,index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.birthday}</td>
                                <td>{customer.address}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.roomRented}</td>
                                <td>{customer.rank}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}