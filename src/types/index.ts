export interface NavLink {
  label: string;
  href: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role?: string;
}

export interface SpecialistItem {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}