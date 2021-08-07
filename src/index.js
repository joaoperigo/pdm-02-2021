import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import thumbDr from './images/drmilton.jpeg';

const App = () => {
    const wrapper = {border: '1px solid #333', fontSize: 20, backgroundColor: "#ccc", textAlign: 'center', borderRadius: 15};
    const nomeMedico = {
        medico1 : 'Dr. Milton',
        medico2 : 'Dr. Hamilton',
        medico3 : 'Dr. Stevie'
    }
    //codigo impresso
    return (
        <div style={wrapper}>
            <h1>Profissionais de saúde</h1>
            <div style={{ borderTop: '1px solid #666'}}>
                <div className="card">
                    <img src={thumbDr} />
                    <h2>{nomeMedico.medico1}</h2>
                </div>
                <div className="card">
                    <img src={process.env.PUBLIC_URL+ 'drhamilton.jpeg'} />
                    <h2>{nomeMedico.medico2}</h2>
                </div>
                <div className="card">
                    <img src="http://placekitten.com/300/200" />
                    <h2>{nomeMedico.medico3}</h2>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
    )