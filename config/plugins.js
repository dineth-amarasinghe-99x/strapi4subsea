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
      account: env('STORAGE_ACCOUNT'),
      accountKey: env('STORAGE_ACCOUNT_KEY'),
      containerName: env('STORAGE_CONTAINER_NAME'),
      cdnBaseURL: env('STORAGE_CDN_URL'),
      defaultPath: 'assets',
      maxConcurrent: 10
    }
  }
});