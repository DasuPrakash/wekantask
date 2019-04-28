import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';
import { IgxColumnComponent } from 'igniteui-angular';

import {RemoteService} from './../services/remote.service';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-gridsample',
  templateUrl: './gridsample.component.html',
  styleUrls: ['./gridsample.component.scss'],
  providers:[RemoteService,ChatService]
})
export class GridsampleComponent implements OnInit {
  ngOnInit(){
  }
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe((msg:any) => {
      let msg1:[]=msg;
      msg1.forEach(e => {
      console.log( e[0], e[1]);
      this.dataupdate(e[0], e[1]);
      });
    });
  }
dataupdate(k,v){
let old=this.data[k];
let op1=0;
let status="initial";
if(old){
op1=old.np;
if((v-op1)>0){
  status="up";
}else{
  status="down";
}
}
    this.data[k]={name:k,np:v,op:op1,dif:v-op1,status:status};
}
  private message = {
    author: "tutorialedge",
    message: "this is a test message"
  };
  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.chatService.messages.next(this.message);
    this.message.message = "";
  }
  public localData: any[];
  title = 'gridsample';
  exampleSocket:WebSocket;
  data:any=new Object();
  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
  
}
