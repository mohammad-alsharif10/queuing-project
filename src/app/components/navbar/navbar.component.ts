import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';


@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   items: MenuItem[];
   activeItem: MenuItem;

   constructor(private router: Router) {
   }

   ngOnInit(): void {
      this.items = [
         {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: _ => this.router.navigate(['/intro']).then(value => console.log(value)),
         },
         {
            label: 'Deterministic Equation',
            command: _ => this.router.navigate(['/deterministic-equation']).then(value => console.log(value)),
         },
         {
            label: 'Non Deterministic Equation',
            command: _ => this.router.navigate(['/non-deterministic-equation']).then(value => console.log(value)),
         }
      ];

      this.activeItem = this.items[0];
   }

}
