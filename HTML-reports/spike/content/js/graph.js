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
        data: {"result": {"minY": 252.0, "minX": 0.0, "maxY": 21289.0, "series": [{"data": [[0.0, 252.0], [0.1, 256.0], [0.2, 258.0], [0.3, 259.0], [0.4, 260.0], [0.5, 262.0], [0.6, 263.0], [0.7, 264.0], [0.8, 264.0], [0.9, 265.0], [1.0, 265.0], [1.1, 266.0], [1.2, 266.0], [1.3, 266.0], [1.4, 267.0], [1.5, 268.0], [1.6, 269.0], [1.7, 270.0], [1.8, 271.0], [1.9, 272.0], [2.0, 272.0], [2.1, 273.0], [2.2, 273.0], [2.3, 274.0], [2.4, 274.0], [2.5, 275.0], [2.6, 276.0], [2.7, 276.0], [2.8, 277.0], [2.9, 277.0], [3.0, 278.0], [3.1, 278.0], [3.2, 279.0], [3.3, 279.0], [3.4, 280.0], [3.5, 280.0], [3.6, 281.0], [3.7, 281.0], [3.8, 282.0], [3.9, 282.0], [4.0, 283.0], [4.1, 283.0], [4.2, 284.0], [4.3, 285.0], [4.4, 285.0], [4.5, 285.0], [4.6, 286.0], [4.7, 286.0], [4.8, 287.0], [4.9, 287.0], [5.0, 288.0], [5.1, 288.0], [5.2, 289.0], [5.3, 289.0], [5.4, 289.0], [5.5, 290.0], [5.6, 290.0], [5.7, 290.0], [5.8, 291.0], [5.9, 292.0], [6.0, 293.0], [6.1, 293.0], [6.2, 293.0], [6.3, 293.0], [6.4, 293.0], [6.5, 294.0], [6.6, 294.0], [6.7, 294.0], [6.8, 295.0], [6.9, 295.0], [7.0, 295.0], [7.1, 295.0], [7.2, 296.0], [7.3, 296.0], [7.4, 296.0], [7.5, 297.0], [7.6, 297.0], [7.7, 297.0], [7.8, 298.0], [7.9, 298.0], [8.0, 298.0], [8.1, 298.0], [8.2, 299.0], [8.3, 299.0], [8.4, 299.0], [8.5, 300.0], [8.6, 300.0], [8.7, 300.0], [8.8, 300.0], [8.9, 301.0], [9.0, 301.0], [9.1, 302.0], [9.2, 302.0], [9.3, 302.0], [9.4, 302.0], [9.5, 302.0], [9.6, 302.0], [9.7, 303.0], [9.8, 303.0], [9.9, 303.0], [10.0, 304.0], [10.1, 304.0], [10.2, 304.0], [10.3, 305.0], [10.4, 305.0], [10.5, 305.0], [10.6, 305.0], [10.7, 305.0], [10.8, 306.0], [10.9, 306.0], [11.0, 306.0], [11.1, 306.0], [11.2, 307.0], [11.3, 307.0], [11.4, 307.0], [11.5, 307.0], [11.6, 308.0], [11.7, 308.0], [11.8, 308.0], [11.9, 308.0], [12.0, 308.0], [12.1, 309.0], [12.2, 309.0], [12.3, 309.0], [12.4, 310.0], [12.5, 310.0], [12.6, 310.0], [12.7, 310.0], [12.8, 310.0], [12.9, 310.0], [13.0, 310.0], [13.1, 310.0], [13.2, 311.0], [13.3, 311.0], [13.4, 311.0], [13.5, 311.0], [13.6, 312.0], [13.7, 312.0], [13.8, 312.0], [13.9, 312.0], [14.0, 312.0], [14.1, 313.0], [14.2, 313.0], [14.3, 313.0], [14.4, 313.0], [14.5, 314.0], [14.6, 314.0], [14.7, 314.0], [14.8, 314.0], [14.9, 314.0], [15.0, 315.0], [15.1, 315.0], [15.2, 316.0], [15.3, 316.0], [15.4, 316.0], [15.5, 316.0], [15.6, 316.0], [15.7, 317.0], [15.8, 317.0], [15.9, 317.0], [16.0, 317.0], [16.1, 318.0], [16.2, 318.0], [16.3, 318.0], [16.4, 318.0], [16.5, 319.0], [16.6, 319.0], [16.7, 319.0], [16.8, 319.0], [16.9, 319.0], [17.0, 319.0], [17.1, 320.0], [17.2, 320.0], [17.3, 320.0], [17.4, 320.0], [17.5, 321.0], [17.6, 321.0], [17.7, 321.0], [17.8, 322.0], [17.9, 322.0], [18.0, 322.0], [18.1, 322.0], [18.2, 323.0], [18.3, 323.0], [18.4, 323.0], [18.5, 323.0], [18.6, 324.0], [18.7, 324.0], [18.8, 324.0], [18.9, 324.0], [19.0, 324.0], [19.1, 325.0], [19.2, 325.0], [19.3, 325.0], [19.4, 326.0], [19.5, 326.0], [19.6, 326.0], [19.7, 326.0], [19.8, 326.0], [19.9, 327.0], [20.0, 327.0], [20.1, 327.0], [20.2, 327.0], [20.3, 327.0], [20.4, 327.0], [20.5, 328.0], [20.6, 328.0], [20.7, 328.0], [20.8, 328.0], [20.9, 329.0], [21.0, 329.0], [21.1, 329.0], [21.2, 329.0], [21.3, 329.0], [21.4, 329.0], [21.5, 329.0], [21.6, 330.0], [21.7, 330.0], [21.8, 330.0], [21.9, 330.0], [22.0, 330.0], [22.1, 330.0], [22.2, 330.0], [22.3, 331.0], [22.4, 331.0], [22.5, 331.0], [22.6, 331.0], [22.7, 331.0], [22.8, 332.0], [22.9, 332.0], [23.0, 332.0], [23.1, 332.0], [23.2, 332.0], [23.3, 333.0], [23.4, 333.0], [23.5, 333.0], [23.6, 333.0], [23.7, 333.0], [23.8, 334.0], [23.9, 334.0], [24.0, 334.0], [24.1, 334.0], [24.2, 335.0], [24.3, 335.0], [24.4, 335.0], [24.5, 335.0], [24.6, 335.0], [24.7, 335.0], [24.8, 335.0], [24.9, 336.0], [25.0, 336.0], [25.1, 336.0], [25.2, 336.0], [25.3, 337.0], [25.4, 337.0], [25.5, 337.0], [25.6, 337.0], [25.7, 338.0], [25.8, 338.0], [25.9, 338.0], [26.0, 338.0], [26.1, 339.0], [26.2, 339.0], [26.3, 339.0], [26.4, 339.0], [26.5, 340.0], [26.6, 340.0], [26.7, 340.0], [26.8, 340.0], [26.9, 340.0], [27.0, 340.0], [27.1, 340.0], [27.2, 341.0], [27.3, 341.0], [27.4, 341.0], [27.5, 341.0], [27.6, 342.0], [27.7, 342.0], [27.8, 342.0], [27.9, 342.0], [28.0, 343.0], [28.1, 343.0], [28.2, 343.0], [28.3, 343.0], [28.4, 343.0], [28.5, 343.0], [28.6, 344.0], [28.7, 344.0], [28.8, 344.0], [28.9, 344.0], [29.0, 344.0], [29.1, 345.0], [29.2, 345.0], [29.3, 345.0], [29.4, 345.0], [29.5, 345.0], [29.6, 346.0], [29.7, 346.0], [29.8, 346.0], [29.9, 346.0], [30.0, 346.0], [30.1, 347.0], [30.2, 347.0], [30.3, 348.0], [30.4, 348.0], [30.5, 348.0], [30.6, 348.0], [30.7, 348.0], [30.8, 349.0], [30.9, 349.0], [31.0, 349.0], [31.1, 349.0], [31.2, 350.0], [31.3, 350.0], [31.4, 351.0], [31.5, 351.0], [31.6, 351.0], [31.7, 352.0], [31.8, 352.0], [31.9, 352.0], [32.0, 353.0], [32.1, 353.0], [32.2, 353.0], [32.3, 353.0], [32.4, 354.0], [32.5, 354.0], [32.6, 354.0], [32.7, 354.0], [32.8, 355.0], [32.9, 355.0], [33.0, 355.0], [33.1, 356.0], [33.2, 356.0], [33.3, 357.0], [33.4, 357.0], [33.5, 357.0], [33.6, 357.0], [33.7, 358.0], [33.8, 358.0], [33.9, 358.0], [34.0, 358.0], [34.1, 358.0], [34.2, 359.0], [34.3, 359.0], [34.4, 359.0], [34.5, 359.0], [34.6, 360.0], [34.7, 360.0], [34.8, 360.0], [34.9, 361.0], [35.0, 361.0], [35.1, 361.0], [35.2, 361.0], [35.3, 362.0], [35.4, 362.0], [35.5, 362.0], [35.6, 362.0], [35.7, 363.0], [35.8, 363.0], [35.9, 363.0], [36.0, 363.0], [36.1, 363.0], [36.2, 364.0], [36.3, 364.0], [36.4, 364.0], [36.5, 365.0], [36.6, 365.0], [36.7, 365.0], [36.8, 366.0], [36.9, 366.0], [37.0, 366.0], [37.1, 366.0], [37.2, 367.0], [37.3, 367.0], [37.4, 368.0], [37.5, 368.0], [37.6, 368.0], [37.7, 368.0], [37.8, 368.0], [37.9, 368.0], [38.0, 369.0], [38.1, 369.0], [38.2, 369.0], [38.3, 370.0], [38.4, 370.0], [38.5, 370.0], [38.6, 371.0], [38.7, 371.0], [38.8, 371.0], [38.9, 372.0], [39.0, 372.0], [39.1, 372.0], [39.2, 372.0], [39.3, 373.0], [39.4, 373.0], [39.5, 373.0], [39.6, 374.0], [39.7, 374.0], [39.8, 374.0], [39.9, 374.0], [40.0, 374.0], [40.1, 375.0], [40.2, 375.0], [40.3, 375.0], [40.4, 376.0], [40.5, 376.0], [40.6, 376.0], [40.7, 377.0], [40.8, 377.0], [40.9, 377.0], [41.0, 377.0], [41.1, 378.0], [41.2, 378.0], [41.3, 378.0], [41.4, 379.0], [41.5, 379.0], [41.6, 379.0], [41.7, 380.0], [41.8, 380.0], [41.9, 380.0], [42.0, 380.0], [42.1, 380.0], [42.2, 381.0], [42.3, 381.0], [42.4, 381.0], [42.5, 381.0], [42.6, 381.0], [42.7, 381.0], [42.8, 381.0], [42.9, 382.0], [43.0, 382.0], [43.1, 382.0], [43.2, 382.0], [43.3, 382.0], [43.4, 383.0], [43.5, 383.0], [43.6, 384.0], [43.7, 384.0], [43.8, 384.0], [43.9, 384.0], [44.0, 385.0], [44.1, 385.0], [44.2, 385.0], [44.3, 385.0], [44.4, 386.0], [44.5, 386.0], [44.6, 386.0], [44.7, 387.0], [44.8, 387.0], [44.9, 388.0], [45.0, 388.0], [45.1, 388.0], [45.2, 388.0], [45.3, 389.0], [45.4, 389.0], [45.5, 390.0], [45.6, 390.0], [45.7, 391.0], [45.8, 391.0], [45.9, 391.0], [46.0, 392.0], [46.1, 392.0], [46.2, 392.0], [46.3, 393.0], [46.4, 393.0], [46.5, 394.0], [46.6, 395.0], [46.7, 395.0], [46.8, 395.0], [46.9, 395.0], [47.0, 396.0], [47.1, 396.0], [47.2, 397.0], [47.3, 397.0], [47.4, 397.0], [47.5, 397.0], [47.6, 398.0], [47.7, 398.0], [47.8, 398.0], [47.9, 399.0], [48.0, 399.0], [48.1, 400.0], [48.2, 400.0], [48.3, 400.0], [48.4, 400.0], [48.5, 400.0], [48.6, 401.0], [48.7, 401.0], [48.8, 401.0], [48.9, 401.0], [49.0, 402.0], [49.1, 402.0], [49.2, 402.0], [49.3, 403.0], [49.4, 403.0], [49.5, 404.0], [49.6, 404.0], [49.7, 404.0], [49.8, 404.0], [49.9, 404.0], [50.0, 405.0], [50.1, 405.0], [50.2, 405.0], [50.3, 406.0], [50.4, 406.0], [50.5, 406.0], [50.6, 407.0], [50.7, 407.0], [50.8, 408.0], [50.9, 408.0], [51.0, 408.0], [51.1, 408.0], [51.2, 409.0], [51.3, 409.0], [51.4, 410.0], [51.5, 410.0], [51.6, 411.0], [51.7, 411.0], [51.8, 411.0], [51.9, 412.0], [52.0, 412.0], [52.1, 413.0], [52.2, 413.0], [52.3, 413.0], [52.4, 414.0], [52.5, 414.0], [52.6, 414.0], [52.7, 415.0], [52.8, 415.0], [52.9, 416.0], [53.0, 416.0], [53.1, 417.0], [53.2, 417.0], [53.3, 417.0], [53.4, 418.0], [53.5, 418.0], [53.6, 418.0], [53.7, 419.0], [53.8, 419.0], [53.9, 419.0], [54.0, 420.0], [54.1, 421.0], [54.2, 421.0], [54.3, 421.0], [54.4, 422.0], [54.5, 422.0], [54.6, 423.0], [54.7, 423.0], [54.8, 423.0], [54.9, 424.0], [55.0, 424.0], [55.1, 425.0], [55.2, 425.0], [55.3, 426.0], [55.4, 426.0], [55.5, 426.0], [55.6, 427.0], [55.7, 427.0], [55.8, 428.0], [55.9, 428.0], [56.0, 428.0], [56.1, 429.0], [56.2, 429.0], [56.3, 430.0], [56.4, 431.0], [56.5, 432.0], [56.6, 432.0], [56.7, 432.0], [56.8, 433.0], [56.9, 434.0], [57.0, 434.0], [57.1, 434.0], [57.2, 435.0], [57.3, 436.0], [57.4, 436.0], [57.5, 437.0], [57.6, 438.0], [57.7, 438.0], [57.8, 439.0], [57.9, 439.0], [58.0, 440.0], [58.1, 441.0], [58.2, 441.0], [58.3, 442.0], [58.4, 443.0], [58.5, 443.0], [58.6, 444.0], [58.7, 444.0], [58.8, 445.0], [58.9, 445.0], [59.0, 446.0], [59.1, 447.0], [59.2, 448.0], [59.3, 448.0], [59.4, 448.0], [59.5, 450.0], [59.6, 450.0], [59.7, 450.0], [59.8, 450.0], [59.9, 451.0], [60.0, 451.0], [60.1, 452.0], [60.2, 452.0], [60.3, 453.0], [60.4, 453.0], [60.5, 454.0], [60.6, 455.0], [60.7, 455.0], [60.8, 455.0], [60.9, 456.0], [61.0, 456.0], [61.1, 457.0], [61.2, 458.0], [61.3, 458.0], [61.4, 459.0], [61.5, 459.0], [61.6, 461.0], [61.7, 461.0], [61.8, 462.0], [61.9, 463.0], [62.0, 463.0], [62.1, 464.0], [62.2, 464.0], [62.3, 465.0], [62.4, 465.0], [62.5, 466.0], [62.6, 467.0], [62.7, 467.0], [62.8, 468.0], [62.9, 469.0], [63.0, 470.0], [63.1, 470.0], [63.2, 471.0], [63.3, 471.0], [63.4, 472.0], [63.5, 473.0], [63.6, 474.0], [63.7, 475.0], [63.8, 475.0], [63.9, 476.0], [64.0, 477.0], [64.1, 477.0], [64.2, 478.0], [64.3, 479.0], [64.4, 479.0], [64.5, 480.0], [64.6, 481.0], [64.7, 482.0], [64.8, 483.0], [64.9, 483.0], [65.0, 484.0], [65.1, 485.0], [65.2, 486.0], [65.3, 487.0], [65.4, 489.0], [65.5, 489.0], [65.6, 490.0], [65.7, 491.0], [65.8, 491.0], [65.9, 492.0], [66.0, 492.0], [66.1, 493.0], [66.2, 493.0], [66.3, 493.0], [66.4, 494.0], [66.5, 494.0], [66.6, 496.0], [66.7, 497.0], [66.8, 497.0], [66.9, 498.0], [67.0, 498.0], [67.1, 499.0], [67.2, 500.0], [67.3, 500.0], [67.4, 502.0], [67.5, 502.0], [67.6, 503.0], [67.7, 504.0], [67.8, 505.0], [67.9, 506.0], [68.0, 507.0], [68.1, 507.0], [68.2, 509.0], [68.3, 509.0], [68.4, 510.0], [68.5, 511.0], [68.6, 511.0], [68.7, 512.0], [68.8, 513.0], [68.9, 513.0], [69.0, 514.0], [69.1, 515.0], [69.2, 516.0], [69.3, 516.0], [69.4, 517.0], [69.5, 518.0], [69.6, 519.0], [69.7, 519.0], [69.8, 520.0], [69.9, 521.0], [70.0, 522.0], [70.1, 523.0], [70.2, 524.0], [70.3, 524.0], [70.4, 525.0], [70.5, 526.0], [70.6, 527.0], [70.7, 528.0], [70.8, 528.0], [70.9, 529.0], [71.0, 529.0], [71.1, 532.0], [71.2, 535.0], [71.3, 535.0], [71.4, 536.0], [71.5, 536.0], [71.6, 537.0], [71.7, 538.0], [71.8, 539.0], [71.9, 540.0], [72.0, 541.0], [72.1, 541.0], [72.2, 543.0], [72.3, 544.0], [72.4, 545.0], [72.5, 546.0], [72.6, 548.0], [72.7, 549.0], [72.8, 549.0], [72.9, 551.0], [73.0, 553.0], [73.1, 555.0], [73.2, 557.0], [73.3, 559.0], [73.4, 563.0], [73.5, 564.0], [73.6, 564.0], [73.7, 565.0], [73.8, 568.0], [73.9, 570.0], [74.0, 571.0], [74.1, 575.0], [74.2, 577.0], [74.3, 579.0], [74.4, 581.0], [74.5, 581.0], [74.6, 582.0], [74.7, 585.0], [74.8, 586.0], [74.9, 589.0], [75.0, 590.0], [75.1, 591.0], [75.2, 592.0], [75.3, 592.0], [75.4, 594.0], [75.5, 597.0], [75.6, 597.0], [75.7, 598.0], [75.8, 601.0], [75.9, 601.0], [76.0, 603.0], [76.1, 608.0], [76.2, 609.0], [76.3, 610.0], [76.4, 611.0], [76.5, 613.0], [76.6, 615.0], [76.7, 617.0], [76.8, 618.0], [76.9, 621.0], [77.0, 628.0], [77.1, 629.0], [77.2, 631.0], [77.3, 635.0], [77.4, 638.0], [77.5, 639.0], [77.6, 643.0], [77.7, 644.0], [77.8, 651.0], [77.9, 652.0], [78.0, 658.0], [78.1, 660.0], [78.2, 663.0], [78.3, 666.0], [78.4, 668.0], [78.5, 672.0], [78.6, 675.0], [78.7, 680.0], [78.8, 682.0], [78.9, 684.0], [79.0, 687.0], [79.1, 689.0], [79.2, 691.0], [79.3, 697.0], [79.4, 703.0], [79.5, 705.0], [79.6, 709.0], [79.7, 715.0], [79.8, 717.0], [79.9, 719.0], [80.0, 725.0], [80.1, 737.0], [80.2, 743.0], [80.3, 759.0], [80.4, 767.0], [80.5, 778.0], [80.6, 787.0], [80.7, 807.0], [80.8, 815.0], [80.9, 826.0], [81.0, 835.0], [81.1, 845.0], [81.2, 849.0], [81.3, 857.0], [81.4, 881.0], [81.5, 901.0], [81.6, 920.0], [81.7, 925.0], [81.8, 940.0], [81.9, 955.0], [82.0, 968.0], [82.1, 974.0], [82.2, 981.0], [82.3, 989.0], [82.4, 992.0], [82.5, 1005.0], [82.6, 1012.0], [82.7, 1027.0], [82.8, 1033.0], [82.9, 1036.0], [83.0, 1042.0], [83.1, 1048.0], [83.2, 1063.0], [83.3, 1067.0], [83.4, 1075.0], [83.5, 1080.0], [83.6, 1090.0], [83.7, 1132.0], [83.8, 1141.0], [83.9, 1147.0], [84.0, 1170.0], [84.1, 1173.0], [84.2, 1179.0], [84.3, 1194.0], [84.4, 1214.0], [84.5, 1241.0], [84.6, 1254.0], [84.7, 1263.0], [84.8, 1273.0], [84.9, 1282.0], [85.0, 1288.0], [85.1, 1292.0], [85.2, 1299.0], [85.3, 1311.0], [85.4, 1326.0], [85.5, 1338.0], [85.6, 1348.0], [85.7, 1360.0], [85.8, 1381.0], [85.9, 1389.0], [86.0, 1395.0], [86.1, 1410.0], [86.2, 1422.0], [86.3, 1442.0], [86.4, 1466.0], [86.5, 1480.0], [86.6, 1499.0], [86.7, 1516.0], [86.8, 1519.0], [86.9, 1524.0], [87.0, 1538.0], [87.1, 1553.0], [87.2, 1569.0], [87.3, 1587.0], [87.4, 1611.0], [87.5, 1664.0], [87.6, 1715.0], [87.7, 1734.0], [87.8, 1750.0], [87.9, 1771.0], [88.0, 1808.0], [88.1, 1823.0], [88.2, 1861.0], [88.3, 1905.0], [88.4, 1908.0], [88.5, 1952.0], [88.6, 1973.0], [88.7, 1993.0], [88.8, 2044.0], [88.9, 2084.0], [89.0, 2104.0], [89.1, 2127.0], [89.2, 2140.0], [89.3, 2154.0], [89.4, 2165.0], [89.5, 2185.0], [89.6, 2196.0], [89.7, 2208.0], [89.8, 2220.0], [89.9, 2232.0], [90.0, 2257.0], [90.1, 2275.0], [90.2, 2299.0], [90.3, 2341.0], [90.4, 2355.0], [90.5, 2368.0], [90.6, 2412.0], [90.7, 2442.0], [90.8, 2454.0], [90.9, 2463.0], [91.0, 2481.0], [91.1, 2485.0], [91.2, 2518.0], [91.3, 2528.0], [91.4, 2577.0], [91.5, 2581.0], [91.6, 2588.0], [91.7, 2617.0], [91.8, 2632.0], [91.9, 2672.0], [92.0, 2697.0], [92.1, 2708.0], [92.2, 2746.0], [92.3, 2778.0], [92.4, 2816.0], [92.5, 2842.0], [92.6, 2856.0], [92.7, 2883.0], [92.8, 2895.0], [92.9, 2918.0], [93.0, 2943.0], [93.1, 2967.0], [93.2, 3017.0], [93.3, 3043.0], [93.4, 3116.0], [93.5, 3227.0], [93.6, 3291.0], [93.7, 3292.0], [93.8, 3297.0], [93.9, 3358.0], [94.0, 3410.0], [94.1, 3436.0], [94.2, 3501.0], [94.3, 3566.0], [94.4, 3591.0], [94.5, 3631.0], [94.6, 3688.0], [94.7, 3711.0], [94.8, 3866.0], [94.9, 3882.0], [95.0, 3949.0], [95.1, 4012.0], [95.2, 4089.0], [95.3, 4128.0], [95.4, 4184.0], [95.5, 4222.0], [95.6, 4295.0], [95.7, 4325.0], [95.8, 4392.0], [95.9, 4449.0], [96.0, 4498.0], [96.1, 4683.0], [96.2, 4842.0], [96.3, 5277.0], [96.4, 5346.0], [96.5, 5393.0], [96.6, 5574.0], [96.7, 5872.0], [96.8, 5974.0], [96.9, 6010.0], [97.0, 6126.0], [97.1, 6335.0], [97.2, 6447.0], [97.3, 6502.0], [97.4, 6601.0], [97.5, 6698.0], [97.6, 6952.0], [97.7, 7097.0], [97.8, 7429.0], [97.9, 7528.0], [98.0, 7830.0], [98.1, 7979.0], [98.2, 8505.0], [98.3, 8653.0], [98.4, 8924.0], [98.5, 9150.0], [98.6, 9737.0], [98.7, 9850.0], [98.8, 10199.0], [98.9, 10311.0], [99.0, 10322.0], [99.1, 10407.0], [99.2, 10691.0], [99.3, 10826.0], [99.4, 10954.0], [99.5, 11022.0], [99.6, 11100.0], [99.7, 11175.0], [99.8, 11255.0], [99.9, 11667.0], [100.0, 21289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1150.0, "series": [{"data": [[200.0, 246.0], [300.0, 1150.0], [400.0, 556.0], [500.0, 248.0], [600.0, 106.0], [700.0, 39.0], [800.0, 23.0], [900.0, 28.0], [1000.0, 34.0], [1100.0, 21.0], [1200.0, 25.0], [1300.0, 24.0], [1400.0, 17.0], [1500.0, 22.0], [1600.0, 6.0], [1700.0, 11.0], [1800.0, 8.0], [1900.0, 14.0], [2000.0, 7.0], [2100.0, 19.0], [2200.0, 18.0], [2300.0, 9.0], [2400.0, 17.0], [2500.0, 15.0], [2600.0, 12.0], [2800.0, 16.0], [2700.0, 8.0], [2900.0, 9.0], [3000.0, 6.0], [3100.0, 3.0], [3200.0, 9.0], [3300.0, 5.0], [3400.0, 6.0], [3500.0, 7.0], [3600.0, 6.0], [3700.0, 3.0], [3800.0, 5.0], [3900.0, 5.0], [4000.0, 4.0], [4300.0, 5.0], [4100.0, 7.0], [4200.0, 5.0], [4400.0, 6.0], [4500.0, 1.0], [4600.0, 3.0], [4800.0, 2.0], [4700.0, 1.0], [4900.0, 1.0], [5300.0, 4.0], [5200.0, 3.0], [5600.0, 1.0], [5500.0, 1.0], [5400.0, 2.0], [5800.0, 3.0], [6100.0, 2.0], [6000.0, 3.0], [5900.0, 2.0], [6300.0, 5.0], [6500.0, 3.0], [6400.0, 3.0], [6600.0, 4.0], [6700.0, 1.0], [6900.0, 2.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7500.0, 3.0], [7700.0, 1.0], [7800.0, 2.0], [7900.0, 2.0], [8500.0, 3.0], [8600.0, 1.0], [8300.0, 2.0], [8800.0, 2.0], [9000.0, 1.0], [8900.0, 2.0], [9100.0, 1.0], [9200.0, 1.0], [9400.0, 1.0], [9700.0, 2.0], [9800.0, 2.0], [10200.0, 1.0], [10100.0, 3.0], [10600.0, 2.0], [10300.0, 6.0], [10500.0, 1.0], [10400.0, 1.0], [10700.0, 2.0], [10900.0, 5.0], [11000.0, 3.0], [11100.0, 6.0], [10800.0, 1.0], [11200.0, 2.0], [11300.0, 1.0], [11600.0, 2.0], [21200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 389.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1956.0, "series": [{"data": [[0.0, 1956.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 389.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 561.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 136.05402615278723, "minX": 1.60319286E12, "maxY": 136.05402615278723, "series": [{"data": [[1.60319286E12, 136.05402615278723]], "isOverall": false, "label": "Spike test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319286E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 339.5, "minX": 1.0, "maxY": 11698.0, "series": [{"data": [[2.0, 1807.5333333333333], [3.0, 11290.0], [4.0, 5962.0], [5.0, 11698.0], [6.0, 11132.0], [7.0, 9850.0], [8.0, 11100.0], [9.0, 5718.5], [10.0, 5757.5], [11.0, 10912.0], [12.0, 10370.0], [14.0, 11142.0], [15.0, 5722.5], [16.0, 11022.0], [17.0, 2734.0], [18.0, 1698.111111111111], [19.0, 5704.0], [20.0, 10789.0], [21.0, 3812.6666666666665], [22.0, 5741.0], [23.0, 5308.0], [24.0, 10157.0], [25.0, 2469.3999999999996], [26.0, 1788.8571428571427], [27.0, 2359.2], [28.0, 2387.0], [29.0, 3859.3333333333335], [30.0, 4774.0], [31.0, 3833.6666666666665], [32.0, 1093.8461538461538], [33.0, 1533.375], [34.0, 1973.5], [35.0, 3715.0], [36.0, 5222.0], [37.0, 3634.6666666666665], [38.0, 3666.6666666666665], [39.0, 1385.0], [40.0, 1079.5714285714287], [41.0, 3479.6666666666665], [42.0, 2457.0], [43.0, 3448.0], [44.0, 3151.6666666666665], [45.0, 3347.3333333333335], [46.0, 901.7058823529412], [47.0, 1217.8], [48.0, 1367.111111111111], [49.0, 1919.6], [50.0, 3222.6666666666665], [51.0, 1785.8333333333335], [52.0, 4150.5], [53.0, 2219.0], [54.0, 1744.5], [55.0, 1158.5454545454545], [56.0, 1776.1666666666667], [57.0, 1404.7777777777778], [58.0, 942.3571428571429], [59.0, 1517.1428571428569], [60.0, 1233.125], [61.0, 1286.0], [62.0, 1133.5], [63.0, 1263.2857142857142], [64.0, 872.4545454545455], [65.0, 1105.625], [66.0, 361.2857142857143], [67.0, 1047.625], [68.0, 369.45454545454544], [69.0, 832.0], [70.0, 428.2], [71.0, 1287.6], [72.0, 980.75], [73.0, 521.4285714285713], [74.0, 426.5], [75.0, 451.7647058823529], [76.0, 366.0], [77.0, 451.83333333333337], [78.0, 428.4666666666667], [79.0, 426.0], [80.0, 721.2], [81.0, 1334.75], [82.0, 478.5], [83.0, 975.0], [84.0, 998.4000000000001], [85.0, 435.25], [86.0, 659.5833333333333], [87.0, 381.6], [88.0, 657.5833333333333], [89.0, 401.64285714285717], [90.0, 673.1176470588235], [91.0, 610.3076923076923], [92.0, 479.7368421052632], [93.0, 597.2727272727273], [94.0, 610.6250000000001], [95.0, 354.5], [96.0, 841.5714285714287], [97.0, 743.4666666666667], [98.0, 843.7142857142857], [99.0, 687.0], [100.0, 557.9090909090909], [101.0, 660.0555555555555], [102.0, 375.79999999999995], [103.0, 386.8235294117647], [104.0, 802.0357142857143], [105.0, 442.1428571428571], [106.0, 374.7777777777778], [107.0, 1159.5555555555557], [108.0, 1043.6666666666667], [109.0, 437.0833333333333], [110.0, 1192.3076923076924], [111.0, 603.7391304347826], [112.0, 616.7692307692307], [113.0, 339.5], [114.0, 402.3636363636364], [115.0, 508.1333333333334], [116.0, 979.5], [117.0, 522.7368421052632], [118.0, 844.3846153846154], [119.0, 427.38461538461536], [120.0, 762.1111111111112], [121.0, 544.6499999999999], [122.0, 814.8461538461538], [123.0, 993.3846153846155], [124.0, 1028.4545454545455], [125.0, 1136.9], [126.0, 431.5454545454545], [127.0, 987.0869565217392], [128.0, 702.2307692307693], [129.0, 458.0], [130.0, 916.8095238095237], [131.0, 409.0], [132.0, 1240.111111111111], [133.0, 637.0], [134.0, 882.5357142857142], [135.0, 934.7333333333332], [136.0, 1115.9333333333332], [137.0, 530.2222222222223], [138.0, 729.4999999999999], [139.0, 421.49999999999994], [140.0, 1113.952380952381], [141.0, 563.3636363636363], [142.0, 967.5], [143.0, 773.5], [144.0, 394.1333333333334], [145.0, 857.4375], [146.0, 613.7368421052632], [147.0, 651.0833333333333], [148.0, 764.391304347826], [149.0, 905.6666666666666], [150.0, 751.1333333333334], [151.0, 1092.6], [152.0, 669.3076923076923], [153.0, 373.26666666666665], [154.0, 680.25], [155.0, 1231.1052631578948], [156.0, 479.0526315789473], [157.0, 763.6400000000001], [158.0, 1914.25], [159.0, 1166.3529411764705], [160.0, 723.3684210526316], [161.0, 783.1111111111111], [162.0, 896.1666666666667], [163.0, 783.1052631578946], [164.0, 630.5], [165.0, 1969.875], [166.0, 1401.1818181818182], [167.0, 1168.833333333334], [168.0, 1594.2941176470588], [169.0, 1043.8461538461538], [170.0, 1067.2307692307695], [171.0, 1148.0833333333333], [172.0, 1093.7826086956522], [173.0, 788.8421052631579], [174.0, 609.9583333333333], [175.0, 918.2727272727273], [176.0, 834.2], [177.0, 1114.4545454545455], [178.0, 1519.0526315789473], [179.0, 951.0454545454547], [180.0, 1080.7], [181.0, 880.3636363636364], [182.0, 879.4499999999998], [183.0, 930.9375000000002], [184.0, 1161.7857142857144], [185.0, 980.6111111111111], [186.0, 897.8750000000001], [187.0, 1308.404761904762], [188.0, 849.1538461538462], [189.0, 756.7599999999999], [190.0, 660.0909090909091], [191.0, 542.1666666666666], [192.0, 707.2857142857142], [193.0, 1013.1304347826086], [194.0, 797.5199999999999], [195.0, 775.3333333333331], [196.0, 707.6], [197.0, 727.5666666666668], [198.0, 925.0555555555555], [199.0, 798.4615384615386], [200.0, 836.741935483871], [201.0, 832.9571984435795], [1.0, 399.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[136.05402615278723, 972.5695113558152]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 201.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6005.733333333334, "minX": 1.60319286E12, "maxY": 156343.13333333333, "series": [{"data": [[1.60319286E12, 156343.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60319286E12, 6005.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319286E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 972.5695113558152, "minX": 1.60319286E12, "maxY": 972.5695113558152, "series": [{"data": [[1.60319286E12, 972.5695113558152]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319286E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 971.8423950447348, "minX": 1.60319286E12, "maxY": 971.8423950447348, "series": [{"data": [[1.60319286E12, 971.8423950447348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319286E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 79.19304886441857, "minX": 1.60319286E12, "maxY": 79.19304886441857, "series": [{"data": [[1.60319286E12, 79.19304886441857]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319286E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.60319286E12, "maxY": 797.0, "series": [{"data": [[1.60319286E12, 797.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60319286E12, 264.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60319286E12, 264.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60319286E12, 264.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60319286E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60319286E12, 375.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319286E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 10960.5, "series": [{"data": [[128.0, 347.5], [134.0, 415.0], [148.0, 354.5], [38.0, 363.0], [39.0, 273.5], [165.0, 342.0], [168.0, 369.0], [173.0, 396.5], [181.0, 407.5], [11.0, 259.0], [190.0, 436.5], [189.0, 428.0], [199.0, 337.0], [192.0, 379.0], [3.0, 282.0], [206.0, 410.0], [226.0, 417.0], [15.0, 272.0], [62.0, 285.0], [4.0, 294.0], [1.0, 326.5], [19.0, 277.0], [103.0, 327.0], [116.0, 301.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 6647.0], [38.0, 815.0], [39.0, 4065.0], [3.0, 7830.0], [62.0, 2577.0], [4.0, 6006.0], [6.0, 9616.0], [116.0, 2494.0], [134.0, 1506.0], [148.0, 2330.5], [165.0, 1171.5], [10.0, 10263.5], [168.0, 992.0], [173.0, 2458.0], [181.0, 1744.0], [11.0, 9062.0], [190.0, 1211.5], [189.0, 1791.0], [199.0, 1484.5], [192.0, 2165.0], [206.0, 1406.5], [226.0, 3164.0], [15.0, 4683.0], [1.0, 1808.0], [19.0, 10960.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 10959.5, "series": [{"data": [[128.0, 347.0], [134.0, 415.0], [148.0, 354.0], [38.0, 363.0], [39.0, 273.0], [165.0, 339.0], [168.0, 369.0], [173.0, 396.5], [181.0, 407.5], [11.0, 258.0], [190.0, 434.5], [189.0, 427.0], [199.0, 337.0], [192.0, 378.0], [3.0, 281.0], [206.0, 409.5], [226.0, 415.5], [15.0, 271.0], [62.0, 284.0], [4.0, 293.0], [1.0, 326.0], [19.0, 277.0], [103.0, 326.0], [116.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 6646.0], [38.0, 814.0], [39.0, 4065.0], [3.0, 7827.0], [62.0, 2577.0], [4.0, 6005.0], [6.0, 9615.0], [116.0, 2494.0], [134.0, 1505.5], [148.0, 2330.5], [165.0, 1171.0], [10.0, 10263.0], [168.0, 992.0], [173.0, 2452.0], [181.0, 1744.0], [11.0, 9062.0], [190.0, 1211.5], [189.0, 1790.5], [199.0, 1484.5], [192.0, 2165.0], [206.0, 1406.5], [226.0, 3163.0], [15.0, 4682.0], [1.0, 1807.0], [19.0, 10959.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 48.43333333333333, "minX": 1.60319286E12, "maxY": 48.43333333333333, "series": [{"data": [[1.60319286E12, 48.43333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319286E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 48.43333333333333, "minX": 1.60319286E12, "maxY": 48.43333333333333, "series": [{"data": [[1.60319286E12, 48.43333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319286E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.35, "minX": 1.60319286E12, "maxY": 39.083333333333336, "series": [{"data": [[1.60319286E12, 39.083333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60319286E12, 9.35]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319286E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.35, "minX": 1.60319286E12, "maxY": 39.083333333333336, "series": [{"data": [[1.60319286E12, 39.083333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60319286E12, 9.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319286E12, "title": "Total Transactions Per Second"}},
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

