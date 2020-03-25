# {::nomarkdown}<p style="text-align: center;" align="center"><img src="./assets/images/301s.png" alt="301s" style="width:180px;height:160px;" width="180" height="160" /><br />301s</p>{:/}

<p style="text-align: center;" align="center">A static URL shortening and link management project.</p>

---
<script src="/assets/js/urls.1.js"></script> <script src="/assets/js/main.js"></script>
---

To add a shortlink edit one of the `urls.*.js` script in [/assets/js/](https://github.com/301s/301s.github.io/tree/master/assets/js) and add a short code and it link as a dictionary object. `{shortcode : "your actual link"}`.

Then open a PR to master [here](https://github.com/301s/301s.github.io/pulls). Your PR will be reviewed if it ok your PR will be merged into master and your shortlink will be available at [https://301s.github.io?shortcode](https://301s.github.io?shortcode)

E.g assume your shortcode is `dc` and your link is `https://www.patreon.com/devcareer`. Edit one of the `url.*.js` script in [/assets/js/](https://github.com/301s/301s.github.io/tree/master/assets/js)

```js
const urlMap1 = {
    //...
    dc : "https://www.patreon.com/devcareer",
    exit : "https://301s.github.io/"
}
```

After a PR has been merged into master the link will be available at [https://301s.github.io?dc](https://301s.github.io?dc). Anytime the link https://301s.github.io?dc is visited it will redirect to https://www.patreon.com/devcareer.

 > Note: Add your short code and link before the 'exit' link and do not forget the comma after your short code and link. 

 To view all the short links in 301s visit [links](https://301s.github.io/links.html)
 
___

## Table of content
- [How it works](#how-it-works)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## How it works

In the file [main.js](https://github.com/301s/301s.github.io/blob/master/assets/js/main.js) the url is splited with `?` any string after the `?` symbol is taken and ran through the collection of url maps. If the shortcode is present in the project the page redirects to the actual link. E.g. **https://301s.github.io?dc** will be splited by '?' and the shortcode **dc** will be checked in the ulr maps for it link, if present it redirects to https://www.patreon.com/devcareer else nothing happens.

## Contributing

Read the instruction above to add a shortlink to the project. 

## Support

You can support some of this community as they make big impact in the traing of individual to get started with software engineering and open source contribution.

- [https://www.patreon.com/devcareer](https://www.patreon.com/devcareer)

## License

MIT License Copyright (c) 2020 [Adewale Azeez](https://twitter.com/iamthecarisma) - 301s

