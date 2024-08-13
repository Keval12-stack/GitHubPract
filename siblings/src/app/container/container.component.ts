import { Component, OnInit , Input, ViewChild, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titleName:string='';
  
  onBtnClick(){
    console.log(this.titleName);
    
  }

  // @ViewChild('headerVar') accessHeader:ComponentRef<string>;
  
}
