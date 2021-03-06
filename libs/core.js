require('./variables');

module.exports = (url, callback) => {
	got(url).then(response => {
		spinner.text = 'Connected!';
    spinner.succeed();

		let body = response.body;
    let photo = jparse(body);

    let data = {
      url: photo.urls.raw,
      name: photo.id
    };

    callback(data, photo);

	}).catch((err) => {
		clear();
    spinner.stop();
		log();
		log('Splash Error: '.yellow + err.message);
		log();
	});
};
