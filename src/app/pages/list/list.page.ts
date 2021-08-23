import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  ususarios: Observable<any>;



  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.ususarios = this.dataService.getUsuarios();
  }

  favorite(item: any){
    console.log('favorite',item);
    this.ionList.closeSlidingItems();
  }

  share(item: any) {
    console.log('share',item);
    this.ionList.closeSlidingItems();
  }

  delete(item) {
    console.log('delete',item);
    this.ionList.closeSlidingItems();
  }

}
