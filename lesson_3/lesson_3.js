// Practice problem 3 -  factory function
function paymentTotal(payments=[]) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

function createInvoice(services={}) {
  // implement the factory function here
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      self = this;
      return this.phone + this.internet;
    },
    payments: [],
    addPayment: function (payment) {
      let self = this;
      self.payments.push(payment);
    },
    addPayments: function(payments) {
      let self = this;
      for (let index in payments) {
        self.payments.push(payments[index]);
      }
    },
    amountDue: function() {
      return this.total() - paymentTotal(this.payments);
    }
  }
}

function createPayment(services={}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total: function() {
      let self = this;
      return self.phone + self.internet + self.amount;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
