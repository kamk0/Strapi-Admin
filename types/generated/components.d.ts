import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface GlobalModel extends Schema.Component {
  collectionName: 'components_global_models';
  info: {
    displayName: 'model';
    icon: 'user';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    bust: Attribute.Integer;
    height: Attribute.Integer;
    waist: Attribute.Integer;
    hips: Attribute.Integer;
    shoes: Attribute.Integer;
    hair: Attribute.Enumeration<
      ['brown', 'dark brown', 'light brown', 'blonde', 'dark blonde', 'red']
    >;
    eyesColor: Attribute.Enumeration<['green', 'gray', 'blue', 'brown']>;
    photo: Attribute.Media & Attribute.Required;
  };
}

export interface HeroHeroBigText extends Schema.Component {
  collectionName: 'components_hero_hero_big_texts';
  info: {
    displayName: 'Hero - Big text';
    icon: 'apps';
    description: '';
  };
  attributes: {
    topText: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    button: Attribute.Component<'global.link'>;
  };
}

export interface HeroHeroTwoImage extends Schema.Component {
  collectionName: 'components_hero_hero_two_images';
  info: {
    displayName: 'Hero - Text and Images';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    description: Attribute.RichText;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ModuleInfoTextModule extends Schema.Component {
  collectionName: 'components_module_info_text_modules';
  info: {
    displayName: 'Info text module';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    button: Attribute.Component<'global.link', true>;
  };
}

export interface ModulePhoto extends Schema.Component {
  collectionName: 'components_module_photos';
  info: {
    displayName: 'Photo';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.link': GlobalLink;
      'global.model': GlobalModel;
      'hero.hero-big-text': HeroHeroBigText;
      'hero.hero-two-image': HeroHeroTwoImage;
      'module.info-text-module': ModuleInfoTextModule;
      'module.photo': ModulePhoto;
    }
  }
}
