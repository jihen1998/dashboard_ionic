import { Component, OnInit } from '@angular/core';
import {RestaurantInfoService} from '../../Services/RestaurantInfoService/restaurant-info.service';
import {RestaurantInfo} from '../../Models/restaurant-info';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  constructor(private restauservice: RestaurantInfoService) { }
  myRI: RestaurantInfo = new RestaurantInfo();

  ngOnInit(): void {
    this.restauservice.myRestau().subscribe((data: RestaurantInfo[]) => {
      this.myRI = data[0];
      console.log(this.myRI.nom_restaurant);
    });
  }

}
