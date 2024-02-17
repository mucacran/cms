import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [];

  // @Output() selectedContactEvent = new EventEmitter<Contact>();

  // onSelected(contact: Contact) {
  //   this.selectedContactEvent.emit(contact);
  // }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
