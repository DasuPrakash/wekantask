import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { RemoteService } from "./remote.service";
import { map } from 'rxjs/operators';
const CHAT_URL = "ws://stocks.mnet.website";

export interface Message {
  author: string;
  message: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: RemoteService) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe( map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return data;
      }
      ));
  }
}