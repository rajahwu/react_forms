import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function PageTitle({title}) {
    // const [title, setTitle] = useState("React Forms")
    const history = useHistory()
    // console.log(history)
    return <h2>{title}</h2>
}