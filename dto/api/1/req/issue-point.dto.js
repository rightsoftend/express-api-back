/*
 * Copyright (c) 2023 Baza Trainee Ukraine
  Developers:
    - Volodymyr Nerovnia 
    
 * SPDX-License-Identifier: MIT
 */

class IssuePointDTO {
  constructor(geolocation, locationDeliveryPoint) {
    this.geolocation = atob(geolocation);
    this.locationDeliveryPoint = locationDeliveryPoint;
  }
}

module.exports = IssuePointDTO;
