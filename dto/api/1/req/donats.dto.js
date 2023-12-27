/*
 * Copyright (c) 2023 Baza Trainee Ukraine
  Developers:
    - Volodymyr Nerovnia 
    
 * SPDX-License-Identifier: MIT
 */

class DonatsDTO {
  constructor(id, currency, recipient, IBAN, IPN, paymentPurpose) {
    this.currency = currency;
    this.recipient = recipient;
    this.IBAN = IBAN;
    this.IPN = IPN;
    this.paymentPurpose = paymentPurpose;
    this.id = id;
  }
}

module.exports = DonatsDTO;
