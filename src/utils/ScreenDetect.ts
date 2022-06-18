export default class ScreenDetect {
  width(windowWidth: number) {
    window.onresize = () => {
      windowWidth = window.innerWidth;
    };
    return windowWidth;
  }

  mounted(windowWidth: number, widthClass: boolean) {
    windowWidth = new ScreenDetect().width(windowWidth);
    widthClass = windowWidth > 1920 ? true : false;
    return widthClass;
  }
}
