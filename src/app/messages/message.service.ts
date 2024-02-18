import { Injectable } from '@angular/core';
import { Message } from './message.model'
import { MOCKMESSAGES } from './MOCKMESSAGES'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: Message[]=[];

  constructor() {
    this.message = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.message.slice();
  }

  getMessage(id: string): Message {
    return this.message.find((c) => c.id === id);
  }
}
