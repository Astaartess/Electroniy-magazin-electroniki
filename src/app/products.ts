export abstract class BaseProduct {
  constructor(
      public id: number,
      public name: string,
      public price: number,
      public description: string
  ) {}

  abstract calculatePrice(): number;
  abstract getType(): string;
}

export class ElectronicProduct extends BaseProduct {
  constructor(
      id: number,
      name: string,
      price: number,
      description: string,
      private warranty: number
  ) {
      super(id, name, price, description);
  }

  calculatePrice(): number {
      return this.price * 0.9; // знижка 
  }

  getType(): string {
      return 'Electronic';
  }

  getWarrantyPeriod(): number {
      return this.warranty;
  }
}

export class AccessoryProduct extends BaseProduct {
  constructor(
      id: number,
      name: string,
      price: number,
      description: string,
      private compatibleDevices: string[]
  ) {
      super(id, name, price, description);
  }

  calculatePrice(): number {
      return this.price * 0.95; // 5% знижка на аксесуари
  }

  getType(): string {
      return 'Accessory';
  }

  getCompatibleDevices(): string[] {
      return this.compatibleDevices;
  }
}

export const products: BaseProduct[] = [
  new ElectronicProduct(
      1,
      'Laptop Dell Inspiron',
      1200,
      'Потужний ноутбук для роботи та розваг',
      2 // років гарантії
  ),
  new AccessoryProduct(
      2,
      'Smartwatch Apple Watch',
      500,
      'Сучасний смарт-годинник для контролю здоров\'я та спорту',
      ['iPhone', 'iPad']
  ),
  new ElectronicProduct(
      3,
      'Tablet Samsung Galaxy Tab',
      800,
      'Потужний планшет для роботи та розваг',
      1
  ),
  new AccessoryProduct(
      4,
      'Headphones Sony WH-1000XM4',
      300,
      'Відмінні бездротові навушники для музики та роботи',
      ['Smartphone', 'Laptop', 'Tablet']
  ),
  new ElectronicProduct(
      5,
      'Camera Canon EOS 80D',
      1000,
      'Потужна фотокамера для професійної зйомки',
      2
  )
];