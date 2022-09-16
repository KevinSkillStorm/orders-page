import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-create-pdf-page',
  templateUrl: './create-pdf-page.component.html',
  styleUrls: ['./create-pdf-page.component.css']
})
export class CreatePdfPageComponent implements OnInit {

  pageHeight!: Number;
  newPageHeight!: Number;

  // orders: any[] = [];
  orders = [
    {
      id: 1,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 2,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 3,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 4,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 5,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 6,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 7,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 8,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 9,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
    {
      id: 10,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 11,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 12,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 13,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 14,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 15,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 16,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 17,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 18,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
    {
      id: 19,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 20,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 21,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 22,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 23,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 24,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }, {
      id: 25,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 26,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 27,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
  ];

  orderId!: Number;
  address!: String;

  @ViewChild('pdfPrint') element!: ElementRef;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // I assume getSellerOrder grabs all orders based on seller id
    // this.getSellerOrder(1); 
    this.orderId = this.route.snapshot.params['id'];
    //this.orderId = 3 // for debugging
    this.orders.forEach(element => {
      console.log(`element.id = ${element.id}`);
      console.log(`this.orderId = ${this.orderId}`);
      if (element.id == this.orderId) {
        console.log('match found');
        this.address = element.address;
        console.log(this.address);
      }
    });
  }

  getSellerOrder(id: number) {
    // this.ordersPageService.getSellerOrders(id).subscribe(orders => this.orders = orders);
  }

  createPdf() {
    let pdf = new jsPDF('l', 'pt', "a4");
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();

    // Higher Value = Higher Quality = Larger File
    const quality = 2;
    html2canvas(this.element.nativeElement,
      { scale: quality }
    ).then(canvas => {
      // const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), 'JPEG', 0, 0, width, height);
      // pdf.save('testingtesting.pdf');
      window.open(pdf.output('bloburl'), 'orders/create-pdf-page/:id');
    });

  }
}
