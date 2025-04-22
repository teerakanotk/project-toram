export interface NavItemProps {
  title: string;
  href: string;
}

export interface EquipmentProps {
  [type: string]: string[];
}

export interface EquipmentItemTestProps {
  [key: string]: {
    title: string;
    status: string;
    obtain: string;
  }[];
}
