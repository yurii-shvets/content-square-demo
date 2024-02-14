import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';
import {
  withClassPath,
  withApplyPlugin,
} from '@expo/config-plugins/build/android/GoogleServices';
import { withCSCustomConfig } from './withCsExpoReactNativeBridgePluginInfoPlist';

/**
 * Apply cs-expo-react-native-bridge configuration for Expo SDK 42 projects.
 */
const withCsExpoReactNativeBridge: ConfigPlugin<void> = config => {
  let newConfig = withClassPath(config);
  newConfig = withApplyPlugin(newConfig);
  newConfig = withCSCustomConfig(newConfig);

  // Return the modified config.
  return newConfig;
};

const pkg = {
  // Prevent this plugin from being run more than once.
  // This pattern enables users to safely migrate off of this
  // out-of-tree `@config-plugins/cs-expo-react-native-bridge` to a future
  // upstream plugin in `cs-expo-react-native-bridge`
  name: 'cs-expo-react-native-bridge',
  // Indicates that this plugin is dangerously linked to a module,
  // and might not work with the latest version of that module.
  version: 'UNVERSIONED',
};

export default createRunOncePlugin(
  withCsExpoReactNativeBridge,
  pkg.name,
  pkg.version
);
