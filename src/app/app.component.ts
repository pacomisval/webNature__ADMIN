import { Component } from '@angular/core';
import { faFilm, faFish, faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faTwitterSquare, faFacebook, faAngular, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appAdmin';
  filmIcon = faFilm;
  fishIcon = faFish;
  bellIcon = fasBell;
  bollIcon = farBell;
  twitterIcon = faTwitterSquare;
  facebookIcon = faFacebookSquare;
  angularIcon = faAngular;
}
