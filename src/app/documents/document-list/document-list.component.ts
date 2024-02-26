import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})

/*
export class DocumentListComponent {
  documents: Document[] = [];

  constructor(private documentService:DocumentService){}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }
}*/


export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  documentId: string = '';

  constructor(private documentService: DocumentService) {
    this.documents = this.documentService.getDocuments();
  }
  ngOnInit() {}

}
