import {Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  constructor() {
  }

  onAutoplay: boolean = false;
  @ViewChild('pdfTable', {static: false}) pdfTable!: ElementRef;

  ngOnChange(){
    this.onAutoplay = true;
  }
  ngOnDestroy(){
    this.onAutoplay = false;
  }

  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function () {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }
}
