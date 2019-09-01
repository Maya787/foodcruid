import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 crud operation with an Array';
  employees=[
    {name:"maya",
     position:"programmer"
    },
    {name:"eknath",
     position:"manager"
    },
    {name:"vedika",
     position:"designer"
    }
  ]; 
  model:any={};
  model2:any={};
  addemployee()
  {
    this.employees.push(this.model);
     this.model={}; 
  }
  deleteemployee(i){
    this.employees.splice(i,1);
  }
  myvalue;
  editemployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myvalue = k;
  } 
  Updateemployee(){
    let k=this.myvalue;
    for(let i=0;i<this.employees.length;i++)
    { 
      if(i==k)
      {
        this.employees[i]=this.model2;
        this.model2={};
      }

    }
  }
}
