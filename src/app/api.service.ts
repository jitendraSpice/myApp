import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/xml' })
};
// tslint:disable-next-line: no-unused-expression
// tslint:disable-next-line: max-line-length
// tslint:disable-next-line: no-unused-expression
const Xmlrequest = '\'<?xml version='; 1.0; '?> <PidOptions ver='; 1.0; '> <Opts fCount='; ' + 5 + '; ' fType='; ' + "FMR" + '; ' iCount='; ' + 1 + '; ' pCount='; ' + 1 + '; ' format='; ' + 0 + '; '   pidVer='; ' + 2.0 + '; ' timeout='; ' + 60000 + '; ' posh='; 'UNKNOWN'; ' env='; ' + '; 'PP'; ' + '; ' /> \' + this.DemoFinalString + \'<CustOpts><Param name='; 'mantrakey'; ' value='; ' + $("#txtCK").val() + '; ' /></CustOpts> </PidOptions>\'';
const apiUrl = 'http://localhost:3000/sender/8199063979';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpRequest: any;
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured::', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}` + `body was: ${error.error}`);
    }
    return throwError('some thing bad happened; please try in later');
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getDataUser(): Observable<any> {
    return this.http.get(apiUrl).pipe(map(this.extractData),
      catchError(this.handleError));
  }
  customMethodData() {
    const xhr = new XMLHttpRequest();
    xhr.open('DEVICEINFO', 'https://127.0.0.1:11100');
    // create a JSON object
    const params = '<?xml version="1.0"?> <PidOptions ver="1.0"> <Opts fCount="' + 5 + '" fType="' + "FMR" + '" iCount="' + 1 + '" pCount="' + 1 + '" format="' + 0 + '"   pidVer="' + 2.0 + '" timeout="' + 60000 + '" posh="UNKNOWN" env="' + 'PP' + '" /> ' + 'this.DemoFinalString' + '<CustOpts><Param name="mantrakey" value="' + '' + '" /></CustOpts> </PidOptions>';
    // set `Content-Type` header
    xhr.setRequestHeader('Content-Type', 'text/xml');

    // pass `params` to `send()` method
    xhr.send(params);

    // listen for `load` event
    xhr.onload = () => {
      console.log(xhr.responseText);
      this.deviceCapture();
    };
  }

  deviceCapture() {
    const xhr = new XMLHttpRequest();
    xhr.open('CAPTURE', 'http://https://127.0.0.1:11100');
    const reqParam = '<?xml version="1.0"?> <PidOptions ver="1.0"> <Opts fCount="1" fType="0" iCount="0" pCount="0" format="0"   pidVer="2.0" timeout="10000" posh="UNKNOWN" env="P" /> <CustOpts><Param name="mantrakey" value="undefined" /></CustOpts> </PidOptions>';
    xhr.setRequestHeader('Content-Type', 'text/xml');

    // pass `params` to `send()` method
    xhr.send(reqParam);
    // listen for `load` event
    xhr.onload = () => {
      console.log('device capture:::', xhr.responseText);
    };
  }
  // alertContents() {
  //   if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
  //     if (this.httpRequest.status === 200) {
  //       alert(this.httpRequest.responseText);
  //     } else {
  //       alert('There was a problem with the request.');
  //     }
  //   }else{
  //     console.log('this.httpRequest.responseText', this.httpRequest.responseText);
  //   }
  // }

}
