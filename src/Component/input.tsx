import { useState } from "react"

interface IProps {
    fullname: string,
    infor: {
        age: number,
        address: string
    }
    funcAlert: () => void
}

const InputTodo = (props: IProps) => {

    const [st, setSt] = useState("Linh")

    const onChangeValue = (event: any) => {
        setSt(event.target.value)
    }

    return (
        <div>
            <p>value input: {st}</p>
            <input onChange={(event) => { onChangeValue(event) }} value={st}></input>
            <button style={{ marginLeft: "7px" }} onClick={() => props.funcAlert()}>save</button>
            <div>
                {props.fullname}
                {props.infor.address}
                {props.infor.age}
            </div>
        </div>
    )
}

export default InputTodo