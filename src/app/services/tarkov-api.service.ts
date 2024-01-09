import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../enums/urls';

@Injectable({
  providedIn: 'root',
})
export class TarkovApiService {
  constructor(private http: HttpClient) {}

  getBarterItem(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Add headers to the HTTP request
    const options = { headers: headers };

    const reqBody: string = JSON.stringify({
      query: `query {
          items(ids: ["55d482194bdc2d1d4e8b456b",
            "572b7fa524597762b747ce82",
            "57e26fc7245977162a14b800",
            "5841474424597759ba49be91",
            "5af08cf886f774223c269184"
          ]) {
            id
            shortName
            inspectImageLink
          }
      }`,
    });

    return this.http.post<any>(Urls.BASE_TARKOV_API, reqBody, options);
  }
}
