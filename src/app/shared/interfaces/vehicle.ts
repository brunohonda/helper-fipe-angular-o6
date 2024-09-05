export interface Vehicle {
  brand:          string;
  codeFipe:       string;
  fuel:           string;
  fuelAcronym:    string;
  model:          string;
  modelYear:      number;
  price:          string;
  referenceMonth: string;
  vehicleType:    number;
}

export interface PriceHistory {
  month:     string;
  price:     string;
  reference: string;
}
