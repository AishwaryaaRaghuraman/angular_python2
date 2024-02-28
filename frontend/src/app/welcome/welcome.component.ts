import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string = "";
 
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.http.get<any>('http://localhost:5000/').subscribe(data => {
          this.message = data.message;
    });
  }
}