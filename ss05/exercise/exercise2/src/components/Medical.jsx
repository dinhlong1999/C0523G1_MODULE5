import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function Medical() {
    const info = {
        name: '',
        identifyCard: "",
        year: 0,
        gender: "0",
        nationality: '',
        company: "",
        position: "",
        medical: "",
        city: "",
        district: "",
        ward: "",
        residential: "",
        phoneNumber: "",
        email: "",
        travel: "",
        signal: [],
        contact: ""
    }
    const validateObject = {
        name: Yup.string()
            .required("required"),
        identifyCard: Yup.string()
            .required("required"),
        year: Yup.number()
            .required("required")
            .min(1990),
        nationality: Yup.string()
            .required("required"),
        city: Yup.string()
            .required("required"),
        district: Yup.string()
            .required("required"),
        ward: Yup.string()
            .required("required"),
        residential: Yup.string()
            .required("required"),
        phoneNumber: Yup.string()
            .required("required"),
        email: Yup.string()
            .required("required")
            .matches(/^[a-zA-z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/, "Invalid email address")

    }
    return (
        <Formik initialValues={info}
                validationSchema={Yup.object(validateObject)}
                onSubmit={(values) => {
                    alert("success")
                }}>
            <div>
                <div className="container px-5 my-5">
                    <h2 style={{textAlign: "center"}}>TỜ KHAI Y TẾ</h2>
                    <Form id="contactForm">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Họ tên</label>
                            <Field className="form-control" id="name" name="name" type="text" placeholder="Họ tên"/>
                            <ErrorMessage className="error" name='name' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="identifyCard">Số hộ chiếu/CMND</label>
                            <Field className="form-control" id="identifyCard" name="identifyCard" type="text"
                                   placeholder="Số hộ chiếu/CMND"/>
                            <ErrorMessage className="error" name='identifyCard' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="year">Năm sinh</label>
                            <Field className="form-control" id="year" name="year" type="number" placeholder="Năm sinh"/>
                            <ErrorMessage className="error" name='year' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Giới tính</label>
                            <div className="form-check form-check-inline">
                                <Field type="radio" className="form-check-input" id="gender" name="gender" value="1"/>
                                <label className="form-check-label" htmlFor="gender">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field type="radio" className="form-check-input" id="gender" name="gender" value="0"/>
                                <label className="form-check-label" htmlFor="gender">Nữ</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nationality">Quốc tịch</label>
                            <Field className="form-control" name="nationality" id="nationality" type="text"
                                   placeholder="Quốc tịch"/>
                            <ErrorMessage className="error" name='nationality' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="company">Công ty làm việc</label>
                            <Field className="form-control" name="company" id="company" type="text"
                                   placeholder="Công ty làm việc"/>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="position">Bộ phận làm việc</label>
                            <Field className="form-control" name="position" id="position" type="text"
                                   placeholder="Bộ phận làm việc"/>
                        </div>
                        <div className="mb-3">
                            <div className="form-check form-check-inline">
                                <Field type="checkbox" className="form-check-input" id="medical" name="medical"/>
                                <label className="form-check-label" htmlFor="medical">Có thẻ bào hiểm y tế</label>
                            </div>
                        </div>
                        <h3><b>Địa chỉ liên lạc tại Việt Nam</b></h3>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="city">Tỉnh thành</label>
                            <Field className="form-control" name="city" id="city" type="text" placeholder="Tỉnh thành"/>
                            <ErrorMessage className="error" name='city' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="district">Quận/Huyện</label>
                            <Field className="form-control" name="district" id="district" type="text"
                                   placeholder="Quận/Huyện"/>
                            <ErrorMessage className="error" name='district' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="ward">Phường /xã</label>
                            <Field className="form-control" id="ward" name="ward" type="text" placeholder="Phường /xã"/>
                            <ErrorMessage className="error" name='ward' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="residential">Số nhà, phố, tổ dân phố/ thôn/
                                đội</label>
                            <Field className="form-control" id="residential" name="residential" type="text"
                                   placeholder="Số nhà, phố, tổ dân phố/ thôn/ đội"/>
                            <ErrorMessage className="error" name='residential' component='div'/>

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="phoneNumber">Điện thoại</label>
                            <Field className="form-control" id="phoneNumber" name="phoneNumber" type="text"
                                   placeholder="Điện thoại"/>
                            <ErrorMessage className="error" name='phoneNumber' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <Field className="form-control" id="email" name="email" type="text"
                                   placeholder="Email Address"/>
                            <ErrorMessage className="error" name='email' component='div'/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"
                                   htmlFor="travel">Trong
                                vòng 14 ngày qua, Anh /Chị có đến vùng quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều
                                quốc
                                gia)</label>
                            <Field className="form-control"
                                   id="travel"
                                   type="text"
                                   name="travel"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block"><b>Trong vòng 14 ngày qua, Anh /Chị có thấy xuấn hiện
                                dấu
                                hiệu
                                nào sau đây không</b> </label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" value="Sốt" id="signal"
                                       name="signal"/>
                                <label className="form-check-label" htmlFor="signal">Sốt</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" value="Ho" id="signal"
                                       name="signal"/>
                                <label className="form-check-label" htmlFor="signal">Ho</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="signal"
                                       name="signal" value="Khó thở"/>
                                <label className="form-check-label" htmlFor="signal">Khó thở</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="signal"
                                       name="signal" value="Viêm phổi"/>
                                <label className="form-check-label" htmlFor="signal">Viêm phổi</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="signal"
                                       name="signal" value="Đau họng"/>
                                <label className="form-check-label" htmlFor="signal">Đau họng</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="signal"
                                       name="signal" value="Mệt mỏi"/>
                                <label className="form-check-label" htmlFor="signal">Mệt mỏi</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block"><b>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc
                                với?</b></label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="contact" value="Người bệnh
                                    hoặc
                                    nghi ngờ mắc bệnh COVID-19"
                                       name="contact"/>
                                <label className="form-check-label" htmlFor="contact">Người bệnh
                                    hoặc
                                    nghi ngờ mắc bệnh COVID-19</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="contact"
                                       name="contact" value="Người từ nước có bệnh
                                    COVID-19"/>
                                <label className="form-check-label" htmlFor="contact">Người từ nước có bệnh
                                    COVID-19</label>
                            </div>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="contact" value="Người có
                                    biểu
                                    hiện (Sốt ho khó thở viêm phổi)"
                                       name="contact"/>
                                <label className="form-check-label" htmlFor="contact">Người có
                                    biểu hiện (Sốt ho khó thở viêm phổi)</label>
                            </div>
                            <div className="d-grid">
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}