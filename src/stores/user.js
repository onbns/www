import { observable } from 'mobx';

export default class {
 @observable user = localStorage.getItem("currentOpenSaucedUser");
}