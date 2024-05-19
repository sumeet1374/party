import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  constructor(private authService:AuthService) {
  }


    showAdminMenu = false;
    showMobileMenu = false;
    showLogoutDropDown = false;
    isAuthenticated = false;
    userData:any ;




    reset(){
      this.showMobileMenu = false;
      this.showAdminMenu = false;
      this.showLogoutDropDown = false;

    }
    @HostListener("document:click",["$event"])
    handleHostClick(event:any) {
     this.reset();
      event.stopPropagation();
    }

    adminMenuClick(event:any){
      this.showAdminMenu = true;

      event.stopPropagation();
    }

    mobileBurgerClick(event:any):void {
      this.showMobileMenu = !this.showMobileMenu;
      event.stopPropagation();
    }

    profileMenuClick(event:any):void {
      this.showLogoutDropDown = true;
      event.stopPropagation();
    }

  ngOnInit(): void {
      this.authService.checkAuth()
        .subscribe(({ isAuthenticated,userData })=> {
          this.isAuthenticated = isAuthenticated;
          this.userData = userData;
        })
  }

  login(event:any) {
      this.authService.login();
      event.stopPropagation();
  }

  logout(event:any) {
      this.authService.logout().subscribe(()=> {

      });

    event.stopPropagation();
  }


}
