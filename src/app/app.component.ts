import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testkt1';   

  environmentInfo:string = '';
  environmentUrl:string = '';
  ngOnInit(): void {
    if (environment.production) {
      this.environmentInfo = 'Producción';
      this.environmentUrl = environment.baseUrlAPI;
    
    } else {
      this.environmentInfo = 'Desarrollo';
      this.environmentUrl = environment.baseUrlAPI;
    }
  }
}
