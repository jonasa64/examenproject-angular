import { Component, OnInit } from '@angular/core';
import { MerchService } from '../services/merch.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  merch: any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private merchService: MerchService,
    private route: ActivatedRoute) { }


    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      console.log(id + "ddddddddddddd");

      if(id){
        this.merchService.findOne(id).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          merch => {this.merch = merch});
      }

    });

  }

  submit(){
    console.log(this.merch);
    this.merchService.update(this.merch.id, this.merch);
  }

}
