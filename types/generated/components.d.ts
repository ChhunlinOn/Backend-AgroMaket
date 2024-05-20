import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryTracktor extends Schema.Component {
  collectionName: 'components_category_tracktors';
  info: {
    displayName: 'Tracktor';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.tracktor': CategoryTracktor;
    }
  }
}
