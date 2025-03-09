import { env } from "@follow/shared/src/env.rn"
import { getApp } from "@react-native-firebase/app"
import getAppCheck, {
  initializeAppCheck as firebaseInitializeAppCheck,
} from "@react-native-firebase/app-check"

export async function initializeAppCheck() {
  const app = getApp()
  const appCheck = getAppCheck(app)

  const provider = appCheck.newReactNativeFirebaseAppCheckProvider()
  provider.configure({
    apple: {
      provider: __DEV__ ? "debug" : "appAttest",
      debugToken: env.APP_CHECK_DEBUG_TOKEN,
    },
    isTokenAutoRefreshEnabled: true,
  })

  await firebaseInitializeAppCheck(app, {
    provider,
  })
}
