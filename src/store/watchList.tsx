import { observable , action , runInAction} from 'mobx'

// 自己封装的fetch，要去请求数据
import { Fetch } from '../util'


class WatchList{
    @observable watchList:Array<any> = []
    @observable watchSwiperList:Object = {}
    @observable watchSellList:Object = {}
    @observable watchActiveList:Object = {}

  

    @action getWatchList (){
        Fetch('/migu/lovev/miguMovie/data/seeFilmData.jsp')
        .then((res:any)=>{  
            runInAction(()=>{
                this.watchList = res
                this.watchSwiperList = res[0]
                this.watchSellList = res[1]
                this.watchActiveList = res[2]
            })
        })
    }

}


export default new WatchList()