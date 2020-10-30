import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  pageLoader:boolean=true;
  proceedClick:boolean=false;
  continueClick:boolean=false;
  totalPrice:number=0;
  checkedServices=[];
  selectedSize=[];
  imgUrl="./assets/images/car/logo.jpg";
  services=[{"name":'wash',"img":"./assets/images/car/wash.jpg","checked":false},
            {"name":'checkup',"img":"./assets/images/car/checkup.jpg","checked":false},
            {"name":'gear',"img":"./assets/images/car/gear.jpg","checked":false},
            {"name":'repair',"img":"./assets/images/car/repair.jpg","checked":false},
            {"name":'clean',"img":"./assets/images/car/clean.jpg","checked":false},
            {"name":'oil',"img":"./assets/images/car/oil.jpg","checked":false},
            {"name":'wash1',"img":"./assets/images/car/wash.jpg","checked":false},
            {"name":'check-up',"img":"./assets/images/car/checkup.jpg","checked":false},
            {"name":'reverse gear',"img":"./assets/images/car/gear.jpg","checked":false},
            {"name":'full repair',"img":"./assets/images/car/repair.jpg","checked":false},
            {"name":'cleanfull clean1',"img":"./assets/images/car/clean.jpg","checked":false},
            {"name":'engine oil',"img":"./assets/images/car/oil.jpg","checked":false}];
  size=[{"name":'alto',"img":"./assets/images/car/alto.jpg","checked":false},
            {"name":'class',"img":"./assets/images/car/class.jpg","checked":false},
            {"name":'kids',"img":"./assets/images/car/kids.jpg","checked":false},
            {"name":'luxury',"img":"./assets/images/car/luxury.jpg","checked":false},
            {"name":'mini',"img":"./assets/images/car/mini.jpg","checked":false},
            {"name":'posch',"img":"./assets/images/car/posch.jpg","checked":false},
            {"name":'race',"img":"./assets/images/car/race.jpg","checked":false},
            {"name":'sedan',"img":"./assets/images/car/sedan.jpg","checked":false},
            {"name":'small',"img":"./assets/images/car/small.jpg","checked":false},
            {"name":'royal',"img":"./assets/images/car/royal.jpg","checked":false},
            {"name":'vintage',"img":"./assets/images/car/posch.jpg","checked":false},
            {"name":'micro',"img":"./assets/images/car/sedan.jpg","checked":false}]
  ngOnInit(): void {
    //page loader for attracting users before application starts
    const myAsync = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      this.pageLoader = false;
    }
    myAsync();
  }
  onProceed(){
    this.checkedServices=[]
    this.proceedClick=true;
    for(let i=0;i<this.services.length;i++){
      if(this.services[i].checked==true){
        this.checkedServices.push(this.services[i]);
      }
    }
  }
  imgClick(val){
    for(let i=0;i<this.services.length;i++){
      if(this.services[i].name==val){
        this.services[i].checked==true? this.services[i].checked=false:this.services[i].checked=true;
      }
    }
  
  }
  onContinue(){
    console.log('continue')
    this.continueClick=true;
  }
  sizeClick(val){
    this.selectedSize=[]
    for(let i=0;i<this.size.length;i++){
      if(this.size[i].name==val){
        this.size[i].checked=true;
        this.selectedSize.push(this.size[i]);
      }else{
        this.size[i].checked=false
      }
    }
    console.log(this.selectedSize)
  }
  onChange(){
    this.proceedClick=false;
    this.continueClick=false;
  }

}
