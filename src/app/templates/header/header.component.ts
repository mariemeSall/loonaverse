import { Component } from '@angular/core';
import { routes } from "../../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected readonly routes = routes;
  protected sep: string= "/";
}
