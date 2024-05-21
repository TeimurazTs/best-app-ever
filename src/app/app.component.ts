import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'best-app-everrrr';
  navBackground!: any;

  constructor(private translate: TranslateService){

  }

  @HostListener('document:scroll') scrollover(){
     
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navBackground = {
        'background-color':'rgba(0,0,0,0.7)'
      }
    }else
    {
        this.navBackground = {
          'background-color':''
        }
    }
  }

}
