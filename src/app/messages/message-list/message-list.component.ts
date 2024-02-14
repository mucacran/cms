import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.module'

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit{


    //sample list of message to the test this component
    messages: Message[]=[
      new Message('1','message 1','this is the first message', 'Danniel'),
      new Message('2','message 2','this is the first message', 'Jonny'),
      new Message('3','message 3','this is the first message', 'Carlos')
    ];

    constructor(){}

    ngOnInit(): void {}

    //ad a message to the message list
    onAddMessage(message: Message){
      this.messages.push(message);
    }

}
