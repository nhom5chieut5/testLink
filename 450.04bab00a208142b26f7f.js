(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[450],{19602:(e,t,r)=>{"use strict";r.d(t,{y:()=>l});var i=r(39490),s=r(28288),o=r(37716),a=r(38583);function c(e,t){1&e&&(o.ynx(0),o.TgZ(1,"div",1),o.Hsn(2),o.qZA(),o.TgZ(3,"div",2),o.Hsn(4,1),o.qZA(),o.BQk())}function d(e,t){1&e&&(o.TgZ(0,"div",4),o.Hsn(1,3),o.qZA()),2&e&&o.Q6J("@expandCollapse",void 0)}function n(e,t){if(1&e&&(o.ynx(0),o.Hsn(1,2),o.YNc(2,d,2,1,"div",3),o.BQk()),2&e){const e=o.oxw();o.xp6(2),o.Q6J("ngIf",e.expanded)}}const p=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],u=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let l=(()=>{class e{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,i.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,i.Ig)(e.flippable.currentValue))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Tol(t.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[o.TTD],ngContentSelectors:u,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(e,t){1&e&&(o.F$t(p),o.YNc(0,c,5,0,"ng-container",0),o.YNc(1,n,3,1,"ng-container",0)),2&e&&(o.Q6J("ngIf",t.flippable),o.xp6(1),o.Q6J("ngIf",!t.flippable))},directives:[a.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px 0 #0000000f}fuse-card,fuse-card.fuse-card-flippable{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:#0000;--tw-shadow:0 0 #0000}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(1turn)}fuse-card.fuse-card-flippable .fuse-card-back,fuse-card.fuse-card-flippable .fuse-card-front{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity:1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px 0 #0000000f;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0deg);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}"],encapsulation:2,data:{animation:s.L}}),e})()},15935:(e,t,r)=>{"use strict";r.d(t,{J:()=>o}),r(19602);var i=r(38583),s=r(37716);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.ez]]}),e})()},76891:(e,t,r)=>{"use strict";r.d(t,{D:()=>d});var i=r(92340),s=r(26215),o=r(88002),a=r(37716),c=r(95352);let d=(()=>{class e{constructor(e){this._reqAPIService=e,this._urlApi="/manager/farm-api",this._urlApiAdress="/manager/address-api",this.numberOfPonds=0,this.onLoaded$=new s.X(0),this.addresses=[],this.selectedAddress=null,this.manager=[]}setCode(e){this.fcode=e}setFarm(e){this.farm=e,this.permission=e.permission}loadPonds(){return this._reqAPIService.get("/manager/farm-api-mobie?fcode="+this.fcode+"&action=get-item-pond").pipe((0,o.U)(e=>e))}loadUsers(){return this._reqAPIService.get("/manager/calendar-api?action=member&fcode="+this.fcode).pipe((0,o.U)(e=>e))}listAddress(e){return this._reqAPIService.get(this._urlApiAdress+"?action=listUnit&id="+e)}loadFarm(){return this._reqAPIService.get("/manager/farm-api-info?fcode="+this.fcode).pipe((0,o.U)(e=>(this.setFarm(e.data),e)))}getSettings(){return this._reqAPIService.get("/manager/farm-api-mobie?action=get-farm-setting&fcode="+this.fcode).pipe((0,o.U)(e=>e))}updatePrivate(e){return this._reqAPIService.post("/manager/farm-api-mobie?action=add-farm-setting&fcode="+this.fcode,e).pipe((0,o.U)(e=>e))}removePermission(e,t){return this._reqAPIService.get("/manager/farm-api-mobie?action=remove-manager&fcode="+this.fcode+"&user_id="+e+"&position="+t).pipe((0,o.U)(e=>e))}updateFarm(e){return this._reqAPIService.post("/manager/farm-edit-api-mobie?action=edit&fcode="+this.fcode,e).pipe((0,o.U)(e=>e))}destroyValue(){this.farm=null,this.fcode=null,this.permission=null,this.numberOfPonds=null}getSpecies(){return this._reqAPIService.get("/manager/farm-create-api?action=get-species").pipe((0,o.U)(e=>e))}insertPond(e){return this._reqAPIService.post("/manager/farm-api-mobie?action=add-pond&fcode="+this.fcode,e).pipe((0,o.U)(e=>e))}insertOnePond(e){return this._reqAPIService.post("/manager/farm-api-mobie?action=add-a-pond&fcode="+this.fcode,e).pipe((0,o.U)(e=>e))}loadReport(){return this._reqAPIService.get("/manager/farm-api-report?fcode="+this.fcode)}search_word(e){return this._reqAPIService.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e+".json?types=address&access_token="+i.Jj).pipe((0,o.U)(e=>e.features))}getCalendarList(e,t){return this._reqAPIService.get("/manager/calendar-api?action=list&fcode="+this.fcode+"&pcode="+t+"&begin_day="+e).pipe((0,o.U)(e=>e))}createCalendar(e){return this._reqAPIService.post("/manager/calendar-api?action=add",e).pipe((0,o.U)(e=>e))}editCalendar(e,t){return this._reqAPIService.post("/manager/calendar-api?action=edit&item="+e,t).pipe((0,o.U)(e=>e))}calendarSuggestAPI(){return this._reqAPIService.get("/manager/calendar-api?action=suggest&fcode="+this.fcode).pipe((0,o.U)(e=>e))}onSelect(e){this.selectedAddress=e,this.addresses=[]}dowloadFileSeasonReport(){return this._reqAPIService.downloadFile("/manager/farm-season-report?fcode="+this.fcode).pipe()}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(c.$))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},47101:(e,t,r)=>{"use strict";r.d(t,{d:()=>p});var i=r(88002),s=r(26215),o=r(79765),a=r(91841),c=r(37716),d=r(95352),n=r(76891);let p=(()=>{class e{constructor(e,t,r){this.reqAPIService=e,this.myHTTPClient=t,this._farmService=r,this.onLoaded$=new s.X(0),this._urlApiStoreMobile="/manager/store-api-mobie",this.urlApiStore="/manager/farm-api-mobie",this._urlApiWareHouse="/manager/warehouse-api",this._urlApiWareHouseDaily="/manager/warehouse-daily-api",this.changeDataStore=!1,this.managers=[],this.subject=new o.xQ}sendClickEvent(){this.subject.next()}getClickEvent(){return this.subject.asObservable()}destroy(){this.fcode=null,this.store=null}setFarmCode(e){this.fcode=e}getFarmCode(){return this.fcode}setStore(e){this.store=e}getStore(){return this.store}itemChanged(e,t){void 0!==this.store[e]&&Object.assign(this.store[e],t)}getApiStore(e="",t="",r=""){let s;return s=""===r?this._urlApiStoreMobile+"?action="+e+"&fcode="+this.fcode+t:`/${r}?action=`+e+"&fcode="+this.fcode+t,this.reqAPIService.get(s).pipe((0,i.U)(e=>e))}sendPost(e="",t={},r="",s=""){let o;return o=""===s?this._urlApiStoreMobile+"?action="+e+"&fcode="+this.fcode+r:`/${s}?action=`+e+"&fcode="+this.fcode+r,this.reqAPIService.post(o,t).pipe((0,i.U)(e=>e))}postEdit(e,t){return this.reqAPIService.post(this._urlApiStoreMobile+"?action=edit-product-pricate&fcode="+this.fcode+"&id="+e,t)}downloadSampleImport(){return this.reqAPIService.downloadFile("/staticdb/sample/ImportProduct.xlsx").pipe()}importFile(e,t){let r={reportProgress:!0,headers:new a.WM,params:new a.LE};return r.headers=this.reqAPIService.getHeaderToken(),r.headers=r.headers.delete("Content-Type"),r.params=r.params.append("fileName",t),this.myHTTPClient.post(encodeURI(this.reqAPIService.SITE_PATH+"/manager/import-product-file-api?fcode="+this.fcode),e,r)}dowloadFileWareHourse(){return this.reqAPIService.downloadFile("/manager/inventory-download?fcode="+this.fcode).pipe()}dowloadFileFromWareHourse(e,t){return this.reqAPIService.downloadFile("/manager/export-report-farm-api?fcode="+this.fcode+"&action=warehouseinFarm&timeFrom="+e+"&timeEnd="+t).pipe()}downloadFileProduct(e){return this.reqAPIService.downloadFile("/manager/warehouse-api?wcode="+this.wcode+"&action=export-stock-card&product_id="+e).pipe()}setStoreCode(e){this.fcode=e}getStoreCode(){return this.fcode}setWCodeStoreCode(e){this.wcode=e}getWCodeStoreCode(){return this.wcode}fetchStoreList(){return this.reqAPIService.get(this.urlApiStore+"?fcode="+this.fcode+"&action=list-store").pipe((0,i.U)(e=>e))}createStore(e){return this.reqAPIService.post(this._urlApiStoreMobile+"?fcode="+this.fcode+"&action=add",e).pipe((0,i.U)(e=>e))}deleteStore(e){return this.reqAPIService.post(this._urlApiStoreMobile+"?fcode="+this.fcode+"&action=remove&wcode="+this.wcode,e).pipe((0,i.U)(e=>e))}getAnalyzeStore(){return this.reqAPIService.get(this._urlApiStoreMobile+"?fcode="+this.fcode+"&action=analyze")}removeCategory(){return this.reqAPIService.get(this._urlApiStoreMobile+"?fcode="+this.fcode+"&action=remove&wcode="+this.wcode).pipe((0,i.U)(e=>e))}getAProduct(e,t){return this.reqAPIService.get(this._urlApiWareHouse+"?wcode="+t+"&action=getAProduct&id="+e).pipe((0,i.U)(e=>e))}updateCorrectProduct(e,t,r){return this.reqAPIService.post(this._urlApiWareHouse+"?action=correctProduct&wcode="+t+"&id="+e,r).pipe((0,i.U)(e=>e))}fetchStoreDetail(){return this.reqAPIService.get(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=get").pipe((0,i.U)(e=>e))}ferWCodeDetailImported(e){return this.reqAPIService.get(this._urlApiWareHouse+"?wcode="+e+"&action=get").pipe((0,i.U)(e=>e))}getSpause(e,t){return this.reqAPIService.get(this._urlApiWareHouse+"?action=spause&wcode="+this.wcode+"&id="+e+"&val="+t).pipe((0,i.U)(e=>e))}removeProduct(e,t){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=removeProduct&id="+e,t).pipe((0,i.U)(e=>e))}createPresentImport(e){return this.reqAPIService.post(this._urlApiWareHouse+"?action=import&wcode="+this.wcode,e).pipe((0,i.U)(e=>e))}fetchImportBills(e){return this.reqAPIService.get(this._urlApiWareHouse+"?action=bill-list&wcode="+e).pipe((0,i.U)(e=>e))}detailImportBills(e,t){return this.reqAPIService.get(this._urlApiWareHouse+"?action=import-bills&wcode="+e+"&id="+t).pipe((0,i.U)(e=>e))}importBillsEdit(e,t,r){return this.reqAPIService.post(this._urlApiWareHouse+"?action=import-bills-edit&wcode="+t+"&id="+e,r).pipe((0,i.U)(e=>e))}deleteImport(e,t){return this.reqAPIService.get(this._urlApiWareHouse+"?action=delete-import&wcode="+e+"&id="+t).pipe((0,i.U)(e=>e))}managerGetSetting(e){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=getSetting",e).pipe((0,i.U)(e=>e))}managerDeleteSetting(e,t){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=removeMember&user_id="+t,e).pipe((0,i.U)(e=>e))}getSetting(){return this.reqAPIService.get(this._urlApiWareHouse+"?wcode="+this.getWCodeStoreCode()+"&action=getSetting").pipe((0,i.U)(e=>e))}addMember(e){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=addMember",e).pipe((0,i.U)(e=>e))}removeMember(e,t){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+this.wcode+"&action=removeMember&user_id="+e,t).pipe((0,i.U)(e=>e))}editInfo(e,t){return this.reqAPIService.post(this._urlApiWareHouse+"?wcode="+e+"&action=edit",t).pipe((0,i.U)(e=>e))}fetchStoreListFeedingHistory(e=0){return this.reqAPIService.get(this._urlApiWareHouseDaily+"?action=list&fcode="+this.fcode+"&page="+e).pipe((0,i.U)(e=>e))}fetchStoreSearchFeedingHistory(e,t){return this.reqAPIService.post(this._urlApiWareHouseDaily+"?action=list&fcode="+this.fcode+"&page="+t,e).pipe((0,i.U)(e=>e))}fetchDetailWarehouseDaily(e){return this.reqAPIService.get(this._urlApiWareHouseDaily+"?action=get&id="+e+"&fcode="+this.fcode).pipe((0,i.U)(e=>e))}updateConfirmWarehouse(e,t){return this.reqAPIService.post(this._urlApiWareHouseDaily+"?action=confirm&id="+e+"&fcode="+this.fcode,t).pipe((0,i.U)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(d.$),c.LFG(a.eN),c.LFG(n.D))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},84900:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(38583),s=r(15935),o=r(10588),a=r(37716);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,s.J,o.fC],i.ez,s.J,o.fC]}),e})()}}]);