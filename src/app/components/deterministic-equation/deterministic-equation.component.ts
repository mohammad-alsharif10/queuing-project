import {Component, OnInit} from '@angular/core';
import {Queue} from '../../model/queue';
import {Result} from '../../model/result';

@Component({
   selector: 'app-deterministic-equation',
   templateUrl: './deterministic-equation.component.html',
   styleUrls: ['./deterministic-equation.component.css']
})
export class DeterministicEquationComponent implements OnInit {

   queue: Queue = new Queue();
   result: Result = new Result();

   constructor() {
   }

   ngOnInit(): void {
   }

   calculateResult(): void {
      let NT = Math.floor(this.queue.lambda * this.queue.timeToCompute)
         - Math.floor((this.queue.mu * this.queue.timeToCompute) - (this.queue.mu / this.queue.lambda));
      if (NT <= 0) {
         this.result.Nt = 0;
      } else {
         this.result.Nt = NT;
      }
   }

}
