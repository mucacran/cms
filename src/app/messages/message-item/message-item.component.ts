import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  messageSender: string;

  contacts: Contact[];
  subscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.subscription = this.contactService.getContacts().subscribe({
      next: (contacts: Contact[]) => {
        this.contacts = contacts;
        const messageSenderContact = this.contacts.find(contact => contact.id === this.message.sender);
        console.log("---------------------------");
        console.log(messageSenderContact?.id);
        if (messageSenderContact) {
          this.messageSender = messageSenderContact.name + " - " + messageSenderContact.id;
        } else {
          console.log("else: " + this.message.sender);
          this.messageSender = 'Desconocido';
        }
      },
      error: (error: any) => {
        console.error(error); // Maneja el error de manera adecuada
      },
    });
  }
}
