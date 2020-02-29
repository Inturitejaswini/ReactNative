package com.fundoonote;

import com.facebook.react.ReactActivity;
// import com.ismaeld.RNBuildConfig.RNBuildConfigPackage;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "fundoonote";
  }
}
//import com.ismaeld.RNBuildConfig.RNBuildConfigPackage; // add import
 
//public class MainApplication extends Application implements ReactApplication {
//
//    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//
//        /* ... */
//
//        @Override
//        public boolean getUseDeveloperSupport() {
//            return false;
//        }
//
//        @Override
//        protected List<ReactPackage> getPackages() {
//            return Arrays.<ReactPackage>asList(
//                    new MainReactPackage(),
//                    new RNBuildConfigPackage(BuildConfig.class)// add the package here
//            );
//        }
//    };