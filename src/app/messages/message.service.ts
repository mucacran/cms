import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model'
import { MOCKMESSAGES } from './MOCKMESSAGES'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: Message[]=[];
  //
  messageChangedEvent  = new EventEmitter<Message[]>();

  constructor() {
    this.message = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.message.slice();
  }

  getMessage(id: string): Message {
    return this.message.find((c) => c.id === id);
  }

  addMessage(message:Message){
    this.message.push(message);
    this.messageChangedEvent.emit(this.message.slice());
  }

  getNextId(): string {
    return (this.message.length > 1) ? '' + (Number(this.message[this.message.length - 1].id) + 1) : '0';
  }
}
