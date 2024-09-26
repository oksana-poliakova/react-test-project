function Parent(props) {

    console.log(props)

    return (
        <>
        <p>Name: {props.data.name}</p>
        <p>Surname: {props.data.surname}</p>
        </>
    )
}

export default Parent;