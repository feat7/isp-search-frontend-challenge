import { observable, computed } from "mobx";

class UIStore {
  @observable ISPsLoaded = false;
  @observable sortBy = "name";
  @observable ISPsData = [];
  @computed
  get filteredISPs() {}
}

export default UIStore;
