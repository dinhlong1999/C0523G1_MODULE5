function Children({sendData}) {

    const sendDataParentOnClick = () => {
        const data = "Siuuuuu";
        sendData(data);
    }
    return (
        <>
            <div>
                <h2>Child component</h2>
                <button onClick={sendDataParentOnClick}>Gữi dữ liệu đi</button>
            </div>
        </>
    )
}
export default Children;