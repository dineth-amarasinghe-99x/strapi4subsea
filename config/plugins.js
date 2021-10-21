// module.exports = ({ env }) => ({
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   });

module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: env('STORAGE_ACCOUNT','strapicmsstorage'),
      accountKey: env('STORAGE_ACCOUNT_KEY', 'PfX1jY5fP1ADcT2TH/e/ujvZ1VrPghJ6iWXVSbpE9tt5ou5CtMK5scb0fdq4PKtRKJzBCULG1NsNCm6svsUqoA=='),
      containerName: env('STORAGE_CONTAINER_NAME', 'strapi-uploads'),
      cdnBaseURL: env('STORAGE_CDN_URL', 'https://strapicmsstorage.blob.core.windows.net'),
      defaultPath: 'assets',
      maxConcurrent: 10
    }
  }
});