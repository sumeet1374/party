import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {AuthModule, LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit{
  title = 'party-app';
  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(()=>{

    });
  }



}
