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
  search() :any  {
    this.input = document.getElementById('myInput');
    this.filter = this.input.value.toUpperCase();
     console.log(this.filter);
     this.ul = document.getElementsByClassName('card');
     this.li = document.getElementsByClassName('prof-name');
     for(let i=0; i<this.li.length; i++){
      this.txtValue = this.li[i].textContent;
      if(this.txtValue.toUpperCase().indexOf(this.filter) > -1)
      {
       this.ul[i].style.display = "";
      }
      else{
           this.ul[i].style.display = "none";
      }
     }
    // this.ul = document.getElementById('myUL');
    // this.li = this.ul.getElementsByTagName('li');
    // for(let i=0; i<this.li.length; i++){
    //   this.a = this.li[i].getElementsByTagName('a')[0];
    //   console.log(this.a);
    //   this.txtValue = this.a.textContent;
    //   console.log(this.txtValue);
    //   if(this.txtValue.toUpperCase().indexOf(this.filter) > -1){
    //     this.li[i].style.display = ""; 
    //   }
    //   else {
    //     this.li[i].style.display = "none"; 
    //   }
    // }
}
  ngOnInit(){
    this.fetchData.getdata().subscribe(response => {
      this.posts= response;
      this.arr = this.posts.results;
      console.log(this.arr);
    });
  }

}
