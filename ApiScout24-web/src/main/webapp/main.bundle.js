webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JsonService = (function () {
    function JsonService(_http) {
        this._http = _http;
    }
    JsonService.prototype.getJSON = function (url) {
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    JsonService.prototype.postJSON = function (url, body) {
        return this._http.post(url, JSON.stringify(body))
            .catch(this.handleError);
    };
    JsonService.prototype.deleteJSON = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', '*');
        return this._http.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            body: JSON.stringify(body),
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers
        }))
            .catch(this.handleError);
    };
    JsonService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__["Observable"].throw(error.json().error || 'Server error');
    };
    JsonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], JsonService);
    return JsonService;
    var _a;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/json-service.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreService = (function () {
    function StoreService() {
        this.serverName = 'https://tte9.pliing.com/ApiScout24-web'; // https://tte9.pliing.com/ApiScout24-web https://tte9.pliing.com/ApiSocut24-web http://rd001:32826/ApiSocut24-web/FeedServlet?marketId=1  http://rd001:32826/ApiSocut24-web
        this.imageServerUrl = 'https://admin.pliing.com/AdAssetsService-web';
        this.adServerUrl = "https://admin.pliing.com/BanGen"; // ADMIN
        this.expandSidebar = true;
        this.showMarketOptions = false;
        this.createAdDiv = false;
        this.adListDiv = false;
        this.adFormatsToCreate = [{ "idAdFormat": 1, "templateImg": "https://mds.pliing.com/sync/libs/scm/transformer.png", "name": "Transformer", "width": "250", "height": "300", "idAdFormatType": 1 }];
        this.adList = [];
        this.showLoadingIcon = true;
        this.showComponent = false;
        this.showFeedEmptyError = false;
        this.selectedDataContent = [];
        this.showData = false;
    }
    StoreService.prototype.addEditMarker = function (marketId) {
        var edit = document.getElementById('edit-' + marketId);
        edit.classList.remove('hidden-obj');
    };
    StoreService.prototype.heightlightAd = function () {
        var feedTab = document.getElementById('feedIndicator');
        var adTab = document.getElementById('adsIndicator');
        console.log(adTab);
        setTimeout(function () {
            if (feedTab !== null) {
                feedTab.classList.remove('active-page');
            }
            if (adTab !== null) {
                adTab.classList.add('active-page');
            }
        }, 500);
    };
    StoreService.prototype.heightlightFeed = function () {
        var feedTab = document.getElementById('feedIndicator');
        var adTab = document.getElementById('adsIndicator');
        setTimeout(function () {
            if (feedTab !== null) {
                feedTab.classList.add('active-page');
            }
            if (adTab !== null) {
                adTab.classList.remove('active-page');
            }
        }, 500);
    };
    StoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], StoreService);
    return StoreService;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/store.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_service_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(json, router, store) {
        this.json = json;
        this.router = router;
        this.store = store;
        this.title = 'app works!';
        this.showFeedEmptyError = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _localThis = this;
        setTimeout(function () {
            _localThis.store.userName = localStorage.getItem("username");
        }, 500);
    };
    AppComponent.prototype.createMarket = function () {
        this.store.expandSidebar = false;
        this.router.navigate(['/createmarket']);
    };
    AppComponent.prototype.getMarketContent = function (market) {
        var _this = this;
        this.store.objectId = '';
        this.store.showData = false;
        this.store.showFeedEmptyError = false; // Resets the error message "you must first build your feed before creating an ad"
        this.store.showComponent = false;
        this.store.showLoadingIcon = true;
        this.store.marketId = market.id;
        this.store.marketName = market.name;
        this.store.marketDescription = market.description;
        this.store.selectedObjects = [];
        this.store.selectedDataContent = [];
        // Highlight feedtab
        var feedTab = document.getElementById('feedIndicator');
        var adTab = document.getElementById('adsIndicator');
        if (feedTab && adTab !== null) {
            feedTab.classList.add('active-page');
            adTab.classList.remove('active-page');
        }
        this.store.markets.forEach(function (market) {
            var removeedit = document.getElementById('edit-' + market.id);
            if (removeedit !== null) {
                removeedit.classList.add('hidden-obj');
            }
        });
        this.store.market = market;
        var edit = document.getElementById('edit-' + market.id);
        /*edit.classList.remove('hidden-obj');*/
        this.json.getJSON(this.store.serverName + '/FeedServlet?marketId=' + this.store.marketId)
            .subscribe(function (response) {
            _this.store.selectedDataContent = response;
            _this.store.selectedDataContent.forEach(function (elm, index) {
                if (elm["type"] === undefined) {
                    var img = elm["adpicture"]["href"]; /*["href"]*/
                    elm["adpicture"]["href"] = img.replace("%WIDTH%", "278").replace("%HEIGHT%", "125"); /*["href"]*/
                    elm["pricem2"] = Math.round((elm["price"]["value"] / elm["livingspace"]));
                }
            });
            _this.json.getJSON(_this.store.serverName + '/Object?marketId=' + _this.store.marketId)
                .subscribe(function (response) {
                if (response.length > 0) {
                    _this.store.selectedObjects = response[0]['json'];
                    _this.store.selectedObjects = JSON.parse(_this.store.selectedObjects);
                }
                _this.store.showComponent = true;
                _this.store.showLoadingIcon = false;
                _this.router.navigate(['/getcontent', _this.store.market.id]);
            });
        });
    };
    AppComponent.prototype.getMarketOption = function (option) {
        var _this = this;
        if (option === 'ads') {
            this.store.showComponent = false;
            this.store.showLoadingIcon = true;
            this.store.createAdDiv = false;
            this.store.adListDiv = false;
            this.json.getJSON(this.store.serverName + '/FeedServlet?marketId=' + this.store.marketId)
                .subscribe(function (response) {
                var feedTab = document.getElementById('feedIndicator');
                var adTab = document.getElementById('adsIndicator');
                feedTab.classList.remove('active-page');
                adTab.classList.add('active-page');
                if (response.length < 1) {
                    _this.store.showFeedEmptyError = true;
                    _this.router.navigate(['/ads', _this.store.marketId]);
                }
                else {
                    _this.json.getJSON(_this.store.adServerUrl + "/getBannerList?publisherId=" + 89 + "&tag=Scout24-custom&tag=" + _this.store.marketId)
                        .subscribe(function (response) {
                        _this.store.adList = response;
                        if (_this.store.adList.length > 0) {
                            _this.store.noAdWarning = false;
                        }
                        var _localThis = _this;
                        _this.store.adList.forEach(function (obj) {
                            obj["formatName"] = _localThis.store.adFormatsToCreate[0].name;
                            obj["launchReturnJson"] = JSON.parse(obj["launchReturnJson"]);
                            // Find width height from loadscript, if not exist use width height that is provided otherwise use width height from script
                            var loadScript = obj["launchReturnJson"]["loadScript"];
                            // Parse out width and height from loadScript atm only the transformer has this value in the loadscript
                            var pattern = /(\{.+?})/g; // parse the object containing the width and height
                            if (loadScript !== undefined && loadScript !== null && loadScript !== "undefined") {
                                var res = pattern.exec(loadScript);
                                if (res !== null && res !== undefined) {
                                    var result = res[0]; // pick the object that has been parsed
                                    /*  pattern = /(\'.+?')/g; // pattern for obtaining the width and height from the object
                                     const values = pattern.exec(result); // parse the object for obtaining width and height*/
                                    /*  console.log(result);*/
                                    /*   if (values !== null || values !== undefined) {
                                     /!*   console.log(values);*!/
                                     obj["width"] = values[0].replace(/\'/g,""); // set the width, parses the '' that surrounds the value
                                     obj["height"] = values[1].replace(/\'/g,""); // set the height
                                     } */
                                    var resSplit = result.split("'");
                                    if (resSplit !== null || resSplit !== undefined) {
                                        /*   console.log(values);*/
                                        obj["width"] = resSplit[1]; // set the width, parses the '' that surrounds the value
                                        obj["height"] = resSplit[3]; // set the height
                                    }
                                }
                            }
                        });
                        /*If no ads has been created show warning (info) message, otherwise show the created ads*/
                        if (_this.store.adList.length < 1) {
                            _this.store.noAdWarning = true;
                        }
                        else {
                            _this.store.adListDiv = true;
                        }
                        _this.store.showLoadingIcon = false;
                        _this.store.showComponent = true;
                        _this.router.navigate(['/ads', _this.store.marketId]);
                    });
                }
            });
        }
        if (option === 'feed') {
            this.router.navigate(['/getcontent', this.store.marketId]);
        }
    };
    AppComponent.prototype.editMarket = function () {
    };
    AppComponent.prototype.getMarkets = function () {
        var _this = this;
        this.json.getJSON(this.store.serverName + '/Market')
            .subscribe(function (response) {
            _this.store.markets = response;
        });
    };
    AppComponent.prototype.heightlightAd = function () {
        setTimeout(function () {
            var feedTab = document.getElementById('feedIndicator');
            var adTab = document.getElementById('adsIndicator');
            if (feedTab !== null) {
                feedTab.classList.remove('active-page');
            }
            if (adTab !== null) {
                adTab.classList.add('active-page');
            }
        }, 500);
    };
    AppComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(690),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__json_service_service__["a" /* JsonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__json_service_service__["a" /* JsonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__store_service__["a" /* StoreService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 396;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(514);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/main.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_service_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__getcontent_getcontent_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__createmarket_createmarket_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editmarket_editmarket_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dragula__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__getcontent_ads_ads_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_pagination__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/*
 import {ROUTES} from "./app.router";
 */
var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard/getcontent/:id', component: __WEBPACK_IMPORTED_MODULE_8__getcontent_getcontent_component__["a" /* GetcontentComponent */] },
    { path: 'getcontent/:id', redirectTo: 'dashboard/getcontent/:id', pathMatch: 'full' },
    { path: 'dashboard/createmarket', component: __WEBPACK_IMPORTED_MODULE_9__createmarket_createmarket_component__["a" /* CreatemarketComponent */] },
    { path: 'createmarket', redirectTo: 'dashboard/createmarket', pathMatch: 'full' },
    { path: 'dashboard/ads/:id', component: __WEBPACK_IMPORTED_MODULE_12__getcontent_ads_ads_component__["a" /* AdsComponent */] },
    { path: 'ads/:id', redirectTo: 'dashboard/ads/:id', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__getcontent_getcontent_component__["a" /* GetcontentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__createmarket_createmarket_component__["a" /* CreatemarketComponent */],
                __WEBPACK_IMPORTED_MODULE_10__editmarket_editmarket_component__["a" /* EditmarketComponent */],
                __WEBPACK_IMPORTED_MODULE_12__getcontent_ads_ads_component__["a" /* AdsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_11_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__["Ng2PaginationModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__json_service_service__["a" /* JsonService */], __WEBPACK_IMPORTED_MODULE_7__store_service__["a" /* StoreService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/app.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_service_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatemarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatemarketComponent = (function () {
    function CreatemarketComponent(json, store, router) {
        this.json = json;
        this.store = store;
        this.router = router;
        this.showComponent = false;
        this.showLoadingIcon = true;
        this.marketnameError = false;
        this.marketdescriptionError = false;
    }
    CreatemarketComponent.prototype.ngOnInit = function () {
        this.showLoadingIcon = false;
        this.showComponent = true;
        if (this.store.expandSidebar) {
            var sidebar = document.getElementById('sidebar-markets');
            sidebar.click();
        }
    };
    CreatemarketComponent.prototype.updateMetadata = function () {
        if (this.marketname !== undefined || this.marketname !== '') {
            this.marketnameError = false;
        }
        if (this.marketdescription !== undefined || this.marketdescription !== '') {
            this.marketdescriptionError = false;
        }
    };
    CreatemarketComponent.prototype.save = function () {
        var _this = this;
        var save = false;
        if (this.marketname === undefined || this.marketname === '') {
            this.marketnameError = true;
            save = false;
        }
        else {
            save = true;
        }
        if (this.marketdescription === undefined || this.marketdescription === '') {
            this.marketdescriptionError = true;
            save = false;
        }
        else {
            save = true;
        }
        if (save) {
            var obj = {
                'name': this.marketname,
                'description': this.marketdescription };
            this.json.postJSON(this.store.serverName + '/Market', obj)
                .subscribe(function (response) {
                response = JSON.parse(response['_body']);
                _this.store.market = response[0];
                _this.json.getJSON(_this.store.serverName + '/Market')
                    .subscribe(function (response) {
                    console.log(response);
                    _this.store.markets = response;
                    _this.showComponent = false;
                    _this.showLoadingIcon = true;
                    var _localThis = _this;
                    /* setTimeout(function () {
                       const editmarket: any = document.getElementById('edit-' + _localThis.store.marketId);
                       editmarket.classList.remove('hidden-obj');*/
                    _localThis.router.navigate(['/getcontent', _localThis.store.market.id]);
                    /*},500);*/
                });
            });
        }
    };
    CreatemarketComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createmarket',
            template: __webpack_require__(691),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__json_service_service__["a" /* JsonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__json_service_service__["a" /* JsonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CreatemarketComponent);
    return CreatemarketComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/createmarket.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditmarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditmarketComponent = (function () {
    function EditmarketComponent() {
    }
    EditmarketComponent.prototype.ngOnInit = function () {
    };
    EditmarketComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editmarket',
            template: __webpack_require__(692),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditmarketComponent);
    return EditmarketComponent;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/editmarket.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_service_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdsComponent = (function () {
    function AdsComponent(store, app, activatedRoute, json) {
        this.store = store;
        this.app = app;
        this.activatedRoute = activatedRoute;
        this.json = json;
        this.adListDivTable = true;
        this.pageLimit = 10;
        this.pageLimitArray = ["10", "20", "30"];
        this.showPreviewPopup = false;
        this.showmetadata = false;
        this.showResponsiveDiv = false;
        this.showAdNameWarning = false;
        this.showAdWidthWarning = false;
        this.showAdHeightWarning = false;
        this.showScriptDiv = false;
        this.showPxWidth = false;
        this.showPxHeight = false;
    }
    AdsComponent.prototype.ngAfterViewInit = function () {
        /*this.store.heightlightAd();
        console.log(document.getElementById('adsInidicator'));*/
        this.store.showComponent = true;
        this.store.showLoadingIcon = false;
        this.app.heightlightAd();
    };
    AdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.showMarketOptions = true;
        this.store.showComponent = false;
        this.store.showLoadingIcon = true;
        if (this.store.market === undefined) {
            var sidebar = document.getElementById('sidebar-markets');
            sidebar.click();
            this.activatedRoute.params.subscribe(function (params) {
                _this.store.marketId = params['id'];
                _this.json.getJSON(_this.store.serverName + '/FeedServlet?marketId=' + _this.store.marketId)
                    .subscribe(function (response) {
                    if (response.length < 1) {
                        _this.store.showFeedEmptyError = true;
                    }
                    else {
                        _this.json.getJSON(_this.store.serverName + '/Market?marketId=' + _this.store.marketId)
                            .subscribe(function (response) {
                            _this.store.market = response[0];
                            _this.store.marketName = _this.store.market.name;
                            _this.store.marketDescription = _this.store.market.description;
                            _this.json.getJSON(_this.store.adServerUrl + "/getBannerList?publisherId=" + 89 + "&tag=Scout24-custom&tag=" + _this.store.marketId)
                                .subscribe(function (response) {
                                _this.store.adList = response;
                                console.log(response);
                                if (_this.store.adList.length > 0) {
                                    _this.store.adListDiv = true;
                                    _this.store.noAdWarning = false;
                                }
                                else {
                                    _this.store.noAdWarning = true;
                                }
                                var _localThis = _this;
                                _this.store.adList.forEach(function (obj) {
                                    obj["formatName"] = _localThis.store.adFormatsToCreate[0].name;
                                    obj["launchReturnJson"] = JSON.parse(obj["launchReturnJson"]);
                                    // Find width height from loadscript, if not exist use width height that is provided otherwise use width height from script
                                    var loadScript = obj["launchReturnJson"]["loadScript"];
                                    // Parse out width and height from loadScript atm only the transformer has this value in the loadscript
                                    var pattern = /(\{.+?})/g; // parse the object containing the width and height
                                    if (loadScript !== undefined && loadScript !== null && loadScript !== "undefined") {
                                        var res = pattern.exec(loadScript);
                                        if (res !== null && res !== undefined) {
                                            var result = res[0]; // pick the object that has been parsed
                                            /*  pattern = /(\'.+?')/g; // pattern for obtaining the width and height from the object
                                              const values = pattern.exec(result); // parse the object for obtaining width and height*/
                                            /*  console.log(result);*/
                                            /*   if (values !== null || values !== undefined) {
                                              /!*   console.log(values);*!/
                                                 obj["width"] = values[0].replace(/\'/g,""); // set the width, parses the '' that surrounds the value
                                                 obj["height"] = values[1].replace(/\'/g,""); // set the height
                                               } */
                                            var resSplit = result.split("'");
                                            if (resSplit !== null || resSplit !== undefined) {
                                                /*   console.log(values);*/
                                                obj["width"] = resSplit[1]; // set the width, parses the '' that surrounds the value
                                                obj["height"] = resSplit[3]; // set the height
                                            }
                                        }
                                    }
                                });
                                _this.store.showLoadingIcon = false;
                                _this.store.showComponent = true;
                            });
                        });
                    }
                });
            });
        }
    };
    AdsComponent.prototype.getAds = function (mark) {
        var _this = this;
        this.json.getJSON(this.store.adServerUrl + "/getBannerList?publisherId=" + 89 + "&tag=Scout24-custom&tag=" + this.store.marketId)
            .subscribe(function (response) {
            _this.store.adList = response;
            if (_this.store.adList.length > 0) {
                _this.store.noAdWarning = false;
            }
            var _localThis = _this;
            _this.store.adList.forEach(function (obj) {
                obj["formatName"] = _localThis.store.adFormatsToCreate[0].name;
                obj["launchReturnJson"] = JSON.parse(obj["launchReturnJson"]);
                // Find width height from loadscript, if not exist use width height that is provided otherwise use width height from script
                var loadScript = obj["launchReturnJson"]["loadScript"];
                // Parse out width and height from loadScript atm only the transformer has this value in the loadscript
                var pattern = /(\{.+?})/g; // parse the object containing the width and height
                if (loadScript !== undefined && loadScript !== null && loadScript !== "undefined") {
                    var res = pattern.exec(loadScript);
                    if (res !== null && res !== undefined) {
                        var result = res[0]; // pick the object that has been parsed
                        pattern = /(\'.+?')/g; // pattern for obtaining the width and height from the object
                        var values = pattern.exec(result); // parse the object for obtaining width and height
                        if (values !== null || values !== undefined) {
                            obj["width"] = values[0].replace(/\'/g, ""); // set the width, parses the '' that surrounds the value
                            obj["height"] = values[1].replace(/\'/g, ""); // set the height
                        }
                    }
                }
            });
            if (mark) {
                _this.hidePreviewPopup();
                _this.store.createAdDiv = false;
                _this.store.adListDiv = true;
                var _localThis_1 = _this; // MOVE THIS PART TO GETADS(); SEND A PARAMTER GETADS(TRUE) IF TRUE IT SHOULD HIGHTLIGHT OTHERWISE NOT
                setTimeout(function () {
                    var tr = document.getElementById(_localThis_1.bannerId);
                    if (tr !== null) {
                        tr.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                    }
                }, 1500);
            }
            _this.initialState = _this.store.adList;
            /*If no ads has been created show warning (info) message, otherwise show the created ads*/
            if (_this.store.adList.length < 1) {
                _this.store.noAdWarning = true;
            }
            else {
                _this.store.adListDiv = true;
            }
        });
    };
    AdsComponent.prototype.create = function () {
        this.store.adListDiv = false;
        this.store.noAdWarning = false;
        this.store.createAdDiv = true;
    };
    AdsComponent.prototype.validateAdName = function () {
        console.log(this.adName);
        if (this.adName !== undefined && this.adName !== "") {
            this.showAdNameWarning = false;
        }
    };
    AdsComponent.prototype.getAdsByFormat = function (format) {
        var _this = this;
        if (format.idAdFormatType !== undefined) {
            if (format.idAdFormatType === 1) {
                this.showResponsiveDiv = true;
            }
            else {
                this.showResponsiveDiv = false;
            }
        }
        else {
            this.showResponsiveDiv = false;
        }
        var shadow = document.getElementById("card-popup-shadow");
        shadow.classList.add("is-visible");
        shadow.style.visibility = "visible";
        var formatSize = format.width.toString() + "x" + format.height.toString();
        if (format.name.toLowerCase() === "transformer") {
            formatSize = "100%x100%";
            this.width = "100%";
            this.height = "100%";
        }
        if (this.showmetadata) {
            this.hidePreviewPopup();
        }
        this.showmetadata = true;
        this.format = format;
        this.json.getJSON(this.store.adServerUrl + "/getBannerList?publisherId=" + 89 + "&tag=SCOUT24-Custom%20Template&tag=" + format.name + "&tag=" + formatSize) // &width=" + width + "&height=" + height
            .subscribe(function (response) {
            _this.loadScript = JSON.parse(response[0]["launchReturnJson"])["loadScript"];
            _this.bannerId = response[0]["bannerId"];
            var obj = {
                "bannerId": _this.bannerId,
                /*"service": "cacheTime<=>0<;>url<=>http:\/\/test.pliing.com\/ApiScout24-web\/FeedServlet?marketId=" + this.store.marketId + "&lazyLoad=yes"*/
                "service": "cacheTime<=>0<;>url<=>https:\/\/tte9.pliing.com\/ApiScout24-web\/FeedServlet?marketId=" + _this.store.marketId + "&lazyLoad=yes" // lazyLoad=yes
            };
            console.log(obj);
            _this.showPreviewPopup = true;
            // Updates ad to the service given in obj
            _this.json.postJSON(_this.store.adServerUrl + "/updateServiceServlet", obj)
                .subscribe(function (response) {
                var iframe = document.getElementById("adIframe");
                iframe.style.visibility = "visible";
                iframe.setAttribute("srcdoc", _this.loadScript);
            });
        });
    };
    AdsComponent.prototype.hidePreviewPopup = function () {
        this.adName = "";
        this.adClickTracker = "";
        this.adImpTracker = "";
        this.width = undefined;
        this.height = undefined;
        var shadow = document.getElementById("card-popup-shadow");
        shadow.classList.remove("is-visible");
        shadow.style.visibility = "hidden";
        this.showPreviewPopup = false;
        var radio = document.getElementById(this.format.idAdFormat);
        if (radio !== null) {
            radio.checked = false;
        }
    };
    AdsComponent.prototype.createAd = function (format) {
        if (this.showResponsiveDiv) {
            if (this.adName !== undefined && this.adName !== "" && this.width !== undefined && this.width !== "" && this.height !== undefined && this.height !== "") {
                this.duplicateAd(this.bannerId);
            }
            else {
                if (this.adName === undefined || this.adName === "") {
                    this.showAdNameWarning = true;
                }
                if (this.height === undefined || this.height === "") {
                    this.showAdHeightWarning = true;
                    var inp = document.getElementById("adHeightInput");
                    inp.style.border = "1px solid red";
                }
                if (this.width === undefined || this.width === "") {
                    this.showAdWidthWarning = true;
                    var inp = document.getElementById("adWidthInput");
                    inp.style.border = "1px solid red";
                }
            }
        }
        else {
            if (this.adName !== undefined && this.adName !== "") {
                this.duplicateAd(this.bannerId);
            }
            else {
                if (this.adName === undefined || this.adName === "") {
                    this.showAdNameWarning = true;
                }
            }
        }
    };
    AdsComponent.prototype.duplicateAd = function (bannerId) {
        var _this = this;
        if (this.width !== undefined) {
            this.format.width = this.width;
        }
        if (this.height !== undefined) {
            this.format.height = this.height;
        }
        var obj = {
            "bannerId": bannerId,
            "name": this.adName,
            "format": this.format.name,
            "width": this.format.width,
            "height": this.format.height,
            "publisher": 89,
            "service": "cacheTime<=>60<;>url<=>https:\/\/tte9.pliing.com\/ApiScout24-web\/FeedServlet?marketId=" + this.store.marketId + "&lazyLoad=yes",
            "tags": ["Scout24-custom", this.format.name, this.store.marketId]
        };
        if (this.adClickTracker !== undefined) {
            obj["adClickTracker"] = this.adClickTracker;
            obj["prefix"] = "your_click_prefix";
        }
        if (this.adImpTracker !== undefined) {
            obj["adImpTracker"] = "\"" + this.adImpTracker + "\"";
        }
        this.json.postJSON(this.store.adServerUrl + "/createBannerLEServlet", obj)
            .subscribe(function (response) {
            var body = JSON.parse(response["_body"]);
            _this.bannerId = body["bannerId"];
            _this.showmetadata = false;
            _this.store.createAdDiv = false;
            _this.getAds(true);
        });
    };
    AdsComponent.prototype.showScript = function (script) {
        var shadow = document.getElementById("card-popup-shadow");
        shadow.classList.add("is-visible");
        shadow.style.visibility = "visible";
        this.showScriptDiv = true;
        this.showLoadScript = script;
    };
    AdsComponent.prototype.closeScript = function () {
        var shadow = document.getElementById("card-popup-shadow");
        shadow.classList.remove("is-visible");
        shadow.style.visibility = "hidden";
        this.showScriptDiv = false;
        this.showLoadScript = "";
        this.copyMsg = "";
    };
    AdsComponent.prototype.copyScript = function () {
        this.copySuccess = false;
        this.copyFail = false;
        var textarea = document.getElementById("scriptTextArea");
        var msg = document.getElementById("copyMsg");
        textarea.select();
        try {
            var success = document.execCommand("copy");
            if (success) {
                this.copyMsg = "Script copied";
                msg.style.color = "#8BC34A";
                this.copySuccess = true;
            }
            else {
                this.copyMsg = "Copy failed";
                msg.style.color = "#F44336";
                this.copyFail = true;
            }
        }
        catch (err) {
            this.copyMsg = "Unsupported browser!";
            msg.style.color = "#F44336";
            this.copyFail = true;
        }
    };
    AdsComponent.prototype.setResponseWidth = function () {
        this.showAdWidthWarning = false;
        var inp = document.getElementById("adWidthInput");
        inp.style.border = "";
        this.showPxWidth = false;
        var input = document.getElementById("adWidthInput");
        var radio = document.getElementById("adWidthRadio");
        input.disabled = true;
        radio.checked = false;
        this.width = "100%";
    };
    AdsComponent.prototype.setResponseHeight = function () {
        this.showAdHeightWarning = false;
        var inp = document.getElementById("adHeightInput");
        inp.style.border = "";
        this.showPxHeight = false;
        var input = document.getElementById("adHeightInput");
        var radio = document.getElementById("adHeightRadio");
        input.disabled = true;
        radio.checked = false;
        this.height = "100%";
    };
    AdsComponent.prototype.enableWidthInput = function () {
        this.showPxWidth = true;
        this.width = this.auxWidth;
        var input = document.getElementById("adWidthInput");
        var radio = document.getElementById("responsiveWidthRadio");
        input.disabled = false;
        radio.checked = false;
    };
    AdsComponent.prototype.enableHeightInput = function () {
        this.showPxHeight = true;
        this.height = this.auxHeight;
        var input = document.getElementById("adHeightInput");
        var radio = document.getElementById("responsiveHeightRadio");
        input.disabled = false;
        radio.checked = false;
    };
    AdsComponent.prototype.setWidth = function () {
        this.showAdWidthWarning = false;
        var inp = document.getElementById("adWidthInput");
        inp.style.border = "";
        this.auxWidth = this.width;
    };
    AdsComponent.prototype.setHeight = function () {
        this.showAdHeightWarning = false;
        var inp = document.getElementById("adHeightInput");
        inp.style.border = "";
        this.auxHeight = this.height;
    };
    AdsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(693),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__json_service_service__["a" /* JsonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__json_service_service__["a" /* JsonService */]) === 'function' && _d) || Object])
    ], AdsComponent);
    return AdsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/ads.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_service_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetcontentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetcontentComponent = (function () {
    function GetcontentComponent(store, json, activatedRoute, dragulaService) {
        this.store = store;
        this.json = json;
        this.activatedRoute = activatedRoute;
        this.dragulaService = dragulaService;
        this.showComponent = false;
        this.showLoadingIcon = true;
        /*selectedObjects;*/
        /*selectedDataContent = [];*/
        this.showLogoDiv = false;
        this.allowed_types = ["jpeg", "tiff", "png", "jpg", "bmp", "gif", "svg", "image/png", "image/jpeg", "image/tiff", "image/jpg", "image/bmp", "image/gif", "image/svg+xml"];
        this.clickImageDiv = true;
        this.showObjectidWarning = false;
        this.showObjectidNotexistWarning = false;
        this.showFilesizeError = false;
        this.selectimagepopup = false;
        this.tileWidth = "285";
        this.tileHeight = "300";
    }
    // CLICK SIDEBAR
    GetcontentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("getmarket init");
        this.store.showMarketOptions = true;
        this.store.heightlightFeed();
        var getObjects = true;
        if (this.store.market === undefined) {
            var sidebar = document.getElementById('sidebar-markets');
            sidebar.click();
            getObjects = false;
            this.activatedRoute.params.subscribe(function (params) {
                _this.store.marketId = params['id'];
                var _localThis = _this;
                setTimeout(function () {
                    /* _localThis.store.addEditMarker(_localThis.store.marketId);*/
                }, 1000);
                _this.json.getJSON(_this.store.serverName + '/Market?marketId=' + _this.store.marketId)
                    .subscribe(function (response) {
                    _this.store.market = response[0];
                    _this.store.marketName = _this.store.market.name;
                    _this.store.marketDescription = _this.store.market.description;
                    // Get selected objects
                    _this.getSelectedObjects();
                });
            });
        }
        if (getObjects) {
            this.getSelectedObjects();
        }
    };
    GetcontentComponent.prototype.getSelectedObjects = function () {
        var _this = this;
        this.json.getJSON(this.store.serverName + '/FeedServlet?marketId=' + this.store.marketId)
            .subscribe(function (response) {
            /*console.log(response);*/
            _this.store.selectedDataContent = response;
            _this.store.selectedDataContent.forEach(function (elm, index) {
                if (elm["type"] === undefined) {
                    var img = elm["adpicture"]["href"]; /*["href"]*/
                    elm["adpicture"]["href"] = img.replace("%WIDTH%", "278").replace("%HEIGHT%", "125"); /* ["href"]*/
                    elm["pricem2"] = Math.round((elm["price"]["value"] / elm["livingspace"]));
                }
            });
            _this.store.showComponent = true;
            _this.store.showLoadingIcon = false;
        });
        this.json.getJSON(this.store.serverName + '/Object?marketId=' + this.store.marketId)
            .subscribe(function (response) {
            if (response.length > 0) {
                _this.store.selectedObjects = response[0]['json'];
                _this.store.selectedObjects = JSON.parse(_this.store.selectedObjects);
            }
        });
    };
    GetcontentComponent.prototype.cancelObject = function () {
        this.store.objectId = "";
        this.store.showData = false;
    };
    GetcontentComponent.prototype.cancelLogo = function () {
        this.logoURL = "";
        this.store.showData = false;
        var img = document.getElementById('imgImage');
        img.src = "";
        var imgDiv = document.getElementById('imgUploadDiv');
        imgDiv.style.opacity = "0";
        imgDiv.style.cursor = "pointer";
        var imgInput = document.getElementById('imgInput');
        imgInput.value = "";
        var _localThis = this;
        setTimeout(function () {
            _localThis.clickImageDiv = true;
        }, 700);
    };
    GetcontentComponent.prototype.removeObject = function (index) {
        this.store.selectedObjects.splice(index, 1);
        this.store.selectedDataContent.splice(index, 1);
    };
    GetcontentComponent.prototype.getData = function () {
        var _this = this;
        this.showFilesizeError = false;
        var _localThis = this;
        var isInt = parseInt(this.store.objectId);
        if (this.store.objectId !== "" && this.store.objectId !== undefined && isInt) {
            this.json.getJSON(this.store.serverName + '/GetApartment?objectId=' + this.store.objectId)
                .subscribe(function (response) {
                // If entered object ID is valid
                if (response["error"] === undefined) {
                    /* response["adpicture"]["href"] = response["adpicture"]["href"].replace("%WIDTH%", "285").replace("%HEIGHT%", "300");*/
                    response["pricem2"] = Math.round((response["price"]["value"] / response["livingspace"]));
                    // Go through all pictures and pick out the ones that can scale
                    response["allpictures"].forEach(function (elm, index) {
                        if (elm["urls"] !== undefined) {
                            elm["urls"]["url"].forEach(function (elm1, index1) {
                                // If a img that can scale is found pick that img as the one to use
                                if (elm1["scale"] === "SCALE") {
                                    elm = {};
                                    elm["image"] = elm1["href"].replace("%WIDTH%", _localThis.tileWidth).replace("%HEIGHT%", _localThis.tileHeight);
                                    response["allpictures"][index] = elm;
                                }
                            });
                        }
                    });
                    _this.selectedImage = response["allpictures"][0].image;
                    _this.objectData = response;
                    _this.store.showData = true;
                }
                else {
                    _this.showObjectidNotexistWarning = true;
                }
            });
        }
        else {
            this.showObjectidWarning = true;
        }
    };
    GetcontentComponent.prototype.selectObject = function () {
        var _this = this;
        if (this.store.selectedObjects === undefined) {
            this.store.selectedObjects = [];
        }
        var img = this.selectedImage;
        var obj = {
            "type": "object",
            "url": img.replace(this.tileWidth, "%WIDTH%").replace(this.tileHeight, "%HEIGHT%"),
            "objectid": this.store.objectId
        };
        /* this.store.selectedObjects.push(parseInt(this.store.objectId));*/
        // Push obj, img should not have width height replaced when pushed
        this.store.selectedObjects.push(obj);
        this.json.getJSON(this.store.serverName + '/GetApartment?objectId=' + this.store.objectId)
            .subscribe(function (response) {
            /*console.log(response);*/
            /* const img = response["adpicture"]["href"];*/
            response["adpicture"]["href"] = _this.selectedImage.replace("%WIDTH%", "278").replace("%HEIGHT%", "125"); /*["href"]*/
            response["pricem2"] = Math.round((response["price"]["value"] / response["livingspace"]));
            _this.store.selectedDataContent.push(response);
        });
        this.store.objectId = '';
        this.store.showData = false;
    };
    GetcontentComponent.prototype.validateObjectID = function () {
        if (this.store.objectId !== "" && this.store.objectId !== undefined) {
            this.showObjectidWarning = false;
            this.showObjectidNotexistWarning = false;
        }
    };
    GetcontentComponent.prototype.selectLogo = function () {
        var _this = this;
        var obj = {
            "data": [{ "base64": this.logoPicB64, "type": this.logoPicType, "key": "1" }]
        };
        this.json.postJSON(this.store.imageServerUrl + "/assets", obj)
            .subscribe(function (response) {
            var body = JSON.parse(response["_body"]);
            _this.logoPicture = body[0]["1"];
            var obj = {
                "type": "logo",
                "picture": _this.logoPicture,
                "url": _this.logoURL
            };
            _this.store.selectedObjects.push(obj);
            _this.logoURL = "";
            var img = document.getElementById("imgImage");
            img.src = "";
            _this.showLogoDiv = false;
            _this.store.selectedDataContent.push(obj);
            _this.cancelLogo();
        });
    };
    GetcontentComponent.prototype.saveObjects = function () {
        var _this = this;
        /* console.log(this.store.selectedObjects);*/
        var obj = {
            'marketId': this.store.marketId,
            'json': this.store.selectedObjects
        };
        this.json.postJSON(this.store.serverName + '/Object', obj)
            .subscribe(function (response) {
            // Update list of selected objects
            toastr.success("Order successfully saved!");
            _this.getSelectedObjects();
        });
    };
    GetcontentComponent.prototype.selectImage = function (url) {
        this.selectedImage = url;
        this.selectimagepopup = false;
    };
    GetcontentComponent.prototype.selectImagePopup = function () {
        this.selectimagepopup = true;
    };
    GetcontentComponent.prototype.addLogo = function () {
        this.showLogoDiv = true;
    };
    // ---------------------START IMAGE UPLOAD ------------------------
    GetcontentComponent.prototype.readImage = function (file) {
        var input = document.getElementById("imgInput");
        var image = document.getElementById("imgImage");
        if (file === undefined) {
            file = input.files[0];
        }
        if (this.allowed_types.indexOf(file.type) === -1) {
            input.value = "";
            image.src = "";
            return;
        }
        else {
            // Retrieve base64 of image
            this.clickImageDiv = false;
            this.readFiles(file, file.type, image, input);
        }
    };
    GetcontentComponent.prototype.readFiles = function (file, fileType, image, input) {
        // Create the file reader
        var reader = new FileReader();
        var _localThis = this;
        this.readFile(file, reader, function (base64) {
            image.onload = function () {
                base64 = base64.replace("data:" + fileType + ";base64,", "");
                fileType = fileType.replace("image/", "");
                var fileSize = file.size / 1024;
                if (fileSize < 101) {
                    _localThis.showFilesizeError = false;
                    var obj = {};
                    obj['base64'] = base64;
                    obj['type'] = fileType;
                    _localThis.logoPicB64 = base64;
                    _localThis.logoPicType = fileType;
                    var imgDiv = document.getElementById('imgUploadDiv');
                    imgDiv.style.opacity = "";
                    imgDiv.style.cursor = "";
                }
                else {
                    _localThis.showFilesizeError = true;
                }
            };
            // Display image use the url that the servlet responds with
            image.src = window.URL.createObjectURL(file);
        });
    };
    GetcontentComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result); // file.type
        };
        reader.readAsDataURL(file);
    };
    GetcontentComponent.prototype.dropImage = function (event) {
        event.preventDefault();
        var imgContainer = document.getElementById('imgDivContainer');
        imgContainer.classList.remove("sc-drop-media");
        var data = event.dataTransfer.files;
        var file = data["0"];
        this.readImage(file);
    };
    GetcontentComponent.prototype.triggerFileUpload = function (image) {
        if (this.clickImageDiv) {
            document.getElementById("imgInput").click();
        }
    };
    GetcontentComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
        var imgContainer = document.getElementById('imgDivContainer');
        imgContainer.classList.add("sc-drop-media");
    };
    GetcontentComponent.prototype.preventDragDrop = function () {
        window.addEventListener("dragover", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);
        window.addEventListener("drop", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);
    };
    GetcontentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-getcontent',
            template: __webpack_require__(694),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__json_service_service__["a" /* JsonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__json_service_service__["a" /* JsonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaService"]) === 'function' && _d) || Object])
    ], GetcontentComponent);
    return GetcontentComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/getcontent.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/adssets/Documents/workspace/scout24/src/environment.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top-nav\" id=\"top-nav\">\n  <header>\n\n    <div class=\"page-header navbar navbar-fixed-top\">\n      <div class=\"page-header-inner\">\n\n\n\n        <!--BEGIN MOBILE HAMBURGER BUTTON-->\n        <button onclick=\"hamburgerToggle()\" id=\"hamburger-menu-btn\" class=\"c-hamburger c-hamburger--htla\">\n          <span>toggle menu</span>\n        </button>\n        <!--END MOBILE HAMBURGER BUTTON-->\n\n\n        <!-- BEGIN LOGO -->\n        <div class=\"page-logo\">\n          <a href=\"/ApiScout24-web\">  <!--/dashboard-->\n            <span alt=\"logo\" class=\"logo-top\"></span> </a>\n\n        </div>\n        <!-- END LOGO -->\n\n\n        <div class=\"top-menu top-menu-pull-right\">\n          <ul class=\"nav navbar-nav pull-right\">\n\n\n            <li class=\"top-nav-item active-page page-tabs\" id=\"feedIndicator\" *ngIf=\"store.showMarketOptions\">\n              <a (click)=\"getMarketOption('feed')\"  data-close-others=\"true\">\n                <span> Feed </span>\n              </a>\n            </li>\n\n            <li class=\"top-nav-item page-tabs\" id=\"adsIndicator\" *ngIf=\"store.showMarketOptions\">\n              <a (click)=\"getMarketOption('ads')\"  data-close-others=\"true\">\n                <span> Ads </span>\n              </a>\n            </li>\n\n\n            <li class=\"dropdown dropdown-user\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n                <img alt=\"\" class=\"img-circle\" src=\"./img/usericon.png\"/>\n                <span class=\"username username-hide-on-mobile\"> {{store.userName}} </span>\n                <i class=\"fa fa-angle-down\"></i>\n              </a>\n              <ul class=\"dropdown-menu dropdown-menu-default\">\n                <li>\n                  <!--<a (click)=\"logout()\">-->\n                  <a href=\"/ApiScout24-web/Logout\">\n                    <i class=\"icon-logout\"></i> Logout </a>\n                </li>\n                <!--  <li (click)=\"changeLanguage('en');\">\n                    <i>English</i>\n                  </li>\n                  <li (click)=\"changeLanguage('sv')\">\n                    <i>Swedish</i>\n                  </li>-->\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"shadow-layer\"></div> <!--mobile menu hamburger backdrop-->\n\n</div>\n<!-- END TOP NAV -->\n\n\n<div id=\"card-popup-shadow\" style=\"visibility: hidden\"></div>\n\n\n<!--BEGIN CONTAINER-->\n<div class=\"page-container\">\n\n  <!-- BEGIN SIDEBAR -->\n\n  <div id=\"main-nav\">\n\n\n    <!--   <nav id=\"main-nav\">-->\n    <ul class=\"accordion-menu animated\" id=\"accordion-menu-main\">\n      <li class=\"has-children\">\n        <input type=\"checkbox\" name=\"group-2\" id=\"group-2\">\n        <label (click)=\"gotoHome();\" for=\"group-2\">  Dashboard\n        </label>\n      </li>\n\n\n      <li class=\"has-children\">\n        <input type=\"checkbox\" name=\"group-1\" id=\"group-1\">\n        <label (click)=\"getMarkets()\" id=\"sidebar-markets\" for=\"group-1\">\n          <span class=\"label-haschildren\">Market</span>\n          <span class=\"fa fa-chevron-down arrow-menu-icon\"></span>\n        </label>\n\n        <ul id=\"sidebar-dropdown\">\n\n          <li>\n            <button class=\"btn-def btn-create-market\" (click)=\"createMarket();\">Create market</button>\n          </li>\n          <li *ngFor=\"let market of store.markets; let i = index\" id={{market.id}}>\n            <a (click)=\"getMarketContent(market)\"><span>{{market.name}}</span></a>\n            <div class=\"market-settings hidden-obj\" id=edit-{{market.id}}>\n              <button class=\"settings-cog\" (click)=\"editMarket()\"><span>Edit</span></button>\n            </div>\n\n          </li>\n\n        </ul>\n      </li>\n\n    </ul>\n\n  </div>\n\n\n  <!-- END SIDEBAR -->\n\n\n\n  <div class=\"page-content-wrapper\">\n\n    <!-- BEGIN CONTENT BODY -->\n    <div class=\"page-main-content am-mobile-content-position\">\n      <div *ngIf=\"platformWarning\">\n        <img src=\"./img/hand-logo.png\" style=\"width: 100px;height: 100px; display: block;margin: auto\"/>\n\n        <h4 style=\"line-height: 25px; text-align: center\" >This application is not yet supported for mobile devices. </h4>\n        <h4 style=\"line-height: 25px; text-align: center\" >Please use the application on desktop. </h4>\n\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n    <!-- END CONTENT BODY -->\n  </div>\n\n</div>\n<!--END PAGE CONTAINER-->\n\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showComponent\">\n  <!-- BEGIN PAGE HEAD-->\n  <div class=\"page-head\">\n    <!-- BEGIN PAGE TITLE -->\n    <div class=\"page-title\">\n      <h1>Create market\n        <small>Create a market to target a specific group of audience</small>\n        <!--      <small>Adjust the feed to customize and prioritize the games to be shown in the ad</small>-->\n      </h1>\n    </div>\n    <!-- END PAGE TITLE -->\n    <!-- BEGIN PAGE TOOLBAR -->\n    <div class=\"page-toolbar\">\n      <!-- BEGIN PAGE BUTTON -->\n      <div class=\"btn-group btn-theme-panel\">\n        <a href=\"#\" class=\"btn dropdown-toggle\">\n          <i class=\"icon-settings\"></i>\n        </a>\n      </div>\n      <!-- END PAGE BUTTON -->\n    </div>\n    <!-- END PAGE TOOLBAR -->\n  </div>\n  <!-- END PAGE HEAD-->\n\n  <!-- BEGIN MARKET SETTINGS -->\n  <div class=\"row col-xs-12-mod content-margin-fix\">\n\n    <!-- * * * * * *  BEGIN METADATA SECTION * * * * * * -->\n    <!--BEGIN LEFT COLUMN WRAPPER 1-->\n    <div class=\"col-md-12\">\n\n      <!--BEGIN LEFT COLUMN 1-->\n      <div class=\"col-md-6-mod-10 boxed-reg\">\n\n        <div class=\"box-form-headline-panel\">\n          <div class=\"box-form-headline-wrapper\">\n            <span class=\"caption-subject box-headline\">Market</span>\n          </div>\n        </div>\n\n        <!--BEGIN SECTION MARKET INFO FORM-->\n        <div class=\"form-group form-md-line-input\">\n          <input [(ngModel)]=\"marketname\" (keyup)=\"updateMetadata()\" type=\"text\" class=\"form-control\"\n                 id=\"form_control_1\"\n                 placeholder=\"Choose your campaign name\">\n          <label for=\"form_control_1\">Market Name</label>\n          <span class=\"help-block\">E.g. Sweden, Germany..</span>\n          <span *ngIf=\"marketnameError\" class=\"input-text-error\">Enter a market name</span>\n\n        </div>\n\n\n        <div class=\"form-group form-md-line-input\">\n          <input [(ngModel)]=\"marketdescription\" (keyup)=\"updateMetadata()\" type=\"text\" class=\"form-control\"\n                 id=\"form_control_1\"\n                 placeholder=\"Describe the market\">\n          <label for=\"form_control_1\">Market Description</label>\n          <span class=\"help-block\">This will help you identify the purpose of this specific campaign</span>\n          <span *ngIf=\"marketdescriptionError\" class=\"input-text-error\">Enter a description</span>\n        </div>\n\n\n      </div>\n\n    </div>\n    <!--END LEFT COLUMN WRAPPER 1-->\n    <!-- * * * * * *  END METADATA SECTION * * * * * * -->\n\n    <button id=\"createButton\" class=\"btn-reg\" (click)=\"save()\">Save</button>\n\n\n  </div>\n  <!-- END MARKET SETTINGS -->\n</div>\n\n<div *ngIf=\"showLoadingIcon\">\n  <img style=\"position: fixed; top: 50%; left: 60%; transform: translate(-50%, -50%);\"\n       src=\"./img/ripple-load.gif\"/>\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p>\n  editmarket works!\n</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"store.showComponent\">\n\n\n  <!-- BEGIN PAGE HEAD-->\n  <div class=\"page-head\">\n    <!-- BEGIN PAGE TITLE -->\n    <div class=\"page-title\">\n      <h1>Market Name: {{store.marketName}}\n        <small>Market description: {{store.marketDescription}}</small>\n        <!--      <small>Adjust the feed to customize and prioritize the games to be shown in the ad</small>-->\n      </h1>\n    </div>\n    <!-- END PAGE TITLE -->\n\n    <div class=\"page-btn-container\" *ngIf=\"!store.showFeedEmptyError\">\n      <button type=\"submit\" (click)=\"create()\" class=\"btn-reg\">Create ad</button>\n    </div>\n\n  </div>\n\n</div>\n<div *ngIf=\"store.showFeedEmptyError\">\n  <span style=\"color: red\">You must first build your feed before you can create an ad</span>\n</div>\n\n\n<div id=\"ad-list-market\" class=\"col-md-11\" *ngIf=\"store.adListDiv\">\n\n  <table>\n    <thead>\n    <tr>\n      <th>Banner ID</th>\n      <th>Banner Name</th>\n      <th>Format</th>\n      <th>Size</th>\n      <th>Demo Link</th>\n      <th style=\"width: 120px;\">Script</th>\n      <th style=\"text-align: center;\">Adsscore</th>\n    </tr>\n    </thead>\n\n    <tfoot>\n    <td colspan=\"999\">\n      <div style=\"display: inline-block;\" *ngIf=\"store.adList.length > 5\">\n        <select [(ngModel)]=\"pageLimit\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"inp\"\n                name=\"test\">\n          <option *ngFor=\"let option of pageLimitArray\">{{option}}</option>\n        </select>\n      </div>\n      <pagination-controls class=\"my-pagination\" style=\"float: right; padding-left: 0px;\" (pageChange)=\"p = $event\"\n                           autoHide=\"true\"\n                           previousLabel=\"Previous\"\n                           nextLabel=\"Next\"\n                           screenReaderPaginationLabel=\"Pagination\"\n                           screenReaderPageLabel=\"page\"\n                           screenReaderCurrentLabel=\"You're on page\">\n      </pagination-controls>\n\n    </td>\n    </tfoot>\n\n    <tbody>\n    <tr\n      *ngFor=\"let ad of store.adList | paginate:{itemsPerPage:pageLimit, currentPage: p}\"\n      id={{ad.bannerId}}>\n      <td style=\"width: 110px;\">{{ad.bannerId}}</td>\n      <td style=\"width: 200px\">{{ad.bannerName}}</td>\n      <td>{{ad.formatName}}</td>\n      <td>{{ad.width}}x{{ad.height}}</td>\n      <td><a href=\"{{ad.launchReturnJson.demoUrl}}\" target=\"_blank\">View</a></td>\n      <td><a (click)=\"showScript(ad.launchReturnJson.loadScript)\">Show script</a></td> <!--{{ad.launchReturnJson.loadScript}}-->\n      <td style=\"padding-right: 0; text-align: center;\"><a href=\"{{ad.launchReturnJson.adsscoreUrl}}\" target=\"_blank\"><img class=\"icon\" src=\"./img/adsscore-symbol-small.png\"></a></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<h3 *ngIf=\"store.noAdWarning\">No ads created and linked to this market</h3>\n\n\n\n\n\n<div class=\"create-ad-container\" id=\"createAdDiv\" *ngIf=\"store.createAdDiv\">\n\n<!--  &lt;!&ndash;<div id=\"card-popup-shadow\"></div>&ndash;&gt;-->\n\n  <div class=\"create-ad-select-item\" *ngFor=\"let format of store.adFormatsToCreate\" (click)=\"getAdsByFormat(format);\" style=\"cursor: pointer\">\n\n    <div class=\"card-thumbnail\">\n      <img style=\"display: block;\" src=\"{{format.templateImg}}\" id=\"{{format.idAdFormat}}\"/>\n    </div>\n    <div> <!--&lt;!&ndash; So that the option \"ALL\" does not get included in this list, \"ALL\" is just used for filtering&ndash;&gt;-->\n      <div class=\"create-ad-card-desc\">\n        <label>{{format.name}}</label>\n        <span>{{format.width}}x{{format.height}}</span>\n        <p><b>Create</b></p>\n      </div>\n\n    </div>\n  </div>\n\n\n    <div id=\"previewPopup\" style=\"margin: 0 auto; z-index:99999; overflow: auto;\" *ngIf=\"showPreviewPopup\" class=\"card-prompt ad-preview no-margin boxed-reg is-visible\">\n\n      <button class=\"btn-close-circular\" (click)=\"hidePreviewPopup();\"><i class=\"fa fa-times\"></i></button>\n\n      <iframe id=\"adIframe\" style=\"width: 100%; height: 350px; border: none; visibility: hidden\">      </iframe>\n\n      <div *ngIf=\"showmetadata\">\n\n\n        <div class=\"form-group form-md-line-input\" *ngIf=\"showResponsiveDiv\">\n          <label for=\"form_control_1\">Ad Size</label>\n          <br>\n\n          <div class=\"col-md-6\">\n            <input type=\"radio\" checked id=\"responsiveWidthRadio\" (click)=\"setResponseWidth();\" />\n            <label>Fill ad space width</label>\n            <br>\n            <input type=\"radio\" id=\"adWidthRadio\" (click)=\"enableWidthInput();\" />\n            <label>Set width</label>\n            <input type=\"text\" id=\"adWidthInput\" style=\"width: 5em\" [(ngModel)]=\"width\" (keyup)=\"setWidth();\" disabled> <label *ngIf=\"showPxWidth\"> px</label>\n            <span *ngIf=\"showAdWidthWarning\" style=\"color: red; display: block\">A value must be set</span>\n          </div>\n\n          <div class=\"col-md-6\">\n\n            <input type=\"radio\" checked id=\"responsiveHeightRadio\" (click)=\"setResponseHeight();\" />\n            <label>Fill ad space height</label>\n            <br>\n            <input type=\"radio\" id=\"adHeightRadio\" (click)=\"enableHeightInput();\" />\n            <label>Set height</label>\n            <input type=\"text\" id=\"adHeightInput\" style=\"width: 5em\" [(ngModel)]=\"height\" (keyup)=\"setHeight();\" disabled> <label *ngIf=\"showPxHeight\"> px</label>\n            <span *ngIf=\"showAdHeightWarning\" style=\"color: red; display: block\">A value must be set</span>\n\n          </div>\n        </div>\n\n        <br>\n        <br>\n        <br>\n\n        <div class=\"form-group form-md-line-input\">\n          <input [(ngModel)]=\"adName\" type=\"text\" class=\"form-control\" id=\"form_control_1\"\n                 placeholder=\"Enter ad name\" (mouseup)=\"validateAdName();\"/>\n          <label for=\"form_control_1\">Ad Name</label>\n          <span class=\"help-block\">Your ad name to identify your ad</span>\n          <p id=\"nameErrorMsg\" *ngIf=\"showAdNameWarning\" class=\"input-text-error\" >Enter a name for your ad</p>\n        </div>\n\n        <div class=\"form-group form-md-line-input\">\n          <input [(ngModel)]=\"adClickTracker\" type=\"text\" class=\"form-control\" id=\"form_control_1\"\n                 placeholder=\"Enter ad name\"  />\n          <label for=\"form_control_1\">Click Tracker URL (Optional)</label>\n          <span class=\"help-block\">This is the ad click counter</span>\n          <!--\n                    <p id=\"nameErrorMsg\" *ngIf=\"showNameErrorMsg\" class=\"input-text-error\" >{{'editmarket.metadata.input1error' | translate}}</p>\n          -->\n        </div>\n\n        <div class=\"form-group form-md-line-input\">\n          <input [(ngModel)]=\"adImpTracker\" type=\"text\" class=\"form-control\" id=\"form_control_1\"\n                 placeholder=\"Enter ad name\"  />\n          <label for=\"form_control_1\">Impression Tracker URL (Optional)</label>\n          <span class=\"help-block\">This is the ad impression counter</span>\n          <!--\n                    <p id=\"nameErrorMsg\" *ngIf=\"showNameErrorMsg\" class=\"input-text-error\" >{{'editmarket.metadata.input1error' | translate}}</p>\n          -->\n        </div>\n\n        <button (click)=\"createAd(format)\" class=\"btn-reg float-r\">Create</button> <!--*ngIf=\"adName.length > 0\"-->\n\n        <!--\n                <div class=\"form-entry\">Enter a name for your banner <input [(ngModel)]=\"adName\" type=\"text\"/></div>\n                <div class=\"form-entry\">Enter a click tracker url (click counter)<i> Optional</i> <input [(ngModel)]=\"adClickTracker\" type=\"text\"/></div>\n                <div class=\"form-entry\">Enter a impression tracker url (impression counter)<i> Optional</i> <input [(ngModel)]=\"adImpTracker\" type=\"text\"/></div>\n        -->\n      </div>\n\n    </div>\n  </div>\n\n<div id=\"scriptPopup\" class=\"card-prompt script no-margin boxed-reg is-visible\" *ngIf=\"showScriptDiv\" style=\"z-index: 99999\">\n\n  <div class=\"box-form-headline-panel\">\n    <div class=\"box-form-headline-wrapper\">\n      <span class=\"caption-subject box-headline\">SCRIPT</span>\n      <div style=\"top: 15px; position: absolute; right: 20px; cursor: pointer;\" (click)=\"closeScript()\"><b>x</b></div>\n    </div>\n  </div>\n\n  <!--<hr class=\"hr-headline-panel\">-->\n\n  <textarea id=\"scriptTextArea\">{{showLoadScript}}</textarea>\n\n  <span id=\"copyMsg\" >\n        {{copyMsg}}\n      </span>\n\n\n  <button class=\"blue float-r\" (click)=\"copyScript()\">Copy</button>\n</div>\n\n\n\n\n\n<div *ngIf=\"store.showLoadingIcon\">\n  <img id=\"loadingIcon\" style=\"position: fixed; top: 50%; left: 60%; transform: translate(-50%, -50%);\"\n       src=\"./img/ripple-load.gif\"/>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"store.showComponent\" style=\"height: 100%;\">\n\n\n  <!--BEGIN SCOUT 24 GALLERY POPUP-->\n\n  <div *ngIf=\"selectimagepopup\" style=\"position: fixed; border-radius: 4px; width: 750px; height: auto; padding: 30px; background-color: #fff; z-index: 999;\">\n    <div class=\"col-md-3\" style=\"position: relative;\" *ngFor=\"let img of objectData.allpictures\">\n      <img *ngIf=\"img.image !== undefined\" style=\"border: 1px solid #bbbbbb; width: 150px; height: 150px;\" (click)=\"selectImage(img.image);\" class=\"sc-search-result-thumbnail\" src=\"{{img.image}}\">\n    </div>\n  </div>\n\n  <!--END SCOUT 24 GALLERY POPUP-->\n\n\n\n\n\n  <!-- BEGIN PAGE HEAD-->\n  <div class=\"page-head\">\n    <!-- BEGIN PAGE TITLE -->\n    <!--    <div class=\"page-title\">\n          <h1>Market: {{store.marketName}}\n            <small>Description: {{store.marketDescription}}</small>\n            &lt;!&ndash;      <small>Adjust the feed to customize and prioritize the games to be shown in the ad</small>&ndash;&gt;\n          </h1>\n        </div>-->\n    <!-- END PAGE TITLE -->\n\n    <!--    <div class=\"page-btn-container\">  &lt;!&ndash;*ngIf=\"!storeservice.createdAdDiv\"&ndash;&gt;\n          <button type=\"submit\" (click)=\"saveObjects()\" class=\"btn-reg\">Save</button>\n        </div>-->\n\n  </div>\n  <!-- END PAGE HEAD-->\n\n  <!--BEGIN COL-MD-12-->\n  <div class=\"col-md-12\" style=\"height: calc(100% - 19px)\">\n\n\n    <div style=\"width: calc(100% - 420px); min-width: 650px; float: left;\">\n      <div class=\"sc-search-area\">\n        <!-- BEGIN SEARCH FIELD -->\n        <div id=\"sc-search-field\">\n          <input type=\"text\" [(ngModel)]=\"store.objectId\" (keyup)=\"validateObjectID();\" placeholder=\"Object ID\" (keyup.enter)=\"getData();\" />\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          <button (click)=\"getData();\">Find</button>\n          <span *ngIf=\"showObjectidWarning\" style=\"color: red;\">Enter an object ID</span>\n          <span *ngIf=\"showObjectidNotexistWarning\" style=\"color: red;\">Object ID does not exist</span>\n        </div>\n        <!-- END SEARCH FIELD -->\n\n\n\n\n        <!-- START ADD LOGO-->\n        <div>\n          <!--    <button (click)=\"addLogo();\">Add logo</button>\n              <div *ngIf=\"showLogoDiv\">-->\n\n\n          <div id=\"imgDivContainer\" class=\"sc-object-select-area\">\n\n\n            <div class=\"sc-object-placeholder\">\n              <div class=\"sc-object-placeholder-inner\">\n                <img src=\"https://mds.pliing.com/sync/libs/scout24/media-upload-icon.png\">\n                <p>Search or Create an object<br><span>Drag an image or click here to create a custom object.</span></p>\n              </div>\n            </div>\n\n            <span *ngIf=\"showFilesizeError\" style=\"color: red; position: fixed\">The file you tried to upload exceeds the limit which is 1000kb</span>\n\n\n\n\n\n            <!-- BEGIN CUSTOM IMAGE UPLOAD AREA -->\n            <div style=\"opacity: 0; cursor: pointer;\" id=\"imgUploadDiv\" class=\"sc-custom-image-area\" (click)=\"triggerFileUpload();\" (dragover)=\"allowDrop($event);\"\n                 (drop)=\"dropImage($event);\">\n\n              <div><img id=\"imgImage\" class=\"sc-search-result-thumbnail\" src=\"\"></div>\n\n\n              <div class=\"sc-search-result-metadata\">\n                <div class=\"form-group form-md-line-input\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"http://www.example.com\" [(ngModel)]=\"logoURL\">\n                  <label>Enter a URL</label>\n                  <span class=\"help-block\">Your custom image will be linked to this URL.</span>\n                </div>\n              </div>\n\n              <div class=\"sc-search-result-options\">\n                <button class=\"cancel\" (click)=\"cancelLogo();\">Cancel</button>\n                <button class=\"select\" (click)=\"selectLogo();\">Select</button>\n              </div>\n\n            </div>\n\n            <input id=\"imgInput\" style=\"display: none\" (change)=\"readImage();\" type=\"file\"  name=\"picture\" />\n            <!-- END CUSTOM IMAGE UPLOAD AREA -->\n\n\n\n\n\n            <!-- BEGIN SEARCH RESULT AREA -->\n            <div class=\"sc-search-result-area\" *ngIf=\"store.showData\">\n              <div class=\"sc-search-result\">\n                <!--<div><img class=\"sc-search-result-thumbnail\" src=\"{{objectData.adpicture.href}}\"></div>-->\n                <div>\n                  <img (click)=\"selectImagePopup();\" class=\"sc-search-result-thumbnail\" src={{selectedImage}}>\n                </div>\n                <div class=\"sc-search-result-metadata\">\n\n                  <h1>{{objectData.address.geoHierarchy.quarter.name}},\n                    {{objectData.address.geoHierarchy.city.name}}\n                  </h1>\n                  <h1 style=\"margin-bottom: 10px;\">\n                    {{objectData.address.geoHierarchy.region.name}}, {{objectData.address.postcode}}\n                  </h1>\n\n                  <div class=\"col-md-4\">\n                    <!-- <h2>{{objectData.price.value}} {{objectData.price.currency}}</h2>-->\n                    <h2>{{objectData.pricem2}} &euro; m<sup>2</sup></h2>\n                    <!--<span>Kaufpreis</span>-->\n                  </div>\n                  <div class=\"col-md-4\">\n                    <h2>{{objectData.livingspace}} m<sup>2</sup></h2>\n                    <span>Wohnfläche</span>\n                  </div>\n\n                  <!-- <div class=\"col-md-4\">\n                     <h2>{{objectData.livingspace}} m<sup>2</sup></h2>\n                     <span>Wohnfläche</span>\n                   </div>-->\n                  <!--             <label for=\"cityname\">City name:</label>\n                               <span id=\"cityname\">{{objectData.address.geoHierarchy.city.name}}</span>\n                               <label for=\"quartername\">Quarter name:</label>\n                               <span id=\"quartername\">{{objectData.address.geoHierarchy.quarter.name}}</span>\n                               <label for=\"regionname\">Region name:</label>\n                               <span id=\"regionname\">{{objectData.address.geoHierarchy.region.name}}</span>\n                               <label for=\"postcode\">Post code:</label>\n                               <span id=\"postcode\">{{objectData.address.postcode}}</span>\n                               <label for=\"price\">Price:</label>\n                               <span id=\"price\">{{objectData.price.value}}</span>\n                               <label for=\"currency\">Currency</label>\n                               <span id=\"currency\">{{objectData.price.currency}}</span>\n                               <label for=\"livingspace\">Livingspace</label>\n                               <span id=\"livingspace\">{{objectData.livingspace}}</span>-->\n                  <div class=\"sc-search-result-options\">\n                    <button class=\"cancel\" (click)=\"cancelObject();\">Cancel</button>\n                    <button class=\"select\" (click)=\"selectObject();\">Select</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <!-- END SEARCH RESULT AREA -->\n\n          </div>\n        </div>\n        <!-- END ADD LOGO-->\n      </div>\n\n    </div>\n\n\n    <!--TEST-->\n    <!--  <div class=\"col-md-4 sc-selected-objects-container\"></div>-->\n\n\n    <!--BEGIN SELECTED OBJECTS SIDEBAR-->\n    <div class=\"sc-selected-objects-sidebar col-md-4\">\n      <!--BEGIN PREVIEW SIDEBAR HEAD-->\n      <div class=\"box-form-headline-panel\">\n        <div class=\"box-form-headline-wrapper\">\n          <span class=\"caption-subject box-headline\">Selected objects</span>\n        </div>\n        <!--\n            <div class=\"tools\">\n              <a onclick=\"spinIcon(this)\" (click)=\"generatePreview();\" class=\"reload\" data-original-title=\"\" title=\"\"> </a>\n              <a onclick=\"closePreviewSidebar()\" class=\"collapse-icon-black\"></a>\n              <a onclick=\"collapsePreviewSidebar()\" class=\"fullscreen-collapse-icon color-black\"></a>\n            </div>\n        -->\n        <div class=\"options-wrapper\">\n          <div class=\"options-inner\">\n            <div class=\"options\">\n              <button class=\"btn-inverted black\" type=\"submit\" (click)=\"saveObjects()\">Save Order</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <!--END SELECTED OBJECTS HEAD-->\n\n      <hr class=\"hr-headline-panel\">\n\n\n      <!-- BEGIN SELECTED OBJECTS -->\n\n\n      <!--Remove the class \"sc-list-selected-objects\" below to enable card view (column view)-->\n      <div class=\"sc-selected-objects-inner sc-list-selected-objects\">\n        <div [dragula]='\"bag-one\"' [dragulaModel]='store.selectedObjects' *ngIf=\"store.selectedDataContent.length > 0\">\n          <div class=\"sc-selected-object\" *ngFor=\"let object of store.selectedDataContent; let i = index\">\n\n            <div id=\"sc-selected-property\" *ngIf=\"object.type === undefined\">\n              <div class=\"sc-selected-object-thumbnail-wrapper\">\n                <img class=\"sc-selected-object-thumbnail\" src=\"{{object.adpicture.href}}\">  <!--.href-->\n              </div>\n\n              <div class=\"sc-selected-object-metadata\">\n                <label>\n                  {{object.address.geoHierarchy.city.name}}\n                  {{object.address.geoHierarchy.quarter.name}}\n                  {{object.address.geoHierarchy.region.name}}\n                </label>\n                <label class=\"sc-sub\">\n                  <span id=\"price\">{{object.pricem2}} &euro; m<sup>2</sup></span>\n                  <!-- <span id=\"currency\">{{object.price.currency}}</span>-->\n                </label>\n                <div class=\"btn-card-thumbnail-delete\">\n                  <i class=\"fa fa-times\" (click)=\"removeObject(i)\"></i>\n                </div>\n              </div>\n            </div>\n\n            <div id=\"sc-selected-custom\">\n              <div class=\"sc-selected-object-thumbnail-wrapper\" *ngIf=\"object.type === 'logo'\">\n                <img class=\"sc-selected-object-thumbnail\" src=\"{{object.picture}}\">\n                <div class=\"sc-selected-object-metadata link\">\n                  <!--Set char limit 150, hovering will show title, aka full URL path-->\n                  <label class=\"sc-selected-object-metadata-link\" title=\"{{object.url}}\"\n                         id=\"url\">Link: {{object.url}}</label>\n                  <div class=\"btn-card-thumbnail-delete\">\n                    <i class=\"fa fa-times\" (click)=\"removeObject(i)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <!-- END SELECTED OBJECTS -->\n\n\n    </div>\n    <!--END PREVIEW SIDEBAR-->\n\n\n  </div>\n  <!--END COL-MD-12-->\n\n\n</div>\n<div *ngIf=\"store.showLoadingIcon\">\n  <img style=\"position: fixed; top: 50%; left: 60%; transform: translate(-50%, -50%);\"\n       src=\"./img/ripple-load.gif\"/>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);


/***/ })

},[717]);
//# sourceMappingURL=main.bundle.map