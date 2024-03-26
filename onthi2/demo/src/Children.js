export default function Children(props) {
    const dataToParent = () => {
        const data = "Truong Nguyen Dinh Long";
        props.sendData(data);
    }
    return(
        <button onClick={dataToParent}>SendData</button>
    )
}
