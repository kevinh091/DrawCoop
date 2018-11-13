webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet id =rou></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_main_main_component__ = __webpack_require__("./src/app/game/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_not_found_not_found_component__ = __webpack_require__("./src/app/game/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_switch_color_service__ = __webpack_require__("./src/app/services/switch-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loginForm_ui_component__ = __webpack_require__("./src/app/loginForm/ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_main_tools_tools_component__ = __webpack_require__("./src/app/game/main/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__front_page_front_page_component__ = __webpack_require__("./src/app/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__room_view_room_view_component__ = __webpack_require__("./src/app/room-view/room-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: ':name', component: __WEBPACK_IMPORTED_MODULE_4__game_main_main_component__["a" /* MainComponent */], data: { name: name } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__game_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["E" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["I" /* MatTooltipModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__game_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_5__game_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__loginForm_ui_component__["a" /* UiComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_main_tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__front_page_front_page_component__["a" /* FrontPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__room_view_room_view_component__["a" /* RoomViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__front_page_front_page_component__["b" /* FrontPageDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__front_page_front_page_component__["a" /* FrontPageComponent */], __WEBPACK_IMPORTED_MODULE_9__front_page_front_page_component__["b" /* FrontPageDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_switch_color_service__["a" /* SwitchColorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/front-page/front-page-dialog.component.css":
/***/ (function(module, exports) {

module.exports = "#dialogholder {\n  opacity: 0.99;\n  background-color:white;\n  width: 300 !important; \n  height: 200 auto;\n  margin: 0 auto;\n  display: block;\n  padding: 20px;\n  font-size: 10px;\n  font: \"Serif\";\n}\n\n.content{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#nameholder{\n  position: relative;\n  display: inline-block;\n}\n\n.content{\n  color: #888888;\n  font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/front-page/front-page-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialogholder\" class=\"dialogWindow\">\n\t<div *ngIf=\"isInvite; then curURL else inputRoom\" mat-dialog-content class=\"content\">\n\t</div>\n\n\t<ng-template #curURL>\n\t\t<h1 mat-dialog-title>Share this link</h1>\n\t\t<p>\t{{data.link}}</p>\n\t\t<div mat-dialog-actions class=\"content\">\n\t\t\t\t<button mat-button (click)=\"onNoClick()\">Copy to clipboard</button>\n\t\t\t\t<button mat-button (click)=\"cancel()\">Cancel</button>\n\t\t</div>\n\t</ng-template>\n\n\t<ng-template #inputRoom>\n\t<h1 mat-dialog-title>Create New Room</h1>\n\t<div #nameholder>\n\t\t\twhiteboard.gq/ <input #roomName type=\"text\"\n      (keyup.enter)=\"newRoom(roomName.value)\"\n      maxlength=\"12\"\t\n\t\t\tplaceholder=\" Enter Room Name\" >\n\t</div>\n\t<div mat-dialog-actions>\n\t\t<button mat-button (click)=\"newRoom(roomName.value)\">Go to New Room</button>\n\t\t<button mat-button (click)=\"cancel()\">Cancel</button>\n\t</div>\n\t</ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/front-page/front-page.component.css":
/***/ (function(module, exports) {

module.exports = "#mainBar{\n    background: rgba(119, 176, 199, 0.4);\n    position: relative;\n    z-index: 50;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n\n#logo{\n    position:absolute;\n    right: 40%;\n    z-index: 51\n}\n\n#githubReport{\n    position:absolute;\n    border-radius: 50%;\n    widows: 50px;\n    height: 50px;\n    right:10px;\n    bottom: 20%;\n    background-color:transparent; \n    border-color:transparent;\n}\n"

/***/ }),

/***/ "./src/app/front-page/front-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card id=\"mainBar\">\n    <img id=\"logo\"src=\"./../assets/title.png\" alt=\"Drawing Room\" height=\"60\" width=\"250\"/>\n    <mat-card-content>\n      \n    <button mat-raised-button (click)=\"newRoom()\" color=\"primary\">\n        New Room\n     </button>\n\n      <button mat-raised-button (click)=\"invite()\" color=\"primary\">\n         Invite\n      </button>\n\n      <button mat-button onclick=\" window.open('https://github.com/kevinh091/DrawCoop','_blank')\" id=\"githubReport\"> \n          <img src=\"./../assets/github.png\" height=\"50\"/>\n      </button>\n\n\n  \n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "./src/app/front-page/front-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FrontPageDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent(dialog) {
        this.dialog = dialog;
        this.DialogIsOpen = false;
    }
    FrontPageComponent.prototype.invite = function () {
        var _this = this;
        if (this.DialogIsOpen) {
            return;
        }
        //let op = ""+ Math.floor(Math.random()*10000);
        this.link = window.location.href;
        var dialogRef = this.dialog.open(FrontPageDialogComponent, { data: { link: this.link, isInvite: true } });
        this.DialogIsOpen = true;
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.DialogIsOpen = false;
        });
    };
    FrontPageComponent.prototype.newRoom = function () {
        var _this = this;
        if (this.DialogIsOpen) {
            return;
        }
        //let op = ""+ Math.floor(Math.random()*10000);
        var dialogRef = this.dialog.open(FrontPageDialogComponent, { data: { link: this.link, isInvite: false }, });
        this.DialogIsOpen = true;
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.DialogIsOpen = false;
        });
    };
    FrontPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-front-page',
            template: __webpack_require__("./src/app/front-page/front-page.component.html"),
            styles: [__webpack_require__("./src/app/front-page/front-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], FrontPageComponent);
    return FrontPageComponent;
}());

var FrontPageDialogComponent = /** @class */ (function () {
    function FrontPageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isInvite = data.isInvite;
    }
    FrontPageDialogComponent.prototype.onNoClick = function () {
        var selBox = document.createElement('textarea'); //to clipboard
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.data.link;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.dialogRef.close();
    };
    FrontPageDialogComponent.prototype.newRoom = function (roomName) {
        window.location.href = '/' + roomName;
        this.dialogRef.close();
    };
    FrontPageDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    FrontPageDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'front-page-dialog',
            template: __webpack_require__("./src/app/front-page/front-page-dialog.component.html"),
            styles: [__webpack_require__("./src/app/front-page/front-page-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], FrontPageDialogComponent);
    return FrontPageDialogComponent;
}());



/***/ }),

/***/ "./src/app/game/main/custom-drawing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDrawing; });
var CustomDrawing = /** @class */ (function () {
    function CustomDrawing() {
        //default
        this.pen = {
            color: [0, 0, 0],
            width: 2
        },
            this.canvas = {
                width: 900,
                height: 600,
                backgroundColor: [200, 200, 200]
            };
    }
    CustomDrawing.prototype.ngOnInit = function () {
    };
    return CustomDrawing;
}());



/***/ }),

/***/ "./src/app/game/main/main.component.css":
/***/ (function(module, exports) {

module.exports = "#div1 {\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0;\n    \n    /* This centers our sketch horizontally. */\n  \n    /* This centers our sketch vertically. */\n}"

/***/ }),

/***/ "./src/app/game/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\">\n\t<app-tools></app-tools>\n\t<app-room-view></app-room-view>\n\t<app-front-page style=\"width: 100%\"></app-front-page>\n</div>"

/***/ }),

/***/ "./src/app/game/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_drawing__ = __webpack_require__("./src/app/game/main/custom-drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_tools_component__ = __webpack_require__("./src/app/game/main/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_view_room_view_component__ = __webpack_require__("./src/app/room-view/room-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_regions_http_service__ = __webpack_require__("./src/app/services/regions.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_switch_color_service__ = __webpack_require__("./src/app/services/switch-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MainComponent = /** @class */ (function () {
    function MainComponent(route, switchColor, regionService) {
        var _this = this;
        this.route = route;
        this.switchColor = switchColor;
        this.regionService = regionService;
        this.my_nickname = 'Guest';
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__["connect"]('http://ec2-18-191-145-18.us-east-2.compute.amazonaws.com:3001');
        this.route.params.subscribe(function (param) {
            _this.socket.emit('join_room', param.name);
        });
        this.custom = new __WEBPACK_IMPORTED_MODULE_2__custom_drawing__["a" /* CustomDrawing */]();
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.tools = this.toolComponent;
        this.room_view = this.roomViewComponent;
    };
    MainComponent.prototype.onDraw = function (data) {
        this.myP.stroke(data.color[0], data.color[1], data.color[2]);
        this.myP.strokeWeight(data.width);
        this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
    };
    MainComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var s, location, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = function (myP) {
                            var cnvX;
                            var cnvY;
                            _this.myP = myP;
                            myP.setup = function () {
                                var cnv = myP.createCanvas(myP.windowWidth, myP.windowHeight);
                                cnvX = (myP.windowWidth - myP.width) / 2;
                                cnvY = (myP.windowHeight - myP.height) / 1.1;
                                cnv.position(0, 0);
                                cnv.style('vertical-align', 'top');
                                myP.background(_this.custom.canvas.backgroundColor);
                                myP.cursor(myP.CROSS);
                                document.getElementById('toolContainer').style.left = String(0 + 'px');
                                document.getElementById('toolContainer').style.top = String(myP.height / 4 + 'px');
                            };
                            myP.draw = function () {
                                if (_this.tools.isDragging) {
                                    document.getElementById('toolContainer').style.left =
                                        String(Math.max(myP.mouseX - 25, 0) + 'px');
                                    document.getElementById('toolContainer').style.top =
                                        String(myP.mouseY - 25 + 'px');
                                    return;
                                }
                                if (_this.room_view.myname.changed) {
                                    _this.socket.emit('change_name', _this.room_view.myname.name);
                                    _this.room_view.myname.changed = false;
                                }
                                if (myP.mouseIsPressed && !_this.tools.eraser_clicked) {
                                    var event_1 = {
                                        p1: { x: myP.mouseX, y: myP.mouseY },
                                        p2: _this.last_drew,
                                        color: [0, 0, 0],
                                        width: _this.custom.pen.width
                                    };
                                    _this.socket.emit('draw', event_1);
                                    _this.onDraw(event_1);
                                }
                                //Eraser is clicked
                                if (myP.mouseIsPressed && _this.tools.eraser_clicked) {
                                    var event_2 = {
                                        p1: { x: myP.mouseX, y: myP.mouseY },
                                        p2: _this.last_drew,
                                        color: _this.custom.canvas.backgroundColor,
                                        width: 120
                                    };
                                    _this.socket.emit('draw', event_2);
                                    _this.onDraw(event_2);
                                }
                                if (_this.tools.clear_clicked === true) {
                                    _this.socket.emit('clear', ' ');
                                    _this.myP.clear();
                                    _this.myP.createCanvas(myP.windowWidth, myP.windowHeight);
                                    _this.myP.background(_this.custom.canvas.backgroundColor);
                                    _this.tools.eraser_clicked = false;
                                    _this.tools.toolbar = false;
                                    _this.tools.clear_clicked = false;
                                }
                                _this.last_drew = { x: myP.mouseX, y: myP.mouseY };
                            };
                        };
                        this.socket.on('draw', function (data) {
                            _this.onDraw(data);
                        });
                        this.socket.on('clear', function (data) {
                            _this.myP.clear();
                            _this.myP.createCanvas(_this.myP.windowWidth, _this.myP.windowHeight);
                            _this.myP.background(_this.custom.canvas.backgroundColor);
                        });
                        this.socket.on('change_name', function (data) {
                            _this.room_view.persons = data;
                        });
                        return [4 /*yield*/, this.regionService.getRegion()];
                    case 1:
                        location = _a.sent();
                        this.socket.emit('location', location);
                        player = new p5(s);
                        return [2 /*return*/];
                }
            });
        });
    }; //close on ngOnInit
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__tools_tools_component__["a" /* ToolsComponent */]),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "toolComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__room_view_room_view_component__["a" /* RoomViewComponent */]),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "roomViewComponent", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/game/main/main.component.html"),
            styles: [__webpack_require__("./src/app/game/main/main.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_regions_http_service__["a" /* RegionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_switch_color_service__["a" /* SwitchColorService */], __WEBPACK_IMPORTED_MODULE_5__services_regions_http_service__["a" /* RegionService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/game/main/tools/tools.component.css":
/***/ (function(module, exports) {

module.exports = "#toolContainer{\n    position: relative;\n    padding-left: -15px;\n    padding-right: -15px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n\n#ToolIcon{\n    width: 50px;\n    height: 50px;\n    border-radius: 25%;\n    border: none;\n\toverflow: show;\n\tposition: absolute;\n    background: rgba(30, 30, 30, 0.7);\n    -webkit-text-fill-color: seashell;\n    z-index: 51;\n}\n\n#Pen{\n    width: 50px;\n\theight: 50px;\n\tborder-radius: 25%;\n\toverflow: show;\n\tposition: absolute;\n    top: 50px;\n    z-index: 1;\n}\n\n#Eraser{\n    width: 50px;\n\theight: 50px;\n\tborder-radius: 25%;\n\toverflow: show;\n\tposition: absolute;\n    top: calc(100px);\n    z-index: 1;\n}\n\n#Clear{\n    width: 50px;\n\theight: 50px;\n\tborder-radius: 25%;\n\toverflow: show;\n\tposition: absolute;\n    top: calc(150px);\n    z-index: 1;\n}"

/***/ }),

/***/ "./src/app/game/main/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<div (mouseover)='toolbar=true' (mouseleave)='toolbar=false' id = toolContainer>\n<body *ngIf=\"toolbar; then yestoolbar else notoolbar\" > this works</body>\n<button (mousedown) = 'this.isDragging =true;this.toolbar = false' (mouseup) = 'this.isDragging =false'id= ToolIcon>Tools</button>\n\n<ng-template #yestoolbar>\n    <button (click) = 'onClickPen()' id= Pen>Pen</button>\n    <button (click) = 'onClickEraser()' id= Eraser>Eraser</button>\n    <button (click) = 'onClickClear()' id= Clear>Clear</button>\n</ng-template>\n<ng-template #notoolbar>\n    \n</ng-template>\n</div>"

/***/ }),

/***/ "./src/app/game/main/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
        this.toolbar = false;
        this.clear_clicked = false;
        this.eraser_clicked = false;
        this.isDragging = false;
    }
    //toolbar's initial position is at main.component.ts function myP.setup
    ToolsComponent.prototype.onClickEraser = function () {
        this.eraser_clicked = true;
        document.getElementById('ToolIcon').innerText = 'Eraser';
    };
    ToolsComponent.prototype.onClickPen = function () {
        this.eraser_clicked = false;
        document.getElementById('ToolIcon').innerText = 'Pen';
    };
    ToolsComponent.prototype.onClickClear = function () {
        this.clear_clicked = true;
        document.getElementById('ToolIcon').innerText = 'Pen';
    };
    ToolsComponent.prototype.onClickIcon = function () {
        //this.toolbar = false;
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools',
            template: __webpack_require__("./src/app/game/main/tools/tools.component.html"),
            styles: [__webpack_require__("./src/app/game/main/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/game/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Your Room is no longer here.\n</p>"

/***/ }),

/***/ "./src/app/game/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/game/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/game/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/loginForm/ui.component.css":
/***/ (function(module, exports) {

module.exports = ".app{\n    position:absolute;\n    left: 50%;\n    top: 50%\n}\n\n.createRoom\n{\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%,-50%);\n\t        transform: translate(-50%,-50%);\n\tresize: both;\n    overflow: auto;\n\tpadding: 80px 40px;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tbackground: rgba(0,0,0,.5);\n}\n\n.createRoom\n{\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: bold;\n\tcolor: #fff;\n}\n\n.user\n{\n    width: 100px;\n\theight: 100px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tposition: absolute;\n\ttop: calc(-100px/2);\n\tleft: calc(50% - 50px);\n}\n\n.createRoom input\n{\n\twidth: 100%;\n\tmargin-bottom: 20px;\n}\n\n.createRoom input[type=\"text\"],\n.createRoom input[type=\"password\"]\n{\n\tborder: none;\n\tborder-bottom: 1px solid #fff;\n\tbackground: transparent;\n\toutline: none;\n\theight: 40px;\n\tcolor: #fff;\n\tfont-size: 16px;\n}\n\nh2{\n\tmargin: 0;\n\tpadding: 25% 0 20px;\n\tcolor: #efed40;\n\ttext-align: center;\n}\n\nform{\n\tmargin: 20%;\n\tpadding: 0 0 20px;\n\tcolor: #fff;\n\ttext-align: center;\n}\n\n::-webkit-input-placeholder\n{\n    color: rgba(255,255,255,.5);\n\n\tmargin: 0;\n\tpadding: 0 0 20px;\n\tcolor: #efeeee;\n\ttext-align: center;\n}\n\n:-ms-input-placeholder\n{\n    color: rgba(255,255,255,.5);\n\n\tmargin: 0;\n\tpadding: 0 0 20px;\n\tcolor: #efeeee;\n\ttext-align: center;\n}\n\n::-ms-input-placeholder\n{\n    color: rgba(255,255,255,.5);\n\n\tmargin: 0;\n\tpadding: 0 0 20px;\n\tcolor: #efeeee;\n\ttext-align: center;\n}\n\n::placeholder\n{\n    color: rgba(255,255,255,.5);\n\n\tmargin: 0;\n\tpadding: 0 0 20px;\n\tcolor: #efeeee;\n\ttext-align: center;\n}\n\n.createRoom input[type=\"submit\"]\n{\n\tborder: none;\n\toutline: none;\n\theight: 40px;\n\tcolor: #fff;\n\tfont-size: 16px;\n\tbackground: #ff267e;\n\tcursor: pointer;\n\tborder-radius: 20px;\n}\n\n.createRoom input[type=\"submit\"]:hover\n{\n\tbackground: #efed40;\n\tcolor: #262626;\n}\n\n.createRoom a\n{\n\tcolor: #fff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\ttext-decoration: none;\n}"

/***/ }),

/***/ "./src/app/loginForm/ui.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"createRoom\">\n        <img src='http://jiqing666.com/images/user.png' class=\"user\"/>\n        <h2>Drawing Room</h2>\n        <form>\n          <p>Nick Name</p>\n          <input type=\"text\" name=\"\" placeholder=\"Enter your name\"/>\n          <p>Room Password</p>\n          <input type=\"password\" name=\"\" placeholder=\"\"/>\n          <input type=\"submit\" name=\"\" value=\"Create\"/>\n          <!--a href=\"#\">Forget Password</a--> \n        </form>\n      </div>\n</body>\n"

/***/ }),

/***/ "./src/app/loginForm/ui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiComponent = /** @class */ (function () {
    function UiComponent() {
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    UiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui',
            template: __webpack_require__("./src/app/loginForm/ui.component.html"),
            styles: [__webpack_require__("./src/app/loginForm/ui.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UiComponent);
    return UiComponent;
}());



/***/ }),

/***/ "./src/app/room-view/room-view.component.css":
/***/ (function(module, exports) {

module.exports = ".room-view{\n    position: absolute;\n    bottom:1%;\n    right:0;\n\tbackground: rgba(255, 255,255, 0.7);\n\tborder-radius: 3px;\n\twidth: 210px;\n\theight: 315px;\n\tborder: 2px solid rgb(59, 132, 201);\n    margin: 30px 15px 30px 15px;\n    overflow-x: hidden;\n    z-index: 52;\n}\n#person{\n    position: relative;\n    margin: -3px;\n    height: 34px;\n    width: 210px;\n    background: transparent;\n    border: 2px solid rgb(59, 132, 201);\n    display: inline-block;\n}\n.names{\n    height: 35px;\n    top: 8px;\n    left: 3px;\n    font-size:18px;\n    position: absolute;\n}\n.yourname{\n    position: relative;\n    margin: 0;\n    height: 35px;\n    width: 210px;\n    color: rgb(179, 214, 194);\n    background: rgba(210, 255, 255, 0.7);\n    border: 2px solid rgb(59, 132, 201);\n    display: inline-block;\n}\n.yourname input[type=\"text\"]{\n    border: none;\n\tborder-bottom: 1px solid #fff;\n\tbackground: transparent;\n\toutline: none;\n    height: 30px;\n    width: 150px;\n\tcolor: #000;\n\tfont-size: 16px;\n}\n.change-buttom{\n    position: absolute;\n    right:5px;\n    top:3px;\n    height: 30px;\n    width: 55px;\n    border: none;\n    border-radius: 20%;\n    background: rgba(60,120,200,0.8);\n    color: rgb(255, 255, 255);\n}\n.location{\n    position: absolute;\n    right:4px;\n    top:3px;\n    height: 30px;\n    width: 40px;\n    border: none;\n    border-radius: 20%;\n    background: rgba(207, 30, 89, 0.8);\n    color: rgb(255, 255, 255);\n}"

/***/ }),

/***/ "./src/app/room-view/room-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"room-view\">\n    <div class=\"yourname\">\n      <input #nameholder type=\"text\"\n      (keyup.enter)=\"change_name(nameholder.value)\"\n      maxlength=\"16\"\n      placeholder=\" Enter your name\" >\n    <button (click)=\"change_name(nameholder.value)\" class=\"change-buttom\">Change</button>\n    </div>\n\n    <div id=\"person\" *ngFor=\"let person of persons\">\n      <div class=\"names\">{{person[0]}}</div>\n      <button class=\"location\">{{person[1]}}</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/room-view/room-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomViewComponent = /** @class */ (function () {
    function RoomViewComponent() {
        this.persons = [];
        this.myname = { name: 'Guest', changed: true };
    }
    RoomViewComponent.prototype.ngOnInit = function () {
    };
    RoomViewComponent.prototype.change_name = function (input) {
        this.myname.name = input == '' ? 'Guest' : input;
        this.myname.changed = true;
    };
    RoomViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-room-view',
            template: __webpack_require__("./src/app/room-view/room-view.component.html"),
            styles: [__webpack_require__("./src/app/room-view/room-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomViewComponent);
    return RoomViewComponent;
}());



/***/ }),

/***/ "./src/app/services/regions.http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
    }
    RegionService.prototype.getRegion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, js;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://ip-api.com/json/')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        js = _a.sent();
                        return [2 /*return*/, js.region];
                }
            });
        });
    };
    RegionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/app/services/switch-color.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchColorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchColorService = /** @class */ (function () {
    function SwitchColorService() {
        console.log("SwitchColorService has been connected!");
    }
    SwitchColorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SwitchColorService);
    return SwitchColorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map