import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter();
  documents =[
    new Document('1','Doc 1', 'this is Doc 1.', 'https://www.byui.com/1'),
    new Document('2','Doc 2', 'this is Doc 2.', 'https://www.byui.com/2'),
    new Document('3','Doc 3', 'this is Doc 3.', 'https://www.byui.com/3'),
    new Document('4','Doc 4', 'this is Doc 4.', 'https://www.byui.com/4'),
  ];

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
