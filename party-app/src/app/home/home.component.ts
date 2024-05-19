import {Component, OnInit} from '@angular/core';
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements  OnInit{

  constructor(private oidcSecurityService:OidcSecurityService,
              private  http:HttpClient) {
  }

  isAuthenticated = false;
  loggedInMessage = "Please login";
  accessToken:string = "";
  idToken:string = "";
  userData = this.oidcSecurityService.userData$
  ngOnInit(): void {

      this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated})=> {
          this.isAuthenticated = isAuthenticated;
          if(this.isAuthenticated) {
            // this.oidcSecurityService.getIdToken().subscribe(x=> {
            //   this.loggedInMessage = x;
            // });

            // this.oidcSecurityService.getAccessToken().subscribe(x=>{
            //   this.accessToken = x;
            //  // this.accessToken = x;
            //  // localStorage.setItem("idToken",x);
            //  //  console.log("Http Request");
            //  //  console.log(x);
            //  //  const headers = new HttpHeaders({
            //  //    "Content-Type":"application/json",
            //  //    "Authorization":`Bearer ${x}`
            //  //  });
            //  //  this.http.get<any>("http://localhost:5133/api/Profile",{ headers:headers})
            //  //    .subscribe(response=> {
            //  //      this.loggedInMessage = response.name;
            //  //    })
            //
            // });
            // this.oidcSecurityService.getIdToken().subscribe(x=> {
            //   this.idToken =x ;
            // })
          }
          if(this.isAuthenticated) {
            this.http.get<any>("http://localhost:5133/api/Profile")
              .subscribe(result =>  {
                this.loggedInMessage = `Welcome ${result.name}`;
              })
          }
          else {
             this.loggedInMessage = "Please login";
          }

      })

  }

}
