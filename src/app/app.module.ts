import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import {TabMenuModule} from 'primeng/tabmenu';
import {DeterministicEquationComponent} from './components/deterministic-equation/deterministic-equation.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NonDeterministicEquationComponent} from './components/non-determenstic-equation/non-deterministic-equation.component';
import {MenubarModule} from 'primeng/menubar';
import {IntroComponent} from './components/intro/intro.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
   {
      path: '',
      component: IntroComponent
   },
   {
      path: 'deterministic-equation',
      component: DeterministicEquationComponent
   },
   {
      path: 'non-deterministic-equation',
      component: NonDeterministicEquationComponent
   },
   {
      path: 'intro',
      component: IntroComponent
   },
   {
      path: 'not-found',
      component: NotFoundComponent
   },
   {
      path: '**',
      redirectTo: '/not-found'
   }
];

@NgModule({
   declarations: [
      AppComponent,
      DeterministicEquationComponent,
      NavbarComponent,
      NotFoundComponent,
      NonDeterministicEquationComponent,
      IntroComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MessageModule,
      TabMenuModule,
      RouterModule.forRoot(appRoutes),
      MenubarModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
