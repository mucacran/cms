import { EventEmitter, Injectable } from '@angular/core';
import { Document } from '../documents/document.model'
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  bdD:string = 'https://cms-byui-wd430-default-rtdb.firebaseio.com/documents.json';

  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent = new Subject<Document[]>();

  maxDocumentId: number;

  documents: Document[] = [];
  constructor(private http: HttpClient) {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }
  
  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.bdD).pipe(
      map(documents => {
        // Assign the array of documents received to the documents property
        this.documents = documents;

        // Call the getMaxId() method to get the maximum value used for the id property
        this.maxDocumentId = this.getMaxId();
        console.log("desde document.list1: " + this.maxDocumentId);

        // Sort the list of documents by name
        this.documents.sort((a, b) => a.name.localeCompare(b.name));

        this.documentListChangedEvent.next(this.documents.slice());

        // Return the processed documents
        console.log("2: " + documents);
        return documents;
      })
    );
  }

  getDocument(id: string): Document {
    return this.documents.find((c) => c.id === id);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());
  }
  //semana 7
  getMaxId(): number {
    let maxId = 0;
    for (let document of this.documents) {
      let currentId = parseInt(document.id);
      if (currentId > maxId) {
        maxId = currentId
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++
    let maxIdString = this.maxDocumentId.toString();
    newDocument.id = maxIdString;

    this.documents.push(newDocument);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (originalDocument === undefined || originalDocument === null) {
      return;
    }
    if (newDocument === undefined || newDocument === null) {
      return;
    }

    const position = this.documents.indexOf(originalDocument);
    if (position < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[position] = newDocument;
    this.documentListChangedEvent.next(this.documents.slice());
  }
}
