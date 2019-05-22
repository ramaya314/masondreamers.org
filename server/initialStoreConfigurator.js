
const {providerFactory} = require('kokolibserv');

module.exports = function (config, callback) {


	var store = {};

	var providers = providerFactory(config);

	if(providers) {

		if(providers.bloggerProvider) {
			providers.bloggerProvider.getBlog(null, function(response) {


				store.blogArchive = response.items;
				if(response.items && response.items.length > 0)
					store.activeBlogPost = response.items[0];

				store.blogNextPageToken = response.nextPageToken;

				callback(store);

			}, function(err) {
				callback(store);
			});
		}
	}

}