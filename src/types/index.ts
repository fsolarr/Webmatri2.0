export interface Gift {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface BankAccount {
  bank: string;
  accountHolder: string;
  accountNumber: string;
}

export interface EventSchedule {
  time: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}