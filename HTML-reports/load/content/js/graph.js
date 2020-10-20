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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 21578.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 5.0], [0.3, 6.0], [0.4, 6.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 10.0], [2.0, 11.0], [2.1, 12.0], [2.2, 13.0], [2.3, 14.0], [2.4, 15.0], [2.5, 16.0], [2.6, 17.0], [2.7, 17.0], [2.8, 18.0], [2.9, 19.0], [3.0, 20.0], [3.1, 21.0], [3.2, 22.0], [3.3, 23.0], [3.4, 23.0], [3.5, 24.0], [3.6, 25.0], [3.7, 25.0], [3.8, 26.0], [3.9, 27.0], [4.0, 28.0], [4.1, 28.0], [4.2, 29.0], [4.3, 30.0], [4.4, 30.0], [4.5, 31.0], [4.6, 31.0], [4.7, 32.0], [4.8, 32.0], [4.9, 33.0], [5.0, 33.0], [5.1, 34.0], [5.2, 35.0], [5.3, 35.0], [5.4, 36.0], [5.5, 36.0], [5.6, 37.0], [5.7, 37.0], [5.8, 38.0], [5.9, 38.0], [6.0, 39.0], [6.1, 40.0], [6.2, 40.0], [6.3, 41.0], [6.4, 41.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 44.0], [7.2, 44.0], [7.3, 44.0], [7.4, 44.0], [7.5, 45.0], [7.6, 45.0], [7.7, 46.0], [7.8, 46.0], [7.9, 47.0], [8.0, 47.0], [8.1, 48.0], [8.2, 48.0], [8.3, 48.0], [8.4, 49.0], [8.5, 49.0], [8.6, 49.0], [8.7, 49.0], [8.8, 50.0], [8.9, 50.0], [9.0, 51.0], [9.1, 51.0], [9.2, 51.0], [9.3, 52.0], [9.4, 52.0], [9.5, 53.0], [9.6, 53.0], [9.7, 53.0], [9.8, 54.0], [9.9, 55.0], [10.0, 55.0], [10.1, 55.0], [10.2, 56.0], [10.3, 56.0], [10.4, 57.0], [10.5, 57.0], [10.6, 57.0], [10.7, 58.0], [10.8, 58.0], [10.9, 58.0], [11.0, 59.0], [11.1, 59.0], [11.2, 60.0], [11.3, 60.0], [11.4, 61.0], [11.5, 61.0], [11.6, 62.0], [11.7, 63.0], [11.8, 63.0], [11.9, 64.0], [12.0, 65.0], [12.1, 65.0], [12.2, 66.0], [12.3, 67.0], [12.4, 67.0], [12.5, 68.0], [12.6, 69.0], [12.7, 69.0], [12.8, 70.0], [12.9, 71.0], [13.0, 71.0], [13.1, 72.0], [13.2, 72.0], [13.3, 73.0], [13.4, 73.0], [13.5, 74.0], [13.6, 75.0], [13.7, 76.0], [13.8, 76.0], [13.9, 77.0], [14.0, 78.0], [14.1, 79.0], [14.2, 79.0], [14.3, 80.0], [14.4, 81.0], [14.5, 82.0], [14.6, 82.0], [14.7, 83.0], [14.8, 84.0], [14.9, 84.0], [15.0, 85.0], [15.1, 86.0], [15.2, 87.0], [15.3, 87.0], [15.4, 88.0], [15.5, 89.0], [15.6, 90.0], [15.7, 91.0], [15.8, 91.0], [15.9, 92.0], [16.0, 93.0], [16.1, 94.0], [16.2, 95.0], [16.3, 96.0], [16.4, 97.0], [16.5, 98.0], [16.6, 99.0], [16.7, 100.0], [16.8, 100.0], [16.9, 101.0], [17.0, 102.0], [17.1, 102.0], [17.2, 103.0], [17.3, 104.0], [17.4, 105.0], [17.5, 106.0], [17.6, 106.0], [17.7, 107.0], [17.8, 108.0], [17.9, 109.0], [18.0, 110.0], [18.1, 111.0], [18.2, 112.0], [18.3, 113.0], [18.4, 114.0], [18.5, 114.0], [18.6, 115.0], [18.7, 116.0], [18.8, 117.0], [18.9, 117.0], [19.0, 118.0], [19.1, 118.0], [19.2, 119.0], [19.3, 120.0], [19.4, 121.0], [19.5, 122.0], [19.6, 123.0], [19.7, 124.0], [19.8, 124.0], [19.9, 125.0], [20.0, 127.0], [20.1, 129.0], [20.2, 130.0], [20.3, 131.0], [20.4, 133.0], [20.5, 134.0], [20.6, 136.0], [20.7, 137.0], [20.8, 139.0], [20.9, 141.0], [21.0, 143.0], [21.1, 144.0], [21.2, 147.0], [21.3, 149.0], [21.4, 151.0], [21.5, 152.0], [21.6, 155.0], [21.7, 157.0], [21.8, 159.0], [21.9, 161.0], [22.0, 163.0], [22.1, 165.0], [22.2, 166.0], [22.3, 169.0], [22.4, 172.0], [22.5, 173.0], [22.6, 175.0], [22.7, 177.0], [22.8, 180.0], [22.9, 183.0], [23.0, 185.0], [23.1, 189.0], [23.2, 193.0], [23.3, 197.0], [23.4, 201.0], [23.5, 207.0], [23.6, 210.0], [23.7, 215.0], [23.8, 221.0], [23.9, 225.0], [24.0, 231.0], [24.1, 236.0], [24.2, 239.0], [24.3, 239.0], [24.4, 242.0], [24.5, 242.0], [24.6, 243.0], [24.7, 243.0], [24.8, 244.0], [24.9, 244.0], [25.0, 244.0], [25.1, 244.0], [25.2, 245.0], [25.3, 245.0], [25.4, 246.0], [25.5, 247.0], [25.6, 247.0], [25.7, 247.0], [25.8, 247.0], [25.9, 248.0], [26.0, 248.0], [26.1, 248.0], [26.2, 248.0], [26.3, 248.0], [26.4, 249.0], [26.5, 249.0], [26.6, 249.0], [26.7, 249.0], [26.8, 249.0], [26.9, 249.0], [27.0, 250.0], [27.1, 250.0], [27.2, 250.0], [27.3, 250.0], [27.4, 250.0], [27.5, 250.0], [27.6, 251.0], [27.7, 251.0], [27.8, 251.0], [27.9, 251.0], [28.0, 251.0], [28.1, 252.0], [28.2, 252.0], [28.3, 252.0], [28.4, 252.0], [28.5, 252.0], [28.6, 252.0], [28.7, 252.0], [28.8, 253.0], [28.9, 253.0], [29.0, 253.0], [29.1, 253.0], [29.2, 253.0], [29.3, 253.0], [29.4, 253.0], [29.5, 254.0], [29.6, 254.0], [29.7, 254.0], [29.8, 254.0], [29.9, 254.0], [30.0, 255.0], [30.1, 255.0], [30.2, 255.0], [30.3, 255.0], [30.4, 256.0], [30.5, 256.0], [30.6, 256.0], [30.7, 256.0], [30.8, 257.0], [30.9, 257.0], [31.0, 257.0], [31.1, 257.0], [31.2, 258.0], [31.3, 258.0], [31.4, 258.0], [31.5, 259.0], [31.6, 259.0], [31.7, 259.0], [31.8, 259.0], [31.9, 259.0], [32.0, 260.0], [32.1, 260.0], [32.2, 260.0], [32.3, 260.0], [32.4, 261.0], [32.5, 261.0], [32.6, 261.0], [32.7, 262.0], [32.8, 262.0], [32.9, 262.0], [33.0, 262.0], [33.1, 263.0], [33.2, 263.0], [33.3, 263.0], [33.4, 263.0], [33.5, 264.0], [33.6, 264.0], [33.7, 264.0], [33.8, 265.0], [33.9, 265.0], [34.0, 266.0], [34.1, 266.0], [34.2, 266.0], [34.3, 266.0], [34.4, 267.0], [34.5, 267.0], [34.6, 269.0], [34.7, 271.0], [34.8, 273.0], [34.9, 274.0], [35.0, 275.0], [35.1, 276.0], [35.2, 277.0], [35.3, 278.0], [35.4, 279.0], [35.5, 279.0], [35.6, 280.0], [35.7, 281.0], [35.8, 281.0], [35.9, 282.0], [36.0, 282.0], [36.1, 283.0], [36.2, 283.0], [36.3, 284.0], [36.4, 285.0], [36.5, 285.0], [36.6, 286.0], [36.7, 286.0], [36.8, 287.0], [36.9, 287.0], [37.0, 288.0], [37.1, 288.0], [37.2, 289.0], [37.3, 289.0], [37.4, 289.0], [37.5, 290.0], [37.6, 290.0], [37.7, 291.0], [37.8, 291.0], [37.9, 291.0], [38.0, 292.0], [38.1, 292.0], [38.2, 292.0], [38.3, 293.0], [38.4, 293.0], [38.5, 294.0], [38.6, 294.0], [38.7, 294.0], [38.8, 295.0], [38.9, 295.0], [39.0, 295.0], [39.1, 296.0], [39.2, 296.0], [39.3, 297.0], [39.4, 297.0], [39.5, 297.0], [39.6, 297.0], [39.7, 298.0], [39.8, 298.0], [39.9, 298.0], [40.0, 299.0], [40.1, 299.0], [40.2, 299.0], [40.3, 300.0], [40.4, 300.0], [40.5, 300.0], [40.6, 301.0], [40.7, 301.0], [40.8, 301.0], [40.9, 301.0], [41.0, 302.0], [41.1, 302.0], [41.2, 302.0], [41.3, 303.0], [41.4, 303.0], [41.5, 304.0], [41.6, 304.0], [41.7, 304.0], [41.8, 305.0], [41.9, 305.0], [42.0, 305.0], [42.1, 305.0], [42.2, 306.0], [42.3, 306.0], [42.4, 306.0], [42.5, 306.0], [42.6, 307.0], [42.7, 307.0], [42.8, 307.0], [42.9, 308.0], [43.0, 308.0], [43.1, 308.0], [43.2, 308.0], [43.3, 309.0], [43.4, 309.0], [43.5, 309.0], [43.6, 309.0], [43.7, 310.0], [43.8, 310.0], [43.9, 310.0], [44.0, 310.0], [44.1, 311.0], [44.2, 311.0], [44.3, 311.0], [44.4, 311.0], [44.5, 312.0], [44.6, 312.0], [44.7, 312.0], [44.8, 312.0], [44.9, 313.0], [45.0, 313.0], [45.1, 313.0], [45.2, 313.0], [45.3, 314.0], [45.4, 314.0], [45.5, 314.0], [45.6, 314.0], [45.7, 315.0], [45.8, 315.0], [45.9, 315.0], [46.0, 315.0], [46.1, 316.0], [46.2, 316.0], [46.3, 316.0], [46.4, 316.0], [46.5, 317.0], [46.6, 317.0], [46.7, 317.0], [46.8, 317.0], [46.9, 318.0], [47.0, 318.0], [47.1, 318.0], [47.2, 318.0], [47.3, 319.0], [47.4, 319.0], [47.5, 319.0], [47.6, 319.0], [47.7, 319.0], [47.8, 320.0], [47.9, 320.0], [48.0, 320.0], [48.1, 320.0], [48.2, 321.0], [48.3, 321.0], [48.4, 321.0], [48.5, 321.0], [48.6, 322.0], [48.7, 322.0], [48.8, 322.0], [48.9, 323.0], [49.0, 323.0], [49.1, 323.0], [49.2, 324.0], [49.3, 324.0], [49.4, 324.0], [49.5, 324.0], [49.6, 325.0], [49.7, 325.0], [49.8, 325.0], [49.9, 325.0], [50.0, 326.0], [50.1, 326.0], [50.2, 326.0], [50.3, 326.0], [50.4, 327.0], [50.5, 327.0], [50.6, 327.0], [50.7, 327.0], [50.8, 328.0], [50.9, 328.0], [51.0, 328.0], [51.1, 329.0], [51.2, 329.0], [51.3, 329.0], [51.4, 329.0], [51.5, 330.0], [51.6, 330.0], [51.7, 330.0], [51.8, 331.0], [51.9, 331.0], [52.0, 331.0], [52.1, 331.0], [52.2, 332.0], [52.3, 332.0], [52.4, 332.0], [52.5, 332.0], [52.6, 333.0], [52.7, 333.0], [52.8, 333.0], [52.9, 334.0], [53.0, 334.0], [53.1, 334.0], [53.2, 335.0], [53.3, 335.0], [53.4, 335.0], [53.5, 335.0], [53.6, 336.0], [53.7, 336.0], [53.8, 336.0], [53.9, 336.0], [54.0, 337.0], [54.1, 337.0], [54.2, 337.0], [54.3, 338.0], [54.4, 338.0], [54.5, 338.0], [54.6, 339.0], [54.7, 339.0], [54.8, 339.0], [54.9, 340.0], [55.0, 340.0], [55.1, 340.0], [55.2, 341.0], [55.3, 341.0], [55.4, 341.0], [55.5, 341.0], [55.6, 342.0], [55.7, 342.0], [55.8, 342.0], [55.9, 342.0], [56.0, 342.0], [56.1, 342.0], [56.2, 343.0], [56.3, 343.0], [56.4, 343.0], [56.5, 343.0], [56.6, 343.0], [56.7, 343.0], [56.8, 343.0], [56.9, 344.0], [57.0, 344.0], [57.1, 344.0], [57.2, 344.0], [57.3, 344.0], [57.4, 344.0], [57.5, 345.0], [57.6, 345.0], [57.7, 345.0], [57.8, 346.0], [57.9, 346.0], [58.0, 346.0], [58.1, 346.0], [58.2, 347.0], [58.3, 347.0], [58.4, 347.0], [58.5, 347.0], [58.6, 347.0], [58.7, 348.0], [58.8, 348.0], [58.9, 348.0], [59.0, 348.0], [59.1, 349.0], [59.2, 349.0], [59.3, 349.0], [59.4, 350.0], [59.5, 350.0], [59.6, 350.0], [59.7, 351.0], [59.8, 351.0], [59.9, 352.0], [60.0, 352.0], [60.1, 352.0], [60.2, 353.0], [60.3, 353.0], [60.4, 353.0], [60.5, 353.0], [60.6, 354.0], [60.7, 354.0], [60.8, 354.0], [60.9, 355.0], [61.0, 355.0], [61.1, 355.0], [61.2, 356.0], [61.3, 356.0], [61.4, 357.0], [61.5, 357.0], [61.6, 357.0], [61.7, 358.0], [61.8, 358.0], [61.9, 358.0], [62.0, 359.0], [62.1, 359.0], [62.2, 360.0], [62.3, 360.0], [62.4, 361.0], [62.5, 361.0], [62.6, 361.0], [62.7, 361.0], [62.8, 362.0], [62.9, 362.0], [63.0, 363.0], [63.1, 363.0], [63.2, 363.0], [63.3, 364.0], [63.4, 364.0], [63.5, 364.0], [63.6, 365.0], [63.7, 365.0], [63.8, 366.0], [63.9, 366.0], [64.0, 366.0], [64.1, 367.0], [64.2, 367.0], [64.3, 367.0], [64.4, 368.0], [64.5, 368.0], [64.6, 368.0], [64.7, 369.0], [64.8, 369.0], [64.9, 370.0], [65.0, 370.0], [65.1, 370.0], [65.2, 371.0], [65.3, 371.0], [65.4, 371.0], [65.5, 372.0], [65.6, 372.0], [65.7, 373.0], [65.8, 373.0], [65.9, 374.0], [66.0, 374.0], [66.1, 374.0], [66.2, 375.0], [66.3, 375.0], [66.4, 376.0], [66.5, 376.0], [66.6, 377.0], [66.7, 377.0], [66.8, 377.0], [66.9, 378.0], [67.0, 378.0], [67.1, 379.0], [67.2, 379.0], [67.3, 380.0], [67.4, 380.0], [67.5, 380.0], [67.6, 381.0], [67.7, 381.0], [67.8, 382.0], [67.9, 382.0], [68.0, 383.0], [68.1, 383.0], [68.2, 383.0], [68.3, 384.0], [68.4, 384.0], [68.5, 385.0], [68.6, 385.0], [68.7, 386.0], [68.8, 386.0], [68.9, 387.0], [69.0, 387.0], [69.1, 387.0], [69.2, 388.0], [69.3, 388.0], [69.4, 389.0], [69.5, 389.0], [69.6, 390.0], [69.7, 390.0], [69.8, 391.0], [69.9, 391.0], [70.0, 392.0], [70.1, 392.0], [70.2, 393.0], [70.3, 393.0], [70.4, 394.0], [70.5, 395.0], [70.6, 395.0], [70.7, 396.0], [70.8, 396.0], [70.9, 397.0], [71.0, 397.0], [71.1, 398.0], [71.2, 398.0], [71.3, 399.0], [71.4, 400.0], [71.5, 400.0], [71.6, 401.0], [71.7, 401.0], [71.8, 402.0], [71.9, 403.0], [72.0, 403.0], [72.1, 404.0], [72.2, 405.0], [72.3, 405.0], [72.4, 406.0], [72.5, 406.0], [72.6, 406.0], [72.7, 407.0], [72.8, 408.0], [72.9, 408.0], [73.0, 409.0], [73.1, 409.0], [73.2, 410.0], [73.3, 410.0], [73.4, 411.0], [73.5, 412.0], [73.6, 412.0], [73.7, 413.0], [73.8, 414.0], [73.9, 415.0], [74.0, 415.0], [74.1, 416.0], [74.2, 416.0], [74.3, 417.0], [74.4, 417.0], [74.5, 418.0], [74.6, 419.0], [74.7, 420.0], [74.8, 420.0], [74.9, 421.0], [75.0, 422.0], [75.1, 422.0], [75.2, 423.0], [75.3, 423.0], [75.4, 424.0], [75.5, 425.0], [75.6, 426.0], [75.7, 426.0], [75.8, 427.0], [75.9, 427.0], [76.0, 428.0], [76.1, 429.0], [76.2, 430.0], [76.3, 430.0], [76.4, 431.0], [76.5, 432.0], [76.6, 432.0], [76.7, 433.0], [76.8, 434.0], [76.9, 435.0], [77.0, 436.0], [77.1, 436.0], [77.2, 437.0], [77.3, 438.0], [77.4, 439.0], [77.5, 440.0], [77.6, 441.0], [77.7, 441.0], [77.8, 442.0], [77.9, 443.0], [78.0, 444.0], [78.1, 445.0], [78.2, 445.0], [78.3, 446.0], [78.4, 447.0], [78.5, 447.0], [78.6, 448.0], [78.7, 449.0], [78.8, 450.0], [78.9, 450.0], [79.0, 451.0], [79.1, 452.0], [79.2, 452.0], [79.3, 453.0], [79.4, 454.0], [79.5, 454.0], [79.6, 455.0], [79.7, 457.0], [79.8, 457.0], [79.9, 458.0], [80.0, 459.0], [80.1, 461.0], [80.2, 461.0], [80.3, 462.0], [80.4, 463.0], [80.5, 464.0], [80.6, 465.0], [80.7, 465.0], [80.8, 466.0], [80.9, 467.0], [81.0, 468.0], [81.1, 469.0], [81.2, 470.0], [81.3, 470.0], [81.4, 471.0], [81.5, 472.0], [81.6, 473.0], [81.7, 474.0], [81.8, 475.0], [81.9, 476.0], [82.0, 477.0], [82.1, 478.0], [82.2, 479.0], [82.3, 481.0], [82.4, 482.0], [82.5, 483.0], [82.6, 484.0], [82.7, 485.0], [82.8, 486.0], [82.9, 487.0], [83.0, 488.0], [83.1, 489.0], [83.2, 490.0], [83.3, 492.0], [83.4, 493.0], [83.5, 494.0], [83.6, 495.0], [83.7, 496.0], [83.8, 497.0], [83.9, 498.0], [84.0, 499.0], [84.1, 500.0], [84.2, 501.0], [84.3, 502.0], [84.4, 503.0], [84.5, 504.0], [84.6, 505.0], [84.7, 506.0], [84.8, 508.0], [84.9, 508.0], [85.0, 510.0], [85.1, 511.0], [85.2, 513.0], [85.3, 514.0], [85.4, 516.0], [85.5, 517.0], [85.6, 518.0], [85.7, 520.0], [85.8, 521.0], [85.9, 522.0], [86.0, 523.0], [86.1, 525.0], [86.2, 526.0], [86.3, 528.0], [86.4, 529.0], [86.5, 530.0], [86.6, 531.0], [86.7, 533.0], [86.8, 534.0], [86.9, 536.0], [87.0, 537.0], [87.1, 539.0], [87.2, 540.0], [87.3, 542.0], [87.4, 544.0], [87.5, 546.0], [87.6, 547.0], [87.7, 549.0], [87.8, 551.0], [87.9, 552.0], [88.0, 554.0], [88.1, 555.0], [88.2, 557.0], [88.3, 560.0], [88.4, 562.0], [88.5, 564.0], [88.6, 566.0], [88.7, 568.0], [88.8, 569.0], [88.9, 572.0], [89.0, 574.0], [89.1, 576.0], [89.2, 578.0], [89.3, 580.0], [89.4, 582.0], [89.5, 584.0], [89.6, 587.0], [89.7, 590.0], [89.8, 593.0], [89.9, 596.0], [90.0, 598.0], [90.1, 600.0], [90.2, 603.0], [90.3, 605.0], [90.4, 608.0], [90.5, 611.0], [90.6, 613.0], [90.7, 616.0], [90.8, 619.0], [90.9, 622.0], [91.0, 624.0], [91.1, 627.0], [91.2, 630.0], [91.3, 634.0], [91.4, 639.0], [91.5, 644.0], [91.6, 647.0], [91.7, 652.0], [91.8, 656.0], [91.9, 662.0], [92.0, 668.0], [92.1, 671.0], [92.2, 677.0], [92.3, 683.0], [92.4, 688.0], [92.5, 695.0], [92.6, 699.0], [92.7, 707.0], [92.8, 715.0], [92.9, 724.0], [93.0, 731.0], [93.1, 741.0], [93.2, 749.0], [93.3, 761.0], [93.4, 769.0], [93.5, 776.0], [93.6, 785.0], [93.7, 798.0], [93.8, 811.0], [93.9, 820.0], [94.0, 832.0], [94.1, 842.0], [94.2, 855.0], [94.3, 864.0], [94.4, 881.0], [94.5, 898.0], [94.6, 908.0], [94.7, 926.0], [94.8, 942.0], [94.9, 958.0], [95.0, 977.0], [95.1, 995.0], [95.2, 1014.0], [95.3, 1030.0], [95.4, 1044.0], [95.5, 1067.0], [95.6, 1080.0], [95.7, 1100.0], [95.8, 1122.0], [95.9, 1142.0], [96.0, 1168.0], [96.1, 1202.0], [96.2, 1231.0], [96.3, 1259.0], [96.4, 1293.0], [96.5, 1325.0], [96.6, 1370.0], [96.7, 1405.0], [96.8, 1447.0], [96.9, 1482.0], [97.0, 1523.0], [97.1, 1565.0], [97.2, 1607.0], [97.3, 1654.0], [97.4, 1698.0], [97.5, 1737.0], [97.6, 1790.0], [97.7, 1849.0], [97.8, 1913.0], [97.9, 1981.0], [98.0, 2040.0], [98.1, 2108.0], [98.2, 2179.0], [98.3, 2248.0], [98.4, 2324.0], [98.5, 2394.0], [98.6, 2444.0], [98.7, 2529.0], [98.8, 2660.0], [98.9, 2800.0], [99.0, 2953.0], [99.1, 3121.0], [99.2, 3232.0], [99.3, 3478.0], [99.4, 3676.0], [99.5, 4045.0], [99.6, 4533.0], [99.7, 5202.0], [99.8, 8567.0], [99.9, 21330.0], [100.0, 21578.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8080.0, "series": [{"data": [[0.0, 4321.0], [600.0, 657.0], [700.0, 288.0], [800.0, 206.0], [900.0, 164.0], [1000.0, 145.0], [1100.0, 101.0], [1200.0, 90.0], [1300.0, 65.0], [1400.0, 65.0], [1500.0, 64.0], [1600.0, 60.0], [1700.0, 51.0], [1800.0, 41.0], [1900.0, 42.0], [2000.0, 39.0], [2100.0, 39.0], [2200.0, 37.0], [2300.0, 39.0], [2400.0, 38.0], [2500.0, 21.0], [2600.0, 16.0], [2700.0, 20.0], [2800.0, 10.0], [2900.0, 23.0], [3000.0, 16.0], [3100.0, 25.0], [3200.0, 18.0], [3300.0, 9.0], [3400.0, 9.0], [3500.0, 15.0], [3600.0, 9.0], [3700.0, 7.0], [3800.0, 5.0], [3900.0, 11.0], [4000.0, 5.0], [4200.0, 2.0], [4300.0, 4.0], [4100.0, 8.0], [4500.0, 5.0], [4400.0, 4.0], [4600.0, 3.0], [4700.0, 5.0], [4800.0, 5.0], [4900.0, 3.0], [5000.0, 5.0], [5100.0, 3.0], [5200.0, 3.0], [5300.0, 2.0], [5600.0, 4.0], [5500.0, 2.0], [5800.0, 1.0], [5900.0, 3.0], [6000.0, 2.0], [6100.0, 1.0], [6300.0, 1.0], [6200.0, 2.0], [6900.0, 1.0], [7500.0, 2.0], [8000.0, 1.0], [8500.0, 2.0], [8600.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [9800.0, 2.0], [10100.0, 1.0], [10700.0, 1.0], [15200.0, 13.0], [15300.0, 2.0], [21300.0, 9.0], [21400.0, 4.0], [21200.0, 2.0], [21500.0, 14.0], [100.0, 1737.0], [200.0, 4373.0], [300.0, 8080.0], [400.0, 3281.0], [500.0, 1563.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2487.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12243.0, "series": [{"data": [[0.0, 12243.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2487.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 11200.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 58.450027307482316, "minX": 1.60319448E12, "maxY": 99.9783672221374, "series": [{"data": [[1.60319448E12, 96.38871515975481], [1.60319454E12, 99.9783672221374], [1.6031946E12, 58.450027307482316]], "isOverall": false, "label": "Load test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031946E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 7.285714285714285, "minX": 1.0, "maxY": 15314.0, "series": [{"data": [[2.0, 15314.0], [3.0, 15271.0], [4.0, 15275.0], [5.0, 15272.0], [6.0, 15272.0], [7.0, 15272.0], [8.0, 7881.5], [9.0, 44.73076923076923], [10.0, 7.833333333333333], [11.0, 7.285714285714285], [12.0, 42.4915254237288], [13.0, 16.848484848484844], [14.0, 18.530612244897952], [15.0, 614.0769230769231], [16.0, 23.757142857142853], [17.0, 387.0], [18.0, 418.93181818181813], [19.0, 30.10344827586207], [20.0, 111.925], [21.0, 97.75675675675674], [22.0, 54.31481481481481], [23.0, 78.390243902439], [24.0, 277.948717948718], [25.0, 65.57575757575759], [26.0, 2300.875], [27.0, 434.1428571428571], [28.0, 540.2352941176471], [29.0, 111.77500000000003], [30.0, 63.35555555555558], [31.0, 62.67499999999998], [32.0, 52.762711864406775], [33.0, 94.8030303030303], [34.0, 349.9285714285714], [35.0, 151.5882352941177], [36.0, 73.45714285714286], [37.0, 100.46969696969695], [38.0, 48.30909090909092], [39.0, 110.12499999999994], [40.0, 78.22535211267602], [41.0, 72.12195121951221], [42.0, 101.67105263157892], [43.0, 113.02083333333337], [44.0, 207.96551724137925], [45.0, 312.12328767123296], [46.0, 186.06557377049182], [47.0, 224.97222222222226], [48.0, 109.9473684210526], [49.0, 104.75342465753424], [50.0, 112.98039215686273], [51.0, 118.3965517241379], [52.0, 101.1414141414142], [53.0, 106.89285714285712], [54.0, 134.75213675213675], [55.0, 129.1282051282052], [56.0, 152.56321839080465], [57.0, 131.2058823529412], [58.0, 114.39568345323737], [59.0, 121.21590909090905], [60.0, 108.89156626506023], [61.0, 112.44155844155847], [62.0, 87.66216216216218], [63.0, 187.52380952380955], [64.0, 274.7931034482759], [65.0, 152.30337078651687], [66.0, 132.68965517241378], [67.0, 77.72868217054263], [68.0, 150.0754716981132], [69.0, 112.33673469387759], [70.0, 105.82894736842105], [71.0, 565.3653846153844], [72.0, 156.71929824561406], [73.0, 350.8125], [74.0, 567.9183673469389], [75.0, 153.86868686868692], [76.0, 181.62499999999997], [77.0, 101.34636871508381], [78.0, 213.70000000000005], [79.0, 145.76271186440684], [80.0, 162.7395833333333], [81.0, 134.9245283018868], [82.0, 155.82706766917283], [83.0, 169.82692307692304], [84.0, 121.61986301369855], [85.0, 186.17241379310343], [86.0, 166.6607142857143], [87.0, 252.9387755102042], [88.0, 271.1999999999999], [89.0, 200.97752808988764], [90.0, 173.30120481927713], [91.0, 176.5423728813559], [92.0, 218.91666666666669], [93.0, 124.2695652173913], [94.0, 234.18032786885254], [95.0, 277.15555555555557], [96.0, 170.78787878787884], [97.0, 200.60240963855418], [98.0, 167.4935064935065], [99.0, 180.9333333333334], [100.0, 510.64426288473834], [1.0, 15291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[90.1627458542225, 427.0807558812183]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 47.53333333333333, "minX": 1.60319448E12, "maxY": 651387.8166666667, "series": [{"data": [[1.60319448E12, 395699.6], [1.60319454E12, 651387.8166666667], [1.6031946E12, 225598.56666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60319448E12, 15200.333333333334], [1.60319454E12, 18560.733333333334], [1.6031946E12, 47.53333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031946E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 128.06280720917565, "minX": 1.60319448E12, "maxY": 600.63847722638, "series": [{"data": [[1.60319448E12, 600.63847722638], [1.60319454E12, 455.05725424246884], [1.6031946E12, 128.06280720917565]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031946E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 57.49699617695243, "minX": 1.60319448E12, "maxY": 599.8842963970077, "series": [{"data": [[1.60319448E12, 599.8842963970077], [1.60319454E12, 378.26517352086876], [1.6031946E12, 57.49699617695243]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031946E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 61.80951733514607, "minX": 1.60319448E12, "maxY": 179.8174591041126, "series": [{"data": [[1.60319448E12, 61.80951733514607], [1.60319454E12, 179.8174591041126], [1.6031946E12, 126.82741671217897]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031946E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 252.0, "minX": 1.60319448E12, "maxY": 800.0, "series": [{"data": [[1.60319448E12, 800.0], [1.60319454E12, 791.0], [1.6031946E12, 286.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60319448E12, 270.0], [1.60319454E12, 281.0], [1.6031946E12, 266.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60319448E12, 271.0], [1.60319454E12, 282.0], [1.6031946E12, 266.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60319448E12, 271.0], [1.60319454E12, 282.0], [1.6031946E12, 266.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60319448E12, 252.0], [1.60319454E12, 258.0], [1.6031946E12, 266.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60319448E12, 357.0], [1.60319454E12, 380.0], [1.6031946E12, 273.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 21384.0, "series": [{"data": [[713.0, 273.5], [7.0, 574.0], [29.0, 439.0], [47.0, 425.0], [59.0, 376.0], [84.0, 358.0], [111.0, 353.5], [108.0, 319.0], [112.0, 330.0], [119.0, 342.5], [127.0, 355.0], [131.0, 315.0], [132.0, 315.0], [128.0, 395.5], [133.0, 366.0], [139.0, 468.0], [141.0, 372.0], [142.0, 327.5], [138.0, 345.0], [154.0, 347.0], [156.0, 367.0], [152.0, 364.0], [153.0, 353.5], [157.0, 449.0], [167.0, 463.0], [161.0, 365.0], [166.0, 421.0], [175.0, 386.0], [173.0, 335.0], [168.0, 490.0], [170.0, 444.0], [171.0, 347.0], [172.0, 396.0], [169.0, 487.5], [176.0, 378.0], [178.0, 336.0], [182.0, 349.0], [181.0, 378.0], [183.0, 357.0], [180.0, 378.0], [177.0, 367.5], [189.0, 348.0], [185.0, 367.5], [186.0, 354.0], [190.0, 363.0], [187.0, 440.0], [192.0, 349.0], [196.0, 428.0], [193.0, 341.5], [195.0, 374.5], [197.0, 326.0], [194.0, 352.5], [199.0, 362.5], [204.0, 347.5], [201.0, 364.0], [202.0, 360.5], [203.0, 377.0], [206.0, 389.0], [207.0, 387.0], [209.0, 363.0], [208.0, 353.0], [215.0, 349.0], [218.0, 387.0], [227.0, 347.0], [225.0, 355.0], [233.0, 447.0], [272.0, 346.0], [337.0, 266.0], [342.0, 278.0], [385.0, 280.0], [463.0, 259.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[536.0, 79.5], [2.0, 15272.0], [566.0, 61.5], [569.0, 47.0], [633.0, 120.0], [630.0, 97.5], [713.0, 78.0], [748.0, 60.0], [3.0, 15275.0], [7.0, 1041.0], [29.0, 1053.0], [47.0, 830.0], [59.0, 1003.0], [84.0, 1072.0], [111.0, 1013.5], [108.0, 1369.0], [112.0, 1773.0], [119.0, 1088.0], [127.0, 1523.0], [131.0, 1350.5], [132.0, 1919.0], [128.0, 2455.0], [133.0, 3809.0], [139.0, 1473.0], [141.0, 1847.0], [142.0, 1293.5], [138.0, 1511.0], [154.0, 1689.5], [156.0, 1341.0], [152.0, 2093.5], [153.0, 1245.0], [157.0, 1120.0], [167.0, 1451.5], [161.0, 2108.0], [166.0, 1576.0], [175.0, 1680.0], [173.0, 1378.5], [168.0, 1815.5], [170.0, 1628.0], [171.0, 2250.5], [172.0, 3296.5], [169.0, 1636.0], [176.0, 1127.0], [178.0, 1471.0], [182.0, 1833.0], [181.0, 1160.5], [183.0, 1347.5], [180.0, 1766.0], [177.0, 2285.0], [189.0, 1144.0], [185.0, 1288.0], [186.0, 1813.0], [190.0, 1004.0], [187.0, 2285.0], [192.0, 1802.0], [196.0, 1232.0], [193.0, 1204.5], [195.0, 1190.0], [197.0, 1949.0], [194.0, 1226.5], [199.0, 1228.0], [204.0, 1565.5], [201.0, 959.0], [202.0, 1351.0], [203.0, 2492.0], [206.0, 21384.0], [207.0, 1019.0], [209.0, 1518.0], [208.0, 1588.0], [215.0, 844.0], [227.0, 1312.0], [233.0, 319.0], [244.0, 343.0], [1.0, 15272.0], [272.0, 58.0], [291.0, 7.0], [314.0, 311.5], [323.0, 254.0], [321.0, 260.0], [337.0, 250.0], [342.0, 247.0], [359.0, 34.0], [385.0, 260.0], [392.0, 256.0], [397.0, 249.0], [440.0, 43.0], [463.0, 239.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 748.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 21382.0, "series": [{"data": [[713.0, 270.5], [7.0, 573.0], [29.0, 439.0], [47.0, 425.0], [59.0, 375.0], [84.0, 357.0], [111.0, 353.5], [108.0, 319.0], [112.0, 328.5], [119.0, 342.5], [127.0, 355.0], [131.0, 314.5], [132.0, 313.0], [128.0, 393.5], [133.0, 366.0], [139.0, 468.0], [141.0, 372.0], [142.0, 327.5], [138.0, 343.0], [154.0, 347.0], [156.0, 365.0], [152.0, 364.0], [153.0, 353.0], [157.0, 448.0], [167.0, 453.5], [161.0, 363.0], [166.0, 419.0], [175.0, 384.0], [173.0, 334.0], [168.0, 489.5], [170.0, 438.0], [171.0, 347.0], [172.0, 396.0], [169.0, 486.0], [176.0, 378.0], [178.0, 336.0], [182.0, 347.0], [181.0, 377.0], [183.0, 356.0], [180.0, 378.0], [177.0, 367.0], [189.0, 348.0], [185.0, 366.0], [186.0, 354.0], [190.0, 362.0], [187.0, 440.0], [192.0, 349.0], [196.0, 427.0], [193.0, 341.0], [195.0, 373.0], [197.0, 325.0], [194.0, 352.0], [199.0, 362.5], [204.0, 346.5], [201.0, 363.0], [202.0, 360.0], [203.0, 377.0], [206.0, 387.0], [207.0, 387.0], [209.0, 363.0], [208.0, 352.5], [215.0, 348.5], [218.0, 386.5], [227.0, 345.0], [225.0, 355.0], [233.0, 445.0], [272.0, 345.0], [337.0, 262.0], [342.0, 277.0], [385.0, 279.0], [463.0, 258.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[536.0, 0.0], [2.0, 15271.0], [566.0, 0.0], [569.0, 0.0], [633.0, 0.0], [630.0, 0.0], [713.0, 0.0], [748.0, 0.0], [3.0, 15274.0], [7.0, 1040.0], [29.0, 1052.0], [47.0, 829.5], [59.0, 1003.0], [84.0, 1069.0], [111.0, 1013.5], [108.0, 1369.0], [112.0, 1772.5], [119.0, 1088.0], [127.0, 1522.0], [131.0, 1350.0], [132.0, 1916.0], [128.0, 2453.5], [133.0, 3809.0], [139.0, 1473.0], [141.0, 1847.0], [142.0, 1293.5], [138.0, 1506.0], [154.0, 1689.5], [156.0, 1341.0], [152.0, 2093.5], [153.0, 1245.0], [157.0, 1114.0], [167.0, 1451.5], [161.0, 2103.0], [166.0, 1576.0], [175.0, 1680.0], [173.0, 1378.5], [168.0, 1815.5], [170.0, 1626.5], [171.0, 2250.5], [172.0, 3296.0], [169.0, 1636.0], [176.0, 1127.0], [178.0, 1471.0], [182.0, 1833.0], [181.0, 1153.5], [183.0, 1347.5], [180.0, 1766.0], [177.0, 2276.0], [189.0, 1144.0], [185.0, 1288.0], [186.0, 1813.0], [190.0, 997.5], [187.0, 2285.0], [192.0, 1802.0], [196.0, 1221.0], [193.0, 1204.5], [195.0, 1187.5], [197.0, 1949.0], [194.0, 1226.5], [199.0, 1228.0], [204.0, 1565.0], [201.0, 959.0], [202.0, 1351.0], [203.0, 2492.0], [206.0, 21382.0], [207.0, 1019.0], [209.0, 1516.5], [208.0, 1587.5], [215.0, 844.0], [227.0, 1312.0], [233.0, 0.0], [244.0, 0.0], [1.0, 15271.0], [272.0, 0.0], [291.0, 0.0], [314.0, 0.0], [323.0, 0.0], [321.0, 0.0], [337.0, 0.0], [342.0, 0.0], [359.0, 0.0], [385.0, 0.0], [392.0, 0.0], [397.0, 0.0], [440.0, 0.0], [463.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 748.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 90.05, "minX": 1.60319448E12, "maxY": 217.86666666666667, "series": [{"data": [[1.60319448E12, 124.25], [1.60319454E12, 217.86666666666667], [1.6031946E12, 90.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031946E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60319448E12, "maxY": 149.68333333333334, "series": [{"data": [[1.60319448E12, 122.58333333333333], [1.60319454E12, 149.68333333333334], [1.6031946E12, 0.38333333333333336]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60319454E12, 68.35], [1.6031946E12, 91.16666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031946E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60319448E12, "maxY": 140.63333333333333, "series": [{"data": [[1.60319448E12, 104.8], [1.60319454E12, 140.63333333333333], [1.6031946E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60319448E12, 17.783333333333335], [1.60319454E12, 77.4], [1.6031946E12, 91.48333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031946E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60319448E12, "maxY": 140.63333333333333, "series": [{"data": [[1.60319448E12, 104.8], [1.60319454E12, 140.63333333333333], [1.6031946E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60319448E12, 17.783333333333335], [1.60319454E12, 77.4], [1.6031946E12, 91.48333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031946E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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

