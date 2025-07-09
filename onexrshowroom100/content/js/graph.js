/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1270.0, "minX": 0.0, "maxY": 22354.0, "series": [{"data": [[0.0, 1270.0], [0.1, 1270.0], [0.2, 1270.0], [0.3, 1270.0], [0.4, 1270.0], [0.5, 1270.0], [0.6, 1270.0], [0.7, 1270.0], [0.8, 1270.0], [0.9, 1270.0], [1.0, 1282.0], [1.1, 1282.0], [1.2, 1282.0], [1.3, 1282.0], [1.4, 1282.0], [1.5, 1282.0], [1.6, 1282.0], [1.7, 1282.0], [1.8, 1282.0], [1.9, 1282.0], [2.0, 1476.0], [2.1, 1476.0], [2.2, 1476.0], [2.3, 1476.0], [2.4, 1476.0], [2.5, 1476.0], [2.6, 1476.0], [2.7, 1476.0], [2.8, 1476.0], [2.9, 1476.0], [3.0, 1623.0], [3.1, 1623.0], [3.2, 1623.0], [3.3, 1623.0], [3.4, 1623.0], [3.5, 1623.0], [3.6, 1623.0], [3.7, 1623.0], [3.8, 1623.0], [3.9, 1623.0], [4.0, 1657.0], [4.1, 1657.0], [4.2, 1657.0], [4.3, 1657.0], [4.4, 1657.0], [4.5, 1657.0], [4.6, 1657.0], [4.7, 1657.0], [4.8, 1657.0], [4.9, 1657.0], [5.0, 1684.0], [5.1, 1684.0], [5.2, 1684.0], [5.3, 1684.0], [5.4, 1684.0], [5.5, 1684.0], [5.6, 1684.0], [5.7, 1684.0], [5.8, 1684.0], [5.9, 1684.0], [6.0, 1793.0], [6.1, 1793.0], [6.2, 1793.0], [6.3, 1793.0], [6.4, 1793.0], [6.5, 1793.0], [6.6, 1793.0], [6.7, 1793.0], [6.8, 1793.0], [6.9, 1793.0], [7.0, 1794.0], [7.1, 1794.0], [7.2, 1794.0], [7.3, 1794.0], [7.4, 1794.0], [7.5, 1794.0], [7.6, 1794.0], [7.7, 1794.0], [7.8, 1794.0], [7.9, 1794.0], [8.0, 1795.0], [8.1, 1795.0], [8.2, 1795.0], [8.3, 1795.0], [8.4, 1795.0], [8.5, 1795.0], [8.6, 1795.0], [8.7, 1795.0], [8.8, 1795.0], [8.9, 1795.0], [9.0, 1904.0], [9.1, 1904.0], [9.2, 1904.0], [9.3, 1904.0], [9.4, 1904.0], [9.5, 1904.0], [9.6, 1904.0], [9.7, 1904.0], [9.8, 1904.0], [9.9, 1904.0], [10.0, 1922.0], [10.1, 1922.0], [10.2, 1922.0], [10.3, 1922.0], [10.4, 1922.0], [10.5, 1922.0], [10.6, 1922.0], [10.7, 1922.0], [10.8, 1922.0], [10.9, 1922.0], [11.0, 3306.0], [11.1, 3306.0], [11.2, 3306.0], [11.3, 3306.0], [11.4, 3306.0], [11.5, 3306.0], [11.6, 3306.0], [11.7, 3306.0], [11.8, 3306.0], [11.9, 3306.0], [12.0, 3727.0], [12.1, 3727.0], [12.2, 3727.0], [12.3, 3727.0], [12.4, 3727.0], [12.5, 3727.0], [12.6, 3727.0], [12.7, 3727.0], [12.8, 3727.0], [12.9, 3727.0], [13.0, 3875.0], [13.1, 3875.0], [13.2, 3875.0], [13.3, 3875.0], [13.4, 3875.0], [13.5, 3875.0], [13.6, 3875.0], [13.7, 3875.0], [13.8, 3875.0], [13.9, 3875.0], [14.0, 3984.0], [14.1, 3984.0], [14.2, 3984.0], [14.3, 3984.0], [14.4, 3984.0], [14.5, 3984.0], [14.6, 3984.0], [14.7, 3984.0], [14.8, 3984.0], [14.9, 3984.0], [15.0, 4070.0], [15.1, 4070.0], [15.2, 4070.0], [15.3, 4070.0], [15.4, 4070.0], [15.5, 4070.0], [15.6, 4070.0], [15.7, 4070.0], [15.8, 4070.0], [15.9, 4070.0], [16.0, 4231.0], [16.1, 4231.0], [16.2, 4231.0], [16.3, 4231.0], [16.4, 4231.0], [16.5, 4231.0], [16.6, 4231.0], [16.7, 4231.0], [16.8, 4231.0], [16.9, 4231.0], [17.0, 4242.0], [17.1, 4242.0], [17.2, 4242.0], [17.3, 4242.0], [17.4, 4242.0], [17.5, 4242.0], [17.6, 4242.0], [17.7, 4242.0], [17.8, 4242.0], [17.9, 4242.0], [18.0, 4285.0], [18.1, 4285.0], [18.2, 4285.0], [18.3, 4285.0], [18.4, 4285.0], [18.5, 4285.0], [18.6, 4285.0], [18.7, 4285.0], [18.8, 4285.0], [18.9, 4285.0], [19.0, 4336.0], [19.1, 4336.0], [19.2, 4336.0], [19.3, 4336.0], [19.4, 4336.0], [19.5, 4336.0], [19.6, 4336.0], [19.7, 4336.0], [19.8, 4336.0], [19.9, 4336.0], [20.0, 4360.0], [20.1, 4360.0], [20.2, 4360.0], [20.3, 4360.0], [20.4, 4360.0], [20.5, 4360.0], [20.6, 4360.0], [20.7, 4360.0], [20.8, 4360.0], [20.9, 4360.0], [21.0, 5005.0], [21.1, 5005.0], [21.2, 5005.0], [21.3, 5005.0], [21.4, 5005.0], [21.5, 5005.0], [21.6, 5005.0], [21.7, 5005.0], [21.8, 5005.0], [21.9, 5005.0], [22.0, 5099.0], [22.1, 5099.0], [22.2, 5099.0], [22.3, 5099.0], [22.4, 5099.0], [22.5, 5099.0], [22.6, 5099.0], [22.7, 5099.0], [22.8, 5099.0], [22.9, 5099.0], [23.0, 5187.0], [23.1, 5187.0], [23.2, 5187.0], [23.3, 5187.0], [23.4, 5187.0], [23.5, 5187.0], [23.6, 5187.0], [23.7, 5187.0], [23.8, 5187.0], [23.9, 5187.0], [24.0, 5318.0], [24.1, 5318.0], [24.2, 5318.0], [24.3, 5318.0], [24.4, 5318.0], [24.5, 5318.0], [24.6, 5318.0], [24.7, 5318.0], [24.8, 5318.0], [24.9, 5318.0], [25.0, 5345.0], [25.1, 5345.0], [25.2, 5345.0], [25.3, 5345.0], [25.4, 5345.0], [25.5, 5345.0], [25.6, 5345.0], [25.7, 5345.0], [25.8, 5345.0], [25.9, 5345.0], [26.0, 5427.0], [26.1, 5427.0], [26.2, 5427.0], [26.3, 5427.0], [26.4, 5427.0], [26.5, 5427.0], [26.6, 5427.0], [26.7, 5427.0], [26.8, 5427.0], [26.9, 5427.0], [27.0, 5531.0], [27.1, 5531.0], [27.2, 5531.0], [27.3, 5531.0], [27.4, 5531.0], [27.5, 5531.0], [27.6, 5531.0], [27.7, 5531.0], [27.8, 5531.0], [27.9, 5531.0], [28.0, 5727.0], [28.1, 5727.0], [28.2, 5727.0], [28.3, 5727.0], [28.4, 5727.0], [28.5, 5727.0], [28.6, 5727.0], [28.7, 5727.0], [28.8, 5727.0], [28.9, 5727.0], [29.0, 5871.0], [29.1, 5871.0], [29.2, 5871.0], [29.3, 5871.0], [29.4, 5871.0], [29.5, 5871.0], [29.6, 5871.0], [29.7, 5871.0], [29.8, 5871.0], [29.9, 5871.0], [30.0, 5888.0], [30.1, 5888.0], [30.2, 5888.0], [30.3, 5888.0], [30.4, 5888.0], [30.5, 5888.0], [30.6, 5888.0], [30.7, 5888.0], [30.8, 5888.0], [30.9, 5888.0], [31.0, 5985.0], [31.1, 5985.0], [31.2, 5985.0], [31.3, 5985.0], [31.4, 5985.0], [31.5, 5985.0], [31.6, 5985.0], [31.7, 5985.0], [31.8, 5985.0], [31.9, 5985.0], [32.0, 6019.0], [32.1, 6019.0], [32.2, 6019.0], [32.3, 6019.0], [32.4, 6019.0], [32.5, 6019.0], [32.6, 6019.0], [32.7, 6019.0], [32.8, 6019.0], [32.9, 6019.0], [33.0, 6202.0], [33.1, 6202.0], [33.2, 6202.0], [33.3, 6202.0], [33.4, 6202.0], [33.5, 6202.0], [33.6, 6202.0], [33.7, 6202.0], [33.8, 6202.0], [33.9, 6202.0], [34.0, 6216.0], [34.1, 6216.0], [34.2, 6216.0], [34.3, 6216.0], [34.4, 6216.0], [34.5, 6216.0], [34.6, 6216.0], [34.7, 6216.0], [34.8, 6216.0], [34.9, 6216.0], [35.0, 6269.0], [35.1, 6269.0], [35.2, 6269.0], [35.3, 6269.0], [35.4, 6269.0], [35.5, 6269.0], [35.6, 6269.0], [35.7, 6269.0], [35.8, 6269.0], [35.9, 6269.0], [36.0, 6327.0], [36.1, 6327.0], [36.2, 6327.0], [36.3, 6327.0], [36.4, 6327.0], [36.5, 6327.0], [36.6, 6327.0], [36.7, 6327.0], [36.8, 6327.0], [36.9, 6327.0], [37.0, 6350.0], [37.1, 6350.0], [37.2, 6350.0], [37.3, 6350.0], [37.4, 6350.0], [37.5, 6350.0], [37.6, 6350.0], [37.7, 6350.0], [37.8, 6350.0], [37.9, 6350.0], [38.0, 6397.0], [38.1, 6397.0], [38.2, 6397.0], [38.3, 6397.0], [38.4, 6397.0], [38.5, 6397.0], [38.6, 6397.0], [38.7, 6397.0], [38.8, 6397.0], [38.9, 6397.0], [39.0, 6401.0], [39.1, 6401.0], [39.2, 6401.0], [39.3, 6401.0], [39.4, 6401.0], [39.5, 6401.0], [39.6, 6401.0], [39.7, 6401.0], [39.8, 6401.0], [39.9, 6401.0], [40.0, 6413.0], [40.1, 6413.0], [40.2, 6413.0], [40.3, 6413.0], [40.4, 6413.0], [40.5, 6413.0], [40.6, 6413.0], [40.7, 6413.0], [40.8, 6413.0], [40.9, 6413.0], [41.0, 6535.0], [41.1, 6535.0], [41.2, 6535.0], [41.3, 6535.0], [41.4, 6535.0], [41.5, 6535.0], [41.6, 6535.0], [41.7, 6535.0], [41.8, 6535.0], [41.9, 6535.0], [42.0, 6553.0], [42.1, 6553.0], [42.2, 6553.0], [42.3, 6553.0], [42.4, 6553.0], [42.5, 6553.0], [42.6, 6553.0], [42.7, 6553.0], [42.8, 6553.0], [42.9, 6553.0], [43.0, 6562.0], [43.1, 6562.0], [43.2, 6562.0], [43.3, 6562.0], [43.4, 6562.0], [43.5, 6562.0], [43.6, 6562.0], [43.7, 6562.0], [43.8, 6562.0], [43.9, 6562.0], [44.0, 6651.0], [44.1, 6651.0], [44.2, 6651.0], [44.3, 6651.0], [44.4, 6651.0], [44.5, 6651.0], [44.6, 6651.0], [44.7, 6651.0], [44.8, 6651.0], [44.9, 6651.0], [45.0, 6681.0], [45.1, 6681.0], [45.2, 6681.0], [45.3, 6681.0], [45.4, 6681.0], [45.5, 6681.0], [45.6, 6681.0], [45.7, 6681.0], [45.8, 6681.0], [45.9, 6681.0], [46.0, 6741.0], [46.1, 6741.0], [46.2, 6741.0], [46.3, 6741.0], [46.4, 6741.0], [46.5, 6741.0], [46.6, 6741.0], [46.7, 6741.0], [46.8, 6741.0], [46.9, 6741.0], [47.0, 6741.0], [47.1, 6741.0], [47.2, 6741.0], [47.3, 6741.0], [47.4, 6741.0], [47.5, 6741.0], [47.6, 6741.0], [47.7, 6741.0], [47.8, 6741.0], [47.9, 6741.0], [48.0, 7932.0], [48.1, 7932.0], [48.2, 7932.0], [48.3, 7932.0], [48.4, 7932.0], [48.5, 7932.0], [48.6, 7932.0], [48.7, 7932.0], [48.8, 7932.0], [48.9, 7932.0], [49.0, 7972.0], [49.1, 7972.0], [49.2, 7972.0], [49.3, 7972.0], [49.4, 7972.0], [49.5, 7972.0], [49.6, 7972.0], [49.7, 7972.0], [49.8, 7972.0], [49.9, 7972.0], [50.0, 7983.0], [50.1, 7983.0], [50.2, 7983.0], [50.3, 7983.0], [50.4, 7983.0], [50.5, 7983.0], [50.6, 7983.0], [50.7, 7983.0], [50.8, 7983.0], [50.9, 7983.0], [51.0, 8030.0], [51.1, 8030.0], [51.2, 8030.0], [51.3, 8030.0], [51.4, 8030.0], [51.5, 8030.0], [51.6, 8030.0], [51.7, 8030.0], [51.8, 8030.0], [51.9, 8030.0], [52.0, 8038.0], [52.1, 8038.0], [52.2, 8038.0], [52.3, 8038.0], [52.4, 8038.0], [52.5, 8038.0], [52.6, 8038.0], [52.7, 8038.0], [52.8, 8038.0], [52.9, 8038.0], [53.0, 8127.0], [53.1, 8127.0], [53.2, 8127.0], [53.3, 8127.0], [53.4, 8127.0], [53.5, 8127.0], [53.6, 8127.0], [53.7, 8127.0], [53.8, 8127.0], [53.9, 8127.0], [54.0, 8140.0], [54.1, 8140.0], [54.2, 8140.0], [54.3, 8140.0], [54.4, 8140.0], [54.5, 8140.0], [54.6, 8140.0], [54.7, 8140.0], [54.8, 8140.0], [54.9, 8140.0], [55.0, 8148.0], [55.1, 8148.0], [55.2, 8148.0], [55.3, 8148.0], [55.4, 8148.0], [55.5, 8148.0], [55.6, 8148.0], [55.7, 8148.0], [55.8, 8148.0], [55.9, 8148.0], [56.0, 8160.0], [56.1, 8160.0], [56.2, 8160.0], [56.3, 8160.0], [56.4, 8160.0], [56.5, 8160.0], [56.6, 8160.0], [56.7, 8160.0], [56.8, 8160.0], [56.9, 8160.0], [57.0, 8279.0], [57.1, 8279.0], [57.2, 8279.0], [57.3, 8279.0], [57.4, 8279.0], [57.5, 8279.0], [57.6, 8279.0], [57.7, 8279.0], [57.8, 8279.0], [57.9, 8279.0], [58.0, 8300.0], [58.1, 8300.0], [58.2, 8300.0], [58.3, 8300.0], [58.4, 8300.0], [58.5, 8300.0], [58.6, 8300.0], [58.7, 8300.0], [58.8, 8300.0], [58.9, 8300.0], [59.0, 8311.0], [59.1, 8311.0], [59.2, 8311.0], [59.3, 8311.0], [59.4, 8311.0], [59.5, 8311.0], [59.6, 8311.0], [59.7, 8311.0], [59.8, 8311.0], [59.9, 8311.0], [60.0, 8373.0], [60.1, 8373.0], [60.2, 8373.0], [60.3, 8373.0], [60.4, 8373.0], [60.5, 8373.0], [60.6, 8373.0], [60.7, 8373.0], [60.8, 8373.0], [60.9, 8373.0], [61.0, 8375.0], [61.1, 8375.0], [61.2, 8375.0], [61.3, 8375.0], [61.4, 8375.0], [61.5, 8375.0], [61.6, 8375.0], [61.7, 8375.0], [61.8, 8375.0], [61.9, 8375.0], [62.0, 8515.0], [62.1, 8515.0], [62.2, 8515.0], [62.3, 8515.0], [62.4, 8515.0], [62.5, 8515.0], [62.6, 8515.0], [62.7, 8515.0], [62.8, 8515.0], [62.9, 8515.0], [63.0, 8535.0], [63.1, 8535.0], [63.2, 8535.0], [63.3, 8535.0], [63.4, 8535.0], [63.5, 8535.0], [63.6, 8535.0], [63.7, 8535.0], [63.8, 8535.0], [63.9, 8535.0], [64.0, 8537.0], [64.1, 8537.0], [64.2, 8537.0], [64.3, 8537.0], [64.4, 8537.0], [64.5, 8537.0], [64.6, 8537.0], [64.7, 8537.0], [64.8, 8537.0], [64.9, 8537.0], [65.0, 8539.0], [65.1, 8539.0], [65.2, 8539.0], [65.3, 8539.0], [65.4, 8539.0], [65.5, 8539.0], [65.6, 8539.0], [65.7, 8539.0], [65.8, 8539.0], [65.9, 8539.0], [66.0, 8543.0], [66.1, 8543.0], [66.2, 8543.0], [66.3, 8543.0], [66.4, 8543.0], [66.5, 8543.0], [66.6, 8543.0], [66.7, 8543.0], [66.8, 8543.0], [66.9, 8543.0], [67.0, 8583.0], [67.1, 8583.0], [67.2, 8583.0], [67.3, 8583.0], [67.4, 8583.0], [67.5, 8583.0], [67.6, 8583.0], [67.7, 8583.0], [67.8, 8583.0], [67.9, 8583.0], [68.0, 16034.0], [68.1, 16034.0], [68.2, 16034.0], [68.3, 16034.0], [68.4, 16034.0], [68.5, 16034.0], [68.6, 16034.0], [68.7, 16034.0], [68.8, 16034.0], [68.9, 16034.0], [69.0, 16035.0], [69.1, 16035.0], [69.2, 16035.0], [69.3, 16035.0], [69.4, 16035.0], [69.5, 16035.0], [69.6, 16035.0], [69.7, 16035.0], [69.8, 16035.0], [69.9, 16035.0], [70.0, 16061.0], [70.1, 16061.0], [70.2, 16061.0], [70.3, 16061.0], [70.4, 16061.0], [70.5, 16061.0], [70.6, 16061.0], [70.7, 16061.0], [70.8, 16061.0], [70.9, 16061.0], [71.0, 16071.0], [71.1, 16071.0], [71.2, 16071.0], [71.3, 16071.0], [71.4, 16071.0], [71.5, 16071.0], [71.6, 16071.0], [71.7, 16071.0], [71.8, 16071.0], [71.9, 16071.0], [72.0, 16167.0], [72.1, 16167.0], [72.2, 16167.0], [72.3, 16167.0], [72.4, 16167.0], [72.5, 16167.0], [72.6, 16167.0], [72.7, 16167.0], [72.8, 16167.0], [72.9, 16167.0], [73.0, 16298.0], [73.1, 16298.0], [73.2, 16298.0], [73.3, 16298.0], [73.4, 16298.0], [73.5, 16298.0], [73.6, 16298.0], [73.7, 16298.0], [73.8, 16298.0], [73.9, 16298.0], [74.0, 16312.0], [74.1, 16312.0], [74.2, 16312.0], [74.3, 16312.0], [74.4, 16312.0], [74.5, 16312.0], [74.6, 16312.0], [74.7, 16312.0], [74.8, 16312.0], [74.9, 16312.0], [75.0, 16329.0], [75.1, 16329.0], [75.2, 16329.0], [75.3, 16329.0], [75.4, 16329.0], [75.5, 16329.0], [75.6, 16329.0], [75.7, 16329.0], [75.8, 16329.0], [75.9, 16329.0], [76.0, 16339.0], [76.1, 16339.0], [76.2, 16339.0], [76.3, 16339.0], [76.4, 16339.0], [76.5, 16339.0], [76.6, 16339.0], [76.7, 16339.0], [76.8, 16339.0], [76.9, 16339.0], [77.0, 16343.0], [77.1, 16343.0], [77.2, 16343.0], [77.3, 16343.0], [77.4, 16343.0], [77.5, 16343.0], [77.6, 16343.0], [77.7, 16343.0], [77.8, 16343.0], [77.9, 16343.0], [78.0, 16344.0], [78.1, 16344.0], [78.2, 16344.0], [78.3, 16344.0], [78.4, 16344.0], [78.5, 16344.0], [78.6, 16344.0], [78.7, 16344.0], [78.8, 16344.0], [78.9, 16344.0], [79.0, 16352.0], [79.1, 16352.0], [79.2, 16352.0], [79.3, 16352.0], [79.4, 16352.0], [79.5, 16352.0], [79.6, 16352.0], [79.7, 16352.0], [79.8, 16352.0], [79.9, 16352.0], [80.0, 16390.0], [80.1, 16390.0], [80.2, 16390.0], [80.3, 16390.0], [80.4, 16390.0], [80.5, 16390.0], [80.6, 16390.0], [80.7, 16390.0], [80.8, 16390.0], [80.9, 16390.0], [81.0, 16408.0], [81.1, 16408.0], [81.2, 16408.0], [81.3, 16408.0], [81.4, 16408.0], [81.5, 16408.0], [81.6, 16408.0], [81.7, 16408.0], [81.8, 16408.0], [81.9, 16408.0], [82.0, 16428.0], [82.1, 16428.0], [82.2, 16428.0], [82.3, 16428.0], [82.4, 16428.0], [82.5, 16428.0], [82.6, 16428.0], [82.7, 16428.0], [82.8, 16428.0], [82.9, 16428.0], [83.0, 16491.0], [83.1, 16491.0], [83.2, 16491.0], [83.3, 16491.0], [83.4, 16491.0], [83.5, 16491.0], [83.6, 16491.0], [83.7, 16491.0], [83.8, 16491.0], [83.9, 16491.0], [84.0, 16507.0], [84.1, 16507.0], [84.2, 16507.0], [84.3, 16507.0], [84.4, 16507.0], [84.5, 16507.0], [84.6, 16507.0], [84.7, 16507.0], [84.8, 16507.0], [84.9, 16507.0], [85.0, 16517.0], [85.1, 16517.0], [85.2, 16517.0], [85.3, 16517.0], [85.4, 16517.0], [85.5, 16517.0], [85.6, 16517.0], [85.7, 16517.0], [85.8, 16517.0], [85.9, 16517.0], [86.0, 22055.0], [86.1, 22055.0], [86.2, 22055.0], [86.3, 22055.0], [86.4, 22055.0], [86.5, 22055.0], [86.6, 22055.0], [86.7, 22055.0], [86.8, 22055.0], [86.9, 22055.0], [87.0, 22064.0], [87.1, 22064.0], [87.2, 22064.0], [87.3, 22064.0], [87.4, 22064.0], [87.5, 22064.0], [87.6, 22064.0], [87.7, 22064.0], [87.8, 22064.0], [87.9, 22064.0], [88.0, 22075.0], [88.1, 22075.0], [88.2, 22075.0], [88.3, 22075.0], [88.4, 22075.0], [88.5, 22075.0], [88.6, 22075.0], [88.7, 22075.0], [88.8, 22075.0], [88.9, 22075.0], [89.0, 22092.0], [89.1, 22092.0], [89.2, 22092.0], [89.3, 22092.0], [89.4, 22092.0], [89.5, 22092.0], [89.6, 22092.0], [89.7, 22092.0], [89.8, 22092.0], [89.9, 22092.0], [90.0, 22136.0], [90.1, 22136.0], [90.2, 22136.0], [90.3, 22136.0], [90.4, 22136.0], [90.5, 22136.0], [90.6, 22136.0], [90.7, 22136.0], [90.8, 22136.0], [90.9, 22136.0], [91.0, 22138.0], [91.1, 22138.0], [91.2, 22138.0], [91.3, 22138.0], [91.4, 22138.0], [91.5, 22138.0], [91.6, 22138.0], [91.7, 22138.0], [91.8, 22138.0], [91.9, 22138.0], [92.0, 22138.0], [92.1, 22138.0], [92.2, 22138.0], [92.3, 22138.0], [92.4, 22138.0], [92.5, 22138.0], [92.6, 22138.0], [92.7, 22138.0], [92.8, 22138.0], [92.9, 22138.0], [93.0, 22161.0], [93.1, 22161.0], [93.2, 22161.0], [93.3, 22161.0], [93.4, 22161.0], [93.5, 22161.0], [93.6, 22161.0], [93.7, 22161.0], [93.8, 22161.0], [93.9, 22161.0], [94.0, 22237.0], [94.1, 22237.0], [94.2, 22237.0], [94.3, 22237.0], [94.4, 22237.0], [94.5, 22237.0], [94.6, 22237.0], [94.7, 22237.0], [94.8, 22237.0], [94.9, 22237.0], [95.0, 22269.0], [95.1, 22269.0], [95.2, 22269.0], [95.3, 22269.0], [95.4, 22269.0], [95.5, 22269.0], [95.6, 22269.0], [95.7, 22269.0], [95.8, 22269.0], [95.9, 22269.0], [96.0, 22284.0], [96.1, 22284.0], [96.2, 22284.0], [96.3, 22284.0], [96.4, 22284.0], [96.5, 22284.0], [96.6, 22284.0], [96.7, 22284.0], [96.8, 22284.0], [96.9, 22284.0], [97.0, 22336.0], [97.1, 22336.0], [97.2, 22336.0], [97.3, 22336.0], [97.4, 22336.0], [97.5, 22336.0], [97.6, 22336.0], [97.7, 22336.0], [97.8, 22336.0], [97.9, 22336.0], [98.0, 22343.0], [98.1, 22343.0], [98.2, 22343.0], [98.3, 22343.0], [98.4, 22343.0], [98.5, 22343.0], [98.6, 22343.0], [98.7, 22343.0], [98.8, 22343.0], [98.9, 22343.0], [99.0, 22354.0], [99.1, 22354.0], [99.2, 22354.0], [99.3, 22354.0], [99.4, 22354.0], [99.5, 22354.0], [99.6, 22354.0], [99.7, 22354.0], [99.8, 22354.0], [99.9, 22354.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 7.0, "series": [{"data": [[8300.0, 4.0], [8200.0, 1.0], [8500.0, 6.0], [16000.0, 4.0], [16200.0, 1.0], [16300.0, 7.0], [16100.0, 1.0], [16400.0, 3.0], [16500.0, 2.0], [1200.0, 2.0], [1400.0, 1.0], [22000.0, 4.0], [22100.0, 4.0], [22300.0, 3.0], [22200.0, 3.0], [1600.0, 3.0], [1700.0, 3.0], [1900.0, 2.0], [3300.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 3.0], [4300.0, 2.0], [5100.0, 1.0], [5000.0, 2.0], [5300.0, 2.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [5900.0, 1.0], [6000.0, 1.0], [6200.0, 3.0], [6300.0, 3.0], [6400.0, 2.0], [6500.0, 3.0], [6600.0, 2.0], [6700.0, 2.0], [7900.0, 3.0], [8000.0, 2.0], [8100.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 97.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 97.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 51.319999999999986, "minX": 1.75204668E12, "maxY": 51.319999999999986, "series": [{"data": [[1.75204668E12, 51.319999999999986]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75204668E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1593.8750000000002, "minX": 2.0, "maxY": 22354.0, "series": [{"data": [[2.0, 22253.0], [4.0, 22313.5], [5.0, 22354.0], [6.0, 22336.0], [8.0, 22059.5], [9.0, 22136.0], [10.0, 22161.0], [12.0, 22138.0], [13.0, 22075.0], [14.0, 22092.0], [15.0, 16517.0], [16.0, 16343.0], [17.0, 16344.0], [18.0, 16035.0], [20.0, 16259.5], [22.0, 16312.0], [23.0, 16339.0], [28.0, 16393.333333333336], [29.0, 16491.0], [31.0, 16066.0], [32.0, 16034.0], [34.0, 8235.5], [36.0, 8144.0], [39.0, 8547.0], [40.0, 8539.0], [44.0, 8412.75], [47.0, 8373.0], [46.0, 8251.0], [49.0, 8038.0], [48.0, 8030.0], [51.0, 7977.5], [53.0, 6327.0], [52.0, 7932.0], [55.0, 6397.0], [54.0, 6553.0], [59.0, 6562.0], [61.0, 6631.666666666667], [63.0, 6535.0], [62.0, 6511.333333333333], [66.0, 5985.0], [65.0, 6019.0], [64.0, 5871.0], [71.0, 5888.0], [70.0, 6309.5], [68.0, 6308.5], [75.0, 5427.0], [74.0, 5318.0], [73.0, 5531.0], [72.0, 5727.0], [79.0, 5345.0], [78.0, 5187.0], [77.0, 5099.0], [76.0, 5005.0], [82.0, 4242.0], [81.0, 4360.0], [80.0, 3875.0], [87.0, 3984.0], [86.0, 4070.0], [85.0, 4231.0], [84.0, 4310.5], [91.0, 1904.0], [90.0, 1623.0], [89.0, 3306.0], [88.0, 3727.0], [92.0, 1922.0], [100.0, 1593.8750000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.319999999999986, 9915.85]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 196.66666666666666, "minX": 1.75204668E12, "maxY": 101336.86666666667, "series": [{"data": [[1.75204668E12, 101336.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75204668E12, 196.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75204668E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9915.85, "minX": 1.75204668E12, "maxY": 9915.85, "series": [{"data": [[1.75204668E12, 9915.85]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75204668E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 9798.75, "minX": 1.75204668E12, "maxY": 9798.75, "series": [{"data": [[1.75204668E12, 9798.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75204668E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 8307.5, "minX": 1.75204668E12, "maxY": 8307.5, "series": [{"data": [[1.75204668E12, 8307.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75204668E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1270.0, "minX": 1.75204668E12, "maxY": 22354.0, "series": [{"data": [[1.75204668E12, 22354.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75204668E12, 1270.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75204668E12, 22131.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75204668E12, 22353.89]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75204668E12, 7977.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75204668E12, 22267.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75204668E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1684.0, "minX": 1.0, "maxY": 22149.5, "series": [{"data": [[1.0, 3306.0], [4.0, 6081.5], [8.0, 5331.5], [16.0, 8342.0], [18.0, 16341.0], [19.0, 6397.0], [5.0, 4285.0], [11.0, 1684.0], [14.0, 22149.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1660.0, "minX": 1.0, "maxY": 22112.0, "series": [{"data": [[1.0, 3299.0], [4.0, 5923.5], [8.0, 5214.5], [16.0, 8152.0], [18.0, 16144.0], [19.0, 6259.0], [5.0, 4273.0], [11.0, 1660.0], [14.0, 22112.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75204668E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75204668E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75204668E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75204668E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75204668E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75204668E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75204668E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75204668E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75204668E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75204668E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75204668E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75204668E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

