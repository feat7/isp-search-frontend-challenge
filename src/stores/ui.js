import { observable, computed } from "mobx";

class UIStore {
  @observable ISPsLoaded = false;
  @observable sortBy = "name";
  @observable searchQuery = "";
  @observable ISPsData = [];
  @computed
  get filteredISPs() {
    let sortedArray;
    //Sort by
    if (this.sortBy === "name") {
      sortedArray = this.ISPsData.slice().sort((a, b) => {
        return a.name - b.name;
      });
    } else
      sortedArray = this.ISPsData.slice().sort((a, b) => {
        return a.lowest_price - b.lowest_price;
      });

    if (this.searchQuery !== "") {
      sortedArray = sortedArray.filter(
        item =>
          item.name
            .toLowerCase()
            .search(this.searchQuery.toLocaleLowerCase()) !== -1
      );
    }
    return sortedArray;
  }
}

export default UIStore;
