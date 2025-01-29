import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResults } from "./investment-results/investment-results.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResults],
  templateUrl: './app.component.html'
})
export class AppComponent { 
  

  
}
