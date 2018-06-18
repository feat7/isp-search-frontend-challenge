import { observable, computed } from "mobx";

class UIStore {
  @observable ISPsLoaded = false;
  @observable sortBy = "name";
  @observable searchQuery = "";
  @observable ISPsData = [];
  @computed
  get filteredISPs() {
    //Sort by
    if (this.sortBy === "name") {
      return this.ISPsData.slice().sort((a, b) => {
        return a.name - b.name;
      });
    } else
      return this.ISPsData.slice().sort((a, b) => {
        return a.lowest_price - b.lowest_price;
      });
  }
}

export default UIStore;
