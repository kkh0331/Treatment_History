import React, { useEffect, useState } from 'react';
import AppTitle from './common/AppTitle';
import axios from 'axios';
import './common/Input.css';

const TreatmentResult = () => {
    
    const [jinList, setJinList] = useState([]);

    useEffect(() => {
        getTreatmentHistData();
    }, []);

    const getTreatmentHistData = () => {
        axios.get('http://localhost:8000/treatment/data')
        .then(response => {
            setJinList(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const handleClick = () => {
        window.location.href = '/';
    };

    return (
        <div>
            <AppTitle title={"Result for Treatment Hist"}></AppTitle>
            {jinList.map(({JINMEDICALNM,JINDATE,JINTYPE,JINDSAMT,JINGDAMT})=>{
                return(
                    <table className='tableStyle'>
                        <tr>
                            <th scope='row'>
                                진료 장소
                            </th>
                            <td>
                                <span className='ResultSpanStyle'>{JINMEDICALNM}</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>
                                진료 날짜
                            </th>
                            <td>
                                <span className='ResultSpanStyle'>{JINDATE}</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>
                                진료 형태
                            </th>
                            <td>
                                <span className='ResultSpanStyle'>{JINTYPE}</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>
                                본인 부담금
                            </th>
                            <td>
                                <span className='ResultSpanStyle'>{JINDSAMT}</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>
                                공단 부담금
                            </th>
                            <td>
                                <span className='ResultSpanStyle'>{JINGDAMT}</span>
                            </td>
                        </tr>
                    </table>
                )
            })}
            <div style={{textAlign:"center"}}>
                <button onClick = {handleClick} className="InputButtonElement" style={{marginTop:"20px"}}>처음으로</button>
            </div>
            <div style={{height:"30px"}}></div>
        </div>
    );
};

export default TreatmentResult;