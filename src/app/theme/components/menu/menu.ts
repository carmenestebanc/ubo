import { isRole, Role } from '../../../app.component';

interface ISubmenu{
  title:string;
  routerLink:string;
  visible:()=>boolean;
}

interface IMenu {
  title:string;
  routerLink:string;
  icon:string;
  selected:boolean;
  expanded:boolean;
  order:number;
  visible:()=>boolean;
  subMenu?:ISubmenu [];

}

export const menuItems:IMenu [] = [
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
    visible: ():boolean=>{
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
    visible: ():boolean=>{
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
    visible: ():boolean=>{
      return true;
    },
  },

  // {
  //   title: 'Locations',
  //   routerLink: 'locations/list',
  //   icon: 'fa fa-map-marker',
  //   selected: false,
  //   expanded: false,
  //   order: 200,
  //   visible: ():boolean=>{
  //     return true;
  //   },
    /*subMenu: [
      {
        title: 'List',
        routerLink: 'locations/list',
        visible: ():boolean=>{
          return true;
        },
      },
      {
        title: 'Add',
        routerLink: 'locations/add',
        visible: ():boolean=>{
          return !isRole(Role.Visitante);
        },
      }
    ]*/
  // },
  // {
  //   title: 'Adapters',
  //   routerLink: 'adapters/list',
  //   icon: 'fa fa-superpowers',
  //   selected: false,
  //   expanded: false,
  //   order: 200,
  //   visible: ():boolean=>{
  //     return true;
  //   },
    /*subMenu: [
      {
        title: 'List',
        routerLink: 'adapters/list',
        visible: ():boolean=>{
         return true;
         //return !isRole(Role.Visitante);
        },
      },
      {
        title: 'Add',
        routerLink: 'adapters/add',
        visible: ():boolean=>{
          return !isRole(Role.Visitante);
        },
      }
    ]*/
  // },
  // {
  //   title: 'Applications',
  //   routerLink: 'applications/list',
  //   icon: 'fa fa-cloud',
  //   selected: false,
  //   expanded: false,
  //   order: 200,
  //   visible: ():boolean=>{
  //     return true;
  //   },
    /*subMenu: [
      {
        title: 'List',
        routerLink: 'applications/list',
        visible: ():boolean=>{
         return true;
        
        },
      },
      {
        title: 'Add',
        routerLink: 'applications/add',
        visible: ():boolean=>{
          return !isRole(Role.Visitante);
        },
      }
    ]*/
  // },
  // {
  //   title: 'Diagnostico',
  //   routerLink: 'diagnostic',
  //   icon: 'fa fa-binoculars',
  //   selected: false,
  //   expanded: false,
  //   order: 200,
  //   subMenu: [
  //     {
  //       title: 'Buscar productos',
  //       routerLink: 'diagnostic/products/query'
  //     },
  //     {
  //       title: 'Buscar reservas',
  //       routerLink: 'diagnostic/reservation'
  //     }

  //   ]
  // },
  // {
  //   title: 'Logs',
  //   routerLink: 'diagnostic/logs',
  //   icon: 'fa-file-archive-o',
  //   selected: false,
  //   expanded: false,
  //   order: 0,
  //   visible: ():boolean=>{
  //     return false;
  //   },
  // },
];
