import BundleConstantsBuilder from './common/BundleConstantsBuilder'
import { AsyncResourceBundleFeatures } from './createAsyncResourceBundle'

export default function makeAsyncResourceBundleKeys(name) {
  const builder = new BundleConstantsBuilder(name)

  builder
    .addSelector('raw')
    .addSelector('data', 'select:UPNAME:', ':NAME:')
    .addSelector('dataAt')
    .addSelector('isLoading')
    .addSelector('isPresent')
    .addSelector('error')
    .addSelector('isReadyForRetry')
    .addSelector('retryAt')
    .addSelector('errorIsPermanent')
    .addSelector('isPendingForFetch')

    .addActionCreator('doFetch')
    .addActionCreator('doAdjust')

    .addReactor('shouldRetry')

  AsyncResourceBundleFeatures.forEach(featureClass => featureClass.addBundleConstants(builder))

  return builder.buildBundleConstants()
}
