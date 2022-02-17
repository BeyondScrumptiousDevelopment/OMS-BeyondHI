module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6dd00d73f7b4363676ee111f4e7e4b7e'),
  },
});
