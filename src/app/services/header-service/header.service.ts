import { Injectable } from '@angular/core';
import {AngularFireStore, AngularFireStoreCollection} from "@angular/fire/compat/firestore";
import {Header} from "../../models/header/header.model";
@Injectable({
  providedIn: 'root'
})

export class HeaderService {
accesoHeader = "header service running...";
  constructor() { }
}
