import moment from 'moment'

export function generateGraphicOptions(graphicTitle, xaxisTitle, yaxisTitle) {
  return {
    chart: {
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      x: {
        formatter: value => {
          return moment(new Date(value)).format('LL')
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    title: {
      text: graphicTitle,
      align: 'center',
      style: {
        fontSize: 30,
        color: '#ffffff'
      }
    },
    markers: {
      size: 0
    },
    xaxis: {
      title: {
        text: xaxisTitle,
        style: {
          fontSize: 20,
          color: '#ffffff'
        }
      },
      labels: {
        formatter: value => {
          return moment(new Date(value)).format('MM-YYYY')
        },
        rotate: -45,
        style: {
          fontSize: 20
        }
      },
      tickAmount: 5
    },
    yaxis: {
      title: {
        text: yaxisTitle,
        offsetX: -5,
        style: {
          fontSize: 20,
          color: '#ffffff'
        }
      },
      labels: {
        style: {
          fontSize: 20
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: 14,
      offsetY: -20,
      labels: {
        colors: '#ffffff'
      }
    }
  }
}
