import { Component, ViewChild, ElementRef, } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  netImage: any = '../assets/logo.png';
  fatma = {
    nom: 'fatma',
    prenom: 'ESSID'
  }
/*  @ViewChild('content') content: ElementRef;
  public downloadPDF() {
    let doc = new jsPDF();
     let specialElementHandlers = {
       '#editor':  function(element, rendrer) {
         return true;
       }
     };
     let content = this.content.nativeElement;
     doc.fromHTML(content.innerHTML, 15, 15, {
       'width': 190,
       'elementHandlers': specialElementHandlers
     }); 
     doc.save('test.pdf');
     /*html2canvas( document.body {
       onrendred: function (canvas) {
         var img = canvas.toDataUrl("image/png");
         var doc = new jsPDF();
         doc.addImage(img, 'JPEG', 20, 20);
         doc.save('test.pdf');

       }
     });*/
  public downloadPDF() {
    html2canvas(document.getElementById('content')).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('Facture.pdf');
    });
  }
}
