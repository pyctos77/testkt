
import { firstValueFrom, Observable, of } from 'rxjs';
import { ConfigurationExampleService } from './core/servicios/configuration-example.service';

export function initializeApp(configService: ConfigurationExampleService): ()=> Promise<any> {
    return () => configService.loadConfig();
 }
