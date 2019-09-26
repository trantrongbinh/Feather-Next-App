// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const apiTokens = new mongooseClient.Schema(
    {
      access_token_id: { type: String, default: '' },
      refresh_token: { type: String, default: '' },
      expire_ttl: { type: Date, default: null },
      refresh_ttl: { type: Date, default: null },
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
      avatar: { type:String },
      description: { type:String },
      api_tokens: apiTokens,
      last_login_at: { type: Date, default: null },
      deleted_at: { type: Date, default: null }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('users', users);
};
