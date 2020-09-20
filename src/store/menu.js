import {observable, action, decorate} from 'mobx';

class Menu {}

decorate(Menu, {
    likesCount: observable,
    updateCount: action,
})

const menu = new Menu();

export default menu;
export { Menu };