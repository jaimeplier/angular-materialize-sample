import { Component, EventEmitter } from '@angular/core';
import { toast } from 'angular2-materialize';
// Needed for feature discovery
import {MaterializeAction} from "angular2-materialize"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tapTargetActions = new EventEmitter<MaterializeAction>();

  ngOnInit() {

 }

 openTapTarget() {
  this.tapTargetActions.emit({action:"tapTarget",params:["open"]});
}
closeTapTarget() {
  this.tapTargetActions.emit({action:"tapTarget",params:["close"]});
}

 toasty() {
   console.log("derp")
   toast("I am the best toast there is!")
 }
}
