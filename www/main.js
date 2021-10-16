(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1g5":
/*!**************************************************************************************!*\
  !*** ./src/app/components/plats-of-modificateur/plats-of-modificateur.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 100% !important;\n  height: 45px;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRzLW9mLW1vZGlmaWNhdGV1ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InBsYXRzLW9mLW1vZGlmaWNhdGV1ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "+fB2":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detaille-commande/detaille-commande.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailleCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailleCommandeComponent", function() { return DetailleCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detaille_commande_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detaille-commande.component.html */ "x9bF");
/* harmony import */ var _detaille_commande_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detaille-commande.component.css */ "/cbE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-thermal-print */ "T+MG");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/Commandes/commandes.service */ "ATNw");








var DetailleCommandeComponent = /** @class */ (function () {
    function DetailleCommandeComponent(matdialogref, rs, data, printService, cs) {
        var _this = this;
        this.matdialogref = matdialogref;
        this.rs = rs;
        this.data = data;
        this.printService = printService;
        this.cs = cs;
        this.listeplats = this.data.requested_plat;
        this.listeOffres = this.data.custom_offres;
        this.listePlatsOffres = [];
        this.panelOpenState = true;
        this.status = false;
        this.ip = '';
        this.usbPrintDriver = new ng_thermal_print__WEBPACK_IMPORTED_MODULE_5__["UsbDriver"]();
        this.printService.isConnected.subscribe(function (result) {
            _this.status = result;
            if (result) {
                console.log('Connected to printer!!!');
            }
            else {
                console.log('Not connected to printer.');
            }
        });
    }
    DetailleCommandeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.id === undefined) {
            this.cs.getId(this.data.commande_id).subscribe(function (d) {
                _this.id = d;
            });
        }
        else {
            this.id = this.data.id;
        }
        this.rs.all().subscribe(function (r) {
            _this.restau = r[0];
        });
        if (this.listeOffres) {
            this.listeOffres.forEach(function (o) {
                o.requested_plats.forEach(function (p) {
                    _this.listePlatsOffres.push(p);
                });
            });
        }
    };
    DetailleCommandeComponent.prototype.close = function () {
        this.matdialogref.close();
    };
    DetailleCommandeComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantInfoService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_5__["PrintService"] },
        { type: _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_7__["CommandesService"] }
    ]; };
    DetailleCommandeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detaille-commande',
            template: _raw_loader_detaille_commande_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_detaille_commande_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantInfoService"], Object, ng_thermal_print__WEBPACK_IMPORTED_MODULE_5__["PrintService"], _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_7__["CommandesService"]])
    ], DetailleCommandeComponent);
    return DetailleCommandeComponent;
}());



/***/ }),

/***/ "/cbE":
/*!******************************************************************************!*\
  !*** ./src/app/components/detaille-commande/detaille-commande.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centre {\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbGxlLWNvbW1hbmRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGV0YWlsbGUtY29tbWFuZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "/yPy":
/*!******************************************************!*\
  !*** ./src/app/Services/TimeService/time.service.ts ***!
  \******************************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var TimeService = /** @class */ (function () {
    function TimeService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    TimeService.prototype.all = function () {
        return this.http.get(this.url + "/api/time", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    TimeService.prototype.set = function (worktime) {
        return this.http.post(this.url + "/api/time", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    TimeService.prototype.edit = function (worktime) {
        return this.http.put(this.url + "/api/time", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    TimeService.prototype.del = function (id) {
        return this.http.delete(this.url + "/api/time/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    TimeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    TimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jihen/Documents/GitHub/dashboard_ionic/src/main.ts */"zUnb");


/***/ }),

/***/ "0GFQ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/offre-management/offre-management.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter combot\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.nom}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- image Column -->\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell  *matHeaderCellDef> Image</th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <div *ngIf=\"element.image\">\n          <div class=\"image-container d-flex\">\n            <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                  style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.description}}\n      </td>\n    </ng-container>\n\n    <!-- statut Column -->\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell *matHeaderCellDef> Statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-slide-toggle class=\"example-margin\"\n                          [(ngModel)]=\"element.isDisponible\"\n                          (change)=\"changeStatut(element)\">\n        </mat-slide-toggle>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">\n          {{element.prix | currency:\"EUR\": true}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- plats Column -->\n    <ng-container matColumnDef=\"plats\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Plats</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"plats(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "0TIH":
/*!*******************************************************!*\
  !*** ./src/app/Services/Firebase/firebase.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);







var FirebaseService = /** @class */ (function () {
    function FirebaseService(http, cookie, db) {
        this.http = http;
        this.cookie = cookie;
        this.db = db;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    FirebaseService.prototype.update = function (data) {
        return this.db
            .collection('posts').doc(data.id).set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data));
    };
    FirebaseService.prototype.commandes = function () {
        return this.db
            .collection('posts')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return action.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, data);
            });
        }));
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
    ]; };
    FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "0ouZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>register-form works!</p>\n");

/***/ }),

/***/ "1PVb":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/statistics.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #f=\"ngForm\" (ngSubmit)=\"getdataOfNewYear()\">\n  <label style=\"font-size: 24px;\">\n    <mat-icon style=\"vertical-align: middle; color: #00B451\"> bar_chart</mat-icon>\n    Statistique des codes reductions:\n  </label>\n  <mat-form-field style=\"width: 90px\">\n    <input style=\"font-size: 18pt; text-align: center; font-weight: bold;\" matInput\n           type=\"number\" name=\"anne\" ngModel #annee=\"ngModel\"\n           [(ngModel)]=\"year\"\n           (ngModelChange)=\"getdataOfNewYear()\">\n  </mat-form-field>\n</form>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 \">\n      <canvas class=\"chartstat\" baseChart\n              [datasets]=\"barChartData\"\n              [labels]=\"barChartLabels\"\n              [options]=\"barChartOptions\"\n              [colors]=\"barChartColors\"\n              [legend]=\"barChartLegend\"\n              [chartType]=\"barChartType\">\n      </canvas>\n    </div>\n    <div class=\"col-lg-4 \">\n      <canvas class=\"chartstat\" baseChart\n              [datasets]=\"barChartDataQuantity\"\n              [labels]=\"barChartLabelsQuantity\"\n              [options]=\"barChartOptions\"\n              [colors]=\"barChartColors\"\n              [legend]=\"barChartLegend\"\n              [chartType]=\"barChartType\">\n      </canvas>\n    </div>\n\n\n    <div class=\"col-lg-4 \">\n      <canvas class=\"chartstat\" baseChart\n              [datasets]=\"barChartDataCodes\"\n              [labels]=\"barChartLabelcodes\"\n              [options]=\"barChartOptions\"\n              [colors]=\"barChartColors\"\n              [legend]=\"barChartLegend\"\n              [chartType]=\"barChartType\">\n      </canvas>\n    </div>\n  <div class=\"col-lg-12 chartstat\" style=\"vertical-align: middle\">\n    <h3 style=\"text-align: left; font-size: 16pt; padding: 10px;\">\n      Nombre de codes de reductions actives: &nbsp; {{nbrActiveCodes}}\n    </h3>\n  </div>\n    <div class=\"col-lg-12\">\n      <div class=\"table-responsive\">\n        <table class=\"table\" mat-table matSort [dataSource]=\"dataSource\" style=\"width: 100%\">\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Nom & prenom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 14pt;line-height: 14pt;\">\n                {{element.nom}} &nbsp; {{element.prenom}}\n              </p>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> email</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 14pt;line-height: 14pt;\">\n                {{element.email}}\n              </p>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"code\">\n            <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> code</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 14pt;line-height: 14pt;\">\n                {{element.code}}\n              </p>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"nbruse\">\n            <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> nombre d'utilisation</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 14pt;line-height: 14pt;\">\n                {{element.nbruse}}\n              </p>\n            </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"  style=\"width: 100%\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: white;\n  text-decoration: none;\n}\n\nmat-expansion-panel-header {\n  background-color: rgb(92 141 216);\n}\n\nmat-panel-title {\n  color: white;\n}\n\n.logo {\n  padding-bottom: 3%;\n  background-color: rgb(121 151 196);\n}\n\n.bg-blue {\nbackground: rgb(121 151 196);\n}\n\n.bg-blue-panel:hover, .bg-blue-panel:focus {\n  background: rgb(92 141 190);\n}\n\n.mat-expansion-panel {\n   background:  rgb(121 151 196);\n   box-shadow: none;\n}\n\nsidebar{\n  background: #fcfcfc !important;\n}\n\n.icon-cmd{\n  width: 100%;text-align: center;font-size: 5em\n}\n\n.dropdown-item{padding: 0!important;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0dBQ0csNkJBQTZCO0dBQzdCLGdCQUFnQjtBQUNuQjs7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztBQUNqQzs7QUFDQSxlQUFlLG9CQUFvQixDQUFDIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIgMTQxIDIxNik7XG59XG5tYXQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxIDE1MSAxOTYpO1xufVxuXG4uYmctYmx1ZSB7XG5iYWNrZ3JvdW5kOiByZ2IoMTIxIDE1MSAxOTYpO1xufVxuXG4uYmctYmx1ZS1wYW5lbDpob3ZlciwgLmJnLWJsdWUtcGFuZWw6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2IoOTIgMTQxIDE5MCk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICBiYWNrZ3JvdW5kOiAgcmdiKDEyMSAxNTEgMTk2KTtcbiAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5zaWRlYmFye1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59XG4uaWNvbi1jbWR7XG4gIHdpZHRoOiAxMDAlO3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDVlbVxufVxuLmRyb3Bkb3duLWl0ZW17cGFkZGluZzogMCFpbXBvcnRhbnQ7fVxuIl19 */");

/***/ }),

/***/ "2L9U":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant-info-management/restaurant-info-management.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" style=\"margin-right: 1%\">\n    <mat-icon>add</mat-icon> Ajouter restaurant\n  </button>\n  <mat-form-field color=\"accent\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.nom_restaurant}} </td>\n    </ng-container>\n\n    <!-- logo Column -->\n    <ng-container matColumnDef=\"logo\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> logo</th>\n      <td mat-cell *matCellDef=\"let element\"> <img src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.logo}}\" style=\"height: 50px; width: 50px; display: block; margin: 3%\"> </td>\n    </ng-container>\n\n    <!-- Address Column -->\n    <ng-container matColumnDef=\"adresse\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Adresse</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n    </ng-container>\n\n    <!-- tel Column -->\n    <ng-container matColumnDef=\"tel\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Tel</th>\n      <td mat-cell *matCellDef=\"let element\"> 11111111 </td>\n    </ng-container>\n\n    <!-- stripe Column -->\n    <ng-container matColumnDef=\"Stripe\">\n      <th mat-header-cell *matHeaderCellDef> Stripe</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button (click)=\"stripe(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- paypal Column -->\n    <ng-container matColumnDef=\"paypal\">\n      <th mat-header-cell *matHeaderCellDef> paypal</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button (click)=\"paypal(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- num tva Column -->\n    <ng-container matColumnDef=\"num_tva\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> num tva</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.numero_tva}} </td>\n    </ng-container>\n\n    <!-- num tva intercom Column -->\n    <ng-container matColumnDef=\"num_tva_intercom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> num tva intercom</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.num_tva_intercommunautaire}} </td>\n    </ng-container>\n\n    <!-- num siret Column -->\n    <ng-container matColumnDef=\"num_siret\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> num siret</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.num_siret}} </td>\n    </ng-container>\n\n    <!-- num siren  Column -->\n    <ng-container matColumnDef=\"num_siren\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> num siren</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.num_siren}} </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button color=\"primary\" (click)=\"edit(element)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "3AEa":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/schedule-and-holidays-management/schedule-and-holidays-management.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-table {\n  width: 100%;\n}\n\nmat-panel-title {\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\n.btn-schedule{\n  width: 100%;\n}\n\n.ferier{\n  background: white;\n  border-radius: 5px;\n  padding: 10px;\n  width: 99%;\n  margin: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWFuZC1ob2xpZGF5cy1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtBQUNaIiwiZmlsZSI6InNjaGVkdWxlLWFuZC1ob2xpZGF5cy1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc2NoZWR1bGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmVyaWVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTklO1xuICBtYXJnaW46IDElO1xufVxuIl19 */");

/***/ }),

/***/ "3C74":
/*!***************************************************************************!*\
  !*** ./src/app/Services/RestaurantInfoService/restaurant-info.service.ts ***!
  \***************************************************************************/
/*! exports provided: RestaurantInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantInfoService", function() { return RestaurantInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var RestaurantInfoService = /** @class */ (function () {
    function RestaurantInfoService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    RestaurantInfoService.prototype.all = function () {
        return this.http.get(this.url + "/api/restau", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.myRestau = function () {
        return this.http.get(this.url + "/api/myrestau", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.add = function (restau) {
        return this.http.post(this.url + "/api/restau", restau, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.update = function (restau) {
        return this.http.put(this.url + "/api/restau", restau, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.delete = function (restau) {
        return this.http.delete(this.url + "/api/restau/" + restau.id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.affectRestauToHoliday = function (idholiday, idRestaurantInfo) {
        // tslint:disable-next-line:max-line-length
        return this.http.put(this.url + "/api/affectRestauToHoliday/" + idholiday + "/" + idRestaurantInfo, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.deleteRestauFromWorkTime = function (idWorkTime) {
        // tslint:disable-next-line:max-line-length
        return this.http.put(this.url + "/api/deleteRestauFromWorkTime/" + idWorkTime, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.affectUserToRestau = function (user_id, restau_id) {
        // tslint:disable-next-line:max-line-length
        return this.http.put(this.url + "/api/affectUserToRestau/" + user_id + "/" + restau_id, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.detachUserFromRestau = function (restau_id) {
        return this.http.put(this.url + "/api/detachUserFromRestau/" + restau_id, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.affectrestauinfoToTime = function (idschedule, idRestaurantInfo) {
        return this.http.put(this.url + "/api/affectRestauToTime/" + idschedule + "/" + idRestaurantInfo, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.prototype.detachRestauFromTime = function (idWorkTime) {
        return this.http.put(this.url + "/api/deleteRestauFromTime/" + idWorkTime, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    RestaurantInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    RestaurantInfoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], RestaurantInfoService);
    return RestaurantInfoService;
}());



/***/ }),

/***/ "3G11":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-work-time-form/edit-work-time-form.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1 class=\"text_align-center\" style=\"margin-left: 20%\">temps de travaille</h1>\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\" style=\"margin: 0; padding: 0;\">\n\n  <div class=\"example-container\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Debut</mat-label>\n      <input matInput [(ngModel)]=\"data.date\"  #start=\"ngModel\" name=\"start\" ngModel  [matDatepicker]=\"picker\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker touchUi #picker></mat-datepicker>\n    </mat-form-field>\n    <ngb-timepicker [(ngModel)]=\"timestart\" #starttime=\"ngModel\" ngModel name=\"starttime\"></ngb-timepicker>\n\n    <br>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Fin</mat-label>\n      <input matInput [(ngModel)]=\"dateend\"  #end=\"ngModel\" name=\"end\" ngModel  [matDatepicker]=\"picker1\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker touchUi #picker1></mat-datepicker>\n    </mat-form-field>\n    <ngb-timepicker [(ngModel)]=\"timeend\" #endtime=\"ngModel\" ngModel name=\"endtime\"></ngb-timepicker>\n\n    <br>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Férié</mat-label>\n      <input matInput [(ngModel)]=\"dateholiday\"  #holiday=\"ngModel\" name=\"holiday\" ngModel  [matDatepicker]=\"picker2\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker touchUi #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <button mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" [disabled]=\"f.invalid\">envoyer</button>\n    <button mat-stroked-button type=\"reset\" class=\"ml-3\" style=\"background-color: #b0bec5\" >vider le formulaire</button>\n    <button type=\"button\" mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"onclose(f)\" >annuler/terminer</button>\n  </div>\n</form>\n");

/***/ }),

/***/ "3L+n":
/*!*********************************************!*\
  !*** ./src/app/Models/userswithhistoric.ts ***!
  \*********************************************/
/*! exports provided: Userswithhistoric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userswithhistoric", function() { return Userswithhistoric; });
var Userswithhistoric = /** @class */ (function () {
    function Userswithhistoric() {
    }
    return Userswithhistoric;
}());



/***/ }),

/***/ "4Fcb":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all-tickets/all-tickets.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n      <h1>\n        Historique d'achat du client : &nbsp; {{data.nom}} &nbsp; {{data.prenom}}\n      </h1>\n    </div>\n  </div>\n\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table matSort [dataSource]=\"dataSource\">\n\n      <!-- id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef> id</th>\n        <td mat-cell *matCellDef=\"let element\">\n            {{element.id}}\n        </td>\n      </ng-container>\n\n      <!-- Ticket Column -->\n      <ng-container matColumnDef=\"Tickets\">\n        <th mat-header-cell *matHeaderCellDef> Tickets</th>\n        <td mat-cell *matCellDef=\"let element; let i = index\">\n          <button mat-button (click)=\"tickets(element)\">\n            <mat-icon>visibility</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <!-- date creation Column -->\n      <ng-container matColumnDef=\"date creation\">\n        <th mat-header-cell mat-sort-header  *matHeaderCellDef> date de creation</th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{element.created_at | date: 'dd-MM-YYYY'}}\n        </td>\n      </ng-container>\n\n      <!-- prix Column -->\n      <ng-container matColumnDef=\"prix\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <p style=\"font-size: 12pt\">\n            {{element.prix_total | currency:\"EUR\": true}}\n          </p>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n\n\n\n\n</div>\n");

/***/ }),

/***/ "4UcO":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-management.component.html */ "IeRK");
/* harmony import */ var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component.css */ "bQcG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/code-reduction */ "TTaY");
/* harmony import */ var _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/CodeRedService/code-red.service */ "pkpz");







var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(matdialogref, data, dialog, crs) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.crs = crs;
        this.user = this.data.user;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__["CodeReduction"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_6__["CodeRedService"] }
    ]; };
    UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-management',
            template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__["CodeReduction"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_6__["CodeRedService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "4e36":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/commandes-archives/commandes-archives.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef > Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.user.nom}}</p>\n      </td>\n    </ng-container>\n\n    <!-- tel Column -->\n    <ng-container matColumnDef=\"numero_de_telephone\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef > Tel</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">{{element.user.numero_de_telephone}}</p>\n      </td>\n    </ng-container>\n\n    <!-- détailles de la commande Column -->\n    <ng-container matColumnDef=\"détailles de commande\">\n      <th mat-header-cell *matHeaderCellDef> commande</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"detaillesCommande(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix_total\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef > prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.prix_total | currency:'EUR':true}}</p>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "5jjd":
/*!**************************************************************************!*\
  !*** ./src/app/components/plat-management/plat-management.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\ntable {\n  width: 100%;\n}\nmat-icon:hover {\n  cursor: pointer;\n}\n/*mat slide color*/\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 180, 81, 0.52) ;\n}\n::ng-deep  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:#00B451;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXQtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJwbGF0LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qbWF0IHNsaWRlIGNvbG9yKi9cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDgxLCAwLjUyKSA7XG59XG5cbjo6bmctZGVlcCAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBCNDUxO1xufVxuIl19 */");

/***/ }),

/***/ "6iUb":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-times/work-times.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-dark\">\n\n  <mat-accordion>\n\n    <mat-expansion-panel (opened)=\"displayCol()\"\n                         (closed)=\"panelOpenState = false\"\n                         [expanded]=\"true\"\n                         class=\"bg-dark\"\n    >\n      <mat-expansion-panel-header >\n        <mat-panel-title>\n          ajouter temps de travail\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"demo-button-container\" *ngIf=\"displayedColumns !== displayedColumns1\">\n        <button\n          mat-raised-button\n          [disabled]=\"!dataSource.data.length\"\n          (click)=\"submit()\"\n          class=\"demo-button\">\n          Envoyer\n        </button>\n        <button\n          mat-raised-button\n          [disabled]=\"!dataSource.data.length\"\n          (click)=\"removeData()\"\n          class=\"demo-button\">\n          Supprimer la derniere ligne\n        </button>\n      </div>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\" *ngIf=\"displayedColumns !== displayedColumns1\">\n        <!-- jour Column -->\n        <ng-container matColumnDef=\"jour\">\n          <th mat-header-cell *matHeaderCellDef>Jour</th>\n          <td mat-cell *matCellDef=\"let element; let l = index;\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Selectionner le jour</mat-label>\n              <mat-select [(ngModel)]=\"dayselected[l]\" (selectionChange)=\"selectday(l)\">\n                <mat-option *ngFor=\"let day of week\" [value]=\"day\">{{day}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </ng-container>\n\n        <!-- debut Column -->\n        <ng-container matColumnDef=\"debut\">\n          <th mat-header-cell *matHeaderCellDef>Debut</th>\n          <td mat-cell *matCellDef=\"let element; let i = index\">\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n              <mat-label>Choisir une date</mat-label>\n              <input matInput [matDatepickerFilter]=\"myFilter[i]\" [matDatepicker]=\"picker\"\n                     (dateChange)=\"getStartDate(i, $event)\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker></mat-datepicker>\n            </mat-form-field>\n            <ngb-timepicker *ngIf=\"element.start\" [(ngModel)]=\"timeStart[i]\"\n                            (ngModelChange)=\"getStartTime(i, timeStart[i])\"></ngb-timepicker>\n          </td>\n        </ng-container>\n\n        <!-- fin Column -->\n        <ng-container matColumnDef=\"fin\">\n          <th mat-header-cell *matHeaderCellDef>Fin</th>\n          <td mat-cell *matCellDef=\"let element; let j = index\">\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n              <mat-label>Choisir une date</mat-label>\n              <input matInput [matDatepicker]=\"fin\" (dateChange)=\"getFinDate(j, $event)\">\n              <mat-datepicker-toggle matSuffix [for]=\"fin\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #fin></mat-datepicker>\n            </mat-form-field>\n            <ngb-timepicker *ngIf=\"element.end\" [(ngModel)]=\"timeEnd[j]\"\n                            (ngModelChange)=\"getEndTime(j, timeEnd[j])\"></ngb-timepicker>\n          </td>\n        </ng-container>\n\n        <!-- jour_férié Column -->\n        <ng-container matColumnDef=\"jour_férié\">\n          <th mat-header-cell *matHeaderCellDef>Férié</th>\n          <td mat-cell *matCellDef=\"let element; let k = index;\">\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n              <mat-label>Choose a date</mat-label>\n              <input matInput [matDatepicker]=\"holiday\" (dateChange)=\"getHolidayDate(k, $event)\">\n              <mat-datepicker-toggle matSuffix [for]=\"holiday\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #holiday></mat-datepicker>\n            </mat-form-field>\n          </td>\n        </ng-container>\n\n        <!-- validate Column -->\n        <ng-container matColumnDef=\"validate\">\n          <th mat-header-cell *matHeaderCellDef>Valider</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button\n              mat-raised-button\n              (click)=\"addData()\"\n              class=\"demo-button\">\n              Add data\n            </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel (opened)=\"displayCol1()\"\n                         (closed)=\"panelOpenState = false\"\n                         class=\"bg-dark\"\n    >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Consulter les temps de travail\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <div *ngIf=\"displayedColumns === displayedColumns1\">\n        <mat-form-field color=\"accent\">\n          <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n        </mat-form-field>\n      </div>\n\n      <div class=\"mat-elevation-z8\" *ngIf=\"displayedColumns === displayedColumns1\">\n        <table mat-table matSort [dataSource]=\"dataSource1\">\n\n          <!-- Day Column -->\n          <ng-container matColumnDef=\"jour\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Jour</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div *ngIf=\"element.date.getDay() ===0\">\n                dimanche {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===1\">\n                lundi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===2\">\n                mardi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===3\">\n                mercredi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===4\">\n                jeudi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===5\">\n                vendredi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n              <div *ngIf=\"element.date.getDay() ===6\">\n                samedi {{element.date.getDate()}}/{{element.date.getMonth()}}/ {{element.date.getFullYear()}}\n              </div>\n            </td>\n          </ng-container>\n\n          <!-- Start Column -->\n          <ng-container matColumnDef=\"debut\">\n            <th mat-header-cell *matHeaderCellDef> Début</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.worktime.start\">{{element.worktime.start.substr(11)}}</p>\n            </td>\n          </ng-container>\n\n          <!-- end Column -->\n          <ng-container matColumnDef=\"fin\">\n            <th mat-header-cell *matHeaderCellDef> Fin</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.worktime.end\">{{element.worktime.end.substr(11)}}</p>\n            </td>\n          </ng-container>\n\n          <!-- Holidays Column -->\n          <ng-container matColumnDef=\"jour_férié\">\n            <th mat-header-cell *matHeaderCellDef> Jour férié</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p>{{element.worktime.holiday}}</p>\n            </td>\n          </ng-container>\n\n          <!-- edit Column -->\n          <ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef> modifier</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-raised-button color=\"primary\" (click)=\"edit(element)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n          <!-- Row shown when there is no matching data. -->\n          <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n          </tr>\n\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n</div>\n");

/***/ }),

/***/ "7xGT":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificateur-management/modificateur-management.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter modificateur\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.nom}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Limite Column -->\n    <ng-container matColumnDef=\"limite\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Limite</th>\n      <td mat-cell *matCellDef=\"let element\">\n\n          {{element.limite}}\n\n      </td>\n    </ng-container>\n\n    <!-- plats Column -->\n    <ng-container matColumnDef=\"plats\">\n      <th mat-header-cell  *matHeaderCellDef> Plats</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"plats(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- ingredients Column -->\n    <ng-container matColumnDef=\"ingredients\">\n      <th mat-header-cell *matHeaderCellDef> Ingredients</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"Ingredients(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">\n          {{element.prix | currency:\"EUR\": true}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "8Fj3":
/*!********************************************************************************!*\
  !*** ./src/app/components/commandes-archives/commandes-archives.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n::ng-deep .mat-focused .mat-form-field-label  {\n  /*change color of label*/\n  color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #343a40 !important;;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlcy1hcmNoaXZlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImNvbW1hbmRlcy1hcmNoaXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDs7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "8R5h":
/*!****************************************************************************!*\
  !*** ./src/app/components/commande-termine/commande-termine.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n::ng-deep .mat-focused .mat-form-field-label  {\n  /*change color of label*/\n  color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #343a40 !important;;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlLXRlcm1pbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9DQUFvQztBQUN0QyIsImZpbGUiOiJjb21tYW5kZS10ZXJtaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50Oztcbn1cbiJdfQ== */");

/***/ }),

/***/ "8xIM":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmation-banner/confirmation-banner.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdc-dialog text_align-center\">\n  <div class=\"mdc-dialog__container\">\n    <div class=\"mdc-dialog__surface\"\n         role=\"alertdialog\"\n         aria-modal=\"true\"\n         aria-labelledby=\"my-dialog-title\"\n         aria-describedby=\"my-dialog-content\">\n      <div class=\"mdc-dialog__content\" id=\"my-dialog-content\">\n        voulez vous continuer?\n      </div>\n      <br>\n      <div class=\"mdc-dialog__actions\">\n        <button type=\"button\" class=\"mdc-button mdc-dialog__button\" style=\"margin-right: 2%\"\n                data-mdc-dialog-action=\"cancel\" (click)=\"confirmer('oui')\">\n          <div class=\"mdc-button__ripple\"></div>\n          <span class=\"mdc-button__label\">oui</span>\n        </button>\n        <button type=\"button\" class=\"mdc-button mdc-dialog__button\"\n                data-mdc-dialog-action=\"discard\" (click)=\"confirmer('non')\">\n          <div class=\"mdc-button__ripple\"></div>\n          <span class=\"mdc-button__label\">non</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"mdc-dialog__scrim\"></div>\n</div>\n");

/***/ }),

/***/ "90cB":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificateurs-of-plat/modificateurs-of-plat.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align: center\">\n      <h1 class=\"text_align-center\">Modificateur : {{data.nom}}</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <div>\n        <table mat-table matSort [dataSource]=\"dataSource\">\n\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 12pt; line-height: 5px\">\n                {{element.nom}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- ingredients Column -->\n          <ng-container matColumnDef=\"ingredients\">\n            <th mat-header-cell *matHeaderCellDef> Ingredients</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"Ingredients(element)\">\n                <mat-icon>visibility</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <!-- prix Column -->\n          <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.prix | currency: 'EUR': true}}</td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"delete(element)\">\n                <mat-icon style=\"color: #d20b0b; vertical-align: middle\">delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" (click)=\"add()\">\n            <p style=\"font-size: 12pt\">\n              <mat-icon style=\"vertical-align: middle\">add</mat-icon>\n              Ajouter\n            </p>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "9GuS":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-modificateur/affect-plat-to-modificateur.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AffectPlatToModificateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectPlatToModificateurComponent", function() { return AffectPlatToModificateurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_affect_plat_to_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./affect-plat-to-modificateur.component.html */ "hMMO");
/* harmony import */ var _affect_plat_to_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affect-plat-to-modificateur.component.css */ "n42V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Models_modificateur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Models/modificateur */ "PVyf");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");











var AffectPlatToModificateurComponent = /** @class */ (function () {
    function AffectPlatToModificateurComponent(ps, modificateur, dialog, matdialogref) {
        var _this = this;
        this.ps = ps;
        this.modificateur = modificateur;
        this.dialog = dialog;
        this.matdialogref = matdialogref;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.plats = [];
        this.allPlats = [];
        this.newaffectations = [];
        this.filteredPlats = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (nom) { return nom ? _this._filter(nom) : _this.allPlats.slice(); }));
    }
    AffectPlatToModificateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getAll().subscribe(function (data) {
            _this.allPlats = data;
            _this.allPlats.forEach(function (p) {
                _this.modificateur.plats.forEach(function (d) {
                    if (p.nom == d.nom) {
                        _this.allPlats.splice(_this.allPlats.indexOf(p), 1);
                    }
                });
            });
            console.log(_this.allPlats);
        });
    };
    AffectPlatToModificateurComponent.prototype.add = function (event) {
        var value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.plats.push(value);
        }
        // Clear the input value
        // event.input.remove();
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToModificateurComponent.prototype.remove = function (plat) {
        var index = this.plats.indexOf(plat);
        if (index >= 0) {
            this.plats.splice(index, 1);
        }
    };
    AffectPlatToModificateurComponent.prototype.selected = function (event) {
        this.plats.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToModificateurComponent.prototype._filter = function (value) {
        // const filterValue = value.toLowerCase();
        return this.allPlats.filter(function (plat) { return plat.nom.toLowerCase().includes(value); });
    };
    AffectPlatToModificateurComponent.prototype.affect = function () {
        var _this = this;
        this.plats.forEach(function (p, index) {
            _this.allPlats.forEach(function (plat) {
                if (plat.nom === p) {
                    _this.ps.affectPlatModif(plat.id, _this.modificateur.id).subscribe(function (d) {
                        _this.newaffectations.push(plat);
                        if (index === _this.plats.length - 1) {
                            _this.matdialogref.close(_this.newaffectations);
                        }
                    });
                }
            });
        });
    };
    AffectPlatToModificateurComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.affect();
            }
        });
    };
    AffectPlatToModificateurComponent.ctorParameters = function () { return [
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_5__["PlatService"] },
        { type: _Models_modificateur__WEBPACK_IMPORTED_MODULE_8__["Modificateur"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }
    ]; };
    AffectPlatToModificateurComponent.propDecorators = {
        fruitInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fruitInput',] }]
    };
    AffectPlatToModificateurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-affect-plat-to-ingredient',
            template: _raw_loader_affect_plat_to_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_affect_plat_to_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_5__["PlatService"],
            _Models_modificateur__WEBPACK_IMPORTED_MODULE_8__["Modificateur"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]])
    ], AffectPlatToModificateurComponent);
    return AffectPlatToModificateurComponent;
}());



/***/ }),

/***/ "9OB7":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-holiday-form/edit-holiday-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditHolidayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHolidayFormComponent", function() { return EditHolidayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_holiday_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-holiday-form.component.html */ "EHsX");
/* harmony import */ var _edit_holiday_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-holiday-form.component.css */ "GvDk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_holiday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/holiday */ "Ug58");
/* harmony import */ var _Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/HolidayService/holiday.service */ "Ttd+");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









var EditHolidayFormComponent = /** @class */ (function () {
    function EditHolidayFormComponent(data, datepipe, matdialogref, dialog, hs, rs) {
        this.data = data;
        this.datepipe = datepipe;
        this.matdialogref = matdialogref;
        this.dialog = dialog;
        this.hs = hs;
        this.rs = rs;
        this.date = new Date();
    }
    EditHolidayFormComponent.prototype.ngOnInit = function () {
        this.date = new Date(this.data.holiday);
        console.log(this.date);
    };
    EditHolidayFormComponent.prototype.submitHoliday = function () {
        var _this = this;
        console.log(this.data);
        this.hs.edit(this.data).subscribe(function (d) {
            _this.rs.myRestau().subscribe(function (r) {
                _this.rs.affectRestauToHoliday(d.id, r[0].id).subscribe(function (retour) {
                    _this.matdialogref.close(d);
                });
            });
        });
    };
    EditHolidayFormComponent.prototype.getHolidayDate = function () {
        this.data.holiday = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        console.log(this.data.holiday);
    };
    EditHolidayFormComponent.prototype.onclose = function () {
        this.matdialogref.close();
    };
    EditHolidayFormComponent.ctorParameters = function () { return [
        { type: _Models_holiday__WEBPACK_IMPORTED_MODULE_5__["Holiday"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_6__["HolidayService"] },
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantInfoService"] }
    ]; };
    EditHolidayFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-holiday-form',
            template: _raw_loader_edit_holiday_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_holiday_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Models_holiday__WEBPACK_IMPORTED_MODULE_5__["Holiday"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_6__["HolidayService"], _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantInfoService"]])
    ], EditHolidayFormComponent);
    return EditHolidayFormComponent;
}());



/***/ }),

/***/ "9PBb":
/*!************************************************************************!*\
  !*** ./src/app/components/categorie-form/categorie-form.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBOztBQUVBIiwiZmlsZSI6ImNhdGVnb3JpZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNoaXB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbi1pbmd7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "9tzZ":
/*!*************************************************************************!*\
  !*** ./src/app/components/plat-management/plat-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlatManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatManagementComponent", function() { return PlatManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plat_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plat-management.component.html */ "qNJx");
/* harmony import */ var _plat_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plat-management.component.css */ "5jjd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _plat_form_plat_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plat-form/plat-form.component */ "ZYVS");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _modificateurs_of_plat_modificateurs_of_plat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modificateurs-of-plat/modificateurs-of-plat.component */ "fiBI");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");













var PlatManagementComponent = /** @class */ (function () {
    function PlatManagementComponent(ps, dialog, imgs) {
        this.ps = ps;
        this.dialog = dialog;
        this.imgs = imgs;
        this.listplats = [];
        this.displayedColumns = ['nom', 'image', 'description', 'statut', 'prix', 'modificateurs', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listplats);
    }
    PlatManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PlatManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getAll().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    PlatManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_plat_form_plat_form_component__WEBPACK_IMPORTED_MODULE_9__["PlatFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.ps.getAll().subscribe(function (plats) {
                _this.dataSource.data = plats;
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    PlatManagementComponent.prototype.applyFilter = function ($event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PlatManagementComponent.prototype.edit = function (plat) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = plat;
        var dialogref = this.dialog.open(_plat_form_plat_form_component__WEBPACK_IMPORTED_MODULE_9__["PlatFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            var index = _this.dataSource.data.indexOf(data);
            if (index >= 0) {
                _this.dataSource.data[index] = data;
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    PlatManagementComponent.prototype.delete = function (plat) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ps.deleteplat(plat.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(plat), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    PlatManagementComponent.prototype.Modificateurs = function (plat) {
        console.log(plat);
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '47%';
        dialogConfig.height = '70%';
        dialogConfig.data = plat;
        var dialogref = this.dialog.open(_modificateurs_of_plat_modificateurs_of_plat_component__WEBPACK_IMPORTED_MODULE_11__["ModificateursOfPlatComponent"], dialogConfig);
    };
    PlatManagementComponent.prototype.changeStatut = function (plat) {
        var _this = this;
        this.ps.changeStatut(plat).subscribe(function (pl) {
            _this.dataSource.data[_this.dataSource.data.indexOf(plat)] = pl;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.dataSource.data[_this.dataSource.data.indexOf(plat)].statut = !plat.statut; });
    };
    PlatManagementComponent.ctorParameters = function () { return [
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"] }
    ]; };
    PlatManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    PlatManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plat-management',
            template: _raw_loader_plat_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plat_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"]])
    ], PlatManagementComponent);
    return PlatManagementComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginDialog {\n  margin-left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkRpYWxvZyB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"col-lg-12\">\n    <div class=\"sidebar col-lg-2\" data-color=\"red\" style=\"width: 10em\">\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"main-panel col-lg-10\" style=\"width: 100%;padding-left: 5%\">\n        <app-navbar></app-navbar>\n      <br><br><br>\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "ATNw":
/*!*********************************************************!*\
  !*** ./src/app/Services/Commandes/commandes.service.ts ***!
  \*********************************************************/
/*! exports provided: CommandesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesService", function() { return CommandesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var CommandesService = /** @class */ (function () {
    function CommandesService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_3__["Env"].url;
    }
    CommandesService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/commande", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/commande`, {withCredentials: true});
    };
    CommandesService.prototype.getById = function (commande_id) {
        return this.http.get(this.url + "/api/commande/" + commande_id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/commande`, {withCredentials: true});
    };
    CommandesService.prototype.updateCommand = function (cmd) {
        return this.http.put(this.url + "/api/commande", cmd, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
    };
    CommandesService.prototype.getId = function (id) {
        console.log(id);
        return this.http.get(this.url + "/api/command_id/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
    };
    CommandesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    CommandesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], CommandesService);
    return CommandesService;
}());



/***/ }),

/***/ "Aamv":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-form/categorie-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h1  style=\"text-align: center;\">ajout de nouvelle catégorie</h1>\n            <hr>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>nom</mat-label>\n              <input matInput type=\"text\" name=\"nom\" [(ngModel)]=\"data.nom\" ngModel #nom=\"ngModel\" required>\n            </mat-form-field>\n          </div>\n            <div class=\"col-lg-12\">\n              <input type=\"file\" (change)=\"uploadImages($event)\">\n          </div>\n\n          <div class=\"col-lg-4\">\n            <button  class=\"btn btn-success\"  [disabled]=\"f.invalid || !loading_img\">envoyer</button>\n          </div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-dark\" type=\"reset\">vider le formulaire</button>\n          </div>\n          <div class=\"col-lg-4\">\n            <button type=\"button\"  class=\"btn btn-warning\"  (click)=\"onclose(f)\" >annuler/terminer</button>\n          </div>\n        </div>\n      </div>\n</form>\n");

/***/ }),

/***/ "Ao7C":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plat-form/plat-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\">\n\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n\n              <h1 style=\"text-align: center\">plat</h1>\n              <hr>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\" >\n              <mat-label>Nom</mat-label>\n              <input matInput type=\"text\" name=\"nom\" [(ngModel)]=\"data.nom\" ngModel #nom=\"ngModel\" required>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\" >\n              <mat-label>Description</mat-label>\n              <textarea matInput name=\"description\" [(ngModel)]=\"data.description\" ngModel #description=\"ngModel\" required> </textarea>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Prix</mat-label>\n              <input matInput type=\"number\" name=\"prix\" [(ngModel)]=\"data.prix\" ngModel #prix=\"ngModel\" required>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"width-50 col-10 \">\n              <input #image type=\"file\" (change)=\"uploadImages($event)\" >\n            </div>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <button class=\"btn btn-success\" [disabled]=\"f.invalid || !loading_img\">envoyer</button>\n              </div>\n              <div class=\"col-lg-4\">\n                <button  type=\"reset\" class=\"btn btn-dark\" s (click)=\"reset()\" >vider le formulaire</button>\n              </div><div class=\"col-lg-4\">\n              <button type=\"button\"  class=\"btn btn-warning\"  (click)=\"onclose(f)\" >annuler/terminer</button>\n            </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n</form>\n");

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // url: 'http://localhost:8000'
    url: 'https://www.api.msfood.msdigital34.fr'
};


/***/ }),

/***/ "B9hT":
/*!******************************************************!*\
  !*** ./src/app/Services/UserService/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/user */ "m3UG");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");






var UserService = /** @class */ (function () {
    function UserService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_5__["Env"].url;
        this._userConnected = new _Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.historique = [];
    }
    Object.defineProperty(UserService.prototype, "userConnected", {
        get: function () {
            return this._userConnected;
        },
        set: function (value) {
            this._userConnected = value;
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.signup = function (u) {
        return this.http.post(this.url + "/api/register", u);
    };
    UserService.prototype.all = function () {
        return this.http.get(this.url + "/api/users", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "BaAa":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/affect-ingred-to-modificateur/affect-ingred-to-modificateur.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"z-index: 1\">\n  <form>\n    <div class=\"container container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h1 style=\"text-align: center\">Selectionnez un plat</h1>\n          <hr>\n        </div>\n        <div class=\"col-lg-12\">\n          <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n            <mat-label>Affectation ingrédient au modificateur</mat-label>\n            <mat-chip-list #chipList aria-label=\"Fruit selection\">\n              <mat-chip\n                *ngFor=\"let ingredient of ingr\"\n                [selectable]=\"selectable\"\n                [removable]=\"removable\"\n                (removed)=\"remove(ingredient)\">\n                {{ingredient}}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n              </mat-chip>\n              <input\n                matInput\n                placeholder=\"Nouvel modificateur...\"\n                #fruitInput\n                [formControl]=\"fruitCtrl\"\n                [matAutocomplete]=\"auto\"\n                [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                (matChipInputTokenEnd)=\"add($event)\">\n            </mat-chip-list>\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n              <mat-option *ngFor=\"let ingredient of filteredingr | async\" [value]=\"ingredient\">\n                {{ingredient.nom}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" type=\"submit\" (click)=\"onsubmit()\">confirmer</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "Cvyh":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/ingredients-of-modificateur/ingredients-of-modificateur.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: IngredientsOfModificateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsOfModificateurComponent", function() { return IngredientsOfModificateurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingredients_of_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingredients-of-modificateur.component.html */ "rXT+");
/* harmony import */ var _ingredients_of_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredients-of-modificateur.component.css */ "UWzd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/ingredientService/ingredient.service */ "W/O7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _affect_ingred_to_modificateur_affect_ingred_to_modificateur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../affect-ingred-to-modificateur/affect-ingred-to-modificateur.component */ "t+Vd");
/* harmony import */ var _Models_modificateur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/modificateur */ "PVyf");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");












var IngredientsOfModificateurComponent = /** @class */ (function () {
    function IngredientsOfModificateurComponent(is, matdialogref, data, dialog) {
        this.is = is;
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.listingr = [];
        this.displayedColumns = ['nom', 'prix', 'statut', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.listingr);
    }
    IngredientsOfModificateurComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    IngredientsOfModificateurComponent.prototype.ngOnInit = function () {
        this.listingr = this.data.ingredients;
        this.dataSource.data = this.listingr;
    };
    IngredientsOfModificateurComponent.prototype.close = function () {
        this.matdialogref.close();
    };
    IngredientsOfModificateurComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = this.data.id;
        var dialogref = this.dialog.open(_affect_ingred_to_modificateur_affect_ingred_to_modificateur_component__WEBPACK_IMPORTED_MODULE_6__["AffectIngredToModificateurComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data1) {
            data1.forEach(function (d) {
                _this.dataSource.data.push(d);
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    IngredientsOfModificateurComponent.prototype.delete = function (ing) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.is.deleteIngredientFromModificateur(_this.data.id, ing.id).subscribe(function (ata) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(ing), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    IngredientsOfModificateurComponent.ctorParameters = function () { return [
        { type: _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _Models_modificateur__WEBPACK_IMPORTED_MODULE_7__["Modificateur"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    IngredientsOfModificateurComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"],] }]
    };
    IngredientsOfModificateurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ingredients-of-modificateur',
            template: _raw_loader_ingredients_of_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_ingredients_of_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _Models_modificateur__WEBPACK_IMPORTED_MODULE_7__["Modificateur"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], IngredientsOfModificateurComponent);
    return IngredientsOfModificateurComponent;
}());



/***/ }),

/***/ "D/qK":
/*!*********************************!*\
  !*** ./src/app/Models/offre.ts ***!
  \*********************************/
/*! exports provided: Offre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offre", function() { return Offre; });
var Offre = /** @class */ (function () {
    function Offre() {
    }
    return Offre;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-blue {\n  background: rgb(92 141 216 / 44%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kOiByZ2IoOTIgMTQxIDIxNiAvIDQ0JSk7XG59XG4iXX0= */");

/***/ }),

/***/ "DQiH":
/*!***********************************************************************************!*\
  !*** ./src/app/components/categorie-management/categorie-management.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategorieManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieManagementComponent", function() { return CategorieManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorie_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorie-management.component.html */ "Rb30");
/* harmony import */ var _categorie_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorie-management.component.css */ "uLOb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/CategorieService/categorie.service */ "Ph8J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../categorie-form/categorie-form.component */ "Ls5x");
/* harmony import */ var _plats_of_categorie_plats_of_categorie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../plats-of-categorie/plats-of-categorie.component */ "Qo+S");
/* harmony import */ var _upload_image_form_upload_image_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../upload-image-form/upload-image-form.component */ "pENM");













var CategorieManagementComponent = /** @class */ (function () {
    function CategorieManagementComponent(cs, dialog) {
        this.cs = cs;
        this.dialog = dialog;
        this.listeCategorie = [];
        this.displayedColumns = ['nom', 'img', 'plats', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.listeCategorie);
    }
    CategorieManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // tslint:disable-next-line:typedef
    CategorieManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CategorieManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all categorie
        this.cs.getAll().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    CategorieManagementComponent.prototype.plats = function (categorie) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '57%';
        dialogConfig.height = '80%';
        dialogConfig.data = categorie;
        var dialogref = this.dialog.open(_plats_of_categorie_plats_of_categorie_component__WEBPACK_IMPORTED_MODULE_11__["PlatsOfCategorieComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (d) {
            _this.cs.getAll().subscribe(function (c) {
                _this.dataSource.data = c;
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    CategorieManagementComponent.prototype.edit = function (categorie) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = categorie;
        var dialogref = this.dialog.open(_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_10__["CategorieFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.cs.getAll().subscribe(function (data1) {
                _this.listeCategorie = data1;
                _this.dataSource.data = _this.listeCategorie;
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    CategorieManagementComponent.prototype.delete = function (categorie) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.cs.deleteCateg(categorie).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(categorie), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    CategorieManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_10__["CategorieFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.cs.getAll().subscribe(function (data1) {
                _this.listeCategorie = data1;
                _this.dataSource.data = _this.listeCategorie;
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    CategorieManagementComponent.prototype.updateimage = function (categ) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = categ;
        var dialogref = this.dialog.open(_upload_image_form_upload_image_form_component__WEBPACK_IMPORTED_MODULE_12__["UploadImageFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.dataSource.data[_this.dataSource.data.indexOf(data)].img = data.img;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    CategorieManagementComponent.ctorParameters = function () { return [
        { type: _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    CategorieManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    CategorieManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-categorie-management',
            template: _raw_loader_categorie_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_categorie_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], CategorieManagementComponent);
    return CategorieManagementComponent;
}());



/***/ }),

/***/ "E2xP":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-form.component.html */ "Qf2e");
/* harmony import */ var _login_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form.component.css */ "unHS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Auth/auth.service */ "mGYE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register-form/register-form.component */ "S0Dq");
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/UserService/user.service */ "B9hT");










var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, route, cookies, cookie, dialog, us) {
        this.auth = auth;
        this.route = route;
        this.cookies = cookies;
        this.cookie = cookie;
        this.dialog = dialog;
        this.us = us;
        this.hide = true;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.form = f.form.value;
        this.auth.login(this.form).subscribe(function (data) {
            console.log(data.user.roles);
            _this.auth.isloggedin = true;
            var jwtadmin = JSON.stringify(data);
            _this.cookie.set('jwtadmin', JSON.parse(jwtadmin).jwtadmin);
            for (var _i = 0, _a = data.user.roles; _i < _a.length; _i++) {
                var r = _a[_i];
                console.log(r);
                if (r.Nom_des_roles == 'msdigital') {
                    _this.cookie.set('msdigital', 'msdigital');
                }
                if (r.Nom_des_roles == 'admin') {
                    _this.cookie.set('admin', 'admin');
                }
                if (r.Nom_des_roles == 'costumer') {
                    _this.cookie.set('costumer', 'costumer');
                }
            }
            _this.route.navigate(['dashboard']);
        }, function (error) {
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginFormComponent.prototype.resetpass = function (f) {
    };
    LoginFormComponent.prototype.onCreate1 = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormComponent"], dialogConfig);
        /*dialogref.afterClosed().subscribe((data: Modificateur) => {
          this.ms.getAll().subscribe((data1: Modificateur[]) => {
            this.listmodif = data1;
            this.dataSource.data = this.listmodif;
            this.dataSource.paginator = this.paginator;
            window.location.reload();
          });
        });*/
    };
    LoginFormComponent.prototype.onclose = function () {
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }
    ]; };
    LoginFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login-form',
            template: _raw_loader_login_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "EHsX":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-holiday-form/edit-holiday-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Choisir une date</mat-label>\n    <input #d [(ngModel)]=\"date\" matInput  [matDatepicker]=\"holiday\" (dateChange)=\"getHolidayDate()\">\n    <mat-datepicker-toggle  matSuffix [for]=\"holiday\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #holiday></mat-datepicker>\n  </mat-form-field>\n\n\n<button mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"submitHoliday()\">envoyer</button>\n<button type=\"button\" mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"onclose()\" >annuler/terminer</button>\n");

/***/ }),

/***/ "Efqd":
/*!***************************************************************!*\
  !*** ./src/app/components/work-times/work-times.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkTimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTimesComponent", function() { return WorkTimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_work_times_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./work-times.component.html */ "6iUb");
/* harmony import */ var _work_times_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-times.component.css */ "tve3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _Models_work_times__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/work-times */ "Qh8K");
/* harmony import */ var _Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/WorkTime/work-time-service.service */ "KEYN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _edit_work_time_form_edit_work_time_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../edit-work-time-form/edit-work-time-form.component */ "e8k9");














var WorkTimesComponent = /** @class */ (function () {
    function WorkTimesComponent(ws, datepipe, rs, dialog) {
        this.ws = ws;
        this.datepipe = datepipe;
        this.rs = rs;
        this.dialog = dialog;
        this.panelOpenState = true;
        this.displayedColumns = ['jour', 'debut', 'fin', 'jour_férié', 'validate'];
        this.displayedColumns1 = ['jour', 'debut', 'fin', 'jour_férié', 'edit', 'delete'];
        this.allTimeWorks = [];
        this.newWorkTimes = [];
        this.week = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
        this.dayselected = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.newWorkTimes);
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.allTimeWorks);
        this.worktime = new _Models_work_times__WEBPACK_IMPORTED_MODULE_5__["WorkTimes"]();
        this.timeStart = [];
        this.timeEnd = [];
        this.myFilter = [];
    }
    WorkTimesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // tslint:disable-next-line:typedef
    WorkTimesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    WorkTimesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.myFilter.push(this.myfilter);
        this.newWorkTimes.push(new _Models_work_times__WEBPACK_IMPORTED_MODULE_5__["WorkTimes"]());
        this.dayselected.push('');
        this.ws.all().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                var timework = void 0;
                if (data[i].start) {
                    timework = {
                        worktime: data[i],
                        date: new Date(data[i].start)
                    };
                }
                else {
                    timework = {
                        worktime: data[i],
                        date: new Date(data[i].holiday)
                    };
                }
                _this.allTimeWorks.push(timework);
            }
            _this.dataSource1.data = _this.allTimeWorks;
        });
    };
    WorkTimesComponent.prototype.addData = function () {
        // tslint:disable-next-line:prefer-const
        var time;
        this.timeEnd.push(time);
        this.timeStart.push(time);
        this.dataSource.data.push(new _Models_work_times__WEBPACK_IMPORTED_MODULE_5__["WorkTimes"]());
        this.table.renderRows();
    };
    WorkTimesComponent.prototype.removeData = function () {
        this.dataSource.data.pop();
        this.table.renderRows();
    };
    WorkTimesComponent.prototype.getStartDate = function (index, dateStart) {
        if (!this.dataSource.data[index].start) {
            this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd');
        }
        else if (this.dataSource.data[index].start.length === 16) {
            this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd ') +
                this.dataSource.data[index].start.substr(11);
        }
        else {
            this.dataSource.data[index].start = this.datepipe.transform(dateStart.target.value, 'yyyy-MM-dd ') +
                this.dataSource.data[index].start;
        }
        this.dataSource.data.forEach(function (d) { return console.log(d); });
    };
    WorkTimesComponent.prototype.getStartTime = function (index, timestart) {
        if (this.dataSource.data[index].start) {
            this.dataSource.data[index].start =
                this.dataSource.data[index].start.substr(0, 10) + ' ' +
                    (timestart.hour).toString().padStart(2, '0') + ':' +
                    (timestart.minute).toString().padStart(2, '0');
        }
        else {
            this.dataSource.data[index].start = (timestart.hour).toString().padStart(2, '0') + ':' +
                (timestart.minute).toString().padStart(2, '0');
        }
        this.dataSource.data.forEach(function (d) { return console.log(d.start.length); });
    };
    WorkTimesComponent.prototype.getFinDate = function (i, $event) {
        if (!this.dataSource.data[i].end) {
            this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
        }
        else if (this.dataSource.data[i].end.length === 16) {
            this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd') +
                this.dataSource.data[i].end.substr(11);
        }
        else {
            this.dataSource.data[i].end = this.datepipe.transform($event.target.value, 'yyyy-MM-dd') +
                this.dataSource.data[i].end;
        }
    };
    WorkTimesComponent.prototype.getEndTime = function (i, timeend) {
        if (this.dataSource.data[i].end) {
            this.dataSource.data[i].end =
                this.dataSource.data[i].end.substr(0, 10) + ' ' +
                    (timeend.hour).toString().padStart(2, '0') + ':' +
                    (timeend.minute).toString().padStart(2, '0');
        }
        else {
            this.dataSource.data[i].start = (timeend.hour).toString().padStart(2, '0') + ':' +
                (timeend.minute).toString().padStart(2, '0');
        }
    };
    WorkTimesComponent.prototype.getHolidayDate = function (i, $event) {
        this.dataSource.data[i].holiday = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
    };
    WorkTimesComponent.prototype.submit = function () {
        var _this = this;
        this.dataSource.data.forEach(function (w) {
            _this.ws.set(w).subscribe(function (d) {
                _this.rs.myRestau().subscribe(function (da) {
                    // this.rs.affectRestauToWorkTime(d.id, da[0].id).subscribe(retour => console.log(retour));
                });
            });
            alert('success');
        });
    };
    WorkTimesComponent.prototype.selectday = function (i) {
        var _this = this;
        this.myFilter[i] = function (d) {
            var day = d.getDay();
            switch (_this.dayselected[i]) {
                case 'lundi':
                    return day !== 1;
                case 'mardi':
                    return day !== 2;
                case 'merdredi':
                    return day !== 3;
                case 'jeudi':
                    return day !== 4;
                case 'vendredi':
                    return day !== 5;
                case 'samedi':
                    return day !== 6;
                case 'dimanche':
                    return day !== 0;
            }
        };
    };
    WorkTimesComponent.prototype.edit = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = element;
        var dialogref = this.dialog.open(_edit_work_time_form_edit_work_time_form_component__WEBPACK_IMPORTED_MODULE_13__["EditWorkTimeFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.ws.all().subscribe(function (data1) {
                    _this.allTimeWorks = [];
                    _this.dataSource1.data = [];
                    for (var i = 0; i < data1.length; i++) {
                        var timework = void 0;
                        if (data1[i].start) {
                            timework = {
                                worktime: data1[i],
                                date: new Date(data1[i].start)
                            };
                        }
                        else {
                            timework = {
                                worktime: data1[i],
                                date: new Date(data1[i].holiday)
                            };
                        }
                        _this.allTimeWorks.push(timework);
                    }
                    _this.dataSource1.data = _this.allTimeWorks;
                    _this.dataSource1.paginator = _this.paginator;
                });
            }
            else {
                _this.dataSource1.data.forEach(function (i) {
                    if (i.worktime.id === data.worktime.id) {
                        var index = _this.dataSource1.data.indexOf(data);
                        if (index >= 0) {
                            _this.dataSource1.data[index] = data;
                            _this.dataSource1.paginator = _this.paginator;
                        }
                    }
                });
            }
        });
    };
    WorkTimesComponent.prototype.delete = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ws.del(element.worktime.id).subscribe(function (ata) {
                    _this.dataSource1.data.splice(_this.dataSource.data.indexOf(element), 1);
                    _this.dataSource1.paginator = _this.paginator;
                });
            }
        });
    };
    WorkTimesComponent.prototype.displayCol = function () {
        this.displayedColumns = ['jour', 'debut', 'fin', 'jour_férié', 'validate'];
    };
    WorkTimesComponent.prototype.displayCol1 = function () {
        this.displayedColumns = this.displayedColumns1;
    };
    WorkTimesComponent.ctorParameters = function () { return [
        { type: _Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantInfoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
    ]; };
    WorkTimesComponent.propDecorators = {
        table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    WorkTimesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-work-times',
            template: _raw_loader_work_times_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_work_times_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantInfoService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], WorkTimesComponent);
    return WorkTimesComponent;
}());



/***/ }),

/***/ "EgIt":
/*!****************************************************************!*\
  !*** ./src/app/components/offre-form/offre-form.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-chip-list {\n  width: 100%;\n}\n\n*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZnJlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7O0FBRUEiLCJmaWxlIjoib2ZmcmUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2hpcHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuQnV0dG9ue1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uYnV0dG9uLWluZ3tcblxufVxuXG4iXX0= */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "GvDk":
/*!******************************************************************************!*\
  !*** ./src/app/components/edit-holiday-form/edit-holiday-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWhvbGlkYXktZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "H0lF":
/*!***********************************************************************!*\
  !*** ./src/app/components/printer-config/printer-config.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrinterConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterConfigComponent", function() { return PrinterConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_printer_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./printer-config.component.html */ "TF4p");
/* harmony import */ var _printer_config_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printer-config.component.css */ "npPf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-thermal-print */ "T+MG");
/* harmony import */ var _assets_Config_test_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/Config/test.json */ "e51u");
var _assets_Config_test_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../assets/Config/test.json */ "e51u", 1);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");







var PrinterConfigComponent = /** @class */ (function () {
    function PrinterConfigComponent(printService, cookies) {
        var _this = this;
        this.printService = printService;
        this.cookies = cookies;
        this.status = false;
        this.ip = '';
        this.driver = _assets_Config_test_json__WEBPACK_IMPORTED_MODULE_5__;
        this.usbPrintDriver = new ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__["UsbDriver"]();
        this.printService.isConnected.subscribe(function (result) {
            _this.status = result;
            if (result) {
                console.log('Connected to printer!!!');
            }
            else {
                console.log('Not connected to printer.');
            }
        });
    }
    PrinterConfigComponent.prototype.ngOnInit = function () {
        // console.log(this.getJSON());
    };
    PrinterConfigComponent.prototype.requestUsb = function () {
        var _this = this;
        this.usbPrintDriver.requestUsb().subscribe(function (result) {
            _this.printService.setDriver(_this.usbPrintDriver);
            console.log(typeof (_this.usbPrintDriver));
        });
    };
    PrinterConfigComponent.prototype.getJSON = function () {
        return this.driver;
    };
    PrinterConfigComponent.prototype.connectToWebPrint = function () {
        console.log(this.ip);
        this.webPrintDriver = new ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__["WebPrintDriver"](this.ip);
        this.printService.setDriver(this.webPrintDriver);
    };
    PrinterConfigComponent.prototype.print = function () {
        this.printService.init()
            .setBold(true)
            .writeLine('Hello World!')
            .setBold(false)
            .feed(4)
            .cut('full')
            .flush();
    };
    PrinterConfigComponent.ctorParameters = function () { return [
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__["PrintService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    PrinterConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-printer-config',
            template: _raw_loader_printer_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_printer_config_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng_thermal_print__WEBPACK_IMPORTED_MODULE_4__["PrintService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], PrinterConfigComponent);
    return PrinterConfigComponent;
}());



/***/ }),

/***/ "H3GW":
/*!***************************************************************************!*\
  !*** ./src/app/components/commande-termine/commande-termine.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommandeTermineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeTermineComponent", function() { return CommandeTermineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_commande_termine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./commande-termine.component.html */ "LusC");
/* harmony import */ var _commande_termine_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commande-termine.component.css */ "8R5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Commandes/commandes.service */ "ATNw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");










var CommandeTermineComponent = /** @class */ (function () {
    function CommandeTermineComponent(commandService, dialog) {
        this.commandService = commandService;
        this.dialog = dialog;
        this.listecommandes = [];
        this.listecommandes1 = [];
        this.displayedColumns = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.listecommandes);
    }
    CommandeTermineComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CommandeTermineComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all commandes
        this.commandService.getAll().subscribe(function (data) {
            _this.listecommandes = Object.assign(_this.listecommandes, data);
            // affecter les commandes en cours au datasource.data
            var nowdate = new Date();
            nowdate.setHours(0, 0, 0, 0);
            for (var _i = 0, _a = _this.listecommandes; _i < _a.length; _i++) {
                var c = _a[_i];
                var date = new Date(c.created_at);
                date.setHours(0, 0, 0, 0);
                if (c.status == 'traite' && (date.valueOf() - nowdate.valueOf()) == 0) {
                    _this.listecommandes1.push(c);
                }
                _this.dataSource.data = _this.listecommandes1;
            }
        });
    };
    CommandeTermineComponent.prototype.detaillesCommande = function (commande) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.panelClass = 'marginDialog';
        dialogConfig.data = commande;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__["DetailleCommandeComponent"], dialogConfig);
    };
    // tslint:disable-next-line:typedef
    CommandeTermineComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CommandeTermineComponent.ctorParameters = function () { return [
        { type: _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    CommandeTermineComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
    };
    CommandeTermineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-commande-termine',
            template: _raw_loader_commande_termine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_commande_termine_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], CommandeTermineComponent);
    return CommandeTermineComponent;
}());



/***/ }),

/***/ "HO2s":
/*!**************************************!*\
  !*** ./src/app/Models/ingredient.ts ***!
  \**************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient() {
    }
    return Ingredient;
}());



/***/ }),

/***/ "IKPk":
/*!********************************************************************************!*\
  !*** ./src/app/components/plats-of-categorie/plats-of-categorie.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 100% !important;\n  height: 45px;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRzLW9mLWNhdGVnb3JpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InBsYXRzLW9mLWNhdGVnb3JpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "IeRK":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-management/user-management.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row col-auto\">\n    <div class=\"col-md-auto\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Nom</label>\n                  <input disabled type=\"text\" class=\"form-control\" value=\"{{user.nom}}\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Prénom</label>\n                  <input disabled type=\"text\" class=\"form-control\"value=\"{{user.prenom}}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <input disabled type=\"email\" class=\"form-control\" value=\"{{user.email}}\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Tel</label>\n                  <input disabled type=\"phone\" class=\"form-control\" value=\"{{user.numero_de_telephone}}\">\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "J33c":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/modificateur-management/modificateur-management.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModificateurManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificateurManagementComponent", function() { return ModificateurManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modificateur_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modificateur-management.component.html */ "7xGT");
/* harmony import */ var _modificateur_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modificateur-management.component.css */ "gQlb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/modificateurService/modificateur.service */ "Lk/Z");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _plats_of_modificateur_plats_of_modificateur_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plats-of-modificateur/plats-of-modificateur.component */ "yYfB");
/* harmony import */ var _ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ingredients-of-modificateur/ingredients-of-modificateur.component */ "Cvyh");
/* harmony import */ var _modificateur_form_modificateur_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modificateur-form/modificateur-form.component */ "M0CF");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");













var ModificateurManagementComponent = /** @class */ (function () {
    function ModificateurManagementComponent(ms, dialog) {
        this.ms = ms;
        this.dialog = dialog;
        this.listmodif = [];
        this.displayedColumns = ['nom', 'limite', 'plats', 'ingredients', 'prix', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.listmodif);
    }
    ModificateurManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ModificateurManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getAll().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    ModificateurManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_modificateur_form_modificateur_form_component__WEBPACK_IMPORTED_MODULE_11__["ModificateurFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.ms.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            data.forEach(function (d) {
                _this.dataSource.data.push(d);
            });
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ModificateurManagementComponent.prototype.applyFilter = function ($event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ModificateurManagementComponent.prototype.edit = function (modificateur) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = modificateur;
        var dialogref = this.dialog.open(_modificateur_form_modificateur_form_component__WEBPACK_IMPORTED_MODULE_11__["ModificateurFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.ms.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            var index = _this.dataSource.data.indexOf(data);
            if (index >= 0) {
                _this.dataSource.data[index] = data;
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    ModificateurManagementComponent.prototype.delete = function (modif) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ms.deletemodificateur(modif.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(modif), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    ModificateurManagementComponent.prototype.plats = function (modificateur) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '57%';
        dialogConfig.height = '80%';
        dialogConfig.data = modificateur;
        var dialogref = this.dialog.open(_plats_of_modificateur_plats_of_modificateur_component__WEBPACK_IMPORTED_MODULE_9__["PlatsOfModificateurComponent"], dialogConfig);
    };
    ModificateurManagementComponent.prototype.Ingredients = function (modificateur) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '50%';
        dialogConfig.height = '80%';
        dialogConfig.data = modificateur;
        var dialogref = this.dialog.open(_ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_10__["IngredientsOfModificateurComponent"], dialogConfig);
    };
    ModificateurManagementComponent.ctorParameters = function () { return [
        { type: _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_4__["ModificateurService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    ModificateurManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    ModificateurManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modificateur-management',
            template: _raw_loader_modificateur_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_modificateur_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_4__["ModificateurService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ModificateurManagementComponent);
    return ModificateurManagementComponent;
}());



/***/ }),

/***/ "J6Yu":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-confirmation/back-confirmation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdc-dialog text_align-center\">\n  <div class=\"mdc-dialog__container\">\n    <div class=\"mdc-dialog__surface\"\n         role=\"alertdialog\"\n         aria-modal=\"true\"\n         aria-labelledby=\"my-dialog-title\"\n         aria-describedby=\"my-dialog-content\">\n      <div class=\"mdc-dialog__content\" id=\"my-dialog-content\">\n        voulez vous ajouter un autre?\n      </div>\n      <br>\n      <div class=\"mdc-dialog__actions\">\n        <button type=\"button\" class=\"mdc-button mdc-dialog__button\" style=\"margin-right: 2%\"\n                data-mdc-dialog-action=\"cancel\" (click)=\"confirmer('oui')\">\n          <div class=\"mdc-button__ripple\"></div>\n          <span class=\"mdc-button__label\">oui</span>\n        </button>\n        <button type=\"button\" class=\"mdc-button mdc-dialog__button\"\n                data-mdc-dialog-action=\"discard\" (click)=\"confirmer('non')\">\n          <div class=\"mdc-button__ripple\"></div>\n          <span class=\"mdc-button__label\">non</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"mdc-dialog__scrim\"></div>\n</div>\n");

/***/ }),

/***/ "Jr4w":
/*!********************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-categorie/affect-plat-to-categorie.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-chip-list {\n  width: 100%;\n}\n\n*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmVjdC1wbGF0LXRvLWNhdGVnb3JpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTs7QUFFQSIsImZpbGUiOiJhZmZlY3QtcGxhdC10by1jYXRlZ29yaWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qe1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNoaXB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbi1pbmd7XG5cbn1cblxuIl19 */");

/***/ }),

/***/ "KEYN":
/*!****************************************************************!*\
  !*** ./src/app/Services/WorkTime/work-time-service.service.ts ***!
  \****************************************************************/
/*! exports provided: WorkTimeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTimeServiceService", function() { return WorkTimeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var WorkTimeServiceService = /** @class */ (function () {
    function WorkTimeServiceService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    WorkTimeServiceService.prototype.all = function () {
        return this.http.get(this.url + "/api/worktime", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwt') } });
    };
    WorkTimeServiceService.prototype.set = function (worktime) {
        return this.http.post(this.url + "/api/worktime", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwt') } });
    };
    WorkTimeServiceService.prototype.edit = function (worktime) {
        return this.http.put(this.url + "/api/worktime", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwt') } });
    };
    WorkTimeServiceService.prototype.del = function (id) {
        return this.http.delete(this.url + "/api/worktime/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwt') } });
    };
    WorkTimeServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    WorkTimeServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], WorkTimeServiceService);
    return WorkTimeServiceService;
}());



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo \" >\n    <!--<a class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"./assets/img/angular2-logo-white.png\"/>\n      </div>\n    </a>-->\n  <div style=\"display: flex; justify-content: center; height: 30px;\">\n    <img src=\"../../../assets/img/maria cantina logo.png\" style=\" position: absolute; top:0px;\" width=\"100\"/>\n  </div>\n    <a class=\"simple-text logo-normal\"></a>\n</div>\n<div class=\"sidebar-wrapper bg-blue\" >\n  <mat-accordion>\n\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\"\n                         class=\"bg-blue-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <mat-icon  style=\"vertical-align: middle\">receipt</mat-icon>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"bg-blue-panel\" style=\"width: 100%\">\n        <a class=\"dropdown-item \" [routerLink]=\"menuItems[1].path\"><mat-icon class=\"icon-cmd\">notifications_active</mat-icon></a>\n        <a class=\"dropdown-item \" [routerLink]=\"menuItems[2].path\"><mat-icon class=\"icon-cmd\" style=\"\">slow_motion_video</mat-icon></a>\n        <a class=\"dropdown-item \"  [routerLink]=\"menuItems[3].path\"><mat-icon  class=\"icon-cmd\">done_all</mat-icon></a> <!--commande de ce jour-->\n        <a class=\"dropdown-item \" [routerLink]=\"menuItems[4].path\"><mat-icon class=\"icon-cmd\">archive</mat-icon></a> <!--historique de tt les commandes-->\n      </div>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\"\n                         class=\"bg-blue-panel\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <mat-icon style=\"vertical-align: middle\">shopping_basket</mat-icon> &nbsp;\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <a class=\"dropdown-item\" [routerLink]=\"menuItems[5].path\">Ingrédients</a>\n      <a class=\"dropdown-item\" [routerLink]=\"menuItems[6].path\">Modificateurs</a>\n      <a class=\"dropdown-item\" [routerLink]=\"menuItems[7].path\">Plats</a>\n      <a class=\"dropdown-item\" [routerLink]=\"menuItems[8].path\">Categorie</a>\n    </mat-expansion-panel>\n\n\n\n  </mat-accordion>\n</div>\n");

/***/ }),

/***/ "Kg1k":
/*!**************************************************************************!*\
  !*** ./src/app/components/restaurant-info/restaurant-info.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f9f9fa\n}\n\n.padding {\n  padding: 1rem !important\n}\n\n.user-card-full {\n  overflow: hidden\n}\n\n.card {\n  border-radius: 5px;\n  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\n  border: none;\n  margin-bottom: 30px\n}\n\n.m-r-0 {\n  margin-right: 0px\n}\n\n.m-l-0 {\n  margin-left: 0px\n}\n\n.user-card-full .user-profile {\n  border-radius: 5px 0 0 5px\n}\n\n.bg-c-lite-green {\n  background: linear-gradient(to right, #255783, #5c8dd8)\n}\n\n.user-profile {\n  padding: 20px 0\n}\n\n.card-block {\n  padding: 1.25rem\n}\n\n.m-b-25 {\n  margin-bottom: 25px\n}\n\n.img-radius {\n  border-radius: 5px\n}\n\nh6 {\n  font-size: 14px\n}\n\n.card .card-block p {\n  line-height: 25px\n}\n\n@media only screen and (min-width: 1400px) {\n  p {\n    font-size: 14px\n  }\n}\n\n.card-block {\n  padding: 1.25rem\n}\n\n.b-b-default {\n  border-bottom: 1px solid #e0e0e0\n}\n\n.m-b-20 {\n  margin-bottom: 20px\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important\n}\n\n.card .card-block p {\n  line-height: 25px\n}\n\n.m-b-10 {\n  margin-bottom: 10px\n}\n\n.text-muted {\n  color: #919aa3 !important\n}\n\n.b-b-default {\n  border-bottom: 1px solid #e0e0e0\n}\n\n.f-w-600 {\n  font-weight: 600\n}\n\n.m-b-20 {\n  margin-bottom: 20px\n}\n\n.m-t-40 {\n  margin-top: 20px\n}\n\n.p-b-5 {\n  padding-bottom: 5px !important\n}\n\n.m-b-10 {\n  margin-bottom: 10px\n}\n\n.m-t-40 {\n  margin-top: 20px\n}\n\n.user-card-full .social-link li {\n  display: inline-block\n}\n\n.user-card-full .social-link li a {\n  font-size: 20px;\n  margin: 0 10px 0 0;\n  transition: all 0.3s ease-in-out\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBRWxCLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFFbEI7QUFDRiIsImZpbGUiOiJyZXN0YXVyYW50LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhXG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50XG59XG5cbi51c2VyLWNhcmQtZnVsbCB7XG4gIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksIDkwLCAxMDAsIDAuMDgpO1xuICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSwgOTAsIDEwMCwgMC4wOCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweFxufVxuXG4ubS1yLTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweFxufVxuXG4ubS1sLTAge1xuICBtYXJnaW4tbGVmdDogMHB4XG59XG5cbi51c2VyLWNhcmQtZnVsbCAudXNlci1wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHhcbn1cblxuLmJnLWMtbGl0ZS1ncmVlbiB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCM1YzhkZDgpLCB0byggIzI1NTc4MykpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNTU3ODMsICM1YzhkZDgpXG59XG5cbi51c2VyLXByb2ZpbGUge1xuICBwYWRkaW5nOiAyMHB4IDBcbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAxLjI1cmVtXG59XG5cbi5tLWItMjUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5jYXJkIC5jYXJkLWJsb2NrIHAge1xuICBsaW5lLWhlaWdodDogMjVweFxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHhcbiAgfVxufVxuXG4uY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDEuMjVyZW1cbn1cblxuLmItYi1kZWZhdWx0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTBcbn1cblxuLm0tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHhcbn1cblxuLnAtYi01IHtcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50XG59XG5cbi5jYXJkIC5jYXJkLWJsb2NrIHAge1xuICBsaW5lLWhlaWdodDogMjVweFxufVxuXG4ubS1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjOTE5YWEzICFpbXBvcnRhbnRcbn1cblxuLmItYi1kZWZhdWx0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTBcbn1cblxuLmYtdy02MDAge1xuICBmb250LXdlaWdodDogNjAwXG59XG5cbi5tLWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5tLXQtNDAge1xuICBtYXJnaW4tdG9wOiAyMHB4XG59XG5cbi5wLWItNSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudFxufVxuXG4ubS1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4ubS10LTQwIHtcbiAgbWFyZ2luLXRvcDogMjBweFxufVxuXG4udXNlci1jYXJkLWZ1bGwgLnNvY2lhbC1saW5rIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi51c2VyLWNhcmQtZnVsbCAuc29jaWFsLWxpbmsgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dFxufVxuIl19 */");

/***/ }),

/***/ "KyLc":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/affect-ingred-to-modificateur/affect-ingred-to-modificateur.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 100% !important;\n  height: 45px;\n  font-size: 12pt;\n  margin-top: 5px;\n}\n\nmat-form-field {\n  width: 100%;\n  height: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmVjdC1pbmdyZWQtdG8tbW9kaWZpY2F0ZXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZiIsImZpbGUiOiJhZmZlY3QtaW5ncmVkLXRvLW1vZGlmaWNhdGV1ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDEycHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "LCZW":
/*!******************************************************************************!*\
  !*** ./src/app/components/back-confirmation/back-confirmation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "LFwX":
/*!*******************************************!*\
  !*** ./src/app/Models/restaurant-info.ts ***!
  \*******************************************/
/*! exports provided: RestaurantInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantInfo", function() { return RestaurantInfo; });
var RestaurantInfo = /** @class */ (function () {
    function RestaurantInfo() {
    }
    return RestaurantInfo;
}());



/***/ }),

/***/ "LTjc":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Lcvg":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ingredient-management/ingredient-management.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\ntable {\n  width: 100%;\n}\n\n/*mat slide color*/\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 180, 81, 0.52) ;\n}\n\n::ng-deep  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:#00B451;\n}\n\n/*filter color*/\n\n::ng-deep .mat-focused .mat-form-field-label  {\n  /*change color of label*/\n  color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #343a40 !important;;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBLGtCQUFrQjs7QUFDbEI7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBR0EsZUFBZTs7QUFDZjtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9DQUFvQztBQUN0QyIsImZpbGUiOiJpbmdyZWRpZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi8qbWF0IHNsaWRlIGNvbG9yKi9cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDgxLCAwLjUyKSA7XG59XG5cbjo6bmctZGVlcCAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBCNDUxO1xufVxuXG5cbi8qZmlsdGVyIGNvbG9yKi9cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsICB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "Lk/Z":
/*!**********************************************************************!*\
  !*** ./src/app/Services/modificateurService/modificateur.service.ts ***!
  \**********************************************************************/
/*! exports provided: ModificateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificateurService", function() { return ModificateurService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var ModificateurService = /** @class */ (function () {
    function ModificateurService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_3__["Env"].url;
    }
    ModificateurService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/modificateur", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
    };
    ModificateurService.prototype.addmodificateur = function (modif) {
        return this.http.post(this.url + "/api/modificateur", modif, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.post(`${this.url}/api/modificateur`, modif, {withCredentials: true});
    };
    ModificateurService.prototype.updatemodificateur = function (modif) {
        return this.http.put(this.url + "/api/modificateur", modif, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/modificateur`, modif, {withCredentials: true});
    };
    ModificateurService.prototype.deletemodificateur = function (modif) {
        return this.http.delete(this.url + "/api/modificateur/" + modif, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.delete(`${this.url}/api/modificateur/${modif}`, { withCredentials: true});
    };
    ModificateurService.prototype.affectModifiToPlat = function (id_plat, id_modificateur) {
        return this.http.put(this.url + "/api/affectModificateurToPlat/" + id_plat + "/" + id_modificateur, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    ModificateurService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    ModificateurService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ModificateurService);
    return ModificateurService;
}());



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "Ls5x":
/*!***********************************************************************!*\
  !*** ./src/app/components/categorie-form/categorie-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategorieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieFormComponent", function() { return CategorieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorie_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorie-form.component.html */ "Aamv");
/* harmony import */ var _categorie_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorie-form.component.css */ "9PBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_categorie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/categorie */ "vbEW");
/* harmony import */ var _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/CategorieService/categorie.service */ "Ph8J");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");










var CategorieFormComponent = /** @class */ (function () {
    function CategorieFormComponent(matdialogref, data, cs, dialog, imgs) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.cs = cs;
        this.dialog = dialog;
        this.imgs = imgs;
        this.categ = new _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"]();
        this.newCateg = [];
        this.src = '';
        this.loading_img = false;
    }
    CategorieFormComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.categ;
        }
        else {
            this.src = this.data.img;
            this.loading_img = true;
        }
    };
    CategorieFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new modif
                if (_this.data === _this.categ) {
                    _this.data.nom = f.value.nom;
                    _this.data.img = _this.src;
                    _this.cs.addCateg(_this.data).subscribe(function (data) {
                        _this.newCateg.push(data);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newCateg);
                                // window.location.reload();
                            }
                            else {
                                f.form.reset();
                            }
                        });
                    });
                }
                else { // edit modif
                    _this.data.nom = f.value.nom;
                    _this.data.img = _this.src;
                    _this.cs.editCateg(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(_this.newCateg);
                    });
                }
            }
        });
    };
    CategorieFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                f.resetForm();
                _this.matdialogref.close();
            }
        });
    };
    CategorieFormComponent.prototype.uploadImages = function (e) {
        this.loading_img = false;
        this.selectedFiles = e.target.files;
        this.upload(this.selectedFiles[0]);
    };
    CategorieFormComponent.prototype.upload = function (selectedFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        var response = this.imgs.uploadimg(formData).subscribe(function (d) {
            _this.loading_img = true;
            _this.src = d;
        }, function (error) {
            _this.src = error.error.text;
            _this.loading_img = true;
        });
    };
    CategorieFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] }
    ]; };
    CategorieFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-categorie-form',
            template: _raw_loader_categorie_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_categorie_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"],
            _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]])
    ], CategorieFormComponent);
    return CategorieFormComponent;
}());



/***/ }),

/***/ "LsTX":
/*!********************************************************!*\
  !*** ./src/app/Services/imageService/image.service.ts ***!
  \********************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var ImageService = /** @class */ (function () {
    function ImageService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    ImageService.prototype.uploadimg = function (img) {
        return this.http.post(this.url + "/api/image-upload", img, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
    };
    ImageService.prototype.addPlatimg = function (image, idplat) {
        return this.http.post(this.url + "/api/plat/" + idplat + "/image", image, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    ImageService.prototype.deleteimg = function (id) {
        return this.http.delete(this.url + "/api/image/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    ImageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "LusC":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/commande-termine/commande-termine.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.user.nom}}</p>\n      </td>\n    </ng-container>\n\n    <!-- tel Column -->\n    <ng-container matColumnDef=\"numero_de_telephone\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Tel</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">{{element.user.numero_de_telephone}}</p>\n      </td>\n    </ng-container>\n\n    <!-- détailles de la commande Column -->\n    <ng-container matColumnDef=\"détailles de commande\">\n      <th mat-header-cell *matHeaderCellDef> commande</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"detaillesCommande(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix_total\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.prix_total | currency:'EUR':true}}</p>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "LxQ/":
/*!**************************************************************************!*\
  !*** ./src/app/components/ingredient-form/ingredient-form.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTs7QUFFQSIsImZpbGUiOiJpbmdyZWRpZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5CdXR0b257XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5idXR0b24taW5ne1xuXG59XG4iXX0= */");

/***/ }),

/***/ "M0CF":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modificateur-form/modificateur-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModificateurFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificateurFormComponent", function() { return ModificateurFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modificateur_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modificateur-form.component.html */ "RSor");
/* harmony import */ var _modificateur_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modificateur-form.component.css */ "TBca");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_modificateur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/modificateur */ "PVyf");
/* harmony import */ var _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/modificateurService/modificateur.service */ "Lk/Z");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");









var ModificateurFormComponent = /** @class */ (function () {
    function ModificateurFormComponent(matdialogref, data, ms, dialog) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.ms = ms;
        this.dialog = dialog;
        this.modif = new _Models_modificateur__WEBPACK_IMPORTED_MODULE_5__["Modificateur"]();
        this.newmodif = [];
    }
    ModificateurFormComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.modif;
        }
    };
    ModificateurFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new modif
                if (_this.data == _this.modif) {
                    _this.data.nom = f.value.nom;
                    _this.data.prix = f.value.prix;
                    _this.data.limite = f.value.limite;
                    _this.ms.addmodificateur(_this.data).subscribe(function (data) {
                        _this.newmodif.push(data);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newmodif);
                            }
                            else {
                                f.form.reset();
                            }
                        });
                    });
                }
                else { // edit modif
                    _this.data.nom = f.value.nom;
                    _this.data.prix = f.value.prix;
                    _this.data.limite = f.value.limite;
                    _this.ms.updatemodificateur(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(data);
                    });
                }
            }
        });
    };
    ModificateurFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                f.resetForm();
                _this.matdialogref.close();
            }
        });
    };
    ModificateurFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_modificateur__WEBPACK_IMPORTED_MODULE_5__["Modificateur"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_6__["ModificateurService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    ModificateurFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modificateur-form',
            template: _raw_loader_modificateur_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_modificateur_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_modificateur__WEBPACK_IMPORTED_MODULE_5__["Modificateur"],
            _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_6__["ModificateurService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ModificateurFormComponent);
    return ModificateurFormComponent;
}());



/***/ }),

/***/ "MHFO":
/*!*******************************************************************************!*\
  !*** ./src/app/components/commandes-archives/commandes-archives.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommandesArchivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesArchivesComponent", function() { return CommandesArchivesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_commandes_archives_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./commandes-archives.component.html */ "4e36");
/* harmony import */ var _commandes_archives_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commandes-archives.component.css */ "8Fj3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Commandes/commandes.service */ "ATNw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");










var CommandesArchivesComponent = /** @class */ (function () {
    function CommandesArchivesComponent(commandService, dialog) {
        this.commandService = commandService;
        this.dialog = dialog;
        this.listecommandes = [];
        this.displayedColumns = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.listecommandes);
    }
    CommandesArchivesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CommandesArchivesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all commandes
        this.commandService.getAll().subscribe(function (data) {
            _this.listecommandes = Object.assign(_this.listecommandes, data);
            // affecter les commandes archivés au datasource.data
            _this.dataSource.data = _this.listecommandes.filter(function (c) { return c.status == 'traite'; });
        });
    };
    CommandesArchivesComponent.prototype.detaillesCommande = function (commande) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.panelClass = 'marginDialog';
        dialogConfig.data = commande;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__["DetailleCommandeComponent"], dialogConfig);
    };
    // tslint:disable-next-line:typedef
    CommandesArchivesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CommandesArchivesComponent.ctorParameters = function () { return [
        { type: _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    CommandesArchivesComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"],] }]
    };
    CommandesArchivesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-commandes-archives',
            template: _raw_loader_commandes_archives_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_commandes_archives_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], CommandesArchivesComponent);
    return CommandesArchivesComponent;
}());



/***/ }),

/***/ "NBNm":
/*!********************************!*\
  !*** ./src/app/Models/time.ts ***!
  \********************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
var Time = /** @class */ (function () {
    function Time() {
    }
    return Time;
}());



/***/ }),

/***/ "NLAq":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/affect-modificateur-to-plat/affect-modificateur-to-plat.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n  height: 250px !important;\n  box-shadow: 1px 1px 5px grey;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmVjdC1tb2RpZmljYXRldXItdG8tcGxhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBOztBQUVBIiwiZmlsZSI6ImFmZmVjdC1tb2RpZmljYXRldXItdG8tcGxhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JleTtcbn1cblxubWF0LWNoaXB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbi1pbmd7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "NdqV":
/*!********************************************************!*\
  !*** ./src/app/Services/OffreService/offre.service.ts ***!
  \********************************************************/
/*! exports provided: OffreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffreService", function() { return OffreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var OffreService = /** @class */ (function () {
    function OffreService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    OffreService.prototype.All = function () {
        return this.http.get(this.url + "/api/get/offre", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.prototype.add = function (offre) {
        return this.http.post(this.url + "/api/offre", offre, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.prototype.update = function (offre) {
        return this.http.put(this.url + "/api/offres/" + offre.id, offre, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.prototype.affectPlat = function (id_offre, id_plat) {
        return this.http.put(this.url + "/api/offres/affect/" + id_offre + "/" + id_plat, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.prototype.destroyPlat = function (id_offre, id_plat) {
        return this.http.put(this.url + "/api/offres/destroy/" + id_offre + "/" + id_plat, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.prototype.del = function (id) {
        return this.http.delete(this.url + "/api/offres/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    OffreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    OffreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], OffreService);
    return OffreService;
}());



/***/ }),

/***/ "O/lb":
/*!*******************************************************************************!*\
  !*** ./src/app/components/commandes-en-cours/commandes-en-cours.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommandesEnCoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesEnCoursComponent", function() { return CommandesEnCoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_commandes_en_cours_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./commandes-en-cours.component.html */ "uADa");
/* harmony import */ var _commandes_en_cours_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commandes-en-cours.component.css */ "rPrF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Commandes/commandes.service */ "ATNw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/Firebase/firebase.service */ "0TIH");












var CommandesEnCoursComponent = /** @class */ (function () {
    function CommandesEnCoursComponent(commandService, dialog, fb) {
        this.commandService = commandService;
        this.dialog = dialog;
        this.fb = fb;
        this.realTimeCommandes = [];
        this.listecommandes = [];
        this.displayedColumns = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total', 'validate', 'cancel'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listecommandes);
    }
    CommandesEnCoursComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CommandesEnCoursComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.commandes().subscribe(function (c) {
            _this.realTimeCommandes = c;
            // get all commandes
            _this.commandService.getAll().subscribe(function (data) {
                _this.listecommandes = Object.assign(_this.listecommandes, data);
                // affecter les commandes en cours au datasource.data
                _this.dataSource.data = _this.listecommandes.filter(function (co) { return co.status == 'en_cours'; });
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    CommandesEnCoursComponent.prototype.detaillesCommande = function (commande) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.panelClass = 'marginDialog';
        dialogConfig.data = commande;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__["DetailleCommandeComponent"], dialogConfig);
    };
    CommandesEnCoursComponent.prototype.validate = function (cmd) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                cmd.status = 'traite';
                _this.commandService.updateCommand(cmd).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(cmd), 1);
                    _this.dataSource.paginator = _this.paginator;
                    _this.realTimeCommandes.forEach(function (c) {
                        if (c.idCommande == cmd.commande_id) {
                            c.status = 'traite';
                            _this.fb.update(c).then(function (co) {
                            });
                        }
                    });
                });
            }
        });
    };
    CommandesEnCoursComponent.prototype.cancel = function (cmd) {
        var _this = this;
        if (cmd.date_paiement == null) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
            dialogConfig.autoFocus = false;
            dialogConfig.width = '15%';
            dialogConfig.height = '20%';
            var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
            dialogref.afterClosed().subscribe(function (retour) {
                if (retour === true) {
                    cmd.status = 'annulee';
                    _this.commandService.updateCommand(cmd).subscribe(function (data) {
                        _this.dataSource.data.splice(_this.dataSource.data.indexOf(cmd), 1);
                        _this.dataSource.paginator = _this.paginator;
                        _this.realTimeCommandes.forEach(function (c) {
                            if (c.idCommande === cmd.commande_id) {
                                c.status = 'annulee';
                                _this.fb.update(c).then(function (co) {
                                });
                            }
                        });
                    });
                }
            });
        }
    };
    // tslint:disable-next-line:typedef
    CommandesEnCoursComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CommandesEnCoursComponent.ctorParameters = function () { return [
        { type: _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_4__["CommandesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"] }
    ]; };
    CommandesEnCoursComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }]
    };
    CommandesEnCoursComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-commandes-en-cours',
            template: _raw_loader_commandes_en_cours_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_commandes_en_cours_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_4__["CommandesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"]])
    ], CommandesEnCoursComponent);
    return CommandesEnCoursComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; })).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "PVyf":
/*!****************************************!*\
  !*** ./src/app/Models/modificateur.ts ***!
  \****************************************/
/*! exports provided: Modificateur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modificateur", function() { return Modificateur; });
var Modificateur = /** @class */ (function () {
    function Modificateur() {
    }
    return Modificateur;
}());



/***/ }),

/***/ "Ph8J":
/*!****************************************************************!*\
  !*** ./src/app/Services/CategorieService/categorie.service.ts ***!
  \****************************************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var CategorieService = /** @class */ (function () {
    function CategorieService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    CategorieService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/categorie", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.prototype.addCateg = function (categ) {
        return this.http.post(this.url + "/api/categorie", categ, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.prototype.editCateg = function (categ) {
        return this.http.put(this.url + "/api/categorie", categ, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.prototype.deleteCateg = function (categ) {
        return this.http.delete(this.url + "/api/categorie/" + categ.id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.prototype.affectPlat = function (categ, id_plat) {
        return this.http.put(this.url + "/api/categorie/" + categ.id + "/" + id_plat, categ, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.prototype.detachPlat = function (categ, id_plat) {
        return this.http.put(this.url + "/api/categorieDetachPlat/" + categ.id + "/" + id_plat, categ, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CategorieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    CategorieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], CategorieService);
    return CategorieService;
}());



/***/ }),

/***/ "QLvi":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant-info-form/restaurant-info-form.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">\n  <h1 class=\"text_align-center\" style=\"margin-left: 30%\">restaurant</h1>\n</div>\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\">\n      <div class=\"example-container\">\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>Nom</mat-label>\n          <input matInput type=\"text\" name=\"nom_restaurant\" [(ngModel)]=\"data.nom_restaurant\" ngModel #nom_restaurant=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Addresse</mat-label>\n          <input matInput name=\"address\" [(ngModel)]=\"data.address\" ngModel #address=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Tel</mat-label>\n          <input matInput type=\"tel\" name=\"tel\" [(ngModel)]=\"data.tel\" ngModel #tel=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <h6 class=\"m-b-20 m-t-40 p-b-5 b-b-default f-w-600\">Stripe</h6>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Clé secret</mat-label>\n          <input matInput name=\"secret_key_stripe\" [(ngModel)]=\"data.secret_key_stripe\" ngModel #secret_key_stripe=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Clé publique</mat-label>\n          <input matInput name=\"public_key_stripe\" [(ngModel)]=\"data.public_key_stripe\" ngModel #public_key_stripe=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <h6 class=\"m-b-20 m-t-40 p-b-5 b-b-default f-w-600\">Paypal</h6>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Clé secret</mat-label>\n          <input matInput name=\"secret_key_paypal\" [(ngModel)]=\"data.secret_key_paypal\" ngModel #secret_key_paypal=\"ngModel\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-5\">\n          <mat-label>Clé publique</mat-label>\n          <input matInput name=\"public_key_paypal\" [(ngModel)]=\"data.public_key_paypal\" ngModel #public_key_paypal=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>num siret</mat-label>\n          <input matInput type=\"text\" name=\"num_siret\" [(ngModel)]=\"data.num_siret\" ngModel #num_siret=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>num siren</mat-label>\n          <input matInput type=\"text\" name=\"num_siren\" [(ngModel)]=\"data.num_siren\" ngModel #num_siren=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>num tva</mat-label>\n          <input matInput type=\"text\" name=\"num_tva\" [(ngModel)]=\"data.num_tva\" ngModel #num_tva=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>num tva intercommunautaire</mat-label>\n          <input matInput type=\"text\" name=\"num_tva_intercommunautaire\" [(ngModel)]=\"data.num_tva_intercommunautaire\" ngModel #num_tva_intercommunautaire=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"fill\" class=\"width-50 col-10\">\n          <mat-label>rib</mat-label>\n          <input matInput type=\"number\" name=\"rib\" [(ngModel)]=\"data.rib\" ngModel #rib=\"ngModel\" required>\n        </mat-form-field>\n        <br>\n\n        <mat-select [(value)]=\"selected\">\n          <mat-label>Select an option</mat-label>\n          <mat-option *ngFor=\"let u of allUsers\" value= \"{{u.id}}\">{{u.nom}}</mat-option>\n        </mat-select>\n\n        <div class=\"width-50 col-10\">\n          <input type=\"file\" (change)=\"uploadImages($event)\">\n        </div>\n        <br>\n\n        <button mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" [disabled]=\"f.invalid\">envoyer</button>\n        <button mat-stroked-button type=\"reset\" class=\"ml-3\" style=\"background-color: #b0bec5\" >vider le formulaire</button>\n        <button type=\"button\" mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"onclose(f)\" >annuler/terminer</button>\n      </div>\n</form>\n");

/***/ }),

/***/ "Qf2e":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contenaire container-fluid\">\n  <div class=\"login\">\n    <div style=\"display: flex; justify-content: center; padding-bottom: 10px\">\n      <img src=\"../../../assets/img/maria contina connect.png\" height=\"130\" width=\"130\"/>\n    </div>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n      <input type=\"text\" name=\"login\" ngModel #login=\"ngModel\" required>\n      <div class=\"alert-danger\" *ngIf=\"login.invalid && login.errors.required && login.touched\">insérez le login s.v.p\n      </div>\n      <input type=\"password\" name=\"password\" ngModel #password=\"ngModel\" required>\n      <div class=\"alert-danger\" *ngIf=\"password.invalid && password.errors.required && password.touched\">insérez le mot\n        de passe s.v.p\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-block btn-large\" [disabled]=\"f.invalid\">Se connecter</button>\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && isLoginFailed\">Login failed: {{errorMessage}}</div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "Qh8K":
/*!**************************************!*\
  !*** ./src/app/Models/work-times.ts ***!
  \**************************************/
/*! exports provided: WorkTimes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTimes", function() { return WorkTimes; });
var WorkTimes = /** @class */ (function () {
    function WorkTimes() {
    }
    return WorkTimes;
}());



/***/ }),

/***/ "Qo+S":
/*!*******************************************************************************!*\
  !*** ./src/app/components/plats-of-categorie/plats-of-categorie.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlatsOfCategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatsOfCategorieComponent", function() { return PlatsOfCategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plats_of_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plats-of-categorie.component.html */ "rI8j");
/* harmony import */ var _plats_of_categorie_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plats-of-categorie.component.css */ "IKPk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_categorie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/categorie */ "vbEW");
/* harmony import */ var _affect_plat_to_categorie_affect_plat_to_categorie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../affect-plat-to-categorie/affect-plat-to-categorie.component */ "w9HY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/CategorieService/categorie.service */ "Ph8J");












var PlatsOfCategorieComponent = /** @class */ (function () {
    function PlatsOfCategorieComponent(matdialogref, data, dialog, cs) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.cs = cs;
        this.listplats = [];
        this.displayedColumns = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.listplats);
    }
    PlatsOfCategorieComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PlatsOfCategorieComponent.prototype.ngOnInit = function () {
        this.listplats = this.data.plats;
        this.dataSource.data = this.listplats;
    };
    PlatsOfCategorieComponent.prototype.close = function () {
        this.matdialogref.close();
    };
    PlatsOfCategorieComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = this.data;
        var dialogref = this.dialog.open(_affect_plat_to_categorie_affect_plat_to_categorie_component__WEBPACK_IMPORTED_MODULE_6__["AffectPlatToCategorieComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (plat) {
            plat.forEach(function (p) {
                _this.dataSource.data.push(p);
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    PlatsOfCategorieComponent.prototype.delete = function (plat) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.cs.detachPlat(_this.data, plat.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(plat), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    PlatsOfCategorieComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_11__["CategorieService"] }
    ]; };
    PlatsOfCategorieComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
    };
    PlatsOfCategorieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plats-of-categorie',
            template: _raw_loader_plats_of_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plats_of_categorie_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_11__["CategorieService"]])
    ], PlatsOfCategorieComponent);
    return PlatsOfCategorieComponent;
}());



/***/ }),

/***/ "RSor":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificateur-form/modificateur-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">\n</div>\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\">\n\n      <div class=\"container-fluid\">\n       <div class=\"row\">\n         <div class=\"col-lg-12\">\n           <h1 class=\"text_align-center\" style=\"text-align: center\">Modificateur</h1>\n          <hr>\n         </div>\n         <div class=\"col-lg-12\">\n           <mat-form-field appearance=\"fill\" class=\"\">\n             <mat-label>nom</mat-label>\n             <input matInput type=\"text\" name=\"nom\" [(ngModel)]=\"data.nom\" ngModel #nom=\"ngModel\" required>\n           </mat-form-field>\n         </div>\n         <div class=\"col-lg-12\">\n           <mat-form-field appearance=\"fill\" class=\"\">\n             <mat-label>prix</mat-label>\n             <input matInput type=\"number\" name=\"prix\" [(ngModel)]=\"data.prix\" ngModel #prix=\"ngModel\" required>\n           </mat-form-field>\n         </div>\n         <div class=\"col-lg-12\">\n           <mat-form-field appearance=\"fill\" class=\"\">\n             <mat-label>limite</mat-label>\n             <input matInput type=\"number\" name=\"limite\" [(ngModel)]=\"data.limite\" ngModel #limite=\"ngModel\" required>\n           </mat-form-field>\n         </div>\n         <div class=\"col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <button  class=\"btn btn-success\"[disabled]=\"f.invalid\">envoyer</button>\n              </div>\n              <div class=\"col-lg-4\">\n                <button  type=\"reset\" class=\"btn btn-dark\"  >vider le formulaire</button>\n              </div>\n              <div class=\"col-lg-4\">\n                <button type=\"button\" class=\"btn btn-warning\"  (click)=\"onclose(f)\" >annuler/terminer</button>\n              </div>\n            </div>\n         </div>\n       </div>\n      </div>\n\n</form>\n");

/***/ }),

/***/ "Rb30":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorie-management/categorie-management.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter catégorie\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div>\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.nom}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- image Column -->\n    <ng-container matColumnDef=\"img\">\n      <th mat-header-cell  *matHeaderCellDef> Image</th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <div *ngIf=\"element.img\">\n          <div class=\"image-container d-flex\">\n            <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.img}}\"\n                  style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- plats Column -->\n    <ng-container matColumnDef=\"plats\">\n      <th mat-header-cell *matHeaderCellDef> Plats</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"plats(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S0Dq":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-form.component.html */ "0ouZ");
/* harmony import */ var _register_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-form.component.css */ "LTjc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent() {
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.ctorParameters = function () { return []; };
    RegisterFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register-form',
            template: _raw_loader_register_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top bg-blue\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n               <!-- <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>-->\n            </div>\n           <!-- <a class=\"navbar-brand\" href=\"#pablo\">{{getTitle()}}</a>-->\n        </div>\n       <!-- <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>-->\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <!--<form>\n            <div class=\"input-group no-border\">\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-append\">\n                <div class=\"input-group-text\">\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                </div>\n              </div>\n            </div>\n          </form>-->\n          <ul class=\"navbar-nav\">\n           <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n              </a>\n            </li>\n            <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons location_world\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>\n                  <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n              </a>\n            </li>\n-->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\" style=\" cursor: pointer\" >\n                <p> <mat-icon style=\"vertical-align: middle;\">exit_to_app</mat-icon> se déconnecter </p>\n              </a>\n            </li>\n          </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "SbNL":
/*!**************************************************************!*\
  !*** ./src/app/components/plat-form/plat-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTs7QUFFQSIsImZpbGUiOiJwbGF0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5CdXR0b257XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5idXR0b24taW5ne1xuXG59XG4iXX0= */");

/***/ }),

/***/ "Sq/8":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plat-of-offre/plat-of-offre.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"title\">\n  <h1 class=\"text_align-center\" style=\"margin-left: 30%\">Modificateur : <b>{{data.nom}}</b></h1>\n</div>\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    &lt;!&ndash; Nom Column &ndash;&gt;\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.nom}} </td>\n    </ng-container>\n\n    &lt;!&ndash; image Column &ndash;&gt;\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell  *matHeaderCellDef> Image</th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <div *ngIf=\"element.image\">\n          <div class=\"image-container d-flex\">\n            <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                  style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; description Column &ndash;&gt;\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.description}}\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; statut Column &ndash;&gt;\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell *matHeaderCellDef> Statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <div *ngIf=\"element.statut\"> disponible</div>\n        <div *ngIf=\"!element.statut\"> non disponible</div>\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; prix Column &ndash;&gt;\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.prix}}</td>\n    </ng-container>\n\n    &lt;!&ndash; delete Column &ndash;&gt;\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n<div >\n<button mat-raised-button color=\"warn\" class=\"float-left\" (click)=\"add()\">\n  <mat-icon>add</mat-icon>ajouter\n</button>\n<button mat-raised-button color=\"primary\" class=\"float-right\" (click)=\"close()\">\n  précédent\n</button>\n</div>-->\n\n\n\n\n\n<div class=\"container container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align: center\">\n      <h1 class=\"text_align-center\">Modificateur : {{data.nom}}</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <div>\n        <table mat-table matSort [dataSource]=\"dataSource\">\n\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 12pt; line-height: 5px\">\n                {{element.nom}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- image Column -->\n          <ng-container matColumnDef=\"image\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Image</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div *ngIf=\"element.image\">\n                <div class=\"image-container d-flex\">\n                  <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                        style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n                </div>\n              </div>\n            </td>\n          </ng-container>\n\n          <!-- Description Column -->\n          <ng-container matColumnDef=\"description\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Description</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p>\n                {{element.description}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- statut Column -->\n          <ng-container matColumnDef=\"statut\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.statut\"> disponible</p>\n              <p *ngIf=\"!element.statut\"> non disponible</p>\n            </td>\n          </ng-container>\n\n          <!-- prix Column -->\n          <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.prix | currency: \"EUR\": true}}</td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"delete(element)\">\n                <mat-icon style=\"color: #d20b0b; vertical-align: middle\">delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" (click)=\"add()\">\n            <p style=\"font-size: 12pt\">\n              <mat-icon style=\"vertical-align: middle\">add</mat-icon>\n              Ajouter\n            </p>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TBca":
/*!******************************************************************************!*\
  !*** ./src/app/components/modificateur-form/modificateur-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhdGV1ci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBOztBQUVBIiwiZmlsZSI6Im1vZGlmaWNhdGV1ci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQnV0dG9ue1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uYnV0dG9uLWluZ3tcblxufVxuIl19 */");

/***/ }),

/***/ "TF4p":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/printer-config/printer-config.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<strong>Status: {{status}}</strong>\n<div>\n  <input [(ngModel)]=\"ip\" type=\"text\" name=\"ip\" placeholder=\"IP of printer with WebPRNT\">\n  <button (click)=\"connectToWebPrint()\">Connect to WebPRNT</button>\n</div>\n\n<div>\n  <button (click)=\"requestUsb()\">Connect to USB</button>\n  {{driver}}\n</div>\n\n\n<div>\n  <button (click)=\"print()\" [disabled]=\"status === false\"> Print!</button>\n</div>\n");

/***/ }),

/***/ "TTaY":
/*!******************************************!*\
  !*** ./src/app/Models/code-reduction.ts ***!
  \******************************************/
/*! exports provided: CodeReduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeReduction", function() { return CodeReduction; });
var CodeReduction = /** @class */ (function () {
    function CodeReduction() {
    }
    return CodeReduction;
}());



/***/ }),

/***/ "Tpwm":
/*!*******************************!*\
  !*** ./src/app/Models/env.ts ***!
  \*******************************/
/*! exports provided: Env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Env", function() { return Env; });
var Env = /** @class */ (function () {
    function Env() {
    }
    Env.url = 'https://www.api.msfood.msdigital34.fr';
    Env.firebase = {
        apiKey: 'AIzaSyBmlfa-zzpwqf-GYXU0pRMn82v67Bprn-c',
        authDomain: 'msfood-921c8.firebaseapp.com',
        projectId: 'msfood-921c8',
        storageBucket: 'msfood-921c8.appspot.com',
        messagingSenderId: '310500502944',
        appId: '1:310500502944:web:8bfee88e3cfe9132c008c5'
    };
    return Env;
}());



/***/ }),

/***/ "Ttd+":
/*!************************************************************!*\
  !*** ./src/app/Services/HolidayService/holiday.service.ts ***!
  \************************************************************/
/*! exports provided: HolidayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayService", function() { return HolidayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var HolidayService = /** @class */ (function () {
    function HolidayService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    HolidayService.prototype.all = function () {
        return this.http.get(this.url + "/api/holiday", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    HolidayService.prototype.set = function (worktime) {
        return this.http.post(this.url + "/api/holiday", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    HolidayService.prototype.edit = function (worktime) {
        return this.http.put(this.url + "/api/holiday", worktime, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    HolidayService.prototype.del = function (id) {
        return this.http.delete(this.url + "/api/holiday/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    HolidayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    HolidayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], HolidayService);
    return HolidayService;
}());



/***/ }),

/***/ "UWzd":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/ingredients-of-modificateur/ingredients-of-modificateur.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\nbutton {\n  width: 100% !important;\n  height: 45px;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnRzLW9mLW1vZGlmaWNhdGV1ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoiaW5ncmVkaWVudHMtb2YtbW9kaWZpY2F0ZXVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "Ug58":
/*!***********************************!*\
  !*** ./src/app/Models/holiday.ts ***!
  \***********************************/
/*! exports provided: Holiday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
var Holiday = /** @class */ (function () {
    function Holiday() {
    }
    return Holiday;
}());



/***/ }),

/***/ "VJUG":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/affect-plat-to-categorie/affect-plat-to-categorie.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1>affectation plats au catégorie</h1>\n      </div>\n      <div class=\"col-lg-12\">\n        <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n\n          <mat-chip-list #chipList aria-label=\"Fruit selection\">\n            <mat-chip\n              *ngFor=\"let plat of plats\"\n              [selectable]=\"selectable\"\n              [removable]=\"removable\"\n              (removed)=\"remove(plat)\">\n              {{plat}}\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input\n              matInput\n              placeholder=\"Nouvel plat...\"\n              #fruitInput\n              [formControl]=\"fruitCtrl\"\n              [matAutocomplete]=\"auto\"\n              [matChipInputFor]=\"chipList\"\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n              (matChipInputTokenEnd)=\"add($event)\">\n          </mat-chip-list>\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n            <mat-option *ngFor=\"let plat of filteredPlats | async\" [value]=\"plat\">\n              {{plat.nom}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-12\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"affect()\">confirmer</button>\n      </div>\n    </div>\n  </div>\n\n\n</form>\n");

/***/ }),

/***/ "VTgv":
/*!********************************!*\
  !*** ./src/app/Models/plat.ts ***!
  \********************************/
/*! exports provided: Plat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plat", function() { return Plat; });
var Plat = /** @class */ (function () {
    function Plat() {
    }
    return Plat;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W/O7":
/*!******************************************************************!*\
  !*** ./src/app/Services/ingredientService/ingredient.service.ts ***!
  \******************************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var IngredientService = /** @class */ (function () {
    function IngredientService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    IngredientService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/ingredientAll", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/ingredient`, {withCredentials: true});
    };
    IngredientService.prototype.addIngredient = function (ing) {
        return this.http.post(this.url + "/api/ingredient", ing, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.post(`${this.url}/api/ingredient`, ing, {withCredentials: true});
    };
    IngredientService.prototype.updateingredient = function (ing) {
        return this.http.put(this.url + "/api/ingredient", ing, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
    };
    IngredientService.prototype.deleteingredient = function (ing) {
        return this.http.delete(this.url + "/api/ingredient/" + ing, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
    };
    IngredientService.prototype.affectIngredientModificateur = function (modificateur_id, ingredient_id) {
        return this.http.put(this.url + "/api/affectingredientmodificateur/" + modificateur_id + "/" + ingredient_id, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
    };
    IngredientService.prototype.deleteIngredientFromModificateur = function (modificateur_id, ingredient_id) {
        return this.http.put(this.url + "/api/deleteingredientmodificateur/" + modificateur_id + "/" + ingredient_id, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
    };
    IngredientService.prototype.changeStatut = function (ing) {
        return this.http.put(this.url + "/api/changeStatusingredient", ing, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    IngredientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    IngredientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "WYIC":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant-info/restaurant-info.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content page-container \" id=\"page-content\">\n  <div class=\"padding\" >\n    <div class=\"row container-fluid d-flex justify-content-center\">\n      <div class=\"col-xl-12 col-md-12\">\n        <div class=\"card user-card-full\">\n          <div class=\"row m-l-0 m-r-0\">\n            <div class=\"col-sm-4 bg-c-lite-green user-profile\">\n              <div class=\"card-block text-center text-white\">\n                <div class=\"m-b-25\"> <img src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{myRI.logo}}\" class=\"img-radius\" alt=\"User-Profile-Image\"> </div>\n                <h6 class=\"f-w-600\">{{myRI.nom_restaurant}}</h6>\n              </div>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-block\">\n                <h6 class=\"m-b-20 p-b-5 b-b-default f-w-600\">Informations générales</h6>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <p class=\"m-b-10 f-w-600\">Adresse</p>\n                    <h6 class=\"text-muted f-w-400\">{{myRI.address}}</h6>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <p class=\"m-b-10 f-w-600\">Phone</p>\n                    <h6 class=\"text-muted f-w-400\">{{myRI.tel}}</h6>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <p class=\"m-b-10 f-w-600\">Prix livraison</p>\n                    <h6 class=\"text-muted f-w-400\" >{{myRI.prixlivraison}}</h6>\n                  </div>\n                </div>\n                  <h6 class=\"m-b-20 m-t-40 p-b-5 b-b-default f-w-600\">Informations fiscales</h6>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <p class=\"m-b-10 f-w-600\">num siret</p>\n                      <h6 class=\"text-muted f-w-400\">{{myRI.num_siret}}</h6>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <p class=\"m-b-10 f-w-600\">num siren</p>\n                      <h6 class=\"text-muted f-w-400\">{{myRI.num_siren}}</h6>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <p class=\"m-b-10 f-w-600\">num tva intercommunautaire</p>\n                      <h6 class=\"text-muted f-w-400\">{{myRI.num_tva_intercommunautaire}}</h6>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <p class=\"m-b-10 f-w-600\">num tva</p>\n                      <h6 class=\"text-muted f-w-400\">{{myRI.numero_tva}}</h6>\n                    </div>\n                </div>\n                <ul class=\"social-link list-unstyled m-t-40 m-b-10\">\n                  <li><a href=\"#!\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"facebook\" data-abc=\"true\"><i class=\"mdi mdi-facebook feather icon-facebook facebook\" aria-hidden=\"true\"></i></a></li>\n                  <li><a href=\"#!\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"twitter\" data-abc=\"true\"><i class=\"mdi mdi-twitter feather icon-twitter twitter\" aria-hidden=\"true\"></i></a></li>\n                  <li><a href=\"#!\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"instagram\" data-abc=\"true\"><i class=\"mdi mdi-instagram feather icon-instagram instagram\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Developed by MSDigital\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "X7SD":
/*!*************************************************************************************!*\
  !*** ./src/app/components/ingredient-management/ingredient-management.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IngredientManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientManagementComponent", function() { return IngredientManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingredient_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingredient-management.component.html */ "hLqs");
/* harmony import */ var _ingredient_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient-management.component.css */ "Lcvg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/ingredientService/ingredient.service */ "W/O7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ingredient-form/ingredient-form.component */ "tV9J");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");











var IngredientManagementComponent = /** @class */ (function () {
    function IngredientManagementComponent(is, dialog) {
        this.is = is;
        this.dialog = dialog;
        this.listeing = [];
        this.displayedColumns = ['nom', 'prix', 'statut', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listeing);
    }
    IngredientManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    IngredientManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is.getAll().subscribe(function (data) {
            _this.listeing = data;
            _this.dataSource.data = _this.listeing;
        });
    };
    IngredientManagementComponent.prototype.edit = function (ing) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = ing;
        var dialogref = this.dialog.open(_ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_9__["IngredientFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.is.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            _this.dataSource.data.forEach(function (i) {
                if (i.id === data.id) {
                    var index = _this.dataSource.data.indexOf(data);
                    if (index >= 0) {
                        _this.dataSource.data[index] = data;
                        _this.dataSource.paginator = _this.paginator;
                    }
                }
            });
        });
    };
    IngredientManagementComponent.prototype.delete = function (ing) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.is.deleteingredient(ing.id).subscribe(function (ata) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(ing), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    IngredientManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    IngredientManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_9__["IngredientFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.is.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            else {
                data.forEach(function (d) {
                    console.log(d);
                    _this.dataSource.data.push(d);
                });
            }
            _this.dataSource.paginator = _this.paginator;
        });
    };
    IngredientManagementComponent.prototype.changeStatut = function (ingredient) {
        var _this = this;
        this.is.changeStatut(ingredient).subscribe(function (ingred) {
            _this.dataSource.data[_this.dataSource.data.indexOf(ingredient)] = ingredient;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.dataSource.data[_this.dataSource.data.indexOf(ingredient)].statut = !ingredient.statut; });
    };
    IngredientManagementComponent.ctorParameters = function () { return [
        { type: _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    IngredientManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    IngredientManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ingredient-management',
            template: _raw_loader_ingredient_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_ingredient_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], IngredientManagementComponent);
    return IngredientManagementComponent;
}());



/***/ }),

/***/ "XP5H":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-image-form/upload-image-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"width-50 col-10\">\n  <input type=\"file\" (change)=\"uploadImages($event)\">\n</div>\n\n<button mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"onsubmit()\">envoyer</button>\n<button type=\"button\" mat-stroked-button class=\"ml-3\" style=\"background-color: #b0bec5\" (click)=\"onclose()\" >fermer</button>\n");

/***/ }),

/***/ "XaPi":
/*!****************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartstat{\n  width: 99% !important;\n  max-width: 99% !important;\n  margin: 1%;\n  background: white;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n*{\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydHN0YXR7XG4gIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA5OSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuKntcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "Ydas":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/commandes-en-atente/commandes-en-atente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.user.nom}}</p>\n      </td>\n    </ng-container>\n\n    <!-- tel Column -->\n    <ng-container matColumnDef=\"numero_de_telephone\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Tel</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">\n          {{element.user.numero_de_telephone}}\n        </p> </td>\n    </ng-container>\n\n    <!-- détailles de la commande Column -->\n    <ng-container matColumnDef=\"détailles de commande\">\n      <th mat-header-cell *matHeaderCellDef> commande</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"detaillesCommande(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix_total\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.prix_total | currency:'EUR':true}}</p>\n      </td>\n    </ng-container>\n\n    <!-- Validate command Column -->\n    <ng-container matColumnDef=\"validate\">\n      <th mat-header-cell *matHeaderCellDef> Valider</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"validate(element)\">\n          <mat-icon style=\"color: #00B451\">check_circle</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- cancel command Column -->\n    <ng-container matColumnDef=\"cancel\">\n      <th mat-header-cell *matHeaderCellDef> Annuler</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"cancel(element)\">\n          <mat-icon style=\"color: #e5062f\">cancel</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _components_commandes_en_atente_commandes_en_atente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/commandes-en-atente/commandes-en-atente.component */ "xo2U");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "E2xP");
/* harmony import */ var _components_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _components_commandes_en_cours_commandes_en_cours_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/commandes-en-cours/commandes-en-cours.component */ "O/lb");
/* harmony import */ var _components_commande_termine_commande_termine_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/commande-termine/commande-termine.component */ "H3GW");
/* harmony import */ var _components_commandes_archives_commandes_archives_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/commandes-archives/commandes-archives.component */ "MHFO");
/* harmony import */ var _components_ingredient_management_ingredient_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ingredient-management/ingredient-management.component */ "X7SD");
/* harmony import */ var _components_ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ingredient-form/ingredient-form.component */ "tV9J");
/* harmony import */ var _components_modificateur_management_modificateur_management_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modificateur-management/modificateur-management.component */ "J33c");
/* harmony import */ var _components_plats_of_modificateur_plats_of_modificateur_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/plats-of-modificateur/plats-of-modificateur.component */ "yYfB");
/* harmony import */ var _components_affect_plat_to_modificateur_affect_plat_to_modificateur_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/affect-plat-to-modificateur/affect-plat-to-modificateur.component */ "9GuS");
/* harmony import */ var _components_ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ingredients-of-modificateur/ingredients-of-modificateur.component */ "Cvyh");
/* harmony import */ var _components_affect_ingred_to_modificateur_affect_ingred_to_modificateur_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/affect-ingred-to-modificateur/affect-ingred-to-modificateur.component */ "t+Vd");
/* harmony import */ var _components_modificateur_form_modificateur_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modificateur-form/modificateur-form.component */ "M0CF");
/* harmony import */ var _components_plat_management_plat_management_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/plat-management/plat-management.component */ "9tzZ");
/* harmony import */ var _components_plat_form_plat_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/plat-form/plat-form.component */ "ZYVS");
/* harmony import */ var _components_modificateurs_of_plat_modificateurs_of_plat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/modificateurs-of-plat/modificateurs-of-plat.component */ "fiBI");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "S0Dq");
/* harmony import */ var _components_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _components_affect_modificateur_to_plat_affect_modificateur_to_plat_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/affect-modificateur-to-plat/affect-modificateur-to-plat.component */ "xVy0");
/* harmony import */ var _components_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/back-confirmation/back-confirmation.component */ "pECv");
/* harmony import */ var _components_categorie_management_categorie_management_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/categorie-management/categorie-management.component */ "DQiH");
/* harmony import */ var _components_plats_of_categorie_plats_of_categorie_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/plats-of-categorie/plats-of-categorie.component */ "Qo+S");
/* harmony import */ var _components_affect_plat_to_categorie_affect_plat_to_categorie_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/affect-plat-to-categorie/affect-plat-to-categorie.component */ "w9HY");
/* harmony import */ var _components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/categorie-form/categorie-form.component */ "Ls5x");
/* harmony import */ var _components_upload_image_form_upload_image_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/upload-image-form/upload-image-form.component */ "pENM");
/* harmony import */ var _components_restaurant_info_restaurant_info_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/restaurant-info/restaurant-info.component */ "nDzE");
/* harmony import */ var _components_restaurant_info_management_restaurant_info_management_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/restaurant-info-management/restaurant-info-management.component */ "pHfF");
/* harmony import */ var _components_restaurant_info_form_restaurant_info_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/restaurant-info-form/restaurant-info-form.component */ "aG4e");
/* harmony import */ var _components_work_times_work_times_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/work-times/work-times.component */ "Efqd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_edit_work_time_form_edit_work_time_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/edit-work-time-form/edit-work-time-form.component */ "e8k9");
/* harmony import */ var _components_reduction_management_reduction_management_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/reduction-management/reduction-management.component */ "s5oJ");
/* harmony import */ var _components_add_reduction_form_add_reduction_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/add-reduction-form/add-reduction-form.component */ "gQ+g");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Models/env */ "Tpwm");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/fire/database */ "36mX");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Services/Firebase/firebase.service */ "0TIH");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-thermal-print */ "T+MG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_50__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_49__["AngularFireDatabaseModule"],
                ng_thermal_print__WEBPACK_IMPORTED_MODULE_52__["ThermalPrintModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_47__["AngularFireModule"].initializeApp(_Models_env__WEBPACK_IMPORTED_MODULE_48__["Env"].firebase),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_53__["IonicModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _components_commandes_en_atente_commandes_en_atente_component__WEBPACK_IMPORTED_MODULE_12__["CommandesEnAtenteComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__["LoginFormComponent"],
                _components_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_15__["DetailleCommandeComponent"],
                _components_commandes_en_cours_commandes_en_cours_component__WEBPACK_IMPORTED_MODULE_16__["CommandesEnCoursComponent"],
                _components_commande_termine_commande_termine_component__WEBPACK_IMPORTED_MODULE_17__["CommandeTermineComponent"],
                _components_commandes_archives_commandes_archives_component__WEBPACK_IMPORTED_MODULE_18__["CommandesArchivesComponent"],
                _components_ingredient_management_ingredient_management_component__WEBPACK_IMPORTED_MODULE_19__["IngredientManagementComponent"],
                _components_ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_20__["IngredientFormComponent"],
                _components_modificateur_management_modificateur_management_component__WEBPACK_IMPORTED_MODULE_21__["ModificateurManagementComponent"],
                _components_plats_of_modificateur_plats_of_modificateur_component__WEBPACK_IMPORTED_MODULE_22__["PlatsOfModificateurComponent"],
                _components_affect_plat_to_modificateur_affect_plat_to_modificateur_component__WEBPACK_IMPORTED_MODULE_23__["AffectPlatToModificateurComponent"],
                _components_ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_24__["IngredientsOfModificateurComponent"],
                _components_affect_ingred_to_modificateur_affect_ingred_to_modificateur_component__WEBPACK_IMPORTED_MODULE_25__["AffectIngredToModificateurComponent"],
                _components_modificateur_form_modificateur_form_component__WEBPACK_IMPORTED_MODULE_26__["ModificateurFormComponent"],
                _components_plat_management_plat_management_component__WEBPACK_IMPORTED_MODULE_27__["PlatManagementComponent"],
                _components_plat_form_plat_form_component__WEBPACK_IMPORTED_MODULE_28__["PlatFormComponent"],
                _components_modificateurs_of_plat_modificateurs_of_plat_component__WEBPACK_IMPORTED_MODULE_29__["ModificateursOfPlatComponent"],
                _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_30__["RegisterFormComponent"],
                _components_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_31__["ConfirmationBannerComponent"],
                _components_affect_modificateur_to_plat_affect_modificateur_to_plat_component__WEBPACK_IMPORTED_MODULE_32__["AffectModificateurToPlatComponent"],
                _components_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["BackConfirmationComponent"],
                _components_categorie_management_categorie_management_component__WEBPACK_IMPORTED_MODULE_34__["CategorieManagementComponent"],
                _components_plats_of_categorie_plats_of_categorie_component__WEBPACK_IMPORTED_MODULE_35__["PlatsOfCategorieComponent"],
                _components_affect_plat_to_categorie_affect_plat_to_categorie_component__WEBPACK_IMPORTED_MODULE_36__["AffectPlatToCategorieComponent"],
                _components_categorie_form_categorie_form_component__WEBPACK_IMPORTED_MODULE_37__["CategorieFormComponent"],
                _components_upload_image_form_upload_image_form_component__WEBPACK_IMPORTED_MODULE_38__["UploadImageFormComponent"],
                _components_restaurant_info_restaurant_info_component__WEBPACK_IMPORTED_MODULE_39__["RestaurantInfoComponent"],
                _components_restaurant_info_management_restaurant_info_management_component__WEBPACK_IMPORTED_MODULE_40__["RestaurantInfoManagementComponent"],
                _components_restaurant_info_form_restaurant_info_form_component__WEBPACK_IMPORTED_MODULE_41__["RestaurantInfoFormComponent"],
                _components_work_times_work_times_component__WEBPACK_IMPORTED_MODULE_42__["WorkTimesComponent"],
                _components_edit_work_time_form_edit_work_time_form_component__WEBPACK_IMPORTED_MODULE_44__["EditWorkTimeFormComponent"],
                _components_reduction_management_reduction_management_component__WEBPACK_IMPORTED_MODULE_45__["ReductionManagementComponent"],
                _components_add_reduction_form_add_reduction_form_component__WEBPACK_IMPORTED_MODULE_46__["AddReductionFormComponent"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_43__["DatePipe"],
                _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_51__["FirebaseService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZJCj":
/*!***************************************************************!*\
  !*** ./src/app/components/offre-form/offre-form.component.ts ***!
  \***************************************************************/
/*! exports provided: OffreFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffreFormComponent", function() { return OffreFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offre_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offre-form.component.html */ "kIUG");
/* harmony import */ var _offre_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offre-form.component.css */ "EgIt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");
/* harmony import */ var _Models_offre__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/offre */ "D/qK");
/* harmony import */ var _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/OffreService/offre.service */ "NdqV");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");










var OffreFormComponent = /** @class */ (function () {
    function OffreFormComponent(matdialogref, data, dialog, os, imgs) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.os = os;
        this.imgs = imgs;
        this.offre = new _Models_offre__WEBPACK_IMPORTED_MODULE_6__["Offre"]();
        this.src = '';
        this.newoffress = [];
    }
    OffreFormComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.offre;
        }
    };
    OffreFormComponent.prototype.reset = function () {
        this.image.nativeElement.value = '';
        this.src = '';
    };
    OffreFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new plat
                if (_this.data === _this.offre) {
                    _this.data.nom = f.value.nom;
                    _this.data.description = f.value.description;
                    _this.data.prix = f.value.prix;
                    _this.data.image = _this.src;
                    _this.data.isDisponible = true;
                    _this.os.add(_this.data).subscribe(function (d) {
                        _this.newoffress.push(d);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newoffress);
                            }
                            else {
                                _this.src = '';
                                _this.reset();
                                f.form.reset();
                            }
                        });
                    });
                }
                else { // edit modif
                    _this.data.nom = f.value.nom;
                    _this.data.description = f.value.description;
                    _this.data.prix = f.value.prix;
                    _this.data.image = _this.src;
                    _this.os.update(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(data);
                    });
                }
            }
        });
    };
    OffreFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                f.resetForm();
                _this.reset();
                _this.matdialogref.close();
            }
        });
    };
    OffreFormComponent.prototype.uploadImages = function (e) {
        this.selectedFiles = e.target.files;
        this.upload(this.selectedFiles[0]);
    };
    OffreFormComponent.prototype.upload = function (selectedFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        var response = this.imgs.uploadimg(formData).subscribe(function (d) {
            _this.src = d;
        }, function (error) {
            _this.src = error.error.text;
        });
    };
    OffreFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_offre__WEBPACK_IMPORTED_MODULE_6__["Offre"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_7__["OffreService"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }
    ]; };
    OffreFormComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['image',] }]
    };
    OffreFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-offre-form',
            template: _raw_loader_offre_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_offre_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_offre__WEBPACK_IMPORTED_MODULE_6__["Offre"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_7__["OffreService"], _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]])
    ], OffreFormComponent);
    return OffreFormComponent;
}());



/***/ }),

/***/ "ZUY2":
/*!**********************************************************************************!*\
  !*** ./src/app/components/commandes-en-atente/commandes-en-atente.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n::ng-deep .mat-focused .mat-form-field-label  {\n  /*change color of label*/\n  color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #343a40 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #343a40 !important;;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlcy1lbi1hdGVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9DQUFvQztBQUN0QyIsImZpbGUiOiJjb21tYW5kZXMtZW4tYXRlbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50Oztcbn1cbiJdfQ== */");

/***/ }),

/***/ "ZYVS":
/*!*************************************************************!*\
  !*** ./src/app/components/plat-form/plat-form.component.ts ***!
  \*************************************************************/
/*! exports provided: PlatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatFormComponent", function() { return PlatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plat_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plat-form.component.html */ "Ao7C");
/* harmony import */ var _plat_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plat-form.component.css */ "SbNL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_plat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/plat */ "VTgv");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");










var PlatFormComponent = /** @class */ (function () {
    function PlatFormComponent(matdialogref, data, dialog, ps, imgs) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.ps = ps;
        this.imgs = imgs;
        this.plat = new _Models_plat__WEBPACK_IMPORTED_MODULE_5__["Plat"]();
        this.url = [];
        this.src = '';
        this.newplats = [];
        this.loading_img = false;
    }
    PlatFormComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.plat;
        }
        else {
            this.loading_img = true;
        }
    };
    PlatFormComponent.prototype.reset = function () {
        this.image.nativeElement.value = '';
        this.src = '';
    };
    PlatFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new plat
                if (_this.data === _this.plat) {
                    _this.data.nom = f.value.nom;
                    _this.data.description = f.value.description;
                    _this.data.prix = f.value.prix;
                    _this.data.image = _this.src;
                    _this.ps.addplat(_this.data).subscribe(function (d) {
                        _this.newplats.push(d);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newplats);
                            }
                            else {
                                _this.src = '';
                                _this.reset();
                                f.form.reset();
                            }
                        });
                    });
                }
                else { // edit plat
                    _this.data.nom = f.value.nom;
                    _this.data.description = f.value.description;
                    _this.data.prix = f.value.prix;
                    _this.data.image = _this.src;
                    _this.ps.updateplat(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(data);
                    });
                }
            }
        });
    };
    PlatFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                f.resetForm();
                _this.reset();
                _this.matdialogref.close();
            }
        });
    };
    PlatFormComponent.prototype.uploadImages = function (e) {
        this.loading_img = false;
        this.selectedFiles = e.target.files;
        this.upload(this.selectedFiles[0]);
    };
    PlatFormComponent.prototype.upload = function (selectedFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        var response = this.imgs.uploadimg(formData).subscribe(function (d) {
            _this.src = d;
            _this.loading_img = true;
        }, function (error) {
            _this.src = error.error.text;
            _this.loading_img = true;
        });
    };
    PlatFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_plat__WEBPACK_IMPORTED_MODULE_5__["Plat"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__["PlatService"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] }
    ]; };
    PlatFormComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['image',] }]
    };
    PlatFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plat-form',
            template: _raw_loader_plat_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plat_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_plat__WEBPACK_IMPORTED_MODULE_5__["Plat"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__["PlatService"], _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]])
    ], PlatFormComponent);
    return PlatFormComponent;
}());



/***/ }),

/***/ "aCS8":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedule-and-holidays-management/schedule-and-holidays-management.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: whitesmoke;\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n       <div class=\"row ferier\" >\n         <div class=\"col-lg-12\">\n           <h1 style=\"text-align: center\"> Les jours fériés</h1>\n           <hr>\n         </div>\n         <div class=\"col-lg-12 ferier\">\n\n              <div class=\"row \">\n                <div class=\"col-lg-4\" >\n                  <button\n\n                    [disabled]=\"!dataSource.data.length\"\n                    (click)=\"submitHoliday()\"\n                    class=\"btn btn-success btn-schedule\">\n                    Envoyer\n                  </button>\n                </div>\n                <div class=\"col-lg-4\" >\n                    <button\n\n                      (click)=\"addHoliday()\"\n                      class=\"btn btn-primary btn-schedule\">\n                      Ajouter Férié\n                    </button>\n                </div>\n                <div class=\"col-lg-4\" >\n                    <button\n\n                      [disabled]=\"!dataSource.data.length\"\n                      (click)=\"removeData()\"\n                      class=\"btn btn-warning btn-schedule\">\n                      Supprimer la derniere ligne\n                    </button>\n                </div>\n                </div>\n              </div>\n\n           <div class=\"col-lg-12\" style=\"margin-bottom: 50px;\">\n             <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n\n               <!-- jour_férié Column -->\n               <ng-container matColumnDef=\"jour_férié\">\n                 <th mat-header-cell style=\"text-align: center;\" *matHeaderCellDef>Sélectionner une date</th>\n                 <td mat-cell *matCellDef=\"let element; let k = index;\">\n                   <mat-form-field class=\"example-full-width\"  style=\"width: 100%;\"  appearance=\"fill\">\n                     <mat-label>Choisir une date</mat-label>\n                     <input #date matInput [matDatepicker]=\"holiday\" (dateChange)=\"getHolidayDate(k, $event)\">\n                     <mat-datepicker-toggle matSuffix [for]=\"holiday\"></mat-datepicker-toggle>\n                     <mat-datepicker touchUi #holiday></mat-datepicker>\n                   </mat-form-field>\n                 </td>\n               </ng-container>\n\n               <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n               <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n             </table>\n           </div>\n          <div class=\"col-lg-12\">\n            <table mat-table #table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8 demo-table\">\n\n              <!-- jour_férié Column -->\n              <ng-container matColumnDef=\"jour_férié\">\n                <th mat-header-cell *matHeaderCellDef>Férié</th>\n                <td mat-cell *matCellDef=\"let element; let k = index;\">\n                  <h1>{{element.holiday | date: 'dd/MM/yyyy'}}</h1>\n                </td>\n              </ng-container>\n\n              <!-- modifier Column -->\n              <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>Modifier</th>\n                <td mat-cell *matCellDef=\"let element; let k = index;\">\n                  <button mat-raised-button color=\"primary\" (click)=\"editHoliday(element)\">\n                    <mat-icon>edit</mat-icon>\n                  </button>\n                </td>\n              </ng-container>\n\n              <!-- delete Column -->\n              <ng-container matColumnDef=\"delete\">\n                <th mat-header-cell *matHeaderCellDef> supprimer</th>\n                <td mat-cell *matCellDef=\"let element; let m = index\">\n                  <button mat-raised-button color=\"accent\" (click)=\"deleteHoliday( element)\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n            </table>\n          </div>\n           <hr>\n         </div>\n       </div>\n      <div class=\"col-lg-6\">\n        <div class=\"row ferier\">\n          <div class=\"col-lg-12\">\n            <div class=\"col-lg-12\">\n              <h1 style=\"text-align: center\"> Planification hebdomadaire</h1>\n              <hr>\n            </div>\n            <div class=\"demo-button-container\">\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <button\n                    [disabled]=\"!dataSource.data.length\"\n                    (click)=\"submitTime()\"\n                    class=\"btn btn-success btn-schedule\">\n                    Envoyer\n                  </button>\n                </div>\n                <div class=\"col-lg-4\">\n                  <button\n\n                    (click)=\"addTime()\"\n                    class=\"btn btn-primary btn-schedule\">\n                    Ajouter une ligne\n                  </button>\n                </div>\n                <div class=\"col-lg-4\">\n                  <button\n\n                    [disabled]=\"!dataSource.data.length\"\n                    (click)=\"removeDataTime()\"\n                    class=\"btn btn-warning btn-schedule\">\n                    Supprimer la derniere ligne\n                  </button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col-lg-12\">\n            <table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8 demo-table\">\n\n              <!-- jour Column -->\n              <ng-container matColumnDef=\"jour\">\n                <th mat-header-cell *matHeaderCellDef>Jour</th>\n                <td mat-cell *matCellDef=\"let element; let l = index;\">\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Selectionner le jour</mat-label>\n                    <mat-select [(ngModel)]=\"element.day\">\n                      <mat-option *ngFor=\"let day of week\" [value]=\"day\">\n                        <p *ngIf=\"day == 'monday'\">lundi</p>\n                        <p *ngIf=\"day == 'tuesday'\">mardi</p>\n                        <p *ngIf=\"day == 'wednesday'\">mercredi</p>\n                        <p *ngIf=\"day == 'thursday'\">jeudi</p>\n                        <p *ngIf=\"day == 'friday'\">vendredi</p>\n                        <p *ngIf=\"day == 'saturday'\">samedi</p>\n                        <p *ngIf=\"day == 'sunday'\">dimanche</p>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n              </ng-container>\n\n              <!-- debut Column -->\n              <ng-container matColumnDef=\"debut\">\n                <th mat-header-cell *matHeaderCellDef>Debut</th>\n                <td mat-cell *matCellDef=\"let element; let i = index\">\n\n                  <ngb-timepicker [(ngModel)]=\"timeStart[i]\"\n                                  (ngModelChange)=\"getStart(i, timeStart[i])\"></ngb-timepicker>\n                </td>\n              </ng-container>\n\n              <!-- fin Column -->\n              <ng-container matColumnDef=\"fin\">\n                <th mat-header-cell *matHeaderCellDef>Debut</th>\n                <td mat-cell *matCellDef=\"let element; let i = index\">\n\n                  <ngb-timepicker [(ngModel)]=\"timeEnd[i]\"\n                                  (ngModelChange)=\"getFin(i, timeEnd[i])\"></ngb-timepicker>\n                </td>\n              </ng-container>\n\n              <!-- supprimer Column -->\n              <ng-container matColumnDef=\"supprimer\">\n                <th mat-header-cell *matHeaderCellDef> supprimer</th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </ng-container>\n\n              <!-- envoyer Column -->\n              <ng-container matColumnDef=\"submit\">\n                <th mat-header-cell *matHeaderCellDef> envoyer</th>\n                <td mat-cell *matCellDef=\"let element; let m = index\">\n                  <button *ngIf=\"element.id === undefined\" mat-raised-button color=\"accent\"\n                          (click)=\"submitOneTime(m, element)\">\n                    Envoyer\n                  </button>\n                  <button *ngIf=\"element.id !== undefined\" mat-raised-button color=\"primary\" (click)=\"edit(element)\">\n                    <mat-icon>edit</mat-icon>\n                  </button>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n            </table>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"container-fluid\" style=\"background-color: whitesmoke;\">\n  <div class=\"row \">\n    <div class=\"col-md-6\">\n     <div class=\"row ferier\">\n       <div class=\"col-lg-6\">\n         <h3 style=\"text-align: left\">\n           Modalités de paiement\n         </h3>\n         <hr>\n       </div>\n       <div class=\"col-lg-6\">\n         <h3 style=\"text-align: left\">\n           Services\n         </h3>\n         <hr>\n       </div>\n       <div class=\"col-md-6\">\n         <section class=\"example-section\" [formGroup]=\"payment\">\n           <p><mat-checkbox formControlName=\"carte_bancaire\">Carte bancaire</mat-checkbox></p>\n           <p><mat-checkbox formControlName=\"cash\">Cash</mat-checkbox></p>\n         </section>\n       </div>\n       <div class=\"col-md-6\">\n         <section class=\"example-section\" [formGroup]=\"services\">\n           <p><mat-checkbox formControlName=\"livraison\" >Livraison</mat-checkbox></p>\n           <p><mat-checkbox formControlName=\"emporter\">à emporter</mat-checkbox></p>\n           <p><mat-checkbox formControlName=\"sur_place\" >Sur place</mat-checkbox></p>\n         </section>\n       </div>\n       <div class=\"col-md-12\">\n         <button class=\"btn btn-primary btn-schedule\" (click)=\"updateRestauInfo()\">valider</button>\n       </div>\n     </div>\n\n    </div>\n\n\n\n\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "aG4e":
/*!***********************************************************************************!*\
  !*** ./src/app/components/restaurant-info-form/restaurant-info-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RestaurantInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantInfoFormComponent", function() { return RestaurantInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restaurant_info_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restaurant-info-form.component.html */ "QLvi");
/* harmony import */ var _restaurant_info_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-info-form.component.css */ "rlpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/restaurant-info */ "LFwX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/UserService/user.service */ "B9hT");












var RestaurantInfoFormComponent = /** @class */ (function () {
    function RestaurantInfoFormComponent(matdialogref, data, dialog, rs, imgs, cookie, us) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.rs = rs;
        this.imgs = imgs;
        this.cookie = cookie;
        this.us = us;
        this.ri = new _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfo"]();
        this.newrestau = [];
        this.logo = '';
        this.allUsers = [];
        this.selected = 1;
    }
    RestaurantInfoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data) {
            this.data = this.ri;
        }
        this.us.all().subscribe(function (users) {
            _this.allUsers = users;
        });
    };
    RestaurantInfoFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.data.nom_restaurant = f.value.nom_restaurant;
                _this.data.address = f.value.address;
                _this.data.tel = f.value.tel;
                _this.data.longitude = 256155;
                _this.data.latitude = 51151;
                _this.data.public_key_stripe = f.value.public_key_stripe;
                _this.data.secret_key_stripe = f.value.secret_key_stripe;
                _this.data.public_key_paypal = f.value.public_key_paypal;
                _this.data.secret_key_paypal = f.value.secret_key_paypal;
                _this.data.num_siret = f.value.num_siret;
                _this.data.num_siren = f.value.num_siren;
                _this.data.numero_tva = f.value.numero_tva;
                _this.data.num_tva_intercommunautaire = f.value.num_tva_intercommunautaire;
                _this.data.user_id = 1;
                if (_this.data === _this.ri) {
                    // add new restau
                    _this.rs.add(_this.data).subscribe(function (data) {
                        _this.newrestau.push(data);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newrestau);
                            }
                            else {
                                f.form.reset();
                            }
                        });
                    });
                }
                else {
                    // update
                    _this.data.nom_restaurant = f.value.nom_restaurant;
                    _this.data.address = f.value.address;
                    _this.data.tel = f.value.tel;
                    _this.data.public_key_stripe = f.value.public_key_stripe;
                    _this.data.secret_key_stripe = f.value.secret_key_stripe;
                    _this.data.public_key_paypal = f.value.public_key_paypal;
                    _this.data.secret_key_paypal = f.value.secret_key_paypal;
                    _this.data.num_siret = f.value.num_siret;
                    _this.data.num_siren = f.value.num_siren;
                    _this.data.numero_tva = f.value.numero_tva;
                    _this.data.num_tva_intercommunautaire = f.value.num_tva_intercommunautaire;
                    _this.data.logo = _this.logo;
                    _this.rs.update(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(_this.data);
                    });
                }
            }
        });
    };
    RestaurantInfoFormComponent.prototype.uploadImages = function (e) {
        this.selectedFiles = e.target.files;
        for (var i = 0; i < this.selectedFiles.length; i++) {
            this.upload(this.selectedFiles[i]);
        }
    };
    RestaurantInfoFormComponent.prototype.upload = function (selectedFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        var response = this.imgs.uploadimg(formData).subscribe(function (d) {
            _this.logo = d;
        }, function (error) {
            _this.logo = (error.error.text);
        });
    };
    RestaurantInfoFormComponent.prototype.onclose = function (f) {
    };
    RestaurantInfoFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfo"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantInfoService"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] },
        { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }
    ]; };
    RestaurantInfoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-restaurant-info-form',
            template: _raw_loader_restaurant_info_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_restaurant_info_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfo"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantInfoService"], _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"], _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]])
    ], RestaurantInfoFormComponent);
    return RestaurantInfoFormComponent;
}());



/***/ }),

/***/ "bQcG":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InVzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "E2xP");
/* harmony import */ var _routeGuard_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routeGuard/login-guard.guard */ "r0NL");
/* harmony import */ var _routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routeGuard/dashboard.guard */ "xBq7");









var routes = [
    { path: 'loginform', component: _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], canActivate: [_routeGuard_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]] },
    { path: '', redirectTo: 'loginform', pathMatch: 'full' },
    { path: '', component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ] },
    { path: '**', redirectTo: 'dashboard', canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "c1es":
/*!******************************************************************************!*\
  !*** ./src/app/components/upload-image-form/upload-image-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtaW1hZ2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "e51u":
/*!*************************************!*\
  !*** ./src/assets/Config/test.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Leanne Graham\",\"username\":\"Bret\",\"email\":\"Sincere@april.biz\",\"phone\":\"1-770-736-8031 x56442\",\"website\":\"hildegard.org\"},{\"id\":2,\"name\":\"Ervin Howell\",\"username\":\"Antonette\",\"email\":\"Shanna@melissa.tv\",\"phone\":\"010-692-6593 x09125\",\"website\":\"anastasia.net\"},{\"id\":3,\"name\":\"Clementine Bauch\",\"username\":\"Samantha\",\"email\":\"Nathan@yesenia.net\",\"phone\":\"1-463-123-4447\",\"website\":\"ramiro.info\"},{\"id\":4,\"name\":\"Patricia Lebsack\",\"username\":\"Karianne\",\"email\":\"Julianne.OConner@kory.org\",\"phone\":\"493-170-9623 x156\",\"website\":\"kale.biz\"},{\"id\":5,\"name\":\"Chelsey Dietrich\",\"username\":\"Kamren\",\"email\":\"Lucio_Hettinger@annie.ca\",\"phone\":\"(254)954-1289\",\"website\":\"demarco.info\"},{\"id\":6,\"name\":\"Mrs. Dennis Schulist\",\"username\":\"Leopoldo_Corkery\",\"email\":\"Karley_Dach@jasper.info\",\"phone\":\"1-477-935-8478 x6430\",\"website\":\"ola.org\"},{\"id\":7,\"name\":\"Kurtis Weissnat\",\"username\":\"Elwyn.Skiles\",\"email\":\"Telly.Hoeger@billy.biz\",\"phone\":\"210.067.6132\",\"website\":\"elvis.io\"},{\"id\":8,\"name\":\"Nicholas Runolfsdottir V\",\"username\":\"Maxime_Nienow\",\"email\":\"Sherwood@rosamond.me\",\"phone\":\"586.493.6943 x140\",\"website\":\"jacynthe.com\"},{\"id\":9,\"name\":\"Glenna Reichert\",\"username\":\"Delphine\",\"email\":\"Chaim_McDermott@dana.io\",\"phone\":\"(775)976-6794 x41206\",\"website\":\"conrad.com\"},{\"id\":10,\"name\":\"Clementina DuBuque\",\"username\":\"Moriah.Stanton\",\"email\":\"Rey.Padberg@karina.biz\",\"phone\":\"024-648-3804\",\"website\":\"ambrose.net\"}]");

/***/ }),

/***/ "e8k9":
/*!*********************************************************************************!*\
  !*** ./src/app/components/edit-work-time-form/edit-work-time-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditWorkTimeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkTimeFormComponent", function() { return EditWorkTimeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_work_time_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-work-time-form.component.html */ "3G11");
/* harmony import */ var _edit_work_time_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-work-time-form.component.css */ "fQNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/WorkTime/work-time-service.service */ "KEYN");







var EditWorkTimeFormComponent = /** @class */ (function () {
    function EditWorkTimeFormComponent(matdialogref, datepipe, data, dialog, ws) {
        this.matdialogref = matdialogref;
        this.datepipe = datepipe;
        this.data = data;
        this.dialog = dialog;
        this.ws = ws;
        this.timestart = {
            hour: this.data.date.getHours(),
            minute: this.data.date.getMinutes()
        };
        this.dateend = new Date(this.data.worktime.end);
        this.dateholiday = new Date(this.data.worktime.holiday);
        this.timeend = {
            hour: this.dateend.getHours(),
            minute: this.dateend.getMinutes()
        };
    }
    EditWorkTimeFormComponent.prototype.ngOnInit = function () {
    };
    EditWorkTimeFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        if (this.data.worktime.start) {
            this.data.worktime.start = this.datepipe.transform(f.value.start, 'yyyy-MM-dd') + ' ' +
                f.value.starttime.hour.toString().padStart(2, '0') + ':' +
                f.value.starttime.minute.toString().padStart(2, '0');
            this.data.worktime.end = this.datepipe.transform(f.value.end, 'yyyy-MM-dd') + ' ' +
                f.value.endtime.hour.toString().padStart(2, '0') + ':' +
                f.value.endtime.minute.toString().padStart(2, '0');
            this.data.date = f.value.start;
        }
        else {
            this.data.worktime.holiday = this.datepipe.transform(f.value.holiday, 'yyyy-MM-dd');
            this.data.date = f.value.holiday;
        }
        this.ws.edit(this.data.worktime).subscribe(function (d) {
            _this.matdialogref.close(_this.data);
        });
    };
    EditWorkTimeFormComponent.prototype.onclose = function (f) {
        this.matdialogref.close();
        /*const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        const dialogref = this.dialog.open(ConfirmationBannerComponent, dialogConfig);
        dialogref.afterClosed().subscribe((retour: boolean) => {
          if (retour === true) {
            f.resetForm();
            this.matdialogref.close();
          }
        });*/
    };
    EditWorkTimeFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceService"] }
    ]; };
    EditWorkTimeFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-work-time-form',
            template: _raw_loader_edit_work_time_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_work_time_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_WorkTime_work_time_service_service__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceService"]])
    ], EditWorkTimeFormComponent);
    return EditWorkTimeFormComponent;
}());



/***/ }),

/***/ "eBD2":
/*!******************************************************************!*\
  !*** ./src/app/components/all-tickets/all-tickets.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC10aWNrZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYWxsLXRpY2tldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "eGnT":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/affect-modificateur-to-plat/affect-modificateur-to-plat.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 style=\"text-align: center;\" class=\"text_align-center\">{{plat.nom}}</h1>\n        <hr>\n      </div>\n      <div class=\"col-lg-12\">\n        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n          <mat-chip\n            *ngFor=\"let modif of modif\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"remove(modif)\">\n            {{modif}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n          <input\n            matInput\n            placeholder= 'Nouvel modificateur...'\n            #fruitInput\n            [formControl]=\"fruitCtrl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n        <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n            <mat-option *ngFor=\"let modi of filteredmodif | async\" [value]=\"modi\">\n              {{modi.nom}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-12\">\n        <button class=\"btn btn-success\" type=\"submit\" (click)=\"onsubmit()\">confirmer</button>\n\n      </div>\n    </div>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "fQNt":
/*!**********************************************************************************!*\
  !*** ./src/app/components/edit-work-time-form/edit-work-time-form.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXdvcmstdGltZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "fhH1":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-offre-component/affect-plat-to-offre-component.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AffectPlatToOffreComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectPlatToOffreComponentComponent", function() { return AffectPlatToOffreComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_affect_plat_to_offre_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./affect-plat-to-offre-component.component.html */ "ieRd");
/* harmony import */ var _affect_plat_to_offre_component_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affect-plat-to-offre-component.component.css */ "gkxm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/OffreService/offre.service */ "NdqV");
/* harmony import */ var _Models_offre__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/offre */ "D/qK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











var AffectPlatToOffreComponentComponent = /** @class */ (function () {
    function AffectPlatToOffreComponentComponent(os, ps, data, dialog, matdialogref) {
        var _this = this;
        this.os = os;
        this.ps = ps;
        this.data = data;
        this.dialog = dialog;
        this.matdialogref = matdialogref;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.plats = [];
        this.allPlats = [];
        this.newaffectations = [];
        this.filteredPlats = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (nom) { return nom ? _this._filter(nom) : _this.allPlats.slice(); }));
    }
    AffectPlatToOffreComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getAll().subscribe(function (plats) {
            _this.allPlats = plats;
        });
    };
    AffectPlatToOffreComponentComponent.prototype.add = function (event) {
        var value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.plats.push(value);
        }
        // Clear the input value
        // event.input.remove();
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToOffreComponentComponent.prototype.remove = function (plat) {
        var index = this.plats.indexOf(plat);
        if (index >= 0) {
            this.plats.splice(index, 1);
        }
    };
    AffectPlatToOffreComponentComponent.prototype.selected = function (event) {
        this.plats.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToOffreComponentComponent.prototype._filter = function (value) {
        // const filterValue = value.toLowerCase();
        return this.allPlats.filter(function (plat) { return plat.nom.toLowerCase().includes(value); });
    };
    AffectPlatToOffreComponentComponent.prototype.affect = function () {
        var _this = this;
        this.plats.forEach(function (p, index) {
            _this.allPlats.forEach(function (plat) {
                if (plat.nom === p) {
                    _this.newaffectations.push(plat);
                    _this.os.affectPlat(_this.data.id, plat.id).subscribe(function (d) {
                    });
                }
            });
            if (index === _this.plats.length - 1) {
                _this.matdialogref.close(_this.newaffectations);
            }
        });
    };
    AffectPlatToOffreComponentComponent.ctorParameters = function () { return [
        { type: _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__["OffreService"] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"] },
        { type: _Models_offre__WEBPACK_IMPORTED_MODULE_7__["Offre"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
    ]; };
    AffectPlatToOffreComponentComponent.propDecorators = {
        fruitInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fruitInput',] }]
    };
    AffectPlatToOffreComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-affect-plat-to-offre-component',
            template: _raw_loader_affect_plat_to_offre_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_affect_plat_to_offre_component_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__["OffreService"], _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"],
            _Models_offre__WEBPACK_IMPORTED_MODULE_7__["Offre"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], AffectPlatToOffreComponentComponent);
    return AffectPlatToOffreComponentComponent;
}());



/***/ }),

/***/ "fiBI":
/*!*************************************************************************************!*\
  !*** ./src/app/components/modificateurs-of-plat/modificateurs-of-plat.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModificateursOfPlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificateursOfPlatComponent", function() { return ModificateursOfPlatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modificateurs_of_plat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modificateurs-of-plat.component.html */ "90cB");
/* harmony import */ var _modificateurs_of_plat_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modificateurs-of-plat.component.css */ "umxY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_plat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/plat */ "VTgv");
/* harmony import */ var _affect_modificateur_to_plat_affect_modificateur_to_plat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../affect-modificateur-to-plat/affect-modificateur-to-plat.component */ "xVy0");
/* harmony import */ var _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/modificateurService/modificateur.service */ "Lk/Z");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ingredients-of-modificateur/ingredients-of-modificateur.component */ "Cvyh");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");














var ModificateursOfPlatComponent = /** @class */ (function () {
    function ModificateursOfPlatComponent(matdialogref, data, dialog, ms, ps) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.ms = ms;
        this.ps = ps;
        this.listmodificateurs = this.data.modificateurs;
        this.allmodif = [];
        this.displayedColumns = ['nom', 'ingredients', 'prix', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.allmodif);
    }
    ModificateursOfPlatComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ModificateursOfPlatComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        console.log(this.allmodif);
        this.dataSource.data = this.listmodificateurs;
        /*this.ms.getAll().subscribe((modif: Modificateur[]) => {
          this.allmodif = modif;
          this.dataSource.data = this.allmodif;
        });*/
    };
    ModificateursOfPlatComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = this.data;
        var dialogref = this.dialog.open(_affect_modificateur_to_plat_affect_modificateur_to_plat_component__WEBPACK_IMPORTED_MODULE_6__["AffectModificateurToPlatComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data1) {
            data1.forEach(function (d) { return _this.listmodificateurs.push(d); });
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ModificateursOfPlatComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    ModificateursOfPlatComponent.prototype.Ingredients = function (modificateur) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = modificateur;
        var dialogref = this.dialog.open(_ingredients_of_modificateur_ingredients_of_modificateur_component__WEBPACK_IMPORTED_MODULE_11__["IngredientsOfModificateurComponent"], dialogConfig);
    };
    ModificateursOfPlatComponent.prototype.delete = function (modif) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ps.detachPlatFromModif(_this.data.id, modif.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(modif), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    ModificateursOfPlatComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_plat__WEBPACK_IMPORTED_MODULE_5__["Plat"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_7__["ModificateurService"] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_13__["PlatService"] }
    ]; };
    ModificateursOfPlatComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"],] }]
    };
    ModificateursOfPlatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modificateurs-of-plat',
            template: _raw_loader_modificateurs_of_plat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_modificateurs_of_plat_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_plat__WEBPACK_IMPORTED_MODULE_5__["Plat"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_7__["ModificateurService"],
            _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_13__["PlatService"]])
    ], ModificateursOfPlatComponent);
    return ModificateursOfPlatComponent;
}());



/***/ }),

/***/ "gH7S":
/*!******************************************************!*\
  !*** ./src/app/Services/platService/plat.service.ts ***!
  \******************************************************/
/*! exports provided: PlatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatService", function() { return PlatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var PlatService = /** @class */ (function () {
    function PlatService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_3__["Env"].url;
    }
    PlatService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/plat");
        // return this.http.get(`${this.url}/api/plat`);
    };
    PlatService.prototype.addplat = function (plat) {
        return this.http.post(this.url + "/api/plat", plat, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.post(`${this.url}/api/plat`, plat, {withCredentials: true});
    };
    PlatService.prototype.updateplat = function (plat) {
        return this.http.put(this.url + "/api/plat", plat, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.put(`${this.url}/api/plat`, plat, {withCredentials:true});
    };
    PlatService.prototype.deleteplat = function (plat) {
        return this.http.delete(this.url + "/api/plat/" + plat, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.delete(`${this.url}/api/plat/${plat}`, {withCredentials: true});
    };
    PlatService.prototype.affectPlatModif = function (id_plat, id_modificateur) {
        return this.http.put(this.url + "/api/affectModificateurToPlat/" + id_plat + "/" + id_modificateur, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    PlatService.prototype.detachPlatFromModif = function (id_plat, id_modificateur) {
        return this.http.put(this.url + "/api/detachModificateurFromPlat/" + id_plat + "/" + id_modificateur, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    PlatService.prototype.changeStatut = function (plat) {
        return this.http.put(this.url + "/api/changeStatusplat", plat, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    PlatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    PlatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], PlatService);
    return PlatService;
}());



/***/ }),

/***/ "gQ+g":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-reduction-form/add-reduction-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddReductionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReductionFormComponent", function() { return AddReductionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_reduction_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-reduction-form.component.html */ "nozl");
/* harmony import */ var _add_reduction_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reduction-form.component.css */ "jfu5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/code-reduction */ "TTaY");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");
/* harmony import */ var _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/CodeRedService/code-red.service */ "pkpz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/UserService/user.service */ "B9hT");











var AddReductionFormComponent = /** @class */ (function () {
    function AddReductionFormComponent(matdialogref, data, dialog, crs, us) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.crs = crs;
        this.us = us;
        this.codered = new _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__["CodeReduction"]();
        this.newCodeRed = [];
        this.allus = [];
    }
    AddReductionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data) {
            this.data = this.codered;
        }
        else {
            this.date = new Date(this.data.date_expiration);
        }
        this.us.all().subscribe(function (users) {
            _this.allus = users;
        });
    };
    AddReductionFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new
                if (_this.data === _this.codered) {
                    _this.data.code = f.value.code;
                    _this.data.taux_reduction = f.value.taux_reduction;
                    _this.data.date_expiration = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(_this.date, 'yyyy/MM/dd', 'en_US');
                    _this.data.statut = f.value.statut;
                    if (f.value.user) {
                        _this.data.user_id = f.value.user.id;
                    }
                    _this.crs.add(_this.data).subscribe(function (data) {
                        _this.newCodeRed.push(data);
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["BackConfirmationComponent"], dialogConfig);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newCodeRed);
                            }
                            else {
                                f.form.reset();
                            }
                        });
                    });
                }
                else { // edit
                    _this.data.code = f.value.code;
                    _this.data.taux_reduction = f.value.taux_reduction;
                    _this.data.date_expiration = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(_this.date, 'yyyy/MM/dd', 'en_US');
                    _this.data.statut = f.value.statut;
                    if (f.value.user) {
                        _this.data.user_id = f.value.user_id;
                    }
                    _this.crs.update(_this.data).subscribe(function (data) {
                        _this.matdialogref.close(_this.data);
                    });
                }
            }
        });
    };
    AddReductionFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                f.resetForm();
                _this.matdialogref.close();
            }
        });
    };
    AddReductionFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__["CodeReduction"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_8__["CodeRedService"] },
        { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
    ]; };
    AddReductionFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-reduction-form',
            template: _raw_loader_add_reduction_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_reduction_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_code_reduction__WEBPACK_IMPORTED_MODULE_5__["CodeReduction"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_8__["CodeRedService"],
            _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]])
    ], AddReductionFormComponent);
    return AddReductionFormComponent;
}());



/***/ }),

/***/ "gQlb":
/*!******************************************************************************************!*\
  !*** ./src/app/components/modificateur-management/modificateur-management.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n  font-weight: lighter;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhdGV1ci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoibW9kaWZpY2F0ZXVyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "gX2C":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/schedule-and-holidays-management/schedule-and-holidays-management.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ScheduleAndHolidaysManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAndHolidaysManagementComponent", function() { return ScheduleAndHolidaysManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedule_and_holidays_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedule-and-holidays-management.component.html */ "aCS8");
/* harmony import */ var _schedule_and_holidays_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-and-holidays-management.component.css */ "3AEa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/HolidayService/holiday.service */ "Ttd+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_holiday__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Models/holiday */ "Ug58");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _Services_TimeService_time_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Services/TimeService/time.service */ "/yPy");
/* harmony import */ var _Models_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Models/time */ "NBNm");
/* harmony import */ var _angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/compiler-cli/src/diagnostics/typescript_version */ "DBYn");
/* harmony import */ var _angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _edit_holiday_form_edit_holiday_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../edit-holiday-form/edit-holiday-form.component */ "9OB7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


















var ScheduleAndHolidaysManagementComponent = /** @class */ (function () {
    function ScheduleAndHolidaysManagementComponent(hs, datepipe, ts, rs, dialog, fb) {
        this.hs = hs;
        this.datepipe = datepipe;
        this.ts = ts;
        this.rs = rs;
        this.dialog = dialog;
        this.panelOpenState = true;
        this.newHolidays = [];
        this.allHolidays = [];
        this.allTimes = [];
        this.displayedColumns = ['jour_férié'];
        this.displayedColumns1 = ['jour', 'debut', 'fin', 'submit', 'supprimer'];
        this.displayedColumns2 = ['jour_férié', 'edit', 'delete'];
        this.week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        this.dayselected = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.newHolidays);
        this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.allTimes);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.allHolidays);
        this.timeStart = [];
        this.timeEnd = [];
        this.payment = fb.group({
            carte_bancaire: false,
            cash: false,
        });
        this.services = fb.group({
            livraison: false,
            emporter: false,
            sur_place: false
        });
    }
    ScheduleAndHolidaysManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ScheduleAndHolidaysManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    ScheduleAndHolidaysManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.myRestau().subscribe(function (restau) {
            _this.myRestau = restau[0];
            _this.payment.patchValue({
                carte_bancaire: _this.myRestau.carte_bancaire,
                cash: _this.myRestau.cash,
            });
            _this.services.patchValue({
                livraison: _this.myRestau.livraison,
                emporter: _this.myRestau.emporter,
                sur_place: _this.myRestau.sur_place
            });
        });
        this.newHolidays.push(new _Models_holiday__WEBPACK_IMPORTED_MODULE_8__["Holiday"]());
        this.dataSource.data = this.newHolidays;
        this.dayselected.push('');
        this.hs.all().subscribe(function (data) {
            _this.allHolidays = data;
            _this.dataSource2.data = data;
        });
        this.ts.all().subscribe(function (times) {
            _this.dataSource1.data = times;
            if (times.length > 0) {
                times.forEach(function (t) {
                    _this.timeStart.push({
                        hour: Object(_angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__["toNumbers"])(t.start.substr(0, 2))[0],
                        minute: Object(_angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__["toNumbers"])(t.start.substr(3, 2))[0],
                        seconde: 0
                    });
                    _this.timeEnd.push({
                        hour: Object(_angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__["toNumbers"])(t.end.substr(0, 2))[0],
                        minute: Object(_angular_compiler_cli_src_diagnostics_typescript_version__WEBPACK_IMPORTED_MODULE_14__["toNumbers"])(t.end.substr(3, 2))[0],
                        seconde: 0
                    });
                });
            }
            else {
                _this.addTime();
            }
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.addHoliday = function () {
        // tslint:disable-next-line:prefer-const
        this.dataSource.data.push(new _Models_holiday__WEBPACK_IMPORTED_MODULE_8__["Holiday"]());
        this.table.renderRows();
    };
    ScheduleAndHolidaysManagementComponent.prototype.addTime = function () {
        var time;
        this.timeStart.push(time);
        this.timeEnd.push(time);
        // tslint:disable-next-line:prefer-const
        this.dataSource1.data.push(new _Models_time__WEBPACK_IMPORTED_MODULE_13__["Time"]());
        this.table.renderRows();
    };
    ScheduleAndHolidaysManagementComponent.prototype.removeData = function () {
        this.dataSource.data.pop();
        this.table.renderRows();
    };
    ScheduleAndHolidaysManagementComponent.prototype.removeDataTime = function () {
        this.dataSource1.data.pop();
        this.table.renderRows();
    };
    ScheduleAndHolidaysManagementComponent.prototype.getHolidayDate = function (i, $event) {
        this.dataSource.data[i].holiday = this.datepipe.transform($event.target.value, 'yyyy-MM-dd');
    };
    ScheduleAndHolidaysManagementComponent.prototype.getStart = function (i, timestart) {
        this.dataSource1.data[i].start = (timestart.hour).toString().padStart(2, '0') + ':' +
            (timestart.minute).toString().padStart(2, '0');
    };
    ScheduleAndHolidaysManagementComponent.prototype.getFin = function (i, timeend) {
        this.dataSource1.data[i].end = (timeend.hour).toString().padStart(2, '0') + ':' +
            (timeend.minute).toString().padStart(2, '0');
    };
    ScheduleAndHolidaysManagementComponent.prototype.submitTime = function () {
        var _this = this;
        this.rs.myRestau().subscribe(function (restau) {
            _this.dataSource1.data.forEach(function (time) {
                if (time.id === undefined) {
                    _this.ts.set(time).subscribe(function (d) {
                        _this.rs.affectrestauinfoToTime(d.id, restau[0].id).subscribe(function (data) { });
                    });
                }
            });
            alert('success');
            _this.ts.all().subscribe(function (t) {
                _this.dataSource1.data = t;
            });
            _this.dataSource1.paginator = _this.paginator;
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.submitOneTime = function (i, time) {
        var _this = this;
        this.rs.myRestau().subscribe(function (restau) {
            _this.ts.set(time).subscribe(function (d) {
                _this.rs.affectrestauinfoToTime(d.id, restau[0].id).subscribe(function (data) { });
                alert('success');
                _this.ts.all().subscribe(function (t) {
                    _this.dataSource1.data = t;
                });
                _this.dataSource1.paginator = _this.paginator;
            });
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.submitHoliday = function () {
        var _this = this;
        this.dataSource.data.forEach(function (h) {
            _this.rs.myRestau().subscribe(function (da) {
                h.restaurant_info_id = da[0].id;
            });
            _this.hs.set(h).subscribe(function (d) {
                _this.rs.myRestau().subscribe(function (da) {
                    _this.rs.affectRestauToHoliday(d.id, da[0].id).subscribe(function (retour) {
                        _this.hs.all().subscribe(function (holidays) {
                            _this.dataSource2.data = holidays;
                            _this.dataSource.paginator = _this.paginator;
                            _this.table.renderRows();
                        });
                    });
                });
            });
        });
        if (this.dataSource.data.length > 1) {
            this.dataSource.data.splice(1, this.dataSource.data.length - 1);
        }
        this.image.nativeElement.value = '';
        alert('success');
        this.dataSource.paginator = this.paginator;
    };
    ScheduleAndHolidaysManagementComponent.prototype.displayCol = function () {
        this.displayedColumns = ['jour_férié'];
    };
    ScheduleAndHolidaysManagementComponent.prototype.displayCol1 = function () {
        this.displayedColumns = this.displayedColumns1;
    };
    ScheduleAndHolidaysManagementComponent.prototype.displayCol2 = function () {
        this.displayCol();
        this.displayedColumns = this.displayedColumns2;
    };
    ScheduleAndHolidaysManagementComponent.prototype.edit = function (element) {
        var _this = this;
        this.ts.edit(element).subscribe(function (time) {
            alert('success');
            _this.ts.all().subscribe(function (t) {
                _this.dataSource1.data = t;
            });
            _this.dataSource1.paginator = _this.paginator;
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.delete = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ts.del(element.id).subscribe(function (time) {
                    _this.dataSource1.data.splice(_this.dataSource1.data.indexOf(element), 1);
                    _this.dataSource1.paginator = _this.paginator;
                });
            }
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.editHoliday = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = element;
        var dialogref = this.dialog.open(_edit_holiday_form_edit_holiday_form_component__WEBPACK_IMPORTED_MODULE_16__["EditHolidayFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.hs.all().subscribe(function (data1) {
                _this.dataSource2.data = data1;
                _this.dataSource2.paginator = _this.paginator;
            });
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.deleteHoliday = function (element) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.hs.del(element.id).subscribe(function (data) {
                    _this.dataSource2.data.splice(_this.dataSource2.data.indexOf(element), 1);
                    _this.dataSource2.paginator = _this.paginator;
                });
            }
        });
    };
    ScheduleAndHolidaysManagementComponent.prototype.updateRestauInfo = function () {
        this.myRestau.carte_bancaire = this.payment.value.carte_bancaire;
        this.myRestau.cash = this.payment.value.cash;
        this.myRestau.livraison = this.services.value.livraison;
        this.myRestau.emporter = this.services.value.emporter;
        this.myRestau.sur_place = this.services.value.sur_place;
        this.rs.update(this.myRestau).subscribe(function (r) {
            alert('success');
        });
    };
    ScheduleAndHolidaysManagementComponent.ctorParameters = function () { return [
        { type: _Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_4__["HolidayService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _Services_TimeService_time_service__WEBPACK_IMPORTED_MODULE_12__["TimeService"] },
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantInfoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] }
    ]; };
    ScheduleAndHolidaysManagementComponent.propDecorators = {
        table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"],] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['date',] }]
    };
    ScheduleAndHolidaysManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-schedule-and-holidays-management',
            template: _raw_loader_schedule_and_holidays_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_schedule_and_holidays_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_HolidayService_holiday_service__WEBPACK_IMPORTED_MODULE_4__["HolidayService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _Services_TimeService_time_service__WEBPACK_IMPORTED_MODULE_12__["TimeService"],
            _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantInfoService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"]])
    ], ScheduleAndHolidaysManagementComponent);
    return ScheduleAndHolidaysManagementComponent;
}());



/***/ }),

/***/ "gkxm":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-offre-component/affect-plat-to-offre-component.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-chip-list {\n  width: 100%;\n}\n\n*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmVjdC1wbGF0LXRvLW9mZnJlLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTs7QUFFQSIsImZpbGUiOiJhZmZlY3QtcGxhdC10by1vZmZyZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qe1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNoaXB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbi1pbmd7XG5cbn1cblxuIl19 */");

/***/ }),

/***/ "goXp":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plats-of-modificateur/plats-of-modificateur.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align: center\">\n      <h1 class=\"text_align-center\">Modificateur : {{data.nom}}</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <div>\n        <table mat-table matSort [dataSource]=\"dataSource\">\n\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 12pt; line-height: 5px\">\n                {{element.nom}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- image Column -->\n          <ng-container matColumnDef=\"image\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Image</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div *ngIf=\"element.image\">\n                <div class=\"image-container d-flex\">\n                  <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                        style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n                </div>\n              </div>\n            </td>\n          </ng-container>\n\n          <!-- Description Column -->\n          <ng-container matColumnDef=\"description\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Description</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p>\n                {{element.description}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- statut Column -->\n          <ng-container matColumnDef=\"statut\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.statut\"> disponible</p>\n              <p *ngIf=\"!element.statut\"> non disponible</p>\n            </td>\n          </ng-container>\n\n          <!-- prix Column -->\n          <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.prix | currency: \"EUR\": true}}</td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"delete(element)\">\n                <mat-icon style=\"color: #d20b0b; vertical-align: middle\">delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" (click)=\"add()\">\n            <p style=\"font-size: 12pt\">\n              <mat-icon style=\"vertical-align: middle\">add</mat-icon>\n              Ajouter\n            </p>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "hLqs":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredient-management/ingredient-management.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter ingrédient\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.nom}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">\n          {{element.prix | currency:\"EUR\": true}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- statut Column -->\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-slide-toggle class=\"example-margin\"\n                          style=\"color:#00B451;\"\n                          [(ngModel)]=\"element.statut\"\n                          (change)=\"changeStatut(element)\">\n        </mat-slide-toggle>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "hMMO":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/affect-plat-to-modificateur/affect-plat-to-modificateur.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n  <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n    <mat-label>affectation plats au modificateur</mat-label>\n    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n      <mat-chip\n        *ngFor=\"let plat of plats\"\n        [selectable]=\"selectable\"\n        [removable]=\"removable\"\n        (removed)=\"remove(plat)\">\n        {{plat}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input\n        matInput\n        placeholder=\"Nouvel plat...\"\n        #fruitInput\n        [formControl]=\"fruitCtrl\"\n        [matAutocomplete]=\"auto\"\n        [matChipInputFor]=\"chipList\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let plat of filteredPlats | async\" [value]=\"plat\">\n        {{plat.nom}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <button mat-raised-button type=\"submit\" (click)=\"affect()\">confirmer</button>\n</form>\n");

/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
























var MaterialComponent = [
    _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                MaterialComponent
            ],
            exports: [
                MaterialComponent
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/Auth/auth.service */ "mGYE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, auth, dialog, cookie) {
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.dialog = dialog;
        this.cookie = cookie;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        var html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = "15%";
        dialogConfig.height = "20%";
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.auth.logout().subscribe(function (data) {
                    _this.cookie.deleteAll();
                    _this.router.navigate(['loginform']);
                });
            }
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "ieRd":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/affect-plat-to-offre-component/affect-plat-to-offre-component.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n  <div class=\"container-fluid\">\n    <div class=\"col-lg-12\">\n      <h1 style=\"text-align: center\">Affectation plats pour l'offre</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n\n        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n          <mat-chip\n            *ngFor=\"let plat of plats\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"remove(plat)\">\n            {{plat}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n          <input\n            matInput\n            placeholder=\"Nouvel plat...\"\n            #fruitInput\n            [formControl]=\"fruitCtrl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngFor=\"let plat of filteredPlats | async\" [value]=\"plat\">\n            {{plat.nom}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n    <div class=\"col-lg-12\">\n      <button class=\"btn btn-success\" type=\"submit\" (click)=\"affect()\">Confirmer</button>\n\n    </div>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _schedule_and_holidays_management_schedule_and_holidays_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule-and-holidays-management/schedule-and-holidays-management.component */ "gX2C");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_holiday_form_edit_holiday_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-holiday-form/edit-holiday-form.component */ "9OB7");
/* harmony import */ var _offre_management_offre_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offre-management/offre-management.component */ "sBWC");
/* harmony import */ var _plat_of_offre_plat_of_offre_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plat-of-offre/plat-of-offre.component */ "w3Ah");
/* harmony import */ var _affect_plat_to_offre_component_affect_plat_to_offre_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./affect-plat-to-offre-component/affect-plat-to-offre-component.component */ "fhH1");
/* harmony import */ var _offre_form_offre_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./offre-form/offre-form.component */ "ZJCj");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-management/user-management.component */ "4UcO");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./statistics/statistics.component */ "ytpy");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _printer_config_printer_config_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./printer-config/printer-config.component */ "H0lF");
/* harmony import */ var _all_tickets_all_tickets_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./all-tickets/all-tickets.component */ "qTJh");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ "TEn/");























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonicModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _schedule_and_holidays_management_schedule_and_holidays_management_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleAndHolidaysManagementComponent"],
                _edit_holiday_form_edit_holiday_form_component__WEBPACK_IMPORTED_MODULE_12__["EditHolidayFormComponent"],
                _offre_management_offre_management_component__WEBPACK_IMPORTED_MODULE_13__["OffreManagementComponent"],
                _plat_of_offre_plat_of_offre_component__WEBPACK_IMPORTED_MODULE_14__["PlatOfOffreComponent"],
                _affect_plat_to_offre_component_affect_plat_to_offre_component_component__WEBPACK_IMPORTED_MODULE_15__["AffectPlatToOffreComponentComponent"],
                _offre_form_offre_form_component__WEBPACK_IMPORTED_MODULE_16__["OffreFormComponent"],
                _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_17__["UserManagementComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_18__["StatisticsComponent"],
                _printer_config_printer_config_component__WEBPACK_IMPORTED_MODULE_20__["PrinterConfigComponent"],
                _all_tickets_all_tickets_component__WEBPACK_IMPORTED_MODULE_21__["AllTicketsComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jfu5":
/*!********************************************************************************!*\
  !*** ./src/app/components/add-reduction-form/add-reduction-form.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-chip-list {\n  width: 100%;\n}\n\n*{\n  font-weight: lighter;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-chip{\n  height: 250px;\n}\n\nButton{\n  width: 100%;\n\n}\n\n.button-ing{\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZWR1Y3Rpb24tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTs7QUFFQSIsImZpbGUiOiJhZGQtcmVkdWN0aW9uLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qe1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNoaXB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbi1pbmd7XG5cbn1cblxuIl19 */");

/***/ }),

/***/ "kIUG":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/offre-form/offre-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 style=\"text-align: center\">plat</h1>\n        <hr>\n      </div>\n      <div class=\"col-lg-12\">\n        <mat-form-field appearance=\"fill\" >\n          <mat-label>Nom</mat-label>\n          <input matInput type=\"text\" name=\"nom\" [(ngModel)]=\"data.nom\" ngModel #nom=\"ngModel\" required>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-12\">\n        <mat-form-field appearance=\"fill\" >\n          <mat-label>Description</mat-label>\n          <textarea matInput name=\"description\" [(ngModel)]=\"data.description\" ngModel #description=\"ngModel\" required> </textarea>\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-12\">\n        <div >\n          <input #image type=\"file\" (change)=\"uploadImages($event)\" >\n        </div>\n      </div>\n      <div class=\"col-lg-12\">\n        <mat-form-field appearance=\"fill\" >\n          <mat-label>Prix</mat-label>\n          <input matInput type=\"number\" name=\"prix\" [(ngModel)]=\"data.prix\" ngModel #prix=\"ngModel\" required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"col-lg-12\">\n       <div class=\"row\">\n         <div class=\"col-lg-4\">\n           <button class=\"btn btn-success\"  [disabled]=\"f.invalid\">envoyer</button>\n         </div>\n         <div class=\"col-lg-4\">\n           <button  type=\"reset\" class=\"btn btn-dark\"  (click)=\"reset()\" >vider le formulaire</button>\n         </div>\n         <div class=\"col-lg-4\">\n           <button type=\"button\"  class=\"btn btn-warning\" (click)=\"onclose(f)\" >annuler/terminer</button>\n         </div>\n       </div>\n      </div>\n    </div>\n\n  </div>\n\n</form>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kjlV":
/*!**********************************************************************************!*\
  !*** ./src/app/components/confirmation-banner/confirmation-banner.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "m3UG":
/*!********************************!*\
  !*** ./src/app/Models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "mGYE":
/*!***********************************************!*\
  !*** ./src/app/Services/Auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var AuthService = /** @class */ (function () {
    function AuthService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    Object.defineProperty(AuthService.prototype, "isloggedin", {
        get: function () {
            return this._isloggedin;
        },
        set: function (value) {
            this._isloggedin = value;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.login = function (coordonnees) {
        return this.http.post(this.url + "/api/loginadmin", coordonnees, { withCredentials: true });
    };
    AuthService.prototype.connected = function () {
        return this.http.get(this.url + "/api/connected", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/connected`, {withCredentials: true});
    };
    AuthService.prototype.logout = function () {
        return this.http.post(this.url + "/api/logout", '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.post(`${this.url}/api/logout`, '', {withCredentials: true});
    };
    AuthService.prototype.incrementVisitors = function () {
        return this.http.get(this.url + "/api/incrementVisitors", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    AuthService.prototype.decrementVisitors = function () {
        return this.http.get(this.url + "/api/decrementVisitors", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "msI9":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/compiler-cli/src/diagnostics sync ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "msI9";

/***/ }),

/***/ "n/dc":
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmation-banner/confirmation-banner.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmationBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBannerComponent", function() { return ConfirmationBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmation_banner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmation-banner.component.html */ "8xIM");
/* harmony import */ var _confirmation_banner_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation-banner.component.css */ "kjlV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var ConfirmationBannerComponent = /** @class */ (function () {
    function ConfirmationBannerComponent(matdialogref) {
        this.matdialogref = matdialogref;
    }
    ConfirmationBannerComponent.prototype.ngOnInit = function () {
    };
    ConfirmationBannerComponent.prototype.confirmer = function (yesOrno) {
        if (yesOrno === 'oui') {
            this.retour = true;
            this.matdialogref.close(this.retour);
        }
        else {
            this.retour = false;
            this.matdialogref.close(this.retour);
        }
    };
    ConfirmationBannerComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    ConfirmationBannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-confirmation-banner',
            template: _raw_loader_confirmation_banner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_confirmation_banner_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], ConfirmationBannerComponent);
    return ConfirmationBannerComponent;
}());



/***/ }),

/***/ "n42V":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-modificateur/affect-plat-to-modificateur.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZmZlY3QtcGxhdC10by1tb2RpZmljYXRldXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "nDzE":
/*!*************************************************************************!*\
  !*** ./src/app/components/restaurant-info/restaurant-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: RestaurantInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantInfoComponent", function() { return RestaurantInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restaurant_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restaurant-info.component.html */ "WYIC");
/* harmony import */ var _restaurant_info_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-info.component.css */ "Kg1k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/restaurant-info */ "LFwX");






var RestaurantInfoComponent = /** @class */ (function () {
    function RestaurantInfoComponent(restauservice) {
        this.restauservice = restauservice;
        this.myRI = new _Models_restaurant_info__WEBPACK_IMPORTED_MODULE_5__["RestaurantInfo"]();
    }
    RestaurantInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restauservice.myRestau().subscribe(function (data) {
            _this.myRI = data[0];
            console.log(_this.myRI.nom_restaurant);
        });
    };
    RestaurantInfoComponent.ctorParameters = function () { return [
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfoService"] }
    ]; };
    RestaurantInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-restaurant-info',
            template: _raw_loader_restaurant_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_restaurant_info_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfoService"]])
    ], RestaurantInfoComponent);
    return RestaurantInfoComponent;
}());



/***/ }),

/***/ "nozl":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-reduction-form/add-reduction-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #f=\"ngForm\" (ngSubmit)=\"onsubmit(f)\">\n  <mat-grid-list cols=\"1\" rowHeight=\"500px\">\n    <mat-grid-tile>\n      <div class=\"container-fluid\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h1  style=\"text-align: center\">Code Reduction</h1>\n            <hr>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\" >\n              <mat-label>Code</mat-label>\n              <input matInput type=\"text\" name=\"code\" [(ngModel)]=\"data.code\" ngModel #code=\"ngModel\" required>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Taux de reduction</mat-label>\n              <input matInput type=\"text\" name=\"taux_reduction\" [(ngModel)]=\"data.taux_reduction\"\n                     ngModel #taux_reduction=\"ngModel\" required>\n              <span matSuffix>%</span>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Date d'expiration</mat-label>\n              <input matInput type=\"text\" name=\"date_expiration\" [(ngModel)]=\"date\"\n                     ngModel #date_expiration=\"ngModel\" required [matDatepicker]=\"picker\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <h4>liste des utilisateurs</h4>\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Affecter utilisateur au code de reduction</mat-label>\n              <mat-select [(ngModel)]=\"selectedValue\" #user=\"ngModel\" ngModel name=\"user\">\n                <mat-option *ngFor=\"let u of allus\" [value]=\"u\">\n                  {{u.prenom}} &nbsp; {{u.nom}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col-lg-12\">\n            <mat-label>Statut</mat-label>\n            <mat-slide-toggle class=\"example-margin\"\n                              [(ngModel)]=\"data.statut\"\n                              ngModel\n                              #statut=\"ngModel\"\n                              name=\"statut\">\n            </mat-slide-toggle>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <button  class=\"btn btn-success\"  [disabled]=\"f.invalid\">envoyer\n                </button>\n              </div>\n              <div class=\"col-lg-4\">\n                <button  type=\"reset\" class=\"btn btn-dark\">vider le formulaire\n                </button>\n              </div>\n              <div class=\"col-lg-4\">\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"onclose(f)\">\n                  annuler/terminer\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</form>\n");

/***/ }),

/***/ "npPf":
/*!************************************************************************!*\
  !*** ./src/app/components/printer-config/printer-config.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludGVyLWNvbmZpZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "pECv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/back-confirmation/back-confirmation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BackConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackConfirmationComponent", function() { return BackConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_back_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./back-confirmation.component.html */ "J6Yu");
/* harmony import */ var _back_confirmation_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-confirmation.component.css */ "LCZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var BackConfirmationComponent = /** @class */ (function () {
    function BackConfirmationComponent(matdialogref) {
        this.matdialogref = matdialogref;
    }
    BackConfirmationComponent.prototype.ngOnInit = function () {
    };
    BackConfirmationComponent.prototype.confirmer = function (yesOrno) {
        if (yesOrno === 'oui') {
            this.retour1 = true;
        }
        else {
            this.retour1 = false;
        }
        this.matdialogref.close(this.retour1);
    };
    BackConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    BackConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-back-confirmation',
            template: _raw_loader_back_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_back_confirmation_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], BackConfirmationComponent);
    return BackConfirmationComponent;
}());



/***/ }),

/***/ "pENM":
/*!*****************************************************************************!*\
  !*** ./src/app/components/upload-image-form/upload-image-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UploadImageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageFormComponent", function() { return UploadImageFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upload_image_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upload-image-form.component.html */ "XP5H");
/* harmony import */ var _upload_image_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-form.component.css */ "c1es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_categorie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/categorie */ "vbEW");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/CategorieService/categorie.service */ "Ph8J");









var UploadImageFormComponent = /** @class */ (function () {
    function UploadImageFormComponent(matdialogref, dialog, imgs, data, cs) {
        this.matdialogref = matdialogref;
        this.dialog = dialog;
        this.imgs = imgs;
        this.data = data;
        this.cs = cs;
        this.url = [];
        this.src = '';
    }
    UploadImageFormComponent.prototype.ngOnInit = function () {
    };
    UploadImageFormComponent.prototype.onsubmit = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.data.img = _this.src;
                console.log(_this.data);
                _this.cs.editCateg(_this.data).subscribe(function (categ) {
                    _this.matdialogref.close(_this.data);
                });
            }
        });
    };
    UploadImageFormComponent.prototype.onclose = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.matdialogref.close();
            }
        });
    };
    UploadImageFormComponent.prototype.uploadImages = function (e) {
        this.selectedFiles = e.target.files;
        this.upload(this.selectedFiles[0]);
    };
    UploadImageFormComponent.prototype.upload = function (selectedFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
        var response = this.imgs.uploadimg(formData).subscribe(function (d) {
            console.log('upload image success');
            _this.src = d;
        }, function (error) {
            _this.src = error.error.text;
        });
    };
    UploadImageFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] },
        { type: _Models_categorie__WEBPACK_IMPORTED_MODULE_6__["Categorie"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_8__["CategorieService"] }
    ]; };
    UploadImageFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload-image-form',
            template: _raw_loader_upload_image_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_upload_image_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"], _Models_categorie__WEBPACK_IMPORTED_MODULE_6__["Categorie"],
            _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_8__["CategorieService"]])
    ], UploadImageFormComponent);
    return UploadImageFormComponent;
}());



/***/ }),

/***/ "pHfF":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/restaurant-info-management/restaurant-info-management.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RestaurantInfoManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantInfoManagementComponent", function() { return RestaurantInfoManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restaurant_info_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restaurant-info-management.component.html */ "2L9U");
/* harmony import */ var _restaurant_info_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-info-management.component.css */ "y0eB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/RestaurantInfoService/restaurant-info.service */ "3C74");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ingredient-form/ingredient-form.component */ "tV9J");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _restaurant_info_form_restaurant_info_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../restaurant-info-form/restaurant-info-form.component */ "aG4e");













var RestaurantInfoManagementComponent = /** @class */ (function () {
    function RestaurantInfoManagementComponent(rs, dialog) {
        this.rs = rs;
        this.dialog = dialog;
        this.allRestau = [];
        // tslint:disable-next-line:max-line-length
        this.displayedColumns = ['nom', 'logo', 'adresse', 'tel', 'Stripe', 'paypal', 'num_tva', 'num_tva_intercom', 'num_siret', 'num_siren', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allRestau);
    }
    RestaurantInfoManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    RestaurantInfoManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.all().subscribe(function (data) {
            _this.allRestau = data;
            _this.dataSource.data = data;
        });
    };
    RestaurantInfoManagementComponent.prototype.edit = function (ri) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = ri;
        var dialogref = this.dialog.open(_ingredient_form_ingredient_form_component__WEBPACK_IMPORTED_MODULE_9__["IngredientFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.rs.all().subscribe(function (restauinf) {
                    _this.dataSource.data = restauinf;
                });
            }
            _this.dataSource.data.forEach(function (i) {
                if (i.id === data.id) {
                    var index = _this.dataSource.data.indexOf(data);
                    if (index >= 0) {
                        _this.dataSource.data[index] = data;
                        _this.dataSource.paginator = _this.paginator;
                    }
                }
            });
        });
    };
    RestaurantInfoManagementComponent.prototype.delete = function (ri) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.rs.delete(ri).subscribe(function (ata) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(ri), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    RestaurantInfoManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    RestaurantInfoManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '90%';
        var dialogref = this.dialog.open(_restaurant_info_form_restaurant_info_form_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantInfoFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.rs.all().subscribe(function (resi) {
                    _this.dataSource.data = resi;
                });
            }
            data.forEach(function (d) {
                _this.dataSource.data.push(d);
            });
            _this.dataSource.paginator = _this.paginator;
        });
    };
    RestaurantInfoManagementComponent.prototype.user = function (user_id) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        ;
        dialogConfig.data = user_id;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_11__["DetailleCommandeComponent"], dialogConfig);
    };
    RestaurantInfoManagementComponent.prototype.stripe = function (ri) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = ri;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_11__["DetailleCommandeComponent"], dialogConfig);
    };
    RestaurantInfoManagementComponent.prototype.paypal = function (ri) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = ri;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_11__["DetailleCommandeComponent"], dialogConfig);
    };
    RestaurantInfoManagementComponent.ctorParameters = function () { return [
        { type: _Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfoService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    RestaurantInfoManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    RestaurantInfoManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-restaurant-info-management',
            template: _raw_loader_restaurant_info_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_restaurant_info_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_RestaurantInfoService_restaurant_info_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantInfoService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], RestaurantInfoManagementComponent);
    return RestaurantInfoManagementComponent;
}());



/***/ }),

/***/ "pkpz":
/*!*************************************************************!*\
  !*** ./src/app/Services/CodeRedService/code-red.service.ts ***!
  \*************************************************************/
/*! exports provided: CodeRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeRedService", function() { return CodeRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var CodeRedService = /** @class */ (function () {
    function CodeRedService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_2__["Env"].url;
    }
    CodeRedService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/codereduction", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CodeRedService.prototype.add = function (code) {
        return this.http.post(this.url + "/api/codereduction", code, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CodeRedService.prototype.update = function (code) {
        return this.http.put(this.url + "/api/codereduction", code, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CodeRedService.prototype.delete = function (code) {
        return this.http.delete(this.url + "/api/codereduction/" + code.id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    // returns a boolean (if sysdate < expiration date) returns true
    CodeRedService.prototype.verifyDate = function (id) {
        return this.http.get(this.url + "/api/codereduction/" + id, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CodeRedService.prototype.affectUserToReduction = function (id_reduction, id_user) {
        return this.http.put(this.url + "/api/affectcode/" + id_reduction + "/" + id_user, '', { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    CodeRedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    CodeRedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], CodeRedService);
    return CodeRedService;
}());



/***/ }),

/***/ "qNJx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plat-management/plat-management.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter plat\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div>\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.nom}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- image Column -->\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell  *matHeaderCellDef> Image</th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <div *ngIf=\"element.image\">\n          <div class=\"image-container d-flex\">\n            <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                  style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.description}}\n      </td>\n    </ng-container>\n\n    <!-- statut Column -->\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell *matHeaderCellDef> Statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-slide-toggle class=\"example-margin\"\n                          style=\"color:#00B451;\"\n                          [(ngModel)]=\"element.statut\"\n                          (change)=\"changeStatut(element)\">\n        </mat-slide-toggle>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">\n          {{element.prix | currency:\"EUR\": true}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- modificateurs Column -->\n    <ng-container matColumnDef=\"modificateurs\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Modificateurs</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"Modificateurs(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "qTJh":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-tickets/all-tickets.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTicketsComponent", function() { return AllTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_tickets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-tickets.component.html */ "4Fcb");
/* harmony import */ var _all_tickets_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-tickets.component.css */ "eBD2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_userswithhistoric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/userswithhistoric */ "3L+n");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");










var AllTicketsComponent = /** @class */ (function () {
    function AllTicketsComponent(matdialogref, data, dialog) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Tickets', 'date creation', 'prix'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.data.commandes);
    }
    AllTicketsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AllTicketsComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    AllTicketsComponent.prototype.tickets = function (ticket) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '57%';
        dialogConfig.height = '80%';
        dialogConfig.data = ticket;
        var dialogref = this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_9__["DetailleCommandeComponent"], dialogConfig);
    };
    AllTicketsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_userswithhistoric__WEBPACK_IMPORTED_MODULE_5__["Userswithhistoric"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    AllTicketsComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    AllTicketsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-all-tickets',
            template: _raw_loader_all_tickets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_all_tickets_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_userswithhistoric__WEBPACK_IMPORTED_MODULE_5__["Userswithhistoric"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AllTicketsComponent);
    return AllTicketsComponent;
}());



/***/ }),

/***/ "r0NL":
/*!*************************************************!*\
  !*** ./src/app/routeGuard/login-guard.guard.ts ***!
  \*************************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Auth/auth.service */ "mGYE");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(login, router, cookie) {
        this.login = login;
        this.router = router;
        this.cookie = cookie;
    }
    LoginGuardGuard.prototype.canActivate = function (route, state) {
        if (this.cookie.get('jwtadmin')) {
            return this.router.parseUrl('dashboard');
        }
        else {
            return true;
        }
    };
    LoginGuardGuard.ctorParameters = function () { return [
        { type: _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    LoginGuardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "rI8j":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plats-of-categorie/plats-of-categorie.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"title\">\n  <h1 class=\"text_align-center\" style=\"margin-left: 30%\">Modificateur : <b>{{data.nom}}</b></h1>\n</div>\n<div class=\"mat-elevation-z8\">\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    &lt;!&ndash; Nom Column &ndash;&gt;\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.nom}} </td>\n    </ng-container>\n\n    &lt;!&ndash; image Column &ndash;&gt;\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell  *matHeaderCellDef> Image</th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <div *ngIf=\"element.image\">\n          <div class=\"image-container d-flex\">\n            <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                  style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; description Column &ndash;&gt;\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.description}}\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; statut Column &ndash;&gt;\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell *matHeaderCellDef> Statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <div *ngIf=\"element.statut\"> disponible</div>\n        <div *ngIf=\"!element.statut\"> non disponible</div>\n      </td>\n    </ng-container>\n\n    &lt;!&ndash; prix Column &ndash;&gt;\n    <ng-container matColumnDef=\"prix\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.prix}}</td>\n    </ng-container>\n\n    &lt;!&ndash; delete Column &ndash;&gt;\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n<div >\n<button mat-raised-button color=\"warn\" class=\"float-left\" (click)=\"add()\">\n  <mat-icon>add</mat-icon>ajouter\n</button>\n<button mat-raised-button color=\"primary\" class=\"float-right\" (click)=\"close()\">\n  précédent\n</button>\n</div>-->\n\n\n\n\n\n<div class=\"container container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align: center\">\n      <h1 class=\"text_align-center\">Modificateur : {{data.nom}}</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <div>\n        <table mat-table matSort [dataSource]=\"dataSource\">\n\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 12pt; line-height: 5px\">\n                {{element.nom}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- image Column -->\n          <ng-container matColumnDef=\"image\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Image</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div *ngIf=\"element.image\">\n                <div class=\"image-container d-flex\">\n                  <img  src=\"https://www.api.msfood.msdigital34.fr/restaurant-backend/storage/app/public/{{element.image}}\"\n                        style=\"height: 50px; width: 50px; display: block; margin: 3%\">\n                </div>\n              </div>\n            </td>\n          </ng-container>\n\n          <!-- Description Column -->\n          <ng-container matColumnDef=\"description\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Description</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p>\n                {{element.description}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- statut Column -->\n          <ng-container matColumnDef=\"statut\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.statut\"> disponible</p>\n              <p *ngIf=\"!element.statut\"> non disponible</p>\n            </td>\n          </ng-container>\n\n          <!-- prix Column -->\n          <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.prix | currency: \"EUR\": true}}</td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"delete(element)\">\n                <mat-icon style=\"color: #d20b0b; vertical-align: middle\">delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" (click)=\"add()\">\n            <p style=\"font-size: 12pt\">\n              <mat-icon style=\"vertical-align: middle\">add</mat-icon>\n              Ajouter\n            </p>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "rLXM":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reduction-management/reduction-management.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-raised-button (click)=\"onCreate()\" class=\"pull-right\" style=\"height: 45px; margin-top: 10px; margin-bottom: 5px\">\n    <mat-icon style=\"color: #00B451\">add</mat-icon> Ajouter code\n  </button>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n<div>\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <!-- Code Column -->\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Code</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt;line-height: 14pt;\">\n          {{element.code}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- taux de reduction Column -->\n    <ng-container matColumnDef=\"taux_reduction\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Taux de reduction</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.taux_reduction}} %</td>\n    </ng-container>\n\n    <!-- statut Column -->\n    <ng-container matColumnDef=\"statut\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <div *ngIf=\"element.date_expiration > sysdate || element.date_expiration === null\">\n          <mat-slide-toggle class=\"example-margin\"\n                            [(ngModel)]=\"element.statut\"\n                            (change)=\"changeStatut(element)\">\n          </mat-slide-toggle>\n        </div>\n        <div *ngIf=\"element.date_expiration < sysdate && element.date_expiration !== null\">\n          expired\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- user Column -->\n    <ng-container matColumnDef=\"user\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> User</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"user(element)\" [disabled]=\"element.user_id == null\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- date d'exp Column -->\n    <ng-container matColumnDef=\"expiration\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> date d'expiration</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <div *ngIf=\"element.date_expiration\">\n          {{element.date_expiration | date: 'yyyy/MM/dd'}}\n        </div>\n        <div *ngIf=\"element.date_expiration === null\">\n          <p> pas de date d'expiration</p>\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> modifier</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"edit(element)\">\n          <mat-icon style=\"color: #0082CB\">edit</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- delete Column -->\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> supprimer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button color=\"warn\" (click)=\"delete(element)\">\n          <mat-icon style=\"color: #d20b0b\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "rPrF":
/*!********************************************************************************!*\
  !*** ./src/app/components/commandes-en-cours/commandes-en-cours.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n\n::ng-deep .mat-focused .mat-form-field-label  {\n  /*change color of label*/\n  color: #343a40 !important;\n}\n\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #343a40 !important;\n}\n\n\n::ng-deep.mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #343a40 !important;;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlcy1lbi1jb3Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9DQUFvQztBQUN0Qzs7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImNvbW1hbmRlcy1lbi1jb3Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50Oztcbn1cblxuIl19 */");

/***/ }),

/***/ "rXT+":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredients-of-modificateur/ingredients-of-modificateur.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align: center\">\n      <h1 class=\"text_align-center\">Modificateur : {{data.nom}}</h1>\n      <hr>\n    </div>\n    <div class=\"col-lg-12\">\n      <div>\n        <table mat-table matSort [dataSource]=\"dataSource\">\n\n          <!-- Nom Column -->\n          <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Nom</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p style=\"font-size: 12pt; line-height: 5px\">\n                {{element.nom}}\n              </p>\n            </td>\n          </ng-container>\n\n          <!-- prix Column -->\n          <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> prix</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.prix | currency: 'EUR': true}}</td>\n          </ng-container>\n\n          <!-- statut Column -->\n          <ng-container matColumnDef=\"statut\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> statut</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <p *ngIf=\"element.statut\">activé</p>\n              <p *ngIf=\"!element.statut\">désctivé</p>\n            </td>\n          </ng-container>\n\n          <!-- delete Column -->\n          <ng-container matColumnDef=\"delete\">\n            <th mat-header-cell *matHeaderCellDef> supprimer</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-button (click)=\"delete(element)\">\n                <mat-icon style=\"color: #d20b0b; vertical-align: middle\">delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" style=\"background-color: #00B451\" (click)=\"add()\">\n            <p style=\"font-size: 12pt\">\n              <mat-icon style=\"vertical-align: middle\">add</mat-icon>\n              Ajouter\n            </p>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "rlpR":
/*!************************************************************************************!*\
  !*** ./src/app/components/restaurant-info-form/restaurant-info-form.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0YXVyYW50LWluZm8tZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "s5oJ":
/*!***********************************************************************************!*\
  !*** ./src/app/components/reduction-management/reduction-management.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReductionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReductionManagementComponent", function() { return ReductionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reduction_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reduction-management.component.html */ "rLXM");
/* harmony import */ var _reduction_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduction-management.component.css */ "s9WC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/CodeRedService/code-red.service */ "pkpz");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_reduction_form_add_reduction_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-reduction-form/add-reduction-form.component */ "gQ+g");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-management/user-management.component */ "4UcO");













var ReductionManagementComponent = /** @class */ (function () {
    function ReductionManagementComponent(crs, dialog) {
        this.crs = crs;
        this.dialog = dialog;
        this.displayedColumns = ['code', 'statut', 'taux_reduction', 'user', 'expiration', 'edit', 'delete'];
        this.allCodes = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allCodes);
        this.sysdate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en_US');
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ReductionManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ReductionManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crs.getAll().subscribe(function (cr) {
            cr.forEach(function (c) {
                if (c.date_expiration) {
                    c.date_expiration = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(c.date_expiration, 'yyyy-MM-dd hh:mm:ss', 'en_US');
                }
            });
            _this.allCodes = cr;
            _this.dataSource.data = _this.allCodes;
        });
    };
    ReductionManagementComponent.prototype.edit = function (ing) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = ing;
        var dialogref = this.dialog.open(_add_reduction_form_add_reduction_form_component__WEBPACK_IMPORTED_MODULE_11__["AddReductionFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.crs.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            _this.dataSource.data.forEach(function (i) {
                if (i.id === data.id) {
                    var index = _this.dataSource.data.indexOf(data);
                    if (index >= 0) {
                        _this.dataSource.data[index] = data;
                        _this.dataSource.paginator = _this.paginator;
                    }
                }
            });
        });
    };
    ReductionManagementComponent.prototype.delete = function (ing) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.crs.delete(ing).subscribe(function (ata) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(ing), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    ReductionManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ReductionManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_add_reduction_form_add_reduction_form_component__WEBPACK_IMPORTED_MODULE_11__["AddReductionFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            if (!data) {
                _this.crs.getAll().subscribe(function (mo) {
                    _this.dataSource.data = mo;
                });
            }
            else {
                data.forEach(function (d) {
                    _this.dataSource.data.push(d);
                });
            }
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ReductionManagementComponent.prototype.changeStatut = function (ingredient) {
        var _this = this;
        this.crs.update(ingredient).subscribe(function (ingred) {
            console.log(ingred);
            _this.dataSource.data[_this.dataSource.data.indexOf(ingredient)] = ingredient;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.dataSource.data[_this.dataSource.data.indexOf(ingredient)].statut = !ingredient.statut; });
    };
    ReductionManagementComponent.prototype.user = function (element) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '30%';
        dialogConfig.data = element;
        var dialogref = this.dialog.open(_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], dialogConfig);
    };
    ReductionManagementComponent.ctorParameters = function () { return [
        { type: _Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_4__["CodeRedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    ReductionManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    ReductionManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reduction-management',
            template: _raw_loader_reduction_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reduction_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_CodeRedService_code_red_service__WEBPACK_IMPORTED_MODULE_4__["CodeRedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ReductionManagementComponent);
    return ReductionManagementComponent;
}());



/***/ }),

/***/ "s7mS":
/*!**********************************************************************!*\
  !*** ./src/app/components/plat-of-offre/plat-of-offre.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 100% !important;\n  height: 45px;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXQtb2Ytb2ZmcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJwbGF0LW9mLW9mZnJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "s9WC":
/*!************************************************************************************!*\
  !*** ./src/app/components/reduction-management/reduction-management.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n/*mat slide color*/\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 180, 81, 0.52) ;\n}\n\n::ng-deep  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:#00B451;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjdGlvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJyZWR1Y3Rpb24tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyptYXQgc2xpZGUgY29sb3IqL1xuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgODEsIDAuNTIpIDtcbn1cblxuOjpuZy1kZWVwICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMEI0NTE7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "sBWC":
/*!***************************************************************************!*\
  !*** ./src/app/components/offre-management/offre-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: OffreManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffreManagementComponent", function() { return OffreManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offre_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offre-management.component.html */ "0GFQ");
/* harmony import */ var _offre_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offre-management.component.css */ "zK9O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/OffreService/offre.service */ "NdqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/imageService/image.service */ "LsTX");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _plat_of_offre_plat_of_offre_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../plat-of-offre/plat-of-offre.component */ "w3Ah");
/* harmony import */ var _offre_form_offre_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../offre-form/offre-form.component */ "ZJCj");













var OffreManagementComponent = /** @class */ (function () {
    function OffreManagementComponent(os, dialog, imgs) {
        this.os = os;
        this.dialog = dialog;
        this.imgs = imgs;
        this.allOffres = [];
        this.displayedColumns = ['nom', 'image', 'description', 'statut', 'prix', 'plats', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.allOffres);
    }
    OffreManagementComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    OffreManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.os.All().subscribe(function (offres) {
            _this.allOffres = offres;
            _this.dataSource.data = offres;
        });
    };
    OffreManagementComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        var dialogref = this.dialog.open(_offre_form_offre_form_component__WEBPACK_IMPORTED_MODULE_12__["OffreFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            _this.os.All().subscribe(function (offre) {
                _this.dataSource.data = offre;
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    OffreManagementComponent.prototype.applyFilter = function ($event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    OffreManagementComponent.prototype.edit = function (offre) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = offre;
        var dialogref = this.dialog.open(_offre_form_offre_form_component__WEBPACK_IMPORTED_MODULE_12__["OffreFormComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (data) {
            var index = _this.dataSource.data.indexOf(data);
            if (index >= 0) {
                _this.dataSource.data[index] = data;
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    OffreManagementComponent.prototype.delete = function (offre) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.os.del(offre.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(offre), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    OffreManagementComponent.prototype.plats = function (offre) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = offre;
        var dialogref = this.dialog.open(_plat_of_offre_plat_of_offre_component__WEBPACK_IMPORTED_MODULE_11__["PlatOfOffreComponent"], dialogConfig);
    };
    OffreManagementComponent.prototype.changeStatut = function (element) {
        console.log(element);
        this.os.update(element).subscribe(function (offre) {
            console.log(offre);
        });
    };
    OffreManagementComponent.ctorParameters = function () { return [
        { type: _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_4__["OffreService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }
    ]; };
    OffreManagementComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
    };
    OffreManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-offre-management',
            template: _raw_loader_offre_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_offre_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_4__["OffreService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _Services_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])
    ], OffreManagementComponent);
    return OffreManagementComponent;
}());



/***/ }),

/***/ "t+Vd":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/affect-ingred-to-modificateur/affect-ingred-to-modificateur.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AffectIngredToModificateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectIngredToModificateurComponent", function() { return AffectIngredToModificateurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_affect_ingred_to_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./affect-ingred-to-modificateur.component.html */ "BaAa");
/* harmony import */ var _affect_ingred_to_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affect-ingred-to-modificateur.component.css */ "KyLc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/ingredientService/ingredient.service */ "W/O7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");










var AffectIngredToModificateurComponent = /** @class */ (function () {
    function AffectIngredToModificateurComponent(is, modificateur_id, matdialogref, dialog) {
        var _this = this;
        this.is = is;
        this.modificateur_id = modificateur_id;
        this.matdialogref = matdialogref;
        this.dialog = dialog;
        this.listingr = [];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.ingr = [];
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["COMMA"]];
        this.newaffectations = [];
        this.filteredingr = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (nom) { return nom ? _this._filter(nom) : _this.listingr.slice(); }));
    }
    AffectIngredToModificateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is.getAll().subscribe(function (data) {
            _this.listingr = data;
        });
    };
    AffectIngredToModificateurComponent.prototype.add = function (event) {
        var value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.ingr.push(value);
        }
        // Clear the input value
        // event.input.remove();
        this.fruitCtrl.setValue(null);
    };
    AffectIngredToModificateurComponent.prototype.onsubmit = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.listingr.forEach(function (ingredient, index) {
                    _this.ingr.forEach(function (i) {
                        if (i === ingredient.nom) {
                            _this.newaffectations.push(ingredient);
                            _this.is.affectIngredientModificateur(_this.modificateur_id, ingredient.id).subscribe(function (d) {
                            });
                        }
                    });
                    if (index === _this.listingr.length - 1) {
                        _this.matdialogref.close(_this.newaffectations);
                    }
                });
            }
        });
    };
    AffectIngredToModificateurComponent.prototype.remove = function (ingr) {
        var index = this.ingr.indexOf(ingr);
        if (index >= 0) {
            this.ingr.splice(index, 1);
        }
    };
    AffectIngredToModificateurComponent.prototype.selected = function (event) {
        this.ingr.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AffectIngredToModificateurComponent.prototype._filter = function (value) {
        // const filterValue = value.toLowerCase();
        return this.listingr.filter(function (ingr) { return ingr.nom.toLowerCase().includes(value); });
    };
    AffectIngredToModificateurComponent.ctorParameters = function () { return [
        { type: _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] },
        { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    AffectIngredToModificateurComponent.propDecorators = {
        fruitInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fruitInput',] }]
    };
    AffectIngredToModificateurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-affect-ingred-to-modificateur',
            template: _raw_loader_affect_ingred_to_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_affect_ingred_to_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"], Number, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AffectIngredToModificateurComponent);
    return AffectIngredToModificateurComponent;
}());



/***/ }),

/***/ "t+h/":
/*!******************************************************************!*\
  !*** ./src/app/Services/StatisticsService/statistics.service.ts ***!
  \******************************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var StatisticsService = /** @class */ (function () {
    function StatisticsService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    StatisticsService.prototype.GetCashbyMonth = function (year) {
        return this.http.get(this.url + "/api/totalCashpermon/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
    };
    StatisticsService.prototype.GetTurnover = function (year) {
        return this.http.get(this.url + "/api/totalpermonth/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
    };
    StatisticsService.prototype.GetStatisticsPlats = function () {
        return this.http.get(this.url + "/api/statisticplat", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.GetStatisticsPlatsByDate = function (date) {
        return this.http.post(this.url + "/api/statisticplat", date, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.NbrOfUsersConnected = function () {
        return this.http.get(this.url + "/api/nbrOfUsersConnected", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.MostImportentClientBuyin = function () {
        return this.http.get(this.url + "/api/mostImportentClientBuyin", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.userWithHistoric = function () {
        return this.http.get(this.url + "/api/userWithHistoric", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.CAMensuel = function (debut, fin) {
        return this.http.get(this.url + "/api/CAMensuel/" + debut + "/" + fin, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.CAMAnnuel = function (year) {
        return this.http.get(this.url + "/api/CAMAnnuel/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.CountactiveCodes = function () {
        return this.http.get(this.url + "/api/CountactiveCodes", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.CAOffreByMonthOfYear = function (year) {
        return this.http.get(this.url + "/api/CAOffreByMonthOfYear/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.QuantityOffreByYear = function (year) {
        return this.http.get(this.url + "/api/QuantityOffreByYear/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.nbrusecoderedbyyear = function (year) {
        return this.http.get(this.url + "/api/nbrusecoderedbyyear/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.nbrusecoderedbyyearbyuser = function (year) {
        return this.http.get(this.url + "/api/nbrusecoderedbyyearbyuser/" + year, { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.prototype.getVisitors = function () {
        return this.http.get(this.url + "/api/getVisitors", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
    };
    StatisticsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    StatisticsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "tV9J":
/*!*************************************************************************!*\
  !*** ./src/app/components/ingredient-form/ingredient-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: IngredientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientFormComponent", function() { return IngredientFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingredient_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingredient-form.component.html */ "x+Sj");
/* harmony import */ var _ingredient_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient-form.component.css */ "LxQ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_ingredient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/ingredient */ "HO2s");
/* harmony import */ var _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/ingredientService/ingredient.service */ "W/O7");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../back-confirmation/back-confirmation.component */ "pECv");









var IngredientFormComponent = /** @class */ (function () {
    function IngredientFormComponent(matdialogref, data, is, dialog) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.is = is;
        this.dialog = dialog;
        this.ing = new _Models_ingredient__WEBPACK_IMPORTED_MODULE_5__["Ingredient"]();
        this.newing = [];
    }
    IngredientFormComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.ing;
            this.data.statut = true;
        }
    };
    IngredientFormComponent.prototype.onsubmit = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                // add new ing
                if (_this.data === _this.ing) {
                    _this.data.nom = f.value.nom;
                    _this.data.prix = f.value.prix;
                    _this.data.quantite = 1;
                    _this.data.statut = true;
                    _this.is.addIngredient(_this.data).subscribe(function (data) {
                        var dialogref1 = _this.dialog.open(_back_confirmation_back_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BackConfirmationComponent"], dialogConfig);
                        data.statut = true;
                        _this.newing.push(data);
                        dialogref1.afterClosed().subscribe(function (retour1) {
                            if (retour1 === false) {
                                _this.matdialogref.close(_this.newing);
                            }
                            else {
                                f.form.reset();
                                _this.data = _this.ing;
                            }
                        });
                    });
                }
                else { // edit existing ing
                    _this.data.nom = f.value.nom;
                    _this.data.prix = f.value.prix;
                    _this.is.updateingredient(_this.data).subscribe(function (data) {
                        _this.matdialogref.close();
                    });
                }
            }
        });
    };
    IngredientFormComponent.prototype.onclose = function (f) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.matdialogref.close();
            }
        });
    };
    IngredientFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_ingredient__WEBPACK_IMPORTED_MODULE_5__["Ingredient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_6__["IngredientService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    IngredientFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ingredient-form',
            template: _raw_loader_ingredient_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_ingredient_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_ingredient__WEBPACK_IMPORTED_MODULE_5__["Ingredient"],
            _Services_ingredientService_ingredient_service__WEBPACK_IMPORTED_MODULE_6__["IngredientService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], IngredientFormComponent);
    return IngredientFormComponent;
}());



/***/ }),

/***/ "tve3":
/*!****************************************************************!*\
  !*** ./src/app/components/work-times/work-times.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-table {\n  width: 100%;\n}\n\nmat-panel-title {\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstdGltZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ3b3JrLXRpbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtcGFuZWwtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "uADa":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/commandes-en-cours/commandes-en-cours.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field style=\"display: flex; justify-content:center; margin-top: 5px; color: #343a40;\n  font-weight: bold\">\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Filter\" #input>\n  </mat-form-field>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Nom Column -->\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell *matHeaderCellDef> Nom</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.user.nom}}</p>\n      </td>\n    </ng-container>\n\n    <!-- tel Column -->\n    <ng-container matColumnDef=\"numero_de_telephone\">\n      <th mat-header-cell *matHeaderCellDef> Tel</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 12pt\">{{element.user.numero_de_telephone}}</p>\n      </td>\n    </ng-container>\n\n    <!-- détailles de la commande Column -->\n    <ng-container matColumnDef=\"détailles de commande\">\n      <th mat-header-cell *matHeaderCellDef> commande</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"detaillesCommande(element)\">\n          <mat-icon>visibility</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- prix Column -->\n    <ng-container matColumnDef=\"prix_total\">\n      <th mat-header-cell *matHeaderCellDef> prix</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"font-size: 14pt\">{{element.prix_total | currency:'EUR':true}}</p>\n      </td>\n    </ng-container>\n\n    <!-- Validate command Column -->\n    <ng-container matColumnDef=\"validate\">\n      <th mat-header-cell *matHeaderCellDef> Terminer</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"validate(element)\">\n          <mat-icon style=\"color: #00B451\">check_circle</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <!-- cancel command Column -->\n    <ng-container matColumnDef=\"cancel\">\n      <th mat-header-cell *matHeaderCellDef> Annuler</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"validate(element)\" [disabled]=\"element.date_paiement != null\">\n          <mat-icon style=\"color: #e5062f\">cancel</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n");

/***/ }),

/***/ "uLOb":
/*!************************************************************************************!*\
  !*** ./src/app/components/categorie-management/categorie-management.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n/*mat slide color*/\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 180, 81, 0.52) ;\n}\n\n::ng-deep  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:#00B451;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJjYXRlZ29yaWUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyptYXQgc2xpZGUgY29sb3IqL1xuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4MCwgODEsIDAuNTIpIDtcbn1cblxuOjpuZy1kZWVwICAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMEI0NTE7XG59XG4iXX0= */");

/***/ }),

/***/ "umxY":
/*!**************************************************************************************!*\
  !*** ./src/app/components/modificateurs-of-plat/modificateurs-of-plat.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\nbutton {\n  width: 100% !important;\n  height: 45px;\n  margin-top: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhdGV1cnMtb2YtcGxhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6Im1vZGlmaWNhdGV1cnMtb2YtcGxhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "unHS":
/*!****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n/*\n.mat-grid-list{\n  background-color: transparent;\n}\n.id{border: #a71d2a}\n.pass{\n  text-decoration-color: #15161D;\n}\n.mat-dialog-container{\n  padding: 0px;\n}\n.b{\n  margin-left: 70px;\n  justify-content: center;\n  text-decoration-color: #ffffff;\n  width: 120px;\n  font-size: 20px;\n  color: white;\n}\n.matInput{\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n::ng-deep .mat-focused .mat-form-field-label {\n  !*change color of label*!\n  color: #455331 !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  !*change color of underline*!\n  background-color: #455331 !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  !*change color of underline when focused*!\n  background-color: #455331 !important;;\n}\n.mat{\n  font-weight: bold;\n}\n.btn {\n  position: center;\n  margin-left: 70px;\n  width: 120px;\n}\n*/\n.btn {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  padding: 4px 10px 4px;\n  margin-bottom: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: #333333;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  vertical-align: middle;\n  background-color: #f5f5f5;\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\n  background-repeat: repeat-x;\n  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);\n  border-color: #e6e6e6 #e6e6e6 #e6e6e6;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  *margin-left: .3em;\n}\n.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] {\n  background-color: #e6e6e6;\n}\n.btn-large {\n  padding: 9px 14px;\n  font-size: 15px;\n  line-height: normal;\n  border-radius: 5px;\n}\n.btn:hover {\n  color: #333333;\n  text-decoration: none;\n  background-color: #e6e6e6;\n  background-position: 0 -15px;\n  transition: background-position 0.1s linear;\n}\n.btn-primary, .btn-primary:hover {\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n}\n.btn-primary.active {\n  color: rgba(255, 255, 255, 0.75);\n}\n.btn-primary {\n  background-color: #4a77d4;\n  background-image: linear-gradient(top, #6eb6de, #4a77d4);\n  background-repeat: repeat-x;\n  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);\n  border: 1px solid #3762bc;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);\n}\n.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] {\n  filter: none;\n  background-color: #4a77d4;\n}\n.btn-block {\n  width: 100%;\n  display: block;\n}\n* {\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.contenaire {\n  width: 100%;\n  height: 100%;\n  font-family: 'Open Sans', sans-serif;\n  background: #092756;\n  background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);\n  background-size: cover;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3E1D6D', endColorstr='#092756', GradientType=1);\n}\n.login {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -150px 0 0 -150px;\n  width: 300px;\n  height: 300px;\n}\n.login h1 {\n  color: #fff;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n  text-align: center;\n}\ninput {\n  width: 100%;\n  margin-bottom: 10px;\n  background: rgba(0, 0, 0, 0.3);\n  border: none;\n  outline: none;\n  padding: 10px;\n  font-size: 13px;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);\n  transition: box-shadow .5s ease;\n}\ninput:focus {\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4), 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQStDQSw4REFBOEQ7QUEvQzlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2Q0M7QUFJRDtFQUNFLHFCQUFxQjtHQUNyQixlQUFnQjtHQUNoQixPQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFNekIsd0RBQXdEO0VBQ3hELDJCQUEyQjtFQUMzQiw4R0FBOEc7RUFDOUcscUNBQXFDO0VBQ3JDLHVFQUF1RTtFQUN2RSx5QkFBeUI7RUFHekIsa0JBQWtCO0VBR2xCLGlGQUFpRjtFQUNqRixlQUFlO0dBQ2YsaUJBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBR25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBSzVCLDJDQUEyQztBQUM3QztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UseUJBQXlCO0VBTXpCLHdEQUF3RDtFQUN4RCwyQkFBMkI7RUFDM0IsOEdBQThHO0VBQzlHLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsZ0ZBQWdGO0FBQ2xGO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBR0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFLbkIseVBBQXlQO0VBQ3pQLHNCQUFzQjtFQUN0QixrSEFBa0g7QUFDcEg7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsMEZBQTBGO0VBSzFGLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsMEZBQTBGO0FBQzVGIiwiZmlsZSI6ImxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4ubWF0LWdyaWQtbGlzdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaWR7Ym9yZGVyOiAjYTcxZDJhfVxuLnBhc3N7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzE1MTYxRDtcbn1cbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgcGFkZGluZzogMHB4O1xufVxuLmJ7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdElucHV0e1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAhKmNoYW5nZSBjb2xvciBvZiBsYWJlbCohXG4gIGNvbG9yOiAjNDU1MzMxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAhKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqIVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1MzMxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAhKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKiFcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NTMzMSAhaW1wb3J0YW50Oztcbn1cbi5tYXR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0biB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4qL1xuXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgKnpvb206IDE7XG4gIHBhZGRpbmc6IDRweCAxMHB4IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgjZmZmZmZmKSwgdG8oI2U2ZTZlNikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jZmZmZmZmLCBlbmRDb2xvcnN0cj0jZTZlNmU2LCBHcmFkaWVudFR5cGU9MCk7XG4gIGJvcmRlci1jb2xvcjogI2U2ZTZlNiAjZTZlNmU2ICNlNmU2ZTY7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgKm1hcmdpbi1sZWZ0OiAuM2VtO1xufVxuXG4uYnRuOmhvdmVyLCAuYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUsIC5idG4uZGlzYWJsZWQsIC5idG5bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmJ0bi1sYXJnZSB7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xufVxuXG4uYnRuLXByaW1hcnksIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE3N2Q0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM2ZWI2ZGUsICM0YTc3ZDQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzZlYjZkZSwgIzRhNzdkNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgjNmViNmRlKSwgdG8oIzRhNzdkNCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM2ZWI2ZGUsICM0YTc3ZDQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNmViNmRlLCAjNGE3N2Q0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzZlYjZkZSwgIzRhNzdkNCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jNmViNmRlLCBlbmRDb2xvcnN0cj0jNGE3N2Q0LCBHcmFkaWVudFR5cGU9MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzYyYmM7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5hY3RpdmUsIC5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gIGZpbHRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNzdkNDtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW5haXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjMDkyNzU2O1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudCgwJSAxMDAlLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDEwNCwgMTI4LCAxMzgsIC40KSAxMCUsIHJnYmEoMTM4LCAxMTQsIDc2LCAwKSA0MCUpLCAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNTcsIDE3MywgMjE5LCAuMjUpIDAlLCByZ2JhKDQyLCA2MCwgODcsIC40KSAxMDAlKSwgLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjcwZDEwIDAlLCAjMDkyNzU2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgwJSAxMDAlLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDEwNCwgMTI4LCAxMzgsIC40KSAxMCUsIHJnYmEoMTM4LCAxMTQsIDc2LCAwKSA0MCUpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNTcsIDE3MywgMjE5LCAuMjUpIDAlLCByZ2JhKDQyLCA2MCwgODcsIC40KSAxMDAlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjcwZDEwIDAlLCAjMDkyNzU2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoMCUgMTAwJSwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxMDQsIDEyOCwgMTM4LCAuNCkgMTAlLCByZ2JhKDEzOCwgMTE0LCA3NiwgMCkgNDAlKSwgLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg1NywgMTczLCAyMTksIC4yNSkgMCUsIHJnYmEoNDIsIDYwLCA4NywgLjQpIDEwMCUpLCAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjcwZDEwIDAlLCAjMDkyNzU2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KDAlIDEwMCUsIGVsbGlwc2UgY292ZXIsIHJnYmEoMTA0LCAxMjgsIDEzOCwgLjQpIDEwJSwgcmdiYSgxMzgsIDExNCwgNzYsIDApIDQwJSksIC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDU3LCAxNzMsIDIxOSwgLjI1KSAwJSwgcmdiYSg0MiwgNjAsIDg3LCAuNCkgMTAwJSksIC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjcwZDEwIDAlLCAjMDkyNzU2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgwJSAxMDAlLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDEwNCwgMTI4LCAxMzgsIC40KSAxMCUsIHJnYmEoMTM4LCAxMTQsIDc2LCAwKSA0MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDU3LCAxNzMsIDIxOSwgLjI1KSAwJSwgcmdiYSg0MiwgNjAsIDg3LCAuNCkgMTAwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NzBkMTAgMCUsICMwOTI3NTYgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMzRTFENkQnLCBlbmRDb2xvcnN0cj0nIzA5Mjc1NicsIEdyYWRpZW50VHlwZT0xKTtcbn1cblxuLmxvZ2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0xNTBweCAwIDAgLTE1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5sb2dpbiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjIpLCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpLCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuIl19 */");

/***/ }),

/***/ "vbEW":
/*!*************************************!*\
  !*** ./src/app/Models/categorie.ts ***!
  \*************************************/
/*! exports provided: Categorie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categorie", function() { return Categorie; });
var Categorie = /** @class */ (function () {
    function Categorie() {
    }
    return Categorie;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "w3Ah":
/*!*********************************************************************!*\
  !*** ./src/app/components/plat-of-offre/plat-of-offre.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlatOfOffreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatOfOffreComponent", function() { return PlatOfOffreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plat_of_offre_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plat-of-offre.component.html */ "Sq/8");
/* harmony import */ var _plat_of_offre_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plat-of-offre.component.css */ "s7mS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_offre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/offre */ "D/qK");
/* harmony import */ var _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/OffreService/offre.service */ "NdqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _affect_plat_to_offre_component_affect_plat_to_offre_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../affect-plat-to-offre-component/affect-plat-to-offre-component.component */ "fhH1");












var PlatOfOffreComponent = /** @class */ (function () {
    function PlatOfOffreComponent(matdialogref, data, dialog, os) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.os = os;
        this.listPlat = [];
        this.displayedColumns = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.listPlat);
    }
    PlatOfOffreComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PlatOfOffreComponent.prototype.close = function () {
        this.matdialogref.close();
    };
    PlatOfOffreComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = this.data;
        var dialogref = this.dialog.open(_affect_plat_to_offre_component_affect_plat_to_offre_component_component__WEBPACK_IMPORTED_MODULE_11__["AffectPlatToOffreComponentComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (plat) {
            plat.forEach(function (p) {
                _this.dataSource.data.push(p);
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    PlatOfOffreComponent.prototype.delete = function (plat) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.os.destroyPlat(_this.data.id, plat.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(plat), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    PlatOfOffreComponent.prototype.ngOnInit = function () {
        this.listPlat = this.data.plats;
        this.dataSource.data = this.listPlat;
    };
    PlatOfOffreComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_offre__WEBPACK_IMPORTED_MODULE_5__["Offre"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__["OffreService"] }
    ]; };
    PlatOfOffreComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
    };
    PlatOfOffreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plat-of-offre',
            template: _raw_loader_plat_of_offre_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plat_of_offre_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_offre__WEBPACK_IMPORTED_MODULE_5__["Offre"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Services_OffreService_offre_service__WEBPACK_IMPORTED_MODULE_6__["OffreService"]])
    ], PlatOfOffreComponent);
    return PlatOfOffreComponent;
}());



/***/ }),

/***/ "w9HY":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/affect-plat-to-categorie/affect-plat-to-categorie.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AffectPlatToCategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectPlatToCategorieComponent", function() { return AffectPlatToCategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_affect_plat_to_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./affect-plat-to-categorie.component.html */ "VJUG");
/* harmony import */ var _affect_plat_to_categorie_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affect-plat-to-categorie.component.css */ "Jr4w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Models_categorie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/categorie */ "vbEW");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/CategorieService/categorie.service */ "Ph8J");











var AffectPlatToCategorieComponent = /** @class */ (function () {
    function AffectPlatToCategorieComponent(data, ps, cs, matdialogref) {
        var _this = this;
        this.data = data;
        this.ps = ps;
        this.cs = cs;
        this.matdialogref = matdialogref;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.plats = [];
        this.allPlats = [];
        this.newaffectations = [];
        this.filteredPlats = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (nom) { return nom ? _this._filter(nom) : _this.allPlats.slice(); }));
    }
    AffectPlatToCategorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data.id);
        this.ps.getAll().subscribe(function (data) {
            data.forEach(function (p) {
                if (p.categorie_id === null) {
                    _this.allPlats.push(p);
                }
            });
        });
    };
    AffectPlatToCategorieComponent.prototype.add = function (event) {
        var value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.plats.push(value);
        }
        // Clear the input value
        // event.input.remove();
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToCategorieComponent.prototype.remove = function (plat) {
        var index = this.plats.indexOf(plat);
        if (index >= 0) {
            this.plats.splice(index, 1);
        }
    };
    AffectPlatToCategorieComponent.prototype.selected = function (event) {
        this.plats.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AffectPlatToCategorieComponent.prototype._filter = function (value) {
        // const filterValue = value.toLowerCase();
        return this.allPlats.filter(function (plat) { return plat.nom.toLowerCase().includes(value); });
    };
    AffectPlatToCategorieComponent.prototype.affect = function () {
        var _this = this;
        this.plats.forEach(function (p, index) {
            _this.allPlats.forEach(function (plat) {
                if (plat.nom === p) {
                    _this.newaffectations.push(plat);
                    _this.cs.affectPlat(_this.data, plat.id).subscribe(function (d) {
                    });
                }
            });
            if (index === _this.plats.length - 1) {
                _this.matdialogref.close(_this.newaffectations);
            }
        });
    };
    AffectPlatToCategorieComponent.ctorParameters = function () { return [
        { type: _Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__["PlatService"] },
        { type: _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_10__["CategorieService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    AffectPlatToCategorieComponent.propDecorators = {
        fruitInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fruitInput',] }]
    };
    AffectPlatToCategorieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-affect-plat-to-categorie',
            template: _raw_loader_affect_plat_to_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_affect_plat_to_categorie_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Models_categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"],
            _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_6__["PlatService"], _Services_CategorieService_categorie_service__WEBPACK_IMPORTED_MODULE_10__["CategorieService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], AffectPlatToCategorieComponent);
    return AffectPlatToCategorieComponent;
}());



/***/ }),

/***/ "x+Sj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredient-form/ingredient-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<form #f=\"ngForm\"  (ngSubmit)=\"onsubmit(f)\" >\n\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <h1 class=\"text_align-center\" style=\"text-align: center\">Ingrédient</h1>\n              <hr>\n            </div>\n            <div class=\"col-lg-12\">\n              <mat-form-field appearance=\"fill\" >\n                <mat-label>nom</mat-label>\n                <input matInput type=\"text\" name=\"nom\" [(ngModel)]=\"data.nom\" ngModel #nom=\"ngModel\" required>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-12\">\n              <mat-form-field appearance=\"fill\" >\n                <mat-label>prix</mat-label>\n                <input matInput type=\"number\" name=\"prix\" [(ngModel)]=\"data.prix\" ngModel #prix=\"ngModel\" required>\n              </mat-form-field>\n            </div>\n            <div class=\"col-lg-12\">\n             <div class=\"row button-ing\">\n               <div class=\"col-lg-4\">\n                 <button  class=\"btn btn-success\" [disabled]=\"f.invalid\">envoyer</button>\n\n               </div>\n               <div class=\"col-lg-4\">\n                 <button  type=\"reset\" class=\"btn btn-dark\" >vider le formulaire</button>\n\n               </div>\n               <div class=\"col-lg-4\">\n                 <button type=\"button\" class=\"btn btn-warning\" (click)=\"onclose(f)\" >annuler/terminer</button>\n               </div>\n             </div>\n            </div>\n          </div>\n\n      </div>\n</form>\n");

/***/ }),

/***/ "x9bF":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detaille-commande/detaille-commande.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-lg-12\">\n    <button mat-button class=\"pull-right\" (click)=\"close()\">\n      <mat-icon>printer set</mat-icon>\n    </button>\n  </div>\n  <div class=\"row centre\">\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\"> {{restau.nom_restaurant}}</p>\n    </div>\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 10pt;\"> {{restau.address}}</p>\n    </div>\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 10pt;\"> Tel: &nbsp;{{restau.tel}}</p>\n      <hr>\n    </div>\n    <div class=\"row centre\">\n      <div class=\"col-lg-12\">\n        ____________________Adresse livraison____________________\n      </div>\n      <div class=\"col-lg-12\" *ngIf=\"data.user\">\n        <p style=\"font-family: 'Courier New; font-size: 12pt;\">\n          {{data.user.nom}} &nbsp; {{data.user.prenom}}\n        </p>\n      </div>\n      <div class=\"col-lg-12\" *ngIf=\"data.livraison\">\n        <p style=\"font-family: 'Courier New; font-size: 12pt;\">\n          {{data.livraison_address}}\n        </p>\n      </div>\n      <div class=\"col-lg-12\" *ngIf=\"!data.livraison\">\n        <h3>Click and Collect</h3>\n      </div>\n      <div class=\"col-lg-12\" *ngIf=\"data.user\">\n        <p style=\"font-family: 'Courier New'; font-size: 12pt;\">Tel:\n          &nbsp;{{data.user.numero_de_telephone}}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 14pt;\">TICKET N°: &nbsp; {{id}}</p>\n    </div>\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\">{{data.created_at}}</p>\n    </div>\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"data.livraison\">\n        STANDARD: &nbsp;\n        <span style=\"font-weight: bold\"> (LIVRAISON)</span>\n      </p>\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"!data.livraison\">\n        STANDARD: &nbsp;\n        <span style=\"font-weight: bold\"> (CLICK AND COLLECT)</span>\n      </p>\n    </div>\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"data.paiement_modality != null\">\n\n      </p>\n    </div>\n    <div class=\"col-lg-12\" *ngIf=\"data.user\">\n      <p style=\"font-family: 'Courier New'; font-size: 14pt;\">Client: &nbsp; {{data.user.nom}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p style=\"font-family: 'Courier New'; font-size: 14pt;\" class=\"centre\">Liste des articles </p>\n    </div>\n    <div class=\"col-lg-12\" *ngFor=\" let plat of data.requested_plat\">\n      <div class=\"row\">\n        <div class=\"col-lg-10\">\n          <p style=\"font-family: 'Courier New'; font-size: 14pt;\">\n            <mat-icon>subdirectory_arrow_right</mat-icon>\n            &nbsp;\n            {{plat.nom}}\n          </p>\n        </div>\n        <div class=\"col-lg-2\">\n          <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n            {{plat.prix | currency: 'EUR': true}}\n          </p>\n        </div>\n        <div class=\"col-lg-10\" style=\"margin-left: 30px;\">\n          <div *ngFor=\"let custom of plat.customs\">\n            <p style=\"font-family: 'Courier New'; font-size: 14pt;\" *ngFor=\"let ing of custom.ingredients\">\n              <!--lazem njib el quantité-->\n              <mat-icon>arrow_right_alt</mat-icon>\n              {{ing.nom}}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-------------------------offre---------------------->\n    <div class=\"col-lg-12\" *ngFor=\" let offre of listeOffres\">\n      <div class=\"row\">\n        <div class=\"col-lg-10\">\n          <p style=\"font-family: 'Courier New'; font-size: 14pt; font-weight: bold\">\n            <mat-icon>subdirectory_arrow_right</mat-icon>\n            &nbsp;\n            {{offre.nom}}\n          </p>\n        </div>\n        <div class=\"col-lg-2\">\n          <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n            {{offre.prix | currency: 'EUR': true}}\n          </p>\n        </div>\n        <div class=\"col-lg-12\">\n          <div *ngFor=\"let plat of offre.requested_plats\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n                  {{plat.nom}}\n                </p>\n              </div>\n              <div class=\"col-lg-10\" style=\"margin-left: 30px;\">\n                <div *ngFor=\"let custom of plat.customs\">\n                  <p style=\"font-family: 'Courier New'; font-size: 14pt;\"\n                     *ngFor=\"let ing of custom.ingredients\">\n                    <!--lazem njib el quantité-->\n                    <mat-icon>arrow_right_alt</mat-icon>\n                    {{ing.nom}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-10\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n        TOTAL DES REMISES:\n      </p>\n    </div>\n    <div class=\"col-lg-2\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n        0.00 €\n      </p>\n    </div>\n    <div class=\"col-lg-10\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n        FRAIS DE LA LIVRAISON:\n      </p>\n    </div>\n    <div class=\"col-lg-2\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"data.livraison\">\n        {{restau.prixlivraison | currency: 'EUR': true}}\n      </p>\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"!data.livraison\">\n        0.00 €\n      </p>\n    </div>\n    <div class=\"col-lg-10\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\">\n        TOTAL DU TICKET:\n      </p>\n    </div>\n    <div class=\"col-lg-2\">\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"data.livraison\">\n        {{data.prix_total - restau.prixlivraison | currency: 'EUR': true}}\n      </p>\n      <p style=\"font-family: 'Courier New'; font-size: 12pt;\" *ngIf=\"!data.livraison\">\n        {{data.prix_total | currency: 'EUR': true}}\n      </p>\n    </div>\n    <div class=\"col-lg-10\">\n      <p style=\"font-family: 'Courier New'; font-size: 14pt; font-weight: bold\">\n        A PAYER:\n      </p>\n    </div>\n    <div class=\"col-lg-2\">\n      <p style=\"font-family: 'Courier New'; font-size: 14pt; font-weight: bold\">\n        {{data.prix_total | currency: 'EUR': true}}\n      </p>\n    </div>\n    <div class=\"col-lg-12\">\n      <hr>\n    </div>\n  </div>\n  <div class=\"col-lg-12\" style=\"text-align: center;\">\n    <p style=\"font-family: 'Courier New'; font-size: 12pt\">\n      Toute l'équipe vous remercie de votre visite\n    </p>\n  </div>\n  <div class=\"col-lg-12\" style=\"text-align: center;\">\n    <p style=\"font-family: 'Courier New'; font-size: 12pt\">\n      Siret: {{restau.num_siret}}\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "xBq7":
/*!***********************************************!*\
  !*** ./src/app/routeGuard/dashboard.guard.ts ***!
  \***********************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Auth/auth.service */ "mGYE");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





var DashboardGuard = /** @class */ (function () {
    function DashboardGuard(auth, router, cookie) {
        this.auth = auth;
        this.router = router;
        this.cookie = cookie;
    }
    DashboardGuard.prototype.canActivate = function (route, state) {
        if (!this.cookie.get('jwtadmin')) {
            return this.router.parseUrl('loginform');
        }
        else {
            return true;
        }
    };
    DashboardGuard.ctorParameters = function () { return [
        { type: _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], DashboardGuard);
    return DashboardGuard;
}());



/***/ }),

/***/ "xVy0":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/affect-modificateur-to-plat/affect-modificateur-to-plat.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AffectModificateurToPlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectModificateurToPlatComponent", function() { return AffectModificateurToPlatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_affect_modificateur_to_plat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./affect-modificateur-to-plat.component.html */ "eGnT");
/* harmony import */ var _affect_modificateur_to_plat_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affect-modificateur-to-plat.component.css */ "NLAq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/modificateurService/modificateur.service */ "Lk/Z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Models_plat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Models/plat */ "VTgv");











var AffectModificateurToPlatComponent = /** @class */ (function () {
    function AffectModificateurToPlatComponent(ms, plat, matdialogref, dialog) {
        var _this = this;
        this.ms = ms;
        this.plat = plat;
        this.matdialogref = matdialogref;
        this.dialog = dialog;
        this.plat_id = this.plat.id;
        this.listmodif = [];
        this.checklist = [];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.modif = [];
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.newaffectation = [];
        this.filteredmodif = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (nom) { return nom ? _this._filter(nom) : _this.listmodif.slice(); }));
    }
    AffectModificateurToPlatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getAll().subscribe(function (d) {
            _this.listmodif = d;
        });
    };
    AffectModificateurToPlatComponent.prototype.add = function (event) {
        var value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.modif.push(value);
        }
        // Clear the input value
        // event.input.remove();
        this.fruitCtrl.setValue(null);
    };
    AffectModificateurToPlatComponent.prototype.remove = function (ingr) {
        var index = this.modif.indexOf(ingr);
        if (index >= 0) {
            this.modif.splice(index, 1);
        }
    };
    AffectModificateurToPlatComponent.prototype.selected = function (event) {
        this.modif.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AffectModificateurToPlatComponent.prototype._filter = function (value) {
        // const filterValue = value.toLowerCase();
        return this.listmodif.filter(function (modif) { return modif.nom.toLowerCase().includes(value); });
    };
    AffectModificateurToPlatComponent.prototype.onsubmit = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.listmodif.forEach(function (modif, index) {
                    _this.modif.forEach(function (m) {
                        if (m === modif.nom) {
                            _this.newaffectation.push(modif);
                            _this.ms.affectModifiToPlat(_this.plat_id, modif.id).subscribe(function (d) {
                            });
                        }
                    });
                    if (index === _this.listmodif.length - 1) {
                        _this.matdialogref.close(_this.newaffectation);
                    }
                });
            }
        });
    };
    AffectModificateurToPlatComponent.ctorParameters = function () { return [
        { type: _Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_5__["ModificateurService"] },
        { type: _Models_plat__WEBPACK_IMPORTED_MODULE_10__["Plat"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    AffectModificateurToPlatComponent.propDecorators = {
        fruitInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fruitInput',] }]
    };
    AffectModificateurToPlatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-affect-modificateur-to-plat',
            template: _raw_loader_affect_modificateur_to_plat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_affect_modificateur_to_plat_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_modificateurService_modificateur_service__WEBPACK_IMPORTED_MODULE_5__["ModificateurService"], _Models_plat__WEBPACK_IMPORTED_MODULE_10__["Plat"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AffectModificateurToPlatComponent);
    return AffectModificateurToPlatComponent;
}());



/***/ }),

/***/ "xo2U":
/*!*********************************************************************************!*\
  !*** ./src/app/components/commandes-en-atente/commandes-en-atente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CommandesEnAtenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesEnAtenteComponent", function() { return CommandesEnAtenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_commandes_en_atente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./commandes-en-atente.component.html */ "Ydas");
/* harmony import */ var _commandes_en_atente_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commandes-en-atente.component.css */ "ZUY2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Commandes/commandes.service */ "ATNw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detaille-commande/detaille-commande.component */ "+fB2");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/Firebase/firebase.service */ "0TIH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













var CommandesEnAtenteComponent = /** @class */ (function () {
    function CommandesEnAtenteComponent(commandService, datepipe, dialog, fb) {
        this.commandService = commandService;
        this.datepipe = datepipe;
        this.dialog = dialog;
        this.fb = fb;
        this.realTimeCommandes = [];
        this.listecommandes = [];
        this.displayedColumns = ['nom', 'numero_de_telephone', 'détailles de commande', 'prix_total', 'validate', 'cancel'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.listecommandes);
    }
    CommandesEnAtenteComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CommandesEnAtenteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.commandes().subscribe(function (data) {
            _this.realTimeCommandes = data;
            // get all commandes
            _this.commandService.getAll().subscribe(function (d) {
                _this.listecommandes = Object.assign(_this.listecommandes, d);
                // filter commandes non vues et les affecter au datasource.data
                _this.dataSource.data = _this.listecommandes.filter(function (c) { return c.status === 'non_vue' && c.date_paiement == null; });
                _this.dataSource.paginator = _this.paginator;
                var audio = new Audio();
                audio.src = '../../../src/assets/1.mp3';
                audio.load();
                audio.play();
            });
        });
    };
    CommandesEnAtenteComponent.prototype.detaillesCommande = function (commande) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '50%';
        dialogConfig.height = '70%';
        dialogConfig.data = commande;
        this.dialog.open(_detaille_commande_detaille_commande_component__WEBPACK_IMPORTED_MODULE_8__["DetailleCommandeComponent"], dialogConfig);
    };
    CommandesEnAtenteComponent.prototype.validate = function (cmd) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                cmd.status = 'en_cours';
                cmd.date_paiement = _this.datepipe.transform(new Date(), 'yyyy-MM-dd');
                _this.commandService.updateCommand(cmd).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(cmd), 1);
                    _this.dataSource.paginator = _this.paginator;
                    _this.realTimeCommandes.forEach(function (c) {
                        if (c.idCommande == cmd.commande_id) {
                            c.status = 'en_cours';
                            _this.fb.update(c).then(function (co) {
                            });
                        }
                    });
                });
            }
        });
    };
    CommandesEnAtenteComponent.prototype.cancel = function (cmd) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                cmd.status = 'annulee';
                _this.commandService.updateCommand(cmd).subscribe(function (data) {
                    _this.realTimeCommandes.forEach(function (c) {
                        if (c.idCommande == cmd.commande_id) {
                            c.status = 'annulee';
                            _this.fb.update(c).then(function (co) {
                            });
                        }
                    });
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(cmd), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    // tslint:disable-next-line:typedef
    CommandesEnAtenteComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CommandesEnAtenteComponent.ctorParameters = function () { return [
        { type: _Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"] }
    ]; };
    CommandesEnAtenteComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }]
    };
    CommandesEnAtenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-commandes-en-atente',
            template: _raw_loader_commandes_en_atente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_commandes_en_atente_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_Commandes_commandes_service__WEBPACK_IMPORTED_MODULE_6__["CommandesService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _Services_Firebase_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"]])
    ], CommandesEnAtenteComponent);
    return CommandesEnAtenteComponent;
}());



/***/ }),

/***/ "y0eB":
/*!************************************************************************************************!*\
  !*** ./src/app/components/restaurant-info-management/restaurant-info-management.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtaW5mby1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoicmVzdGF1cmFudC1pbmZvLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "yYfB":
/*!*************************************************************************************!*\
  !*** ./src/app/components/plats-of-modificateur/plats-of-modificateur.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PlatsOfModificateurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatsOfModificateurComponent", function() { return PlatsOfModificateurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plats_of_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plats-of-modificateur.component.html */ "goXp");
/* harmony import */ var _plats_of_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plats-of-modificateur.component.css */ "+1g5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _affect_plat_to_modificateur_affect_plat_to_modificateur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../affect-plat-to-modificateur/affect-plat-to-modificateur.component */ "9GuS");
/* harmony import */ var _Models_modificateur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/modificateur */ "PVyf");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-banner/confirmation-banner.component */ "n/dc");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/platService/plat.service */ "gH7S");












var PlatsOfModificateurComponent = /** @class */ (function () {
    function PlatsOfModificateurComponent(matdialogref, data, dialog, ps) {
        this.matdialogref = matdialogref;
        this.data = data;
        this.dialog = dialog;
        this.ps = ps;
        this.modificateur = this.data;
        this.listeplats = [];
        this.displayedColumns = ['nom', 'image', 'description', 'statut', 'prix', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.listeplats);
    }
    PlatsOfModificateurComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PlatsOfModificateurComponent.prototype.ngOnInit = function () {
        this.listeplats = this.data.plats;
        this.dataSource.data = this.listeplats;
    };
    PlatsOfModificateurComponent.prototype.delete = function (plat) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '15%';
        dialogConfig.height = '20%';
        var dialogref = this.dialog.open(_confirmation_banner_confirmation_banner_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationBannerComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (retour) {
            if (retour === true) {
                _this.ps.detachPlatFromModif(plat.id, _this.data.id).subscribe(function (data) {
                    _this.dataSource.data.splice(_this.dataSource.data.indexOf(plat), 1);
                    _this.dataSource.paginator = _this.paginator;
                });
            }
        });
    };
    PlatsOfModificateurComponent.prototype.close = function () {
        this.matdialogref.close();
    };
    PlatsOfModificateurComponent.prototype.add = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '40%';
        dialogConfig.height = '70%';
        dialogConfig.data = this.modificateur;
        var dialogref = this.dialog.open(_affect_plat_to_modificateur_affect_plat_to_modificateur_component__WEBPACK_IMPORTED_MODULE_5__["AffectPlatToModificateurComponent"], dialogConfig);
        dialogref.afterClosed().subscribe(function (d) {
            d.forEach(function (plat) {
                _this.dataSource.data.push(plat);
                _this.dataSource.paginator = _this.paginator;
            });
        });
    };
    PlatsOfModificateurComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _Models_modificateur__WEBPACK_IMPORTED_MODULE_6__["Modificateur"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_11__["PlatService"] }
    ]; };
    PlatsOfModificateurComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }]
    };
    PlatsOfModificateurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plats-of-ingredient',
            template: _raw_loader_plats_of_modificateur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plats_of_modificateur_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _Models_modificateur__WEBPACK_IMPORTED_MODULE_6__["Modificateur"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_11__["PlatService"]])
    ], PlatsOfModificateurComponent);
    return PlatsOfModificateurComponent;
}());



/***/ }),

/***/ "ytpy":
/*!***************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_statistics_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statistics.component.html */ "1PVb");
/* harmony import */ var _statistics_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.component.css */ "XaPi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/StatisticsService/statistics.service */ "t+h/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");









var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(ss, datepipe) {
        this.ss = ss;
        this.datepipe = datepipe;
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                }
            }
        };
        this.barChartLabels = [];
        this.barChartLabelsQuantity = [];
        this.barChartLabelcodes = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [], label: 'Chiffre d\'affaire par offre de l\'année ' }
        ];
        this.barChartDataQuantity = [
            { data: [], label: 'Quantité d\'offres vendus dans l\'année ' }
        ];
        this.barChartDataCodes = [
            { data: [], label: 'Statistique de l\'utilisation des codes pour l\'année ' }
        ];
        this.barChartColors = [
            { backgroundColor: '#7ebfed' }
        ];
        this.listStatisticsUsinCodesByUYser = [];
        this.displayedColumns = ['nom', 'email', 'code', 'nbruse'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listStatisticsUsinCodesByUYser);
    }
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.year = new Date().getFullYear();
        this.barChartData[0].label += this.year;
        this.barChartDataCodes[0].label += this.year;
        this.barChartDataQuantity[0].label += this.year;
        this.ss
            .CAOffreByMonthOfYear(this.year.toString())
            .subscribe(function (CAOffres) {
            CAOffres.forEach(function (cao) {
                _this.barChartLabels.push(cao.offre);
                _this.barChartData[0].data.push(cao.ca);
            });
        });
        this.ss
            .QuantityOffreByYear(this.year.toString())
            .subscribe(function (quantityoffresbuyed) {
            quantityoffresbuyed.forEach(function (qob) {
                _this.barChartLabelsQuantity.push(qob.offre);
                _this.barChartDataQuantity[0].data.push(qob.quantity);
            });
        });
        this.ss.CountactiveCodes().subscribe(function (data) {
            _this.nbrActiveCodes = data;
        });
        this.ss.nbrusecoderedbyyear(this.year.toString()).subscribe(function (data) {
            // code + nbruse
            data.forEach(function (d) {
                _this.barChartLabelcodes.push(d.code);
                _this.barChartDataCodes[0].data.push(d.nbruse);
            });
        });
        this.ss.nbrusecoderedbyyearbyuser('2021').subscribe(function (data) {
            // nom + prenom + email + nbruse + code
            _this.listStatisticsUsinCodesByUYser = data;
            _this.dataSource.data = _this.listStatisticsUsinCodesByUYser;
        });
    };
    // events
    StatisticsComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    StatisticsComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    StatisticsComponent.prototype.getdataOfNewYear = function () {
        var _this = this;
        this.barChartLabelsQuantity = [];
        this.barChartLabels = [];
        this.barChartData[0].data = [];
        this.barChartDataQuantity[0].data = [];
        this.barChartData[0].label = 'Chiffre d\'affaire par offre de l\'année ' + this.year;
        this.barChartDataQuantity[0].label = 'Quantité d\'offres vendus dans l\'année ' + this.year;
        this.barChartDataCodes[0].label = 'Statistique de l\'utilisation des codes pour l\'année ' + this.year;
        this.barChartDataCodes[0].data = [];
        this.barChartLabelcodes = [];
        this.ss
            .CAOffreByMonthOfYear(this.year.toString())
            .subscribe(function (CAOffres) {
            CAOffres.forEach(function (cao) {
                _this.barChartLabels.push(cao.offre);
                _this.barChartData[0].data.push(cao.ca);
            });
        });
        this.ss
            .QuantityOffreByYear(this.year.toString())
            .subscribe(function (quantityoffresbuyed) {
            quantityoffresbuyed.forEach(function (qob) {
                _this.barChartLabelsQuantity.push(qob.offre);
                _this.barChartDataQuantity[0].data.push(qob.quantity);
            });
        });
        this.ss
            .nbrusecoderedbyyear(this.year.toString())
            .subscribe(function (data) {
            data.forEach(function (d) {
                _this.barChartLabelcodes.push(d.code);
                _this.barChartDataCodes[0].data.push(d.nbruse);
            });
        });
        this.listStatisticsUsinCodesByUYser = [];
        this.ss.nbrusecoderedbyyearbyuser('2021').subscribe(function (data) {
            // nom + prenom + email + nbruse + code
            _this.listStatisticsUsinCodesByUYser = data;
            _this.dataSource.data = _this.listStatisticsUsinCodesByUYser;
        });
        this.nbrActiveCodes = 0;
        this.ss.CountactiveCodes().subscribe(function (data) {
            _this.nbrActiveCodes = data;
        });
    };
    StatisticsComponent.ctorParameters = function () { return [
        { type: _Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    StatisticsComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }]
    };
    StatisticsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-statistics',
            template: _raw_loader_statistics_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_statistics_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/UserService/user.service */ "B9hT");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");






var ROUTES = [
    { path: '/dashboard', title: 'Tableau de bord', icon: 'design_app', class: '' },
    { path: '/commandes-en-atente', title: 'commandes en attente', icon: 'education_atom', class: '' },
    { path: '/commandes-en-cours', title: 'commandes en cours', icon: 'location_map-big', class: '' },
    { path: '/commandes-termine', title: 'commandes termine', icon: 'ui-1_bell-53', class: '' },
    { path: '/commandes-archive', title: 'commandes archive', icon: 'users_single-02', class: '' },
    { path: '/ingredient', title: 'ingredient', icon: 'design_bullet-list-67', class: '' },
    { path: '/modificateur', title: 'modificateur', icon: 'text_caps-small', class: '' },
    { path: '/plat', title: 'plat', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/categorie', title: 'categorie', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/restaurant', title: 'informations du restaurant', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/restaurantmanagement', title: 'informations du restaurant', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/worktime', title: 'temps de travail', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/reduction', title: 'gérer les reductions', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/schedle', title: 'gérer le temps de travaille et les jours fériés', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/offres', title: 'gérer le offres', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/statistics', title: 'Statistiques', icon: 'objects_spaceship', class: 'active active-pro' },
    { path: '/printerconfig', title: 'Configuration impriments', icon: 'objects_spaceship', class: 'active active-pro' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(us, cookie) {
        this.us = us;
        this.cookie = cookie;
        this.panelOpenState = false;
        this.msdigitalTest = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        if (this.cookie.get('msdigital')) {
            this.msdigitalTest = true;
        }
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zK9O":
/*!****************************************************************************!*\
  !*** ./src/app/components/offre-management/offre-management.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n/*mat slide color*/\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 180, 81, 0.52) ;\n}\n\n::ng-deep  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:#00B451;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZnJlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6Im9mZnJlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qbWF0IHNsaWRlIGNvbG9yKi9cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDgxLCAwLjUyKSA7XG59XG5cbjo6bmctZGVlcCAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBCNDUxO1xufVxuIl19 */");

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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Now UI Dashboard Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map