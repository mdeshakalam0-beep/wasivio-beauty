/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  name: string;
  category: 'makeup' | 'hair' | 'wig' | 'beauty' | 'all';
  duration: string;
  fees: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Masterclass';
  description: string;
  image: string;
  highlights: string[];
}

export interface WigService {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'makeup' | 'packages';
  price: string;
  duration: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'before-after' | 'student-training' | 'salon' | 'certificate-ceremony';
  beforeImage?: string;
  afterImage?: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Student' | 'Client';
  courseOrService: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'courses' | 'wig-services' | 'salon';
}
