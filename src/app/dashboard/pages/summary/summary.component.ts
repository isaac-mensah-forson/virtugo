import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let Apex: any;
declare let ApexCharts: any;
declare let Flickity: any;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  today = 'Jan 15';
  todayBalance = '$1,500.00';
  cards = [
    {
      name: 'Forson Young',
      lastDigits: '5543',
      date: '04/25',
      color: '#323232',
      type: 'visa'
    },
    {
      name: 'Thom Snap',
      lastDigits: '0498',
      date: '12/24',
      color: '#3e3dc5',
      type: 'master-card'
    },
    {
      name: 'Secret Boss',
      lastDigits: '1237',
      date: '01/22',
      color: '#323232',
      type: 'visa'
    },
    {
      name: 'Solomon Jeff',
      lastDigits: '4568',
      date: '06/21',
      color: '#3e3dc5',
      type: 'master-card'
    },
  ]
  activities = [
    {
      logo: 'Am',
      place: 'Amazon',
      item: 'Design thinking book',
      transfer: '- 23.19',
      date: 'Jan 12, 14:42'
    },
    {
      logo: 'Ko',
      place: 'Market',
      item: 'Random groceries',
      transfer: '- 18.92',
      date: 'Jan 10, 12:31'
    },
    {
      logo: 'Ap',
      place: 'Apple',
      item: 'iPhone 12 Pro',
      transfer: '- 940.00',
      date: 'Jan 10, 08:23'
    },
    {
      logo: 'Ee',
      place: 'Envato Elements',
      item: 'Payment for December',
      transfer: '+ 460.19',
      date: 'Jan 9, 13:12'
    },
    {
      logo: 'A',
      place: 'Airbnb',
      item: 'Rent of apartment',
      transfer: '- 90.00',
      date: 'Jan 9, 12:54'
    },
    {
      logo: 'Am',
      place: 'Amazon',
      item: 'Design thinking book',
      transfer: '- 23.19',
      date: 'Jan 12, 14:42'
    },
    {
      logo: 'Ko',
      place: 'Market',
      item: 'Random groceries',
      transfer: '- 18.92',
      date: 'Jan 10, 12:31'
    },
    {
      logo: 'Ap',
      place: 'Apple',
      item: 'iPhone 12 Pro',
      transfer: '- 940.00',
      date: 'Jan 10, 08:23'
    },
    {
      logo: 'Ee',
      place: 'Envato Elements',
      item: 'Payment for December',
      transfer: '+ 460.19',
      date: 'Jan 9, 13:12'
    },
    {
      logo: 'A',
      place: 'Airbnb',
      item: 'Rent of apartment',
      transfer: '- 90.00',
      date: 'Jan 9, 12:54'
    },
    {
      logo: 'A',
      place: 'Airbnb',
      item: 'Rent of apartment',
      transfer: '- 90.00',
      date: 'Jan 9, 12:54'
    },
    {
      logo: 'Am',
      place: 'Amazon',
      item: 'Design thinking book',
      transfer: '- 23.19',
      date: 'Jan 12, 14:42'
    },
    {
      logo: 'Ko',
      place: 'Market',
      item: 'Random groceries',
      transfer: '- 18.92',
      date: 'Jan 10, 12:31'
    },
    {
      logo: 'Ap',
      place: 'Apple',
      item: 'iPhone 12 Pro',
      transfer: '- 940.00',
      date: 'Jan 10, 08:23'
    },
    {
      logo: 'Ee',
      place: 'Envato Elements',
      item: 'Payment for December',
      transfer: '+ 460.19',
      date: 'Jan 9, 13:12'
    },
    {
      logo: 'A',
      place: 'Airbnb',
      item: 'Rent of apartment',
      transfer: '- 90.00',
      date: 'Jan 9, 12:54'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    //chart init
    $(document).ready(function () {
      const today = 'Jan 18'
      const todayBalance = '$1,500.00';

      var elem = document.querySelector('.gallery');
      var flkty = new Flickity(elem, {
        prevNextButtons: false
        // options
        // cellAlign: 'left',
        // contain: true
      });

      // element argument can be a selector string
      //   for an individual element
      // var flkty = new Flickity('.main-carousel', {
      //   // options
      // });

      Apex.grid = {
        padding: {
          right: 0,
          left: 0
        }
      }

      Apex.dataLabels = {
        enabled: false
      }

      // var randomizeArray = function (arg: any) {
      //   var array = arg.slice();
      //   var currentIndex = array.length, temporaryValue, randomIndex;

      //   while (0 !== currentIndex) {

      //     randomIndex = Math.floor(Math.random() * currentIndex);
      //     currentIndex -= 1;

      //     temporaryValue = array[currentIndex];
      //     array[currentIndex] = array[randomIndex];
      //     array[randomIndex] = temporaryValue;
      //   }

      //   return array;
      // }

      // data for the sparklines that appear below header area
      var sparklineData = [15, 37, 31, 39, 24, 35, 56, 38, 45, 65];

      // the default colorPalette for this dashboard
      //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
      // var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

      var spark3 = {
        annotations: {
          xaxis: [
            {
              x: today,
              borderColor: "#f8f9fa",
              label: {
                offsetX: 59,
                offsetY: 5,
                borderColor: "transparent",
                style: {
                  color: "#f8f9fa",
                  background: "transparent",
                  fontSize: '13px',
                  fontWeight: 550
                },
                orientation: "horizontal",
                text: 'Today : ' + todayBalance
              }
            }
          ],
          points:
            [
              {
                x: today,
                marker: {
                  size: 4,
                  strokeColor: 'transparent'
                },
                // label: {
                //   borderColor: 'transparent',
                //   style: {
                //     color: 'white',
                //     background: 'transparent',
                //   },
                //   text: 'Today'
                // }
              }
            ]
        },
        chart: {
          type: 'line',
          height: 230,
          // sparkline: {
          //   enabled: true
          // },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: 2,
          curve: 'straight'
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false
        },
        fill: {
          opacity: 1,
        },
        series: [{
          name: 'Balance $',
          // data: randomizeArray(sparklineData)
          data: sparklineData
        }],
        xaxis: {
          type: 'category',
          categories: ['Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
          crosshairs: {
            width: 1,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tickPlacement: 'between',
          labels: {
            rotate: 0,
            rotateAlways: false,
            show: true,
            trim: true,
            style: {
              colors: ['#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa', '#f8f9fa'],
              fontSize: '10px'
            }
          },
        },
        yaxis: {
          min: 0,
          show: false
        },
        colors: ['#f8f9fa'],

        // title: {
        //   text: '',
        //   offsetX: 20,
        //   style: {
        //     fontSize: '24px'
        //   }
        // },
        // subtitle: {
        //   text: '',
        //   offsetX: 20,
        //   style: {
        //     fontSize: '14px'
        //   }
        // }
      }

      new ApexCharts(document.querySelector("#spark3"), spark3).render();
    })
  }

}
