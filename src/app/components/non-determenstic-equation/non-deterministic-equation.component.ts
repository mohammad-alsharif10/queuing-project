import {Component, OnInit} from '@angular/core';
import {Queue} from '../model/queue';
import {Result} from '../model/result';

@Component({
   selector: 'app-non-deterministic-equation',
   templateUrl: './non-deterministic-equation.component.html',
   styleUrls: ['./non-deterministic-equation.component.css']
})
export class NonDeterministicEquationComponent implements OnInit {

   queue: Queue = new Queue();
   result: Result = new Result();

   constructor() {
   }

   ngOnInit(): void {
   }

   calculateResult() {
      let l = this.queue.lambda / (this.queue.mu - this.queue.lambda);
      let lq = (this.queue.lambda * this.queue.lambda) / (this.queue.mu * (this.queue.mu - this.queue.lambda));
      let w = 1 / (this.queue.mu - this.queue.lambda);
      let wq = this.queue.lambda / (this.queue.lambda - this.queue.mu);
      if (l < 0) {
         this.result.L = 0;
      } else {
         this.result.L = this.queue.lambda / (this.queue.mu - this.queue.lambda);
      }
      if (lq < 0) {
         this.result.LQ = 0;
      } else {
         this.result.LQ = (this.queue.lambda * this.queue.lambda) / (this.queue.mu * (this.queue.mu - this.queue.lambda));
      }
      if (w < 0) {
         this.result.W = 0;
      } else {
         this.result.W = 1 / (this.queue.mu - this.queue.lambda);
      }
      if (wq < 0) {
         this.result.WQ = 0;
      } else {
         this.result.WQ = this.queue.lambda / (this.queue.lambda - this.queue.mu);
      }
   }
}
