import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { vietnamese as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Ho_Chi_Minh';

const service = {
  lang: `vi`,
  articleAuthor: `https://www.facebook.com/pages/BBC-Vietnamese/228458913833525?ref=ts&sk=wall`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-vietnamese',
  atiAnalyticsProducerId: '97',
  brandName: 'BBC News Tiếng Việt',
  product: 'BBC News Tiếng Việt',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/vietnamese.png',
  defaultImageAltText: 'BBC News Tiếng Việt',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `vi-VN`,
  datetimeLocale: `vi-VN`.toLowerCase(),
  service: 'vietnamese',
  serviceName: 'BBC News Tiếng Việt',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcvietnamese',
  twitterSite: '@bbcvietnamese',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  frontPageTitle: 'Tin chính',
  translations: {
    seeAll: 'See all',
    home: 'Tin chính',
    currentPage: 'Current page',
    skipLinkText: 'Bỏ qua để xem nội dung',
    error: {
      404: {
        statusCode: '404',
        title: '404 - Không tìm thấy trang này',
        message:
          'Lỗi có thể do địa chỉ trang web không đúng. Hãy kiểm tra địa chỉ và chính tả.',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Trang tin chính BBC',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/vietnamese',
      },
      500: {
        statusCode: '500',
        title: 'Lỗi 500',
        message: 'Vừa bị lỗi. Hãy tải lại.',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Trang tin chính BBC',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/vietnamese',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: 'Âm thanh',
      photogallery: 'Ảnh',
      video: 'Video',
    },
  },
  brandSVG,
  mostRead: {
    header: 'Most read',
    lastUpdated: 'Last updated: ',
  },
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Read about our approach to external linking.',
    },
    links: [
      {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      {
        href: 'https://www.bbc.com/terms',
        text: 'Terms of Use',
      },
      {
        href: 'https://www.bbc.com/privacy/',
        text: 'Privacy Policy',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.com/contact/',
        text: 'Contact the BBC',
      },
    ],
    copyrightText:
      'BBC. BBC không chịu trách nhiệm nội dung các trang bên ngoài',
  },
  fonts: [],
  timezone: 'Asia/Ho_Chi_Minh',
};

export default service;
