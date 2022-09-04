/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
const options = {
    parallaxSpeed: 0.8,
    scrollToAnchorSpeed: 700,

    templates: {
        btnLoaded: 'All shown',

        instagram:
            `<div class="col-4">
                <a href="{{link}}" target="_blank">
                    <img src="{{image}}" alt="{{caption}}" class="dx-img-stretch">
                </a>
            </div>`,
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',
        instagramApiPath: 'php/instagram/instagram.php',

        twitter:
            `<div class="dx-widget-twitter">
                <div class="dx-widget-text">
                {{tweet}}
                </div>
                <div class="dx-widget-twitter-date">
                    <span>{{date}}</span>
                </div>
            </div>`,
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
        twitterApiPath: 'php/twitter/tweet.php',
    },
};

export { options };
