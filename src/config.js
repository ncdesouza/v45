

export const port = process.env.PORT || 5000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const googleAnalyticsId = 'UA-XXXXX-X';

export const database = {
  'url' : '127.0.0.1:24000',
  'urlDev' : 'video45.cloudapp.net:27017/video45',
};

