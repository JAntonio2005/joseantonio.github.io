import { Injectable } from '@angular/core';
import { Header } from "../../models/header/header.model";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private dbPath = "/header";
  headerRef: AngularFirestoreCollection<Header>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  // Método para obtener los datos de la colección 'header'
  getHeader(): Observable<Header[]> {
    return this.headerRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({
          id: c.payload.doc.id, 
          ...c.payload.doc.data()
        }))
      )
    );
  }
}

