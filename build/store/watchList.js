var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from 'mobx';
// 自己封装的fetch，要去请求数据
import { Fetch } from '../util';
class WatchList {
    constructor() {
        this.watchList = [];
        this.watchSwiperList = {};
        this.watchSellList = {};
        this.watchActiveList = {};
    }
    getWatchList() {
        Fetch('/migu/lovev/miguMovie/data/seeFilmData.jsp')
            .then((res) => {
            runInAction(() => {
                this.watchList = res;
                this.watchSwiperList = res[0];
                this.watchSellList = res[1];
                this.watchActiveList = res[2];
            });
        });
    }
}
__decorate([
    observable
], WatchList.prototype, "watchList", void 0);
__decorate([
    observable
], WatchList.prototype, "watchSwiperList", void 0);
__decorate([
    observable
], WatchList.prototype, "watchSellList", void 0);
__decorate([
    observable
], WatchList.prototype, "watchActiveList", void 0);
__decorate([
    action
], WatchList.prototype, "getWatchList", null);
export default new WatchList();
//# sourceMappingURL=watchList.js.map