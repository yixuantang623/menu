document.querySelector('.Acut3').addEventListener('animationend', () => {
  // 在 .Ccut2 播放完畢後延遲 0.2 秒再觸發重置動畫
  setTimeout(() => {
    const animationElements = document.querySelectorAll('.Aanimation * , .Banimation * , .Canimation *');
    animationElements.forEach(element => {
      element.style.animation = 'none';  // 停止動畫
      void element.offsetWidth;  // 重新觸發渲染 (重置動畫)
    });

    // 重新賦值動畫
    document.querySelector('.new01').style.animation = 'fontslide01 2.2s 1 linear forwards';
    document.querySelector('.new02').style.animation = 'fontslide02 2.2s 1 linear forwards';
    document.querySelector('.newProduct').style.animation = 'fontsFadein 0.6s 1 linear 2.5s forwards';
    document.querySelector('.slogan').style.animation = 'fontsFadein 0.6s 1 linear 2.8s forwards';
    document.querySelector('.productName').style.animation = 'fontsFadein 0.6s 1 linear 3.1s forwards';
    document.querySelector('.productNameEng').style.animation = 'fontsFadein 0.6s 1 linear 3.4s forwards';
    document.querySelector('.sweetprice').style.animation = 'fontsFadein 0.6s 1 linear 3.7s forwards';
    document.querySelector('.price').style.animation = 'fontsFadein 0.6s 1 linear 3.9s forwards';
    document.querySelector('.specialPrice').style.animation = 'fontsFadein 0.6s 1 linear 4.3s forwards';
    document.querySelector('.Acut2 .logo').style.animation = 'fontsFadein 0.5s 1 linear 2.1s forwards';
    document.querySelector('.cherrypie').style.animation = 'pieDrop 8.5s 1 ease-out 2.1s forwards';
    document.querySelector('.cherry01').style.animation = 'cherryUP01 8.5s 1 ease-out 2.1s forwards';
    document.querySelector('.cherry02').style.animation = 'cherryUP02 8.5s 1 ease-out 2.1s forwards';
    document.querySelector('.Acut2').style.animation = 'fadeOut 0.2s 1 linear 10s forwards';
    document.querySelector('.Acut3').style.animation = 'fadeOut 0.2s 1 linear 11s forwards';
    document.querySelector('.Acut3 .mask').style.animation = 'logoMask 1.5s 1 ease-out 7.5s forwards';
    document.querySelector('.Acut3 .logo2').style.animation = 'logoFadein 2s 1 ease-out 9s forwards';
    document.querySelector('.Bcut2').style.animation = 'fadeOut 0.2s 1 linear 22s forwards';
    document.querySelector('.title').style.animation = 'fontsFadein 0.3s 1 linear 11.1s forwards , titleSlide 1s 1 ease-out 11.2s forwards';
    document.querySelector('.toast01').style.animation = 'fontsFadein 0.3s 1 linear 11.1s forwards , toastRotate 1.5s 1 ease-out 12s forwards , titleSlide 1s 1 ease-out 14.3s forwards';
    document.querySelector('.tomato').style.animation = 'tomatoRotate 1.2s 1 ease-out 12.4s forwards , titleSlide 1s 1 ease-out 14.3s forwards';
    document.querySelector('.lettuce').style.animation = 'lettuceRotate 1.2s 1 ease-out 12.4s forwards , titleSlide 1s 1 ease-out 14.3s forwards';
    document.querySelector('.bacon').style.animation = 'baconRotate 1.2s 1 ease-out 12.4s forwards , titleSlide 1s 1 ease-out 14.3s forwards';
    document.querySelector('.toast02').style.animation = 'toastPopin 0.6s 1 ease-out 13.9s forwards , titleSlide 1s 1 ease-out 14.3s forwards';
    document.querySelector('.Banimation .logo').style.animation = 'fontsFadein 0.5s 1 linear 11s forwards , fadeOut 0.2s 1 linear 22s forwards';
    document.querySelector('.member').style.animation = 'fontsFadein 0.6s 1 linear 16.5s forwards';
    document.querySelector('.saleTitle').style.animation = 'fontsFadein 0.6s 1 linear 16.9s forwards';
    document.querySelector('.onePlusone').style.animation = 'fontsFadein 0.6s 1 linear 17.3s forwards';
    document.querySelector('.sale').style.animation = 'fontsFadein 0.6s 1 linear 16s forwards';
    document.querySelector('.sandwichandcoffee').style.animation = 'rightSlide 0.3s 1 linear 15.5s forwards';
    document.querySelector('.Bcut3').style.animation = 'fadeOut 0.2s 1 linear 23.5s forwards';
    document.querySelector('.Bcut3 .mask').style.animation = 'logoMask 1.5s 1 ease-out 20s forwards';
    document.querySelector('.Bcut3 .logo2').style.animation = 'logoFadein 2s 1 ease-out 21.5s forwards';
  
    document.querySelector('.Ccut1').style.animation = 'fadeOut 0.2s 1 linear 38s forwards';
    document.querySelector('.circle').style.animation = 'fontsFadein 0.3s 1 linear 23.6s forwards , circleRotate1 1s ease-in 23.8s 1 forwards , circleRotate2 1s ease-in 28.8s 1 forwards';
    document.querySelector('.coffee1').style.animation = 'coffeeSlide 0.25s ease-in 24.5s 1 forwards , fadeOut 0.2s 1 linear 28.5s forwards';
    document.querySelector('.mint1').style.animation = 'mintdrop 4s ease-out 25s 1 forwards , fadeOut 0.2s 1 linear 28.5s forwards';
    document.querySelector('.menthawashed').style.animation = 'fontsFadein 0.4s 1 linear 25.3s forwards , fadeOut 0.2s 1 linear 28.1s forwards';
    document.querySelector('.menthawashedEng').style.animation = 'fontsFadein 0.4s 1 linear 25.6s forwards , fadeOut 0.2s 1 linear 28.4s forwards';
    document.querySelector('.mvip').style.animation = 'fontsFadein 0.4s linear 25.9s 1 forwards , fadeOut 0.2s 1 linear 28.5s forwards';
    document.querySelector('.mprice').style.animation = 'fontsFadein 0.4s linear 26.2s 1 forwards , fadeOut 0.2s 1 linear 28.5s forwards';
    document.querySelector('.coffee2').style.animation = 'coffee2Slide 0.25s ease-in 29.8s 1 forwards';
    document.querySelector('.lemon1').style.animation = 'lemonup 4s ease-out 30.3s 1 forwards';
    document.querySelector('.citricnatural').style.animation = 'fontsFadein 0.4s 1 linear 30.6s forwards';
    document.querySelector('.citricnaturalEng').style.animation = 'fontsFadein 0.4s 1 linear 30.9s forwards';
    document.querySelector('.cvip').style.animation = 'fontsFadein 0.4s linear 31.2s 1 forwards';
    document.querySelector('.cprice').style.animation = 'fontsFadein 0.4s linear 31.5s 1 forwards';
    document.querySelector('.Ccut2 .logo2').style.animation = 'logoFadein 2s 1 ease-out 37s forwards';
    document.querySelector('.Ccut2 .mask').style.animation = 'logoMask 1.5s 1 ease-out 35.5s forwards';
    document.querySelector('.Ccut2').style.animation = 'fadeOut 0.2s 1 linear 41s forwards';
  }, 1200); 
});
