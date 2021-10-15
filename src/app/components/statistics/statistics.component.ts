import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StatisticsService} from '../../Services/StatisticsService/statistics.service';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {DatePipe} from '@angular/common';
import {element} from 'protractor';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
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
  public barChartLabels: Label[] = [];
  public barChartLabelsQuantity: Label[] = [];
  public barChartLabelcodes: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {data: [], label: 'Chiffre d\'affaire par offre de l\'année '}
  ];

  public barChartDataQuantity: ChartDataSets[] = [
    {data: [], label: 'Quantité d\'offres vendus dans l\'année '}
  ];

  public barChartDataCodes: ChartDataSets[] = [
    {data: [], label: 'Statistique de l\'utilisation des codes pour l\'année '}
  ];

  public barChartColors: Color[] = [
    {backgroundColor: '#7ebfed'}
  ];

  nbrActiveCodes: number;
  year: number;
  listStatisticsUsinCodesByUYser: any[] = [];
  displayedColumns: string[] = ['nom', 'email', 'code', 'nbruse'];
  dataSource = new MatTableDataSource(this.listStatisticsUsinCodesByUYser);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private ss: StatisticsService, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.barChartData[0].label += this.year;
    this.barChartDataCodes[0].label += this.year;
    this.barChartDataQuantity[0].label += this.year;
    this.ss
      .CAOffreByMonthOfYear(this.year.toString())
      .subscribe((CAOffres: any[]) => {
        CAOffres.forEach(cao => {
          this.barChartLabels.push(cao.offre);
          this.barChartData[0].data.push(cao.ca);
        });
      });
    this.ss
      .QuantityOffreByYear(this.year.toString())
      .subscribe((quantityoffresbuyed: any[]) => {
        quantityoffresbuyed.forEach(qob => {
          this.barChartLabelsQuantity.push(qob.offre);
          this.barChartDataQuantity[0].data.push(qob.quantity);
        });
      });
    this.ss.CountactiveCodes().subscribe((data: number) => {
      this.nbrActiveCodes = data;
    });
    this.ss.nbrusecoderedbyyear(this.year.toString()).subscribe((data: any[]) => {
      // code + nbruse
      data.forEach(d => {
        this.barChartLabelcodes.push(d.code);
        this.barChartDataCodes[0].data.push(d.nbruse);
      });
    });
    this.ss.nbrusecoderedbyyearbyuser('2021').subscribe((data: any[]) => {
      // nom + prenom + email + nbruse + code
        this.listStatisticsUsinCodesByUYser = data;
        this.dataSource.data = this.listStatisticsUsinCodesByUYser;
    });
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getdataOfNewYear() {
    this.barChartLabelsQuantity = [];
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.barChartDataQuantity[0].data = [];
    this.barChartData[0].label = 'Chiffre d\'affaire par offre de l\'année ' + this.year;
    this.barChartDataQuantity[0].label = 'Quantité d\'offres vendus dans l\'année ' + this.year;
    this.barChartDataCodes[0].label = 'Statistique de l\'utilisation des codes pour l\'année ' + this.year;
    this.barChartDataCodes[0].data = [];
    this.barChartLabelcodes = [];
    this.ss
      .CAOffreByMonthOfYear(this.year.toString())
      .subscribe((CAOffres: any[]) => {
        CAOffres.forEach(cao => {
          this.barChartLabels.push(cao.offre);
          this.barChartData[0].data.push(cao.ca);
        });
      });
    this.ss
      .QuantityOffreByYear(this.year.toString())
      .subscribe((quantityoffresbuyed: any[]) => {
        quantityoffresbuyed.forEach(qob => {
          this.barChartLabelsQuantity.push(qob.offre);
          this.barChartDataQuantity[0].data.push(qob.quantity);
        });
      });
    this.ss
      .nbrusecoderedbyyear(this.year.toString())
      .subscribe((data: any[]) => {
        data.forEach(d => {
          this.barChartLabelcodes.push(d.code);
          this.barChartDataCodes[0].data.push(d.nbruse);
        });
      });
    this.listStatisticsUsinCodesByUYser = [];
    this.ss.nbrusecoderedbyyearbyuser('2021').subscribe((data: any[]) => {
      // nom + prenom + email + nbruse + code
      this.listStatisticsUsinCodesByUYser = data;
      this.dataSource.data = this.listStatisticsUsinCodesByUYser;
    });
    this.nbrActiveCodes = 0;
    this.ss.CountactiveCodes().subscribe((data: number) => {
      this.nbrActiveCodes = data;
    });
  }
}
