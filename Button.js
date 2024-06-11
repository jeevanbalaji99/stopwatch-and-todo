import './Button.css'


const Button = ({start,status,stop,reset}) =>{
    return(
        <div className="button-container">
            {status === 0 && <button className="start-button" onClick={start}>START</button> }
            {status === 1 && 
            <div>
                <button className="reset-button" onClick={reset}>RESTART</button>&nbsp;
                <button className="stop-button" onClick={stop}>STOP</button>
                </div>}
            
        </div>
    )
}
export default Button;