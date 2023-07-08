import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fetch-data';
  newdata: any;
  input: any;
  filter: any;
  ul: any;
  li: any;
  a: any;
  txtValue: any;
  posts: any;
  arr:any;
  constructor(private fetchData: FetchDataService){
  }
  search1() :any  {
    this.input = document.getElementById('myInput-1');
    this.filter = this.input.value.toUpperCase();
     console.log(this.filter);
     this.ul = document.getElementsByClassName('card');
     this.li = document.getElementsByClassName('prof-address');
     for(let i=0; i<this.li.length; i++){
      this.txtValue = this.li[i].textContent;
      console.log(this.txtValue);
      if(this.txtValue.toUpperCase().indexOf(this.filter) > -1)
      {
       this.ul[i].style.display = "";
      }
      else{
           this.ul[i].style.display = "none";
      }
     }
}

search2() :any  {
  this.input = document.getElementById('myInput-2');
  this.filter = this.input.value.toUpperCase();
   console.log(this.filter);
   this.ul = document.getElementsByClassName('card');
   this.li = document.getElementsByClassName('prof-designation');
   for(let i=0; i<this.li.length; i++){
    this.txtValue = this.li[i].textContent;
    console.log(this.txtValue);
    if(this.txtValue.toUpperCase().indexOf(this.filter) > -1)
    {
     this.ul[i].style.display = "";
    }
    else{
         this.ul[i].style.display = "none";
    }
   }
}
  ngOnInit(){
    this.fetchData.getdata().subscribe(response => {
      this.posts= response;
      console.log(this.posts);
    });
  }

}
