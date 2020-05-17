import { Component, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  navigate(destination: string) {
    if (destination == '') {
      this.router.navigate(['']);
    }
    
    if (destination == 'dragdrop') {
      this.router.navigate(['/dragdrop']);
    }

    if (destination == 'quiz') {
      this.router.navigate(['/quiz']);
    }

    if (destination == 'cart') {
      this.router.navigate(['/cart']);
    }
  }
}
