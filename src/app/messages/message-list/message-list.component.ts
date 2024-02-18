import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})

export class MessageListComponent implements OnInit{

    //sample list of message to the test this component
    messages: Message[]=[];

    constructor(private messageService: MessageService){}

    ngOnInit(): void {
      this.messages = this.messageService.getMessages();
      this.messageService.messageChangedEvent.subscribe((messages: Message[]) => {
        this.messages = messages;
      });
    }

    //ad a message to the message list
    //ya no se necesita este metodo
    // onAddMessage(message: Message){
    //   this.messages.push(message);
    // }
}