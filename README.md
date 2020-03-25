# nTrack

# Types of tracking which are used in Naukri
 - GA (GTM is internally triggering GA)
 - UBA
 - Performance  - earlier called as newmonk
 - Error - called as nlogger
 - HeatMap
 - TNM
 
`Tracking covered in nTrack- UBA, Performance, GA`

# Prerequisite
- nLogger & uba script should be present in the index.html

```sh
<script type="text/javascript" src="//static.naukimg.com/s/0/0/j/nLoggerJB_v3.0.min.js"></script>
    <script type="text/javascript">
        window.nLogger && nLogger.init({ "tag": "revamped_jd", "nLogger": { "beaconUrl": "https:\/\/lg.naukri.com\/uba", "eventName": "newMonkError", "deviceType": "SERVER" }, "boomerang": { "logBW": false, "beaconUrl": "https:\/\/lg.naukri.com\/uba", "imageURL": "\/\/static.naukimg.com\/s\/0\/0\/i\/", "eventName": "newMonkPerformance", "deviceType": "SERVER" }, "tenantId": 1, "appId": 121, "userIP": "2088510594" });
    </script>
    <script>
        (function () {
            var queuedSuperProps = []; var queuedEvents = []; window.ub = { track: function (eventName, eventProps) { queuedEvents.push([eventName, eventProps]) }, register: function (properties) { queuedSuperProps.push(properties); } };
            var script = document.createElement("script"); script.async = true; script.src = "//static.naukimg.com/s/0/1/j/ub_v1.5.min.js"; script.onload = function () {
                ub.init({
                    beaconUrl: "https://logs.naukri.com/uba", queuedEvents: queuedEvents, queuedSuperProps: queuedSuperProps, tenantId: '1', autoTrack: false, blackList:
                        []
                });
            }; document.head.appendChild(script);
        }()); ub.register({ 'appId': 121, 'pageName': "jd", 'tenantId': '1', });
    </script>
 ```   

# How to use
- Include the nTrack dependency in your project by adding the below mentioned line in package.json

```sh
"dependencies": {
    "ntrack": "git+http://gitdeployer:gitdeployer@gitlab.infoedge.com/naukri-ui-dev/node-nTrack.git#v0.0.1-beta3"
}
```
- Run `npm install ` to install the added dependency



# Implementation
- Import nTrack library in the Root component

```sh
import 'ntrack/dist/nTrack_v1';
```

- Now nTrack Library is available in the `tracking` variable which is present in the `window` object.
- Initialize nTrack with the common parameters which are going to be used across the page (Not in the app) like `Page name, jobId, src, Page index` etc.

```sh
tracking.init({     searchId: 212,
                    pageIndex: 1,
                    jobPosition: 2,
                    jobId: 11111111,
                    src: 'demo'
                },
                {
                    pageName: 'demo page' 
                });
```

- To perform the tracking use function `doTracking`

```sh
tracking.doTracking({
                uba: {
                    eventName: 'jobDetailsView',
                    keyNames: {
                        actionType: 'view',
                        errMsg: 'expired JD'
                    }
                }
            });
```            

# Syntax

```sh
doTracking(
    {
        uba:ubaObject,   //uba Object - Already populated Object
        performance:route,  //route Object- Only route object is needed by performance(boomlogger), performance creates its own object
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

```
# Example

```sh
tracking.doTracking({
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
```

# Functions
```sh
const init = (keyNames={},mainParams={}) => {
      commonUbaData = { ...keyNames };
      pageName=mainParams.pageName;
    };
```
```sh
 const doTracking = (trackingData) => {
      const uba = {
        pageName: pageName,
        eventName: trackingData.uba.eventName,
        keyNames: {
          ...commonUbaData,
          ...trackingData.uba.keyNames
        }
      };
      nTrack({
        ...trackingData,
        uba
      });
    };
```

## Browser support
- IE
- Firefox 
- Chrome
- Safari


