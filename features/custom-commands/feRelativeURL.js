//const { getFEUrl } = require('@/utils/url');

/**
 * Concatenate a FE_BASE_URL variable and a pathname.
 * This will bust cache automatically by attaching a random query string.
 * Also it will retry in case there is a network issue.
 *
 * @param {*} pathname
 * @param {boolean} cacheBuster
 * @param {*} callback
 * @returns
 */

module.exports = {
  command: async function (pathname, cacheBuster) {
    console.log(cacheBuster)
    // Make sure env var is set.
    if (!process.env.FE_BASE_URL) {
      throw new Error('SDP Nightwatch: missing env vars `FE_BASE_URL`.')
    }

    const feUrl = getFEUrl()

    // Remove the trailing slash to avoid double slash when concat cache buster.
    pathname = pathname.replace(/\/$/, '')
    if (cacheBuster) {
      // Cache buster query string with timestamp in seconds.
      pathname = pathname + '/?cache=' + Math.floor(Date.now() / 1000)
    }
    await this.url(feUrl + pathname)
  },
}

// exports.command = async function sdpFERelativeUrl (pathname, cacheBuster, callback) {
//   const self = this;
//   // Make sure env var is set.
//   if (!process.env.FE_BASE_URL) {
//     throw new Error('SDP Nightwatch: missing env vars `FE_BASE_URL`.');
//   }
//   let feUrl = getFEUrl();

//   if (process.env.FE_BASE_URL) {
//     feUrl = process.env.FE_BASE_URL.replace(/\/$/, '');
//   } else {
//     throw new Error('Could not find a frontend URL set up. Please check the env var "FE_BASE_URL".');
//   }
//   // Remove the trailing slash to avoid double slash when concat cache buster.
//   pathname = pathname.replace(/\/$/, '');
//   if (cacheBuster) {
//     // Cache buster query string with timestamp in seconds.
//     pathname = pathname + '/?cache=' + Math.floor(Date.now() / 1000);
//   }
//   await this.url(feUrl + pathname, function () {
//     // // Refresh the current page if it's a server error page.
//     // // Because Selenium has no way to get http response code,
//
//     // function retryOnServerError (retryTimes = 3, waitTime = 3000) {
//     //   retryTimes--;
//     //   self.getTitle(function (title) {
//     //     if (typeof title === 'string' && title.includes('Error')) {
//
//     //         if (retryTimes > 0) {
//     //           setTimeout(function () {
//     //             retryOnServerError(retryTimes);
//
//     //         }
//
//     //     }
//     //   });
//     // }

//     // // If BE is not ready yet, FE will fail.
//     // // So we give it a retry.
//     // retryOnServerError();
//   });

//   // if (typeof callback === 'function') {
//   //   callback.call(self);
//   // }

// };

const getFEUrl = () => {
  if (process.env.FE_BASE_URL) {
    return normalizeUrl(process.env.FE_BASE_URL)
  } else {
    throw new Error(
      'Could not find a frontend URL set up. Please check the env var "FE_BASE_URL".'
    )
  }
}

const normalizeUrl = (url) => {
  // Remove trailing slash if there is
  url = url.replace(/\/$/, '')

  return url
}

// await this.url(feUrl + pathname, function () {
//   // Refresh the current page if it's a server error page.
//   // Because Selenium has no way to get http response code,
//   // so we use HTML title to tell if it's a error page here.
//   function retryOnServerError (retryTimes = 3, waitTime = 3000) {
//     retryTimes--;
//     self.getTitle(function (title) {
//       if (typeof title === 'string' && title.includes('Error')) {
//         self.refresh(function () {
//           if (retryTimes > 0) {
//             setTimeout(function () {
//               retryOnServerError(retryTimes);
//             }, waitTime);
//           }
//         });
//       }
//     });
//   }

//   // If BE is not ready yet, FE will fail.
//   // So we give it a retry.
//   retryOnServerError();
// });
