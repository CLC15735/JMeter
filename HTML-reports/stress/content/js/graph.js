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
        data: {"result": {"minY": 250.0, "minX": 0.0, "maxY": 21633.0, "series": [{"data": [[0.0, 250.0], [0.1, 254.0], [0.2, 257.0], [0.3, 257.0], [0.4, 257.0], [0.5, 258.0], [0.6, 259.0], [0.7, 260.0], [0.8, 260.0], [0.9, 261.0], [1.0, 262.0], [1.1, 262.0], [1.2, 262.0], [1.3, 263.0], [1.4, 263.0], [1.5, 264.0], [1.6, 264.0], [1.7, 264.0], [1.8, 265.0], [1.9, 265.0], [2.0, 266.0], [2.1, 266.0], [2.2, 266.0], [2.3, 266.0], [2.4, 267.0], [2.5, 267.0], [2.6, 267.0], [2.7, 267.0], [2.8, 268.0], [2.9, 268.0], [3.0, 268.0], [3.1, 269.0], [3.2, 269.0], [3.3, 269.0], [3.4, 270.0], [3.5, 270.0], [3.6, 270.0], [3.7, 270.0], [3.8, 270.0], [3.9, 271.0], [4.0, 271.0], [4.1, 271.0], [4.2, 271.0], [4.3, 272.0], [4.4, 272.0], [4.5, 272.0], [4.6, 272.0], [4.7, 272.0], [4.8, 272.0], [4.9, 273.0], [5.0, 273.0], [5.1, 273.0], [5.2, 273.0], [5.3, 273.0], [5.4, 273.0], [5.5, 274.0], [5.6, 274.0], [5.7, 274.0], [5.8, 274.0], [5.9, 274.0], [6.0, 274.0], [6.1, 275.0], [6.2, 275.0], [6.3, 275.0], [6.4, 275.0], [6.5, 276.0], [6.6, 276.0], [6.7, 276.0], [6.8, 276.0], [6.9, 276.0], [7.0, 277.0], [7.1, 277.0], [7.2, 277.0], [7.3, 277.0], [7.4, 277.0], [7.5, 277.0], [7.6, 278.0], [7.7, 278.0], [7.8, 278.0], [7.9, 278.0], [8.0, 278.0], [8.1, 279.0], [8.2, 279.0], [8.3, 279.0], [8.4, 279.0], [8.5, 279.0], [8.6, 280.0], [8.7, 280.0], [8.8, 280.0], [8.9, 280.0], [9.0, 280.0], [9.1, 280.0], [9.2, 281.0], [9.3, 281.0], [9.4, 281.0], [9.5, 281.0], [9.6, 281.0], [9.7, 282.0], [9.8, 282.0], [9.9, 282.0], [10.0, 282.0], [10.1, 282.0], [10.2, 283.0], [10.3, 283.0], [10.4, 283.0], [10.5, 283.0], [10.6, 283.0], [10.7, 283.0], [10.8, 284.0], [10.9, 284.0], [11.0, 284.0], [11.1, 284.0], [11.2, 284.0], [11.3, 284.0], [11.4, 284.0], [11.5, 285.0], [11.6, 285.0], [11.7, 285.0], [11.8, 285.0], [11.9, 285.0], [12.0, 286.0], [12.1, 286.0], [12.2, 286.0], [12.3, 286.0], [12.4, 286.0], [12.5, 287.0], [12.6, 287.0], [12.7, 287.0], [12.8, 287.0], [12.9, 287.0], [13.0, 287.0], [13.1, 288.0], [13.2, 288.0], [13.3, 288.0], [13.4, 288.0], [13.5, 288.0], [13.6, 289.0], [13.7, 289.0], [13.8, 289.0], [13.9, 289.0], [14.0, 289.0], [14.1, 290.0], [14.2, 290.0], [14.3, 290.0], [14.4, 290.0], [14.5, 290.0], [14.6, 291.0], [14.7, 291.0], [14.8, 291.0], [14.9, 291.0], [15.0, 291.0], [15.1, 291.0], [15.2, 292.0], [15.3, 292.0], [15.4, 292.0], [15.5, 292.0], [15.6, 292.0], [15.7, 292.0], [15.8, 292.0], [15.9, 293.0], [16.0, 293.0], [16.1, 293.0], [16.2, 293.0], [16.3, 293.0], [16.4, 293.0], [16.5, 293.0], [16.6, 294.0], [16.7, 294.0], [16.8, 294.0], [16.9, 294.0], [17.0, 294.0], [17.1, 294.0], [17.2, 294.0], [17.3, 295.0], [17.4, 295.0], [17.5, 295.0], [17.6, 295.0], [17.7, 295.0], [17.8, 295.0], [17.9, 295.0], [18.0, 296.0], [18.1, 296.0], [18.2, 296.0], [18.3, 296.0], [18.4, 296.0], [18.5, 296.0], [18.6, 296.0], [18.7, 297.0], [18.8, 297.0], [18.9, 297.0], [19.0, 297.0], [19.1, 297.0], [19.2, 297.0], [19.3, 297.0], [19.4, 298.0], [19.5, 298.0], [19.6, 298.0], [19.7, 298.0], [19.8, 298.0], [19.9, 298.0], [20.0, 299.0], [20.1, 299.0], [20.2, 299.0], [20.3, 299.0], [20.4, 299.0], [20.5, 299.0], [20.6, 299.0], [20.7, 300.0], [20.8, 300.0], [20.9, 300.0], [21.0, 300.0], [21.1, 300.0], [21.2, 301.0], [21.3, 301.0], [21.4, 301.0], [21.5, 301.0], [21.6, 301.0], [21.7, 302.0], [21.8, 302.0], [21.9, 302.0], [22.0, 302.0], [22.1, 302.0], [22.2, 302.0], [22.3, 302.0], [22.4, 303.0], [22.5, 303.0], [22.6, 303.0], [22.7, 303.0], [22.8, 303.0], [22.9, 303.0], [23.0, 303.0], [23.1, 304.0], [23.2, 304.0], [23.3, 304.0], [23.4, 304.0], [23.5, 304.0], [23.6, 304.0], [23.7, 305.0], [23.8, 305.0], [23.9, 305.0], [24.0, 305.0], [24.1, 305.0], [24.2, 305.0], [24.3, 306.0], [24.4, 306.0], [24.5, 306.0], [24.6, 306.0], [24.7, 307.0], [24.8, 307.0], [24.9, 307.0], [25.0, 307.0], [25.1, 307.0], [25.2, 307.0], [25.3, 308.0], [25.4, 308.0], [25.5, 308.0], [25.6, 308.0], [25.7, 308.0], [25.8, 308.0], [25.9, 309.0], [26.0, 309.0], [26.1, 309.0], [26.2, 309.0], [26.3, 309.0], [26.4, 309.0], [26.5, 309.0], [26.6, 310.0], [26.7, 310.0], [26.8, 310.0], [26.9, 310.0], [27.0, 310.0], [27.1, 310.0], [27.2, 311.0], [27.3, 311.0], [27.4, 311.0], [27.5, 311.0], [27.6, 311.0], [27.7, 311.0], [27.8, 312.0], [27.9, 312.0], [28.0, 312.0], [28.1, 312.0], [28.2, 312.0], [28.3, 312.0], [28.4, 313.0], [28.5, 313.0], [28.6, 313.0], [28.7, 313.0], [28.8, 313.0], [28.9, 313.0], [29.0, 314.0], [29.1, 314.0], [29.2, 314.0], [29.3, 314.0], [29.4, 314.0], [29.5, 315.0], [29.6, 315.0], [29.7, 315.0], [29.8, 315.0], [29.9, 315.0], [30.0, 315.0], [30.1, 316.0], [30.2, 316.0], [30.3, 316.0], [30.4, 316.0], [30.5, 316.0], [30.6, 317.0], [30.7, 317.0], [30.8, 317.0], [30.9, 317.0], [31.0, 317.0], [31.1, 318.0], [31.2, 318.0], [31.3, 318.0], [31.4, 318.0], [31.5, 319.0], [31.6, 319.0], [31.7, 319.0], [31.8, 319.0], [31.9, 319.0], [32.0, 320.0], [32.1, 320.0], [32.2, 320.0], [32.3, 320.0], [32.4, 320.0], [32.5, 321.0], [32.6, 321.0], [32.7, 321.0], [32.8, 321.0], [32.9, 321.0], [33.0, 321.0], [33.1, 321.0], [33.2, 322.0], [33.3, 322.0], [33.4, 322.0], [33.5, 322.0], [33.6, 322.0], [33.7, 323.0], [33.8, 323.0], [33.9, 323.0], [34.0, 323.0], [34.1, 323.0], [34.2, 324.0], [34.3, 324.0], [34.4, 324.0], [34.5, 324.0], [34.6, 325.0], [34.7, 325.0], [34.8, 325.0], [34.9, 325.0], [35.0, 325.0], [35.1, 325.0], [35.2, 325.0], [35.3, 326.0], [35.4, 326.0], [35.5, 326.0], [35.6, 326.0], [35.7, 327.0], [35.8, 327.0], [35.9, 327.0], [36.0, 327.0], [36.1, 327.0], [36.2, 328.0], [36.3, 328.0], [36.4, 328.0], [36.5, 328.0], [36.6, 328.0], [36.7, 329.0], [36.8, 329.0], [36.9, 329.0], [37.0, 329.0], [37.1, 330.0], [37.2, 330.0], [37.3, 330.0], [37.4, 330.0], [37.5, 331.0], [37.6, 331.0], [37.7, 331.0], [37.8, 332.0], [37.9, 332.0], [38.0, 332.0], [38.1, 332.0], [38.2, 332.0], [38.3, 333.0], [38.4, 333.0], [38.5, 333.0], [38.6, 333.0], [38.7, 334.0], [38.8, 334.0], [38.9, 334.0], [39.0, 335.0], [39.1, 335.0], [39.2, 336.0], [39.3, 336.0], [39.4, 336.0], [39.5, 336.0], [39.6, 337.0], [39.7, 337.0], [39.8, 337.0], [39.9, 338.0], [40.0, 338.0], [40.1, 338.0], [40.2, 338.0], [40.3, 339.0], [40.4, 339.0], [40.5, 339.0], [40.6, 339.0], [40.7, 339.0], [40.8, 340.0], [40.9, 340.0], [41.0, 340.0], [41.1, 340.0], [41.2, 340.0], [41.3, 341.0], [41.4, 341.0], [41.5, 341.0], [41.6, 342.0], [41.7, 342.0], [41.8, 342.0], [41.9, 342.0], [42.0, 343.0], [42.1, 343.0], [42.2, 343.0], [42.3, 344.0], [42.4, 344.0], [42.5, 344.0], [42.6, 345.0], [42.7, 345.0], [42.8, 345.0], [42.9, 346.0], [43.0, 346.0], [43.1, 346.0], [43.2, 347.0], [43.3, 347.0], [43.4, 347.0], [43.5, 348.0], [43.6, 348.0], [43.7, 348.0], [43.8, 348.0], [43.9, 349.0], [44.0, 349.0], [44.1, 350.0], [44.2, 350.0], [44.3, 350.0], [44.4, 350.0], [44.5, 351.0], [44.6, 351.0], [44.7, 351.0], [44.8, 352.0], [44.9, 352.0], [45.0, 352.0], [45.1, 353.0], [45.2, 353.0], [45.3, 353.0], [45.4, 353.0], [45.5, 354.0], [45.6, 354.0], [45.7, 354.0], [45.8, 354.0], [45.9, 355.0], [46.0, 355.0], [46.1, 355.0], [46.2, 356.0], [46.3, 356.0], [46.4, 357.0], [46.5, 357.0], [46.6, 357.0], [46.7, 358.0], [46.8, 358.0], [46.9, 358.0], [47.0, 359.0], [47.1, 359.0], [47.2, 360.0], [47.3, 360.0], [47.4, 361.0], [47.5, 361.0], [47.6, 362.0], [47.7, 362.0], [47.8, 362.0], [47.9, 363.0], [48.0, 363.0], [48.1, 363.0], [48.2, 364.0], [48.3, 364.0], [48.4, 364.0], [48.5, 364.0], [48.6, 365.0], [48.7, 365.0], [48.8, 365.0], [48.9, 366.0], [49.0, 366.0], [49.1, 366.0], [49.2, 367.0], [49.3, 367.0], [49.4, 367.0], [49.5, 368.0], [49.6, 368.0], [49.7, 369.0], [49.8, 369.0], [49.9, 369.0], [50.0, 370.0], [50.1, 370.0], [50.2, 370.0], [50.3, 371.0], [50.4, 371.0], [50.5, 372.0], [50.6, 372.0], [50.7, 372.0], [50.8, 372.0], [50.9, 373.0], [51.0, 374.0], [51.1, 374.0], [51.2, 375.0], [51.3, 375.0], [51.4, 375.0], [51.5, 376.0], [51.6, 376.0], [51.7, 377.0], [51.8, 377.0], [51.9, 378.0], [52.0, 378.0], [52.1, 379.0], [52.2, 379.0], [52.3, 379.0], [52.4, 380.0], [52.5, 380.0], [52.6, 381.0], [52.7, 381.0], [52.8, 382.0], [52.9, 382.0], [53.0, 383.0], [53.1, 383.0], [53.2, 383.0], [53.3, 384.0], [53.4, 384.0], [53.5, 385.0], [53.6, 385.0], [53.7, 385.0], [53.8, 386.0], [53.9, 386.0], [54.0, 387.0], [54.1, 387.0], [54.2, 388.0], [54.3, 388.0], [54.4, 388.0], [54.5, 388.0], [54.6, 389.0], [54.7, 389.0], [54.8, 389.0], [54.9, 390.0], [55.0, 391.0], [55.1, 391.0], [55.2, 392.0], [55.3, 392.0], [55.4, 393.0], [55.5, 394.0], [55.6, 394.0], [55.7, 395.0], [55.8, 395.0], [55.9, 395.0], [56.0, 396.0], [56.1, 396.0], [56.2, 397.0], [56.3, 397.0], [56.4, 398.0], [56.5, 398.0], [56.6, 399.0], [56.7, 399.0], [56.8, 400.0], [56.9, 400.0], [57.0, 401.0], [57.1, 402.0], [57.2, 402.0], [57.3, 403.0], [57.4, 403.0], [57.5, 404.0], [57.6, 404.0], [57.7, 404.0], [57.8, 405.0], [57.9, 405.0], [58.0, 406.0], [58.1, 407.0], [58.2, 408.0], [58.3, 408.0], [58.4, 409.0], [58.5, 409.0], [58.6, 410.0], [58.7, 411.0], [58.8, 411.0], [58.9, 412.0], [59.0, 413.0], [59.1, 414.0], [59.2, 415.0], [59.3, 415.0], [59.4, 416.0], [59.5, 417.0], [59.6, 418.0], [59.7, 419.0], [59.8, 419.0], [59.9, 420.0], [60.0, 421.0], [60.1, 422.0], [60.2, 422.0], [60.3, 423.0], [60.4, 424.0], [60.5, 424.0], [60.6, 425.0], [60.7, 425.0], [60.8, 426.0], [60.9, 426.0], [61.0, 427.0], [61.1, 428.0], [61.2, 428.0], [61.3, 429.0], [61.4, 430.0], [61.5, 430.0], [61.6, 431.0], [61.7, 431.0], [61.8, 432.0], [61.9, 433.0], [62.0, 434.0], [62.1, 434.0], [62.2, 434.0], [62.3, 435.0], [62.4, 435.0], [62.5, 437.0], [62.6, 438.0], [62.7, 439.0], [62.8, 440.0], [62.9, 440.0], [63.0, 441.0], [63.1, 442.0], [63.2, 443.0], [63.3, 444.0], [63.4, 445.0], [63.5, 445.0], [63.6, 447.0], [63.7, 447.0], [63.8, 448.0], [63.9, 450.0], [64.0, 451.0], [64.1, 451.0], [64.2, 452.0], [64.3, 453.0], [64.4, 454.0], [64.5, 455.0], [64.6, 455.0], [64.7, 457.0], [64.8, 458.0], [64.9, 458.0], [65.0, 459.0], [65.1, 460.0], [65.2, 461.0], [65.3, 461.0], [65.4, 462.0], [65.5, 462.0], [65.6, 464.0], [65.7, 465.0], [65.8, 465.0], [65.9, 466.0], [66.0, 467.0], [66.1, 468.0], [66.2, 469.0], [66.3, 471.0], [66.4, 471.0], [66.5, 472.0], [66.6, 473.0], [66.7, 474.0], [66.8, 475.0], [66.9, 477.0], [67.0, 477.0], [67.1, 479.0], [67.2, 479.0], [67.3, 480.0], [67.4, 481.0], [67.5, 482.0], [67.6, 483.0], [67.7, 484.0], [67.8, 485.0], [67.9, 486.0], [68.0, 487.0], [68.1, 487.0], [68.2, 488.0], [68.3, 489.0], [68.4, 490.0], [68.5, 491.0], [68.6, 492.0], [68.7, 493.0], [68.8, 494.0], [68.9, 495.0], [69.0, 497.0], [69.1, 498.0], [69.2, 498.0], [69.3, 499.0], [69.4, 501.0], [69.5, 502.0], [69.6, 503.0], [69.7, 505.0], [69.8, 506.0], [69.9, 507.0], [70.0, 509.0], [70.1, 510.0], [70.2, 511.0], [70.3, 512.0], [70.4, 513.0], [70.5, 515.0], [70.6, 516.0], [70.7, 518.0], [70.8, 519.0], [70.9, 520.0], [71.0, 520.0], [71.1, 522.0], [71.2, 523.0], [71.3, 524.0], [71.4, 526.0], [71.5, 527.0], [71.6, 529.0], [71.7, 529.0], [71.8, 530.0], [71.9, 531.0], [72.0, 533.0], [72.1, 535.0], [72.2, 536.0], [72.3, 537.0], [72.4, 538.0], [72.5, 539.0], [72.6, 542.0], [72.7, 544.0], [72.8, 546.0], [72.9, 548.0], [73.0, 548.0], [73.1, 550.0], [73.2, 552.0], [73.3, 553.0], [73.4, 553.0], [73.5, 555.0], [73.6, 557.0], [73.7, 558.0], [73.8, 560.0], [73.9, 561.0], [74.0, 562.0], [74.1, 563.0], [74.2, 565.0], [74.3, 567.0], [74.4, 569.0], [74.5, 570.0], [74.6, 571.0], [74.7, 573.0], [74.8, 575.0], [74.9, 576.0], [75.0, 578.0], [75.1, 580.0], [75.2, 581.0], [75.3, 582.0], [75.4, 583.0], [75.5, 585.0], [75.6, 587.0], [75.7, 588.0], [75.8, 590.0], [75.9, 591.0], [76.0, 593.0], [76.1, 594.0], [76.2, 595.0], [76.3, 597.0], [76.4, 600.0], [76.5, 601.0], [76.6, 603.0], [76.7, 604.0], [76.8, 606.0], [76.9, 607.0], [77.0, 609.0], [77.1, 610.0], [77.2, 611.0], [77.3, 614.0], [77.4, 615.0], [77.5, 618.0], [77.6, 620.0], [77.7, 621.0], [77.8, 623.0], [77.9, 626.0], [78.0, 628.0], [78.1, 630.0], [78.2, 634.0], [78.3, 635.0], [78.4, 637.0], [78.5, 639.0], [78.6, 640.0], [78.7, 643.0], [78.8, 644.0], [78.9, 646.0], [79.0, 648.0], [79.1, 650.0], [79.2, 653.0], [79.3, 654.0], [79.4, 655.0], [79.5, 658.0], [79.6, 660.0], [79.7, 661.0], [79.8, 666.0], [79.9, 668.0], [80.0, 669.0], [80.1, 671.0], [80.2, 673.0], [80.3, 675.0], [80.4, 676.0], [80.5, 678.0], [80.6, 680.0], [80.7, 684.0], [80.8, 686.0], [80.9, 689.0], [81.0, 691.0], [81.1, 694.0], [81.2, 696.0], [81.3, 698.0], [81.4, 701.0], [81.5, 704.0], [81.6, 709.0], [81.7, 711.0], [81.8, 713.0], [81.9, 714.0], [82.0, 716.0], [82.1, 719.0], [82.2, 722.0], [82.3, 723.0], [82.4, 724.0], [82.5, 727.0], [82.6, 729.0], [82.7, 733.0], [82.8, 737.0], [82.9, 738.0], [83.0, 741.0], [83.1, 746.0], [83.2, 748.0], [83.3, 753.0], [83.4, 758.0], [83.5, 762.0], [83.6, 767.0], [83.7, 774.0], [83.8, 779.0], [83.9, 783.0], [84.0, 788.0], [84.1, 790.0], [84.2, 793.0], [84.3, 796.0], [84.4, 800.0], [84.5, 807.0], [84.6, 810.0], [84.7, 814.0], [84.8, 822.0], [84.9, 828.0], [85.0, 831.0], [85.1, 834.0], [85.2, 840.0], [85.3, 842.0], [85.4, 853.0], [85.5, 858.0], [85.6, 864.0], [85.7, 871.0], [85.8, 876.0], [85.9, 879.0], [86.0, 884.0], [86.1, 889.0], [86.2, 897.0], [86.3, 902.0], [86.4, 908.0], [86.5, 916.0], [86.6, 924.0], [86.7, 930.0], [86.8, 935.0], [86.9, 940.0], [87.0, 946.0], [87.1, 955.0], [87.2, 961.0], [87.3, 970.0], [87.4, 982.0], [87.5, 990.0], [87.6, 999.0], [87.7, 1011.0], [87.8, 1020.0], [87.9, 1027.0], [88.0, 1039.0], [88.1, 1042.0], [88.2, 1052.0], [88.3, 1056.0], [88.4, 1069.0], [88.5, 1079.0], [88.6, 1098.0], [88.7, 1106.0], [88.8, 1127.0], [88.9, 1144.0], [89.0, 1152.0], [89.1, 1163.0], [89.2, 1180.0], [89.3, 1183.0], [89.4, 1199.0], [89.5, 1209.0], [89.6, 1226.0], [89.7, 1242.0], [89.8, 1263.0], [89.9, 1281.0], [90.0, 1290.0], [90.1, 1304.0], [90.2, 1324.0], [90.3, 1347.0], [90.4, 1370.0], [90.5, 1393.0], [90.6, 1412.0], [90.7, 1429.0], [90.8, 1440.0], [90.9, 1464.0], [91.0, 1487.0], [91.1, 1504.0], [91.2, 1521.0], [91.3, 1533.0], [91.4, 1563.0], [91.5, 1586.0], [91.6, 1605.0], [91.7, 1630.0], [91.8, 1644.0], [91.9, 1668.0], [92.0, 1681.0], [92.1, 1710.0], [92.2, 1724.0], [92.3, 1735.0], [92.4, 1750.0], [92.5, 1778.0], [92.6, 1793.0], [92.7, 1816.0], [92.8, 1846.0], [92.9, 1863.0], [93.0, 1877.0], [93.1, 1900.0], [93.2, 1932.0], [93.3, 1953.0], [93.4, 1996.0], [93.5, 2021.0], [93.6, 2057.0], [93.7, 2072.0], [93.8, 2113.0], [93.9, 2143.0], [94.0, 2167.0], [94.1, 2194.0], [94.2, 2206.0], [94.3, 2243.0], [94.4, 2259.0], [94.5, 2286.0], [94.6, 2315.0], [94.7, 2344.0], [94.8, 2379.0], [94.9, 2402.0], [95.0, 2434.0], [95.1, 2464.0], [95.2, 2523.0], [95.3, 2554.0], [95.4, 2603.0], [95.5, 2636.0], [95.6, 2692.0], [95.7, 2707.0], [95.8, 2731.0], [95.9, 2806.0], [96.0, 2854.0], [96.1, 2928.0], [96.2, 2979.0], [96.3, 3042.0], [96.4, 3100.0], [96.5, 3215.0], [96.6, 3360.0], [96.7, 3444.0], [96.8, 3545.0], [96.9, 3651.0], [97.0, 3715.0], [97.1, 3803.0], [97.2, 3874.0], [97.3, 3961.0], [97.4, 4027.0], [97.5, 4105.0], [97.6, 4188.0], [97.7, 4326.0], [97.8, 4376.0], [97.9, 4511.0], [98.0, 4637.0], [98.1, 4806.0], [98.2, 5018.0], [98.3, 5188.0], [98.4, 5258.0], [98.5, 5438.0], [98.6, 5527.0], [98.7, 5679.0], [98.8, 5796.0], [98.9, 6130.0], [99.0, 6366.0], [99.1, 6495.0], [99.2, 6720.0], [99.3, 6965.0], [99.4, 7102.0], [99.5, 7638.0], [99.6, 8152.0], [99.7, 8959.0], [99.8, 9325.0], [99.9, 10071.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2589.0, "series": [{"data": [[600.0, 356.0], [700.0, 218.0], [800.0, 133.0], [900.0, 98.0], [1000.0, 74.0], [1100.0, 56.0], [1200.0, 43.0], [1300.0, 36.0], [1400.0, 40.0], [1500.0, 35.0], [1600.0, 35.0], [1700.0, 41.0], [1800.0, 34.0], [1900.0, 23.0], [2000.0, 25.0], [2100.0, 26.0], [2300.0, 26.0], [2200.0, 29.0], [2400.0, 20.0], [2500.0, 15.0], [2600.0, 20.0], [2800.0, 14.0], [2700.0, 16.0], [2900.0, 10.0], [3000.0, 12.0], [3100.0, 6.0], [3300.0, 9.0], [3200.0, 5.0], [3400.0, 6.0], [3500.0, 6.0], [3600.0, 10.0], [3700.0, 8.0], [3800.0, 10.0], [3900.0, 10.0], [4000.0, 8.0], [4200.0, 4.0], [4100.0, 9.0], [4300.0, 12.0], [4600.0, 3.0], [4400.0, 5.0], [4500.0, 7.0], [4700.0, 4.0], [4800.0, 4.0], [5000.0, 7.0], [4900.0, 3.0], [5100.0, 3.0], [5300.0, 3.0], [5200.0, 9.0], [5600.0, 9.0], [5500.0, 5.0], [5400.0, 4.0], [5700.0, 4.0], [5900.0, 2.0], [6000.0, 1.0], [6100.0, 7.0], [6200.0, 2.0], [6300.0, 4.0], [6400.0, 6.0], [6600.0, 2.0], [6500.0, 3.0], [6900.0, 3.0], [6700.0, 5.0], [6800.0, 3.0], [7100.0, 5.0], [7000.0, 4.0], [7300.0, 2.0], [7200.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [7800.0, 3.0], [7900.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8600.0, 2.0], [8400.0, 2.0], [8700.0, 1.0], [9200.0, 4.0], [9000.0, 2.0], [8900.0, 2.0], [9300.0, 2.0], [9600.0, 1.0], [9900.0, 2.0], [9800.0, 2.0], [10100.0, 1.0], [10000.0, 2.0], [10200.0, 1.0], [10400.0, 1.0], [10300.0, 1.0], [21200.0, 1.0], [21600.0, 1.0], [200.0, 1482.0], [300.0, 2589.0], [400.0, 902.0], [500.0, 506.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 640.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4976.0, "series": [{"data": [[0.0, 4976.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1557.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 640.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 24.247037374658145, "minX": 1.60319208E12, "maxY": 67.92871385842479, "series": [{"data": [[1.60319214E12, 67.92871385842479], [1.60319208E12, 24.247037374658145], [1.6031922E12, 29.517241379310374]], "isOverall": false, "label": "Stress test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 383.9103448275862, "minX": 1.0, "maxY": 10779.0, "series": [{"data": [[2.0, 1151.857142857143], [3.0, 871.0909090909091], [4.0, 684.7333333333333], [5.0, 612.9411764705882], [6.0, 603.7777777777777], [7.0, 500.73076923076917], [8.0, 565.6666666666666], [9.0, 475.1515151515151], [10.0, 494.11538461538476], [11.0, 523.5357142857142], [12.0, 454.4054054054055], [13.0, 438.1111111111111], [14.0, 738.92], [15.0, 773.6956521739131], [16.0, 476.875], [17.0, 724.65], [18.0, 646.3181818181818], [19.0, 661.2142857142856], [20.0, 621.7857142857142], [21.0, 1175.8999999999999], [22.0, 866.7407407407409], [23.0, 838.4814814814815], [24.0, 611.7826086956521], [25.0, 711.9285714285713], [26.0, 882.9583333333335], [27.0, 704.1250000000001], [28.0, 852.4347826086955], [29.0, 837.6785714285714], [30.0, 1908.9629629629633], [31.0, 1228.5161290322583], [32.0, 1554.6363636363635], [33.0, 1242.9459459459456], [34.0, 853.7142857142856], [35.0, 1071.7777777777776], [36.0, 951.9607843137255], [37.0, 877.9756097560975], [38.0, 937.1481481481482], [39.0, 857.9787234042553], [40.0, 925.8666666666669], [41.0, 687.1249999999998], [42.0, 696.3020833333334], [43.0, 486.1111111111109], [44.0, 441.01923076923083], [45.0, 428.7946428571429], [46.0, 403.8256880733944], [47.0, 444.3486238532111], [48.0, 443.66666666666674], [49.0, 442.11818181818165], [50.0, 410.63709677419365], [51.0, 421.66666666666663], [52.0, 478.3388429752065], [53.0, 437.71093750000006], [54.0, 406.19999999999993], [55.0, 383.9103448275862], [56.0, 398.77333333333326], [57.0, 415.3142857142857], [58.0, 511.64227642276387], [59.0, 428.4285714285715], [60.0, 516.3274336283185], [61.0, 574.6057692307692], [62.0, 493.11111111111103], [63.0, 486.5204081632653], [64.0, 726.906542056075], [65.0, 559.7499999999999], [66.0, 793.7679999999998], [67.0, 514.6814814814813], [68.0, 539.6041666666669], [69.0, 848.6105263157897], [70.0, 618.3725490196077], [71.0, 734.3529411764705], [72.0, 599.6142857142858], [73.0, 473.5769230769232], [74.0, 476.726618705036], [75.0, 463.19199999999967], [76.0, 575.0431034482758], [77.0, 688.0119047619048], [78.0, 650.7473684210524], [79.0, 703.9449541284405], [80.0, 897.7826086956521], [81.0, 567.8392857142859], [82.0, 662.5937500000003], [83.0, 1086.3800000000006], [84.0, 1041.9237288135598], [85.0, 831.8181818181818], [86.0, 1333.394366197183], [87.0, 846.0384615384613], [88.0, 960.4567901234568], [89.0, 683.5000000000005], [90.0, 819.6575342465752], [91.0, 1583.7213114754095], [92.0, 1401.0370370370367], [93.0, 1895.7894736842104], [94.0, 1706.3157894736842], [95.0, 1478.4166666666667], [96.0, 1990.1739130434785], [97.0, 1661.2395833333335], [98.0, 1053.1794871794868], [99.0, 1525.4175824175825], [100.0, 619.1111111111111], [1.0, 10779.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[60.937682977833425, 713.832427157395]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 119.86666666666666, "minX": 1.60319208E12, "maxY": 323769.13333333336, "series": [{"data": [[1.60319214E12, 323769.13333333336], [1.60319208E12, 59019.0], [1.6031922E12, 3120.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60319214E12, 12437.2], [1.60319208E12, 2267.133333333333], [1.6031922E12, 119.86666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 685.3572615486868, "minX": 1.60319208E12, "maxY": 3573.2068965517237, "series": [{"data": [[1.60319214E12, 685.3572615486868], [1.60319208E12, 718.8641750227893], [1.6031922E12, 3573.2068965517237]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 684.0998670654709, "minX": 1.60319208E12, "maxY": 3572.103448275862, "series": [{"data": [[1.60319214E12, 684.0998670654709], [1.60319208E12, 717.6900638103923], [1.6031922E12, 3572.103448275862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.11577028258886, "minX": 1.60319208E12, "maxY": 403.0862068965517, "series": [{"data": [[1.60319214E12, 56.97706879361914], [1.60319208E12, 40.11577028258886], [1.6031922E12, 403.0862068965517]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 250.0, "minX": 1.60319208E12, "maxY": 21633.0, "series": [{"data": [[1.60319214E12, 21633.0], [1.60319208E12, 10473.0], [1.6031922E12, 21271.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60319214E12, 266.0], [1.60319208E12, 255.8819997382164], [1.6031922E12, 259.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60319214E12, 266.0], [1.60319208E12, 256.0], [1.6031922E12, 259.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60319214E12, 266.0], [1.60319208E12, 256.0], [1.6031922E12, 259.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60319214E12, 254.0], [1.60319208E12, 250.0], [1.6031922E12, 259.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60319214E12, 370.0], [1.60319208E12, 360.0], [1.6031922E12, 2750.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 263.5, "minX": 1.0, "maxY": 5592.5, "series": [{"data": [[2.0, 5156.0], [5.0, 5508.0], [6.0, 288.0], [9.0, 2672.0], [10.0, 274.0], [14.0, 263.5], [16.0, 281.0], [17.0, 278.0], [18.0, 504.5], [19.0, 323.0], [20.0, 276.5], [21.0, 432.0], [22.0, 603.0], [24.0, 578.0], [25.0, 275.0], [26.0, 463.0], [27.0, 407.0], [28.0, 386.0], [30.0, 657.5], [31.0, 350.0], [32.0, 296.0], [35.0, 382.5], [34.0, 298.5], [36.0, 370.5], [37.0, 2339.0], [39.0, 402.0], [42.0, 313.0], [48.0, 353.0], [50.0, 351.0], [51.0, 552.0], [55.0, 368.0], [54.0, 412.5], [56.0, 359.0], [59.0, 686.0], [62.0, 335.0], [69.0, 388.0], [68.0, 395.0], [71.0, 344.0], [72.0, 399.0], [73.0, 335.0], [81.0, 339.0], [85.0, 440.0], [86.0, 380.0], [90.0, 398.0], [88.0, 415.0], [91.0, 709.0], [95.0, 345.0], [94.0, 468.5], [98.0, 360.0], [97.0, 367.0], [96.0, 398.0], [103.0, 381.0], [100.0, 327.5], [101.0, 379.0], [104.0, 342.5], [105.0, 361.0], [106.0, 358.0], [107.0, 405.0], [110.0, 350.0], [109.0, 345.5], [108.0, 346.5], [113.0, 310.0], [112.0, 359.0], [115.0, 505.0], [114.0, 359.0], [118.0, 371.5], [120.0, 374.0], [122.0, 377.0], [124.0, 356.0], [127.0, 370.0], [126.0, 375.0], [130.0, 366.0], [134.0, 370.5], [143.0, 334.5], [138.0, 399.0], [148.0, 332.5], [157.0, 359.0], [1.0, 5592.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 157.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 262.5, "minX": 1.0, "maxY": 5592.0, "series": [{"data": [[2.0, 5155.0], [5.0, 5507.0], [6.0, 285.5], [9.0, 2671.0], [10.0, 272.0], [14.0, 262.5], [16.0, 280.5], [17.0, 278.0], [18.0, 503.5], [19.0, 322.0], [20.0, 274.0], [21.0, 431.0], [22.0, 603.0], [24.0, 577.0], [25.0, 273.5], [26.0, 462.5], [27.0, 406.0], [28.0, 385.5], [30.0, 655.5], [31.0, 350.0], [32.0, 296.0], [35.0, 381.5], [34.0, 298.0], [36.0, 368.5], [37.0, 2339.0], [39.0, 402.0], [42.0, 312.5], [48.0, 352.0], [50.0, 349.5], [51.0, 552.0], [55.0, 367.0], [54.0, 411.5], [56.0, 358.5], [59.0, 684.0], [62.0, 334.0], [69.0, 388.0], [68.0, 393.5], [71.0, 343.0], [72.0, 396.5], [73.0, 334.0], [81.0, 337.0], [85.0, 440.0], [86.0, 378.0], [90.0, 398.0], [88.0, 415.0], [91.0, 707.0], [95.0, 344.5], [94.0, 461.5], [98.0, 358.5], [97.0, 366.0], [96.0, 395.5], [103.0, 380.0], [100.0, 327.0], [101.0, 379.0], [104.0, 342.0], [105.0, 360.0], [106.0, 357.5], [107.0, 405.0], [110.0, 350.0], [109.0, 343.5], [108.0, 342.5], [113.0, 310.0], [112.0, 357.5], [115.0, 501.0], [114.0, 355.5], [118.0, 369.5], [120.0, 374.0], [122.0, 377.0], [124.0, 356.0], [127.0, 370.0], [126.0, 375.0], [130.0, 365.5], [134.0, 370.5], [143.0, 334.5], [138.0, 398.5], [148.0, 332.5], [157.0, 357.0], [1.0, 5592.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 157.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.966666666666665, "minX": 1.60319208E12, "maxY": 100.58333333333333, "series": [{"data": [[1.60319214E12, 100.58333333333333], [1.60319208E12, 18.966666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319214E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60319208E12, "maxY": 100.3, "series": [{"data": [[1.60319214E12, 100.3], [1.60319208E12, 18.283333333333335], [1.6031922E12, 0.9666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6031922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60319208E12, "maxY": 100.3, "series": [{"data": [[1.60319214E12, 100.3], [1.60319208E12, 18.283333333333335], [1.6031922E12, 0.9666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.60319208E12, "maxY": 100.3, "series": [{"data": [[1.60319214E12, 100.3], [1.60319208E12, 18.283333333333335], [1.6031922E12, 0.9666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6031922E12, "title": "Total Transactions Per Second"}},
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

