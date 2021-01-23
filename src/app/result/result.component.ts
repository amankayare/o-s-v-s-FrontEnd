import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Election } from '../Entities/election';
import { ElectionService } from '../Services/election.service';
 
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
  electionList: Election[] | any;

  electionCount: number |  any;
  
 

  public pieChart: GoogleChartInterface | any;

  public ColumnChart: GoogleChartInterface | any;

  public lineChart: GoogleChartInterface | any;

  constructor(private electionService:ElectionService) { }


  async allElection(){
    this.electionList= await this.electionService.getAllElection().toPromise();
  
    console.log(this.electionList);

    this.electionCount=this.electionList[0].candidateList.length;
    let len=this.electionCount;
    let num1:number=0;
    let i!:number;
     let num2:number=0;
    let j!:number;
    console.log(len);
    for(i=num1 ; i< len ; i++){
   
  
     let voteEarned : any;
     let  candidateName : any;
     //let arrayOfArray : [5] | any;

     var person: any[] = [];
    //  person[0] = "John";
    //  person[1] = "Doe";
    //  person[2] = 46;

     console.log(person);


    //  var arr :any;
    // arrayOfArray.push(['SecureVote', 'Vote overall percent']);


    var arrayOfArray: any[][] = [];

    arrayOfArray[0]=['SecureVote', 'Vote overall percent'];
     for(j=num2; j <this.electionList[i].candidateList.length ; j++){
          

            candidateName=this.electionList[i].candidateList[j].fullName;
            voteEarned=this.electionList[i].candidateList[j].voteEarned;
            console.log(candidateName+" "+voteEarned);

            var arr: any[] = [];

           // arrayOfArray[j]=candidateName;
            
            console.log(j);
            arr[0]=candidateName;
            arr[1]=voteEarned;
          
            arrayOfArray[j+1]=arr;
            // arrayOfArray.push(['SecureVote', 'Vote overall percent']);
            // arrayOfArray.push(arr);
        }

       // console.log(arrayOfArray);

        console.log(arrayOfArray);

        this.pieChart={
            chartType: 'ColumnChart',
            dataTable: arrayOfArray,
            //firstRowIsData: true,
            options: {'title': 'SecureVotes'},
          };
    

          this.ColumnChart={
              chartType: 'PieChart',
              dataTable:arrayOfArray,
              //firstRowIsData: true,
              options: {'title': 'SecureVotes'},
            };
          
            this.lineChart = {
                chartType: 'LineChart',
                dataTable:arrayOfArray,
                //firstRowIsData: true,
                options: {'title': 'SecureVotes'},
              };
     }
}
  ngOnInit(): void {
    this.allElection();
  }

}
