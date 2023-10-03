;(function(){
    'use strict';

    const $topHeader = document.querySelector('.container-hearder');
    const $nav = document.querySelector('.nav');
    const $btnHamburguerMenu = document.querySelector('.hamburguer-icon');
    const $btnCloseMenu = document.querySelector('.close-icon');
    const $slydeShow = document.querySelector('.slyde-action');
    const $actionSlydeContainer = document.querySelector('.btns-actionSlyde-container');
    $actionSlydeContainer.style.display = 'flex';

    window.addEventListener('resize', checkViewSize);
    window.addEventListener('DOMContentLoaded', checkViewSize);

    function checkViewSize(){
        this.innerWidth >= 1300 ? viewDasktop() : viewMobile();
        this.innerWidth < 1300 ? $nav.style.display = 'none' :  $nav.style.display = 'flex';
    }

    function onCarousel(){
        document.querySelector('.off-js').classList.remove('off-js');
    }

    let click = 0;
    function slydeActionDasktop(e){
        let target = e.target.getAttribute('action'); 

        const actions = {
            nextBtn: function(){
                
                if(click === 0){
                    $slydeShow.style.transform = 'translateX(-125em)';
                }else if(click === 1){
                    $slydeShow.style.transform = 'translateX(-250em)';
                }else{
                    return
                };
                click++;
            },
            previousBtn: function(){
                if(click === 0){
                    return;
                }
                else if($slydeShow.style.transform === 'translateX(-125em)'){
                    $slydeShow.style.transform = 'translateX(0em)';
                }else if($slydeShow.style.transform = 'translateX(-250em)'){
                    $slydeShow.style.transform = 'translateX(-125em)';
                }
                click--;
            }
        };

        if(target){
            actions[target]();
        };
    };

    function slydeActionMobile(e){
        let target = e.target.getAttribute('action'); 

        const actions = {
            nextBtn: function(){
                
                if(click === 0){
                    $slydeShow.style.transform = 'translateX(-34em)';
                }else if(click === 1){
                    $slydeShow.style.transform = 'translateX(-68em)';
                }else{
                    return
                };
                click++;
            },
            previousBtn: function(){
                if(click === 0){
                    return;
                }
                else if($slydeShow.style.transform === 'translateX(-34em)'){
                    $slydeShow.style.transform = 'translateX(0em)';
                }else if($slydeShow.style.transform = 'translateX(-68em)'){
                    $slydeShow.style.transform = 'translateX(-34em)';
                }
                click--;
            }
        };

        if(target){
            actions[target]();
        };
    };

    function viewMobile(){
        $nav.style.transform = 'translateY(-22em)';
        $topHeader.style.display = 'flex';
        $btnHamburguerMenu.addEventListener('click', openMenu);
        $btnCloseMenu.addEventListener('click', closeMenu);
        $actionSlydeContainer.addEventListener('click', slydeActionMobile);

        function openMenu(){
            $nav.style.display = 'flex';
            $nav.style.transform = 'translateY(-9.6em)';
            
        };

        function closeMenu(){
            $nav.style.transform = 'translateY(-22em)';
        };
    };

    function viewDasktop(){
        $nav.style.display = 'flex';
        $actionSlydeContainer.addEventListener('click', slydeActionDasktop);
    };

    onCarousel();
})();