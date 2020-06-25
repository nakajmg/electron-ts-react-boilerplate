require('dotenv').config();
const path = require('path')
const {notarize} = require('electron-notarize')
const config = require(path.resolve(__dirname, './package.json'))

const notarizeApp = async (context) => {
  const { electronPlatformName, appOutDir } = context;
  const appName = context.packager.appInfo.productFilename;
  const isMac = electronPlatformName === 'darwin';
  if (!isMac) {
    console.log('Notarization is skipped');
    return;
  }
  // ToDo dmgをnotarizeの対象にする
  //  xcrun altool --notarize-app -f ./build/gazoom-1.0.0-mac.zip --primary-bundle-id app.gazoom -u {appleId} -p {appleIdPass} --asc-provider {teamName}

  console.log(config.build.appId)
  await notarize({
    appBundleId: config.build.appId,
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
    ascProvider: process.env.ASC_PROVIDER
  })
  console.log('Finished notarization')
}

module.exports = notarizeApp
