import UIStore from "./ui";
import { RouterStore } from "mobx-react-router";

class Store {
  constructor() {
    this.ui = new UIStore(this);
    this.routing = new RouterStore();
  }
}

const store = new Store();
export default store;
