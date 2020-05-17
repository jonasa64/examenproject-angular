import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

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


  constructor(private breakpointObserver: BreakpointObserver) { }

  // constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  // navigate(destination: string) {
  //   if (destination == '') {
  //     this.router.navigate(['']);
  //   }
    
    // if (destination == 'signup') {
    //   this.router.navigate(['/signup']);
    // }

    // if (destination == 'add') {
    //   this.router.navigate(['/add']);
    // }

    // if (destination == 'shirt') {
    //   this.router.navigate(['/shirt']);
    // }

    // if (destination == 'login') {
    //   this.router.navigate(['/login']);
    // }

    // if (destination == 'cart') {
    //   this.router.navigate(['/cart']);
    // }
    // if (destination == 'orders') {
    //   this.router.navigate(['/orders']);
    // }

    // if (destination == 'orders') {
    //   this.router.navigate(['/orders']);
    // }
  // }
}
