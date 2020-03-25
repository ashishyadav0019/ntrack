export const isEmailinURL = (route) => {
  // This regular expression check whether URL contain a email or not
  const regExp = new RegExp(/([\s]*)([_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*([ ]+|)@([ ]+|)([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,}))([\s]*)/i)
  const isExist = route && route.current && regExp.test(decodeURIComponent(route.current));
  if (!isExist && !window.dataLayer) {
    var scriptTag = document.createElement('script')
    scriptTag.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NX744H');"
    document.head.appendChild(scriptTag);
  }
  return isExist;
}

// const routeNameMap = {
//   'landing': {
//     pageName: 'SplashScreen',
//     title: 'Naukri Web App'
//   },
//   'recJobs': {
//     pageName: 'recommendedjobs',
//     title: 'Jobs For You'
//   },
//   'similarJobsPage': {
//     pageName: 'apply'
//   },
//   'searchForm': {
//     pageName: 'searchform',
//   },
//   'createAccount': {
//     pageName: 'registration/createAccount',
//     title: 'Create Account | Naukri Mobile Site'
//   },
//   'addExperience': {
//     pageName: 'registration/addExperience',
//     title: 'Professional Details | Naukri Mobile Site'
//   },
//   'addEducation': {
//     pageName: 'registration/addEducation',
//     title: 'Education Details | Naukri Mobile Site'
//   },
//   'addEmployment': {
//     pageName: 'registration/addEmployment',
//     title: 'Employment Details | Naukri Mobile Site'
//   },
//   'addSkills': {
//     pageName: 'registration/addSkills',
//     title: 'Key Skills | Naukri Mobile Site'
//   },
//   'addHeadline': {
//     pageName: 'registration/addHeadline',
//     title: 'Resume Headline | Naukri Mobile Site'
//   },
//   'addResume': {
//     pageName: 'registration/addResume',
//     title: 'Upload Resume | Naukri Mobile Site'
//   },
//   'welcome': {
//     pageName: 'registration/welcome',
//     title: 'Welcome | Naukri Mobile Site'
//   }
// }

let gaConfig = (route) => {
  let routeName = route.routeName;
  let routeTitle = route.title;
  let routePrevious = (route.previousName);
  let returnValue = { pageName: routeName, title: routeTitle, previous: routePrevious };
  // if (routeNameMap.hasOwnProperty(routeName)) {
  //   $.extend(returnValue, routeNameMap[routeName])
  // }
  // if (routeNameMap.hasOwnProperty(routePrevious)) {
  //   $.extend(returnValue, { previous: routeNameMap[routePrevious].pageName })
  // }
  return returnValue;
}

/*This function is responsible to send four default parameters to GA,
 if anyone wants to override any of the four parameters or wants to add new params,
then pass it in the gaAdditionalObj argument*/
export const GA_Performance_Track = (route, gaAdditionalObj) => {
  try {
    if (!isEmailinURL()) {
      let gaObj = {
        'event': 'spa-pageview',
        'spa-page-name': route.routeName,//gaConfig(route).pageName,
        'spa-page-title': document.title,
        'spa-page-referrer': (() => {
          /*
         The below code is written to pass correct referrer when the user opens the app. 
         We are passing document.referrer only for 1st time in the GA/GTM call, afterwards route.previous is getting passed 
         */
        //TODO
          let referer = '';
          if (window.referrer && window.referrer.GTM != undefined) {
            referer = window.referrer.GTM;
            window.referrer.GTM = undefined;
          }
          else {
            referer = route.previous;
          }
          return referer || document.referrer;
        })()
      }
      gaObj = { ...gaObj, ...gaAdditionalObj };
      window.dataLayer && window.dataLayer.push(gaObj);
    }
  }
  catch (e) {
    console.warn(e);
  }

}

export default gaConfig;


//Tracking GTM extra fields on SRP, JD page
export function trackGTMData(data) {
  try {
    if (!isEmailinURL()) {
      window.dataLayer && window.dataLayer.push(data);
    }
  } catch (e) {
    console.warn(e);
  }
}


export function trackGACustom(event, category, label, action, gaAdditionalObj) {
  try {
    event = event || 'spa-event';
    let gaConfig = {
      'event': event,
      'spa-event-category': category,
      'spa-event-label': label,
      'spa-event-action': action
    };

    if (!isEmailinURL()) {
      gaConfig = { ...gaConfig, ...gaAdditionalObj };
      window.dataLayer && window.dataLayer.push(gaConfig);
    }
  } catch (e) {
    console.warn(e);
  }
}

export function trackFBPixel(data) {
  try {
    if (data && Object.keys(data).length) {
      window.fbPixel = data;
    }
  } catch (e) {
    console.warn(e);
  }
}