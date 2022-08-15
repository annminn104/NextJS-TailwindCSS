import { useEffect } from "react";
let FB;

const useFacebook = ({ addTrack }) => {
  useEffect(() => {
    const facebookScript = document.createElement("script");
    facebookScript.id = "fb-sdk";
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = "anonymous";
    facebookScript.nonce = "Jj2upiOi";
    const track = addTrack ? `&appId=${process.env.NEXT_FACEBOOK_APP_ID}&autoLogAppEvents=1` : "";
    facebookScript.src = `https://connect.facebook.net/en_US/all.js#xfbml=1&version=v14.0${track}`;

    document.body.appendChild(facebookScript);

    const startScript = document.createElement("script");
    const code = `window.fbAsyncInit = function() {
      FB.init({
        appId            : '${process.env.NEXT_FACEBOOK_APP_ID}',
        autoLogAppEvents : ${addTrack},
        xfbml            : true,
        version          : 'v14.0'
      });
    };`;
    startScript.appendChild(document.createTextNode(code));
    document.body.appendChild(startScript);
    if (window.FB) {
      window.fbAsyncInit();
    }
    return () => {
      document.body.removeChild(facebookScript);
      document.body.removeChild(startScript);
    };
  }, [addTrack]);
};

export { useFacebook };
