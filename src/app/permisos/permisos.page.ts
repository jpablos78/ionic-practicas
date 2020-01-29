import { Component, OnInit } from '@angular/core';
import { TreeNode, MessageService } from 'primeng/api';


@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.page.html',
  styleUrls: ['./permisos.page.scss'],
})
export class PermisosPage implements OnInit {
  //public items = [{ "id": 1, "name": "features" }, { "id": 2, "name": "Add", "parentID": 1 }, { "id": 3, "name": "Remove", "parentID": 1 }, { "id": 9, "name": "Update", "parentID": 1 }, { "id": 11, "name": "UpdateDel", "parentID": 9 }, { "id": 27, "name": "Add", "parentID": 2 }, { "id": 28, "name": "master" }];
  //public persistedName = "MyItemsPersisted";
  //public treeViewName = "MyItemsTreeView";

  checkboxSelectionTree: any[] = [{
    "data": "2",
    "label": "Modulo General",
    "icon": "fa fa-home",
    "parent": "1",
    "id_menu": "2",
    "id_menu_padre": "1",
    "partialSelected": true,
    "leaf": false,
    "key": "2",
    "tipo": "P",
    "children": [{
      "data": "3",
      "label": "Usuarios",
      "icon": "fa fa-users",
      "parent": "2",
      "id_menu": "3",
      "id_menu_padre": "2",
      "partialSelected": true,
      "leaf": false,
      "key": "3",
      "tipo": "P",
      "children": [{
        "data": "4",
        "label": "Mantenimiento de Usuarios",
        "icon": "fa fa-user",
        "parent": "3",
        "id_menu": "4",
        "id_menu_padre": "3",
        "partialSelected": false,
        "leaf": true,
        "key": "4",
        "tipo": "O"
      }, {
        "data": "5",
        "label": "Cambio de Clave",
        "icon": "fa fa-unlock-alt",
        "parent": "3",
        "id_menu": "5",
        "id_menu_padre": "3",
        "partialSelected": false,
        "leaf": true,
        "key": "5",
        "tipo": "O"
      }, {
        "data": "6",
        "label": "Favoritos",
        "icon": "fa fa-star",
        "parent": "3",
        "id_menu": "6",
        "id_menu_padre": "3",
        "partialSelected": false,
        "leaf": true,
        "key": "6",
        "tipo": "O"
      }]
    }, {
      "data": "7",
      "label": "Seguridades",
      "icon": "fa fa-key",
      "parent": "2",
      "id_menu": "7",
      "id_menu_padre": "2",
      "partialSelected": true,
      "leaf": false,
      "key": "7",
      "tipo": "P",
      "children": [{
        "data": "8",
        "label": "Mantenimiento de Perfil",
        "icon": "fa fa-id-card",
        "parent": "7",
        "id_menu": "8",
        "id_menu_padre": "7",
        "partialSelected": false,
        "leaf": true,
        "key": "8",
        "tipo": "O"
      }, {
        "data": "9",
        "label": "Permisos",
        "icon": "fa fa-shield",
        "parent": "7",
        "id_menu": "9",
        "id_menu_padre": "7",
        "partialSelected": false,
        "leaf": true,
        "key": "9",
        "tipo": "O"
      }]
    }]
  }, {
    "data": "10",
    "label": "Facturacion Electronica",
    "icon": "fa fa-money",
    "parent": "1",
    "id_menu": "10",
    "id_menu_padre": "1",
    "partialSelected": true,
    "leaf": false,
    "key": "10",
    "tipo": "P",
    "children": [{
      "data": "11",
      "label": "Parametros",
      "icon": "fa fa-indent",
      "parent": "10",
      "id_menu": "11",
      "id_menu_padre": "10",
      "partialSelected": false,
      "leaf": false,
      "key": "11",
      "tipo": "P",
      "children": [{
        "data": "12",
        "label": "Ambiente",
        "icon": "fa fa-file-text-o",
        "parent": "11",
        "id_menu": "12",
        "id_menu_padre": "11",
        "partialSelected": false,
        "leaf": true,
        "key": "12",
        "tipo": "O"
      }, {
        "data": "14",
        "label": "Parametros FE",
        "icon": "fa fa-newspaper-o",
        "parent": "11",
        "id_menu": "14",
        "id_menu_padre": "11",
        "partialSelected": false,
        "leaf": true,
        "key": "14",
        "tipo": "O"
      }]
    }, {
      "data": "15",
      "label": "Transacciones",
      "icon": "fa fa-gears",
      "parent": "10",
      "id_menu": "15",
      "id_menu_padre": "10",
      "partialSelected": true,
      "leaf": false,
      "key": "15",
      "tipo": "P",
      "children": [{
        "data": "16",
        "label": "Procesar Dctos Electronicos",
        "icon": "fa fa-file-text",
        "parent": "15",
        "id_menu": "16",
        "id_menu_padre": "15",
        "partialSelected": false,
        "leaf": true,
        "key": "16",
        "tipo": "O"
      }]
    }]
  }];

  files: TreeNode[];
  selectMultiplePlaces: TreeNode;
  selectedFiles: any = [];

  constructor() { }

  ngOnInit() {
    this.files = [
      {
        label: 'Folder 1',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open'
          },
          {
            label: 'File 1',
            icon: 'fa-file-o'
          }
        ]
      }
    ];
  }
}
