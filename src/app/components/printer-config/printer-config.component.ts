import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PrintService, UsbDriver, WebPrintDriver} from 'ng-thermal-print';
import { Observable } from 'rxjs';
import sampleData from './../../../assets/Config/test.json';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-printer-config',
  templateUrl: './printer-config.component.html',
  styleUrls: ['./printer-config.component.css']
})
export class PrinterConfigComponent implements OnInit {

  constructor(private printService: PrintService, private cookies: CookieService) {
    this.usbPrintDriver = new UsbDriver();
    this.printService.isConnected.subscribe(result => {
      this.status = result;
      if (result) {
        console.log('Connected to printer!!!');
      } else {
        console.log('Not connected to printer.');
      }
    });
  }
  status = false;
  usbPrintDriver: UsbDriver;
  webPrintDriver: WebPrintDriver;
  ip = '';
  driver : any = sampleData;
  http : HttpClient;
  ngOnInit(): void {
 // console.log(this.getJSON());

  }

  requestUsb() {
    this.usbPrintDriver.requestUsb().subscribe(result => {
      this.printService.setDriver(this.usbPrintDriver);
      console.log(typeof(this.usbPrintDriver));
    });
  }

  public getJSON(): Observable<any> {
    return this.driver;
}

  connectToWebPrint() {
    console.log(this.ip);
    this.webPrintDriver = new WebPrintDriver(this.ip);
    this.printService.setDriver(this.webPrintDriver);
  }

  print() {
    this.printService.init()
      .setBold(true)
      .writeLine('Hello World!')
      .setBold(false)
      .feed(4)
      .cut('full')
      .flush();
  }

}
