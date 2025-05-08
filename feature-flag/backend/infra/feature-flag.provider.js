const { OpenFeature } = require('@openfeature/server-sdk');

const { FlagdProvider } = require('@openfeature/flagd-provider');

class FeatureFlagProvider {
  constructor() {
    OpenFeature.setProvider(new FlagdProvider());
    this.client = OpenFeature.getClient();
  }

  getBooleanValue(key, defaultValue) {
    return this.client.getBooleanValue(key, defaultValue);
  }
}

module.exports = new FeatureFlagProvider();
