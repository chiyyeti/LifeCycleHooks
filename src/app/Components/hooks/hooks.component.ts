import { Component, DoCheck,  OnChanges,  OnInit, SimpleChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

public myNumber:number=0;

isVisible:boolean=true
 
// get counter(){
//   return this.myNumber;
// }
// set counter(value){
//   this.myNumber=value
// }

  constructor() {
    
    // constructor used for DI 
  }  



  
  ngOnInit(): void {
    
  }
  increment(){
    this.myNumber++
  }

  decrement(){
    this.myNumber--;
  }
  
  switch(){
    this.isVisible = !this.isVisible
  }
  

}
