# Assembler

A library that allows you to create sites &amp; web apps with ease

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Copyright](#copyright)

## Quick Start

Four quick start options are available:

- [Download the latest release](https://github.rp-core.com/chrisopedia/assembler/archive/v1.0.0.zip).
- Clone the repo: `git clone https://github.rp-core.com/chrisopedia/assembler.git`.
- Install with [Bower](http://bower.io): `bower install assembler`.
- Install with [component(1)](https://github.com/componentjs/component): `component install assembler`.
- Install with [npm](https://www.npmjs.org): `npm install assembler`.

### What's included

Within the download you'll find the following directories and files, logically
grouping common assets and providing both compiled and minified variations.
You'll see something like this:

```
assembler/
└── dist/
    ├── styles/
    │   ├── assembler.css
    │   ├── assembler.css.map
    │   ├── assembler.min.css
    └── scripts/
        ├── assembler.js
        └── assembler.min.js
```

Provided are compiled CSS and JS (`assembler.*`), as well as compiled and
minified CSS and JS (`assembler.min.*`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors)
(`assembler.*.map`) are available for use with certain browsers' developer
tools.

## Bugs and feature requests

Have a bug or a feature request? Please first read the
[Contributing documentation](https://github.com/chrisopedia/assembler/blob/master/CONTRIBUTING.md)
and search for existing and closed issues. If your problem or idea is not
addressed yet, [please open a new issue](https://github.com/chrisopedia/assembler/issues/new).

## Documentation

assembler's documentation is a [Jekyll](http://jekyllrb.com)-based site and
is publicly hosted on GitHub Pages.  You may also run the docs locally.

### Running documentation locally

[Github](https://github.com/) has a [great guide](https://help.github.com/articles/using-jekyll-with-pages/)
for setting up Jekyll for use with Github pages.  I've outlined the basics below.

1. [Install Ruby](https://www.ruby-lang.org/en/downloads/), if you don't already have it. Should be version `1.9.3` or better.
2. [Install Bundler](http://bundler.io/) via `gem install bundler`.
3. [Install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.5.x). Run `bundle install` from the root directory.
4. Change into the `/assembler` directory and run `grunt dev` in the command line.
5. Open <http://127.0.0.1:8000> in your browser.

:exclamation: **Note Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.

## Contributing

Contribution is a perfect way to help advance the project.  Please read the
[contributing guidelines](https://github.com/chrisopedia/assembler/blob/master/CONTRIBUTING.md).
before getting started.

Editor preferences are available in the [editor config](https://github.com/chrisopedia/assembler/blob/master/.editorconfig)
for use in common text editors. Read more and download plugins at <http://editorconfig.org>.

:exclamation: **This project adheres to the [Open Code of Conduct][code-of-conduct]. 
By participating, you are expected to honor this code.**

## Copyright

:copyright: 2015. See the [LICENSE](https://github.com/chrisopedia/assembler/blob/master/LICENSE.md)

[code-of-conduct]: http://todogroup.org/opencodeofconduct/#assemblerui/assemblerui@gmail.com
