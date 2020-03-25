/**
 Types of tracking:-
 GA (GTM is internally triggering GA)
 UBA
 Performance  - earlier called as newmonk
 Error - called as nlogger
 HeatMap
 TNM
 */


/**
Syntax of ntrack function:
Tracking covered in nTrack- UBA, Performance, GA
nTrack(
    {
        uba:ubaObject,   //uba Object - Already populated Object
        performance:route,  //route Object- Only route object is needed by performance(boomlogger), performance creates it's own object
        gaPageView:{
                  route:route,  //route Object
                  gaObj     // Additonal data fields
        },
        gaCustom:{
            defaultDataLayerObj:[array],
            extDataLayerObj:{
                params.....
            }
        }
    }
)
eg:

nTrack({
  uba:{
    pageName:'applyHistory',
    eventName:'applyHistoryView',
    keyNames:{
      actionType:"view",
      referrer: this.props.route.previous
    }
  },
  gaPageView:{
      route:this.props.route,
        gaObj:{
            'spa-page-title': gaConfigData.title
          }
  },
  gaCustom:{
      defaultDataLayerObj:['spa-event','Certifications_Mobile','SaveSuccess','click'],
      extDataLayerObj:{
          'spa-event-value': 'AppPromo_Nav_button_click'
      }
  }
});
*/

import { GA_Performance_Track, trackGTMData, trackGACustom, trackFBPixel } from './ga-config';

export function uba({ eventName, ubaData }) {
  try {
    window.ub.track(eventName, ubaData);
  } catch (e) {
    console.warn(e);
  }
}

/** 
 * This is a common tracking function mainly responsible to send all kind of tracking 
 * like 'newMonk tracking', 'GA tracking', 'UBA tracking' to server(naukri or third party(google)).
 */
export function nTrack(obj) {
  try {

    //trigger GAPageView
    if (obj.hasOwnProperty("gaPageView")) {
      let { route, gaObj } = obj["gaPageView"];
      GA_Performance_Track(route, gaObj);
    }

    //trigger uba
    if (obj.hasOwnProperty("uba")) {
      uba(obj["uba"]);
    }

    if (obj.hasOwnProperty("gaCustom")) {
      let { defaultDataLayerObj, extDataLayerObj } = obj["gaCustom"];
      trackGACustom(...defaultDataLayerObj, extDataLayerObj);
    }

    //Tracking GTM extra fields on SRP, JD page
    if (obj.hasOwnProperty("gtmData")) {
      trackGTMData(obj["gtmData"]);
    }

    if (obj.hasOwnProperty("fbPixel")) {
      trackFBPixel(obj["fbPixel"]);
    }
  }
  catch (e) {
    console.warn(e);
  }
}

/**Singleton Service for page(eg:JD) tracking for common uba parameters */
const tracking = (function () {
  let commonUbaData;
  let pageName;

  const init = (keyNames = {}, mainParams = {}) => {
    commonUbaData = { ...keyNames };
    pageName = mainParams.pageName;
  };

  const populateUbaObj = (pageName, commonUbaData, keyNames) => {
    /**
      * The below code is written to pass correct referrer when the user opens the app. 
      * We are passing document.referrer only for 1st time in the UBA call, afterwards route.previous is getting passed 
      */

    let ubaReferrer;
    if (window.referrer && window.referrer.UBA != undefined) {
      ubaReferrer = window.referrer.UBA;
      window.referrer.UBA = undefined;
    }
    else if (keyNames && keyNames.referrer) {
      ubaReferrer = keyNames.referrer;
    }

    return {
      //TODO: remove this 'jd' default value, once jobdescription component start using this function, instead of jd-tracking.
      pageName: pageName,
      ...commonUbaData,
      ...keyNames,
      referrer: ubaReferrer || document.referrer
    };
  }

  const doTracking = (trackingData) => {
    let uba;

    if (trackingData.uba && trackingData.uba.constructor === Array) {
      let ubaArr = [];
      let eventslen = trackingData.uba.length;
      trackingData.uba.forEach((obj) => {
        let tempObj = {
          eventName: obj.eventName,
          ...populateUbaObj(pageName, commonUbaData, obj.keyNames),
          eventType: 'bulk',
          eventslen
        };
        ubaArr.push(tempObj);
      });
      uba = {
        ubaData: ubaArr
      }
    }
    else if (trackingData.uba) {
      uba = {
        eventName: trackingData.uba.eventName,
        ubaData: populateUbaObj(pageName, commonUbaData, trackingData.uba.keyNames)
      };

    }

    if (uba) {
      nTrack({
        ...trackingData,
        uba
      });
    }
    else {
      nTrack(trackingData);
    }
  };

  return { init, doTracking };
})();

window.tracking = tracking;
