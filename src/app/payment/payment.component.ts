import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    const paymentData = {
      contact: form.contact,
      delivery: form.delivery,
      payment: form.payment
    };
    
    this.http.post('/api/payment', paymentData).subscribe(response => {
      console.log('Payment successful', response);
    }, error => {
      console.error('Payment failed', error);
    });
  }
}
