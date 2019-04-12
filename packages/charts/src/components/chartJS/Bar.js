import React, { useCallback } from 'react'
import Chart from 'chart.js'

export default () => {
  const barChart = useCallback((node) => {
    let bar = new Chart(node, {
      type: 'bar',
      data: {
        labels: ['red', 'blue', 'yellow'],
        datasets: [
          {
            label: '# of likes',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]
          }
        ]
      }
    })
  }, [])
  return (
    <div>
      <canvas 
        style={{ width: 800, height: 300 }}
        ref={barChart} 
      />
    </div>
  )
}