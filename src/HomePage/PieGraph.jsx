import React from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => (
    <g key={index} className="arc">
        <path className="arc" d={createArc(data)} fill={colors(index)} />
        <text
            transform={`translate(${createArc.centroid(data)})`}
            textAnchor="middle"
            fill="white"
            fontSize="10"
        >
            {format(data.value)}
        </text>
    </g>
);

const PieGraph = props => {
    const createPie = d3
        .pie()
        .value(d => d.value)
        .sort(null);

    const createArc = d3
        .arc()
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius);

    const colors = d3.scaleOrdinal(d3.schemeDark2);
    const format = d3.format(".2f");
    const data = createPie(props.data);

    return (
        <svg width={props.width} height={props.height}>
            <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
                {data.map((d, i) => (
                    <Arc
                        key={i}
                        index={i}
                        data={d}
                        createArc={createArc}
                        colors={colors}
                        format={format}
                    />
                ))}
            </g>
        </svg>
    );
};

export default PieGraph;