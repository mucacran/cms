import { Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: any[] = [];
  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): any[]{
    return this.documents.slice();
  }

  getDocument(id: string): any {
    return this.documents.find((c) => c.id === id);
   } 
}
