import React from 'react'
import { Line } from 'react-chartjs-2'

const AreaChart = () => {

    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'USER',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,.5)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [650, 559, 870, 851, 456, 750, 459, 270, 851, 756, 333, 456]
            }
        ]
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="chart p-5 m-5">
                    <Line
                        data={state}
                        width={100}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        </div>

    )
}

export default AreaChart
