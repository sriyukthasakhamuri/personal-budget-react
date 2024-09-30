import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PieGraph from './PieGraph';

ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
    const [data, setData] = useState({
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    });
    const [d3Data, setd3Data] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3300/budget').then((res) => {
            setData({
                datasets: [
                    {
                        data: res.data.myBudget.map(i => i.budget),
                        backgroundColor: [
                            '#0AFAF7',
                            '#73FA0A',
                            '#320AFA',
                            '#FA0A0A',
                            '#FA5E0A',
                            '#DAF7A6',
                            '#FF5733',
                            '#581845'
                        ]
                    }
                ],
                labels: res.data.myBudget.map(i => i.title)
            });
            setd3Data(
                res.data.myBudget.map(i => ({label: i.title, value: i.budget}))
            )
        });
    }, [data]);

    return (
        <main className="container center">
            <section className="page-area" aria-live="polite" id="mainPage">

                <article className="text-box">
                    <h1>Stick to the plan</h1>
                    <p>
                        Are you aware of where your money is going? You would be shocked if you took the time 
                        to find it! This program will assist you in gathering real data, which is essential 
                        for proper budget management!
                    </p>
                </article>

                <article className="text-box">
                    <h1>Heads-ups</h1>
                    <p>
                       What if you ran out of money for clothes? A heads up will be sent to you. Never going 
                       over budget is the aim. 
                    </p>
                </article>

                <article className="text-box">
                    <h1>Outcomes</h1>
                    <p>
                       Individuals that follow a budget and track all of their expenses pay off debt more quickly!
                       They also lead better lives since they may spend without fear or guilt because they know 
                       everything is well and taken care of.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Costless</h1>
                    <p>
                       This app is free while you will be the only one that can access your data
                    </p>
                </article>

                <article className="text-box">
                    <h1>Adhere to the plan</h1>
                    <p>
                       Are you aware of where your money is going? You would be shocked if you took the time 
                       to find it! This app will assist you in gathering real data, which is essential 
                       for proper budget management!
                    </p>
                </article>

                <article className="text-box">
                    <h1>Heads-ups</h1>
                    <p>
                       What if you ran out of money for clothes? A heads up will be sent to you. Never going 
                       over budget is the aim.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Outcomes</h1>
                    <p>
                       Individuals that follow a budget and track all of their expenses pay off debt more quickly!
                       They also lead better lives since they may spend without fear or guilt because they know 
                        everything is well and taken care of.
                    </p>
                </article>

                <article className="text-box">
                    <h1>Costless</h1>
                    <p>
                       This app is free while you will be the only one that can access your data 
                    </p>
                </article>

                <article className="text-box">
                    <h1>Chart.js</h1>
                    {data.datasets[0].data.length === 0 ? <p>loading chart data....</p> : <Pie data={data}/>}
                </article>

                <article className="text-box">
                    <h1>D3.js</h1>
                    <PieGraph
                        data={d3Data}
                        width={350}
                        height={350}
                        innerRadius={40}
                        outerRadius={150}
                    />
                </article>

            </section>

        </main>
    )
        ;
}

export default HomePage;