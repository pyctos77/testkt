import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HeaderComponent } from './share/componentsUI/header/header.component';
import { ConfigurationExampleService } from './core/servicios/configuration-example.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testkt1';   

  apiUrl:string ='';
  environmentInfo:string = '';
  environmentUrl:string = '';

constructor(private configService: ConfigurationExampleService){}


  ngOnInit(): void {

    this.apiUrl = this.configService.getConfig().apiUrl || 'No URL found';

    if (environment.production) {
      this.environmentInfo = 'Producción';
      this.environmentUrl = environment.baseUrlAPI;
    
    } else {
      this.environmentInfo = 'Desarrollo';
      this.environmentUrl = environment.baseUrlAPI;
    }
  }
}
