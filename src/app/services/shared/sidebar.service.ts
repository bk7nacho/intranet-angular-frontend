import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Main',
      submenu: [
        { titulo: 'Dashboard', icono: 'icon-home', url: '/dashboard' },
        { titulo: 'ProgressBar', icono: 'icon-envelope', url: '/progress' },
        { titulo: 'Gráficas', icono: 'icon-bubbles', url: '/graficas1' }
      ]
    }
  ];

  constructor() { }
}
