import { useCallback, useState } from "react"
import WheaterComponent from "../components/WheaterComponent";
import { get,localSet } from "../service/RequestService";
import './WheaterHome.css'


export default function Wheater () {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("@weather-app/data");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    localSet(data);
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            get(inputValue)
            .then(res => {
                setData(res);
            })
            .catch(err => console.log(err.message));
            localSet(data);
        }, [inputValue,data]
    )

    return (
        <div className='main-container'>
            <h1>Weather App</h1>
            <div className='form-container'>
                <form {...{onSubmit}}>
                        <input className='search-term' type='text' onChange={e => setInputValue(e.target.value)} placeholder='Insira um cidade...'></input>
                    <input className='search-button' type='submit' value='Pesquisar'/>
                </form>
            </div>
            {data?.id ? <WheaterComponent {...data}/> : <div>Insira uma cidade válida</div>}
        </div>
    )
}