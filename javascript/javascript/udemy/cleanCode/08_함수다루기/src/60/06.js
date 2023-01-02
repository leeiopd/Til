/**
 * Closure
 */

function fetcher(endpoint) {
  return function (url, options) {
    return fetch(endpoint + url, options)
      .then((res) => {
        if (res.ok) {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.error);
          }
        }
      })
      .catch((err) => console.log(err));
  };
}

const getNaverApi = fetcher("https://naver.com");
const getDaumApi = fetcher("https://daum.net");

getNaverApi("/webtoon").then((res) => res);
getDaumApi("/webtoon").then((res) => res);
