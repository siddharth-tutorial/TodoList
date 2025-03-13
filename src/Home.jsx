import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';

function Home() {

    let [data, setdata] = useState(0);
    let [txt, setTxt] = useState(0);
    let [todoData,setTodoData] = useState([]);


    useEffect(() => {
        // fetch('https://dummyjson.com/todos')
        //     .then(res => res.json())
        //     .then(console.log(res));

        axios.get('https://dummyjson.com/todos')
            .then(function (response) {
                // handle success
                setTodoData(response.data.todos)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    })

    return (
        <div>
            <Header />



            <h1>{data}</h1>
            <h1>{txt}</h1>

            <button onClick={() => { setdata(data + 1) }}>Click</button>
            <button onClick={() => { setTxt(txt + 1) }}>Click</button>
            <br></br>

            <table border={'2px'} cellPadding={'2px'}>
                <tr>
                    <th>#</th>
                    <th>Todo</th>
                </tr>
                {
                    todoData.map((item,i)=>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.todo}</td>
                            </tr>
                        )
                    })

                }
            </table>
            Home
        </div>
    )
}

export default Home
