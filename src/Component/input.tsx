
import { useState } from "react"

interface IProps {
    infor: Array<{
        fullname: string,
        age: number
    }>
    funcAlert: () => void
    createUser: (fullname: string, age: number) => void
    deleteUser: (age: number) => void
}

const InputTodo = (props: IProps) => {

    const [st, setSt] = useState("Linh")

    const onChangeValue = (event: any) => {
        setSt(event.target.value)
    }

    let ageNew = Math.floor((Math.random()) * 100 + 1)

    return (
        <div>
            <p>value input: {st}</p>
            <input onChange={(event) => { onChangeValue(event) }} value={st}></input>
            <button style={{ marginLeft: "7px" }} onClick={() => props.createUser(st, ageNew)}>save</button>

            {
                props.infor.map((inf) => {
                    return (
                        <div>
                            {inf.age >= 18 ?
                                <div style={{ color: "green" }}>
                                    {inf.fullname}
                                    {inf.age}
                                    <button onClick={() => { props.deleteUser(inf.age) }}>X</button>
                                </div> :
                                <div style={{ color: "red" }}>
                                    {inf.fullname}
                                    {inf.age}
                                    <button onClick={() => { props.deleteUser(inf.age) }}>X</button>
                                </div>
                            }

                        </div>

                    )
                })
            }

        </div>
    )
}

export default InputTodo