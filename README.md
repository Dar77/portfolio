### Frontend Nanodegree Project
___

# Portfolio Project

For this project I was required to build a web portfolio in which to present various web based projects. The portfolio needed to be fully responsive and could be built using a CSS framework.

This is a project from Udacity's **Frontend Nanodegree** [program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
___

### Portfolio

[visit portfolio project](http://www.it48.xyz/portfolio)

![Portfolio project screen shot](img/portfolio.jpg)
___


## Project / Minimum Specification

- **Follow the provided design mock-up (PDF) for layout.**
- **Must feature a logo as part of the header.**
- **Have 3 columns of images representing projects.**
- **Design must be fully responsive.**
- **HTML and CSS must follow Udacity's [style guide](http://udacity.github.io/frontend-nanodegree-styleguide/).**
- **HTML and CSS must validate.**
- **Must make use of semantic HTML5 elements.**
- **Must maintain a separation of concerns. (CSS/HTML/JS)**
___


## Solution

For my portfolio I made use of the **Bootstrap** framework to achieve a fully responsive layout. I applied the various **Bootstrap** classes to semantic HTML5 elements to build the design.

To make my images fully responsive and to respond to various screen sizes by providing an appropriate image file size (and quality) I have made use of **srcset** and the **picture** element. For the main image, using the **picture** element provided the means to give a different crop of the image for smaller screen sizes.

For the CSS I have started with small screen default styles and added style changes for larger screens in media queries.

I've customized the project by adding custom fonts and icons to the design. Also I've used **Bootstrap's Modals** for extra information panels and made use of CSS transition effects on clickable images and buttons.