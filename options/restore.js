#!/usr/bin/env node

require('../libs/variables');
require('../libs/utility');

module.exports = () => {
  config.set('pic_dir', join(home, 'Pictures', 'splash_photos'));
  firstRun.clear();

  log()
  log(`${colors.yellow('Splash:')} Settings restored to default.`.gray)
  log()
}
