```js


function accordion() {
document.querySelectorAll(".acnav__label").forEach(acnav => {


$(acnav).click(function () {

  var label = $(this);
	var parent = label.parent('.has-children');
	var list = label.siblings('.acnav__list');
  var animlist = list.find('.animlist');
  var animlink = list.find('.acnav__link');

  animlink.split = new SplitText(animlink, {type:"words"});
  var chars2 = animlink.split.words;

  var Q = gsap.timeline({paused:true});
  var Q1 = gsap.timeline({paused:true});

  Q.fromTo(animlist, {
        opacity: 0,
        y:0,
      }, {
        y:0,
        opacity: 1,
        stagger:.1,
        duration: .2,
   },.2)


  Q1.fromTo(chars2, {
         opacity: 0,
      }, {
        opacity: 1,
        stagger:.01,
        duration: .1,
   },.2)



	if (parent.hasClass('is-open') ) {

    gsap.set(animlist, {
        y:0,
        opacity: 1,
    });

    gsap.to(animlist, {
        y:25,
        opacity: 0,
        stagger:-.02,
        duration: .2,
    });


    gsap.set(chars2, {
        y:0,,
        opacity: 1,
    });

    gsap.to(chars2, {
        opacity: 0,
        stagger:-.01,
        duration: .1,
    });



    gsap.to(list, {
      height: 0,
      duration:.4,
      immediateRender: false,
      ease:"expo.inOut",
      onComplete: function(){
        parent.removeClass('is-open');
        Q1.restart()
      },
    });


  } else {

   gsap.set(list, {
      height: 0,
    });

    gsap.to(list, {
      height: "auto",
      duration: .7,
      ease:"expo.inOut",
      immediateRender: false,
    });

		parent.addClass('is-open');
	  Q.play()
    Q1.play()

  }
});
});
}
accordion();
```

```css
@charset "utf-8";
address, article, aside, button, blockquote, body, dd, dialog, dl, dt, fieldset,
footer, form, h1, h2, h3, h4, h5, h6, header, li, nav, ol, p, pre, section,
td, th, tr, ul {
    margin: 0;
    padding: 0;
}

body {
  background: black;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  height:100vh;
  font-size: 4vw;
  line-height:4vw;
  font-weight:300;
  color:white;
  text-transform:uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}



a {
  text-decoration: none;
}


.nav-wrap {
  width: 100%;
  margin: 0;
}

.acnav {
  width: 100%;
}
.acnav__list {
  padding: 0;
  margin: 0;
  list-style: none;
  overflow:hidden;
}
.acnav__list--level1 {
  border: none;
}


.acnav__link, .acnav__label {
  display: block;
  font-size: 4vw;
  line-height:4vw;
  padding: .5vw;
  margin: 0;
  width:80vw;
  cursor: pointer;
  color: #fcfcfc;
  background: black;
}

.acnav__link--level2, .acnav__label--level2 {
  padding-left: 5vw;

}

.acnav__link--level3, .acnav__label--level3 {
  padding-left: 10vw;
}

.atext {
  padding-top: 2.5vh; padding-bottom: 5vh;}

.acnav__link--level4, .acnav__label--level4 {
  padding-left: 15vw;
}

.acnav__list--level2, .acnav__list--level3, .acnav__list--level4 {
  display: none;

}

.is-open > .acnav__list--level2, .is-open > .acnav__list--level3, .is-open > .acnav__list--level4 {
  display: block;

}
```

```html
<div class="nav-wrap">
<nav class="acnav" role="navigation">
<ul class="acnav__list acnav__list--level1">


 <!-- - - - - - - - 1 - - - - - - - - - -->


			<li class="has-children">
				<div class="acnav__label">
					1.
				</div>

                      <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;"></div>

				<!-- start level 2 -->

				<ul class="acnav__list acnav__list--level2">

					<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							1.1
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">A (default = NaN) — Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
							</li>
								</ul>

            <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>



          	<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							1.2
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>
								</ul>

              <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>




          <li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							1.3
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>
								</ul>
				            <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>



           <li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							1.4
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>
								</ul>

                 <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>



          </ul>


					</li>



  <!-- - - - - - - - 2 - - - - - - - - - -->


			<li class="has-children">
				<div class="acnav__label">
				2.
				</div>

                <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;"></div>

				<!-- start level 2 -->

				<ul class="acnav__list acnav__list--level2">

					<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
						2.1
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>
								</ul>
						           <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>
							</li>



          	<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							2.2
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>



								</ul>

               <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>




          </ul>



					</li>




      <li class="has-children">
				<div class="acnav__label">
			3.
				</div>

            <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;"></div>


				<!-- start level 2 -->

				<ul class="acnav__list acnav__list--level2">

					<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							3.1
						</div>

            <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">

              	<li class="has-children">
						<div class="acnav__label acnav__label--level3 animlist">
							3.1.1
						</div>
						<!-- start level 4 -->
						<ul class="acnav__list acnav__list--level4">
							<li class="acnav__link acnav__link--level4 atext">Text
							</li>
								</ul>
								             <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>
							</li>



								</ul>

							</li>



          	<li class="has-children">
						<div class="acnav__label acnav__label--level2 animlist">
							3.2
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li class="acnav__link acnav__link--level3 atext">Text
							</li>
								</ul>

              <div style="margin-top:1vh; border-bottom:1px solid white; width:100vw;" class="animlist"></div>

							</li>




          </ul>



					</li>


   <div class="acnav__label">
			4.
				</div>

</ul>
</nav>
</div>

<section style="height:58vh;"></section>
```
