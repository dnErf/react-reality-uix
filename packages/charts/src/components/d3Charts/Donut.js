import './styles.scss'

import React from 'react'
import { scaleOrdinal } from 'd3-scale'
import { arc as d3Arc, pie as d3Pie } from 'd3-shape'
import { csvParse } from 'd3-dsv'

const 
  dataCsv = `age,population
    <5,2704659
    5-13,4499890
    14-17,2159981
    18-24,3853788
    25-44,14106543
    45-64,8819342
    ≥65,612463
  `
  , width = 960
  , height = 500
  , radius = Math.min(width, height) / 2
  , color = scaleOrdinal().range([
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ])
  , arc = d3Arc().outerRadius(radius - 10).innerRadius(radius - 70)
  , pie = d3Pie().sort(null).value(function(d) { return d.population })
  , data = pie(csvParse(dataCsv, d => {
      d.population = +d.population
      return d
    }))

export default () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {
          data.map(d => (
            <g className="arc" key={`a${d.data.age}`}>
              <path d={arc(d)} fill={color(d.data.age)} />
              <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
                {d.data.age}
              </text>
            </g>
          ))
        }
      </g>
    </svg>
  )
}