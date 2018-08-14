const af = window.applicationFramework
const util = window.applicationFramework.util
const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
const am = window.applicationFramework.applicationManager
const doAPITest = {
  'ApplicationFramework': {
    'getVersion': af.getVersion(),
    'getResourceVersion': af.getResourceVersion(),
    'getWebLauncherVersion': af.getWebLauncherVersion(),
    'getConnectivityActivationStatus': af.getConnectivityActivationStatus()
  },
  'Util': {
    'getOSVersion': util.getOSVersion(),
    'getDeviceModel': util.getDeviceModel(),
    'getAmbientColor': util.getAmbientColor(),
    'getLanguage': util.getLanguage(),
    'getLoggingLevel': util.getLoggingLevel(),
    'getBaseUrl': util.getBaseUrl()
  },
  'Application': {
    'visible': app.visible,
    'type': app.type,
    'isPopupActive': app.isPopupActive(),
    'getStatusBarTitle': app.getStatusBarTitle(),
    'getDescriptor': app.getDescriptor().authorName,
    'getCommonLibraryPath': app.getCommonLibraryPath(),
    'getStorageLocation': app.getStorageLocation(2)
  },
  'ApplicationCollection': {
    'length': am.getChildApplications(app).length,
    'item': am.getChildApplications(app).item(0).getCommonLibraryPath() /* 반환값이 application이라서 getCommonLibraryPath api로 test진행 */
  },
  'WidgetDescriptor': {
    'id': app.getDescriptor().id,
    'version': app.getDescriptor().version,
    'nameList': app.getDescriptor().nameList,
    'shortNameList': app.getDescriptor().shortNameList,
    'authorName': app.getDescriptor().authorName,
    'authorEmail': app.getDescriptor().authorEmail,
    'authorHref': app.getDescriptor().authorHref,
    'license': app.getDescriptor().license,
    'licenseHref': app.getDescriptor().licenseHref,
    'iconSrcPath': app.getDescriptor().iconSrcPath,
    'description': app.getDescriptor().description,
    'localURI': app.getDescriptor().localURI,
    'group': app.getDescriptor().group,
    'featureList': app.getDescriptor().featureList,
    'drivingRestriction': app.getDescriptor().drivingRestriction,
    'killable': app.getDescriptor().killable,
    'autostart': app.getDescriptor().autostart,
    'running': app.getDescriptor().running,
    'reserved': app.getDescriptor().reserved,
    'service': app.getDescriptor().service,
    'activationStatus': app.getDescriptor().activationStatus,
    'iconWidth': app.getDescriptor().iconWidth,
    'iconHeight': app.getDescriptor().iconHeight,
    'widgetWidth': app.getDescriptor().widgetWidth,
    'widgetHeight': app.getDescriptor().widgetHeight,
    'activationDate': app.getDescriptor().activationDate,
    'expirationDate': app.getDescriptor().expirationDate,
    'subscriptionStatus': app.getDescriptor().subscriptionStatus,
    'getStorageUsage': app.getDescriptor().getStorageUsage(),
    'getWidgetName': app.getDescriptor().getWidgetName(0)
  },
  'ApplicationManager': {
    'widgets': am.widgets.length,
    'getOwnerApplication': am.getOwnerApplication(window.document).type,
    'getChildApplications': am.getChildApplications(app).length,
    'getRunningApplications': am.getRunningApplications(1).length,
    'getCurrentUserId': am.getCurrentUserId(),
    'getCurrentUserName': am.getCurrentUserName(),
    'getCurrentUserToken': am.getCurrentUserToken(),
    'getPrivacyModeStatus': am.getPrivacyModeStatus()
  },
  'WidgetDescriptorCollection': {
    'item': am.widgets.item(5).authorName, /* 내가 가장 먼저 설치한 widget의 index는 5 */
    'length': am.widgets.length
  }
}

export default doAPITest
