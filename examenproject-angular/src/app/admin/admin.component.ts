import { Component, OnInit } from '@angular/core';
import { MerchService } from '../services/merch.service';
import { Merch } from '../merch/merch';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  merchs: Merch[];

  constructor(private merchService: MerchService) { }

  ngOnInit(): void {

    this.merchService.getAllShirts().subscribe((data: Merch[]) => {
      console.log(data)
      this.merchs = data;
    }, error => {
      console.log(error);
    })

  }

}
