import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as facilityService from "../../service/facilityService";


export function Homes() {
    const [houses, setHouses] = useState([]);
    const [villas, setVillas] = useState([]);
    const [rooms, setRoom] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        houseList();
        villaList();
        roomList();
    },[])

    const houseList = async () => {
        let result = await facilityService.getAllHouse();
        console.log(result)
        setHouses(result.data)

    }
    const villaList = async () => {
        let result = await facilityService.getAllVilla();
        setVillas(result.data)
    }
    const roomList = async () => {
        let result = await facilityService.getAllRoom();
        setRoom(result.data)
    }
    return(
        <>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img.png" className="d-block w-100"  />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_1.png" className="d-block w-100" />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_2.png" className="d-block w-100" />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{marginTop:"20px",width:"76%",marginLeft:"13%"}}>FURAMA FACILITY</h2>
                <div className={"row"}>
                    {houses.map((item) =>
                        <div className={"col-md-4"}>
                            <div className="card mb-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.images} className="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <span><b>Area :</b></span>
                                            <span style={{marginLeft:"70px"}}>{item.area}m²</span> <br/>
                                            <span><b>Capacity:</b></span>
                                            <span style={{marginLeft:"40px"}}>{item.maximumPeople} people</span><br/>
                                            <span><b>Cost :</b></span>
                                            <span style={{marginLeft:"72px"}}>{ new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.cost)}</span><br/>
                                            <span><b>Type :</b></span>
                                            <span style={{marginLeft:"72px"}}>{item.typeRent.name} </span><br/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {villas.map((item) =>
                        <div className={"col-md-4"}>
                            <div className="card mb-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.images} className="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <span><b>Area :</b></span>
                                            <span style={{marginLeft:"70px"}}>{item.area}m²</span> <br/>
                                            <span><b>Capacity:</b></span>
                                            <span style={{marginLeft:"40px"}}>{item.maximumPeople} people</span><br/>
                                            <span><b>Cost :</b></span>
                                            <span style={{marginLeft:"72px"}}>{ new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.cost)}</span><br/>
                                            <span><b>Type :</b></span>
                                            <span style={{marginLeft:"72px"}}>{item.typeRent.name} </span><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {rooms.map((item) =>
                        <div className={"col-md-4"}>
                            <div className="card mb-3" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.images} className="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <span><b>Area :</b></span>
                                            <span style={{marginLeft:"70px"}}>{item.area}m²</span> <br/>
                                            <span><b>Capacity:</b></span>
                                            <span style={{marginLeft:"40px"}}>{item.maximumPeople} people</span><br/>
                                            <span><b>Cost :</b></span>
                                            <span style={{marginLeft:"72px"}}>{ new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.cost)} </span><br/>
                                            <span><b>Type :</b></span>
                                            <span style={{marginLeft:"72px"}}>{item.typeRent.name} </span><br/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )


}