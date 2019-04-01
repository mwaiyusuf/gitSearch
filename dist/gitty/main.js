(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-github-profile></app-github-profile>\n\n <app-profile></app-profile>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_form_github_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-form/github-form.component */ "./src/app/github-form/github-form.component.ts");
/* harmony import */ var _github_profile_github_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./github-profile/github-profile.component */ "./src/app/github-profile/github-profile.component.ts");
/* harmony import */ var _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./github-repo/github-repo.component */ "./src/app/github-repo/github-repo.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");










// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProfileComponent } from './component/profile/profile.component';
// import { FormComponent } from './form/form.component';
// import { ReposComponent } from './component/repos/repos.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _github_form_github_form_component__WEBPACK_IMPORTED_MODULE_6__["GithubFormComponent"],
                _github_profile_github_profile_component__WEBPACK_IMPORTED_MODULE_7__["GithubProfileComponent"],
                _github_repo_github_repo_component__WEBPACK_IMPORTED_MODULE_8__["GithubRepoComponent"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_9__["DateCountPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig, "$1 $2 $3").split(" ");
        var dateCreated = new Date(valueArr[0], valueArr[1] - 1, valueArr[2]);
        var now = new Date();
        var diff = now.getTime() - dateCreated.getTime();
        diff /= (1000 * 60 * 60 * 24);
        return Math.floor(diff);
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/github-form/github-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/github-form/github-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1mb3JtL2dpdGh1Yi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/github-form/github-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/github-form/github-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)='submitUser()' #githubForm='ngForm'>\n\n  <!--Name Input -->\n      <div class=\"form-group\">\n        <label appBolder for=\"name\">Search Profile:</label>\n        <input id=\"name\" class=\"form-control\" type=\"text\" required [(ngModel)]=\"username\" name=\"name\" #name=\"ngModel\">\n        <button type=\"submit\" class=\"btn-primary\">  🔍  SEARCH </button>\n      </div>\n      <div class=\"alert-danger\" [hidden]=\"name.valid || name.pristine\">\n        <p>Name is required</p>\n      </div>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/github-form/github-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/github-form/github-form.component.ts ***!
  \******************************************************/
/*! exports provided: GithubFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubFormComponent", function() { return GithubFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GithubFormComponent = /** @class */ (function () {
    function GithubFormComponent() {
        // user:User;
        this.username = "mwaiyusuf";
        this.addUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GithubFormComponent.prototype.submitUser = function () {
        this.addUser.emit(this.username);
    };
    GithubFormComponent.prototype.ngOnInit = function () {
        this.submitUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GithubFormComponent.prototype, "addUser", void 0);
    GithubFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-form',
            template: __webpack_require__(/*! ./github-form.component.html */ "./src/app/github-form/github-form.component.html"),
            styles: [__webpack_require__(/*! ./github-form.component.css */ "./src/app/github-form/github-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubFormComponent);
    return GithubFormComponent;
}());



/***/ }),

/***/ "./src/app/github-profile/github-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/github-profile/github-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n.following {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.max{\n  height: 400px;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\n/* .scroll {\n  max-height: 500px;\n  overflow: scroll;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViLXByb2ZpbGUvZ2l0aHViLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1wcm9maWxlL2dpdGh1Yi1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5cbi5mb2xsb3dpbmcge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXh7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIC5zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/github-profile/github-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/github-profile/github-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Github Search</h1>\n  <div class=\"row\">\n    <app-github-form (addUser)='getResponse($event)'></app-github-form>\n  </div> \n\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div >\n        <div class=\"center\">\n          <img src=\"{{user.photoUrl}}\" alt=\"Avatar\">\n          <h3  >{{user.userProfile}}</h3>\n        </div>\n        <p>{{user.bio}}</p>\n        <div class=\"follow\">\n          <button class=\"btn-info\" type=\"button\" name=\"button\">Followers: {{user.followers}}</button>\n          <button class=\"btn-info following\" type=\"button\" name=\"button\">Following: {{user.following}}</button>\n        </div>\n        <br>\n        <div class=\"center\">\n          <button class=\"btn-danger\" type=\"button\" name=\"button\" (click)='toggleRepos()' (click)='getRepos()'>Repos:{{user.numRepos}} <br> Click to View </button>\n        </div>\n        <br>\n        <p>Created {{user.created|dateCount}} day(s) ago.</p>\n        {{user.showRepos}}\n      </div>\n    </div> <!-- end div profile -->\n\n\n    <div class=\"col-md-6 scroll\">\n      <div *ngFor='let repo of arrayRepo'>\n        <app-github-repo *ngIf='user.showRepos' [repo]='repo'></app-github-repo>\n      </div>\n    </div> \n\n\n  </div> \n\n</div>\n"

/***/ }),

/***/ "./src/app/github-profile/github-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/github-profile/github-profile.component.ts ***!
  \************************************************************/
/*! exports provided: GithubProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubProfileComponent", function() { return GithubProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-http/user-request.service */ "./src/app/user-http/user-request.service.ts");



var GithubProfileComponent = /** @class */ (function () {
    // username:any;
    function GithubProfileComponent(userService) {
        this.userService = userService;
    }
    GithubProfileComponent.prototype.getResponse = function (username) {
        this.userService.userRequest(username);
        this.user = this.userService.user;
        this.user.showRepos = false;
        console.log("Got User Response");
        console.log(this.user);
        this.userService.repoRequest(username);
        this.arrayRepo = this.userService.arrayRepo;
        // console.log("Got Repos Response");
        // console.log(this.arrayRepo);
    };
    GithubProfileComponent.prototype.getRepos = function () {
        // this.userService.repoRequest(username);
        this.arrayRepo = this.userService.arrayRepo;
        console.log("Got Repos Response");
        console.log(this.arrayRepo);
    };
    GithubProfileComponent.prototype.toggleRepos = function () {
        this.user.showRepos = !this.user.showRepos;
        console.log("Toggle Repos");
    };
    GithubProfileComponent.prototype.ngOnInit = function () {
    };
    GithubProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-profile',
            template: __webpack_require__(/*! ./github-profile.component.html */ "./src/app/github-profile/github-profile.component.html"),
            providers: [_user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]],
            styles: [__webpack_require__(/*! ./github-profile.component.css */ "./src/app/github-profile/github-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]])
    ], GithubProfileComponent);
    return GithubProfileComponent;
}());



/***/ }),

/***/ "./src/app/github-repo/github-repo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display {\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #84ffff;\n  border-radius: 5px;\n  background-color: rgba(208, 246, 235, 0.68);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0aHViLXJlcG8vZ2l0aHViLXJlcG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9naXRodWItcmVwby9naXRodWItcmVwby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXkge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NGZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDI0NiwgMjM1LCAwLjY4KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/github-repo/github-repo.component.html":
/*!********************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"display\">\n\n    <p appBolder style=\"text-decoration: underline\">{{repo.appName}}</p>\n    <p style=\"text-decoration:bold\">{{repo.description}}</p>\n    <button  type=\"button\" name=\"button\"> <a href=\"{{repo.repoLink}}\">View Repository</a> </button>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/github-repo/github-repo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/github-repo/github-repo.component.ts ***!
  \******************************************************/
/*! exports provided: GithubRepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubRepoComponent", function() { return GithubRepoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-http/user-request.service */ "./src/app/user-http/user-request.service.ts");
/* harmony import */ var _repo_class_repo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repo-class/repo */ "./src/app/repo-class/repo.ts");




var GithubRepoComponent = /** @class */ (function () {
    function GithubRepoComponent(userService) {
        this.userService = userService;
    }
    GithubRepoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _repo_class_repo__WEBPACK_IMPORTED_MODULE_3__["Repo"])
    ], GithubRepoComponent.prototype, "repo", void 0);
    GithubRepoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github-repo',
            template: __webpack_require__(/*! ./github-repo.component.html */ "./src/app/github-repo/github-repo.component.html"),
            providers: [_user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]],
            styles: [__webpack_require__(/*! ./github-repo.component.css */ "./src/app/github-repo/github-repo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_http_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]])
    ], GithubRepoComponent);
    return GithubRepoComponent;
}());



/***/ }),

/***/ "./src/app/repo-class/repo.ts":
/*!************************************!*\
  !*** ./src/app/repo-class/repo.ts ***!
  \************************************/
/*! exports provided: Repo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repo", function() { return Repo; });
var Repo = /** @class */ (function () {
    function Repo(appName, repoLink, description) {
        this.appName = appName;
        this.repoLink = repoLink;
        this.description = description;
    }
    return Repo;
}());



/***/ }),

/***/ "./src/app/user-http/user-request.service.ts":
/*!***************************************************!*\
  !*** ./src/app/user-http/user-request.service.ts ***!
  \***************************************************/
/*! exports provided: UserRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestService", function() { return UserRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _repo_class_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repo-class/repo */ "./src/app/repo-class/repo.ts");





var UserRequestService = /** @class */ (function () {
    function UserRequestService(http) {
        this.http = http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", 0, 0, 0, "");
        this.repo = new _repo_class_repo__WEBPACK_IMPORTED_MODULE_4__["Repo"]("", "", "");
    }
    UserRequestService.prototype.userRequest = function (userInput) {
        var _this = this;
        this.http.get("https://api.github.com/users/" + userInput + "?access_token=cb327c777eff937591311a292e4721e661dd2c7f").subscribe(function (response) {
            var userData = response;
            _this.user.photoUrl = userData["avatar_url"];
            _this.user.userProfile = userData["login"];
            _this.user.bio = userData["bio"];
            _this.user.numRepos = userData["public_repos"];
            _this.user.followers = userData["followers"];
            _this.user.following = userData["following"];
            _this.user.created = userData["created_at"];
            return _this.user;
        });
    }; //end userRequest
    UserRequestService.prototype.repoRequest = function (userInput) {
        var _this = this;
        this.http.get("https://api.github.com/users/" + userInput + "/repos?access_token=cb327c777eff937591311a292e4721e661dd2c7f").subscribe(function (response) {
            var reposData = response;
            _this.arrayRepo = [];
            for (var index = 0; index < reposData["length"]; index++) {
                _this.repo = new _repo_class_repo__WEBPACK_IMPORTED_MODULE_4__["Repo"]("", "", "");
                _this.repo.appName = reposData[index]["name"];
                _this.repo.repoLink = reposData[index]["html_url"];
                _this.repo.description = reposData[index]["description"];
                _this.arrayRepo.push(_this.repo);
            }
            return _this.arrayRepo;
        });
    }; //end Request
    UserRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // providedIn: 'root'
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserRequestService);
    return UserRequestService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(photoUrl, userProfile, bio, numRepos, followers, following, created) {
        this.photoUrl = photoUrl;
        this.userProfile = userProfile;
        this.bio = bio;
        this.numRepos = numRepos;
        this.followers = followers;
        this.following = following;
        this.created = created;
        this.showRepos = false;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: ("https://api.github.com/users/")
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/moringa-school-projects/git-Search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map