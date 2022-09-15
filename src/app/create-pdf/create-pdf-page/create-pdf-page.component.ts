import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-create-pdf-page',
  templateUrl: './create-pdf-page.component.html',
  styleUrls: ['./create-pdf-page.component.css']
})
export class CreatePdfPageComponent implements OnInit {

  pageHeight!: Number;
  newPageHeight!: Number;

  @ViewChild('keywordsInput') element!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  createPdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    
    // pdf.text('testing', 10,10);
    // pdf.save();

    // pdf.html({});
    // pdf.add
    // pdf.html
    var i!: number;
    pdf.html(this.element.nativeElement, {
      callback: (pdf) => {
        console.log(pdf.getNumberOfPages());
        console.log(pdf.getCurrentPageInfo());
        for(i = pdf.getNumberOfPages(); i > 1; i--){
          pdf.deletePage(i);
        }
        pdf.save('testingtesting.pdf');
      }
    });



  }
}
