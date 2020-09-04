import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.scss']
})
export class Bai4Component implements OnInit {

  constructor() { }
  sv=[{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];
  kq="";
  
  ngOnInit(): void {
    let j=0;
    
    for(let i=0;i<this.sv.length;i++){
      if(this.sv[i].diemthi>8&&this.sv[i].quequan=="Hai Phong"){
        this.kq=this.kq+this.sv[i].hoten+"-"+this.sv[i].quequan+"-"+this.sv[i].diemthi+";";
      }
      }
    }

}
