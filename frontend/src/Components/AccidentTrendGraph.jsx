import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
// import './AccidentTrendGraph.css'; // Import the CSS file

const AccidentTrendGraph = ({ data }) => {
    // Format the data for the graph
    const locations = [...new Set(data.map(item => item.location))];
    const dates = [...new Set(data.map(item => item.date))];

    // Set up the line colors based on your theme
    const lineColors = [
        '#FF3D00', // Bright Red
        '#FF9800', // Orange
        '#3F51B5', // Indigo
        '#009688', // Teal
        '#9C27B0'  // Purple
    ];

    const graphData = {
        labels: dates,
        datasets: locations.map((location, idx) => {
            const locationData = data.filter(item => item.location === location);
            return {
                label: `Accidents in ${location}`,
                data: dates.map(date => {
                    const found = locationData.find(item => item.date === date);
                    return found ? found.count : 0; // Return 0 if no data for that date
                }),
                borderColor: lineColors[idx % lineColors.length], // Use defined colors
                backgroundColor: `rgba(255, 255, 255, 0.1)`, // Light transparent background
                fill: true,
                tension: 0.4, // Smooth curve
                pointRadius: 6, // Larger visible points
                pointHoverRadius: 10, // Point enlarges on hover
                borderWidth: 3, // Thicker line for better visibility
            };
        }),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#B0BCD0', // Updated legend text color
                    font: {
                        size: 14,
                        family: 'THICCCBOI',
                        letterSpacing: '0.5px'
                    }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltips
                bodyFont: {
                    size: 12,
                    color: '#B0BCD0', // White text for clarity
                    family: 'THICCCBOI',
                    letterSpacing: '0.5px'
                },
                titleFont: {
                    size: 14,
                    color: '#B0BCD0', // White title for clarity
                    family: 'THICCCBOI',
                    letterSpacing: '0.5px'
                },
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue} accidents`;
                    }
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: '#B0BCD0', // Updated x-axis title color
                    font: {
                        size: 14,
                        family: 'THICCCBOI',
                        letterSpacing: '0.5px'
                    }
                },
                ticks: {
                    color: '#B0BCD0', // Updated x-axis tick color
                    font: {
                        family: 'THICCCBOI',
                        letterSpacing: '0.5px'
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Accidents',
                    color: '#B0BCD0', // Updated y-axis title color
                    font: {
                        size: 14,
                        family: 'THICCCBOI',
                        letterSpacing: '0.5px'
                    }
                },
                ticks: {
                    color: '#B0BCD0', // Updated y-axis tick color
                    stepSize: 1, // Adjust based on your data
                    font: {
                        family: 'THICCCBOI',
                        letterSpacing: '0.5px'
                    }
                },
                grid: {
                    color: 'rgba(176, 188, 208, 0.2)' // Light grid lines for contrast
                }
            }
        }
    };

    return (
        <div style={{ width: '800px', height: '400px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:"column" }}>
            <div className="accidentgraph_title">
                Accident Graph
            </div>
            <Line data={graphData} options={options} />
        </div>
    );
};

export default AccidentTrendGraph;
