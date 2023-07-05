export interface NavItem {
  displayName: string;
  disabled?: boolean;
  children_disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: NavItem[];
  notification?: number;
}
