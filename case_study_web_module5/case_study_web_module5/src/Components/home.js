import Header from "./header";
import Footer from "./footer";

function Home() {
    return(
        <>
            <div className="container-fluid">
                <h2>FURAMA RESORT</h2>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img.png" className="d-block w-100"  />
                        </div>
                        <div className="carousel-item">
                            <img src="/img_1.png" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img_2.png" className="d-block w-100" />
                        </div>
                    </div>
                </div>
                <h2>FURAMA FACILITY</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img_3.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Phòng Superior hướng vườn (garden superior)</b><br/>
                                <span className="price">Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money" style={{color:"black"}}>20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <img src="/img_4.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Deluxe hướng biển (ocean deluxe).</b><br/>
                                <span className="price">Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money" style={{color:"black"}} >20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card ">
                            <img src="/img_5.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Superior hướng đầm nước (Lagoon Superior).</b><br/>
                                <span className="price" >Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money" style={{color:"black"}}>20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img_8.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Phòng Gia đình thông nhau bằng ban công (Family Connecting by Balcony)</b><br/>
                                <span className="price">Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money" style={{color:"black"}}>20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img_6.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Phòng Deluxe vườn (Garden Deluxe).</b><br/>
                                <span className="price">Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money" style={{color:"black"}}>20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <img src="/img_7.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <b className="card-text">Studio Suite hướng biển (Ocean Studio Suite).</b><br/>
                                <span className="price">Giá chỉ từ: </span>
                                <span className="money">50$</span><br/>
                                <span className="price">Diện tích:</span>
                                <span className="money">20m</span><br/>
                                <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Home;