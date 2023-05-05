This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## About JPEG Image and EXIF Viewer using Reactjs:

This a simple JPEG Image and EXIF Viewer. 

This application implements the following features:

**• Visualization of images:** support visualization of JPEG images (one at a time). Images scale to have a maximum dimension (height or width) of 512 pixels.

**• Visualization of image EXIF data:** list all EXIF tags encoded in the JPEG file. If the number of tags is too great to view in the application window, a scrolling widget is provieded to view them all.

**• Rescaling:** the main window support rescaling. When the user resizes the application, the user interface scale, and the image scales appropriately.

**• Image rotation:**  support rotation of the image in 90◦ increments. 

## Extra features:

**• Geolocalization:** if an image has GPS Geolocation Tags in its EXIF tag set, users can click on the location button and open a browser with Google Maps centered at the GPS location of the image.

**• View multiple images:** allow the user to specify more than one image from a file selector.There is controls for switching/cycling to next/previous image in the list.

## About Model View Control (MVC):

This application implement MVC, inside the folder src/components you can check the relative models inside the following files:
MainModel.tsx,MainView.tsx, MainController.tsx


However, React in origin is not a framwork that support MVC. React is a library for building user interfaces and it provides a view layer for the application. To handle more complex state management, external libraries like Redux can be used, which follow a more traditional MVC (Model-View-Controller) architecture.

## Install:

1- You must have [NodeJs](https://nodejs.org/en) and npm installed on your machine.

2- Clone the repository : 
```bash
git clone https://github.com/fatemah-alh/img-exif-viewer.git
```
3- Install dependencies and run:

```bash
cd img-exif-viewer
npm install 
npm run dev
```

4- Open [http://localhost:3000](http://localhost:3000) with your browser to navigate to the app.



## Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You can check out [Image and exif viewer on vercel]( https://img-exif-viewer-nine.vercel.app ) to visualize the application.

## Image from the app :

<img width="1209" alt="exif_app" src="https://user-images.githubusercontent.com/26904919/236418899-e4f78985-36fa-4098-867d-2d343d416337.png">


