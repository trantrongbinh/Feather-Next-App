// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const apiTokens = new mongooseClient.Schema(
    {
      accessToken: { type: String, default: '' },
      refreshToken: { type: String, default: '' },
      expiredAt: { type: Date, default: null }
    },
    {
      timestamps: true
    }
  );

  const users = new mongooseClient.Schema(
    {
      email: { type: String, unique: true, lowercase: true, required: true },
      password: { type: String, required: true },
      name: { type: String, required: true},
      status: { type: Number, default: 0 },
      userImageUrl: { type:String },
      description: { type:String },
      apiTokens: [apiTokens],
      lastLoginAt: { type: Date, default: null }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('users', users);
};
