import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions : Array<any> = [
    {title : "Page", "route": "/page", icon: "house"},
    {title : "Tableau", "route": "/tableau", icon: "arrow-right"}
  ];
  //stocker l'action fait par les boutons (action courrante)
  currentAction : any;
  setCurrentAction (action:any){
    this.currentAction = action;
  }
}
