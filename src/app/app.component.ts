import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user: any = null;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    })
  }

}
