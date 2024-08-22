import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  serverElements:any=[];
  newServerName='';
  newServerContent='';
  @Output() serverCreated =new EventEmitter<{serverName:string,serverContent:string}>();
  onAddServer()
  {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
   
  }
  onAddBluePrint()
  {
   
  }
}
