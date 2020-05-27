import { Component, OnInit } from '@angular/core';
import { MerchService } from '../services/merch.service';
import { Merch } from './merch';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  merchs: any;

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
