module.exports = {
    parseConfig: function(config) {
        for (var property in config) {
            var value = config[property];
            if (typeof value === "string") {
                config[property] = JSON.stringify(value);
            }
        }
        return config;
    }
}