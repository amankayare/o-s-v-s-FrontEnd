import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
        
  }
  public pieChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['SecureVote', 'Vote overall percent'],
      ['Candidate 1',     11],
      ['Candidate 2',      2],
      ['Candidate 3',  2],
      ['Candidate 4', 2],
      ['Candidate 5',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'SecureVotes'},
  };
  public ColumnChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['SecureVote', 'Vote overall percent'],
      ['Candidate 1',     11],
      ['Candidate 2',      2],
      ['Candidate 3',  2],
      ['Candidate 4', 2],
      ['Candidate 5',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'SecureVotes'},
  };
  public lineChart: GoogleChartInterface = {
    chartType: 'LineChart',
    dataTable: [
      ['SecureVote', 'Vote overall percent'],
      ['Candidate 1',     11],
      ['Candidate 2',      2],
      ['Candidate 3',  2],
      ['Candidate 4', 2],
      ['Candidate 5',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'SecureVotes'},
  };
}
