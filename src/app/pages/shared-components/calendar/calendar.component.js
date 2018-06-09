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
var app_config_1 = require("../../../app.config");
require("style-loader!fullcalendar/dist/fullcalendar.min.css");
var CalendarComponent = (function () {
    function CalendarComponent(_appConfig) {
        var _this = this;
        this._appConfig = _appConfig;
        this.dragOptions = { zIndex: 999, revert: true, revertDuration: 0 };
        this.event = {};
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        this.calendarOptions = {
            header: {
                left: 'today prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: this.config.colors.primary,
                    textColor: this.config.colors.default,
                    description: 'Will be busy throughout the whole day'
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d + 5),
                    end: new Date(y, m, d + 7),
                    description: 'This conference should be worse visiting'
                },
                {
                    id: 999,
                    title: 'Blah Blah Car',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    description: 'Agree with this guy on arrival time'
                },
                {
                    id: 1000,
                    title: 'Buy this template',
                    start: new Date(y, m, d + 3, 12, 0),
                    allDay: false,
                    backgroundColor: this.config.colors.warning,
                    textColor: this.config.colors.default,
                    description: 'Make sure everything is consistent first'
                },
                {
                    title: 'Got to school',
                    start: new Date(y, m, d + 16, 12, 0),
                    end: new Date(y, m, d + 16, 13, 0),
                    backgroundColor: this.config.colors.danger,
                    textColor: this.config.colors.default,
                    description: 'Time to go back'
                },
                {
                    title: 'Study some Node',
                    start: new Date(y, m, d + 18, 12, 0),
                    end: new Date(y, m, d + 18, 13, 0),
                    backgroundColor: this.config.colors.success,
                    textColor: this.config.colors.default,
                    description: 'Node.js is a platform built ' +
                        'on Chrome\'s JavaScript runtime for easily' +
                        ' building fast, scalable network applications.' +
                        ' Node.js uses an event-driven, non-blocking' +
                        ' I/O model that makes it lightweight and' +
                        ' efficient, perfect for data-intensive real-time' +
                        ' applications that run across distributed devices.'
                },
                {
                    title: 'Azimuth link',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://themeseason.com/',
                    backgroundColor: this.config.colors.info,
                    textColor: this.config.colors.default,
                    description: this.config.title
                }
            ],
            eventColor: this.config.colors.info,
            selectable: true,
            selectHelper: true,
            select: function (start, end, allDay) {
                _this.createEvent = function () {
                    var title = _this.event.title;
                    if (title) {
                        _this.$calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay,
                            backgroundColor: _this.config.colors.success,
                            textColor: _this.config.colors.default
                        }, true // make the event "stick"
                        );
                    }
                    _this.$calendar.fullCalendar('unselect');
                    jQuery('#create-event-modal').modal('hide');
                };
                jQuery('#create-event-modal').modal('show');
            },
            eventClick: function (event) {
                _this.event = event;
                jQuery('#show-event-modal').modal('show');
            },
            editable: true,
            droppable: true,
            drop: function (dateItem, event) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = {
                    // use the element's text as the event title
                    title: jQuery.trim(jQuery(event.target).text())
                };
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = jQuery.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = dateItem;
                copiedEventObject.allDay = !dateItem.hasTime();
                var $categoryClass = jQuery(event.target).data('event-class');
                if ($categoryClass) {
                    copiedEventObject.className = [$categoryClass];
                }
                // render the event on the calendar
                // the last `true` argument determines if
                // the event 'sticks'
                // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
                jQuery(event.target).remove();
            },
            dayRender: function (date, cell) {
                var today = new Date().toDateString();
                var compareDate = date.toDate().toDateString();
                if (today == compareDate) {
                    cell.css("background-color", "#ccc");
                }
            }
        };
    }
    ;
    CalendarComponent.prototype.addEvent = function (event) {
        this.calendarOptions.events.push(event);
    };
    ;
    CalendarComponent.prototype.ngOnInit = function () {
        this.$calendar = jQuery('#calendar');
        this.$calendar.fullCalendar(this.calendarOptions);
        jQuery('.draggable').draggable(this.dragOptions);
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        selector: 'ubl-calendar',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './calendar.component.html'
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map