import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {
@Input() myNumber: any

  constructor() {
    console.log("Constructor calls first but it's not a lifecycle hook");
    // called before any hook to inject dependency
   }
   
   // 1 st Life cycle hook
   ngOnChanges(changes: SimpleChanges): void {  // it is called for every changes in input bound
    const newNumberChange:SimpleChange =changes.myNumber;
    console.log("ngOnChanges() => Previous Value : ",newNumberChange.previousValue);
    console.log("ngOnChanges() => Current Value : ",newNumberChange.currentValue);
    // called after a bound input property changes
  }

  
  // 2 nd life cycle hook
  // it is called once after ngOnChanges
  ngOnInit(): void {
    console.log("ngOnInit() => Value :",this.myNumber);
    console.log("ngOnInit() => Only executed ");
    // callled once the component is initialized
    
  }
  
  
  // 3 rd Life cycle hook
  // it catches the changes that ngOnCnhanges won't catch  and it is called every time after ngOnChanges
  ngDoCheck(): void {
    console.log("ngDoCheck() => Value :",this.myNumber);
    // called during every chaange detection run
  }


  
  // 4 th life cycle hook
  ngAfterContentInit(){
    console.log("ngAfterContentInit() => Only Executed Once ");
    // called after the ng-content has been projected into view
  }


  
  // 5 th life cycle hook
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() => It is called for every change after ngAfterContentInit() ");
    // callled every time projected content has been checked
  }
  

  // 6 th life cycle hook
  ngAfterViewInit(){
    console.log("ngAfterViewInit() => It gets called once after ngAfterContentChecked() ");
    // called after component(child) view has been initialized
  }

  // 7 th  life cycle hook
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() => It gets called every change after ngAfterViewInit() ");
    //  called every time component(child) view has been checked
  }

  // 8 th life cycle hook
  ngOnDestroy(){
    console.log("Component has been Destroyed !!");
    //  called once the component is about to destroy
  }

  
  

}
