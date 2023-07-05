import { NavItem } from '../../models/navItem.model';

export const menu: NavItem[] = [
  {
    displayName: 'Start',
    iconName: 'dashboard',
    notification: 0,
  },
  {
    displayName: 'Fahrten',
    iconName: 'panorama_horizontal',
    children_disabled: true,
    notification: 0,
    children: [
      {
        displayName: 'Organisation',
        route: 'organisation',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Archiv',
        route: 'archiv',
        disabled: true,
        notification: 0,
      },
    ],
  },
  {
    displayName: 'Planung',
    iconName: 'event',
    children_disabled: true,
    notification: 0,
    children: [
      {
        displayName: 'Kalender',
        route: 'calendar',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Vorlagen',
        route: 'vorlagen',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Kontingente',
        route: 'templates',
        disabled: true,
        notification: 0,
      },
    ],
  },
  {
    displayName: 'Daten',
    iconName: 'view_list',
    children_disabled: true,
    notification: 0,
    children: [
      {
        displayName: 'Hotels',
        route: 'hotels-overview',
        disabled: true,
        notification: 3,
      },
      {
        displayName: 'Eventpartner',
        route: 'event-partner',
        disabled: true,
        notification: 4,
      },
      {
        displayName: 'Honorarkräfte',
        route: 'honorary-staff',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Programmkatalog',
        route: 'program-catalogue',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Antragsteller',
        route: 'applicant',
        disabled: true,
        notification: 0,
      },
    ],
  },
  {
    displayName: 'Administration',
    iconName: 'event',
    children_disabled: true,
    notification: 0,
    children: [
      {
        displayName: 'Customizing',
        route: 'customization',
        disabled: true,
        notification: 2,
      },
      {
        displayName: 'Nutzerverwaltung',
        route: 'user-management',
        disabled: true,
        notification: 1,
      },
      {
        displayName: 'AS-Plattform',
        route: 'as-platform',
        disabled: true,
        notification: 0,
      },
    ],
  },
  {
    displayName: 'Account',
    iconName: 'account_circle',
    children_disabled: true,
    notification: 0,
    children: [
      {
        displayName: 'Einstellungen',
        route: 'ideas',
        disabled: true,
        notification: 0,
      },
      {
        displayName: 'Barrierefreiheit',
        route: 'accessibility',
        disabled: true,
        notification: 0,
      },
    ],
  },
];
