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
    new Document('1','DummyDocument 1', 'this is DummyDocument 1.', 'https://www.byui.com/1'),
    new Document('2','DummyDocument 2', 'this is DummyDocument 2.', 'https://www.byui.com/2'),
    new Document('3','DummyDocument 3', 'this is DummyDocument 3.', 'https://www.byui.com/3'),
    new Document('4','DummyDocument 4', 'this is DummyDocument 4.', 'https://www.byui.com/4'),
  ];

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
