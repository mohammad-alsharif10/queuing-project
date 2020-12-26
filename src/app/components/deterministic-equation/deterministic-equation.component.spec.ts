import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeterministicEquationComponent} from './deterministic-equation.component';

describe('DeterministicEquationComponent', () => {
   let component: DeterministicEquationComponent;
   let fixture: ComponentFixture<DeterministicEquationComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
            declarations: [DeterministicEquationComponent]
         })
         .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(DeterministicEquationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
