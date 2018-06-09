"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_config_1 = require("../../../../app.config");
var Ng2ChartsComponent = (function () {
    function Ng2ChartsComponent(_appConfig) {
        this._appConfig = _appConfig;
        this.barChartType = 'bar';
        this.barChartTypeH = 'horizontalBar';
        this.barChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.pieChartType = 'pie';
        this.doughnutChartLegend = true;
        this.radarChartType = 'radar';
        this.radarChartLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartLegend = true;
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
    }
    Ng2ChartsComponent.prototype.ngOnInit = function () {
        // --- Bar Chart --- 
        this.barChartLabels = ['2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartData = [
            { data: [59, 80, 72, 56, 55, 40], label: 'Series A' },
            { data: [48, 40, 19, 75, 27, 80], label: 'Series B' }
        ];
        this.barChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
                borderColor: this.config.colors.danger,
                hoverBackgroundColor: this.config.colors.danger
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.info, 0.5),
                borderColor: this.config.colors.info,
                hoverBackgroundColor: this.config.colors.info
            }
        ];
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                            fontSize: 14,
                            stepSize: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.4),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7)
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.4),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.6)
            }
        };
        // --- Line Chart ---
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.success, 0.5),
                borderColor: this.config.colors.success,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.success,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.success
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.warning, 0.5),
                borderColor: this.config.colors.warning,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.warning,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.warning
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
                borderColor: this.config.colors.primary,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.primary,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.primary
            }
        ];
        this.lineChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.5),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7)
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.5),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        // --- Doughnut/Pie Chart ---
        this.doughnutChartLabels = ['Downloads', 'Sales', 'Orders'];
        this.doughnutChartData = [350, 420, 130];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    this.configFn.rgba(this.config.colors.success, 0.6),
                    this.configFn.rgba(this.config.colors.warning, 0.6),
                    this.configFn.rgba(this.config.colors.danger, 0.6)
                ],
                hoverBackgroundColor: [
                    this.config.colors.success,
                    this.config.colors.warning,
                    this.config.colors.danger
                ],
                borderColor: this.config.colors.default,
                borderWidth: 1,
                hoverBorderWidth: 3
            }
        ];
        this.doughnutChartOptions = {
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        // --- Radar Chart ---
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
                borderColor: this.config.colors.danger,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.danger,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.danger
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
                borderColor: this.config.colors.primary,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.primary,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.primary
            }
        ];
        this.radarChartOptions = {
            scale: {
                angleLines: {
                    lineWidth: 2,
                    color: this.configFn.rgba(this.config.colors.gray, 0.3)
                },
                pointLabels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                },
                gridLines: {
                    display: true,
                    color: this.configFn.rgba(this.config.colors.gray, 0.1)
                },
                ticks: {
                    fontColor: this.config.colors.main,
                    backdropColor: this.configFn.rgba(this.config.colors.gray, 0.1),
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        // --- Polar Area Chart ---
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 240, 130];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    this.configFn.rgba(this.config.colors.success, 0.6),
                    this.configFn.rgba(this.config.colors.warning, 0.6),
                    this.configFn.rgba(this.config.colors.danger, 0.6),
                    this.configFn.rgba(this.config.colors.primary, 0.6),
                    this.configFn.rgba(this.config.colors.info, 0.6)
                ],
                hoverBackgroundColor: [
                    this.config.colors.success,
                    this.config.colors.warning,
                    this.config.colors.danger,
                    this.config.colors.primary,
                    this.config.colors.info
                ],
                borderColor: this.config.colors.default,
                borderWidth: 1,
                hoverBorderWidth: 3
            }
        ];
        this.polarAreaChartOptions = {
            scale: {
                gridLines: {
                    display: true,
                    color: this.configFn.rgba(this.config.colors.gray, 0.1)
                },
                ticks: {
                    fontColor: this.config.colors.main,
                    backdropColor: this.configFn.rgba(this.config.colors.gray, 0.1),
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
    };
    Ng2ChartsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    Ng2ChartsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    return Ng2ChartsComponent;
}());
Ng2ChartsComponent = __decorate([
    core_1.Component({
        selector: 'ubl-ng2-charts',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './ng2-charts.component.html',
        styleUrls: ['./ng2-charts.component.scss']
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], Ng2ChartsComponent);
exports.Ng2ChartsComponent = Ng2ChartsComponent;
//# sourceMappingURL=ng2-charts.component.js.map