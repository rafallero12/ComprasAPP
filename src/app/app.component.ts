import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit () {
    firebase.initializeApp ( {
      apiKey: "AIzaSyB6x05xi8h6-Y9eSWKsMEilDpfv_vU94Ds",
      authDomain: "comprasapp-87212.firebaseapp.com",
      databaseURL: "https://comprasapp-87212.firebaseio.com",
      projectId: "comprasapp-87212",
      storageBucket: "comprasapp-87212.appspot.com",
      messagingSenderId: "103233075262"
    } );
  }
}
