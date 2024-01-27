import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact(
      "1",
      "R. Kent Jackson",
      "jacksonk@byui.edu",
      "208-496-3771",
      "../../assets/images/jacksonk.jpg",
      ),
      new Contact(
        "2",
        "Rex Barzee",
        "barzeer@byui.edu",
        "208-496-3768",
        "../../assets/images/barzeer.jpg",
        ),
      ]
}
