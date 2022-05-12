import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed:boolean = true;
  // @Output -> So we can listen on the parent component, which is app.component in this case
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(feature:string){
    this.featureSelected.emit[feature];
    console.log(feature);
  }
}
