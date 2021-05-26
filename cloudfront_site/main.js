(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\G1lev14\Desktop\test\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class AppService {
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    getComputerResult(options) {
        return Math.floor(Math.random() * options);
    }
    changingIconOfComputerSelect(userSelections, compResultElement) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(userSelections)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((select) => {
            this.removeAllClasses(compResultElement);
            this.addClass(compResultElement, select.class);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["scheduled"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(select), rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(250));
        }));
    }
    removeAllClasses(el) {
        const classes = el.nativeElement.getAttribute('class').split(' ');
        classes.forEach((cssClass) => {
            this.renderer.removeClass(el.nativeElement, cssClass);
        });
    }
    addClass(el, className) {
        this.renderer.addClass(el.nativeElement, 'fa');
        this.renderer.addClass(el.nativeElement, className);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ROCK, PAPER, SCISSORS, LIZARD, SPOCK, WON_MESSAGE, LOST_MESSAGE, TIE_MESSAGE, RESULT_MAP, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROCK", function() { return ROCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAPER", function() { return PAPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCISSORS", function() { return SCISSORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIZARD", function() { return LIZARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPOCK", function() { return SPOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WON_MESSAGE", function() { return WON_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOST_MESSAGE", function() { return LOST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIE_MESSAGE", function() { return TIE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_MAP", function() { return RESULT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["compRes"];
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_15_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const userSelection_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(userSelection_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userSelection_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("fa ", userSelection_r2.class, " ", (ctx_r1.userResult == null ? null : ctx_r1.userResult.name) === (userSelection_r2 == null ? null : userSelection_r2.name) ? "selected" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userSelection_r2.name);
} }
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
const LIZARD = 'Lizard';
const SPOCK = 'Spock';
const WON_MESSAGE = 'You WON';
const LOST_MESSAGE = 'You Lost';
const TIE_MESSAGE = 'TIE';
const RESULT_MAP = {
    [ROCK]: {
        [PAPER]: -1,
        [ROCK]: 0,
        [SCISSORS]: 1,
        [LIZARD]: 1,
        [SPOCK]: -1
    },
    [PAPER]: {
        [PAPER]: 0,
        [ROCK]: 1,
        [SCISSORS]: -1,
        [LIZARD]: 1,
        [SPOCK]: 1
    },
    [SCISSORS]: {
        [PAPER]: 1,
        [ROCK]: -1,
        [SCISSORS]: 0,
        [LIZARD]: -1,
        [SPOCK]: 1
    },
    [LIZARD]: {
        [PAPER]: 1,
        [ROCK]: -1,
        [SCISSORS]: -1,
        [LIZARD]: 0,
        [SPOCK]: 1
    },
    [SPOCK]: {
        [PAPER]: -1,
        [ROCK]: 1,
        [SCISSORS]: 1,
        [LIZARD]: -1,
        [SPOCK]: 0
    }
};
class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.userSelections = [
            {
                name: SCISSORS,
                class: 'fa-hand-scissors-o'
            },
            {
                name: PAPER,
                class: 'fa-hand-paper-o'
            },
            {
                name: ROCK,
                class: 'fa-hand-rock-o'
            },
            {
                name: LIZARD,
                class: 'fa-hand-lizard-o'
            },
            {
                name: SPOCK,
                class: 'fa-hand-spock-o'
            },
        ];
    }
    select(userSelect) {
        const compSelect = this.userSelections[this.appService.getComputerResult(this.userSelections.length)];
        this.userResult = userSelect;
        this.appService.changingIconOfComputerSelect(this.userSelections, this.compRes)
            .subscribe({
            complete: () => {
                this.appService.removeAllClasses(this.compRes);
                this.appService.addClass(this.compRes, compSelect.class);
                const result = RESULT_MAP[userSelect.name][compSelect.name];
                this.matchResult = result === -1 ? LOST_MESSAGE : result === 1 ? WON_MESSAGE : TIE_MESSAGE;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compRes = _t.first);
    } }, decls: 16, vars: 2, consts: [["data-cy", "main-page", 1, "main"], ["data-cy", "main-page__header", 1, "main__header"], ["data-cy", "main-page__title"], ["data-cy", "main-page__rules", 1, "rules"], [1, "rules__title"], ["data-cy", "result", 1, "result"], ["data-cy", "result__icon", 1, "fa"], ["compRes", ""], ["data-cy", "result__text"], ["data-cy", "user-selection", 1, "user-selection"], ["class", "user-selection__wrapper", 4, "ngFor", "ngForOf"], [1, "user-selection__wrapper"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Rock Paper Scissors Lizard Spock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Roooooooock crushes scissors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 4, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.matchResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userSelections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background: #eee;\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.main__header[_ngcontent-%COMP%]{\r\n    padding: 15px 10px;\r\n    font-size: 22px;\r\n    background: #333;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #eee;\r\n}\r\n\r\n.rules[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    background: #fff;\r\n    padding: 10px 15px;\r\n    border: 2px solid #c2113e;\r\n    border-left: 10px solid #c2113e;\r\n}\r\n\r\n.rules__title[_ngcontent-%COMP%]{\r\n    padding: 15px 10px;\r\n}\r\n\r\n.user-selection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    top: 45%;\r\n    position: absolute;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: -30px;\r\n    width: 90px;\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color: #054652;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]{\r\n    margin:35px;\r\n    position: relative;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 90px;\r\n    cursor: pointer;\r\n    color: #028ba3;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #054652;\r\n}\r\n\r\n.result[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 90px;\r\n    cursor: pointer;\r\n    color: #c2113e;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.result[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    font-size: 20px;\r\n    margin-top: 10px;\r\n    position: absolute;\r\n}\r\n\r\n.user-selection__wrapper[_ngcontent-%COMP%]   i.selected[_ngcontent-%COMP%]{\r\n    color: #007d45;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbl9faGVhZGVye1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5ydWxlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjMjExM2U7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjYzIxMTNlO1xyXG59XHJcblxyXG4ucnVsZXNfX3RpdGxle1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG59XHJcblxyXG4udXNlci1zZWxlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnVzZXItc2VsZWN0aW9uX193cmFwcGVyOmhvdmVyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi51c2VyLXNlbGVjdGlvbl9fd3JhcHBlciBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICMwNTQ2NTI7XHJcbn1cclxuXHJcbi51c2VyLXNlbGVjdGlvbl9fd3JhcHBlcntcclxuICAgIG1hcmdpbjozNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udXNlci1zZWxlY3Rpb25fX3dyYXBwZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzAyOGJhMztcclxufVxyXG5cclxuLnVzZXItc2VsZWN0aW9uX193cmFwcGVyIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwNTQ2NTI7XHJcbn1cclxuXHJcbi5yZXN1bHQgaSB7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2MyMTEzZTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnVzZXItc2VsZWN0aW9uX193cmFwcGVyIGkuc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogIzAwN2Q0NTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { compRes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['compRes']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map