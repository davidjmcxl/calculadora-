import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadoraAp';
  operation:string='0';
  evaluar:string='0';
  result: string = '';

  appendNumber(number: number) {
    if(this.operation=='0'){
      this.operation='';
    }
    this.operation += number.toString();
  }
  deleteLast(){
    this.operation=this.operation.slice(0,-1);
  }

  appendOperator(operator: string) {
      if(operator=='*'){
        operator='x';
      }
    this.operation += '' + operator + '';
  }

  clear() {
    this.operation = '0';
    this.result = '';
  }

  calculate() {
    try {

      if(this.operation.includes('x')){
        let operationArray=this.operation.split("");
       let transf= operationArray.map(element=>{
          if(element=='x'){
            element='*';
          }
          return element
        });
        this.evaluar=transf.join("");
        this.result =eval(this.evaluar);
      }
      else
      {
        this.result = eval(this.operation);
      }




    } catch (e) {
      this.result = 'Error';
    }
  }

}
