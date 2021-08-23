import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

// interface Componente {
//   icon: string;
//   name: string;
//   redirectTo: string;
// }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // componentes: Componente[] = [
  //   {
  //     icon: 'american-football',
  //     name: 'Action Sheet',
  //     redirectTo: '/action-sheet'
  //   },
  //   {
  //     icon: 'apps',
  //     name: 'Alert',
  //     redirectTo: '/alert'
  //   },
  //   {
  //     icon: 'beaker-outline',
  //     name: 'Avatar',
  //     redirectTo: '/avatar'
  //   },
  //   {
  //     icon: 'radio-button-off-outline',
  //     name: 'Button',
  //     redirectTo: '/button'
  //   },
  //   {
  //     icon: 'card-outline',
  //     name: 'Cards',
  //     redirectTo: '/card'
  //   },
  //   {
  //     icon: 'checkbox-outline',
  //     name: 'Checkbox',
  //     redirectTo: '/checkbox'
  //   },
  //   {
  //     icon: 'calendar-outline',
  //     name: 'DateTime',
  //     redirectTo: '/date-time'
  //   },
  //   {
  //     icon: 'car-outline',
  //     name: 'Fab',
  //     redirectTo: '/fab'
  //   },
  //   {
  //     icon: 'grid-outline',
  //     name: 'Grid',
  //     redirectTo: '/grid'
  //   },
  //   {
  //     icon: 'infinite-outline',
  //     name: 'Infinite',
  //     redirectTo: '/infinite'
  //   },
  //   {
  //     icon: 'hammer-outline',
  //     name: 'Input',
  //     redirectTo: '/input'
  //   },
  //   {
  //     icon: 'list-outline',
  //     name: 'List-Sliding',
  //     redirectTo: '/list'
  //   },
  //   {
  //     icon: 'reorder-three-outline',
  //     name: 'List-reorder',
  //     redirectTo: '/list-reorder'
  //   },
  //   {
  //     icon: 'reload-outline',
  //     name: 'Loading',
  //     redirectTo: '/loading'
  //   },
  // ];

  componentes: Observable<Componente[]>;

  constructor( private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

}
