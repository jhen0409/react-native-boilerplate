// This patch will avoid NavigationCard warning
// will remove this patch if upgraded to RN v0.28

const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  'node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationCard.js'
);

fs.writeFileSync(
  filePath,
  fs.readFileSync(filePath, 'utf-8').replace(
    'PropTypes.shape(NavigationPropTypes.SceneRenderer)',
    'NavigationPropTypes.SceneRenderer'
  )
);
