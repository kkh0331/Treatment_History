import React, { useEffect, useState } from 'react';
import AppTitle from './common/AppTitle';
import axios from 'axios';
import './common/Input.css';

const DrugResult = () => {
    
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        getTreatmentHistData();
    }, []);

    const getTreatmentHistData = () => {
        axios.get('http://localhost:8000/drug/data')
        .then(response => {
            setResultList(response.data);
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
            {resultList.map(({DateOfPreparation,Dispensary,PhoneNumber,DrugList})=>{
                return(
                        <table className='tableStyle'>
                            <tr>
                                <th scope='row'>
                                    조제 기관
                                </th>
                                <td>
                                    <span className='ResultSpanStyle'>{Dispensary}</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>
                                    조제 일자
                                </th>
                                <td>
                                    <span className='ResultSpanStyle'>{DateOfPreparation}</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>
                                    연락처
                                </th>
                                <td>
                                    <span className='ResultSpanStyle'>{PhoneNumber}</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>
                                    투약 목록
                                </th>
                                <td>
                                    {DrugList.map(({Name})=>{
                                        return(
                                            <div>
                                                <span className='ResultSpanStyle'>
                                                    {Name}
                                                </span>
                                            </div>
                                        )
                                    })}
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

export default DrugResult;