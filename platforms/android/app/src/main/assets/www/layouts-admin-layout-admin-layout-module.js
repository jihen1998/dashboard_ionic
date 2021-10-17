(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "3Buq":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          Google Maps\n        </div>\n        <div class=\"card-body \">\n          <div id=\"map\" class=\"map\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component.css */ "C+6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor((Math.random() * 5) + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 2:
                this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 3:
                this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 4:
                this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 5:
                this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-notifications',
            template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA");
/* harmony import */ var _icons_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.component.css */ "3Buq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-icons',
            template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_icons_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header\">\n  <div class=\"header text-center\">\n    <h2 class=\"title\">Notifications</h2>\n    <p class=\"category\">Please checkout the\n      <a href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\">full documentation.</a>\n    </p>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Notifications Style</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"alert alert-info\">\n            <span>This is a plain notification</span>\n          </div>\n          <div class=\"alert alert-info\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>This is a notification with close button.</span>\n          </div>\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n          </div>\n          <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Notification states</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"alert alert-primary\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n          </div>\n          <div class=\"alert alert-info\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n          </div>\n          <div class=\"alert alert-success\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n          </div>\n          <div class=\"alert alert-warning\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n          </div>\n          <div class=\"alert alert-danger\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n            <span>\n              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"places-buttons\">\n            <div class=\"row\">\n              <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                <h4 class=\"card-title\">\n                  Notifications Places\n                  <p class=\"category\">Click to view notifications</p>\n                </h4>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid stat_container\">\n  <div class=\"row\">\n      <div class=\"col-lg-7 container-courbe\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 title-courbe \">\n            <form #f=\"ngForm\" (ngSubmit)=\"getTurnover(f)\">\n              <label style=\"font-size: 24px;\">\n                <mat-icon style=\"vertical-align: middle; color: #00B451\"> bar_chart</mat-icon>\n                Allure chiffre d'affaire: &nbsp;\n              </label>\n              <mat-form-field style=\"width: 90px\">\n                <input style=\"font-size: 18pt; text-align: center; font-weight: bold;\" matInput\n                       type=\"number\" name=\"anne\" ngModel #annee=\"ngModel\" (ngModelChange)=\"getTurnover($event)\"\n                       [(ngModel)]=\"year\">\n              </mat-form-field>\n            </form>\n\n            <hr>\n          </div>\n          <div class=\"col-lg-12 courbes\">\n            <canvas baseChart class=\"stat1\" id=\"bigDashboardChart\"\n                    [datasets]=\"lineBigDashboardChartData\"\n                    [labels]=\"lineBigDashboardChartLabels\"\n                    [colors]=\"lineBigDashboardChartColors\"\n                    [options]=\"lineBigDashboardChartOptions\"\n                    [chartType]=\"lineBigDashboardChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n          <div class=\"col-lg-4\">\n            <canvas baseChart class=\"stat2\" id=\"bigDashboardStripeChart\"\n                    [datasets]=\"lineBigDashboardChartStripeData\"\n                    [labels]=\"lineBigDashboardChartStripeLabels\"\n                    [colors]=\"lineBigDashboardChartStripeColors\"\n                    [options]=\"lineBigDashboardChartStripeOptions\"\n                    [chartType]=\"lineBigDashboardChartStripeType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n\n          <div class=\"col-lg-4\" >\n            <canvas baseChart class=\"stat3\" id=\"bigDashboardPaypalChart\"\n                    [datasets]=\"lineBigDashboardChartPaypalData\"\n                    [labels]=\"lineBigDashboardChartPaypalLabels\"\n                    [colors]=\"lineBigDashboardChartPaypalColors\"\n                    [options]=\"lineBigDashboardChartPaypalOptions\"\n                    [chartType]=\"lineBigDashboardChartStripeType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\">\n            </canvas>\n          </div>\n\n          <div class=\"col-lg-4\" >\n            <canvas baseChart class=\"stat4\" id=\"bigDashboardEspeceChart\"\n                    [datasets]=\"lineBigDashboardChartEspeceData\"\n                    [labels]=\"lineBigDashboardChartEspeceLabels\"\n                    [colors]=\"lineBigDashboardChartEspeceColors\"\n                    [options]=\"lineBigDashboardChartEspeceOptions\"\n                    [chartType]=\"lineBigDashboardChartStripeType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n        <br>\n        <br>\n        <hr>\n        <div class=\"col-lg-7 stat-ca\" style=\"width: 98%!important;\">\n          <h2 style=\"text-align: center;\">\n            <mat-icon style=\"vertical-align: middle; color: #00B451\"> bar_chart</mat-icon>\n            Statistique des clients\n          </h2>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\" style=\"padding: 0!important;\" >\n              <div class=\"card\" style=\"font-weight: lighter;\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"text-align: center\"> Liste des clients</h4>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\"  >\n                    <table class=\"table\" mat-table matSort [dataSource]=\"dataSource\" style=\"width: 100%\">\n                      <!-- etat Column -->\n                      <ng-container matColumnDef=\"etat\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef>Etat</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\" *ngIf=\"element.is_connected\" style=\"color: #00B451\">\n                            en ligne\n                          </p>\n                          <p style=\"font-size: 12pt;line-height: 12pt;\" *ngIf=\"!element.is_connected\">\n                            Hors ligne\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- Nom Column -->\n                      <ng-container matColumnDef=\"nom\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Nom & prenom</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.nom}} &nbsp; {{element.prenom}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- email Column -->\n                      <ng-container matColumnDef=\"email\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Email</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.email}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- tel Column -->\n                      <ng-container matColumnDef=\"tel\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> tel</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.numero_de_telephone}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- datenaissance Column -->\n                      <ng-container matColumnDef=\"datenaissance\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Date de naissance</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.date_de_naissance}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- commandes Column -->\n                      <ng-container matColumnDef=\"commandes\">\n                        <th class=\" text-primary\" mat-header-cell *matHeaderCellDef> Commandes</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index;\">\n                          <button mat-button (click)=\"historic(element)\">\n                            <mat-icon>visibility</mat-icon>\n                          </button>\n                        </td>\n                      </ng-container>\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" style=\"width: 100%\" showFirstLastButtons></mat-paginator>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"card\" style=\"font-weight: lighter;\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"text-align: center\"> TOP 10 clients</h4>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\" mat-table matSort [dataSource]=\"dataSourcetop10\" style=\"width: 100%\">\n                      <!-- nbrcmd Column -->\n                      <ng-container matColumnDef=\"nbrcmd\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> nombre de commandes</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          {{element.nbrCmd}}\n                        </td>\n                      </ng-container>\n                      <!-- etat Column -->\n                      <ng-container matColumnDef=\"etat\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef>Etat</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\" *ngIf=\"element.is_connected\" style=\"color: #00B451\">\n                            en ligne\n                          </p>\n                          <p style=\"font-size: 12pt;line-height: 12pt;\" *ngIf=\"!element.is_connected\">\n                            Hors ligne\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- Nom Column -->\n                      <ng-container matColumnDef=\"nom\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Nom & prenom</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height:12pt;\">\n                            {{element.nom}} &nbsp; {{element.prenom}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- email Column -->\n                      <ng-container matColumnDef=\"email\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Email</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.email}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- tel Column -->\n                      <ng-container matColumnDef=\"tel\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> tel</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.numero_de_telephone}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <!-- datenaissance Column -->\n                      <ng-container matColumnDef=\"datenaissance\">\n                        <th class=\" text-primary\" mat-header-cell mat-sort-header *matHeaderCellDef> Date de naissance</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <p style=\"font-size: 12pt;line-height: 12pt;\">\n                            {{element.date_de_naissance}}\n                          </p>\n                        </td>\n                      </ng-container>\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumnstop10\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumnstop10;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" style=\"width: 100%\" showFirstLastButtons></mat-paginator>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"row stat-ca\">\n\n        <div class=\"col-lg-2\">\n          <h3 style=\"font-size: 18pt; font-weight: bold\">\n            Annuel: &nbsp;\n          </h3>\n\n        </div>\n\n        <div class=\"col-lg-6\">\n          <h3 style=\"font-size: 16pt; font-weight: lighter\">\n\n            {{chiffre_affaire_annuel | currency:\"EUR\": true}}\n          </h3>\n          <hr>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <div class=\"row\" style=\"vertical-align: center\">\n            <div class=\"col-lg-2\">\n              <h3 style=\"font-size: 18pt; font-weight: bold\">\n                CA:\n              </h3>\n            </div>\n            <div class=\"col-lg-6\" >\n              <h3  style=\"font-size: 16pt; font-weight: lighter\">\n                {{chiffre_affaire_mensuelle | currency:\"EUR\": true}}\n              </h3>\n            </div>\n            <div class=\"col-lg-4 \" >\n              <mat-form-field appearance=\"fill\"  class=\"datepikerca\">\n                <mat-label>Selectionner la periode</mat-label>\n                <mat-date-range-input [formGroup]=\"rangeChiffreAffaireMensuelle\" [rangePicker]=\"picker\" >\n                  <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n                  <input matEndDate formControlName=\"end\" placeholder=\"End date\"\n                         (dateChange)=\"getrangeChiffreAffaireMensuelle()\">\n                </mat-date-range-input>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-date-range-picker #picker></mat-date-range-picker>\n\n                <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n                <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n              </mat-form-field>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-lg-12\">\n        <div class=\"row\" >\n          <div class=\"col-lg-12\">\n            <hr>\n            <h2>\n              <mat-icon style=\"vertical-align: middle; color: #00B451\"> bar_chart</mat-icon>\n              USER TOP ONE\n            </h2>\n            <hr>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <div class=\"card card-user\">\n              <div class=\"card-body\">\n                <div class=\"author\">\n                  <img class=\"avatar border-gray\"\n                       *ngIf=\"image == ''\"\n                       src=\"../../assets/img/rs_2.png\" height=\"250\" width=\"250\"/>\n                  <img class=\"avatar border-gray\"\n                       *ngIf=\"image != ''\"\n                       src=\"{{image}}\">\n                  <h5 class=\"title\" style=\"font-size: 16pt;line-height: 16pt;\">\n                    {{topTenUsers[0].nom}} &nbsp; {{topTenUsers[0].prenom}}\n                  </h5>\n                  <hr>\n                  <br>\n                  <p class=\"description\" style=\"font-size: 14pt;line-height: 14pt;\">\n                    {{topTenUsers[0].email}}\n                  </p>\n                  <p class=\"description\" style=\"font-size: 14pt;line-height: 14pt;\">\n                    {{topTenUsers[0].numero_de_telephone}}\n                  </p>\n                  <p class=\"description\" style=\"font-size: 14pt;line-height: 14pt;\">\n                    {{topTenUsers[0].date_de_naissance}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12 stat-ca\" style=\"vertical-align: middle\">\n        <h2>\n          Clients Connectés: &nbsp; {{nbrUserConnected}}\n        </h2>\n      </div>\n      <div class=\"col-lg-12 stat-ca\">\n          <h2 style=\"text-align: center;\">\n            <mat-icon style=\"vertical-align: middle; color: #00B451\"> bar_chart</mat-icon>\n            Statistique des ventes\n          </h2>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <!--pltas vendus-->\n                  <canvas baseChart\n                          [datasets]=\"barChartData\"\n                          [labels]=\"barChartLabels\"\n                          [options]=\"barChartOptions\"\n                          [legend]=\"barChartLegend\"\n                          [chartType]=\"barChartType\"\n                  >\n                  </canvas>\n                </div>\n                <div class=\"col-lg-12\">\n                  <!--pltas vendus par date-->\n                  <canvas baseChart\n                          [datasets]=\"barChartData1\"\n                          [labels]=\"barChartLabels\"\n                          [options]=\"barChartOptions1\"\n                          [legend]=\"barChartLegend\"\n                          [chartType]=\"barChartType\"\n                  >\n                  </canvas>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <!-- 1st and last date here!-->\n                </div>\n\n                <div class=\"col-lg-6\">\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter a date range</mat-label>\n                    <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n                      <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n                      <input matEndDate formControlName=\"end\" placeholder=\"End date\" (dateChange)=\"getrange()\">\n                    </mat-date-range-input>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-date-range-picker #picker></mat-date-range-picker>\n\n                    <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n                    <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/user-profile/user-profile.component */ "VrDm");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../material/material.module */ "hctd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ "sZkV");























var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_22__["IonicModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__["TableListComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_16__["UpgradeComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_10__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_11__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Now Ui Table Heading</h5>\n          <p class=\"category\">Created using Montserrat Font Family</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"typography-line\">\n            <h1>\n              <span>Header 1</span>The Life of Now Ui Dashboard </h1>\n          </div>\n          <div class=\"typography-line\">\n            <h2>\n              <span>Header 2</span>The Life of Now Ui Dashboard </h2>\n          </div>\n          <div class=\"typography-line\">\n            <h3>\n              <span>Header 3</span>The Life of Now Ui Dashboard </h3>\n          </div>\n          <div class=\"typography-line\">\n            <h4>\n              <span>Header 4</span>The Life of Now Ui Dashboard </h4>\n          </div>\n          <div class=\"typography-line\">\n            <h5>\n              <span>Header 5</span>The Life of Now Ui Dashboard </h5>\n          </div>\n          <div class=\"typography-line\">\n            <h6>\n              <span>Header 6</span>The Life of Now Ui Dashboard </h6>\n          </div>\n          <div class=\"typography-line\">\n            <p>\n              <span>Paragraph</span>\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Quote</span>\n            <blockquote>\n              <p class=\"blockquote blockquote-primary\">\n                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                <br>\n                <br>\n                <small>\n                  - Noaa\n                </small>\n              </p>\n            </blockquote>\n          </div>\n          <div class=\"typography-line\">\n            <span>Muted Text</span>\n            <p class=\"text-muted\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Primary Text</span>\n            <p class=\"text-primary\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Info Text</span>\n            <p class=\"text-info\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Success Text</span>\n            <p class=\"text-success\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Warning Text</span>\n            <p class=\"text-warning\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\"typography-line\">\n            <span>Danger Text</span>\n            <p class=\"text-danger\">\n              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n          </div>\n          <div class=\"typography-line\">\n            <h2>\n              <span>Small Tag</span>\n              Header with small subtitle\n              <br>\n              <small>Use \"small\" tag for the headers</small>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Og+P":
/*!**********************************************************!*\
  !*** ./src/app/Services/StripeService/stripe.service.ts ***!
  \**********************************************************/
/*! exports provided: StripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "z4EA");
/* harmony import */ var _Models_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/env */ "Tpwm");





var StripeService = /** @class */ (function () {
    function StripeService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = _Models_env__WEBPACK_IMPORTED_MODULE_4__["Env"].url;
    }
    StripeService.prototype.GetTransactions = function () {
        return this.http.get(this.url + "/api/stripe", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
    };
    StripeService.prototype.Getcharges = function () {
        return this.http.get(this.url + "/api/stripecharges", { headers: { Authorization: 'Bearer ' + this.cookie.get('jwtadmin') } });
        // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
    };
    StripeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    StripeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], StripeService);
    return StripeService;
}());



/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card card-upgrade\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Now UI Dashboard PRO Angular</h5>\n            <p class=\"category\">Are you looking for more components? Please check our Premium Version of Now UI Dashboard PRO Angular.</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive table-upgrade\">\n            <table class=\"table\">\n              <thead>\n                <th></th>\n                <th class=\"text-center\">Free</th>\n                <th class=\"text-center\">PRO</th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Components</td>\n                  <td class=\"text-center\">16</td>\n                  <td class=\"text-center\">160</td>\n                </tr>\n                <tr>\n                  <td>Plugins</td>\n                  <td class=\"text-center\">4</td>\n                  <td class=\"text-center\">12</td>\n                </tr>\n                <tr>\n                  <td>Example Pages</td>\n                  <td class=\"text-center\">7</td>\n                  <td class=\"text-center\">27</td>\n                </tr>\n                <tr>\n                  <td>Documentation</td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                </tr>\n                <tr>\n                  <td>SASS Files</td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                </tr>\n                <tr>\n                  <td>Mini Sidebar</td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                </tr>\n                <tr>\n                  <td>Premium Support</td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                </tr>\n                <tr>\n                  <td>Login, Register, Pricing, Lock Pages</td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i></td>\n                  <td class=\"text-center\"><i class=\"now-ui-icons ui-1_check text-success\"></i></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td class=\"text-center\">Free</td>\n                  <td class=\"text-center\">Just $59</td>\n                </tr>\n                <tr>\n                  <td class=\"text-center\"></td>\n                  <td class=\"text-center\">\n                    <a href=\"#\" class=\"btn btn-round btn-default disabled\">Current Version</a>\n                  </td>\n                  <td class=\"text-center\">\n                    <a target=\"_blank\" href=\"https://www.creative-tim.com/product/now-ui-dashboard-pro-angular?ref=nud-angular-upgrade-live\" class=\"btn btn-round btn-primary\">Upgrade to PRO</a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/StatisticsService/statistics.service */ "t+h/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _Services_StripeService_stripe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/StripeService/stripe.service */ "Og+P");
/* harmony import */ var _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/platService/plat.service */ "gH7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _components_all_tickets_all_tickets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/all-tickets/all-tickets.component */ "qTJh");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/UserService/user.service */ "B9hT");















var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(si, stripeserv, ps, datepipe, dialog, us) {
        this.si = si;
        this.stripeserv = stripeserv;
        this.ps = ps;
        this.datepipe = datepipe;
        this.dialog = dialog;
        this.us = us;
        this.listAllUsersWithHistoric = [];
        this.topTenUsers = [];
        this.displayedColumns = ['etat', 'nom', 'email', 'tel', 'datenaissance', 'commandes'];
        this.displayedColumnstop10 = ['nbrcmd', 'etat', 'nom', 'email', 'tel', 'datenaissance'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.listAllUsersWithHistoric);
        this.dataSourcetop10 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.topTenUsers);
        /********************** les plats vendus*********************/
        this.sysdate = new Date();
        this.startdate = new Date('01/01/' + this.sysdate.getFullYear());
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.startdate),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date())
        });
        this.rangeChiffreAffaireMensuelle = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.startdate),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date())
        });
        this.barChartOptions = {
            title: {
                text: 'Plats vendus',
                display: true
            },
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
        this.date = { start: '', end: '' };
        this.dateChiffreAffaireMensuelle = { start: '', end: '' };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [], label: 'Quantité' },
            { data: [], label: 'chiffre d\'affaire' }
        ];
        /**************************************************************************************/
        // data for plat vendus by date
        this.barChartData1 = [
            { data: [], label: 'Quantité' },
            { data: [], label: 'chiffre d\'affaire' }
        ];
        // options for plat vendus by date
        this.barChartOptions1 = {
            title: {
                text: 'plats vendus de ' + this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd') + ' à ' +
                    this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd'),
                display: true
            },
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
        this.turnover = [];
        this.trnovervalues = [];
        this.chargeStripe = [];
        this.year = new Date().getFullYear();
        this.image = '';
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DashboardComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
        else {
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**************************** get all users****************************************************/
        this.si.userWithHistoric().subscribe(function (users) {
            _this.listAllUsersWithHistoric = users;
            _this.dataSource.data = _this.listAllUsersWithHistoric;
            console.log(_this.listAllUsersWithHistoric);
        });
        /*********************************************************************************************/
        /**************************** Top 10 users****************************************************/
        this.si.MostImportentClientBuyin().subscribe(function (top) {
            _this.topTenUsers = top;
            _this.dataSourcetop10.data = _this.topTenUsers;
            if (_this.topTenUsers[0].image) {
                _this.image = _this.topTenUsers[0].image;
            }
        });
        /*********************************************************************************************/
        /**************************** nbr users connected****************************************************/
        this.si.NbrOfUsersConnected().subscribe(function (nbruserconnected) {
            _this.nbrUserConnected = nbruserconnected[0].connected_users;
        });
        /*********************************************************************************************/
        /*************************** get CA annuel*******************************************************/
        this.si.CAMAnnuel(this.year).subscribe(function (CAA) {
            _this.chiffre_affaire_annuel = CAA[0].CA;
        });
        /*********************************************************************************************/
        /*************************** get CA mensuelle de ce mois ************************************/
        this.dateChiffreAffaireMensuelle.start = this.datepipe.transform(new Date(), 'yyyy-MM-01');
        this.dateChiffreAffaireMensuelle.end = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.si
            .CAMensuel(this.dateChiffreAffaireMensuelle.start, this.dateChiffreAffaireMensuelle.end)
            .subscribe(function (CAM) {
            if (!CAM[0].CA) {
                _this.chiffre_affaire_mensuelle = 0;
            }
            else {
                _this.chiffre_affaire_mensuelle = CAM[0].CA;
            }
        });
        /*******************************************************************************************/
        this.initChartJs();
        this.initStripeChartJs();
        /************************** initialisation chart CA*************************************************/
        this.si.GetTurnover(this.year).subscribe(function (d) {
            _this.trnovervalues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            _this.turnover = d;
            d.forEach(function (t, index) {
                _this.trnovervalues[t.Month] = t.CA;
            });
            _this.lineBigDashboardChartData[0].data = _this.trnovervalues;
        });
        /*****************************init CA Cash **********************************************************/
        this.si.GetCashbyMonth(this.year).subscribe(function (cash) {
            _this.lineBigDashboardChartEspeceData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            cash.forEach(function (c) {
                _this.lineBigDashboardChartEspeceData[0].data[c.Month - 1] = c.CA;
            });
        });
        /********************************** initialisation chart Stripe **************************************/
        this.stripeserv.Getcharges().subscribe(function (d) {
            _this.chargeStripe = d.data;
            _this.chargeStripe.forEach(function (cs) {
                cs.created = new Date(cs.created * 1000);
            });
            _this.lineBigDashboardChartStripeData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            _this.chargeStripe.forEach(function (c) {
                if (c.created.getFullYear() === _this.year) {
                    _this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] =
                        _this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] + c.amount;
                }
            });
        });
        /************************** initialisation chart plats vendus*************************************************/
        this.ps.getAll().subscribe(function (plats) {
            plats.forEach(function (p) {
                _this.barChartLabels.push(p.nom);
            });
        });
        this.si.GetStatisticsPlats().subscribe(function (data) {
            _this.barChartLabels.forEach(function (l, i) {
                if (data.filter(function (d) { return d.nom === l; })) {
                    data.forEach(function (da) {
                        if (da.nom === l) {
                            _this.barChartData[0].data[i] = da.quantity;
                            _this.barChartData[1].data[i] = da.total_price;
                        }
                    });
                }
                else {
                    _this.barChartData[0].data[i] = 0;
                    _this.barChartData[1].data[i] = 0;
                }
            });
        });
        /******************************************************************************************************/
        /***************************************************init plats vendus by date********************************/
        this.date.start = this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd');
        this.date.end = this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd');
        this.si.GetStatisticsPlatsByDate(this.date).subscribe(function (data) {
            _this.barChartLabels.forEach(function (l, i) {
                if (data.filter(function (d) { return d.nom === l; })) {
                    data.forEach(function (da) {
                        if (da.nom === l) {
                            _this.barChartData1[0].data[i] = da.quantity;
                            _this.barChartData1[1].data[i] = da.total_price;
                        }
                    });
                }
                else {
                    _this.barChartData1[0].data[i] = 0;
                    _this.barChartData1[1].data[i] = 0;
                }
            });
        });
        /*****************************************************************************************************/
    };
    DashboardComponent.prototype.getTurnover = function (event) {
        var _this = this;
        this.chiffre_affaire_annuel = 0;
        this.si.CAMAnnuel(event).subscribe(function (CA) {
            if (CA[0].CA == null) {
                _this.chiffre_affaire_annuel = 0;
            }
            else {
                _this.chiffre_affaire_annuel = CA[0].CA;
            }
        });
        this.si.GetTurnover(event).subscribe(function (d) {
            _this.trnovervalues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            _this.turnover = d;
            d.forEach(function (t, index) {
                _this.trnovervalues[t.Month] = t.CA;
            });
            _this.lineBigDashboardChartData[0].data = _this.trnovervalues;
        });
        this.stripeserv.Getcharges().subscribe(function (d) {
            _this.chargeStripe = d.data;
            _this.chargeStripe.forEach(function (cs) {
                cs.created = new Date(cs.created * 1000);
            });
            _this.lineBigDashboardChartStripeData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            _this.chargeStripe.forEach(function (c) {
                if (c.created.getFullYear() === event) {
                    _this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] =
                        _this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] + c.amount;
                }
            });
        });
        this.si.GetCashbyMonth(event).subscribe(function (cash) {
            _this.lineBigDashboardChartEspeceData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            cash.forEach(function (c) {
                _this.lineBigDashboardChartEspeceData[0].data[c.Month - 1] = c.CA;
            });
        });
    };
    DashboardComponent.prototype.initChartJs = function () {
        /************************ parametrage chart js ******************************/
        this.chartColor = '#0082CB';
        this.canvas = document.getElementById('bigDashboardChart');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
        this.lineBigDashboardChartData = [
            {
                label: 'chiffre d\'affaire de l\'année' + ' ' + this.year,
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: this.trnovervalues
            }
        ];
        this.lineBigDashboardChartColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: 'rgba(255,255,255,0.41)',
                pointHoverBackgroundColor: '#2c2c2c',
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.lineBigDashboardChartOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#2f2f2f',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            legend: {
                position: 'top',
                fillStyle: '#FFF',
                display: true
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold',
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: 'rgba(255,255,255,0.34)',
                            zeroLineColor: 'transparent'
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold'
                        }
                    }]
            }
        };
        this.lineBigDashboardChartType = 'line';
    };
    DashboardComponent.prototype.initStripeChartJs = function () {
        /************************ parametrage chart js ******************************/
        this.chartColor = '#FF5F00';
        this.canvas = document.getElementById('bigDashboardStripeChart');
        this.ctx = this.canvas.getContext('2d');
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
        this.lineBigDashboardChartStripeData = [
            {
                label: 'chiffre d\'affaire stripe de l\'année' + ' ' + this.year,
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ];
        this.lineBigDashboardChartStripeColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: 'rgba(255,255,255,0.71)',
                pointHoverBackgroundColor: '#2c2c2c',
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartStripeLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.lineBigDashboardChartStripeOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            legend: {
                position: 'bottom',
                fillStyle: '#FFF',
                display: true
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold',
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: 'transparent'
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold'
                        }
                    }]
            }
        };
        this.lineBigDashboardChartStripeType = 'line';
        /************************************ initialisation charjs (paypal)***************************************************************/
        this.chartColor = '#E50695';
        this.canvas = document.getElementById('bigDashboardPaypalChart');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
        this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
        this.lineBigDashboardChartPaypalData = [
            {
                label: 'chiffre d\'affaire paypal de l\'année' + ' ' + this.year,
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ];
        this.lineBigDashboardChartPaypalColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: 'rgba(255,255,255,0.71)',
                pointHoverBackgroundColor: '#2c2c2c',
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartPaypalLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.lineBigDashboardChartPaypalOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            legend: {
                position: 'bottom',
                fillStyle: '#FFF',
                display: true
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold',
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: 'transparent'
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold'
                        }
                    }]
            }
        };
        /************************************ initialisation charjs (espece)***************************************************************/
        this.chartColor = '#FFF';
        this.canvas = document.getElementById('bigDashboardEspeceChart');
        this.lineBigDashboardChartEspeceData = [
            {
                label: 'chiffre d\'affaire espece de l\'année' + ' ' + this.year,
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ];
        this.lineBigDashboardChartEspeceColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: 'rgba(255,255,255,0.71)',
                pointHoverBackgroundColor: '#2c2c2c',
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartEspeceLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.lineBigDashboardChartEspeceOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: 'nearest',
                intersect: 0,
                position: 'nearest'
            },
            legend: {
                position: 'bottom',
                fillStyle: '#FFF',
                display: true
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold',
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: 'transparent'
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent',
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: 'rgb(45,45,45)',
                            fontStyle: 'bold'
                        }
                    }]
            }
        };
    };
    /*******************************************plat vendus*******************************/
    // events
    DashboardComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
    };
    DashboardComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
    };
    DashboardComponent.prototype.getrange = function () {
        var _this = this;
        this.date.start = this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd');
        this.date.end = this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd');
        this.barChartData1[0].data = [];
        this.barChartData1[1].data = [];
        this.si.GetStatisticsPlatsByDate(this.date).subscribe(function (data) {
            _this.barChartLabels.forEach(function (l, i) {
                if (data.filter(function (d) { return d.nom === l; })) {
                    data.forEach(function (da) {
                        if (da.nom === l) {
                            _this.barChartData1[0].data[i] = da.quantity;
                            _this.barChartData1[1].data[i] = da.total_price;
                        }
                    });
                }
                else {
                    _this.barChartData1[0].data[i] = 0;
                    _this.barChartData1[1].data[i] = 0;
                }
            });
        });
    };
    DashboardComponent.prototype.getrangeChiffreAffaireMensuelle = function () {
        var _this = this;
        this.dateChiffreAffaireMensuelle.start = this.datepipe.transform(this.rangeChiffreAffaireMensuelle.value.start, 'yyyy-MM-dd');
        this.dateChiffreAffaireMensuelle.end = this.datepipe.transform(this.rangeChiffreAffaireMensuelle.value.end, 'yyyy-MM-dd');
        this.chiffre_affaire_mensuelle = 0;
        this.si
            .CAMensuel(this.dateChiffreAffaireMensuelle.start, this.dateChiffreAffaireMensuelle.end)
            .subscribe(function (data) {
            if (data[0].CA == null) {
                _this.chiffre_affaire_mensuelle = 0;
            }
            else {
                _this.chiffre_affaire_mensuelle = data[0].CA;
            }
        });
    };
    DashboardComponent.prototype.historic = function (ticket) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.width = '57%';
        dialogConfig.height = '80%';
        dialogConfig.data = ticket;
        var dialogref = this.dialog.open(_components_all_tickets_all_tickets_component__WEBPACK_IMPORTED_MODULE_10__["AllTicketsComponent"], dialogConfig);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"] },
        { type: _Services_StripeService_stripe_service__WEBPACK_IMPORTED_MODULE_6__["StripeService"] },
        { type: _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_7__["PlatService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }
    ]; };
    DashboardComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"],] }]
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_StatisticsService_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"], _Services_StripeService_stripe_service__WEBPACK_IMPORTED_MODULE_6__["StripeService"],
            _Services_platService_plat_service__WEBPACK_IMPORTED_MODULE_7__["PlatService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Qd8X":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Simple Table</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n              <th>\n                Name\n              </th>\n              <th>\n                Country\n              </th>\n              <th>\n                City\n              </th>\n              <th class=\"text-right\">\n                Salary\n              </th>\n              </thead>\n              <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-right\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-right\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-right\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-right\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-right\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $98,615\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Table on Plain Background</h4>\n          <p class=\"category\"> Here is a subtitle for this table</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n              <th>\n                Name\n              </th>\n              <th>\n                Country\n              </th>\n              <th>\n                City\n              </th>\n              <th class=\"text-right\">\n                Salary\n              </th>\n              </thead>\n              <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-right\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-right\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-right\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-right\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-right\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $98,615\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stat_container {\n  padding: 10px;\n  margin-left: 15px;\n}\n\n.title-courbe{\n}\n\n.container-courbe{\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.stat-ca{\n  background: white;\n  padding: 20px;\n  max-width: 99%;\n  float: right;\n  border-radius: 5px;\n}\n\n.datepikerca{\n  z-index: 10;\n  float: right;\n  position: relative;\n  top: -15px;\n}\n\n.stat1 {\n  background-color: rgba(0, 130, 203, 0.18);\n  border: 1px solid #0082CB;\n  border-radius: 10px;\n  max-height: 450px;\n  padding: 3px;\n  width: 99%;\n\n}\n\n.stat2 {\n  background-color: rgba(255, 95, 0, 0.18);\n  border: 1px solid #FF5F00;\n  border-radius: 10px;\n  max-height: 200px;\n  padding: 3px;\n  width: 99%;\n  margin: auto;\n  margin-top: 15px;\n}\n\n.stat3 {\n  background-color: rgba(229, 6, 149, 0.18);\n  border: 1px solid #E50695;\n  border-radius: 10px;\n  max-height: 200px;\n  padding: 3px;\n  margin-top: 15px;\n  width: 99%;\n}\n\n.stat4 {\n  background-color: rgba(0, 0, 0, 0.18);\n  border: 1px solid #000;\n  border-radius: 10px;\n  max-height: 200px;\n  padding: 3px;\n  width: 99%;\n  margin-top: 15px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVOztBQUVaOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0X2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udGl0bGUtY291cmJle1xufVxuXG4uY29udGFpbmVyLWNvdXJiZXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXQtY2F7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDk5JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZGF0ZXBpa2VyY2F7XG4gIHotaW5kZXg6IDEwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5zdGF0MSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTMwLCAyMDMsIDAuMTgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4MkNCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogOTklO1xuXG59XG5cbi5zdGF0MiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5NSwgMCwgMC4xOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjVGMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiA5OSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnN0YXQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDYsIDE0OSwgMC4xOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNTA2OTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5zdGF0NCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiA5OSU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "Va1e":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email address</label>\n                  <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"../assets/img/bg5.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"#\">\n              <img class=\"avatar border-gray\" src=\"../assets/img/mike.jpg\" alt=\"...\">\n              <h5 class=\"title\">Mike Andrew</h5>\n            </a>\n            <p class=\"description\">\n              michael24\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            \"Lamborghini Mercy\n            <br> Your chick she so thirsty\n            <br> I'm in that two seat Lambo\"\n          </p>\n        </div>\n        <hr>\n        <div class=\"button-container\">\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-google-plus-g\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VrDm":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "Va1e");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component.css */ "ku9D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C");
/* harmony import */ var _upgrade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgrade.component.scss */ "xWKu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upgrade',
            template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_upgrade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "jxfC":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ku9D":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _components_commandes_en_atente_commandes_en_atente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/commandes-en-atente/commandes-en-atente.component */ "xo2U");
/* harmony import */ var _components_commandes_en_cours_commandes_en_cours_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/commandes-en-cours/commandes-en-cours.component */ "O/lb");
/* harmony import */ var _components_commande_termine_commande_termine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/commande-termine/commande-termine.component */ "H3GW");
/* harmony import */ var _components_commandes_archives_commandes_archives_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/commandes-archives/commandes-archives.component */ "MHFO");
/* harmony import */ var _routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routeGuard/dashboard.guard */ "xBq7");
/* harmony import */ var _components_ingredient_management_ingredient_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ingredient-management/ingredient-management.component */ "X7SD");
/* harmony import */ var _components_modificateur_management_modificateur_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modificateur-management/modificateur-management.component */ "J33c");
/* harmony import */ var _components_plat_management_plat_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/plat-management/plat-management.component */ "9tzZ");
/* harmony import */ var _components_categorie_management_categorie_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/categorie-management/categorie-management.component */ "DQiH");
/* harmony import */ var _components_restaurant_info_restaurant_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/restaurant-info/restaurant-info.component */ "nDzE");
/* harmony import */ var _components_restaurant_info_management_restaurant_info_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/restaurant-info-management/restaurant-info-management.component */ "pHfF");
/* harmony import */ var _components_work_times_work_times_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/work-times/work-times.component */ "Efqd");
/* harmony import */ var _components_reduction_management_reduction_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reduction-management/reduction-management.component */ "s5oJ");
/* harmony import */ var _components_schedule_and_holidays_management_schedule_and_holidays_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/schedule-and-holidays-management/schedule-and-holidays-management.component */ "gX2C");
/* harmony import */ var _components_offre_management_offre_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/offre-management/offre-management.component */ "sBWC");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/statistics/statistics.component */ "ytpy");
/* harmony import */ var _components_printer_config_printer_config_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/printer-config/printer-config.component */ "H0lF");



















var AdminLayoutRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'commandes-en-atente', component: _components_commandes_en_atente_commandes_en_atente_component__WEBPACK_IMPORTED_MODULE_2__["CommandesEnAtenteComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'commandes-en-cours', component: _components_commandes_en_cours_commandes_en_cours_component__WEBPACK_IMPORTED_MODULE_3__["CommandesEnCoursComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'commandes-termine', component: _components_commande_termine_commande_termine_component__WEBPACK_IMPORTED_MODULE_4__["CommandeTermineComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'commandes-archive', component: _components_commandes_archives_commandes_archives_component__WEBPACK_IMPORTED_MODULE_5__["CommandesArchivesComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'ingredient', component: _components_ingredient_management_ingredient_management_component__WEBPACK_IMPORTED_MODULE_7__["IngredientManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'modificateur', component: _components_modificateur_management_modificateur_management_component__WEBPACK_IMPORTED_MODULE_8__["ModificateurManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'plat', component: _components_plat_management_plat_management_component__WEBPACK_IMPORTED_MODULE_9__["PlatManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'categorie', component: _components_categorie_management_categorie_management_component__WEBPACK_IMPORTED_MODULE_10__["CategorieManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'restaurant', component: _components_restaurant_info_restaurant_info_component__WEBPACK_IMPORTED_MODULE_11__["RestaurantInfoComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'upgrade', component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_1__["UpgradeComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'restaurantmanagement', component: _components_restaurant_info_management_restaurant_info_management_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantInfoManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'worktime', component: _components_work_times_work_times_component__WEBPACK_IMPORTED_MODULE_13__["WorkTimesComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'reduction', component: _components_reduction_management_reduction_management_component__WEBPACK_IMPORTED_MODULE_14__["ReductionManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'schedle', component: _components_schedule_and_holidays_management_schedule_and_holidays_management_component__WEBPACK_IMPORTED_MODULE_15__["ScheduleAndHolidaysManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'offres', component: _components_offre_management_offre_management_component__WEBPACK_IMPORTED_MODULE_16__["OffreManagementComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'statistics', component: _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] },
    { path: 'printerconfig', component: _components_printer_config_printer_config_component__WEBPACK_IMPORTED_MODULE_18__["PrinterConfigComponent"], canActivate: [_routeGuard_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]] }
];


/***/ }),

/***/ "smLI":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-list.component.html */ "Qd8X");
/* harmony import */ var _table_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-list.component.css */ "jxfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.ctorParameters = function () { return []; };
    TableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-table-list',
            template: _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_table_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">100 Awesome Nucleo Icons</h5>\n          <p class=\"category\">Handcrafted by our friends from\n            <a href=\"https://nucleoapp.com/?ref=1712\">NucleoApp</a>\n          </p>\n        </div>\n        <div class=\"card-body all-icons\">\n          <div class=\"row\">\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                <p>arrows-1_cloud-download-93</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                <p>arrows-1_cloud-upload-94</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                <p>arrows-1_minimal-down</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                <p>arrows-1_minimal-left</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                <p>arrows-1_minimal-right</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                <p>arrows-1_minimal-up</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                <p>arrows-1_refresh-69</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons arrows-1_share-66 \"></i>\n                <p>arrows-1_share-66</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_badge\"></i>\n                <p>business_badge</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_bank\"></i>\n                <p>business_bank</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_briefcase-24\"></i>\n                <p>business_briefcase-24</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_bulb-63\"></i>\n                <p>business_bulb-63</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                <p>business_chart-bar-32</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                <p>business_chart-pie-36</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_globe\"></i>\n                <p>business_globe</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons business_money-coins\"></i>\n                <p>business_money-coins</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                <p>clothes_tie-bow</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_app\"></i>\n                <p>design_app</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                <p>design_bullet-list-67</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_image\"></i>\n                <p>design_image</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_palette\"></i>\n                <p>design_palette</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_scissors\"></i>\n                <p>design_scissors</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design_vector\"></i>\n                <p>design_vector</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design-2_html5\"></i>\n                <p>design-2_html5</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                <p>design-2_ruler-pencil</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                <p>emoticons_satisfied</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_box\"></i>\n                <p>files_box</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_paper\"></i>\n                <p>files_paper</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons files_single-copy-04\"></i>\n                <p>files_single-copy-04</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons health_ambulance\"></i>\n                <p>health_ambulance</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons loader_gear\"></i>\n                <p>loader_gear</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons loader_refresh\"></i>\n                <p>loader_refresh</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_bookmark\"></i>\n                <p>location_bookmark</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_compass-05\"></i>\n                <p>location_compass-05</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_map-big\"></i>\n                <p>location_map-big</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_pin\"></i>\n                <p>location_pin</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons location_world\"></i>\n                <p>location_world</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_album\"></i>\n                <p>media-1_album</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-pause\"></i>\n                <p>media-1_button-pause</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-play\"></i>\n                <p>media-1_button-play</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_button-power\"></i>\n                <p>media-1_button-power</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                <p>media-1_camera-compact</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-2_note-03\"></i>\n                <p>media-2_note-03</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                <p>media-2_sound-wave</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_diamond\"></i>\n                <p>objects_diamond</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_globe\"></i>\n                <p>objects_globe</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_key-25\"></i>\n                <p>objects_key-25</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_planet\"></i>\n                <p>objects_planet</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_spaceship\"></i>\n                <p>objects_spaceship</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_support-17\"></i>\n                <p>objects_support-17</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                <p>objects_umbrella-13</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                <p>education_agenda-bookmark</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_atom\"></i>\n                <p>education_atom</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_glasses\"></i>\n                <p>education_glasses</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_hat\"></i>\n                <p>education_hat</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons education_paper\"></i>\n                <p>education_paper</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_bag-16\"></i>\n                <p>shopping_bag-16</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_basket\"></i>\n                <p>shopping_basket</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_box\"></i>\n                <p>shopping_box</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                <p>shopping_cart-simple</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_credit-card\"></i>\n                <p>shopping_credit-card</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                <p>shopping_delivery-fast</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_shop\"></i>\n                <p>shopping_shop</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons shopping_tag-content\"></i>\n                <p>shopping_tag-content</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons sport_trophy\"></i>\n                <p>sport_trophy</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons sport_user-run\"></i>\n                <p>sport_user-run</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_controller-modern\"></i>\n                <p>tech_controller-modern</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_headphones\"></i>\n                <p>tech_headphones</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_laptop\"></i>\n                <p>tech_laptop</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_mobile\"></i>\n                <p>tech_mobile</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_tablet\"></i>\n                <p>tech_tablet</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_tv\"></i>\n                <p>tech_tv</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons tech_watch-time\"></i>\n                <p>tech_watch-time</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_align-center\"></i>\n                <p>text_align-center</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_align-left\"></i>\n                <p>text_align-left</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_bold\"></i>\n                <p>text_bold</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons text_caps-small\"></i>\n                <p>text_caps-small</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons gestures_tap-01\"></i>\n                <p>gestures_tap-01</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                <p>transportation_air-baloon</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                <p>transportation_bus-front-12</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons travel_info\"></i>\n                <p>travel_info</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons travel_istanbul\"></i>\n                <p>travel_istanbul</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                <p>ui-1_bell-53</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_check\"></i>\n                <p>ui-1_check</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                <p>ui-1_calendar-60</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                <p>ui-1_lock-circle-open</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_send\"></i>\n                <p>ui-1_send</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                <p>ui-1_settings-gear-63</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                <p>ui-1_simple-add</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                <p>ui-1_simple-delete</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                <p>ui-1_simple-remove</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                <p>ui-1_zoom-bold</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                <p>ui-2_chat-round</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                <p>ui-2_favourite-28</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_like\"></i>\n                <p>ui-2_like</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                <p>ui-2_settings-90</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                <p>ui-2_time-alarm</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons ui-1_email-85\"></i>\n                <p>ui-1_email-85</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons users_circle-08\"></i>\n                <p>users_circle-08</p>\n              </div>\n            </div>\n            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n              <div class=\"font-icon-detail\">\n                <i class=\"now-ui-icons users_single-02\"></i>\n                <p>users_single-02</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ");
/* harmony import */ var _typography_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography.component.css */ "Wwls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_typography_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv");
/* harmony import */ var _maps_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps.component.css */ "YpYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent.ctorParameters = function () { return []; };
    MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-maps',
            template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_maps_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "xWKu":
/*!************************************************!*\
  !*** ./src/app/upgrade/upgrade.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map