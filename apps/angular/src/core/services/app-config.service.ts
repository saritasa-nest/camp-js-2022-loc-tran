import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

/** Store config information. */
@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  /** Api address. */
  public readonly apiUrl = environment.apiUrl;

  /** Api key for request. */
  public readonly apiKey = environment.apiKey;
}
