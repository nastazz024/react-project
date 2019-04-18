import {observable, computed, action, autorun} from 'mobx';



class DataStore {
    @observable position;
    @observable opacity;
    @observable isEggStopped = false;
    opacityChanging = true;

    constructor() {
        this.position = 0;
        this.opacity = 1;
        //autorun(() => this.changeOpacity);
      }

    @action changePosition = (value) => {
        this.position += value;
    }

    
    @computed get currentPosition() {
        return this.position;
    }

    @computed get eggStopped(){
        return this.isEggStopped;
    }

    @action changeEggStopped = () =>{
        this.isEggStopped = !this.isEggStopped;
        if(this.isEggStopped) {
            this.changeOpacityBackground();
        }
        
    }

    @action changeOpacity = () => {
        this.opacity -= 0.01;                
    }

    changeOpacityBackground = () => {
        setInterval(() => {
      
            
            //console.log(dataStore.opacity);
            if (this.opacity > 0) {
                if(this.opacityChanging) {
                    this.opacity -= 0.01;
                }
            }
            if (this.opacity === 0.009999999999999247) {
              alert("GAME")
              this.opacity = 1;
            }
          }, 50)
    }
    
 
}

//export default new DataStore();
const dataStore = new DataStore();

export default dataStore;
export { DataStore };