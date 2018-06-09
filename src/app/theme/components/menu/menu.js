"use strict";
exports.menuItems = [
    /*{
      title: 'Categories',
      routerLink: 'categories/list',
      icon: 'fa fa-list',
      selected: false,
      expanded: false,
      order: 200,
      visible: ():boolean=>{
        return true;
      },
    },*/
    {
        title: 'Agencies',
        routerLink: 'agencies/list',
        icon: 'fa fa-list',
        selected: false,
        expanded: false,
        order: 200,
        visible: function () {
            return true;
        },
    },
    {
        title: 'Clients',
        routerLink: 'clients/list',
        icon: 'fa fa-list',
        selected: false,
        expanded: false,
        order: 200,
        visible: function () {
            return true;
        },
    },
    /*{
      title: 'Agents',
      routerLink: 'agents/list',
      icon: 'fa fa-list',
      selected: false,
      expanded: false,
      order: 200,
      visible: ():boolean=>{
        return true;
      },
    },*/
    {
        title: 'Users',
        routerLink: 'users/list',
        icon: 'fa fa-list',
        selected: false,
        expanded: false,
        order: 200,
        visible: function () {
            return true;
        },
    },
];
//# sourceMappingURL=menu.js.map