import {Component, OnInit, ViewChild} from '@angular/core';
import * as Chartist from 'chartist';
import {StatisticsService} from '../Services/StatisticsService/statistics.service';
import {Turnover} from '../Models/turnover';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {StripeService} from '../Services/StripeService/stripe.service';
import {PlatService} from '../Services/platService/plat.service';
import {DatePipe} from '@angular/common';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {Plat} from '../Models/plat';
import {Userswithhistoric} from '../Models/userswithhistoric';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AllTicketsComponent} from '../components/all-tickets/all-tickets.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserService} from '../Services/UserService/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private si: StatisticsService, private stripeserv: StripeService,
              private ps: PlatService, private datepipe: DatePipe, private dialog: MatDialog,
              private us: UserService) {
  }

  listAllUsersWithHistoric: Userswithhistoric[] = [];
  topTenUsers: any[] = [];
  displayedColumns: string[] = ['etat', 'nom', 'email', 'tel', 'datenaissance', 'commandes'];
  displayedColumnstop10: string[] = ['nbrcmd', 'etat', 'nom', 'email', 'tel', 'datenaissance'];
  dataSource = new MatTableDataSource(this.listAllUsersWithHistoric);
  dataSourcetop10 = new MatTableDataSource(this.topTenUsers);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /********************** les plats vendus*********************/
  sysdate = new Date();
  startdate = new Date('01/01/' + this.sysdate.getFullYear());
  range = new FormGroup({
    start: new FormControl(this.startdate),
    end: new FormControl(new Date())
  });

  rangeChiffreAffaireMensuelle = new FormGroup({
    start: new FormControl(this.startdate),
    end: new FormControl(new Date())
  });
  datestart: string;
  dateend: string;
  public barChartOptions: ChartOptions = {
    title: {
      text: 'Plats vendus',
      display: true
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public date = {start: '', end: ''};
  public dateChiffreAffaireMensuelle = {start: '', end: ''};
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {data: [], label: 'Quantité'},
    {data: [], label: 'chiffre d\'affaire'}
  ];
  /**************************************************************************************/
  // data for plat vendus by date
  public barChartData1: ChartDataSets[] = [
    {data: [], label: 'Quantité'},
    {data: [], label: 'chiffre d\'affaire'}
  ];

  // options for plat vendus by date
  public barChartOptions1: ChartOptions = {
    title: {
      text: 'plats vendus de ' + this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd') + ' à ' +
        this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd'),
      display: true
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public lineBigDashboardChartType;
  public lineBigDashboardChartStripeType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartStripeData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartStripeOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartStripeLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>;
  public lineBigDashboardChartStripeColors: Array<any>;
  public lineBigDashboardChartPaypalData: Array<any>;
  public lineBigDashboardChartPaypalColors: Array<any>;
  public lineBigDashboardChartPaypalLabels: Array<any>;
  public lineBigDashboardChartPaypalOptions: any;
  public lineBigDashboardChartEspeceData: Array<any>;
  public lineBigDashboardChartEspeceLabels: Array<any>;
  public lineBigDashboardChartEspeceColors: Array<any>;
  public lineBigDashboardChartEspeceOptions: any;
  chiffre_affaire_annuel: number;
  chiffre_affaire_mensuelle: number;

  turnover: Turnover[] = [];
  trnovervalues: number[] = [];
  chargeStripe: any[] = [];
  year: number = new Date().getFullYear();
  nbrUserConnected: number;
  image = '';

  public hexToRGB(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  ngOnInit() {
    /**************************** get all users****************************************************/
    this.si.userWithHistoric().subscribe((users: Userswithhistoric[]) => {
      this.listAllUsersWithHistoric = users;
      this.dataSource.data = this.listAllUsersWithHistoric;
      console.log(this.listAllUsersWithHistoric);
    });
    /*********************************************************************************************/
    /**************************** Top 10 users****************************************************/
    this.si.MostImportentClientBuyin().subscribe((top: any[]) => {
      this.topTenUsers = top;
      this.dataSourcetop10.data = this.topTenUsers;
      if (this.topTenUsers[0].image) {
        this.image = this.topTenUsers[0].image;
      }
    });
    /*********************************************************************************************/
    /**************************** nbr users connected****************************************************/
    this.si.NbrOfUsersConnected().subscribe((nbruserconnected: any) => {
      this.nbrUserConnected = nbruserconnected[0].connected_users;
    });
    /*********************************************************************************************/
    /*************************** get CA annuel*******************************************************/
    this.si.CAMAnnuel(this.year).subscribe((CAA: any[]) => {
      this.chiffre_affaire_annuel = CAA[0].CA;
    });
    /*********************************************************************************************/
    /*************************** get CA mensuelle de ce mois ************************************/
    this.dateChiffreAffaireMensuelle.start = this.datepipe.transform(new Date(), 'yyyy-MM-01');
    this.dateChiffreAffaireMensuelle.end = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.si
      .CAMensuel(this.dateChiffreAffaireMensuelle.start, this.dateChiffreAffaireMensuelle.end)
      .subscribe((CAM: any[]) => {
        if (!CAM[0].CA) {
          this.chiffre_affaire_mensuelle = 0;
        } else {
          this.chiffre_affaire_mensuelle = CAM[0].CA;
        }
      });
    /*******************************************************************************************/
    this.initChartJs();
    this.initStripeChartJs();
    /************************** initialisation chart CA*************************************************/
    this.si.GetTurnover(this.year).subscribe((d: Turnover[]) => {
      this.trnovervalues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.turnover = d;
      d.forEach((t, index) => {
        this.trnovervalues[t.Month] = t.CA;
      });
      this.lineBigDashboardChartData[0].data = this.trnovervalues;
    });
    /*****************************init CA Cash **********************************************************/
    this.si.GetCashbyMonth(this.year).subscribe((cash: Turnover[]) => {
      this.lineBigDashboardChartEspeceData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      cash.forEach(c => {
        this.lineBigDashboardChartEspeceData[0].data[c.Month - 1] = c.CA;
      });
    });
    /********************************** initialisation chart Stripe **************************************/
    this.stripeserv.Getcharges().subscribe((d: any) => {
      this.chargeStripe = d.data;
      this.chargeStripe.forEach(cs => {
        cs.created = new Date(cs.created * 1000);
      });
      this.lineBigDashboardChartStripeData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.chargeStripe.forEach(c => {
        if (c.created.getFullYear() === this.year) {
          this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] =
            this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] + c.amount;
        }
      });
    });
    /************************** initialisation chart plats vendus*************************************************/
    this.ps.getAll().subscribe((plats: Plat[]) => {
      plats.forEach(p => {
        this.barChartLabels.push(p.nom);
      });
    });
    this.si.GetStatisticsPlats().subscribe((data: any[]) => {
      this.barChartLabels.forEach((l, i) => {
        if (data.filter(d => d.nom === l)) {
          data.forEach(da => {
            if (da.nom === l) {
              this.barChartData[0].data[i] = da.quantity;
              this.barChartData[1].data[i] = da.total_price;
            }
          });
        } else {
          this.barChartData[0].data[i] = 0;
          this.barChartData[1].data[i] = 0;
        }
      });
    });
    /******************************************************************************************************/
    /***************************************************init plats vendus by date********************************/
    this.date.start = this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd');
    this.date.end = this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd');
    this.si.GetStatisticsPlatsByDate(this.date).subscribe((data: any[]) => {
      this.barChartLabels.forEach((l, i) => {
        if (data.filter(d => d.nom === l)) {
          data.forEach(da => {
            if (da.nom === l) {
              this.barChartData1[0].data[i] = da.quantity;
              this.barChartData1[1].data[i] = da.total_price;
            }
          });
        } else {
          this.barChartData1[0].data[i] = 0;
          this.barChartData1[1].data[i] = 0;
        }
      });
    });
    /*****************************************************************************************************/
  }

  getTurnover(event) {
    this.chiffre_affaire_annuel = 0;
    this.si.CAMAnnuel(event).subscribe((CA: any[]) => {
      if (CA[0].CA == null) {
        this.chiffre_affaire_annuel = 0;
      } else {
        this.chiffre_affaire_annuel = CA[0].CA;
      }
    });
    this.si.GetTurnover(event).subscribe((d: Turnover[]) => {
      this.trnovervalues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.turnover = d;
      d.forEach((t, index) => {
        this.trnovervalues[t.Month] = t.CA;
      });
      this.lineBigDashboardChartData[0].data = this.trnovervalues;
    });

    this.stripeserv.Getcharges().subscribe((d: any) => {
      this.chargeStripe = d.data;
      this.chargeStripe.forEach(cs => {
        cs.created = new Date(cs.created * 1000);
      });
      this.lineBigDashboardChartStripeData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.chargeStripe.forEach(c => {
        if (c.created.getFullYear() === event) {
          this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] =
            this.lineBigDashboardChartStripeData[0].data[c.created.getMonth()] + c.amount;
        }
      });
    });
    this.si.GetCashbyMonth(event).subscribe((cash: Turnover[]) => {
      this.lineBigDashboardChartEspeceData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      cash.forEach(c => {
        this.lineBigDashboardChartEspeceData[0].data[c.Month - 1] = c.CA;
      });
    });
  }

  initChartJs() {
    /************************ parametrage chart js ******************************/
    this.chartColor = '#0082CB';
    this.canvas = document.getElementById('bigDashboardChart');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 600;
    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.lineBigDashboardChartData = [
      {
        label: 'chiffre d\'affaire de l\'année' + ' ' + this.year,

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: this.trnovervalues
      }
    ];
    this.lineBigDashboardChartColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: 'rgba(255,255,255,0.41)',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    this.lineBigDashboardChartOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#2f2f2f',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'top',
        fillStyle: '#FFF',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.34)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold'
          }
        }]
      }
    };

    this.lineBigDashboardChartType = 'line';
  }

  initStripeChartJs() {
    /************************ parametrage chart js ******************************/
    this.chartColor = '#FF5F00';
    this.canvas = document.getElementById('bigDashboardStripeChart');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.lineBigDashboardChartStripeData = [
      {
        label: 'chiffre d\'affaire stripe de l\'année' + ' ' + this.year,

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ];
    this.lineBigDashboardChartStripeColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: 'rgba(255,255,255,0.71)',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartStripeLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    this.lineBigDashboardChartStripeOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold'
          }
        }]
      }
    };

    this.lineBigDashboardChartStripeType = 'line';
    /************************************ initialisation charjs (paypal)***************************************************************/
    this.chartColor = '#E50695';
    this.canvas = document.getElementById('bigDashboardPaypalChart');

    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
    this.lineBigDashboardChartPaypalData = [
      {
        label: 'chiffre d\'affaire paypal de l\'année' + ' ' + this.year,

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ];
    this.lineBigDashboardChartPaypalColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: 'rgba(255,255,255,0.71)',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartPaypalLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    this.lineBigDashboardChartPaypalOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold'
          }
        }]
      }
    };

    /************************************ initialisation charjs (espece)***************************************************************/
    this.chartColor = '#FFF';
    this.canvas = document.getElementById('bigDashboardEspeceChart');
    this.lineBigDashboardChartEspeceData = [
      {
        label: 'chiffre d\'affaire espece de l\'année' + ' ' + this.year,

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ];
    this.lineBigDashboardChartEspeceColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: 'rgba(255,255,255,0.71)',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartEspeceLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    this.lineBigDashboardChartEspeceOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgb(45,45,45)',
            fontStyle: 'bold'
          }
        }]
      }
    };

  }

  /*******************************************plat vendus*******************************/
  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
  }

  getrange() {
    this.date.start = this.datepipe.transform(this.range.value.start, 'yyyy-MM-dd');
    this.date.end = this.datepipe.transform(this.range.value.end, 'yyyy-MM-dd');
    this.barChartData1[0].data = [];
    this.barChartData1[1].data = [];
    this.si.GetStatisticsPlatsByDate(this.date).subscribe((data: any[]) => {
      this.barChartLabels.forEach((l, i) => {
        if (data.filter(d => d.nom === l)) {
          data.forEach(da => {
            if (da.nom === l) {
              this.barChartData1[0].data[i] = da.quantity;
              this.barChartData1[1].data[i] = da.total_price;
            }
          });
        } else {
          this.barChartData1[0].data[i] = 0;
          this.barChartData1[1].data[i] = 0;
        }
      });
    });
  }

  getrangeChiffreAffaireMensuelle() {
    this.dateChiffreAffaireMensuelle.start = this.datepipe.transform(this.rangeChiffreAffaireMensuelle.value.start, 'yyyy-MM-dd');
    this.dateChiffreAffaireMensuelle.end = this.datepipe.transform(this.rangeChiffreAffaireMensuelle.value.end, 'yyyy-MM-dd');

    this.chiffre_affaire_mensuelle = 0;
    this.si
      .CAMensuel(this.dateChiffreAffaireMensuelle.start, this.dateChiffreAffaireMensuelle.end)
      .subscribe((data: any[]) => {
        if (data[0].CA == null) {
          this.chiffre_affaire_mensuelle = 0;
        } else {
          this.chiffre_affaire_mensuelle = data[0].CA;
        }
      });
  }

  historic(ticket: Userswithhistoric) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '57%';
    dialogConfig.height = '80%';
    dialogConfig.data = ticket;
    const dialogref = this.dialog.open(AllTicketsComponent, dialogConfig);
  }
}
