import React, { useCallback } from 'react'
import Chart from 'chart.js'

export default () => {
  const lineChart = useCallback((node) => {
    let line = new Chart(node, {
      type: 'line',
      data: {
        labels: ['12', '19', '3'],
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
      },
      options: { // this disables animations
        animation: {
          duration: 0
        },
        responsiveAnimationDuration: 0
      }
    })
  }, [])
  return (
    <>
      <canvas
        style={{ width: 800, height: 300 }}
        ref={lineChart}
      />
    </>
  )
}