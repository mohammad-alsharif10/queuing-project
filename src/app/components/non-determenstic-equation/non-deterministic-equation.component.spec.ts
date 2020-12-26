import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NonDeterministicEquationComponent} from './non-deterministic-equation.component';

describe('NonDetermensticEquationComponent', () => {
   let component: NonDeterministicEquationComponent;
   let fixture: ComponentFixture<NonDeterministicEquationComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
            declarations: [NonDeterministicEquationComponent]
         })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(NonDeterministicEquationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
