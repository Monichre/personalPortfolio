function gtag() {
    dataLayer.push(arguments)
}

function introItems() {
    var t = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".welcome-item").on("mouseenter", function () {
        mySplitText = new SplitText(".welcome-item-before", {
            type: "chars"
        }), WelcomeSplitBefore = mySplitText.chars, mySplitText = new SplitText(".welcome-item-after", {
            type: "chars"
        }), WelcomeSplitAfter = mySplitText.chars, t = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.add(TweenMax.staggerTo($(this).find(WelcomeSplitBefore), .35, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }, .025)).add(TweenMax.to($(this).find(".welcome-item-after"), .1, {
            visibility: "visible",
            zIndex: 5
        }), "=-0.35").add(TweenMax.staggerFrom($(this).find(WelcomeSplitAfter), .35, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        }, .025), "=-0.35").add(TweenMax.to($(this), .25, {
            opacity: 1
        }), "=-0.55"), t.play()
    }).on("mouseleave", function () {
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.kill(), e.add(TweenMax.to($(this), .25, {
            opacity: .2
        })).add(TweenMax.staggerTo($(this).find(WelcomeSplitAfter), .25, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.25").add(TweenMax.to($(this).find(".welcome-item-after"), .1, {
            visibility: "hidden",
            zIndex: 1
        }), "=-0.25").add(TweenMax.staggerTo($(this).find(WelcomeSplitBefore), .25, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.25"), e.play()
    });
    var i = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        s = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".reveal-fashion").on("mouseenter", function () {
        i = new TimelineMax({
            paused: !0,
            reversed: !0
        }), i.add(TweenMax.to(".image-reveal-fashion", 1.25, {
            clip: "rect(0px 400px 750px 0px)",
            ease: Expo.easeOut
        })), i.play()
    }).on("mouseleave", function () {
        s = new TimelineMax({
            paused: !0,
            reversed: !0
        }), i.kill(), s.add(TweenMax.to(".image-reveal-fashion", .75, {
            clip: "rect(0px 400px 0px 0px)",
            ease: Expo.easeOut
        })), s.play()
    });
    var n = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        r = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".reveal-architecture").on("mouseenter", function () {
        n = new TimelineMax({
            paused: !0,
            reversed: !0
        }), n.add(TweenMax.to(".image-reveal-architecture", 1.25, {
            clip: "rect(0px 400px 750px 0px)",
            ease: Expo.easeOut
        })), n.play()
    }).on("mouseleave", function () {
        r = new TimelineMax({
            paused: !0,
            reversed: !0
        }), n.kill(), s.add(TweenMax.to(".image-reveal-architecture", .75, {
            clip: "rect(0px 400px 0px 0px)",
            ease: Expo.easeOut
        })), r.play()
    });
    var o = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        a = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".reveal-personal").on("mouseenter", function () {
        o = new TimelineMax({
            paused: !0,
            reversed: !0
        }), o.add(TweenMax.to(".image-reveal-personal", 1.25, {
            clip: "rect(0px 400px 750px 0px)",
            ease: Expo.easeOut
        })), o.play()
    }).on("mouseleave", function () {
        a = new TimelineMax({
            paused: !0,
            reversed: !0
        }), o.kill(), a.add(TweenMax.to(".image-reveal-personal", .75, {
            clip: "rect(0px 400px 0px 0px)",
            ease: Expo.easeOut
        })), a.play()
    })
}

function projectListing() {
    var t = new ScrollMagic.Controller;
    $(".img-container").each(function () {
        var e = new TimelineMax({});
        e.add(TweenMax.to($(this).find(".category-img"), 3, {
            clip: "rect(-40px 340px 750px -40px)",
            ease: Expo.easeOut
        })).add(TweenMax.to($(this).find(".img-center"), .55, {
            scale: 1.2,
            ease: Expo.easeOut
        }), "=-3").add(TweenMax.to($(this).find(".img-left"), .55, {
            x: "-150%",
            ease: Expo.easeOut
        }), "=-2.8").add(TweenMax.to($(this).find(".img-right"), .55, {
            x: "50%",
            ease: Expo.easeOut
        }), "=-2.6"), e.play();
        var i = new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            offset: "-400%"
        }).addTo(t).setTween(e)
    });
    var e = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        i = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".img-container, .img-container-opening").on("mouseenter", function () {
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        }), e.add(TweenMax.to($(this).find("#loader, .img-preloader"), .1, {
            visibility: "hidden"
        })).add(TweenMax.to($(this).find(".category-img img"), .55, {
            opacity: .12
        })).add(TweenMax.to($(this).find(".img-left"), .55, {
            x: "-100%",
            ease: Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".img-right"), .55, {
            x: "0%",
            ease: Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".discovery-arrow"), .55, {
            x: "-50%",
            clip: "rect(0px 40px 40px 0px)",
            ease: Expo.easeOut
        }), "=-0.35"), e.play()
    }).on("mouseleave", function () {
        i = new TimelineMax({
            paused: !0,
            reversed: !0
        }), e.kill(), i.add(TweenMax.to($(this).find(".category-img img"), .55, {
            opacity: 1
        })).add(TweenMax.to($(this).find(".img-left"), .55, {
            x: "-150%",
            ease: Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".img-right"), .55, {
            x: "50%",
            ease: Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".discovery-arrow"), .55, {
            x: "-120%",
            clip: "rect(0px 0px 40px 0px)",
            ease: Expo.easeOut
        }), "=-0.35").add(TweenMax.to($(this).find("#loader, .img-preloader"), .1, {
            visibility: "hidden"
        })), i.play()
    });
    var s = new Blazy({
        offset: 1250
    })
}

function loadColor(t) {
    var e, i, s, n, r, o, a;
    switch (t) {
        case "black":
            e = "#000000", i = "#6E6E6E", s = "#ffffff", n = "#CACACA", r = "#6E6E6E", a = "1";
            break;
        case "white":
            e = "#ffffff", i = "#CACACA", s = "#000000", n = "#6E6E6E", r = "#CACACA", a = "0.1";
            break;
        case "gray":
            e = "#202020", i = "#6E6E6E", s = "#ffffff", n = "#CACACA", r = "#6E6E6E", a = "1";
            break;
        default:
    }
    var l = new TimelineMax({
        paused: !0,
        reversed: !1
    });
    l.add(TweenMax.to("body, .ms-slide, .color-selector.main", 1, {
        backgroundColor: e
    })).add(TweenMax.to(".bg-fashion, .bg-architecture, .bg-personal, .bg-about", 1, {
        opacity: a
    }), "=-1").add(TweenMax.to(".liam-before, .bread-before, .about-before, .designed-before", 1, {
        color: i
    }), "=-1").add(TweenMax.to(".liam-after, .bread-after, .about-after, .designed-after, .welcome-item-after, .liam-ellis", 1, {
        color: s
    }), "=-1").add(TweenMax.to(".welcome-item-before", 1, {
        color: n
    }), "=-1").add(TweenMax.to(".lineTop, .lineBottom", 1, {
        backgroundColor: r
    }), "=-1"), l.play()
}

function commonItems() {
    var menu = document.querySelector(".hamburger-container");

    var navigation = new TimelineMax({
        paused: !0,
        reversed: !0
    }).add(TweenMax.to("#navigation", .1, {
        visibility: "visible"
    })).add(TweenMax.to("#filter", .1, {
        zIndex: 9998,
        visibility: "visible"
    })).add(TweenMax.to("body, html", .1, {
        overflow: "hidden"
    })).add(TweenMax.to("#navigation", .55, {
        x: 0,
        ease: Expo.easeOut
    }), "=-0.1").add(TweenMax.to("#filter", .55, {
        opacity: .85
    }), "=-0.55").add(TweenMax.staggerTo(".nav-item-wrapper", .55, {
        y: "0%",
        ease: Expo.easeOut
    }, .015), "=-0.35").add(TweenMax.staggerTo(".nav-last p", .55, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut
    }, .015), "=-0.35");
        document.querySelector('.hamburger-container').addEventListener("click", function () {
            console.log('im clicking');
            $(".lineTop, .lineBottom").toggleClass("spin")
            navigation.reversed() ? navigation.play().timeScale(1) : navigation.reverse().timeScale(1.5)
    }, false);
    var t = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".liam-container").on("mouseenter", function () {
        mySplitText = new SplitText(".liam-before", {
            type: "chars"
        }), PeterBefore = mySplitText.chars, mySplitText = new SplitText(".liam-after", {
            type: "chars"
        }), PeterAfter = mySplitText.chars, t = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.add(TweenMax.staggerTo($(this).find(PeterBefore), .15, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }, .01)).add(TweenMax.to($(this).find(".liam-after"), .1, {
            opacity: 1,
            zIndex: 5
        }), "=-0.12").add(TweenMax.staggerFrom($(this).find(PeterAfter), .15, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        }, .01), "=-0.10"), t.play()
    }).on("mouseleave", function () {
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.kill(), e.add(TweenMax.staggerTo($(this).find(PeterAfter), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
            // I changed this to liam-before instead of after
        }, .01), "=-0.25").add(TweenMax.to($(this).find(".liam-before"), .1, {
            opacity: 0,
            zIndex: 1
        }), "=-0.12").add(TweenMax.staggerTo($(this).find(PeterBefore), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .01), "=-0.10"), e.play()
    });
    var i = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        s = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".about-container").on("mouseenter", function () {
        mySplitText = new SplitText(".about-before", {
            type: "chars"
        }), AboutBefore = mySplitText.chars, mySplitText = new SplitText(".about-after", {
            type: "chars"
        }), AboutAfter = mySplitText.chars, i = new TimelineMax({
            paused: !0,
            reversed: !0
        }), i.add(TweenMax.staggerTo($(this).find(AboutBefore), .15, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }, .015)).add(TweenMax.to($(this).find(".about-after"), .1, {
            opacity: 1,
            zIndex: 5
        }), "=-0.12").add(TweenMax.staggerFrom($(this).find(AboutAfter), .15, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        }, .015), "=-0.10"), i.play()
    }).on("mouseleave", function () {
        s = new TimelineMax({
            paused: !0,
            reversed: !0
        }), i.kill(), s.add(TweenMax.staggerTo($(this).find(AboutAfter), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.25").add(TweenMax.to($(this).find(".about-after"), .1, {
            opacity: 0,
            zIndex: 1
        }), "=-0.12").add(TweenMax.staggerTo($(this).find(AboutBefore), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.10"), s.play()
    });
    var n = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        r = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".credits").on("mouseenter", function () {
        mySplitText = new SplitText(".designed-before", {
            type: "chars"
        }), DesignedBefore = mySplitText.chars, mySplitText = new SplitText(".designed-after", {
            type: "chars"
        }), DesignedAfter = mySplitText.chars, n = new TimelineMax({
            paused: !0,
            reversed: !0
        }), n.add(TweenMax.staggerTo($(this).find(DesignedBefore), .15, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }, .015)).add(TweenMax.to($(this).find(".designed-after"), .1, {
            opacity: 1,
            zIndex: 5
        }), "=-0.12").add(TweenMax.staggerFrom($(this).find(DesignedAfter), .15, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        }, .015), "=-0.10").add(TweenMax.to($(this).find(".mark"), .35, {
            opacity: 1
        }, "=-0.55")), n.play()
    }).on("mouseleave", function () {
        r = new TimelineMax({
            paused: !0,
            reversed: !0
        }), n.kill(), r.add(TweenMax.staggerTo($(this).find(DesignedAfter), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.25").add(TweenMax.to($(this).find(".designed-before"), .1, {
            opacity: 0,
            zIndex: 1
        }), "=-0.12").add(TweenMax.staggerTo($(this).find(DesignedBefore), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.10").add(TweenMax.to($(this).find(".mark"), .35, {
            opacity: .55
        }, "=-0.55")), r.play()
    });
    var o = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        a = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".color-selector-container").on("mouseenter", function () {
        o = new TimelineMax({
            paused: !0,
            reversed: !0
        }), o.add(TweenMax.staggerTo($(this).find(".color-selector"), .55, {
            x: 0,
            ease: Expo.easeOut
        }, .015)), o.play()
    }).on("mouseleave", function () {
        a = new TimelineMax({
            paused: !0,
            reversed: !0
        }), o.kill(), a.add(TweenMax.to($(this).find(".color-selector.black"), .55, {
            x: -27,
            ease: Expo.easeOut
        })), a.add(TweenMax.to($(this).find(".color-selector.grey"), .55, {
            x: -55,
            ease: Expo.easeOut
        }), "=-0.55"), a.add(TweenMax.to($(this).find(".color-selector.white"), .55, {
            x: -81,
            ease: Expo.easeOut
        }), "=-0.55"), a.play()
    }), $(".color-selector.black").click(function () {
        loadColor("black"), $body.addClass(blackClass).removeClass(whiteClass)
    }), $(".color-selector.white").click(function () {
        loadColor("white"), $body.removeClass(blackClass).addClass(whiteClass)
    }), $(".color-selector.grey").click(function () {
        loadColor("gray"), $body.hasClass(whiteClass) ? $body.removeClass(whiteClass) : $body.hasClass(blackClass) && $body.removeClass(blackClass)
    })
}


function breadcrumbsFunction() {
    var t = new TimelineMax({
            paused: !0,
            reversed: !0
        }),
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        });
    $(".bread-item").on("mouseenter", function () {
        mySplitText = new SplitText(".bread-before", {
            type: "chars"
        }), BreadBefore = mySplitText.chars, mySplitText = new SplitText(".bread-after", {
            type: "chars"
        }), BreadAfter = mySplitText.chars, t = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.add(TweenMax.staggerTo($(this).find(BreadBefore), .15, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }, .015)).add(TweenMax.to($(this).find(".bread-after"), .1, {
            opacity: 1,
            zIndex: 5
        }), "=-0.12").add(TweenMax.staggerFrom($(this).find(BreadAfter), .15, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        }, .015), "=-0.10"), t.play()
    }).on("mouseleave", function () {
        e = new TimelineMax({
            paused: !0,
            reversed: !0
        }), t.kill(), e.add(TweenMax.staggerTo($(this).find(BreadAfter), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.25").add(TweenMax.to($(this).find(".bread-after"), .1, {
            opacity: 0,
            zIndex: 1
        }), "=-0.12").add(TweenMax.staggerTo($(this).find(BreadBefore), .15, {
            opacity: 1,
            y: "0%",
            ease: Expo.easeOut
        }, .015), "=-0.10"), e.play()
    })
}

function getPageType(t) {
    return void 0 === t && (t = $(".barba-container")), t.hasClass("page-intro") ? "page-intro" : t.hasClass("page-detail") ? "page-detail" : t.hasClass("page-category") ? "page-category" : t.hasClass("page-about") ? "page-about" : "static"
}

function enableSwiper() {
    var t = new MasterSlider;
    t.setup("masterslider", {
        loop: !0,
        keyboard: !0,
        preload: 3,
        layout: "autofill",
        fillMode: "fit",
        grabCursor: !0,
        speed: 50,
        view: "parallaxMask"
    }), t.control("arrows", {
        autohide: !1
    }), t.control("bullets", {
        autohide: !1,
        dir: "h",
        align: "top"
    })
}

function pageChange(t) {
    void 0 === t && (t = getPageType()), "page-intro" == t ? introItems() : "page-detail" == t ? enableSwiper() : "page-category" == t ? projectListing() : "page-about" == t && projectListing()
}

function pageLoadIn(t) {
    if ("page-intro" == t) {
        new TimelineMax({}).add(TweenMax.to(".frame-top, .credits, .color-selector-container, .hamburger-container, .frame-left, .frame-right", 1, {
            opacity: 1,
            x: "0px",
            y: "0px",
            ease: Expo.easeOut
        })).add(TweenMax.to("#welcome", .1, {
            visibility: "visible"
        }), "=-0.5").add(TweenMax.staggerTo(".welcome-hidden", .75, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, .15)).add(TweenMax.to(".image-reveal", .75, {
            visibility: "visible"
        }), "=-0.25")
    } else if ("page-category" == t) {
        var e = new TimelineMax({});
        e.add(TweenMax.to(".frame-top, .credits, .color-selector-container, .hamburger-container, .bg-fashion, .bg-architecture, .bg-personal, .frame-left, .frame-right", 1, {
            opacity: 1,
            x: "0px",
            y: "0px",
            scale: 1,
            ease: Expo.easeOut
        })).add(TweenMax.to($(".img-container-opening").find(".category-img"), 3, {
            clip: "rect(-40px 340px 750px -40px)",
            ease: Expo.easeOut
        })).add(TweenMax.to($(".img-container-opening").find(".img-center"), .55, {
            scale: 1.2,
            ease: Expo.easeOut
        }), "=-3").add(TweenMax.to($(".img-container-opening").find(".img-left"), .55, {
            x: "-150%",
            ease: Expo.easeOut
        }), "=-2.8").add(TweenMax.to($(".img-container-opening").find(".img-right"), .55, {
            x: "50%",
            ease: Expo.easeOut
        }), "=-2.6").add(TweenMax.to(".discovery, .discovery-arrow", .55, {
            display: "block",
            opacity: 1
        }), "=-2.5")
    } else if ("page-detail" == t) {
        var i = new TimelineMax({});
        i.add(TweenMax.to(".frame-top, .credits, .color-selector-container, .hamburger-container, .frame-left, .frame-right", 1, {
            opacity: 1,
            x: "0px",
            y: "0px",
            ease: Expo.easeOut
        })).add(TweenMax.to("#gallery", .1, {
            visibility: "visible"
        }), "=-1").add(TweenMax.to("#gallery", 2, {
            opacity: 1,
            ease: Expo.easeOut
        }), "=+0.25").add(TweenMax.to(".swiper-pagination, .swiper-button-prev, .swiper-button-next", 1, {
            opacity: 1
        }), "=-0.5")
    } else if ("page-about" == t) {
        $(".split-about").length && (mySplitAbout = new SplitText(".split-about", {
            type: "words"
        }), SplitAbout = mySplitAbout.words), $(".split-about-liam").length && (mySplitAboutPeter = new SplitText(".split-about-liam", {
            type: "chars"
        }), SplitAboutPeter = mySplitAboutPeter.chars);
        var s = new TimelineMax({});
        s.add(TweenMax.to(".frame-top, .credits, .color-selector-container, .hamburger-container, .bg-about, .frame-left, .frame-right", 1, {
            opacity: 1,
            x: "0px",
            y: "0px",
            scale: 1,
            ease: Expo.easeOut
        })).add(TweenMax.to(".frame-left, .frame-right", 1, {
            opacity: 1,
            x: "0px"
        }), "=-1").add(TweenMax.to(".about-image", 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
        }), "=-1").add(TweenMax.to(".about-text, .about-brands, .liam-ellis", 1, {
            opacity: 1,
            scale: 1
        }), "=-1"), "undefined" != typeof SplitAbout && s.add(TweenMax.staggerFrom(SplitAbout, .5, {
            opacity: 0,
            y: "500%",
            ease: Expo.easeOut
        }, .015), "=-0.25"), "undefined" != typeof SplitAboutPeter && s.add(TweenMax.staggerFrom(SplitAboutPeter, .5, {
            opacity: 0,
            y: "500%",
            ease: Expo.easeOut
        }, .015), "=-1")
    }
}! function (t, e, i) {
    function s(t, e) {
        return typeof t === e
    }

    function n() {
        var t, e, i, n, r, o, a;
        for (var l in y)
            if (y.hasOwnProperty(l)) {
                if (t = [], e = y[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (n = s(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) o = t[r], a = o.split("."), 1 === a.length ? x[a[0]] = n : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = n), _.push((n ? "" : "no-") + a.join("-"))
            }
    }

    function r(t) {
        var e = b.className,
            i = x._config.classPrefix || "";
        if (S && (e = e.baseVal), x._config.enableJSClass) {
            var s = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(s, "$1" + i + "js$2")
        }
        x._config.enableClasses && (e += " " + i + t.join(" " + i), S ? b.className.baseVal = e : b.className = e)
    }

    function o(t) {
        return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function a(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function l() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : S ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function h(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function c(t, e, i) {
        var n;
        for (var r in t)
            if (t[r] in e) return !1 === i ? t[r] : (n = e[t[r]], s(n, "function") ? h(n, i || e) : n);
        return !1
    }

    function d(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function u() {
        var t = e.body;
        return t || (t = l(S ? "svg" : "body"), t.fake = !0), t
    }

    function p(t, i, s, n) {
        var r, o, a, h, c = "modernizr",
            d = l("div"),
            p = u();
        if (parseInt(s, 10))
            for (; s--;) a = l("div"), a.id = n ? n[s] : c + (s + 1), d.appendChild(a);
        return r = l("style"), r.type = "text/css", r.id = "s" + c, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", h = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), o = i(d, t), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = h, b.offsetHeight) : d.parentNode.removeChild(d), !!o
    }

    function f(e, s) {
        var n = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; n--;)
                if (t.CSS.supports(d(e[n]), s)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var r = []; n--;) r.push("(" + d(e[n]) + ":" + s + ")");
            return r = r.join(" or "), p("@supports (" + r + ") { #modernizr { position: absolute; } }", function (t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function m(t, e, n, r) {
        function h() {
            d && (delete L.style, delete L.modElem)
        }
        if (r = !s(r, "undefined") && r, !s(n, "undefined")) {
            var c = f(t, n);
            if (!s(c, "undefined")) return c
        }
        for (var d, u, p, m, v, g = ["modernizr", "tspan", "samp"]; !L.style && g.length;) d = !0, L.modElem = l(g.shift()), L.style = L.modElem.style;
        for (p = t.length, u = 0; p > u; u++)
            if (m = t[u], v = L.style[m], a(m, "-") && (m = o(m)), L.style[m] !== i) {
                if (r || s(n, "undefined")) return h(), "pfx" != e || m;
                try {
                    L.style[m] = n
                } catch (t) {}
                if (L.style[m] != v) return h(), "pfx" != e || m
            }
        return h(), !1
    }

    function v(t, e, i, n, r) {
        var o = t.charAt(0).toUpperCase() + t.slice(1),
            a = (t + " " + C.join(o + " ") + o).split(" ");
        return s(e, "string") || s(e, "undefined") ? m(a, e, n, r) : (a = (t + " " + E.join(o + " ") + o).split(" "), c(a, e, i))
    }

    function g(t, e, s) {
        return v(t, i, i, e, s)
    }
    var _ = [],
        y = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (t, e) {
                var i = this;
                setTimeout(function () {
                    e(i[t])
                }, 0)
            },
            addTest: function (t, e, i) {
                y.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function (t) {
                y.push({
                    name: null,
                    fn: t
                })
            }
        },
        x = function () {};
    x.prototype = w, x = new x;
    var b = e.documentElement,
        S = "svg" === b.nodeName.toLowerCase(),
        T = "Moz O ms Webkit",
        C = w._config.usePrefixes ? T.split(" ") : [];
    w._cssomPrefixes = C;
    var M = function (e) {
        var s, n = prefixes.length,
            r = t.CSSRule;
        if (void 0 === r) return i;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), (s = e.replace(/-/g, "_").toUpperCase() + "_RULE") in r) return "@" + e;
        for (var o = 0; n > o; o++) {
            var a = prefixes[o];
            if (a.toUpperCase() + "_" + s in r) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    w.atRule = M;
    var E = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    w._domPrefixes = E;
    var k = {
        elem: l("modernizr")
    };
    x._q.push(function () {
        delete k.elem
    });
    var L = {
        style: k.elem.style
    };
    x._q.unshift(function () {
        delete L.style
    }), w.testAllProps = v, w.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@") ? M(t) : (-1 != t.indexOf("-") && (t = o(t)), e ? v(t, e, i) : v(t, "pfx"))
    }, w.testAllProps = g, x.addTest("cssanimations", g("animationName", "a", !0)), n(), r(_), delete w.addTest, delete w.addAsyncTest;
    for (var P = 0; P < x._q.length; P++) x._q[P]();
    t.Modernizr = x
}(window, document),
function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t, e) {
        e = e || et;
        var i = e.createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function s(t) {
        var e = !!t && "length" in t && t.length,
            i = ft.type(t);
        return "function" !== i && !ft.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
        return ft.isFunction(e) ? ft.grep(t, function (t, s) {
            return !!e.call(t, s, t) !== i
        }) : e.nodeType ? ft.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? ft.grep(t, function (t) {
            return ot.call(e, t) > -1 !== i
        }) : Tt.test(e) ? ft.filter(e, t, i) : (e = ft.filter(e, t), ft.grep(t, function (t) {
            return ot.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ft.each(t.match(Lt) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function h(t, e, i) {
        var s;
        try {
            t && ft.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && ft.isFunction(s = t.then) ? s.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    function c() {
        et.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready()
    }

    function d() {
        this.expando = ft.expando + d.uid++
    }

    function u(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Nt.test(t) ? JSON.parse(t) : t)
    }

    function $(t, e, i) {
        var s;
        if (void 0 === i && 1 === t.nodeType)
            if (s = "data-" + e.replace(zt, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(s))) {
                try {
                    i = u(i)
                } catch (t) {}
                Rt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function p(t, e, i, s) {
        var n, r = 1,
            o = 20,
            a = s ? function () {
                return s.cur()
            } : function () {
                return ft.css(t, e, "")
            },
            l = a(),
            h = i && i[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== h && +l) && jt.exec(ft.css(t, e));
        if (c && c[3] !== h) {
            h = h || c[3], i = i || [], c = +l || 1;
            do {
                r = r || ".5", c /= r, ft.style(t, e, c + h)
            } while (r !== (r = a() / l) && 1 !== r && --o)
        }
        return i && (c = +c || +l || 0, n = i[1] ? c + (i[1] + 1) * i[2] : +i[2], s && (s.unit = h, s.start = c, s.end = n)), n
    }

    function f(t) {
        var e, i = t.ownerDocument,
            s = t.nodeName,
            n = Bt[s];
        return n || (e = i.body.appendChild(i.createElement(s)), n = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), Bt[s] = n, n)
    }

    function m(t, e) {
        for (var i, s, n = [], r = 0, o = t.length; r < o; r++) s = t[r], s.style && (i = s.style.display, e ? ("none" === i && (n[r] = Dt.get(s, "display") || null, n[r] || (s.style.display = "")), "" === s.style.display && Vt(s) && (n[r] = f(s))) : "none" !== i && (n[r] = "none", Dt.set(s, "display", i)));
        for (r = 0; r < o; r++) null != n[r] && (t[r].style.display = n[r]);
        return t
    }

    function v(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], i) : i
    }

    function g(t, e) {
        for (var i = 0, s = t.length; i < s; i++) Dt.set(t[i], "globalEval", !e || Dt.get(e[i], "globalEval"))
    }

    function _(t, e, i, s, n) {
        for (var r, o, a, l, h, c, d = e.createDocumentFragment(), u = [], p = 0, f = t.length; p < f; p++)
            if ((r = t[p]) || 0 === r)
                if ("object" === ft.type(r)) ft.merge(u, r.nodeType ? [r] : r);
                else if (Ut.test(r)) {
            for (o = o || d.appendChild(e.createElement("div")), a = (qt.exec(r) || ["", ""])[1].toLowerCase(), l = Yt[a] || Yt._default, o.innerHTML = l[1] + ft.htmlPrefilter(r) + l[2], c = l[0]; c--;) o = o.lastChild;
            ft.merge(u, o.childNodes), o = d.firstChild, o.textContent = ""
        } else u.push(e.createTextNode(r));
        for (d.textContent = "", p = 0; r = u[p++];)
            if (s && ft.inArray(r, s) > -1) n && n.push(r);
            else if (h = ft.contains(r.ownerDocument, r), o = v(d.appendChild(r), "script"), h && g(o), i)
            for (c = 0; r = o[c++];) Xt.test(r.type || "") && i.push(r);
        return d
    }

    function y() {
        return !0
    }

    function w() {
        return !1
    }

    function x() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function b(t, e, i, s, n, r) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof i && (s = s || i, i = void 0);
            for (a in e) b(t, a, i, s, e[a], r);
            return t
        }
        if (null == s && null == n ? (n = i, s = i = void 0) : null == n && ("string" == typeof i ? (n = s, s = void 0) : (n = s, s = i, i = void 0)), !1 === n) n = w;
        else if (!n) return t;
        return 1 === r && (o = n, n = function (t) {
            return ft().off(t), o.apply(this, arguments)
        }, n.guid = o.guid || (o.guid = ft.guid++)), t.each(function () {
            ft.event.add(this, e, n, s, i)
        })
    }

    function S(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function T(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function C(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function M(t, e) {
        var i, s, n, r, o, a, l, h;
        if (1 === e.nodeType) {
            if (Dt.hasData(t) && (r = Dt.access(t), o = Dt.set(e, r), h = r.events)) {
                delete o.handle, o.events = {};
                for (n in h)
                    for (i = 0, s = h[n].length; i < s; i++) ft.event.add(e, n, h[n][i])
            }
            Rt.hasData(t) && (a = Rt.access(t), l = ft.extend({}, a), Rt.set(e, l))
        }
    }

    function E(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Wt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function k(t, e, s, n) {
        e = nt.apply([], e);
        var r, o, a, l, h, c, d = 0,
            u = t.length,
            p = u - 1,
            f = e[0],
            m = ft.isFunction(f);
        if (m || u > 1 && "string" == typeof f && !ut.checkClone && ee.test(f)) return t.each(function (i) {
            var r = t.eq(i);
            m && (e[0] = f.call(this, i, r.html())), k(r, e, s, n)
        });
        if (u && (r = _(e, t[0].ownerDocument, !1, t, n), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
            for (a = ft.map(v(r, "script"), T), l = a.length; d < u; d++) h = r, d !== p && (h = ft.clone(h, !0, !0), l && ft.merge(a, v(h, "script"))), s.call(t[d], h, d);
            if (l)
                for (c = a[a.length - 1].ownerDocument, ft.map(a, C), d = 0; d < l; d++) h = a[d], Xt.test(h.type || "") && !Dt.access(h, "globalEval") && ft.contains(c, h) && (h.src ? ft._evalUrl && ft._evalUrl(h.src) : i(h.textContent.replace(se, ""), c))
        }
        return t
    }

    function L(t, e, i) {
        for (var s, n = e ? ft.filter(e, t) : t, r = 0; null != (s = n[r]); r++) i || 1 !== s.nodeType || ft.cleanData(v(s)), s.parentNode && (i && ft.contains(s.ownerDocument, s) && g(v(s, "script")), s.parentNode.removeChild(s));
        return t
    }

    function P(t, e, i) {
        var s, n, r, o, a = t.style;
        return i = i || oe(t), i && (o = i.getPropertyValue(e) || i[e], "" !== o || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), !ut.pixelMarginRight() && re.test(o) && ne.test(e) && (s = a.width, n = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = s, a.minWidth = n, a.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function A(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function O(t) {
        if (t in de) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ce.length; i--;)
            if ((t = ce[i] + e) in de) return t
    }

    function D(t, e, i) {
        var s = jt.exec(e);
        return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
    }

    function R(t, e, i, s, n) {
        var r, o = 0;
        for (r = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === i && (o += ft.css(t, i + Ft[r], !0, n)), s ? ("content" === i && (o -= ft.css(t, "padding" + Ft[r], !0, n)), "margin" !== i && (o -= ft.css(t, "border" + Ft[r] + "Width", !0, n))) : (o += ft.css(t, "padding" + Ft[r], !0, n), "padding" !== i && (o += ft.css(t, "border" + Ft[r] + "Width", !0, n)));
        return o
    }

    function N(t, e, i) {
        var s, n = !0,
            r = oe(t),
            o = "border-box" === ft.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (s = t.getBoundingClientRect()[e]), s <= 0 || null == s) {
            if (s = P(t, e, r), (s < 0 || null == s) && (s = t.style[e]), re.test(s)) return s;
            n = o && (ut.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + R(t, e, i || (o ? "border" : "content"), n, r) + "px"
    }

    function z(t, e, i, s, n) {
        return new z.prototype.init(t, e, i, s, n)
    }

    function I() {
        pe && (t.requestAnimationFrame(I), ft.fx.tick())
    }

    function j() {
        return t.setTimeout(function () {
            ue = void 0
        }), ue = ft.now()
    }

    function F(t, e) {
        var i, s = 0,
            n = {
                height: t
            };
        for (e = e ? 1 : 0; s < 4; s += 2 - e) i = Ft[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function V(t, e, i) {
        for (var s, n = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, o = n.length; r < o; r++)
            if (s = n[r].call(i, e, t)) return s
    }

    function H(t, e, i) {
        var s, n, r, o, a, l, h, c, d = "width" in e || "height" in e,
            u = this,
            p = {},
            f = t.style,
            v = t.nodeType && Vt(t),
            g = Dt.get(t, "fxshow");
        i.queue || (o = ft._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
            o.unqueued || a()
        }), o.unqueued++, u.always(function () {
            u.always(function () {
                o.unqueued--, ft.queue(t, "fx").length || o.empty.fire()
            })
        }));
        for (s in e)
            if (n = e[s], fe.test(n)) {
                if (delete e[s], r = r || "toggle" === n, n === (v ? "hide" : "show")) {
                    if ("show" !== n || !g || void 0 === g[s]) continue;
                    v = !0
                }
                p[s] = g && g[s] || ft.style(t, s)
            }
        if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) {
            d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], h = g && g.display, null == h && (h = Dt.get(t, "display")), c = ft.css(t, "display"), "none" === c && (h ? c = h : (m([t], !0), h = t.style.display || h, c = ft.css(t, "display"), m([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === ft.css(t, "float") && (l || (u.done(function () {
                f.display = h
            }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (s in p) l || (g ? "hidden" in g && (v = g.hidden) : g = Dt.access(t, "fxshow", {
                display: h
            }), r && (g.hidden = !v), v && m([t], !0), u.done(function () {
                v || m([t]), Dt.remove(t, "fxshow");
                for (s in p) ft.style(t, s, p[s])
            })), l = V(v ? g[s] : 0, s, u), s in g || (g[s] = l.start, v && (l.end = l.start, l.start = 0))
        }
    }

    function B(t, e) {
        var i, s, n, r, o;
        for (i in t)
            if (s = ft.camelCase(i), n = e[s], r = t[i], ft.isArray(r) && (n = r[1], r = t[i] = r[0]), i !== s && (t[s] = r, delete t[i]), (o = ft.cssHooks[s]) && "expand" in o) {
                r = o.expand(r), delete t[s];
                for (i in r) i in t || (t[i] = r[i], e[i] = n)
            } else e[s] = n
    }

    function W(t, e, i) {
        var s, n, r = 0,
            o = W.prefilters.length,
            a = ft.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (n) return !1;
                for (var e = ue || j(), i = Math.max(0, h.startTime + h.duration - e), s = i / h.duration || 0, r = 1 - s, o = 0, l = h.tweens.length; o < l; o++) h.tweens[o].run(r);
                return a.notifyWith(t, [h, r, i]), r < 1 && l ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ue || j(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var s = ft.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(s), s
                },
                stop: function (e) {
                    var i = 0,
                        s = e ? h.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; i < s; i++) h.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (B(c, h.opts.specialEasing); r < o; r++)
            if (s = W.prefilters[r].call(h, t, c, h.opts)) return ft.isFunction(s.stop) && (ft._queueHooks(h.elem, h.opts.queue).stop = ft.proxy(s.stop, s)), s;
        return ft.map(c, V, h), ft.isFunction(h.opts.start) && h.opts.start.call(t, h), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function q(t) {
        return (t.match(Lt) || []).join(" ")
    }

    function X(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Y(t, e, i, s) {
        var n;
        if (ft.isArray(e)) ft.each(e, function (e, n) {
            i || Ce.test(t) ? s(t, n) : Y(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s)
        });
        else if (i || "object" !== ft.type(e)) s(t, e);
        else
            for (n in e) Y(t + "[" + n + "]", e[n], i, s)
    }

    function U(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n = 0,
                r = e.toLowerCase().match(Lt) || [];
            if (ft.isFunction(i))
                for (; s = r[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
    }

    function G(t, e, i, s) {
        function n(a) {
            var l;
            return r[a] = !0, ft.each(t[a] || [], function (t, a) {
                var h = a(e, i, s);
                return "string" != typeof h || o || r[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), n(h), !1)
            }), l
        }
        var r = {},
            o = t === ze;
        return n(e.dataTypes[0]) || !r["*"] && n("*")
    }

    function Q(t, e) {
        var i, s, n = ft.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
        return s && ft.extend(!0, t, s), t
    }

    function Z(t, e, i) {
        for (var s, n, r, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (n in a)
                if (a[n] && a[n].test(s)) {
                    l.unshift(n);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (n in i) {
                if (!l[0] || t.converters[n + " " + l[0]]) {
                    r = n;
                    break
                }
                o || (o = n)
            }
            r = r || o
        }
        if (r) return r !== l[0] && l.unshift(r), i[r]
    }

    function K(t, e, i, s) {
        var n, r, o, a, l, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(o = h[l + " " + r] || h["* " + r]))
                for (n in h)
                    if (a = n.split(" "), a[1] === r && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                        !0 === o ? o = h[n] : !0 !== h[n] && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== o)
                if (o && t.throws) e = o(e);
                else try {
                    e = o(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: o ? t : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function J(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var tt = [],
        et = t.document,
        it = Object.getPrototypeOf,
        st = tt.slice,
        nt = tt.concat,
        rt = tt.push,
        ot = tt.indexOf,
        at = {},
        lt = at.toString,
        ht = at.hasOwnProperty,
        ct = ht.toString,
        dt = ct.call(Object),
        ut = {},
        pt = "3.1.1",
        ft = function (t, e) {
            return new ft.fn.init(t, e)
        },
        mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        vt = /^-ms-/,
        gt = /-([a-z])/g,
        _t = function (t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        length: 0,
        toArray: function () {
            return st.call(this)
        },
        get: function (t) {
            return null == t ? st.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return ft.each(this, t)
        },
        map: function (t) {
            return this.pushStack(ft.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: rt,
        sort: tt.sort,
        splice: tt.splice
    }, ft.extend = ft.fn.extend = function () {
        var t, e, i, s, n, r, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || ft.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], s = t[e], o !== s && (h && s && (ft.isPlainObject(s) || (n = ft.isArray(s))) ? (n ? (n = !1, r = i && ft.isArray(i) ? i : []) : r = i && ft.isPlainObject(i) ? i : {}, o[e] = ft.extend(h, r, s)) : void 0 !== s && (o[e] = s));
        return o
    }, ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== lt.call(t) || (e = it(t)) && ("function" != typeof (i = ht.call(e, "constructor") && e.constructor) || ct.call(i) !== dt))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            i(t)
        },
        camelCase: function (t) {
            return t.replace(vt, "ms-").replace(gt, _t)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var i, n = 0;
            if (s(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(mt, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (s(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)), i
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : ot.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, s = 0, n = t.length; s < i; s++) t[n++] = e[s];
            return t.length = n, t
        },
        grep: function (t, e, i) {
            for (var s, n = [], r = 0, o = t.length, a = !i; r < o; r++)(s = !e(t[r], r)) !== a && n.push(t[r]);
            return n
        },
        map: function (t, e, i) {
            var n, r, o = 0,
                a = [];
            if (s(t))
                for (n = t.length; o < n; o++) null != (r = e(t[o], o, i)) && a.push(r);
            else
                for (o in t) null != (r = e(t[o], o, i)) && a.push(r);
            return nt.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, s, n;
            if ("string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t)) return s = st.call(arguments, 2), n = function () {
                return t.apply(e || this, s.concat(st.call(arguments)))
            }, n.guid = t.guid = t.guid || ft.guid++, n
        },
        now: Date.now,
        support: ut
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function (t) {
        function e(t, e, i, s) {
            var n, r, o, a, l, h, c, u = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!s && ((e ? e.ownerDocument || e : H) !== D && O(e), e = e || D, N)) {
                if (11 !== f && (l = _t.exec(t)))
                    if (n = l[1]) {
                        if (9 === f) {
                            if (!(o = e.getElementById(n))) return i;
                            if (o.id === n) return i.push(o), i
                        } else if (u && (o = u.getElementById(n)) && F(e, o) && o.id === n) return i.push(o), i
                    } else {
                        if (l[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((n = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(n)), i
                    }
                if (b.qsa && !Y[t + " "] && (!z || !z.test(t))) {
                    if (1 !== f) u = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, bt) : e.setAttribute("id", a = V), h = M(t), r = h.length; r--;) h[r] = "#" + a + " " + p(h[r]);
                        c = h.join(","), u = $.test(t) && d(e.parentNode) || e
                    }
                    if (c) try {
                        return J.apply(i, u.querySelectorAll(c)), i
                    } catch (t) {} finally {
                        a === V && e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(lt, "$1"), e, i, s)
        }

        function i() {
            function t(i, s) {
                return e.push(i + " ") > S.cacheLength && delete t[e.shift()], t[i + " "] = s
            }
            var e = [];
            return t
        }

        function s(t) {
            return t[V] = !0, t
        }

        function n(t) {
            var e = D.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), s = i.length; s--;) S.attrHandle[i[s]] = e
        }

        function o(t, e) {
            var i = e && t,
                s = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (s) return s;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function h(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function c(t) {
            return s(function (e) {
                return e = +e, s(function (i, s) {
                    for (var n, r = t([], i.length, e), o = r.length; o--;) i[n = r[o]] && (i[n] = !(s[n] = i[n]))
                })
            })
        }

        function d(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function u() {}

        function p(t) {
            for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e].value;
            return s
        }

        function f(t, e, i) {
            var s = e.dir,
                n = e.next,
                r = n || s,
                o = i && "parentNode" === r,
                a = W++;
            return e.first ? function (e, i, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || o) return t(e, i, n);
                return !1
            } : function (e, i, l) {
                var h, c, d, u = [B, a];
                if (l) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || o)
                            if (d = e[V] || (e[V] = {}), c = d[e.uniqueID] || (d[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[s] || e;
                            else {
                                if ((h = c[r]) && h[0] === B && h[1] === a) return u[2] = h[2];
                                if (c[r] = u, u[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, i, s) {
                for (var n = t.length; n--;)
                    if (!t[n](e, i, s)) return !1;
                return !0
            } : t[0]
        }

        function v(t, i, s) {
            for (var n = 0, r = i.length; n < r; n++) e(t, i[n], s);
            return s
        }

        function g(t, e, i, s, n) {
            for (var r, o = [], a = 0, l = t.length, h = null != e; a < l; a++)(r = t[a]) && (i && !i(r, s, n) || (o.push(r), h && e.push(a)));
            return o
        }

        function _(t, e, i, n, r, o) {
            return n && !n[V] && (n = _(n)), r && !r[V] && (r = _(r, o)), s(function (s, o, a, l) {
                var h, c, d, u = [],
                    p = [],
                    f = o.length,
                    m = s || v(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || !s && e ? m : g(m, u, t, a, l),
                    y = i ? r || (s ? t : f || n) ? [] : o : _;
                if (i && i(_, y, a, l), n)
                    for (h = g(y, p), n(h, [], a, l), c = h.length; c--;)(d = h[c]) && (y[p[c]] = !(_[p[c]] = d));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (h = [], c = y.length; c--;)(d = y[c]) && h.push(_[c] = d);
                            r(null, y = [], h, l)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (h = r ? et(s, d) : u[c]) > -1 && (s[h] = !(o[h] = d))
                    }
                } else y = g(y === o ? y.splice(f, y.length) : y), r ? r(null, o, y, l) : J.apply(o, y)
            })
        }

        function y(t) {
            for (var e, i, s, n = t.length, r = S.relative[t[0].type], o = r || S.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                    return t === e
                }, o, !0), h = f(function (t) {
                    return et(e, t) > -1
                }, o, !0), c = [function (t, i, s) {
                    var n = !r && (s || i !== L) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s));
                    return e = null, n
                }]; a < n; a++)
                if (i = S.relative[t[a].type]) c = [f(m(c), i)];
                else {
                    if (i = S.filter[t[a].type].apply(null, t[a].matches), i[V]) {
                        for (s = ++a; s < n && !S.relative[t[s].type]; s++);
                        return _(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, a < s && y(t.slice(a, s)), s < n && y(t = t.slice(s)), s < n && p(t))
                    }
                    c.push(i)
                }
            return m(c)
        }

        function w(t, i) {
            var n = i.length > 0,
                r = t.length > 0,
                o = function (s, o, a, l, h) {
                    var c, d, u, p = 0,
                        f = "0",
                        m = s && [],
                        v = [],
                        _ = L,
                        y = s || r && S.find.TAG("*", h),
                        w = B += null == _ ? 1 : Math.random() || .1,
                        x = y.length;
                    for (h && (L = o === D || o || h); f !== x && null != (c = y[f]); f++) {
                        if (r && c) {
                            for (d = 0, o || c.ownerDocument === D || (O(c), a = !N); u = t[d++];)
                                if (u(c, o || D, a)) {
                                    l.push(c);
                                    break
                                }
                            h && (B = w)
                        }
                        n && ((c = !u && c) && p--, s && m.push(c))
                    }
                    if (p += f, n && f !== p) {
                        for (d = 0; u = i[d++];) u(m, v, o, a);
                        if (s) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = Z.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), h && !s && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (B = w, L = _), m
                };
            return n ? s(o) : o
        }
        var x, b, S, T, C, M, E, k, L, P, A, O, D, R, N, z, I, j, F, V = "sizzle" + 1 * new Date,
            H = t.document,
            B = 0,
            W = 0,
            q = i(),
            X = i(),
            Y = i(),
            U = function (t, e) {
                return t === e && (A = !0), 0
            },
            G = {}.hasOwnProperty,
            Q = [],
            Z = Q.pop,
            K = Q.push,
            J = Q.push,
            tt = Q.slice,
            et = function (t, e) {
                for (var i = 0, s = t.length; i < s; i++)
                    if (t[i] === e) return i;
                return -1
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            st = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            rt = "\\[" + st + "*(" + nt + ")(?:" + st + "*([*^$|!~]?=)" + st + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + st + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(st + "+", "g"),
            lt = new RegExp("^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$", "g"),
            ht = new RegExp("^" + st + "*," + st + "*"),
            ct = new RegExp("^" + st + "*([>+~]|" + st + ")" + st + "*"),
            dt = new RegExp("=" + st + "*([^\\]'\"]*?)" + st + "*\\]", "g"),
            ut = new RegExp(ot),
            pt = new RegExp("^" + nt + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + st + "*(even|odd|(([+-]|)(\\d*)n|)" + st + "*(?:([+-]|)" + st + "*(\\d+)|))" + st + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + st + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + st + "*((?:-\\d)?\\d*)" + st + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + st + "?|(" + st + ")|.)", "ig"),
            wt = function (t, e, i) {
                var s = "0x" + e - 65536;
                return s !== s || i ? e : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
            },
            xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            bt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            St = function () {
                O()
            },
            Tt = f(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(Q = tt.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (t) {
            J = {
                apply: Q.length ? function (t, e) {
                    K.apply(t, tt.call(e))
                } : function (t, e) {
                    for (var i = t.length, s = 0; t[i++] = e[s++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, C = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, O = e.setDocument = function (t) {
            var e, i, s = t ? t.ownerDocument || t : H;
            return s !== D && 9 === s.nodeType && s.documentElement ? (D = s, R = D.documentElement, N = !C(D), H !== D && (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", St, !1) : i.attachEvent && i.attachEvent("onunload", St)), b.attributes = n(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = n(function (t) {
                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = gt.test(D.getElementsByClassName), b.getById = n(function (t) {
                return R.appendChild(t).id = V, !D.getElementsByName || !D.getElementsByName(V).length
            }), b.getById ? (S.filter.ID = function (t) {
                var e = t.replace(yt, wt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, S.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && N) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (S.filter.ID = function (t) {
                var e = t.replace(yt, wt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, S.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && N) {
                    var i, s, n, r = e.getElementById(t);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                        for (n = e.getElementsByName(t), s = 0; r = n[s++];)
                            if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                    }
                    return []
                }
            }), S.find.TAG = b.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, s = [],
                    n = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[n++];) 1 === i.nodeType && s.push(i);
                    return s
                }
                return r
            }, S.find.CLASS = b.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && N) return e.getElementsByClassName(t)
            }, I = [], z = [], (b.qsa = gt.test(D.querySelectorAll)) && (n(function (t) {
                R.appendChild(t).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + st + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + st + "*(?:value|" + it + ")"), t.querySelectorAll("[id~=" + V + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + V + "+*").length || z.push(".#.+[+~]")
            }), n(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + st + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && z.push(":enabled", ":disabled"), R.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
            })), (b.matchesSelector = gt.test(j = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && n(function (t) {
                b.disconnectedMatch = j.call(t, "*"), j.call(t, "[s!='']:x"), I.push("!=", ot)
            }), z = z.length && new RegExp(z.join("|")), I = I.length && new RegExp(I.join("|")), e = gt.test(R.compareDocumentPosition), F = e || gt.test(R.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    s = e && e.parentNode;
                return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === D || t.ownerDocument === H && F(H, t) ? -1 : e === D || e.ownerDocument === H && F(H, e) ? 1 : P ? et(P, t) - et(P, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return A = !0, 0;
                var i, s = 0,
                    n = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e];
                if (!n || !r) return t === D ? -1 : e === D ? 1 : n ? -1 : r ? 1 : P ? et(P, t) - et(P, e) : 0;
                if (n === r) return o(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[s] === l[s];) s++;
                return s ? o(a[s], l[s]) : a[s] === H ? -1 : l[s] === H ? 1 : 0
            }, D) : D
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== D && O(t), i = i.replace(dt, "='$1']"), b.matchesSelector && N && !Y[i + " "] && (!I || !I.test(i)) && (!z || !z.test(i))) try {
                var s = j.call(t, i);
                if (s || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s
            } catch (t) {}
            return e(i, D, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== D && O(t), F(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== D && O(t);
            var i = S.attrHandle[e.toLowerCase()],
                s = i && G.call(S.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
            return void 0 !== s ? s : b.attributes || !N ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }, e.escape = function (t) {
            return (t + "").replace(xt, bt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [],
                s = 0,
                n = 0;
            if (A = !b.detectDuplicates, P = !b.sortStable && t.slice(0), t.sort(U), A) {
                for (; e = t[n++];) e === t[n] && (s = i.push(n));
                for (; s--;) t.splice(i[s], 1)
            }
            return P = null, t
        }, T = e.getText = function (t) {
            var e, i = "",
                s = 0,
                n = t.nodeType;
            if (n) {
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === n || 4 === n) return t.nodeValue
            } else
                for (; e = t[s++];) i += T(e);
            return i
        }, S = e.selectors = {
            cacheLength: 50,
            createPseudo: s,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(yt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = M(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(yt, wt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + st + ")" + t + "(" + st + "|$)")) && q(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, i, s) {
                    return function (n) {
                        var r = e.attr(n, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === s : "!=" === i ? r !== s : "^=" === i ? s && 0 === r.indexOf(s) : "*=" === i ? s && r.indexOf(s) > -1 : "$=" === i ? s && r.slice(-s.length) === s : "~=" === i ? (" " + r.replace(at, " ") + " ").indexOf(s) > -1 : "|=" === i && (r === s || r.slice(0, s.length + 1) === s + "-"))
                    }
                },
                CHILD: function (t, e, i, s, n) {
                    var r = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === s && 0 === n ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var h, c, d, u, p, f, m = r !== o ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            g = a && e.nodeName.toLowerCase(),
                            _ = !l && !a,
                            y = !1;
                        if (v) {
                            if (r) {
                                for (; m;) {
                                    for (u = e; u = u[m];)
                                        if (a ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? v.firstChild : v.lastChild], o && _) {
                                for (u = v, d = u[V] || (u[V] = {}), c = d[u.uniqueID] || (d[u.uniqueID] = {}), h = c[t] || [], p = h[0] === B && h[1], y = p && h[2], u = p && v.childNodes[p]; u = ++p && u && u[m] || (y = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++y && u === e) {
                                        c[t] = [B, p, y];
                                        break
                                    }
                            } else if (_ && (u = e, d = u[V] || (u[V] = {}), c = d[u.uniqueID] || (d[u.uniqueID] = {}), h = c[t] || [], p = h[0] === B && h[1], y = p), !1 === y)
                                for (;
                                    (u = ++p && u && u[m] || (y = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++y || (_ && (d = u[V] || (u[V] = {}), c = d[u.uniqueID] || (d[u.uniqueID] = {}), c[t] = [B, y]), u !== e)););
                            return (y -= n) === s || y % s == 0 && y / s >= 0
                        }
                    }
                },
                PSEUDO: function (t, i) {
                    var n, r = S.pseudos[t] || S.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[V] ? r(i) : r.length > 1 ? (n = [t, t, "", i], S.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function (t, e) {
                        for (var s, n = r(t, i), o = n.length; o--;) s = et(t, n[o]), t[s] = !(e[s] = n[o])
                    }) : function (t) {
                        return r(t, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: s(function (t) {
                    var e = [],
                        i = [],
                        n = E(t.replace(lt, "$1"));
                    return n[V] ? s(function (t, e, i, s) {
                        for (var r, o = n(t, null, s, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, s, r) {
                        return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: s(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: s(function (t) {
                    return t = t.replace(yt, wt),
                        function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: s(function (t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, wt).toLowerCase(),
                        function (e) {
                            var i;
                            do {
                                if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function (t) {
                    return t === R
                },
                focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: h(!1),
                disabled: h(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !S.pseudos.empty(t)
                },
                header: function (t) {
                    return vt.test(t.nodeName)
                },
                input: function (t) {
                    return mt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: c(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: c(function (t, e, i) {
                    for (var s = i < 0 ? i + e : i; --s >= 0;) t.push(s);
                    return t
                }),
                gt: c(function (t, e, i) {
                    for (var s = i < 0 ? i + e : i; ++s < e;) t.push(s);
                    return t
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) S.pseudos[x] = l(x);
        return u.prototype = S.filters = S.pseudos, S.setFilters = new u, M = e.tokenize = function (t, i) {
            var s, n, r, o, a, l, h, c = X[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = S.preFilter; a;) {
                s && !(n = ht.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(r = [])), s = !1, (n = ct.exec(a)) && (s = n.shift(), r.push({
                    value: s,
                    type: n[0].replace(lt, " ")
                }), a = a.slice(s.length));
                for (o in S.filter) !(n = ft[o].exec(a)) || h[o] && !(n = h[o](n)) || (s = n.shift(), r.push({
                    value: s,
                    type: o,
                    matches: n
                }), a = a.slice(s.length));
                if (!s) break
            }
            return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, E = e.compile = function (t, e) {
            var i, s = [],
                n = [],
                r = Y[t + " "];
            if (!r) {
                for (e || (e = M(t)), i = e.length; i--;) r = y(e[i]), r[V] ? s.push(r) : n.push(r);
                r = Y(t, w(n, s)), r.selector = t
            }
            return r
        }, k = e.select = function (t, e, i, s) {
            var n, r, o, a, l, h = "function" == typeof t && t,
                c = !s && M(t = h.selector || t);
            if (i = i || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === e.nodeType && N && S.relative[r[1].type]) {
                    if (!(e = (S.find.ID(o.matches[0].replace(yt, wt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (n = ft.needsContext.test(t) ? 0 : r.length; n-- && (o = r[n], !S.relative[a = o.type]);)
                    if ((l = S.find[a]) && (s = l(o.matches[0].replace(yt, wt), $.test(r[0].type) && d(e.parentNode) || e))) {
                        if (r.splice(n, 1), !(t = s.length && p(r))) return J.apply(i, s), i;
                        break
                    }
            }
            return (h || E(t, c))(s, e, !N, i, !e || $.test(t) && d(e.parentNode) || e), i
        }, b.sortStable = V.split("").sort(U).join("") === V, b.detectDuplicates = !!A, O(), b.sortDetached = n(function (t) {
            return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
        }), n(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && n(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), n(function (t) {
            return null == t.getAttribute("disabled")
        }) || r(it, function (t, e, i) {
            var s;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }), e
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains, ft.escapeSelector = yt.escape;
    var wt = function (t, e, i) {
            for (var s = [], n = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (n && ft(t).is(i)) break;
                    s.push(t)
                }
            return s
        },
        xt = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        bt = ft.expr.match.needsContext,
        St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Tt = /^.[^:#\[\.,]*$/;
    ft.filter = function (t, e, i) {
        var s = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? ft.find.matchesSelector(s, t) ? [s] : [] : ft.find.matches(t, ft.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function (t) {
            var e, i, s = this.length,
                n = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
                for (e = 0; e < s; e++)
                    if (ft.contains(n[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < s; e++) ft.find(t, n[e], i);
            return s > 1 ? ft.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function (t) {
            return !!n(this, "string" == typeof t && bt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var Ct, Mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function (t, e, i) {
        var s, n;
        if (!t) return this;
        if (i = i || Ct, "string" == typeof t) {
            if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Mt.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (s[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), St.test(s[1]) && ft.isPlainObject(e))
                    for (s in e) ft.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                return this
            }
            return n = et.getElementById(s[2]), n && (this[0] = n, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this)
    }).prototype = ft.fn, Ct = ft(et);
    var Et = /^(?:parents|prev(?:Until|All))/,
        kt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function (t) {
            var e = ft(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (ft.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, s = 0,
                n = this.length,
                r = [],
                o = "string" != typeof t && ft(t);
            if (!bt.test(t))
                for (; s < n; s++)
                    for (i = this[s]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ot.call(ft(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return wt(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return wt(t, "parentNode", i)
        },
        next: function (t) {
            return r(t, "nextSibling")
        },
        prev: function (t) {
            return r(t, "previousSibling")
        },
        nextAll: function (t) {
            return wt(t, "nextSibling")
        },
        prevAll: function (t) {
            return wt(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return wt(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return wt(t, "previousSibling", i)
        },
        siblings: function (t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return xt(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || ft.merge([], t.childNodes)
        }
    }, function (t, e) {
        ft.fn[t] = function (i, s) {
            var n = ft.map(this, e, i);
            return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = ft.filter(s, n)), this.length > 1 && (kt[t] || ft.uniqueSort(n), Et.test(t) && n.reverse()), this.pushStack(n)
        }
    });
    var Lt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, i, s, n, r = [],
            a = [],
            l = -1,
            h = function () {
                for (n = t.once, s = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < r.length;) !1 === r[l].apply(i[0], i[1]) && t.stopOnFalse && (l = r.length, i = !1);
                t.memory || (i = !1), e = !1, n && (r = i ? [] : "")
            },
            c = {
                add: function () {
                    return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                        ft.each(i, function (i, s) {
                            ft.isFunction(s) ? t.unique && c.has(s) || r.push(s) : s && s.length && "string" !== ft.type(s) && e(s)
                        })
                    }(arguments), i && !e && h()), this
                },
                remove: function () {
                    return ft.each(arguments, function (t, e) {
                        for (var i;
                            (i = ft.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= l && l--
                    }), this
                },
                has: function (t) {
                    return t ? ft.inArray(t, r) > -1 : r.length > 0
                },
                empty: function () {
                    return r && (r = []), this
                },
                disable: function () {
                    return n = a = [], r = i = "", this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return n = a = [], i || e || (r = i = ""), this
                },
                locked: function () {
                    return !!n
                },
                fireWith: function (t, i) {
                    return n || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || h()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return c
    }, ft.extend({
        Deferred: function (e) {
            var i = [
                    ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                    ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                n = {
                    state: function () {
                        return s
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return n.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return ft.Deferred(function (e) {
                            ft.each(i, function (i, s) {
                                var n = ft.isFunction(t[s[4]]) && t[s[4]];
                                r[s[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[s[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, s, n) {
                        function r(e, i, s, n) {
                            return function () {
                                var h = this,
                                    c = arguments,
                                    d = function () {
                                        var t, d;
                                        if (!(e < o)) {
                                            if ((t = s.apply(h, c)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            d = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(d) ? n ? d.call(t, r(o, i, a, n), r(o, i, l, n)) : (o++, d.call(t, r(o, i, a, n), r(o, i, l, n), r(o, i, a, i.notifyWith))) : (s !== a && (h = void 0, c = [t]), (n || i.resolveWith)(h, c))
                                        }
                                    },
                                    u = n ? d : function () {
                                        try {
                                            d()
                                        } catch (t) {
                                            ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= o && (s !== l && (h = void 0, c = [t]), i.rejectWith(h, c))
                                        }
                                    };
                                e ? u() : (ft.Deferred.getStackHook && (u.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }
                        var o = 0;
                        return ft.Deferred(function (t) {
                            i[0][3].add(r(0, t, ft.isFunction(n) ? n : a, t.notifyWith)), i[1][3].add(r(0, t, ft.isFunction(e) ? e : a)), i[2][3].add(r(0, t, ft.isFunction(s) ? s : l))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ft.extend(t, n) : n
                    }
                },
                r = {};
            return ft.each(i, function (t, e) {
                var o = e[2],
                    a = e[5];
                n[e[1]] = o.add, a && o.add(function () {
                    s = a
                }, i[3 - t][2].disable, i[0][2].lock), o.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = o.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function (t) {
            var e = arguments.length,
                i = e,
                s = Array(i),
                n = st.call(arguments),
                r = ft.Deferred(),
                o = function (t) {
                    return function (i) {
                        s[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : i, --e || r.resolveWith(s, n)
                    }
                };
            if (e <= 1 && (h(t, r.done(o(i)).resolve, r.reject), "pending" === r.state() || ft.isFunction(n[i] && n[i].then))) return r.then();
            for (; i--;) h(n[i], o(i), r.reject);
            return r.promise()
        }
    });
    var $t = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && $t.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, ft.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Pt = ft.Deferred();
    ft.fn.ready = function (t) {
        return Pt.then(t).catch(function (t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function (t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || Pt.resolveWith(et, [ft]))
        }
    }), ft.ready.then = Pt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var At = function (t, e, i, s, n, r, o) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === ft.type(i)) {
                n = !0;
                for (a in i) At(t, e, a, i[a], !0, r, o)
            } else if (void 0 !== s && (n = !0, ft.isFunction(s) || (o = !0), h && (o ? (e.call(t, s), e = null) : (h = e, e = function (t, e, i) {
                    return h.call(ft(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? s : s.call(t[a], a, e(t[a], i)));
            return n ? t : h ? e.call(t) : l ? e(t[0], i) : r
        },
        Ot = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var s, n = this.cache(t);
            if ("string" == typeof e) n[ft.camelCase(e)] = i;
            else
                for (s in e) n[ft.camelCase(s)] = e[s];
            return n
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 !== e) {
                    ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in s ? [e] : e.match(Lt) || []), i = e.length;
                    for (; i--;) delete s[e[i]]
                }(void 0 === e || ft.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Dt = new d,
        Rt = new d,
        Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        zt = /[A-Z]/g;
    ft.extend({
        hasData: function (t) {
            return Rt.hasData(t) || Dt.hasData(t)
        },
        data: function (t, e, i) {
            return Rt.access(t, e, i)
        },
        removeData: function (t, e) {
            Rt.remove(t, e)
        },
        _data: function (t, e, i) {
            return Dt.access(t, e, i)
        },
        _removeData: function (t, e) {
            Dt.remove(t, e)
        }
    }), ft.fn.extend({
        data: function (t, e) {
            var i, s, n, r = this[0],
                o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (n = Rt.get(r), 1 === r.nodeType && !Dt.get(r, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (s = o[i].name, 0 === s.indexOf("data-") && (s = ft.camelCase(s.slice(5)), $(r, s, n[s])));
                    Dt.set(r, "hasDataAttrs", !0)
                }
                return n
            }
            return "object" == typeof t ? this.each(function () {
                Rt.set(this, t)
            }) : At(this, function (e) {
                var i;
                if (r && void 0 === e) {
                    if (void 0 !== (i = Rt.get(r, t))) return i;
                    if (void 0 !== (i = $(r, t))) return i
                } else this.each(function () {
                    Rt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Rt.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function (t, e, i) {
            var s;
            if (t) return e = (e || "fx") + "queue", s = Dt.get(t, e), i && (!s || ft.isArray(i) ? s = Dt.access(t, e, ft.makeArray(i)) : s.push(i)), s || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = ft.queue(t, e),
                s = i.length,
                n = i.shift(),
                r = ft._queueHooks(t, e),
                o = function () {
                    ft.dequeue(t, e)
                };
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete r.stop, n.call(t, o, r)), !s && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Dt.get(t, i) || Dt.access(t, i, {
                empty: ft.Callbacks("once memory").add(function () {
                    Dt.remove(t, [e + "queue", i])
                })
            })
        }
    }), ft.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, s = 1,
                n = ft.Deferred(),
                r = this,
                o = this.length,
                a = function () {
                    --s || n.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = Dt.get(r[o], t + "queueHooks")) && i.empty && (s++, i.empty.add(a));
            return a(), n.promise(e)
        }
    });
    var It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        jt = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"],
        Vt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        },
        Ht = function (t, e, i, s) {
            var n, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            n = i.apply(t, s || []);
            for (r in e) t.style[r] = o[r];
            return n
        },
        Bt = {};
    ft.fn.extend({
        show: function () {
            return m(this, !0)
        },
        hide: function () {
            return m(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Vt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    });
    var Wt = /^(?:checkbox|radio)$/i,
        qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var Ut = /<|&#?\w+;/;
    ! function () {
        var t = et.createDocumentFragment(),
            e = t.appendChild(et.createElement("div")),
            i = et.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), ut.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ut.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Gt = et.documentElement,
        Qt = /^key/,
        Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function (t, e, i, s, n) {
            var r, o, a, l, h, c, d, u, p, f, m, v = Dt.get(t);
            if (v)
                for (i.handler && (r = i, i = r.handler, n = r.selector), n && ft.find.matchesSelector(Gt, n), i.guid || (i.guid = ft.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function (e) {
                        return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(Lt) || [""], h = e.length; h--;) a = Kt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (d = ft.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, d = ft.event.special[p] || {}, c = ft.extend({
                    type: p,
                    origType: m,
                    data: s,
                    handler: i,
                    guid: i.guid,
                    selector: n,
                    needsContext: n && ft.expr.match.needsContext.test(n),
                    namespace: f.join(".")
                }, r), (u = l[p]) || (u = l[p] = [], u.delegateCount = 0, d.setup && !1 !== d.setup.call(t, s, f, o) || t.addEventListener && t.addEventListener(p, o)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? u.splice(u.delegateCount++, 0, c) : u.push(c), ft.event.global[p] = !0)
        },
        remove: function (t, e, i, s, n) {
            var r, o, a, l, h, c, d, u, p, f, m, v = Dt.hasData(t) && Dt.get(t);
            if (v && (l = v.events)) {
                for (e = (e || "").match(Lt) || [""], h = e.length; h--;)
                    if (a = Kt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = ft.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, u = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = u.length; r--;) c = u[r], !n && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (u.splice(r, 1), c.selector && u.delegateCount--, d.remove && d.remove.call(t, c));
                        o && !u.length && (d.teardown && !1 !== d.teardown.call(t, f, v.handle) || ft.removeEvent(t, p, v.handle), delete l[p])
                    } else
                        for (p in l) ft.event.remove(t, p + e[h], i, s, !0);
                ft.isEmptyObject(l) && Dt.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e = ft.event.fix(t),
                i, s, n, r, o, a, l = new Array(arguments.length),
                h = (Dt.get(this, "events") || {})[e.type] || [],
                c = ft.event.special[e.type] || {};
            for (l[0] = e, i = 1; i < arguments.length; i++) l[i] = arguments[i];
            if (e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = ft.event.handlers.call(this, e, h), i = 0;
                    (r = a[i++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, s = 0;
                        (o = r.handlers[s++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (n = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (t, e) {
            var i, s, n, r, o, a = [],
                l = e.delegateCount,
                h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (r = [], o = {}, i = 0; i < l; i++) s = e[i], n = s.selector + " ", void 0 === o[n] && (o[n] = s.needsContext ? ft(n, this).index(h) > -1 : ft.find(n, this, null, [h]).length), o[n] && r.push(s);
                        r.length && a.push({
                            elem: h,
                            handlers: r
                        })
                    }
            return h = this, l < e.length && a.push({
                elem: h,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ft.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[ft.expando] ? t : new ft.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && ft.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, ft.Event = function (t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? y : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Qt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Zt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var i, s = this,
                    n = t.relatedTarget,
                    r = t.handleObj;
                return n && (n === s || ft.contains(s, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ft.fn.extend({
        on: function (t, e, i, s) {
            return b(this, t, e, i, s)
        },
        one: function (t, e, i, s) {
            return b(this, t, e, i, s, 1)
        },
        off: function (t, e, i) {
            var s, n;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, ft(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof t) {
                for (n in t) this.off(n, e, t[n]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = w), this.each(function () {
                ft.event.remove(this, t, i, e)
            })
        }
    });
    var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        te = /<script|<style|<link/i,
        ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function (t) {
            return t.replace(Jt, "<$1></$2>")
        },
        clone: function (t, e, i) {
            var s, n, r, o, a = t.cloneNode(!0),
                l = ft.contains(t.ownerDocument, t);
            if (!(ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (o = v(a), r = v(t), s = 0, n = r.length; s < n; s++) E(r[s], o[s]);
            if (e)
                if (i)
                    for (r = r || v(t), o = o || v(a), s = 0, n = r.length; s < n; s++) M(r[s], o[s]);
                else M(t, a);
            return o = v(a, "script"), o.length > 0 && g(o, !l && v(t, "script")), a
        },
        cleanData: function (t) {
            for (var e, i, s, n = ft.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (Ot(i)) {
                    if (e = i[Dt.expando]) {
                        if (e.events)
                            for (s in e.events) n[s] ? ft.event.remove(i, s) : ft.removeEvent(i, s, e.handle);
                        i[Dt.expando] = void 0
                    }
                    i[Rt.expando] && (i[Rt.expando] = void 0)
                }
        }
    }), ft.fn.extend({
        detach: function (t) {
            return L(this, t, !0)
        },
        remove: function (t) {
            return L(this, t)
        },
        text: function (t) {
            return At(this, function (t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return k(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    S(this, t).appendChild(t)
                }
            })
        },
        prepend: function () {
            return k(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = S(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return k(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return k(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ft.clone(this, t, e)
            })
        },
        html: function (t) {
            return At(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    s = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !te.test(t) && !Yt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; i < s; i++) e = this[i] || {}, 1 === e.nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return k(this, arguments, function (e) {
                var i = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ft.fn[t] = function (t) {
            for (var i, s = [], n = ft(t), r = n.length - 1, o = 0; o <= r; o++) i = o === r ? this : this.clone(!0), ft(n[o])[e](i), rt.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var ne = /^margin/,
        re = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
        oe = function (e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        };
    ! function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Gt.appendChild(o);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, s = "4px" === e.width, a.style.marginRight = "50%", n = "4px" === e.marginRight, Gt.removeChild(o), a = null
            }
        }
        var i, s, n, r, o = et.createElement("div"),
            a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ut.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), ft.extend(ut, {
            pixelPosition: function () {
                return e(), i
            },
            boxSizingReliable: function () {
                return e(), s
            },
            pixelMarginRight: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), r
            }
        }))
    }();
    var ae = /^(none|table(?!-c[ea]).+)/,
        le = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        he = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ce = ["Webkit", "Moz", "ms"],
        de = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = P(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, i, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var n, r, o, a = ft.camelCase(e),
                    l = t.style;
                return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (n = o.get(t, !1, s)) ? n : l[e] : (r = typeof i, "string" === r && (n = jt.exec(i)) && n[1] && (i = p(t, e, n), r = "number"), void(null != i && i === i && ("number" === r && (i += n && n[3] || (ft.cssNumber[a] ? "" : "px")), ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, s)) || (l[e] = i))))
            }
        },
        css: function (t, e, i, s) {
            var n, r, o, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], o && "get" in o && (n = o.get(t, !0, i)), void 0 === n && (n = P(t, e, s)), "normal" === n && e in he && (n = he[e]), "" === i || i ? (r = parseFloat(n), !0 === i || isFinite(r) ? r || 0 : n) : n
        }
    }), ft.each(["height", "width"], function (t, e) {
        ft.cssHooks[e] = {
            get: function (t, i, s) {
                if (i) return !ae.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? N(t, e, s) : Ht(t, le, function () {
                    return N(t, e, s)
                })
            },
            set: function (t, i, s) {
                var n, r = s && oe(t),
                    o = s && R(t, e, s, "border-box" === ft.css(t, "boxSizing", !1, r), r);
                return o && (n = jt.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = ft.css(t, e)), D(t, i, o)
            }
        }
    }), ft.cssHooks.marginLeft = A(ut.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - Ht(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        ft.cssHooks[t + e] = {
            expand: function (i) {
                for (var s = 0, n = {}, r = "string" == typeof i ? i.split(" ") : [i]; s < 4; s++) n[t + Ft[s] + e] = r[s] || r[s - 2] || r[0];
                return n
            }
        }, ne.test(t) || (ft.cssHooks[t + e].set = D)
    }), ft.fn.extend({
        css: function (t, e) {
            return At(this, function (t, e, i) {
                var s, n, r = {},
                    o = 0;
                if (ft.isArray(e)) {
                    for (s = oe(t), n = e.length; o < n; o++) r[e[o]] = ft.css(t, e[o], !1, s);
                    return r
                }
                return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), ft.Tween = z, z.prototype = {
        constructor: z,
        init: function (t, e, i, s, n, r) {
            this.elem = t, this.prop = i, this.easing = n || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = r || (ft.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = z.propHooks[this.prop];
            return t && t.get ? t.get(this) : z.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = z.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = z.prototype.init, ft.fx.step = {};
    var ue, pe, fe = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;
    ft.Animation = ft.extend(W, {
            tweeners: {
                "*": [function (t, e) {
                    var i = this.createTween(t, e);
                    return p(i.elem, t, jt.exec(e), i), i
                }]
            },
            tweener: function (t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Lt);
                for (var i, s = 0, n = t.length; s < n; s++) i = t[s], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e)
            },
            prefilters: [H],
            prefilter: function (t, e) {
                e ? W.prefilters.unshift(t) : W.prefilters.push(t)
            }
        }), ft.speed = function (t, e, i) {
            var s = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: i || !i && e || ft.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !ft.isFunction(e) && e
            };
            return ft.fx.off || et.hidden ? s.duration = 0 : "number" != typeof s.duration && (s.duration in ft.fx.speeds ? s.duration = ft.fx.speeds[s.duration] : s.duration = ft.fx.speeds._default), null != s.queue && !0 !== s.queue || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
                ft.isFunction(s.old) && s.old.call(this), s.queue && ft.dequeue(this, s.queue)
            }, s
        }, ft.fn.extend({
            fadeTo: function (t, e, i, s) {
                return this.filter(Vt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, s)
            },
            animate: function (t, e, i, s) {
                var n = ft.isEmptyObject(t),
                    r = ft.speed(e, i, s),
                    o = function () {
                        var e = W(this, ft.extend({}, t), r);
                        (n || Dt.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, n || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
            },
            stop: function (t, e, i) {
                var s = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        r = ft.timers,
                        o = Dt.get(this);
                    if (n) o[n] && o[n].stop && s(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && me.test(n) && s(o[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                    !e && i || ft.dequeue(this, t)
                })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, i = Dt.get(this),
                        s = i[t + "queue"],
                        n = i[t + "queueHooks"],
                        r = ft.timers,
                        o = s ? s.length : 0;
                    for (i.finish = !0, ft.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) s[e] && s[e].finish && s[e].finish.call(this);
                    delete i.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function (t, e) {
            var i = ft.fn[e];
            ft.fn[e] = function (t, s, n) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, s, n)
            }
        }), ft.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            ft.fn[t] = function (t, i, s) {
                return this.animate(e, t, i, s)
            }
        }), ft.timers = [], ft.fx.tick = function () {
            var t, e = 0,
                i = ft.timers;
            for (ue = ft.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || ft.fx.stop(), ue = void 0
        }, ft.fx.timer = function (t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function () {
            pe || (pe = t.requestAnimationFrame ? t.requestAnimationFrame(I) : t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function () {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(pe) : t.clearInterval(pe), pe = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function (e, i) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, s) {
                var n = t.setTimeout(i, e);
                s.stop = function () {
                    t.clearTimeout(n)
                }
            })
        },
        function () {
            var t = et.createElement("input"),
                e = et.createElement("select"),
                i = e.appendChild(et.createElement("option"));
            t.type = "checkbox", ut.checkOn = "" !== t.value, ut.optSelected = i.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", ut.radioValue = "t" === t.value
        }();
    var ve, ge = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function (t, e) {
            return At(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function (t, e, i) {
            var s, n, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? ft.prop(t, e, i) : (1 === r && ft.isXMLDoc(t) || (n = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ve : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = ft.find.attr(t, e), null == s ? void 0 : s))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ut.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, s = 0,
                n = e && e.match(Lt);
            if (n && 1 === t.nodeType)
                for (; i = n[s++];) t.removeAttribute(i)
        }
    }), ve = {
        set: function (t, e, i) {
            return !1 === e ? ft.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ge[e] || ft.find.attr;
        ge[e] = function (t, e, s) {
            var n, r, o = e.toLowerCase();
            return s || (r = ge[o], ge[o] = n, n = null != i(t, e, s) ? o : null, ge[o] = r), n
        }
    });
    var _e = /^(?:input|select|textarea|button)$/i,
        ye = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function (t, e) {
            return At(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function (t, e, i) {
            var s, n, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, n = ft.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : _e.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ut.optSelected || (ft.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function (t) {
            var e, i, s, n, r, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).addClass(t.call(this, e, X(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Lt) || []; i = this[l++];)
                    if (n = X(i), s = 1 === i.nodeType && " " + q(n) + " ") {
                        for (o = 0; r = e[o++];) s.indexOf(" " + r + " ") < 0 && (s += r + " ");
                        a = q(s), n !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, i, s, n, r, o, a, l = 0;
            if (ft.isFunction(t)) return this.each(function (e) {
                ft(this).removeClass(t.call(this, e, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Lt) || []; i = this[l++];)
                    if (n = X(i), s = 1 === i.nodeType && " " + q(n) + " ") {
                        for (o = 0; r = e[o++];)
                            for (; s.indexOf(" " + r + " ") > -1;) s = s.replace(" " + r + " ", " ");
                        a = q(s), n !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function (i) {
                ft(this).toggleClass(t.call(this, i, X(this), e), e)
            }) : this.each(function () {
                var e, s, n, r;
                if ("string" === i)
                    for (s = 0, n = ft(this), r = t.match(Lt) || []; e = r[s++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== t && "boolean" !== i || (e = X(this), e && Dt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Dt.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, i, s = 0;
            for (e = " " + t + " "; i = this[s++];)
                if (1 === i.nodeType && (" " + q(X(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var we = /\r/g;
    ft.fn.extend({
        val: function (t) {
            var e, i, s, n = this[0];
            return arguments.length ? (s = ft.isFunction(t), this.each(function (i) {
                var n;
                1 === this.nodeType && (n = s ? t.call(this, i, ft(this).val()) : t, null == n ? n = "" : "number" == typeof n ? n += "" : ft.isArray(n) && (n = ft.map(n, function (t) {
                    return null == t ? "" : t + ""
                })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
            })) : n ? (e = ft.valHooks[n.type] || ft.valHooks[n.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : (i = n.value, "string" == typeof i ? i.replace(we, "") : null == i ? "" : i)) : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : q(ft.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, i, s, n = t.options,
                        r = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? r + 1 : n.length;
                    for (s = r < 0 ? l : o ? r : 0; s < l; s++)
                        if (i = n[s], (i.selected || s === r) && !i.disabled && (!i.parentNode.disabled || !ft.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ft(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var i, s, n = t.options, r = ft.makeArray(e), o = n.length; o--;) s = n[o], (s.selected = ft.inArray(ft.valHooks.option.get(s), r) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function () {
        ft.valHooks[this] = {
            set: function (t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, ut.checkOn || (ft.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function (e, i, s, n) {
            var r, o, a, l, h, c, d, u = [s || et],
                p = ht.call(e, "type") ? e.type : e,
                f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = s = s || et, 3 !== s.nodeType && 8 !== s.nodeType && !xe.test(p + ft.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[ft.expando] ? e : new ft.Event(p, "object" == typeof e && e), e.isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : ft.makeArray(i, [e]), d = ft.event.special[p] || {}, n || !d.trigger || !1 !== d.trigger.apply(s, i))) {
                if (!n && !d.noBubble && !ft.isWindow(s)) {
                    for (l = d.delegateType || p, xe.test(l + p) || (o = o.parentNode); o; o = o.parentNode) u.push(o), a = o;
                    a === (s.ownerDocument || et) && u.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (o = u[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : d.bindType || p, c = (Dt.get(o, "events") || {})[e.type] && Dt.get(o, "handle"), c && c.apply(o, i), (c = h && o[h]) && c.apply && Ot(o) && (e.result = c.apply(o, i), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), i) || !Ot(s) || h && ft.isFunction(s[p]) && !ft.isWindow(s) && (a = s[h], a && (s[h] = null), ft.event.triggered = p, s[p](), ft.event.triggered = void 0, a && (s[h] = a)), e.result
            }
        },
        simulate: function (t, e, i) {
            var s = ft.extend(new ft.Event, i, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(s, null, e)
        }
    }), ft.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return ft.event.trigger(t, e, i, !0)
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        ft.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ut.focusin = "onfocusin" in t, ut.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var i = function (t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function () {
                var s = this.ownerDocument || this,
                    n = Dt.access(s, e);
                n || s.addEventListener(t, i, !0), Dt.access(s, e, (n || 0) + 1)
            },
            teardown: function () {
                var s = this.ownerDocument || this,
                    n = Dt.access(s, e) - 1;
                n ? Dt.access(s, e, n) : (s.removeEventListener(t, i, !0), Dt.remove(s, e))
            }
        }
    });
    var be = t.location,
        Se = ft.now(),
        Te = /\?/;
    ft.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i
    };
    var Ce = /\[\]$/,
        Me = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
        var i, s = [],
            n = function (t, e) {
                var i = ft.isFunction(e) ? e() : e;
                s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
            n(this.name, this.value)
        });
        else
            for (i in t) Y(i, t[i], e, n);
        return s.join("&")
    }, ft.fn.extend({
        serialize: function () {
            return ft.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && ke.test(this.nodeName) && !Ee.test(t) && (this.checked || !Wt.test(t))
            }).map(function (t, e) {
                var i = ft(this).val();
                return null == i ? null : ft.isArray(i) ? ft.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Me, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Me, "\r\n")
                }
            }).get()
        }
    });
    var Le = /%20/g,
        $e = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        De = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Ne = {},
        ze = {},
        Ie = "*/".concat("*"),
        je = et.createElement("a");
    je.href = be.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: be.href,
            type: "GET",
            isLocal: Oe.test(be.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t)
        },
        ajaxPrefilter: U(Ne),
        ajaxTransport: U(ze),
        ajax: function (e, i) {
            function s(e, i, s, a) {
                var h, u, p, w, x, b = i;
                c || (c = !0, l && t.clearTimeout(l), n = void 0, o = a || "", S.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, s && (w = Z(f, S, s)), w = K(f, w, S, h), h ? (f.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (ft.lastModified[r] = x), (x = S.getResponseHeader("etag")) && (ft.etag[r] = x)), 204 === e || "HEAD" === f.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = w.state, u = w.data, p = w.error, h = !p)) : (p = b, !e && b || (b = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (i || b) + "", h ? g.resolveWith(m, [u, b, S]) : g.rejectWith(m, [S, b, p]), S.statusCode(y), y = void 0, d && v.trigger(h ? "ajaxSuccess" : "ajaxError", [S, f, h ? u : p]), _.fireWith(m, [S, b]), d && (v.trigger("ajaxComplete", [S, f]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, r, o, a, l, h, c, d, u, p, f = ft.ajaxSetup({}, i),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? ft(m) : ft.event,
                g = ft.Deferred(),
                _ = ft.Callbacks("once memory"),
                y = f.statusCode || {},
                w = {},
                x = {},
                b = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Ae.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return c ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (c) S.always(t[S.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || b;
                        return n && n.abort(e), s(0, e), this
                    }
                };
            if (g.promise(S), f.url = ((e || f.url || be.href) + "").replace(Re, be.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Lt) || [""], null == f.crossDomain) {
                h = et.createElement("a");
                try {
                    h.href = f.url, h.href = h.href, f.crossDomain = je.protocol + "//" + je.host != h.protocol + "//" + h.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), G(Ne, f, i, S), c) return S;
            d = ft.event && f.global, d && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !De.test(f.type), r = f.url.replace($e, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Le, "+")) : (p = f.url.slice(r.length), f.data && (r += (Te.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Pe, "$1"), p = (Te.test(r) ? "&" : "?") + "_=" + Se++ + p), f.url = r + p), f.ifModified && (ft.lastModified[r] && S.setRequestHeader("If-Modified-Since", ft.lastModified[r]), ft.etag[r] && S.setRequestHeader("If-None-Match", ft.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers) S.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, S, f) || c)) return S.abort();
            if (b = "abort", _.add(f.complete), S.done(f.success), S.fail(f.error), n = G(ze, f, i, S)) {
                if (S.readyState = 1, d && v.trigger("ajaxSend", [S, f]), c) return S;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    S.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, n.send(w, s)
                } catch (t) {
                    if (c) throw t;
                    s(-1, t)
                }
            } else s(-1, "No Transport");
            return S
        },
        getJSON: function (t, e, i) {
            return ft.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function (t, e) {
        ft[e] = function (t, i, s, n) {
            return ft.isFunction(i) && (n = n || s, s = i, i = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: n,
                data: i,
                success: s
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function (t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ft.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return ft.isFunction(t) ? this.each(function (e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ft(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = ft.isFunction(t);
            return this.each(function (i) {
                ft(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function (t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Fe = {
            0: 200,
            1223: 204
        },
        Ve = ft.ajaxSettings.xhr();
    ut.cors = !!Ve && "withCredentials" in Ve, ut.ajax = Ve = !!Ve, ft.ajaxTransport(function (e) {
        var i, s;
        if (ut.cors || Ve && !e.crossDomain) return {
            send: function (n, r) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) a.setRequestHeader(o, n[o]);
                i = function (t) {
                    return function () {
                        i && (i = s = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), s = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = s : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && s()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function () {
                i && i()
            }
        }
    }), ft.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (s, n) {
                    e = ft("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function (t) {
                        e.remove(), i = null, t && n("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }
    });
    var He = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = He.pop() || ft.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function (e, i, s) {
        var n, r, o, a = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + n) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return o || ft.error(n + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[n], t[n] = function () {
            o = arguments
        }, s.always(function () {
            void 0 === r ? ft(t).removeProp(n) : t[n] = r, e[n] && (e.jsonpCallback = i.jsonpCallback, He.push(n)), o && ft.isFunction(r) && r(o[0]), o = r = void 0
        }), "script"
    }), ut.createHTMLDocument = function () {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ft.parseHTML = function (t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var s, n, r;
        return e || (ut.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), s = e.createElement("base"), s.href = et.location.href, e.head.appendChild(s)) : e = et), n = St.exec(t), r = !i && [], n ? [e.createElement(n[1])] : (n = _([t], e, r), r && r.length && ft(r).remove(), ft.merge([], n.childNodes))
    }, ft.fn.load = function (t, e, i) {
        var s, n, r, o = this,
            a = t.indexOf(" ");
        return a > -1 && (s = q(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), o.length > 0 && ft.ajax({
            url: t,
            type: n || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, o.html(s ? ft("<div>").append(ft.parseHTML(t)).find(s) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ft.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function (t) {
        return ft.grep(ft.timers, function (e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function (t, e, i) {
            var s, n, r, o, a, l, h, c = ft.css(t, "position"),
                d = ft(t),
                u = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, h ? (s = d.position(), o = s.top, n = s.left) : (o = parseFloat(r) || 0, n = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, i, ft.extend({}, a))), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + n), "using" in e ? e.using.call(t, u) : d.css(u)
        }
    }, ft.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, i, s, n, r = this[0];
            return r ? r.getClientRects().length ? (s = r.getBoundingClientRect(), s.width || s.height ? (n = r.ownerDocument, i = J(n), e = n.documentElement, {
                top: s.top + i.pageYOffset - e.clientTop,
                left: s.left + i.pageXOffset - e.clientLeft
            }) : s) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (s = t.offset()), s = {
                    top: s.top + ft.css(t[0], "borderTopWidth", !0),
                    left: s.left + ft.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - s.top - ft.css(i, "marginTop", !0),
                    left: e.left - s.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || Gt
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var i = "pageYOffset" === e;
        ft.fn[t] = function (s) {
            return At(this, function (t, s, n) {
                var r = J(t);
                return void 0 === n ? r ? r[e] : t[s] : void(r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : t[s] = n)
            }, t, s, arguments.length)
        }
    }), ft.each(["top", "left"], function (t, e) {
        ft.cssHooks[e] = A(ut.pixelPosition, function (t, i) {
            if (i) return i = P(t, e), re.test(i) ? ft(t).position()[e] + "px" : i
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (i, s) {
            ft.fn[s] = function (n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    a = i || (!0 === n || !0 === r ? "margin" : "border");
                return At(this, function (e, i, n) {
                    var r;
                    return ft.isWindow(e) ? 0 === s.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? ft.css(e, i, a) : ft.style(e, i, n, a)
                }, e, o ? n : void 0, o)
            }
        })
    }), ft.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, s) {
            return this.on(e, t, i, s)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ft
    });
    var We = t.jQuery,
        qe = t.$;
    return ft.noConflict = function (e) {
        return t.$ === ft && (t.$ = qe), e && t.jQuery === ft && (t.jQuery = We), ft
    }, e || (t.jQuery = t.$ = ft), ft
}), window.averta = {},
    function ($) {
        function getVendorPrefix() {
            if ("result" in arguments.callee) return arguments.callee.result;
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                e = document.getElementsByTagName("script")[0];
            for (var i in e.style)
                if (t.test(i)) return arguments.callee.result = i.match(t)[0];
            return arguments.callee.result = "WebkitOpacity" in e.style ? "Webkit" : "KhtmlOpacity" in e.style ? "Khtml" : ""
        }

        function checkStyleValue(t) {
            var e = document.body || document.documentElement,
                i = e.style,
                s = t;
            if ("string" == typeof i[s]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], s = s.charAt(0).toUpperCase() + s.substr(1);
            for (var n = 0; n < v.length; n++)
                if ("string" == typeof i[v[n] + s]) return !0;
            return !1
        }

        function supportsTransitions() {
            return checkStyleValue("transition")
        }

        function supportsTransforms() {
            return checkStyleValue("transform")
        }

        function supports3DTransforms() {
            if (!supportsTransforms()) return !1;
            var t, e = document.createElement("i"),
                i = {
                    WebkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    MSTransform: "-ms-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    Transform: "transform",
                    transform: "transform"
                };
            e.style.display = "block", document.body.insertBefore(e, null);
            for (var s in i) void 0 !== e.style[s] && (e.style[s] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(e).getPropertyValue(i[s]));
            return document.body.removeChild(e), null != t && t.length > 0 && "none" !== t
        }
        window.package = function (t) {
            window[t] || (window[t] = {})
        };
        var extend = function (t, e) {
            for (var i in e) t[i] = e[i]
        };
        Function.prototype.extend = function (t) {
            "function" == typeof t.prototype.constructor ? (extend(this.prototype, t.prototype), this.prototype.constructor = this) : (this.prototype.extend(t), this.prototype.constructor = this)
        };
        var trans = {
            Moz: "-moz-",
            Webkit: "-webkit-",
            Khtml: "-khtml-",
            O: "-o-",
            ms: "-ms-",
            Icab: "-icab-"
        };
        window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window._touch = "ontouchstart" in document, $(document).ready(function () {
            window._jcsspfx = getVendorPrefix(), window._csspfx = trans[window._jcsspfx], window._cssanim = supportsTransitions(), window._css3d = supports3DTransforms(), window._css2d = supportsTransforms()
        }), window.parseQueryString = function (t) {
            var e = {};
            return t.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function (t, i, s, n) {
                e[i] = n
            }), e
        };
        var fps60 = 50 / 3;
        if (window.requestAnimationFrame || (window.requestAnimationFrame = function () {
                return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    window.setTimeout(t, fps60)
                }
            }()), window.getComputedStyle || (window.getComputedStyle = function (t) {
                return this.el = t, this.getPropertyValue = function (e) {
                    var i = /(\-([a-z]){1})/g;
                    return "float" == e && (e = "styleFloat"), i.test(e) && (e = e.replace(i, function () {
                        return arguments[2].toUpperCase()
                    })), t.currentStyle[e] ? t.currentStyle[e] : null
                }, t.currentStyle
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
                var e = this.length >>> 0,
                    i = Number(arguments[1]) || 0;
                for (0 > (i = 0 > i ? Math.ceil(i) : Math.floor(i)) && (i += e); e > i; i++)
                    if (i in this && this[i] === t) return i;
                return -1
            }), window.isMSIE = function (version) {
                if (!$.browser.msie) return !1;
                if (!version) return !0;
                var ieVer = $.browser.version.slice(0, $.browser.version.indexOf("."));
                return "string" == typeof version ? eval(-1 !== version.indexOf("<") || -1 !== version.indexOf(">") ? ieVer + version : version + "==" + ieVer) : version == ieVer
            }, $.removeDataAttrs = function (t, e) {
                var i, s, n = [],
                    r = t[0].attributes,
                    o = r.length;
                for (e = e || [], i = 0; o > i; i++) s = r[i].name, "data-" === s.substring(0, 5) && -1 === e.indexOf(s) && n.push(r[i].name);
                $.each(n, function (e, i) {
                    t.removeAttr(i)
                })
            }, jQuery) {
            $.jqLoadFix = function () {
                if (this.complete) {
                    var t = this;
                    setTimeout(function () {
                        $(t).trigger("load")
                    }, 1)
                }
            }, jQuery.uaMatch = jQuery.uaMatch || function (t) {
                t = t.toLowerCase();
                var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
                return {
                    browser: e[1] || "",
                    version: e[2] || "0"
                }
            }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            isIE11 && (browser.msie = "true", delete browser.mozilla), jQuery.browser = browser, $.fn.preloadImg = function (t, e) {
                return this.each(function () {
                    var i = $(this),
                        s = this,
                        n = new Image;
                    n.onload = function (r) {
                        null == r && (r = {}), i.attr("src", t), r.width = n.width, r.height = n.height, i.data("width", n.width), i.data("height", n.height), setTimeout(function () {
                            e.call(s, r)
                        }, 50), n = null
                    }, n.src = t
                }), this
            }
        }
    }(jQuery),
    function () {
        "use strict";
        averta.EventDispatcher = function () {
            this.listeners = {}
        }, averta.EventDispatcher.extend = function (t) {
            var e = new averta.EventDispatcher;
            for (var i in e) "constructor" != i && (t[i] = averta.EventDispatcher.prototype[i])
        }, averta.EventDispatcher.prototype = {
            constructor: averta.EventDispatcher,
            addEventListener: function (t, e, i) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                    listener: e,
                    ref: i
                })
            },
            removeEventListener: function (t, e, i) {
                if (this.listeners[t]) {
                    for (var s = 0; s < this.listeners[t].length; ++s) e === this.listeners[t][s].listener && i === this.listeners[t][s].ref && this.listeners[t].splice(s--, 1);
                    0 === this.listeners[t].length && (this.listeners[t] = null)
                }
            },
            dispatchEvent: function (t) {
                if (t.target = this, this.listeners[t.type])
                    for (var e = 0, i = this.listeners[t.type].length; i > e; ++e) this.listeners[t.type][e].listener.call(this.listeners[t.type][e].ref, t)
            }
        }
    }(),
    function ($) {
        "use strict";
        var t = "ontouchstart" in document,
            e = window.navigator.pointerEnabled,
            i = !e && window.navigator.msPointerEnabled,
            s = e || i,
            n = (e ? "pointerdown " : "") + (i ? "MSPointerDown " : "") + (t ? "touchstart " : "") + "mousedown",
            r = (e ? "pointermove " : "") + (i ? "MSPointerMove " : "") + (t ? "touchmove " : "") + "mousemove",
            o = (e ? "pointerup " : "") + (i ? "MSPointerUp " : "") + (t ? "touchend " : "") + "mouseup",
            a = (e ? "pointercancel " : "") + (i ? "MSPointerCancel " : "") + "touchcancel";
        averta.TouchSwipe = function (t) {
            this.$element = t, this.enabled = !0, t.bind(n, {
                target: this
            }, this.__touchStart), t[0].swipe = this, this.onSwipe = null, this.swipeType = "horizontal", this.noSwipeSelector = "input, textarea, button, .no-swipe, .ms-no-swipe", this.lastStatus = {}
        };
        var l = averta.TouchSwipe.prototype;
        l.getDirection = function (t, e) {
            switch (this.swipeType) {
                case "horizontal":
                    return t <= this.start_x ? "left" : "right";
                case "vertical":
                    return e <= this.start_y ? "up" : "down";
                case "all":
                    return Math.abs(t - this.start_x) > Math.abs(e - this.start_y) ? t <= this.start_x ? "left" : "right" : e <= this.start_y ? "up" : "down"
            }
        }, l.priventDefultEvent = function (t, e) {
            var i = Math.abs(t - this.start_x),
                s = Math.abs(e - this.start_y),
                n = i > s;
            return "horizontal" === this.swipeType && n || "vertical" === this.swipeType && !n
        }, l.createStatusObject = function (t) {
            var e, i, s = {};
            return e = this.lastStatus.distanceX || 0, i = this.lastStatus.distanceY || 0, s.distanceX = t.pageX - this.start_x, s.distanceY = t.pageY - this.start_y, s.moveX = s.distanceX - e, s.moveY = s.distanceY - i, s.distance = parseInt(Math.sqrt(Math.pow(s.distanceX, 2) + Math.pow(s.distanceY, 2))), s.duration = (new Date).getTime() - this.start_time, s.direction = this.getDirection(t.pageX, t.pageY), s
        }, l.__reset = function (t, e) {
            this.reset = !1, this.lastStatus = {}, this.start_time = (new Date).getTime();
            var i = this.__getPoint(t, e);
            this.start_x = i.pageX, this.start_y = i.pageY
        }, l.__touchStart = function (e) {
            var i = e.data.target,
                n = e;
            if (i.enabled && !($(e.target).closest(i.noSwipeSelector, i.$element).length > 0)) {
                if (e = e.originalEvent, s && $(this).css("-ms-touch-action", "horizontal" === i.swipeType ? "pan-y" : "pan-x"), !i.onSwipe) return void $.error("Swipe listener is undefined");
                if (!(i.touchStarted || t && i.start_time && "mousedown" === e.type && (new Date).getTime() - i.start_time < 600)) {
                    var l = i.__getPoint(e, n);
                    i.start_x = l.pageX, i.start_y = l.pageY, i.start_time = (new Date).getTime(), $(document).bind(o, {
                        target: i
                    }, i.__touchEnd).bind(r, {
                        target: i
                    }, i.__touchMove).bind(a, {
                        target: i
                    }, i.__touchCancel);
                    var h = i.createStatusObject(l);
                    h.phase = "start", i.onSwipe.call(null, h), t || n.preventDefault(), i.lastStatus = h, i.touchStarted = !0
                }
            }
        }, l.__touchMove = function (t) {
            var e = t.data.target,
                i = t;
            if (t = t.originalEvent, e.touchStarted) {
                clearTimeout(e.timo), e.timo = setTimeout(function () {
                    e.__reset(t, i)
                }, 60);
                var s = e.__getPoint(t, i),
                    n = e.createStatusObject(s);
                e.priventDefultEvent(s.pageX, s.pageY) && i.preventDefault(), n.phase = "move", e.lastStatus = n, e.onSwipe.call(null, n)
            }
        }, l.__touchEnd = function (e) {
            var i = e.data.target,
                s = e;
            e = e.originalEvent, clearTimeout(i.timo);
            var n = i.lastStatus;
            t || s.preventDefault(), n.phase = "end", i.touchStarted = !1, i.priventEvt = null, $(document).unbind(o, i.__touchEnd).unbind(r, i.__touchMove).unbind(a, i.__touchCancel), n.speed = n.distance / n.duration, i.onSwipe.call(null, n)
        }, l.__touchCancel = function (t) {
            t.data.target.__touchEnd(t)
        }, l.__getPoint = function (e, i) {
            return t && -1 === e.type.indexOf("mouse") ? e.touches[0] : s ? e : i
        }, l.enable = function () {
            this.enabled || (this.enabled = !0)
        }, l.disable = function () {
            this.enabled && (this.enabled = !1)
        }
    }(jQuery),
    function () {
        "use strict";
        averta.Ticker = function () {};
        var t = averta.Ticker,
            e = [],
            i = 0,
            s = !0;
        t.add = function (s, n) {
            return e.push([s, n]), 1 === e.length && t.start(), i = e.length
        }, t.remove = function (s, n) {
            for (var r = 0, o = e.length; o > r; ++r) e[r] && e[r][0] === s && e[r][1] === n && e.splice(r, 1);
            0 === (i = e.length) && t.stop()
        }, t.start = function () {
            s && (s = !1, n())
        }, t.stop = function () {
            s = !0
        };
        var n = function () {
            if (!t.__stopped) {
                for (var s, r = 0; r !== i; r++) s = e[r], s[0].call(s[1]);
                requestAnimationFrame(n)
            }
        }
    }(),
    function () {
        "use strict";
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        }), averta.Timer = function (t, e) {
            this.delay = t, this.currentCount = 0, this.paused = !1, this.onTimer = null, this.refrence = null, e && this.start()
        }, averta.Timer.prototype = {
            constructor: averta.Timer,
            start: function () {
                this.paused = !1, this.lastTime = Date.now(), averta.Ticker.add(this.update, this)
            },
            stop: function () {
                this.paused = !0, averta.Ticker.remove(this.update, this)
            },
            reset: function () {
                this.currentCount = 0, this.paused = !0, this.lastTime = Date.now()
            },
            update: function () {
                this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
            },
            getTime: function () {
                return this.delay * this.currentCount
            }
        }
    }(),
    function () {
        "use strict";
        window.CSSTween = function (t, e, i, s) {
            this.$element = t, this.duration = e || 1e3, this.delay = i || 0, this.ease = s || "linear"
        };
        var t = CSSTween.prototype;
        t.to = function (t, e) {
            return this.to_cb = t, this.to_cb_target = e, this
        }, t.from = function (t, e) {
            return this.fr_cb = t, this.fr_cb_target = e, this
        }, t.onComplete = function (t, e) {
            return this.oc_fb = t, this.oc_fb_target = e, this
        }, t.chain = function (t) {
            return this.chained_tween = t, this
        }, t.reset = function () {
            clearTimeout(this.start_to), clearTimeout(this.end_to)
        }, t.start = function () {
            var t = this.$element[0];
            clearTimeout(this.start_to), clearTimeout(this.end_to), this.fresh = !0, this.fr_cb && (t.style[window._jcsspfx + "TransitionDuration"] = "0ms", this.fr_cb.call(this.fr_cb_target));
            var e = this;
            return this.onTransComplete = function () {
                e.fresh && (e.reset(), t.style[window._jcsspfx + "TransitionDuration"] = "", t.style[window._jcsspfx + "TransitionProperty"] = "", t.style[window._jcsspfx + "TransitionTimingFunction"] = "", t.style[window._jcsspfx + "TransitionDelay"] = "", e.fresh = !1, e.chained_tween && e.chained_tween.start(), e.oc_fb && e.oc_fb.call(e.oc_fb_target))
            }, this.start_to = setTimeout(function () {
                e.$element && (t.style[window._jcsspfx + "TransitionDuration"] = e.duration + "ms", t.style[window._jcsspfx + "TransitionProperty"] = e.transProperty || "all", t.style[window._jcsspfx + "TransitionDelay"] = e.delay > 0 ? e.delay + "ms" : "", t.style[window._jcsspfx + "TransitionTimingFunction"] = e.ease, e.to_cb && e.to_cb.call(e.to_cb_target), e.end_to = setTimeout(function () {
                    e.onTransComplete()
                }, e.duration + (e.delay || 0)))
            }, 1), this
        }
    }(),
    function () {
        "use strict";

        function t(t, i) {
            if (void 0 !== i.x || void 0 !== i.y)
                if (e) {
                    var s = window._jcsspfx + "Transform";
                    void 0 !== i.x && (i[s] = (i[s] || "") + " translateX(" + i.x + "px)", delete i.x), void 0 !== i.y && (i[s] = (i[s] || "") + " translateY(" + i.y + "px)", delete i.y)
                } else {
                    if (void 0 !== i.x) {
                        var n = "auto" !== t.css("right") ? "right" : "left";
                        i[n] = i.x + "px", delete i.x
                    }
                    if (void 0 !== i.y) {
                        var r = "auto" !== t.css("bottom") ? "bottom" : "top";
                        i[r] = i.y + "px", delete i.y
                    }
                }
            return i
        }
        var e = null;
        window.CTween = {}, CTween.setPos = function (e, i) {
            e.css(t(e, i))
        }, CTween.animate = function (i, s, n, r) {
            if (null == e && (e = window._cssanim), r = r || {}, t(i, n), e) {
                var o = new CSSTween(i, s, r.delay, EaseDic[r.ease]);
                return r.transProperty && (o.transProperty = r.transProperty), o.to(function () {
                    i.css(n)
                }), r.complete && o.onComplete(r.complete, r.target), o.start(), o.stop = o.reset, o
            }
            var a;
            return r.delay && i.delay(r.delay), r.complete && (a = function () {
                r.complete.call(r.target)
            }), i.stop(!0).animate(n, s, r.ease || "linear", a), i
        }, CTween.fadeOut = function (t, e, i) {
            var s = {};
            !0 === i ? s.complete = function () {
                t.remove()
            } : 2 === i && (s.complete = function () {
                t.css("display", "none")
            }), CTween.animate(t, e || 1e3, {
                opacity: 0
            }, s)
        }, CTween.fadeIn = function (t, e, i) {
            !1 !== i && t.css("opacity", 0).css("display", ""), CTween.animate(t, e || 1e3, {
                opacity: 1
            })
        }
    }(),
    function () {
        window.EaseDic = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }
    }(),
    function () {
        "use strict";
        window.MSAligner = function (t, e, i) {
            this.$container = e, this.$img = i, this.type = t || "stretch", this.widthOnly = !1, this.heightOnly = !1
        };
        var t = MSAligner.prototype;
        t.init = function (t, e) {
            switch (this.baseWidth = t, this.baseHeight = e, this.imgRatio = t / e, this.imgRatio2 = e / t, this.type) {
                case "tile":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$img.remove();
                    break;
                case "center":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$container.css({
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                    }), this.$img.remove();
                    break;
                case "stretch":
                    this.$img.css({
                        width: "100%",
                        height: "100%"
                    });
                    break;
                case "fill":
                case "fit":
                    this.needAlign = !0, this.align()
            }
        }, t.align = function () {
            if (this.needAlign) {
                var t = this.$container[0].offsetWidth,
                    e = this.$container[0].offsetHeight,
                    i = t / e;
                "fill" == this.type ? this.imgRatio < i ? (this.$img.width(t), this.$img.height(t * this.imgRatio2)) : (this.$img.height(e), this.$img.width(e * this.imgRatio)) : "fit" == this.type && (this.imgRatio < i ? (this.$img.height(e), this.$img.width(e * this.imgRatio)) : (this.$img.width(t), this.$img.height(t * this.imgRatio2))), this.setMargin()
            }
        }, t.setMargin = function () {
            var t = this.$container[0].offsetWidth,
                e = this.$container[0].offsetHeight;
            this.$img.css("margin-top", (e - this.$img[0].offsetHeight) / 2 + "px"), this.$img.css("margin-left", (t - this.$img[0].offsetWidth) / 2 + "px")
        }
    }(),
    /**
     * CSS pointer-events polyfill
     * Adds support for `pointer-events: none;` for browsers not supporting this property
     * Requires jQuery@~1.9
     *
     * @copyright Sebastian Langer 2016
     * @license MIT
     * @author Sebastian Langer <sl@scn.cx>
     */
    function ($) {
        var t = function (e) {
            this.options = $.extend({}, t.defaultOptions, e), this.isEnabled = !1, (this.options.forcePolyfill || !this.supportsPointerEvents()) && (this.registerEvents(), this.isEnabled = !0)
        };
        t.defaultOptions = {
            forcePolyfill: !1,
            selector: "*",
            listenOn: ["click", "dblclick", "mousedown", "mouseup"],
            pointerEventsNoneClass: null,
            pointerEventsAllClass: null,
            eventNamespace: "pointer-events-polyfill"
        }, t.prototype.registerEvents = function () {
            $(document).on(this.getEventNames(), this.options.selector, $.proxy(this.onElementClick, this))
        }, t.prototype.getEventNames = function () {
            var t = this.options.eventNamespace ? "." + this.options.eventNamespace : "";
            return this.options.listenOn.join(t + " ") + t
        }, t.prototype.supportsPointerEvents = function () {
            var t = document.createElement("a").style;
            return t.cssText = "pointer-events:auto", "auto" === t.pointerEvents
        }, t.prototype.isClickThrough = function (t) {
            var e = t.css("pointer-events");
            return 0 !== t.length && "all" !== e && !t.is(":root") && !t.hasClass(this.options.pointerEventsAllClass) && !("none" !== e && !t.hasClass(this.options.pointerEventsNoneClass) && !this.isClickThrough(t.parent()))
        }, t.prototype.onElementClick = function (t) {
            var e = $(t.target);
            if (!this.isClickThrough(e)) return !0;
            e.hide();
            var i = document.elementFromPoint(t.clientX, t.clientY);
            return t.target = i, $(i).trigger(t), "A" === i.tagName && (2 === t.which ? window.open(i.getAttribute("href"), "_blank") : i.click()), e.show(), !1
        }, t.prototype.destroy = function () {
            $(document).off(this.getEventNames()), this.isEnabled = !1
        }, window.pointerEventsPolyfill = function (e) {
            return new t(e)
        }
    }(jQuery),
    function () {
        "use strict";
        var t = {
                bouncing: !0,
                snapping: !1,
                snapsize: null,
                friction: .05,
                outFriction: .05,
                outAcceleration: .09,
                minValidDist: .3,
                snappingMinSpeed: 2,
                paging: !1,
                endless: !1,
                maxSpeed: 160
            },
            e = function (e, i, s) {
                if (null === i || null === e) throw new Error("Max and Min values are required.");
                this.options = s || {};
                for (var n in t) n in this.options || (this.options[n] = t[n]);
                this._max_value = i, this._min_value = e, this.value = e, this.end_loc = e, this.current_snap = this.getSnapNum(e), this.__extrStep = 0, this.__extraMove = 0, this.__animID = -1
            },
            i = e.prototype;
        i.changeTo = function (t, e, i, s, n) {
            if (this.stopped = !1, this._internalStop(), t = this._checkLimits(t), i = Math.abs(i || 0), this.options.snapping && (s = s || this.getSnapNum(t), !1 !== n && this._callsnapChange(s), this.current_snap = s), e) {
                this.animating = !0;
                var r = this,
                    o = ++r.__animID,
                    a = t - r.value,
                    l = 0,
                    h = t,
                    c = 1 - r.options.friction,
                    d = c + (i - 20) * c * 1.3 / r.options.maxSpeed,
                    u = function () {
                        if (o === r.__animID) {
                            var e = t - r.value;
                            if (!(Math.abs(e) > r.options.minValidDist && r.animating)) return r.animating && (r.value = t, r._callrenderer()), r.animating = !1, o !== r.__animID && (r.__animID = -1), void r._callonComplete("anim");
                            window.requestAnimationFrame(u), r.value = h - a * Math.exp(- ++l * d), r._callrenderer()
                        }
                    };
                return void u()
            }
            this.value = t, this._callrenderer()
        }, i.drag = function (t) {
            this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1), this.animating = !1, this._deceleration = !1, this.value -= t, !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += .6 * t) : this.value = this.value > this._max_value ? this._max_value : 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1), this._callrenderer()
        }, i.push = function (t) {
            if (this.stopped = !1, this.options.snapping && Math.abs(t) <= this.options.snappingMinSpeed) return void this.cancel();
            if (this.__speed = t, this.__startSpeed = t, this.end_loc = this._calculateEnd(), this.options.snapping) {
                var e = this.getSnapNum(this.value),
                    i = this.getSnapNum(this.end_loc);
                if (this.options.paging) return e = this.getSnapNum(this.drag_start_loc), this.__isout = !1, void(t > 0 ? this.gotoSnap(e + 1, !0, t) : this.gotoSnap(e - 1, !0, t));
                if (e === i) return void this.cancel();
                this._callsnapChange(i), this.current_snap = i
            }
            this.animating = !1, this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value, this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)), this._startDecelaration()
        }, i.bounce = function (t) {
            this.animating || (this.stopped = !1, this.animating = !1, this.__speed = t, this.__startSpeed = t, this.end_loc = this._calculateEnd(), this._startDecelaration())
        }, i.stop = function () {
            this.stopped = !0, this._internalStop()
        }, i.cancel = function () {
            this.start_drag = !0, this.__isout ? (this.__speed = 4e-4, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
        }, i.renderCallback = function (t, e) {
            this.__renderHook = {
                fun: t,
                ref: e
            }
        }, i.snappingCallback = function (t, e) {
            this.__snapHook = {
                fun: t,
                ref: e
            }
        }, i.snapCompleteCallback = function (t, e) {
            this.__compHook = {
                fun: t,
                ref: e
            }
        }, i.getSnapNum = function (t) {
            return Math.floor((t + this.options.snapsize / 2) / this.options.snapsize)
        }, i.nextSnap = function () {
            this._internalStop();
            var t = this.getSnapNum(this.value);
            !this.options.endless && (t + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(t + 1, !0)
        }, i.prevSnap = function () {
            this._internalStop();
            var t = this.getSnapNum(this.value);
            !this.options.endless && (t - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(t - 1, !0)
        }, i.gotoSnap = function (t, e, i) {
            this.changeTo(t * this.options.snapsize, e, i, t)
        }, i.destroy = function () {
            this._internalStop(), this.__renderHook = null, this.__snapHook = null, this.__compHook = null
        }, i._internalStop = function () {
            this.start_drag = !0, this.animating = !1, this._deceleration = !1, this.__extrStep = 0
        }, i._calculateExtraMove = function (t) {
            var e = t % this.options.snapsize;
            return e < this.options.snapsize / 2 ? -e : this.options.snapsize - e
        }, i._calculateEnd = function (t) {
            for (var e = this.__speed, i = this.value, s = 0; Math.abs(e) > this.options.minValidDist;) i += e, e *= this.options.friction, s++;
            return t ? s : i
        }, i._checkLimits = function (t) {
            return this.options.endless ? t : t < this._min_value ? this._min_value : t > this._max_value ? this._max_value : t
        }, i._callrenderer = function () {
            this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
        }, i._callsnapChange = function (t) {
            this.__snapHook && t !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, t, t - this.current_snap)
        }, i._callonComplete = function (t) {
            this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, t)
        }, i._computeDeceleration = function () {
            if (this.options.snapping && this.__needsSnap) {
                var t = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
                this.value += this.__speed + t - this.__extrStep, this.__extrStep = t
            } else this.value += this.__speed;
            if (this.__speed *= this.options.friction, this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)), this._callrenderer(), !this.options.endless && this.options.bouncing) {
                var e = 0;
                this.value < this._min_value ? e = this._min_value - this.value : this.value > this._max_value && (e = this._max_value - this.value), this.__isout = Math.abs(e) >= this.options.minValidDist, this.__isout && (this.__speed * e <= 0 ? this.__speed += e * this.options.outFriction : this.__speed = e * this.options.outAcceleration)
            }
        }, i._startDecelaration = function () {
            if (!this._deceleration) {
                this._deceleration = !0;
                var t = this,
                    e = function () {
                        t._deceleration && (t._computeDeceleration(), Math.abs(t.__speed) > t.options.minValidDist || t.__isout ? window.requestAnimationFrame(e) : (t._deceleration = !1, t.__isout = !1, t.value = t.__needsSnap && t.options.snapping && !t.options.paging ? t._checkLimits(t.end_loc + t.__extraMove) : Math.round(t.value), t._callrenderer(), t._callonComplete("decel")))
                    };
                e()
            }
        }, window.Controller = e
    }(),
    function (t, e, $) {
        t.MSLayerController = function (t) {
            this.slide = t, this.slider = t.slider, this.layers = [], this.layersCount = 0, this.preloadCount = 0, this.$layers = $("<div></div>").addClass("ms-slide-layers"), this.$staticLayers = $("<div></div>").addClass("ms-static-layers"), this.$fixedLayers = $("<div></div>").addClass("ms-fixed-layers"), this.$animLayers = $("<div></div>").addClass("ms-anim-layers")
        };
        var i = MSLayerController.prototype;
        i.addLayer = function (t) {
            switch (t.slide = this.slide, t.controller = this, t.$element.data("position")) {
                case "static":
                    this.hasStaticLayer = !0, t.$element.appendTo(this.$staticLayers);
                    break;
                case "fixed":
                    this.hasFixedLayer = !0, t.$element.appendTo(this.$fixedLayers);
                    break;
                default:
                    t.$element.appendTo(this.$animLayers)
            }
            t.create(), this.layers.push(t), this.layersCount++, t.parallax && (this.hasParallaxLayer = !0), t.needPreload && this.preloadCount++
        }, i.create = function () {
            this.slide.$element.append(this.$layers), this.$layers.append(this.$animLayers), this.hasStaticLayer && this.$layers.append(this.$staticLayers), "center" == this.slider.options.layersMode && (this.$layers.css("max-width", this.slider.options.width + "px"), this.hasFixedLayer && this.$fixedLayers.css("max-width", this.slider.options.width + "px"))
        }, i.loadLayers = function (t) {
            if (this._onReadyCallback = t, 0 === this.preloadCount) return void this._onlayersReady();
            for (var e = 0; e !== this.layersCount; ++e) this.layers[e].needPreload && this.layers[e].loadImage()
        }, i.prepareToShow = function () {
            this.hasParallaxLayer && this._enableParallaxEffect(), this.hasFixedLayer && this.$fixedLayers.prependTo(this.slide.view.$element)
        }, i.showLayers = function () {
            this.layersHideTween && this.layersHideTween.stop(!0), this.fixedLayersHideTween && this.fixedLayersHideTween.stop(!0), this._resetLayers(), this.$animLayers.css("opacity", "").css("display", ""), this.hasFixedLayer && this.$fixedLayers.css("opacity", "").css("display", ""), this.ready && (this._initLayers(), this._locateLayers(), this._startLayers())
        }, i.hideLayers = function () {
            if (this.slide.selected || this.slider.options.instantStartLayers) {
                var t = this;
                t.layersHideTween = CTween.animate(this.$animLayers, 500, {
                    opacity: 0
                }, {
                    complete: function () {
                        t._resetLayers()
                    }
                }), this.hasFixedLayer && (this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {
                    opacity: 0
                }, {
                    complete: function () {
                        t.$fixedLayers.detach()
                    }
                })), this.hasParallaxLayer && this._disableParallaxEffect()
            }
        }, i.animHideLayers = function () {
            if (this.ready)
                for (var t = 0; t !== this.layersCount; ++t) this.layers[t].hide()
        }, i.setSize = function (t, e, i) {
            if (this.ready && (this.slide.selected || this.hasStaticLayer) && (i && this._initLayers(!0), this._locateLayers(!this.slide.selected)), this.slider.options.autoHeight && this.updateHeight(), "center" == this.slider.options.layersMode) {
                var s = Math.max(0, (t - this.slider.options.width) / 2) + "px";
                this.$layers[0].style.left = s, this.$fixedLayers[0].style.left = s
            }
        }, i.updateHeight = function () {}, i._onlayersReady = function () {
            this.ready = !0, this.hasStaticLayer && !this.slide.isSleeping && this._initLayers(!1, !0), this._onReadyCallback.call(this.slide)
        }, i.onSlideSleep = function () {}, i.onSlideWakeup = function () {
            this.hasStaticLayer && this.ready && this._initLayers(!1, !0)
        }, i.getLayerById = function (t) {
            if (!t) return null;
            for (var e = 0; e < this.layersCount; ++e)
                if (this.layers[e].id === t) return this.layers[e];
            return null
        }, i.destroy = function () {
            this.slide.selected && this.hasParallaxLayer && this._disableParallaxEffect();
            for (var t = 0; t < this.layersCount; ++t) this.layers[t].$element.stop(!0).remove();
            this.$layers.remove(), this.$staticLayers.remove(), this.$fixedLayers.remove(), this.$animLayers.remove()
        }, i._startLayers = function () {
            for (var t = 0; t !== this.layersCount; ++t) {
                var e = this.layers[t];
                e.waitForAction || e.start()
            }
        }, i._initLayers = function (t, e) {
            if (!(this.init && !t || this.slider.init_safemode)) {
                this.init = !0 !== e;
                var i = 0;
                if (e && !this.staticsInit)
                    for (this.staticsInit = !0; i !== this.layersCount; ++i) this.layers[i].staticLayer && this.layers[i].init();
                else if (this.staticsInit && !t)
                    for (; i !== this.layersCount; ++i) this.layers[i].staticLayer || this.layers[i].init();
                else
                    for (; i !== this.layersCount; ++i) this.layers[i].init()
            }
        }, i._locateLayers = function (t) {
            var e = 0;
            if (t)
                for (; e !== this.layersCount; ++e) this.layers[e].staticLayer && this.layers[e].locate();
            else
                for (; e !== this.layersCount; ++e) this.layers[e].locate()
        }, i._resetLayers = function () {
            this.$animLayers.css("display", "none").css("opacity", 1);
            for (var t = 0; t !== this.layersCount; ++t) this.layers[t].reset()
        }, i._applyParallax = function (t, e, i) {
            for (var s = 0; s !== this.layersCount; ++s) null != this.layers[s].parallax && this.layers[s].moveParallax(t, e, i)
        }, i._enableParallaxEffect = function () {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, i._disableParallaxEffect = function () {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, i._resetParalax = function (t) {
            t.data.that._applyParallax(0, 0)
        }, i._mouseParallaxMove = function (t) {
            var e = t.data.that,
                i = e.slide.$element.offset(),
                s = e.slider;
            if ("mouse:y-only" !== s.options.parallaxMode) var n = t.pageX - i.left - e.slide.__width / 2;
            else var n = 0;
            if ("mouse:x-only" !== s.options.parallaxMode) var r = t.pageY - i.top - e.slide.__height / 2;
            else var r = 0;
            e._applyParallax(-n, -r)
        }, i._swipeParallaxMove = function () {
            var t = this.slide.position - this.slide.view.__contPos;
            "v" === this.slider.options.dir ? this._applyParallax(0, t, !0) : this._applyParallax(t, 0, !0)
        }
    }(window, document, jQuery),
    function ($, t) {
        "use strict";
        t.MSOverlayLayerController = function () {
            MSLayerController.apply(this, arguments)
        }, MSOverlayLayerController.extend(MSLayerController);
        var e = MSOverlayLayerController.prototype,
            i = MSLayerController.prototype;
        e.addLayer = function (t) {
            var e = t.$element.data("show-on"),
                s = t.$element.data("hide-on");
            s && (t.hideOnSlides = s.replace(/\s+/g, "").split(",")), e && (t.showOnSlides = e.replace(/\s+/g, "").split(",")), i.addLayer.apply(this, arguments)
        }, e.create = function () {
            i.create.apply(this, arguments), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.checkLayers.bind(this))
        }, e.checkLayers = function () {
            if (this.ready)
                for (var t = 0; t !== this.layersCount; ++t) {
                    var e = this.layers[t];
                    e.waitForAction || (this._checkForShow(e) ? e.start() : e.hide())
                }
        }, e._enableParallaxEffect = function () {
            this.slider.view.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, e._disableParallaxEffect = function () {
            this.slider.view.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, e._startLayers = function () {
            for (var t = 0; t !== this.layersCount; ++t) {
                var e = this.layers[t];
                this._checkForShow(e) && !e.waitForAction && e.start()
            }
        }, e._checkForShow = function (t) {
            var e = this.slider.api.currentSlide.id,
                i = t.hideOnSlides,
                s = t.showOnSlides;
            return s ? !!e && -1 !== s.indexOf(e) : !e || !i || i.length && -1 === i.indexOf(e)
        }
    }(jQuery, window, document),
    function ($, t) {
        "use strict";
        t.MSOverlayLayers = function (t) {
            this.slider = t
        };
        var e = MSOverlayLayers.prototype;
        e.setupLayerController = function () {
            this.layerController = new MSOverlayLayerController(this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.setSize.bind(this)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.setSize.bind(this)), this.setSize()
        }, e.setSize = function () {
            this.__width = this.$element.width(), this.__height = this.$element.height(), this.layerController.setSize(this.__width, this.__height)
        }, e.create = function () {
            this.layerController.create(), this.layerController.loadLayers(this._onLayersLoad), this.layerController.prepareToShow(), t.pointerEventsPolyfill && t.pointerEventsPolyfill({
                selector: "#" + this.slider.$element.attr("id") + " .ms-overlay-layers",
                forcePolyfill: !1
            })
        }, e.getHeight = function () {
            return this.slider.api.currentSlide.getHeight()
        }, e.destroy = function () {
            this.layerController.destroy()
        }, e._onLayersLoad = function () {
            this.ready = !0, this.selected = !0, this.layersLoaded = !0, this.setSize(), this.layerController.showLayers()
        }
    }(jQuery, window, document),
    function ($) {
        window.MSLayerEffects = {};
        var t, e = {
            opacity: 0
        };
        MSLayerEffects.setup = function () {
            if (!t) {
                t = !0;
                var i = MSLayerEffects,
                    s = window._jcsspfx + "Transform",
                    n = window._jcsspfx + "TransformOrigin",
                    r = $.browser.opera;
                _2d = window._css2d && window._cssanim && !r, i.defaultValues = {
                    left: 0,
                    top: 0,
                    opacity: isMSIE("<=9") ? 1 : "",
                    right: 0,
                    bottom: 0
                }, i.defaultValues[s] = "", i.rf = 1, i.presetEffParams = {
                    random: "30|300",
                    long: 300,
                    short: 30,
                    false: !1,
                    true: !0,
                    tl: "top left",
                    bl: "bottom left",
                    tr: "top right",
                    br: "bottom right",
                    rt: "top right",
                    lb: "bottom left",
                    lt: "top left",
                    rb: "bottom right",
                    t: "top",
                    b: "bottom",
                    r: "right",
                    l: "left",
                    c: "center"
                }, i.fade = function () {
                    return e
                }, i.left = _2d ? function (t, e) {
                    var n = !1 === e ? {} : {
                        opacity: 0
                    };
                    return n[s] = "translateX(" + -t * i.rf + "px)", n
                } : function (t, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s.left = -t * i.rf + "px", s
                }, i.right = _2d ? function (t, e) {
                    var n = !1 === e ? {} : {
                        opacity: 0
                    };
                    return n[s] = "translateX(" + t * i.rf + "px)", n
                } : function (t, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s.left = t * i.rf + "px", s
                }, i.top = _2d ? function (t, e) {
                    var n = !1 === e ? {} : {
                        opacity: 0
                    };
                    return n[s] = "translateY(" + -t * i.rf + "px)", n
                } : function (t, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s.top = -t * i.rf + "px", s
                }, i.bottom = _2d ? function (t, e) {
                    var n = !1 === e ? {} : {
                        opacity: 0
                    };
                    return n[s] = "translateY(" + t * i.rf + "px)", n
                } : function (t, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s.top = t * i.rf + "px", s
                }, i.from = _2d ? function (t, e, n) {
                    var r = !1 === n ? {} : {
                        opacity: 0
                    };
                    return r[s] = "translateX(" + t * i.rf + "px) translateY(" + e * i.rf + "px)", r
                } : function (t, e, s) {
                    var n = !1 === s ? {} : {
                        opacity: 0
                    };
                    return n.top = e * i.rf + "px", n.left = t * i.rf + "px", n
                }, i.rotate = _2d ? function (t, e) {
                    var i = {
                        opacity: 0
                    };
                    return i[s] = " rotate(" + t + "deg)", e && (i[n] = e), i
                } : function () {
                    return e
                }, i.rotateleft = _2d ? function (t, e, r, o) {
                    var a = i.left(e, o);
                    return a[s] += " rotate(" + t + "deg)", r && (a[n] = r), a
                } : function (t, e, s, n) {
                    return i.left(e, n)
                }, i.rotateright = _2d ? function (t, e, r, o) {
                    var a = i.right(e, o);
                    return a[s] += " rotate(" + t + "deg)", r && (a[n] = r), a
                } : function (t, e, s, n) {
                    return i.right(e, n)
                }, i.rotatetop = _2d ? function (t, e, r, o) {
                    var a = i.top(e, o);
                    return a[s] += " rotate(" + t + "deg)", r && (a[n] = r), a
                } : function (t, e, s, n) {
                    return i.top(e, n)
                }, i.rotatebottom = _2d ? function (t, e, r, o) {
                    var a = i.bottom(e, o);
                    return a[s] += " rotate(" + t + "deg)", r && (a[n] = r), a
                } : function (t, e, s, n) {
                    return i.bottom(e, n)
                }, i.rotatefrom = _2d ? function (t, e, r, o, a) {
                    var l = i.from(e, r, a);
                    return l[s] += " rotate(" + t + "deg)", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.from(e, s, r)
                }, i.skewleft = _2d ? function (t, e, n) {
                    var r = i.left(e, n);
                    return r[s] += " skewX(" + t + "deg)", r
                } : function (t, e, s) {
                    return i.left(e, s)
                }, i.skewright = _2d ? function (t, e, n) {
                    var r = i.right(e, n);
                    return r[s] += " skewX(" + -t + "deg)", r
                } : function (t, e, s) {
                    return i.right(e, s)
                }, i.skewtop = _2d ? function (t, e, n) {
                    var r = i.top(e, n);
                    return r[s] += " skewY(" + t + "deg)", r
                } : function (t, e, s) {
                    return i.top(e, s)
                }, i.skewbottom = _2d ? function (t, e, n) {
                    var r = i.bottom(e, n);
                    return r[s] += " skewY(" + -t + "deg)", r
                } : function (t, e, s) {
                    return i.bottom(e, s)
                }, i.scale = _2d ? function (t, e, i, r) {
                    var o = !1 === r ? {} : {
                        opacity: 0
                    };
                    return o[s] = " scaleX(" + t + ") scaleY(" + e + ")", i && (o[n] = i), o
                } : function (t, e, i, s) {
                    return !1 === s ? {} : {
                        opacity: 0
                    }
                }, i.scaleleft = _2d ? function (t, e, r, o, a) {
                    var l = i.left(r, a);
                    return l[s] = " scaleX(" + t + ") scaleY(" + e + ")", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.left(s, r)
                }, i.scaleright = _2d ? function (t, e, r, o, a) {
                    var l = i.right(r, a);
                    return l[s] = " scaleX(" + t + ") scaleY(" + e + ")", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.right(s, r)
                }, i.scaletop = _2d ? function (t, e, r, o, a) {
                    var l = i.top(r, a);
                    return l[s] = " scaleX(" + t + ") scaleY(" + e + ")", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.top(s, r)
                }, i.scalebottom = _2d ? function (t, e, r, o, a) {
                    var l = i.bottom(r, a);
                    return l[s] = " scaleX(" + t + ") scaleY(" + e + ")", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.bottom(s, r)
                }, i.scalefrom = _2d ? function (t, e, r, o, a, l) {
                    var h = i.from(r, o, l);
                    return h[s] += " scaleX(" + t + ") scaleY(" + e + ")", a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.from(s, n, o)
                }, i.rotatescale = _2d ? function (t, e, r, o, a) {
                    var l = i.scale(e, r, o, a);
                    return l[s] += " rotate(" + t + "deg)", o && (l[n] = o), l
                } : function (t, e, s, n, r) {
                    return i.scale(e, s, n, r)
                }, i.front = window._css3d ? function (t, e) {
                    var i = !1 === e ? {} : {
                        opacity: 0
                    };
                    return i[s] = "perspective(2000px) translate3d(0 , 0 ," + t + "px ) rotate(0.001deg)", i
                } : function () {
                    return e
                }, i.back = window._css3d ? function (t, e) {
                    var i = !1 === e ? {} : {
                        opacity: 0
                    };
                    return i[s] = "perspective(2000px) translate3d(0 , 0 ," + -t + "px ) rotate(0.001deg)", i
                } : function () {
                    return e
                }, i.rotatefront = window._css3d ? function (t, e, i, r) {
                    var o = !1 === r ? {} : {
                        opacity: 0
                    };
                    return o[s] = "perspective(2000px) translate3d(0 , 0 ," + e + "px ) rotate(" + (t || .001) + "deg)", i && (o[n] = i), o
                } : function () {
                    return e
                }, i.rotateback = window._css3d ? function (t, e, i, r) {
                    var o = !1 === r ? {} : {
                        opacity: 0
                    };
                    return o[s] = "perspective(2000px) translate3d(0 , 0 ," + -e + "px ) rotate(" + (t || .001) + "deg)", i && (o[n] = i), o
                } : function () {
                    return e
                }, i.rotate3dleft = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.left(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.left(n, o)
                }, i.rotate3dright = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.right(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.right(n, o)
                }, i.rotate3dtop = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.top(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.top(n, o)
                }, i.rotate3dbottom = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.bottom(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.bottom(n, o)
                }, i.rotate3dfront = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.front(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.front(n, o)
                }, i.rotate3dback = window._css3d ? function (t, e, r, o, a, l) {
                    var h = i.back(o, l);
                    return h[s] += (t ? " rotateX(" + t + "deg)" : " ") + (e ? " rotateY(" + e + "deg)" : "") + (r ? " rotateZ(" + r + "deg)" : ""), a && (h[n] = a), h
                } : function (t, e, s, n, r, o) {
                    return i.back(n, o)
                }, i.t = window._css3d ? function (t, e, r, o, a, l, h, c, d, u, p, f, m, v, g) {
                    var _ = !1 === t ? {} : {
                            opacity: 0
                        },
                        y = "perspective(2000px) ";
                    "n" !== e && (y += "translateX(" + e * i.rf + "px) "), "n" !== r && (y += "translateY(" + r * i.rf + "px) "), "n" !== o && (y += "translateZ(" + o * i.rf + "px) "), "n" !== a && (y += "rotate(" + a + "deg) "), "n" !== l && (y += "rotateX(" + l + "deg) "), "n" !== h && (y += "rotateY(" + h + "deg) "), "n" !== c && (y += "rotateZ(" + c + "deg) "), "n" !== p && (y += "skewX(" + p + "deg) "), "n" !== f && (y += "skewY(" + f + "deg) "), "n" !== d && (y += "scaleX(" + d + ") "), "n" !== u && (y += "scaleY(" + u + ")"), _[s] = y;
                    var w = "";
                    return w += "n" !== m ? m + "% " : "50% ", w += "n" !== v ? v + "% " : "50% ", w += "n" !== g ? g + "px" : "", _[n] = w, _
                } : function (t, e, s, n, r) {
                    var r = !1 === t ? {} : {
                        opacity: 0
                    };
                    return "n" !== e && (r.left = e * i.rf + "px"), "n" !== s && (r.top = s * i.rf + "px"), r
                }
            }
        }
    }(jQuery),
    function ($) {
        window.MSLayerElement = function () {
            this.start_anim = {
                name: "fade",
                duration: 1e3,
                ease: "linear",
                delay: 0
            }, this.end_anim = {
                duration: 1e3,
                ease: "linear"
            }, this.type = "text", this.resizable = !0, this.minWidth = -1, this.isVisible = !0, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "font-size", "line-height", "width", "left", "right", "top", "bottom"], this.baseStyle = {}
        };
        var t = MSLayerElement.prototype;
        t.setStartAnim = function (t) {
            $.extend(this.start_anim, t), $.extend(this.start_anim, this._parseEff(this.start_anim.name)), this.$element.css("visibility", "hidden")
        }, t.setEndAnim = function (t) {
            $.extend(this.end_anim, t)
        }, t.create = function () {
            if (this.$element.css("display", "none"), this.resizable = !1 !== this.$element.data("resize"), this.fixed = !0 === this.$element.data("fixed"), void 0 !== this.$element.data("widthlimit") && (this.minWidth = this.$element.data("widthlimit")), this.end_anim.name || (this.end_anim.name = this.start_anim.name), this.end_anim.time && (this.autoHide = !0), this.staticLayer = "static" === this.$element.data("position"), this.fixedLayer = "fixed" === this.$element.data("position"), this.layersCont = this.controller.$layers, this.staticLayer && this.$element.css("display", "").css("visibility", ""), void 0 !== this.$element.data("action")) {
                var t = this.slide.slider.slideController;
                this.$element.on(this.$element.data("action-event") || "click", function (e) {
                    t.runAction($(this).data("action")), e.preventDefault()
                }).addClass("ms-action-layer")
            }
            $.extend(this.end_anim, this._parseEff(this.end_anim.name)), this.slider = this.slide.slider, this.masked && (this.$mask = $("<div></div>").addClass("ms-layer-mask"), this.link ? (this.link.wrap(this.$mask), this.$mask = this.link.parent()) : (this.$element.wrap(this.$mask), this.$mask = this.$element.parent()), this.maskWidth && this.$mask.width(this.maskWidth), this.maskHeight && (this.$mask.height(this.maskHeight), -1 === this.__cssConfig.indexOf("height") && this.__cssConfig.push("height")));
            var e = this.layerOrigin = this.$element.data("origin");
            if (e) {
                var i = e.charAt(0),
                    s = e.charAt(1),
                    n = this.$element.data("offset-x"),
                    r = this.$element.data("offset-y"),
                    o = this.masked ? this.$mask[0] : this.$element[0];
                switch (void 0 === r && (r = 0), i) {
                    case "t":
                        o.style.top = r + "px";
                        break;
                    case "b":
                        o.style.bottom = r + "px";
                        break;
                    case "m":
                        o.style.top = r + "px", this.middleAlign = !0
                }
                switch (void 0 === n && (n = 0), s) {
                    case "l":
                        o.style.left = n + "px";
                        break;
                    case "r":
                        o.style.right = n + "px";
                        break;
                    case "c":
                        o.style.left = n + "px", this.centerAlign = !0
                }
            }
            this.parallax = this.$element.data("parallax"), null != this.parallax && (this.parallax /= 100, this.$parallaxElement = $("<div></div>").addClass("ms-parallax-layer"), this.masked ? (this.$mask.wrap(this.$parallaxElement), this.$parallaxElement = this.$mask.parent()) : this.link ? (this.link.wrap(this.$parallaxElement), this.$parallaxElement = this.link.parent()) : (this.$element.wrap(this.$parallaxElement), this.$parallaxElement = this.$element.parent()), this._lastParaX = 0, this._lastParaY = 0, this._paraX = 0, this._paraY = 0, this.alignedToBot = this.layerOrigin && -1 !== this.layerOrigin.indexOf("b"), this.alignedToBot && this.$parallaxElement.css("bottom", 0), this.parallaxRender = window._css3d ? this._parallaxCSS3DRenderer : window._css2d ? this._parallaxCSS2DRenderer : this._parallax2DRenderer, "swipe" !== this.slider.options.parallaxMode && averta.Ticker.add(this.parallaxRender, this)), $.removeDataAttrs(this.$element, ["data-src"])
        }, t.init = function () {
            this.initialized = !0;
            var t;
            this.$element.css("visibility", "");
            for (var e = 0, i = this.__cssConfig.length; i > e; e++) {
                var s = this.__cssConfig[e];
                if (this._isPosition(s) && this.masked) t = this.$mask.css(s);
                else if ("text" !== this.type || "width" !== s || this.masked || this.maskWidth) {
                    t = this.$element.css(s);
                    var n = "width" === s || "height" === s;
                    n && this.masked && (this.maskWidth && "width" === s ? t = this.maskWidth + "px" : this.maskHeight && "height" === s && (t = this.maskHeight + "px")), n && "0px" === t && (t = this.$element.data(s) + "px")
                } else t = this.$element[0].style.width;
                this.layerOrigin && ("top" === s && -1 === this.layerOrigin.indexOf("t") && -1 === this.layerOrigin.indexOf("m") || "bottom" === s && -1 === this.layerOrigin.indexOf("b") || "left" === s && -1 === this.layerOrigin.indexOf("l") && -1 === this.layerOrigin.indexOf("c") || "right" === s && -1 === this.layerOrigin.indexOf("r")) || "auto" != t && "" != t && "normal" != t && (this.baseStyle[s] = parseInt(t))
            }
            this.middleAlign && (this.baseHeight = this.$element.outerHeight(!1)), this.centerAlign && (this.baseWidth = this.$element.outerWidth(!1))
        }, t.locate = function () {
            if (this.slide.ready) {
                var t, e, i, s = parseFloat(this.layersCont.css("width")),
                    n = parseFloat(this.layersCont.css("height"));
                !this.staticLayer && "none" === this.$element.css("display") && this.isVisible && this.$element.css("display", "").css("visibility", "hidden"), this.staticLayer && this.$element.addClass("ms-hover-active"), t = this.resizeFactor = s / this.slide.slider.options.width;
                var r = this.masked ? this.$mask : this.$element;
                for (var o in this.baseStyle) e = this._isPosition(o), i = "width" === o || "height" === o, t = this.fixed && e ? 1 : this.resizeFactor, (this.resizable || e) && ("top" === o && this.middleAlign ? (r[0].style.top = "0px", this.baseHeight = r.outerHeight(!1), r[0].style.top = this.baseStyle.top * t + (n - this.baseHeight) / 2 + "px") : "left" === o && this.centerAlign ? (r[0].style.left = "0px", this.baseWidth = r.outerWidth(!1), r[0].style.left = this.baseStyle.left * t + (s - this.baseWidth) / 2 + "px") : e && this.masked ? r[0].style[o] = this.baseStyle[o] * t + "px" : i && ("width" === o && this.maskWidth || "height" === o && this.maskHeight) ? r[0].style[o] = this.baseStyle[o] * t + "px" : this.$element.css(o, this.baseStyle[o] * t + "px"));
                this.visible(this.minWidth < s)
            }
        }, t.start = function () {
            if (!this.isShowing && !this.staticLayer) {
                this.isShowing = !0, this.$element.removeClass("ms-hover-active");
                var t, e;
                MSLayerEffects.rf = this.resizeFactor;
                var i = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)),
                    s = {};
                for (t in i) this._checkPosKey(t, i) || (null != MSLayerEffects.defaultValues[t] && (s[t] = MSLayerEffects.defaultValues[t]), t in this.baseStyle && (e = this.baseStyle[t], this.middleAlign && "top" === t && (e += (parseInt(this.layersCont.height()) - this.$element.outerHeight(!1)) / 2), this.centerAlign && "left" === t && (e += (parseInt(this.layersCont.width()) - this.$element.outerWidth(!1)) / 2), i[t] = e + parseFloat(i[t]) + "px", s[t] = e + "px"), this.$element.css(t, i[t]));
                var n = this;
                clearTimeout(this.to), clearTimeout(this.clHide), this.to = setTimeout(function () {
                    n.$element.css("visibility", ""), n._playAnimation(n.start_anim, s)
                }, n.start_anim.delay || .01), this.clTo = setTimeout(function () {
                    n.show_cl = !0, n.$element.addClass("ms-hover-active")
                }, (this.start_anim.delay || .01) + this.start_anim.duration + 1), this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function () {
                    n.hide()
                }, n.end_anim.time))
            }
        }, t.hide = function () {
            if (!this.staticLayer) {
                this.$element.removeClass("ms-hover-active"), this.isShowing = !1;
                var t = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
                for (key in t) this._checkPosKey(key, t) || (key === window._jcsspfx + "TransformOrigin" && this.$element.css(key, t[key]), key in this.baseStyle && (t[key] = this.baseStyle[key] + parseFloat(t[key]) + "px"));
                this._playAnimation(this.end_anim, t), clearTimeout(this.clHide), 0 === t.opacity && (this.clHide = setTimeout(function () {
                    this.$element.css("visibility", "hidden")
                }.bind(this), this.end_anim.duration + 1)), clearTimeout(this.to), clearTimeout(this.hto), clearTimeout(this.clTo)
            }
        }, t.reset = function () {
            this.staticLayer || (this.isShowing = !1, this.$element[0].style.display = "none", this.$element.css("opacity", ""), this.$element[0].style.transitionDuration = "", this.show_tween && this.show_tween.stop(!0), clearTimeout(this.to), clearTimeout(this.hto))
        }, t.destroy = function () {
            this.reset(), this.$element.remove()
        }, t.visible = function (t) {
            this.isVisible != t && (this.isVisible = t, this.$element.css("display", t ? "" : "none"))
        }, t.moveParallax = function (t, e, i) {
            this._paraX = t, this._paraY = e, i && (this._lastParaX = t, this._lastParaY = e, this.parallaxRender())
        }, t._playAnimation = function (t, e) {
            var i = {};
            t.ease && (i.ease = t.ease), i.transProperty = window._csspfx + "transform,opacity", this.show_tween && this.show_tween.stop(!0), this.show_tween = CTween.animate(this.$element, t.duration, e, i)
        }, t._randomParam = function (t) {
            var e = Number(t.slice(0, t.indexOf("|"))),
                i = Number(t.slice(t.indexOf("|") + 1));
            return e + Math.random() * (i - e)
        }, t._parseEff = function (t) {
            var e = [];
            if (-1 !== t.indexOf("(")) {
                var i, s = t.slice(0, t.indexOf("(")).toLowerCase();
                e = t.slice(t.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), t = s;
                for (var n = 0, r = e.length; r > n; ++n) i = e[n], i in MSLayerEffects.presetEffParams && (i = MSLayerEffects.presetEffParams[i]), e[n] = i
            }
            return {
                eff_name: t,
                eff_params: e
            }
        }, t._parseEffParams = function (t) {
            for (var e = [], i = 0, s = t.length; s > i; ++i) {
                var n = t[i];
                "string" == typeof n && -1 !== n.indexOf("|") && (n = this._randomParam(n)), e[i] = n
            }
            return e
        }, t._checkPosKey = function (t, e) {
            return "left" === t && !(t in this.baseStyle) && "right" in this.baseStyle ? (e.right = -parseInt(e.left) + "px", delete e.left, !0) : "top" === t && !(t in this.baseStyle) && "bottom" in this.baseStyle && (e.bottom = -parseInt(e.top) + "px", delete e.top, !0)
        }, t._isPosition = function (t) {
            return "top" === t || "left" === t || "bottom" === t || "right" === t
        }, t._parallaxCalc = function () {
            var t = this._paraX - this._lastParaX,
                e = this._paraY - this._lastParaY;
            this._lastParaX += t / 12, this._lastParaY += e / 12, Math.abs(t) < .019 && (this._lastParaX = this._paraX), Math.abs(e) < .019 && (this._lastParaY = this._paraY)
        }, t._parallaxCSS3DRenderer = function () {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px) translateZ(0)"
        }, t._parallaxCSS2DRenderer = function () {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px)"
        }, t._parallax2DRenderer = function () {
            this._parallaxCalc(),
                this.alignedToBot ? this.$parallaxElement[0].style.bottom = this._lastParaY * this.parallax + "px" : this.$parallaxElement[0].style.top = this._lastParaY * this.parallax + "px", this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + "px"
        }
    }(jQuery),
    function ($) {
        window.MSImageLayerElement = function () {
            MSLayerElement.call(this), this.needPreload = !0, this.__cssConfig = ["width", "height", "margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.type = "image"
        }, MSImageLayerElement.extend(MSLayerElement);
        var t = MSImageLayerElement.prototype,
            e = MSLayerElement.prototype;
        t.create = function () {
            if (this.link) {
                var t = this.$element.parent();
                t.append(this.link), this.link.append(this.$element), this.link.removeClass("ms-layer"), this.$element.addClass("ms-layer"), t = null
            }
            if (e.create.call(this), void 0 != this.$element.data("src")) this.img_src = this.$element.data("src"), this.$element.removeAttr("data-src");
            else {
                var i = this;
                this.$element.on("load", function () {
                    0 === --i.controller.preloadCount && i.controller._onlayersReady()
                }).each($.jqLoadFix)
            }
            $.browser.msie && this.$element.on("dragstart", function (t) {
                t.preventDefault()
            })
        }, t.loadImage = function () {
            var t = this;
            this.$element.preloadImg(this.img_src, function () {
                0 === --t.controller.preloadCount && t.controller._onlayersReady()
            })
        }
    }(jQuery),
    function ($) {
        window.MSVideoLayerElement = function () {
            MSLayerElement.call(this), this.__cssConfig.push("height"), this.type = "video"
        }, MSVideoLayerElement.extend(MSLayerElement);
        var t = MSVideoLayerElement.prototype,
            e = MSLayerElement.prototype;
        t.__playVideo = function () {
            this.img && CTween.fadeOut(this.img, 500, 2), CTween.fadeOut(this.video_btn, 500, 2), this.video_frame.attr("src", "about:blank").css("display", "block"), -1 == this.video_url.indexOf("?") && (this.video_url += "?"), this.video_frame.attr("src", this.video_url + "&autoplay=1")
        }, t.start = function () {
            e.start.call(this), this.$element.data("autoplay") && this.__playVideo()
        }, t.reset = function () {
            return e.reset.call(this), (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1).css("display", "block"), this.video_frame.attr("src", "about:blank").css("display", "none")), this.needPreload ? void this.img.css("opacity", 1).css("display", "block") : void this.video_frame.attr("src", this.video_url)
        }, t.create = function () {
            e.create.call(this), this.video_frame = this.$element.find("iframe").css({
                width: "100%",
                height: "100%"
            }), this.video_url = this.video_frame.attr("src");
            var t = 0 != this.$element.has("img").length;
            if (t || this.$element.data("btn")) {
                this.video_frame.attr("src", "about:blank").css("display", "none");
                var i = this;
                if (this.video_btn = $("<div></div>").appendTo(this.$element).addClass("ms-video-btn").click(function () {
                        i.__playVideo()
                    }), t) {
                    if (this.needPreload = !0, this.img = this.$element.find("img:first").addClass("ms-video-img"), void 0 !== this.img.data("src")) this.img_src = this.img.data("src"), this.img.removeAttr("data-src");
                    else {
                        var i = this;
                        this.img.attr("src", this.img_src).on("load", function () {
                            0 === --i.controller.preloadCount && i.controller._onlayersReady()
                        }).each($.jqLoadFix)
                    }
                    $.browser.msie && this.img.on("dragstart", function (t) {
                        t.preventDefault()
                    })
                }
            }
        }, t.loadImage = function () {
            var t = this;
            this.img.preloadImg(this.img_src, function () {
                0 === --t.controller.preloadCount && t.controller._onlayersReady()
            })
        }
    }(jQuery),
    function ($) {
        "use strict";
        window.MSHotspotLayer = function () {
            MSLayerElement.call(this), this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.ease = "Expo", this.hide_start = !0, this.type = "hotspot"
        }, MSHotspotLayer.extend(MSLayerElement);
        var t = MSHotspotLayer.prototype,
            e = MSLayerElement.prototype;
        t._showTT = function () {
            this.show_cl && (clearTimeout(this.hto), this._tween && this._tween.stop(!0), this.hide_start && (this.align = this._orgAlign, this._locateTT(), this.tt.css({
                display: "block"
            }), this._tween = CTween.animate(this.tt, 900, this.to, {
                ease: "easeOut" + this.ease
            }), this.hide_start = !1))
        }, t._hideTT = function () {
            if (this.show_cl) {
                this._tween && this._tween.stop(!0);
                var t = this;
                clearTimeout(this.hto), this.hto = setTimeout(function () {
                    t.hide_start = !0, t._tween = CTween.animate(t.tt, 900, t.from, {
                        ease: "easeOut" + t.ease,
                        complete: function () {
                            t.tt.css("display", "none")
                        }
                    })
                }, 200)
            }
        }, t._updateClassName = function (t) {
            this._lastClass && this.tt.removeClass(this._lastClass), this.tt.addClass(t), this._lastClass = t
        }, t._alignPolicy = function () {
            var t = (this.tt.outerHeight(!1), Math.max(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")))),
                e = window.innerWidth;
            switch (window.innerHeight, this.align) {
                case "top":
                    if (this.base_t < 0) return "bottom";
                    break;
                case "right":
                    if (this.base_l + t > e || this.base_t < 0) return "bottom";
                    break;
                case "left":
                    if (this.base_l < 0 || this.base_t < 0) return "bottom"
            }
            return null
        }, t._locateTT = function () {
            var t = this.$element.offset(),
                e = this.slide.slider.$element.offset(),
                i = 50,
                s = 15;
            this.pos_x = t.left - e.left - this.slide.slider.$element.scrollLeft(), this.pos_y = t.top - e.top - this.slide.slider.$element.scrollTop(), this.from = {
                opacity: 0
            }, this.to = {
                opacity: 1
            }, this._updateClassName("ms-tooltip-" + this.align), this.tt_arrow.css("margin-left", "");
            var n = 15,
                r = 15;
            switch (this.align) {
                case "top":
                    var o = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y - this.tt.outerHeight(!1) - 15 - 15, this.base_l = this.pos_x - o / 2, this.base_l + o > window.innerWidth && (this.tt_arrow.css("margin-left", -7.5 + this.base_l + o - window.innerWidth + "px"), this.base_l = window.innerWidth - o), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -7.5 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - 50 + "px", this.to.top = this.base_t + "px");
                    break;
                case "bottom":
                    var o = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y + 15 + 15, this.base_l = this.pos_x - o / 2, this.base_l + o > window.innerWidth && (this.tt_arrow.css("margin-left", -7.5 + this.base_l + o - window.innerWidth + "px"), this.base_l = window.innerWidth - o), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -7.5 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + 50 + "px", this.to.top = this.base_t + "px");
                    break;
                case "right":
                    this.base_l = this.pos_x + 15 + 15, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + 50 + "px", this.to.left = this.base_l + "px");
                    break;
                case "left":
                    this.base_l = this.pos_x - 15 - this.tt.outerWidth(!1) - 15, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - 50 + "px", this.to.left = this.base_l + "px")
            }
            var a = this._alignPolicy();
            return null !== a ? (this.align = a, void this._locateTT()) : (this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"), void this.tt.css(this.from))
        }, t.start = function () {
            e.start.call(this), this.tt.appendTo(this.slide.slider.$element), this.tt.css("display", "none")
        }, t.reset = function () {
            e.reset.call(this), this.tt.detach()
        }, t.create = function () {
            var t = this;
            this._orgAlign = this.align = void 0 !== this.$element.data("align") ? this.$element.data("align") : "top", this.data = this.$element.html(), this.$element.html("").on("mouseenter", function () {
                t._showTT()
            }).on("mouseleave", function () {
                t._hideTT()
            }), this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>').addClass("ms-tooltip-point").appendTo(this.$element);
            var i = this.$element.data("link"),
                s = this.$element.data("target");
            i && this.point.on("click", function () {
                window.open(i, s || "_self")
            }), this.tt = $("<div></div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0), void 0 !== this.$element.data("width") && this.tt.css("width", this.$element.data("width")).css("max-width", this.$element.data("width")), this.tt_arrow = $("<div></div>").addClass("ms-tooltip-arrow").appendTo(this.tt), this._updateClassName("ms-tooltip-" + this.align), this.ttcont = $("<div></div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt), !0 === this.$element.data("stay-hover") && this.tt.on("mouseenter", function () {
                t.hide_start || (clearTimeout(t.hto), t._tween.stop(!0), t._showTT())
            }).on("mouseleave", function () {
                t._hideTT()
            }), e.create.call(this)
        }
    }(jQuery),
    function () {
        window.MSButtonLayer = function () {
            MSLayerElement.call(this), this.type = "button"
        }, MSButtonLayer.extend(MSLayerElement);
        var t = MSButtonLayer.prototype,
            e = MSLayerElement.prototype,
            i = ["top", "left", "bottom", "right"];
        t.create = function () {
            e.create.call(this), this.$element.wrap('<div class="ms-btn-container"></div>').css("position", "relative"), this.$container = this.$element.parent()
        }, t.locate = function () {
            e.locate.call(this);
            for (var t, s, n = 0; 4 > n; n++)(t = i[n]) in this.baseStyle && (s = this.$element.css(t), this.$element.css(t, ""), this.$container.css(t, s));
            this.$container.width(this.$element.outerWidth(!0)).height(this.$element.outerHeight(!0))
        }
    }(jQuery), window.MSSliderEvent = function (t) {
        this.type = t
    }, MSSliderEvent.CHANGE_START = "ms_changestart", MSSliderEvent.CHANGE_END = "ms_changeend", MSSliderEvent.WAITING = "ms_waiting", MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange", MSSliderEvent.VIDEO_PLAY = "ms_videoPlay", MSSliderEvent.VIDEO_CLOSE = "ms_videoclose", MSSliderEvent.INIT = "ms_init", MSSliderEvent.HARD_UPDATE = "ms_hard_update", MSSliderEvent.RESIZE = "ms_resize", MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc", MSSliderEvent.DESTROY = "ms_destroy",
    function (t, e, $) {
        "use strict";
        t.MSSlide = function () {
            this.$element = null, this.$loading = $("<div></div>").addClass("ms-slide-loading"), this.view = null, this.index = -1, this.__width = 0, this.__height = 0, this.fillMode = "fill", this.selected = !1, this.pselected = !1, this.autoAppend = !0, this.isSleeping = !0, this.moz = $.browser.mozilla
        };
        var i = MSSlide.prototype;
        i.onSwipeStart = function () {
            this.link && (this.linkdis = !0), this.video && (this.videodis = !0)
        }, i.onSwipeMove = function (t) {
            var e = Math.max(Math.abs(t.data.distanceX), Math.abs(t.data.distanceY));
            this.swipeMoved = e > 4
        }, i.onSwipeCancel = function () {
            return this.swipeMoved ? void(this.swipeMoved = !1) : (this.link && (this.linkdis = !1), void(this.video && (this.videodis = !1)))
        }, i.setupLayerController = function () {
            this.hasLayers = !0, this.layerController = new MSLayerController(this)
        }, i.assetsLoaded = function () {
            this.ready = !0, this.slider.api._startTimer(), (this.selected || this.pselected && this.slider.options.instantStartLayers) && (this.hasLayers && this.layerController.showLayers(), this.vinit && (this.bgvideo.play(), this.autoPauseBgVid || (this.bgvideo.currentTime = 0))), this.isSleeping || this.setupBG(), CTween.fadeOut(this.$loading, 300, !0), (0 === this.slider.options.preload || "all" === this.slider.options.preload) && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : "all" === this.slider.options.preload && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
        }, i.setBG = function (t) {
            this.hasBG = !0;
            var e = this;
            this.$imgcont = $("<div></div>").addClass("ms-slide-bgcont"), this.$element.append(this.$loading).append(this.$imgcont), this.$bg_img = $(t).css("visibility", "hidden"), this.$imgcont.append(this.$bg_img), this.bgAligner = new MSAligner(e.fillMode, e.$imgcont, e.$bg_img), this.bgAligner.widthOnly = this.slider.options.autoHeight, e.slider.options.autoHeight && (e.pselected || e.selected) && e.slider.setHeight(e.slider.options.height), void 0 !== this.$bg_img.data("src") ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function (t) {
                e._onBGLoad(t)
            }).each($.jqLoadFix)
        }, i.setupBG = function () {
            !this.initBG && this.bgLoaded && (this.initBG = !0, this.$bg_img.css("visibility", ""), this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(), this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
        }, i.loadImages = function () {
            if (!this.ls) {
                if (this.ls = !0, this.bgvideo && this.bgvideo.load(), this.hasBG && this.bg_src) {
                    var t = this;
                    this.$bg_img.preloadImg(this.bg_src, function (e) {
                        t._onBGLoad(e)
                    })
                }
                this.hasLayers && this.layerController.loadLayers(this._onLayersLoad), this.hasBG || this.hasLayers || this.assetsLoaded()
            }
        }, i._onLayersLoad = function () {
            this.layersLoaded = !0, (!this.hasBG || this.bgLoaded) && this.assetsLoaded()
        }, i._onBGLoad = function (t) {
            this.bgNatrualWidth = t.width, this.bgNatrualHeight = t.height, this.bgLoaded = !0, $.browser.msie && this.$bg_img.on("dragstart", function (t) {
                t.preventDefault()
            }), (!this.hasLayers || this.layerController.ready) && this.assetsLoaded()
        }, i.setBGVideo = function (e) {
            if (e[0].play) {
                if (t._mobile && !this.slider.options.mobileBGVideo) return void e.remove();
                this.bgvideo = e[0];
                var i = this;
                e.addClass("ms-slide-bgvideo"), !1 !== e.data("loop") && this.bgvideo.addEventListener("ended", function () {
                    i.bgvideo.play()
                }), !1 !== e.data("mute") && (this.bgvideo.muted = !0), !0 === e.data("autopause") && (this.autoPauseBgVid = !0), this.bgvideo_fillmode = e.data("fill-mode") || "fill", "none" !== this.bgvideo_fillmode && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode, this.$element, e), this.bgvideo.addEventListener("loadedmetadata", function () {
                    i.vinit || (i.vinit = !0, i.video_aspect = i.bgVideoAligner.baseHeight / i.bgVideoAligner.baseWidth, i.bgVideoAligner.init(i.bgvideo.videoWidth, i.bgvideo.videoHeight), i._alignBGVideo(), CTween.fadeIn($(i.bgvideo), 200), i.selected && i.bgvideo.play())
                })), e.css("opacity", 0), this.$bgvideocont = $("<div></div>").addClass("ms-slide-bgvideocont").append(e), this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
            }
        }, i._alignBGVideo = function () {
            this.bgvideo_fillmode && "none" !== this.bgvideo_fillmode && this.bgVideoAligner.align()
        }, i.setSize = function (t, e, i) {
            this.__width = t, this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, e = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(e)) : (this.ratio = t / this.slider.options.width, e = this.slider.options.height * this.ratio)), this.__height = e, this.$element.width(t).height(e), this.hasBG && this.bgLoaded && this.bgAligner.align(), this._alignBGVideo(), this.hasLayers && this.layerController.setSize(t, e, i)
        }, i.getHeight = function () {
            return this.hasBG && this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
        }, i.__playVideo = function () {
            this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.moz && this.view.$element.css("perspective", "none"), this.view.swipeControl && this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
        }, i.__closeVideo = function () {
            if (this.vplayed) {
                this.vplayed = !1, this.roc && this.slider.api.resume();
                var t = this;
                CTween.fadeIn(this.vpbtn, 500), CTween.animate(this.vcbtn, 500, {
                    opacity: 0
                }, {
                    complete: function () {
                        t.vcbtn.css("display", "none")
                    }
                }), CTween.animate(this.vframe, 500, {
                    opacity: 0
                }, {
                    complete: function () {
                        t.vframe.attr("src", "about:blank").css("display", "none")
                    }
                }), this.moz && this.view.$element.css("perspective", ""), this.view.swipeControl && this.view.swipeControl.enable(), this.view.$element.removeClass("ms-def-cursor"), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
            }
        }, i.create = function () {
            var e = this;
            this.hasLayers && this.layerController.create(), this.link && this.link.addClass("ms-slide-link").html("").click(function (t) {
                e.linkdis && t.preventDefault()
            }), this.video && (-1 === this.video.indexOf("?") && (this.video += "?"), this.vframe = $("<iframe></iframe>").addClass("ms-slide-video").css({
                width: "100%",
                height: "100%",
                display: "none"
            }).attr("src", "about:blank").attr("allowfullscreen", "true").appendTo(this.$element), this.vpbtn = $("<div></div>").addClass("ms-slide-vpbtn").click(function () {
                e.__playVideo()
            }).appendTo(this.$element), this.vcbtn = $("<div></div>").addClass("ms-slide-vcbtn").click(function () {
                e.__closeVideo()
            }).appendTo(this.$element).css("display", "none"), t._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())), !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"), ("center" === this.fillMode || "stretch" === this.fillMode) && (this.fillMode = "fill")), this.slider.options.autoHeight && this.$element.addClass("ms-slide-auto-height"), this.sleep(!0)
        }, i.destroy = function () {
            this.hasLayers && (this.layerController.destroy(), this.layerController = null), this.$element.remove(), this.$element = null
        }, i.prepareToSelect = function () {
            this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this), this.linkdis = !1, this.swipeMoved = !1), this.loadImages(), this.hasLayers && this.layerController.prepareToShow(), this.ready && (this.bgvideo && this.bgvideo.play(), this.hasLayers && this.slider.options.instantStartLayers && this.layerController.showLayers()), this.moz && this.$element.css("margin-top", ""))
        }, i.select = function () {
            this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.hasLayers && (this.slider.options.autoHeight && this.layerController.updateHeight(), this.slider.options.instantStartLayers || this.layerController.showLayers()), this.ready && this.bgvideo && this.bgvideo.play(), this.videoAutoPlay && (this.videodis = !1, this.vpbtn.trigger("click")))
        }, i.unselect = function () {
            this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.bgvideo && (this.bgvideo.pause(), !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)), this.hasLayers && this.layerController.hideLayers(), this.selected && (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.video && this.vplayed && (this.__closeVideo(), this.roc = !1))
        }, i.sleep = function (t) {
            (!this.isSleeping || t) && (this.isSleeping = !0, this.autoAppend && this.$element.detach(), this.hasLayers && this.layerController.onSlideSleep())
        }, i.wakeup = function () {
            this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setupBG(), this.hasBG && this.bgAligner.align(), this.hasLayers && this.layerController.onSlideWakeup())
        }
    }(window, document, jQuery),
    function ($) {
        "use strict";
        var t = {};
        window.MSSlideController = function (t) {
            this._delayProgress = 0, this._timer = new averta.Timer(100), this._timer.onTimer = this.onTimer, this._timer.refrence = this, this.currentSlide = null, this.slider = t, this.so = t.options, averta.EventDispatcher.call(this)
        }, MSSlideController.registerView = function (e, i) {
            if (e in t) throw new Error(e + ", is already registered.");
            t[e] = i
        }, MSSlideController.SliderControlList = {}, MSSlideController.registerControl = function (t, e) {
            if (t in MSSlideController.SliderControlList) throw new Error(t + ", is already registered.");
            MSSlideController.SliderControlList[t] = e
        };
        var e = MSSlideController.prototype;
        e.setupView = function () {
            var e = this;
            this.resize_listener = function () {
                e.__resize()
            };
            var i = {
                spacing: this.so.space,
                mouseSwipe: this.so.mouse,
                loop: this.so.loop,
                autoHeight: this.so.autoHeight,
                swipe: this.so.swipe,
                speed: this.so.speed,
                dir: this.so.dir,
                viewNum: this.so.inView,
                critMargin: this.so.critMargin
            };
            this.so.viewOptions && $.extend(i, this.so.viewOptions), this.so.autoHeight && (this.so.heightLimit = !1);
            var s = t[this.slider.options.view] || MSBasicView;
            if (!s._3dreq || window._css3d && !$.browser.msie || (s = s._fallback || MSBasicView), this.view = new s(i), this.so.overPause) {
                var e = this;
                this.slider.$element.mouseenter(function () {
                    e.is_over = !0, e._stopTimer()
                }).mouseleave(function () {
                    e.is_over = !1, e._startTimer()
                })
            }
        }, e.onChangeStart = function () {
            this.change_started = !0, this.currentSlide && this.currentSlide.unselect(), this.currentSlide = this.view.currentSlide, this.currentSlide.prepareToSelect(), this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()), this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()), this.so.deepLink && this.__updateWindowHash(), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
        }, e.onChangeEnd = function () {
            if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), this.so.preload > 1) {
                var t, e, i, s = this.so.preload - 1;
                for (e = 1; s >= e; ++e) {
                    if ((t = this.view.index + e) >= this.view.slideList.length) {
                        if (!this.so.loop) {
                            e = s;
                            continue
                        }
                        t -= this.view.slideList.length
                    }(i = this.view.slideList[t]) && i.loadImages()
                }
                for (s > this.view.slideList.length / 2 && (s = Math.floor(this.view.slideList.length / 2)), e = 1; s >= e; ++e) {
                    if (0 > (t = this.view.index - e)) {
                        if (!this.so.loop) {
                            e = s;
                            continue
                        }
                        t = this.view.slideList.length + t
                    }(i = this.view.slideList[t]) && i.loadImages()
                }
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
        }, e.onSwipeStart = function () {
            this.skipTimer()
        }, e.skipTimer = function () {
            this._timer.reset(), this._delayProgress = 0, this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, e.onTimer = function () {
            if (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay && (this.skipTimer(), this.view.next(), this.hideCalled = !1), this._delayProgress = this._timer.getTime() / (10 * this.view.currentSlide.delay), this.so.hideLayers && !this.hideCalled && 1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300) {
                var t = this.view.currentSlide;
                t.hasLayers && t.layerController.animHideLayers(), this.hideCalled = !0
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, e._stopTimer = function () {
            this._timer && this._timer.stop()
        }, e._startTimer = function () {
            this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
        }, e.__appendSlides = function () {
            var t, e, i = 0,
                s = this.view.slideList.length - 1;
            for (i; s > i; ++i) t = this.view.slideList[i], t.detached || (t.$element.detach(), t.detached = !0);
            for (this.view.appendSlide(this.view.slideList[this.view.index]), s = 3, i = 1; s >= i; ++i) {
                if ((e = this.view.index + i) >= this.view.slideList.length) {
                    if (!this.so.loop) {
                        i = s;
                        continue
                    }
                    e -= this.view.slideList.length
                }
                t = this.view.slideList[e], t.detached = !1, this.view.appendSlide(t)
            }
            for (s > this.view.slideList.length / 2 && (s = Math.floor(this.view.slideList.length / 2)), i = 1; s >= i; ++i) {
                if (0 > (e = this.view.index - i)) {
                    if (!this.so.loop) {
                        i = s;
                        continue
                    }
                    e = this.view.slideList.length + e
                }
                t = this.view.slideList[e], t.detached = !1, this.view.appendSlide(t)
            }
        }, e.__resize = function (t) {
            this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.so.fullheight ? (this.so.heightLimit = !1, this.so.autoHeight = !1, this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect, this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, t), this.view.setSize(this.width, this.currentSlide.getHeight(), t)) : this.view.setSize(this.width, Math.max(this.so.minHeight, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height), t), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
        }, e.__dispatchInit = function () {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
        }, e.__updateWindowHash = function () {
            var t = window.location.hash,
                e = this.so.deepLink,
                i = this.so.deepLinkType,
                s = "path" === i ? "/" : "=",
                n = "path" === i ? "/" : "&",
                r = e + s + (this.view.index + 1),
                o = new RegExp(e + s + "[0-9]+", "g");
            window.location.hash = "" === t ? n + r : o.test(t) ? t.replace(o, r) : t + n + r
        }, e.__curentSlideInHash = function () {
            var t = window.location.hash,
                e = this.so.deepLink,
                i = this.so.deepLinkType,
                s = "path" === i ? "/" : "=",
                n = new RegExp(e + s + "[0-9]+", "g");
            if (n.test(t)) {
                var r = Number(t.match(n)[0].match(/[0-9]+/g).pop());
                if (!isNaN(r)) return r - 1
            }
            return -1
        }, e.__onHashChanged = function () {
            var t = this.__curentSlideInHash(); - 1 !== t && this.gotoSlide(t)
        }, e.__findLayerById = function (t) {
            if (!this.currentSlide) return null;
            var e;
            return this.currentSlide.layerController && (e = this.currentSlide.layerController.getLayerById(t)), !e && this.slider.overlayLayers ? this.slider.overlayLayers.layerController.getLayerById(t) : e
        }, e.setup = function () {
            this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slideList[this.so.start - 1], this.__resize();
            var t = this.__curentSlideInHash(),
                e = -1 !== t ? t : this.so.start - 1;
            if (this.view.create(e), 0 === this.so.preload && this.view.slideList[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
                var i = this,
                    s = (new Date).getTime();
                this.wheellistener = function (t) {
                    var e = window.event || t.orginalEvent || t;
                    e.preventDefault();
                    var n = (new Date).getTime();
                    if (!(400 > n - s)) {
                        s = n;
                        var r = Math.abs(e.detail || e.wheelDelta);
                        $.browser.mozilla && (r *= 100);
                        var o = 15;
                        return e.detail < 0 || e.wheelDelta > 0 ? r >= 15 && i.previous(!0) : r >= 15 && i.next(!0), !1
                    }
                }, $.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
            }
            0 === this.slider.$element[0].clientWidth && (this.slider.init_safemode = !0), this.__resize();
            var i = this;
            this.so.deepLink && $(window).on("hashchange", function () {
                i.__onHashChanged()
            })
        }, e.index = function () {
            return this.view.index
        }, e.count = function () {
            return this.view.slidesCount
        }, e.next = function (t) {
            this.skipTimer(), this.view.next(t)
        }, e.previous = function (t) {
            this.skipTimer(), this.view.previous(t)
        }, e.gotoSlide = function (t) {
            t = Math.min(t, this.count() - 1), this.skipTimer(), this.view.gotoSlide(t)
        }, e.destroy = function (t) {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)), this.slider.destroy(t)
        }, e._destroy = function () {
            this._timer.reset(), this._timer = null, $(window).unbind("resize", this.resize_listener), this.view.destroy(), this.view = null, this.so.wheel && ($.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), this.so = null
        }, e.runAction = function (t) {
            var e = [];
            if (-1 !== t.indexOf("(")) {
                var i = t.slice(0, t.indexOf("("));
                e = t.slice(t.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), t = i
            }
            t in this ? this[t].apply(this, e) : console
        }, e.update = function (t) {
            this.slider.init_safemode && t && (this.slider.init_safemode = !1), this.__resize(t), t && this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))
        }, e.locate = function () {
            this.__resize()
        }, e.resume = function () {
            this.paused && (this.paused = !1, this._startTimer())
        }, e.pause = function () {
            this.paused || (this.paused = !0, this._stopTimer())
        }, e.currentTime = function () {
            return this._delayProgress
        }, e.showLayer = function (t, e) {
            var i = this.__findLayerById(t);
            i && (e ? (clearTimeout(i.actionTimeout), i.actionTimeout = setTimeout(this.showLayer, e, t, 0)) : i.start())
        }, e.hideLayer = function (t, e) {
            var i = this.__findLayerById(t);
            i && (e ? (clearTimeout(i.actionTimeout), i.actionTimeout = setTimeout(this.hideLayer, e, t, 0)) : i.hide())
        }, e.toggleLayer = function (t, e) {
            var i = this.__findLayerById(t);
            i && (e ? (clearTimeout(i.actionTimeout), i.actionTimeout = setTimeout(this.toggleLayer, e, t, 0)) : i.isShowing ? i.hide() : i.start())
        }, e.showLayers = function (t, e) {
            var i = this;
            $.each(t.replace(/\s+/g, "").split("|"), function (t, s) {
                i.showLayer(s, e)
            })
        }, e.hideLayers = function (t, e) {
            var i = this;
            $.each(t.replace(/\s+/g, "").split("|"), function (t, s) {
                i.hideLayer(s, e)
            })
        }, e.toggleLayers = function (t, e) {
            var i = this;
            $.each(t.replace(/\s+/g, "").split("|"), function (t, s) {
                i.toggleLayer(s, e)
            })
        }, averta.EventDispatcher.extend(e)
    }(jQuery),
    function ($) {
        "use strict";
        var t = {
            image: MSImageLayerElement,
            text: MSLayerElement,
            video: MSVideoLayerElement,
            hotspot: MSHotspotLayer,
            button: MSButtonLayer
        };
        window.MasterSlider = function () {
            this.options = {
                forceInit: !0,
                autoplay: !1,
                loop: !1,
                mouse: !0,
                swipe: !0,
                grabCursor: !0,
                space: 0,
                fillMode: "fill",
                start: 1,
                view: "basic",
                width: 300,
                height: 150,
                inView: 15,
                critMargin: 1,
                mobileBGVideo: !1,
                heightLimit: !0,
                smoothHeight: !0,
                autoHeight: !1,
                minHeight: -1,
                fullwidth: !1,
                fullheight: !1,
                autofill: !1,
                layersMode: "center",
                hideLayers: !1,
                endPause: !1,
                centerControls: !0,
                overPause: !0,
                shuffle: !1,
                speed: 17,
                dir: "h",
                preload: 0,
                wheel: !1,
                layout: "boxed",
                autofillTarget: null,
                fullscreenMargin: 0,
                instantStartLayers: !1,
                parallaxMode: "mouse",
                rtl: !1,
                deepLink: null,
                deepLinkType: "path",
                disablePlugins: []
            }, this.slides = [], this.activePlugins = [], this.$element = null, this.lastMargin = 0, this.leftSpace = 0, this.topSpace = 0, this.rightSpace = 0, this.bottomSpace = 0, this._holdOn = 0;
            var t = this;
            this.resize_listener = function () {
                t._resize()
            }, $(window).bind("resize", this.resize_listener)
        }, MasterSlider.author = "Averta Ltd. (www.averta.net)", MasterSlider.version = "2.51.2", MasterSlider.releaseDate = "Jun 2017", MasterSlider._plugins = [];
        var e = MasterSlider;
        e.registerPlugin = function (t) {
            -1 === e._plugins.indexOf(t) && e._plugins.push(t)
        };
        var i = MasterSlider.prototype;
        i.__setupSlides = function () {
                var t, e = this,
                    i = 0;
                this.$element.children(".ms-slide").each(function () {
                    var s = $(this);
                    t = new MSSlide, t.$element = s, t.slider = e, t.delay = void 0 !== s.data("delay") ? s.data("delay") : 3, t.fillMode = void 0 !== s.data("fill-mode") ? s.data("fill-mode") : e.options.fillMode, t.index = i++, t.id = s.data("id");
                    var n = s.children("img:not(.ms-layer)");
                    n.length > 0 && t.setBG(n[0]);
                    var r = s.children("video");
                    if (r.length > 0 && t.setBGVideo(r), e.controls)
                        for (var o = 0, a = e.controls.length; a > o; ++o) e.controls[o].slideAction(t);
                    s.children("a").each(function () {
                        var e = $(this);
                        "video" === this.getAttribute("data-type") ? (t.video = this.getAttribute("href"), t.videoAutoPlay = e.data("autoplay"), e.remove()) : e.hasClass("ms-layer") || (t.link = $(this))
                    }), e.__createSlideLayers(t, s.find(".ms-layer")), e.slides.push(t), e.slideController.view.addSlide(t)
                })
            }, i._setupOverlayLayers = function () {
                var t = this,
                    e = this.$element.children(".ms-overlay-layers").eq(0);
                if (e.length) {
                    var i = new MSOverlayLayers(this);
                    i.$element = e, t.__createSlideLayers(i, e.find(".ms-layer")), this.view.$element.prepend(e), this.overlayLayers = i, i.create()
                }
            }, i.__createSlideLayers = function (e, i) {
                0 != i.length && (e.setupLayerController(), i.each(function (i, s) {
                    var n, r = $(this);
                    "A" === s.nodeName && "image" === r.find(">img").data("type") && (n = $(this), r = n.find("img"));
                    var o = new(t[r.data("type") || "text"]);
                    o.$element = r, o.link = n, o.id = o.$element.data("id"), o.waitForAction = o.$element.data("wait"), o.masked = o.$element.data("masked"), o.maskWidth = o.$element.data("mask-width"), o.maskHeight = o.$element.data("mask-height");
                    var a = {},
                        l = {};
                    void 0 !== r.data("effect") && (a.name = r.data("effect")), void 0 !== r.data("ease") && (a.ease = r.data("ease")), void 0 !== r.data("duration") && (a.duration = r.data("duration")), void 0 !== r.data("delay") && (a.delay = r.data("delay")), r.data("hide-effect") && (l.name = r.data("hide-effect")), r.data("hide-ease") && (l.ease = r.data("hide-ease")), void 0 !== r.data("hide-duration") && (l.duration = r.data("hide-duration")), void 0 !== r.data("hide-time") && (l.time = r.data("hide-time")), o.setStartAnim(a), o.setEndAnim(l), e.layerController.addLayer(o)
                }))
            }, i._removeLoading = function () {
                $(window).unbind("resize", this.resize_listener), this.$element.removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0), CTween.fadeIn(this.$element), this.$loading.remove(), this.slideController && this.slideController.__resize()
            }, i._resize = function () {
                if (this.$loading) {
                    var t = this.$loading[0].clientWidth / this.aspect;
                    t = this.options.heightLimit ? Math.min(t, this.options.height) : t, this.$loading.height(t), this.$element.height(t)
                }
            },
            i._shuffleSlides = function () {
                for (var t, e = this.$element.children(".ms-slide"), i = 0, s = e.length; s > i; ++i) t = Math.floor(Math.random() * (s - 1)), i != t && (this.$element[0].insertBefore(e[i], e[t]), e = this.$element.children(".ms-slide"))
            }, i._setupSliderLayout = function () {
                this._updateSideMargins(), this.lastMargin = this.leftSpace;
                var t = this.options.layout;
                "boxed" !== t && "partialview" !== t && (this.options.fullwidth = !0), ("fullscreen" === t || "autofill" === t) && (this.options.fullheight = !0, "autofill" === t && (this.$autofillTarget = $(this.options.autofillTarget), 0 === this.$autofillTarget.length && (this.$autofillTarget = this.$element.parent()))), "partialview" === t && this.$element.addClass("ms-layout-partialview"), ("fullscreen" === t || "fullwidth" === t || "autofill" === t) && ($(window).bind("resize", {
                    that: this
                }, this._updateLayout), this._updateLayout()), $(window).bind("resize", this.slideController.resize_listener)
            }, i._updateLayout = function (t) {
                var e = t ? t.data.that : this,
                    i = e.options.layout,
                    s = e.$element,
                    n = $(window);
                if ("fullscreen" === i) document.body.style.overflow = "hidden", s.height(n.height() - e.options.fullscreenMargin - e.topSpace - e.bottomSpace), document.body.style.overflow = "";
                else if ("autofill" === i) return void s.height(e.$autofillTarget.height() - e.options.fullscreenMargin - e.topSpace - e.bottomSpace).width(e.$autofillTarget.width() - e.leftSpace - e.rightSpace);
                s.width(n.width() - e.leftSpace - e.rightSpace);
                var r = -s.offset().left + e.leftSpace + e.lastMargin;
                s.css("margin-left", r), e.lastMargin = r
            }, i._init = function () {
                if (!(this._holdOn > 0) && this._docReady) {
                    if (this.initialized = !0, "all" !== this.options.preload && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), MSLayerEffects.setup(), this.slideController.setupView(), this.view = this.slideController.view, this.$controlsCont = $("<div></div>").addClass("ms-inner-controls-cont"), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), this.$controlsCont.prepend(this.view.$element), this.$msContainer = $("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont), this.controls)
                        for (var t = 0, e = this.controls.length; e > t; ++t) this.controls[t].setup();
                    if (this._setupSliderLayout(), this.__setupSlides(), this.slideController.setup(), this._setupOverlayLayers(), this.controls)
                        for (t = 0, e = this.controls.length; e > t; ++t) this.controls[t].create();
                    if (this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()), this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse) {
                        var i = this.view.$element;
                        i.mousedown(function () {
                            i.removeClass("ms-grab-cursor"), i.addClass("ms-grabbing-cursor"), $.browser.msie && window.ms_grabbing_curosr && (i[0].style.cursor = "url(" + window.ms_grabbing_curosr + "), move")
                        }).addClass("ms-grab-cursor"), $(document).mouseup(function () {
                            i.removeClass("ms-grabbing-cursor"), i.addClass("ms-grab-cursor"), $.browser.msie && window.ms_grab_curosr && (i[0].style.cursor = "url(" + window.ms_grab_curosr + "), move")
                        })
                    }
                    this.slideController.__dispatchInit()
                }
            }, i.setHeight = function (t) {
                this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {
                    height: t
                }, {
                    ease: "easeOutQuart"
                })) : this.slideController.view.$element.height(t)
            }, i.reserveSpace = function (t, e) {
                var i = t + "Space",
                    s = this[i];
                return this[i] += e, this._updateSideMargins(), s
            }, i._updateSideMargins = function () {
                this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
            }, i._realignControls = function () {
                this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0, this._updateSideMargins(), this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
            }, i.control = function (t, e) {
                if (t in MSSlideController.SliderControlList) {
                    this.controls || (this.controls = []);
                    var i = new MSSlideController.SliderControlList[t](e);
                    return i.slider = this, this.controls.push(i), this
                }
            }, i.holdOn = function () {
                this._holdOn++
            }, i.release = function () {
                this._holdOn--, this._init()
            }, i.setup = function (t, i) {
                if (this.$element = "string" == typeof t ? $("#" + t) : t.eq(0), this.setupMarkup = this.$element.html(), 0 !== this.$element.length) {
                    this.$element.addClass("master-slider").addClass("before-init"), $.browser.msie ? this.$element.addClass("ms-ie").addClass("ms-ie" + $.browser.version.slice(0, $.browser.version.indexOf("."))) : $.browser.webkit ? this.$element.addClass("ms-wk") : $.browser.mozilla && this.$element.addClass("ms-moz");
                    navigator.userAgent.toLowerCase().indexOf("android") > -1 && this.$element.addClass("ms-android");
                    var s = this;
                    $.extend(this.options, i), this.aspect = this.options.width / this.options.height, this.$loading = $("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append($("<div></div>").addClass("ms-loading")), this.$loading.parent().css("position", "relative"), this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0), this.options.fullheight && this.$element.addClass("ms-fullheight"), this._resize(), this.slideController = new MSSlideController(this), this.api = this.slideController;
                    for (var n = 0, r = e._plugins.length; n !== r; n++) {
                        var o = e._plugins[n]; - 1 === this.options.disablePlugins.indexOf(o.name) && this.activePlugins.push(new o(this))
                    }
                    return this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this), $(document).ready(function () {
                        s.initialized || (s._docReady = !0, s._init())
                    }), this
                }
            }, i.destroy = function (t) {
                for (var e = 0, i = this.activePlugins.length; e !== i; e++) this.activePlugins[e].destroy();
                if (this.controls)
                    for (e = 0, i = this.controls.length; e !== i; e++) this.controls[e].destroy();
                this.slideController && this.slideController._destroy(), this.$loading && this.$loading.remove(), t ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove();
                var s = this.options.layout;
                ("fullscreen" === s || "fullwidth" === s) && $(window).unbind("resize", this._updateLayout), this.view = null, this.slides = null, this.options = null, this.slideController = null, this.api = null, this.resize_listener = null, this.activePlugins = null
            }
    }(jQuery),
    function ($, t, e, i) {
        function s(t, e) {
            this.element = t, this.$element = $(t), this.settings = $.extend({}, r, e), this._defaults = r, this._name = n, this.init()
        }
        var n = "masterslider",
            r = {
                controls: {}
            };
        $.extend(s.prototype, {
            init: function () {
                var t = this;
                this._slider = new MasterSlider;
                for (var e in this.settings.controls) this._slider.control(e, this.settings.controls[e]);
                this._slider.setup(this.$element, this.settings);
                var i = this._slider.api.dispatchEvent;
                this._slider.api.dispatchEvent = function (e) {
                    t.$element.trigger(e.type), i.call(this, e)
                }
            },
            api: function () {
                return this._slider.api
            },
            slider: function () {
                return this._slider
            }
        }), $.fn[n] = function (t) {
            var e = arguments,
                i = "plugin_" + n;
            if (void 0 === t || "object" == typeof t) return this.each(function () {
                $.data(this, i) || $.data(this, i, new s(this, t))
            });
            if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
                var r;
                return this.each(function () {
                    var n = $.data(this, i);
                    n instanceof s && "function" == typeof n[t] && (r = n[t].apply(n, Array.prototype.slice.call(e, 1))), n instanceof s && "function" == typeof n._slider.api[t] && (r = n._slider.api[t].apply(n._slider.api, Array.prototype.slice.call(e, 1))), "destroy" === t && $.data(this, i, null)
                }), void 0 !== r ? r : this
            }
        }
    }(jQuery, window, document),
    function ($, t) {
        "use strict";
        var e = [];
        MasterSlider.addJQReadyErrorCheck = function (t) {
            e.push(t)
        };
        var i = $.fn.ready,
            s = t.onerror;
        $.fn.ready = function () {
            return t.onerror = function () {
                if (0 !== e.length)
                    for (var t = 0, i = e.length; t !== i; t++) {
                        var n = e[t];
                        n.initialized || (n._docReady = !0, n._init())
                    }
                return !!s && s.apply(this, arguments)
            }, i.apply(this, arguments)
        }
    }(jQuery, window, document), window.MSViewEvents = function (t, e) {
        this.type = t, this.data = e
    }, MSViewEvents.SWIPE_START = "swipeStart", MSViewEvents.SWIPE_END = "swipeEnd", MSViewEvents.SWIPE_MOVE = "swipeMove", MSViewEvents.SWIPE_CANCEL = "swipeCancel", MSViewEvents.SCROLL = "scroll", MSViewEvents.CHANGE_START = "slideChangeStart", MSViewEvents.CHANGE_END = "slideChangeEnd",
    function ($) {
        "use strict";
        window.MSBasicView = function (t) {
            this.options = {
                loop: !1,
                dir: "h",
                autoHeight: !1,
                spacing: 5,
                mouseSwipe: !0,
                swipe: !0,
                speed: 17,
                minSlideSpeed: 2,
                viewNum: 20,
                critMargin: 1
            }, $.extend(this.options, t), this.dir = this.options.dir, this.loop = this.options.loop, this.spacing = this.options.spacing, this.__width = 0, this.__height = 0, this.__cssProb = "h" === this.dir ? "left" : "top", this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop", this.__dimension = "h" === this.dir ? "__width" : "__height", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.$slideCont = $("<div></div>").addClass("ms-slide-container"), this.$element = $("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont), this.currentSlide = null, this.index = -1, this.slidesCount = 0, this.slides = [], this.slideList = [], this.viewSlidesList = [], this.css3 = window._cssanim, this.start_buffer = 0, this.firstslide_snap = 0, this.slideChanged = !1, this.controller = new Controller(0, 0, {
                snapping: !0,
                snapsize: 100,
                paging: !0,
                snappingMinSpeed: this.options.minSlideSpeed,
                friction: (100 - .5 * this.options.speed) / 100,
                endless: this.loop
            }), this.controller.renderCallback("h" === this.dir ? this._horizUpdate : this._vertiUpdate, this), this.controller.snappingCallback(this.__snapUpdate, this), this.controller.snapCompleteCallback(this.__snapCompelet, this), averta.EventDispatcher.call(this)
        };
        var t = MSBasicView.prototype;
        t.__snapCompelet = function () {
            this.slideChanged && (this.slideChanged = !1, this.__locateSlides(), this.start_buffer = 0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, t.__snapUpdate = function (t, e, i) {
            if (this.loop) {
                var s = this.index + i;
                this.updateLoop(s), s >= this.slidesCount && (s -= this.slidesCount), 0 > s && (s = this.slidesCount + s), this.index = s
            } else {
                if (0 > e || e >= this.slidesCount) return;
                this.index = e
            }
            this._checkCritMargins(), $.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = ""));
            var n = this.slideList[this.index];
            n !== this.currentSlide && (this.currentSlide = n, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.slideChanged = !0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
        }, t._checkCritMargins = function () {
            if (!this.normalMode) {
                var t = Math.floor(this.options.viewNum / 2),
                    e = this.viewSlidesList.indexOf(this.slideList[this.index]),
                    i = this[this.__dimension] + this.spacing,
                    s = this.options.critMargin;
                return this.loop ? void((s >= e || e >= this.viewSlidesList.length - s) && (i *= e - t, this.__locateSlides(!1, i + this.start_buffer), this.start_buffer += i)) : void((s > e && this.index >= s || e >= this.viewSlidesList.length - s && this.index < this.slidesCount - s) && this.__locateSlides(!1))
            }
        }, t._vertiUpdate = function (t, e) {
            return this.__contPos = e, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void(this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -e + "px)" + this.__translate_end) : void(this.$slideCont[0].style.top = -e + "px")
        }, t._horizUpdate = function (t, e) {
            return this.__contPos = e, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void(this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -e + "px)" + this.__translate_end) : void(this.$slideCont[0].style.left = -e + "px")
        }, t.__updateViewList = function () {
            if (this.normalMode) return void(this.viewSlidesList = this.slides);
            var t = this.viewSlidesList.slice();
            this.viewSlidesList = [];
            var e, i = 0,
                s = Math.floor(this.options.viewNum / 2);
            if (this.loop)
                for (; i !== this.options.viewNum; i++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - s + i]);
            else {
                for (i = 0; i !== s && this.index - i != -1; i++) this.viewSlidesList.unshift(this.slideList[this.index - i]);
                for (i = 1; i !== s && this.index + i !== this.slidesCount; i++) this.viewSlidesList.push(this.slideList[this.index + i])
            }
            for (i = 0, e = t.length; i !== e; i++) - 1 === this.viewSlidesList.indexOf(t[i]) && t[i].sleep();
            t = null, this.currentSlide && this.__updateSlidesZindex()
        }, t.__locateSlides = function (t, e) {
            this.__updateViewList(), e = this.loop ? e || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var i, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var r = e + n * (this[this.__dimension] + this.spacing);
                i = this.viewSlidesList[n], i.wakeup(), i.position = r, i.$element[0].style[this.__cssProb] = r + "px"
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, t.__createLoopList = function () {
            var t = [],
                e = 0,
                i = this.slidesCount / 2,
                s = this.slidesCount % 2 == 0 ? i - 1 : Math.floor(i),
                n = this.slidesCount % 2 == 0 ? i : Math.floor(i);
            for (this.currentSlideLoc = s, e = 1; s >= e; ++e) t.unshift(this.slideList[this.index - e < 0 ? this.slidesCount - e + this.index : this.index - e]);
            for (t.push(this.slideList[this.index]), e = 1; n >= e; ++e) t.push(this.slideList[this.index + e >= this.slidesCount ? this.index + e - this.slidesCount : this.index + e]);
            return t
        }, t.__getSteps = function (t, e) {
            var i = t > e ? this.slidesCount - t + e : e - t,
                s = Math.abs(this.slidesCount - i);
            return s > i ? i : -s
        }, t.__pushEnd = function () {
            var t = this.slides.shift(),
                e = this.slides[this.slidesCount - 2];
            if (this.slides.push(t), this.normalMode) {
                var i = e.$element[0][this.__offset] + this.spacing + this[this.__dimension];
                t.$element[0].style[this.__cssProb] = i + "px", t.position = i
            }
        }, t.__pushStart = function () {
            var t = this.slides.pop(),
                e = this.slides[0];
            if (this.slides.unshift(t), this.normalMode) {
                var i = e.$element[0][this.__offset] - this.spacing - this[this.__dimension];
                t.$element[0].style[this.__cssProb] = i + "px", t.position = i
            }
        }, t.__updateSlidesZindex = function () {
            var t, e = this.viewSlidesList.length;
            if (Math.floor(e / 2), this.loop)
                for (var i = this.viewSlidesList.indexOf(this.currentSlide), s = 0; s !== e; s++) t = this.viewSlidesList[s], this.viewSlidesList[s].$element.css("z-index", i >= s ? s + 1 : e - s);
            else {
                for (var n = this.currentSlide.index - this.viewSlidesList[0].index, s = 0; s !== e; s++) this.viewSlidesList[s].$element.css("z-index", n >= s ? s + 1 : e - s);
                this.currentSlide.$element.css("z-index", e)
            }
        }, t.addSlide = function (t) {
            t.view = this, this.slides.push(t), this.slideList.push(t), this.slidesCount++
        }, t.appendSlide = function (t) {
            this.$slideCont.append(t.$element)
        }, t.updateLoop = function (t) {
            if (this.loop)
                for (var e = this.__getSteps(this.index, t), i = 0, s = Math.abs(e); s > i; ++i) 0 > e ? this.__pushStart() : this.__pushEnd()
        }, t.gotoSlide = function (t, e) {
            this.updateLoop(t), this.index = t;
            var i = this.slideList[t];
            this._checkCritMargins(), this.controller.changeTo(i.position, !e, null, null, !1), i !== this.currentSlide && (this.slideChanged = !0, this.currentSlide = i, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), e && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, t.next = function (t) {
            return t && !this.loop && this.index + 1 >= this.slidesCount ? void this.controller.bounce(10) : void this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
        }, t.previous = function (t) {
            return t && !this.loop && this.index - 1 < 0 ? void this.controller.bounce(-10) : void this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
        }, t.setupSwipe = function () {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.dir ? "horizontal" : "vertical";
            var t = this;
            this.swipeControl.onSwipe = "h" === this.dir ? function (e) {
                t.horizSwipeMove(e)
            } : function (e) {
                t.vertSwipeMove(e)
            }
        }, t.vertSwipeMove = function (t) {
            var e = t.phase;
            if ("start" === e) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, t));
            else if ("move" === e && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + t.moveY) < this.cont_size / 2)) this.controller.drag(t.moveY), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, t));
            else if ("end" === e || "cancel" === e) {
                var i = t.distanceY / t.duration * 50 / 3,
                    s = Math.abs(t.distanceY / t.duration * 50 / 3);
                Math.abs(i) > .1 && Math.abs(i) >= s ? (this.controller.push(-i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, t))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, t)))
            }
        }, t.horizSwipeMove = function (t) {
            var e = t.phase;
            if ("start" === e) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, t));
            else if ("move" === e && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + t.moveX) < this.cont_size / 2)) this.controller.drag(t.moveX), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, t));
            else if ("end" === e || "cancel" === e) {
                var i = t.distanceX / t.duration * 50 / 3,
                    s = Math.abs(t.distanceY / t.duration * 50 / 3);
                Math.abs(i) > .1 && Math.abs(i) >= s ? (this.controller.push(-i), i > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, t))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, t)))
            }
        }, t.setSize = function (t, e, i) {
            if (this.lastWidth !== t || e !== this.lastHeight || i) {
                this.$element.width(t).height(e);
                for (var s = 0; s < this.slidesCount; ++s) this.slides[s].setSize(t, e, i);
                this.__width = t, this.__height = e, this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = t, this.lastHeight = e)
            }
        }, t.create = function (t) {
            this.__created = !0, this.index = Math.min(t || 0, this.slidesCount - 1), this.lastSnap = this.index, this.loop && (this.slides = this.__createLoopList()), this.normalMode = this.slidesCount <= this.options.viewNum;
            for (var e = 0; e < this.slidesCount; ++e) this.slides[e].create();
            this.__locateSlides(), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)), this.gotoSlide(this.index, !0), this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
        }, t.destroy = function () {
            if (this.__created) {
                for (var t = 0; t < this.slidesCount; ++t) this.slides[t].destroy();
                this.slides = null, this.slideList = null, this.$element.remove(), this.controller.destroy(), this.controller = null
            }
        }, averta.EventDispatcher.extend(t), MSSlideController.registerView("basic", MSBasicView)
    }(jQuery),
    function () {
        "use strict";
        window.MSWaveView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"), this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d"), this.autoUpdateZIndex = !0
        }, MSWaveView.extend(MSBasicView), MSWaveView._3dreq = !0, MSWaveView._fallback = MSBasicView;
        var t = MSWaveView.prototype,
            e = MSBasicView.prototype;
        t._horizUpdate = function (t, i) {
            e._horizUpdate.call(this, t, i);
            for (var s, n, r = -i, o = 0; o < this.slidesCount; ++o) s = this.slideList[o], n = -r - s.position, this.__updateSlidesHoriz(s, n)
        }, t._vertiUpdate = function (t, i) {
            e._vertiUpdate.call(this, t, i);
            for (var s, n, r = -i, o = 0; o < this.slidesCount; ++o) s = this.slideList[o], n = -r - s.position, this.__updateSlidesVertic(s, n)
        }, t.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            t.$element[0].style[window._csspfx + "transform"] = "translateZ(" + 3 * -i + "px) rotateY(0.01deg)"
        }, t.__updateSlidesVertic = function (t, e) {
            this.__updateSlidesHoriz(t, e)
        }, MSSlideController.registerView("wave", MSWaveView)
    }(jQuery),
    function () {
        window.MSFadeBasicView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")
        }, MSFadeBasicView.extend(MSWaveView);
        var t = MSFadeBasicView.prototype;
        MSFadeBasicView.prototype, t.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(.6 * e / this.__width);
            i = 1 - Math.min(i, .6), t.$element.css("opacity", i)
        }, t.__updateSlidesVertic = function (t, e) {
            this.__updateSlidesHoriz(t, e)
        }, MSSlideController.registerView("fadeBasic", MSFadeBasicView), MSWaveView._fallback = MSFadeBasicView
    }(),
    function () {
        window.MSFadeWaveView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")
        }, MSFadeWaveView.extend(MSWaveView), MSFadeWaveView._3dreq = !0, MSFadeWaveView._fallback = MSFadeBasicView;
        var t = MSFadeWaveView.prototype;
        MSWaveView.prototype, t.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            i = Math.min(i, 100), t.$element.css("opacity", 1 - i / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "scale(" + (1 - i / 800) + ") rotateY(0.01deg) "
        }, t.__updateSlidesVertic = function (t, e) {
            this.__updateSlidesHoriz(t, e)
        }, MSSlideController.registerView("fadeWave", MSFadeWaveView)
    }(),
    function () {
        "use strict";
        window.MSFlowView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
        }, MSFlowView.extend(MSWaveView), MSFlowView._3dreq = !0, MSFlowView._fallback = MSFadeBasicView;
        var t = MSFlowView.prototype;
        MSWaveView.prototype, t.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(100 * e / this.__width),
                s = Math.min(.3 * i, 30) * (0 > e ? -1 : 1),
                n = 1.2 * i;
            t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -n + "px) rotateY(" + s + "deg) "
        }, t.__updateSlidesVertic = function (t, e) {
            var i = Math.abs(100 * e / this.__width),
                s = Math.min(.3 * i, 30) * (0 > e ? -1 : 1),
                n = 1.2 * i;
            t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -n + "px) rotateX(" + -s + "deg) "
        }, MSSlideController.registerView("flow", MSFlowView)
    }(jQuery),
    function () {
        window.MSFadeFlowView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")
        }, MSFadeFlowView.extend(MSWaveView), MSFadeFlowView._3dreq = !0;
        var t = MSFadeFlowView.prototype;
        MSWaveView.prototype, t.__calculate = function (t) {
            var e = Math.min(Math.abs(100 * t / this.__width), 100);
            return {
                value: e,
                rvalue: Math.min(.5 * e, 50) * (0 > t ? -1 : 1)
            }
        }, t.__updateSlidesHoriz = function (t, e) {
            var i = this.__calculate(e);
            t.$element.css("opacity", 1 - i.value / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -i.value + "px) rotateY(" + i.rvalue + "deg) "
        }, t.__updateSlidesVertic = function (t, e) {
            var i = this.__calculate(e);
            t.$element.css("opacity", 1 - i.value / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -i.value + "px) rotateX(" + -i.rvalue + "deg) "
        }, MSSlideController.registerView("fadeFlow", MSFadeFlowView)
    }(),
    function ($) {
        "use strict";
        window.MSMaskView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
        }, MSMaskView.extend(MSBasicView);
        var t = MSMaskView.prototype,
            e = MSBasicView.prototype;
        t.addSlide = function (t) {
            t.view = this, t.$frame = $("<div></div>").addClass("ms-mask-frame").append(t.$element), t.$element[0].style.position = "relative", t.autoAppend = !1, this.slides.push(t), this.slideList.push(t), this.slidesCount++
        }, t.setSize = function (t, i) {
            for (var s = this.slides[0].slider, n = 0; n < this.slidesCount; ++n) this.slides[n].$frame[0].style.width = t + "px", s.options.autoHeight || (this.slides[n].$frame[0].style.height = i + "px");
            e.setSize.call(this, t, i)
        }, t._horizUpdate = function (t, i) {
            e._horizUpdate.call(this, t, i);
            var s = 0;
            if (this.css3)
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (i - this.slideList[s].position) + "px)" + this.__translate_end;
            else
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style.left = i - this.slideList[s].position + "px"
        }, t._vertiUpdate = function (t, i) {
            e._vertiUpdate.call(this, t, i);
            var s = 0;
            if (this.css3)
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (i - this.slideList[s].position) + "px)" + this.__translate_end;
            else
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style.top = i - this.slideList[s].position + "px"
        }, t.__pushEnd = function () {
            var t = this.slides.shift(),
                e = this.slides[this.slidesCount - 2];
            if (this.slides.push(t), this.normalMode) {
                var i = e.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
                t.$frame[0].style[this.__cssProb] = i + "px", t.position = i
            }
        }, t.__pushStart = function () {
            var t = this.slides.pop(),
                e = this.slides[0];
            if (this.slides.unshift(t), this.normalMode) {
                var i = e.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
                t.$frame[0].style[this.__cssProb] = i + "px", t.position = i
            }
        }, t.__updateViewList = function () {
            if (this.normalMode) return void(this.viewSlidesList = this.slides);
            var t = this.viewSlidesList.slice();
            this.viewSlidesList = [];
            var e, i = 0,
                s = Math.floor(this.options.viewNum / 2);
            if (this.loop)
                for (; i !== this.options.viewNum; i++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - s + i]);
            else {
                for (i = 0; i !== s && this.index - i != -1; i++) this.viewSlidesList.unshift(this.slideList[this.index - i]);
                for (i = 1; i !== s && this.index + i !== this.slidesCount; i++) this.viewSlidesList.push(this.slideList[this.index + i])
            }
            for (i = 0, e = t.length; i !== e; i++) - 1 === this.viewSlidesList.indexOf(t[i]) && (t[i].sleep(), t[i].$frame.detach());
            t = null
        }, t.__locateSlides = function (t, e) {
            this.__updateViewList(), e = this.loop ? e || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var i, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var r = e + n * (this[this.__dimension] + this.spacing);
                if (i = this.viewSlidesList[n], this.$slideCont.append(i.$frame), i.wakeup(!1), i.position = r, i.selected && i.bgvideo) try {
                    i.bgvideo.play()
                } catch (t) {}
                i.$frame[0].style[this.__cssProb] = r + "px"
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, MSSlideController.registerView("mask", MSMaskView)
    }(jQuery),
    function () {
        "use strict";
        window.MSParallaxMaskView = function (t) {
            MSMaskView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-parallax-mask-view")
        }, MSParallaxMaskView.extend(MSMaskView), MSParallaxMaskView.parallaxAmount = .5;
        var t = MSParallaxMaskView.prototype,
            e = MSBasicView.prototype;
        t._horizUpdate = function (t, i) {
            e._horizUpdate.call(this, t, i);
            var s = 0;
            if (this.css3)
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (i - this.slideList[s].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style.left = (i - this.slideList[s].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, t._vertiUpdate = function (t, i) {
            e._vertiUpdate.call(this, t, i);
            var s = 0;
            if (this.css3)
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (i - this.slideList[s].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (s = 0; s < this.slidesCount; ++s) this.slideList[s].$element[0].style.top = (i - this.slideList[s].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, MSSlideController.registerView("parallaxMask", MSParallaxMaskView)
    }(jQuery),
    function () {
        "use strict";
        window.MSFadeView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"), this.controller.renderCallback(this.__update, this)
        }, MSFadeView.extend(MSBasicView);
        var t = MSFadeView.prototype,
            e = MSBasicView.prototype;
        t.__update = function (t, e) {
            for (var i, s, n = -e, r = 0; r < this.slidesCount; ++r) i = this.slideList[r], s = -n - i.position, this.__updateSlides(i, s)
        }, t.__updateSlides = function (t, e) {
            var i = Math.abs(e / this[this.__dimension]);
            0 >= 1 - i ? t.$element.fadeTo(0, 0).css("visibility", "hidden") : t.$element.fadeTo(0, 1 - i).css("visibility", "")
        }, t.__locateSlides = function (t, e) {
            this.__updateViewList(), e = this.loop ? e || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var i, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var r = e + n * this[this.__dimension];
                i = this.viewSlidesList[n], i.wakeup(), i.position = r
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, t.__pushEnd = function () {
            var t = this.slides.shift(),
                e = this.slides[this.slidesCount - 2];
            this.slides.push(t), t.position = e.position + this[this.__dimension]
        }, t.__pushStart = function () {
            var t = this.slides.pop(),
                e = this.slides[0];
            this.slides.unshift(t), t.position = e.position - this[this.__dimension]
        }, t.create = function (t) {
            e.create.call(this, t), this.spacing = 0, this.controller.options.minValidDist = 10
        }, MSSlideController.registerView("fade", MSFadeView)
    }(jQuery),
    function () {
        "use strict";
        window.MSScaleView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"), this.controller.renderCallback(this.__update, this)
        }, MSScaleView.extend(MSFadeView);
        var t = MSScaleView.prototype,
            e = MSFadeView.prototype;
        t.__updateSlides = function (t, e) {
            var i = Math.abs(e / this[this.__dimension]),
                s = t.$element[0];
            0 >= 1 - i ? (s.style.opacity = 0, s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.opacity = 1 - i, s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = "perspective(2000px) translateZ(" + i * (0 > e ? -.5 : .5) * 300 + "px)")
        }, t.create = function (t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03
        }, MSSlideController.registerView("scale", MSScaleView)
    }(jQuery),
    function () {
        "use strict";
        window.MSStackView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"), this.controller.renderCallback(this.__update, this), this.autoUpdateZIndex = !0
        }, MSStackView.extend(MSFadeView), MSStackView._3dreq = !0, MSStackView._fallback = MSFadeView;
        var t = MSStackView.prototype,
            e = MSFadeView.prototype;
        t.__updateSlidesZindex = function () {
            for (var t, e = this.viewSlidesList.length, i = 0; i !== e; i++) t = this.viewSlidesList[i], this.viewSlidesList[i].$element.css("z-index", e - i)
        }, t.__updateSlides = function (t, e) {
            var i = Math.abs(e / this[this.__dimension]),
                s = t.$element[0];
            0 >= 1 - i ? (s.style.opacity = 1, s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = 0 > e ? "perspective(2000px) translateZ(" + -300 * i + "px)" : this.__translate + "(" + -i * this[this.__dimension] + "px)")
        }, t.create = function (t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03, this.__translate = "h" === this.dir ? "translateX" : "translateY"
        }, MSSlideController.registerView("stack", MSStackView)
    }(jQuery),
    function () {
        "use strict";
        var t = 2e3;
        window.MSFocusView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"), this.options.centerSpace = this.options.centerSpace || 1
        }, MSFocusView.extend(MSWaveView), MSFocusView._3dreq = !0, MSFocusView._fallback = MSFadeBasicView;
        var e = MSFocusView.prototype;
        MSWaveView.prototype, e.__calcview = function (t, e) {
            return e / 2 * t / (t + 2e3) * (t + 2e3) / 2e3
        }, e.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            i = 15 * -Math.min(i, 100), t.$element.css(window._csspfx + "transform", "translateZ(" + (i + 1) + "px) rotateY(0.01deg) translateX(" + (0 > e ? 1 : -1) * -this.__calcview(i, this.__width) * this.options.centerSpace + "px)")
        }, e.__updateSlidesVertic = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            i = 15 * -Math.min(i, 100), t.$element.css(window._csspfx + "transform", "translateZ(" + (i + 1) + "px) rotateY(0.01deg) translateY(" + (0 > e ? 1 : -1) * -this.__calcview(i, this.__width) * this.options.centerSpace + "px)")
        }, MSSlideController.registerView("focus", MSFocusView)
    }(),
    function () {
        window.MSPartialWaveView = function (t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")
        }, MSPartialWaveView.extend(MSWaveView), MSPartialWaveView._3dreq = !0, MSPartialWaveView._fallback = MSFadeBasicView;
        var t = MSPartialWaveView.prototype;
        MSWaveView.prototype, t.__updateSlidesHoriz = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            t.hasBG && t.$bg_img.css("opacity", (100 - Math.abs(120 * e / this.__width / 3)) / 100), t.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -i + "px) rotateY(0.01deg) translateX(" + .75 * e + "px)")
        }, t.__updateSlidesVertic = function (t, e) {
            var i = Math.abs(100 * e / this.__width);
            t.hasBG && t.$bg_img.css("opacity", (100 - Math.abs(120 * e / this.__width / 3)) / 100), t.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -i + "px) rotateY(0.01deg) translateY(" + .75 * e + "px)")
        }, MSSlideController.registerView("partialWave", MSPartialWaveView)
    }(),
    function () {
        "use strict";
        window.MSBoxView = function (t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-box-view"), this.controller.renderCallback(this.__update, this)
        }, MSBoxView.extend(MSFadeView), MSBoxView._3dreq = !0;
        var t = MSBoxView.prototype,
            e = MSFadeView.prototype;
        t.__updateSlides = function (t, e) {
            var i = Math.abs(e / this[this.__dimension]),
                s = t.$element[0];
            0 >= 1 - i ? (s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = "rotate" + this._rotateDir + "(" + i * (0 > e ? 1 : -1) * 90 * this._calcFactor + "deg)", s.style[window._jcsspfx + "TransformOrigin"] = "50% 50% -" + t[this.__dimension] / 2 + "px", s.style.zIndex = Math.ceil(2 * (1 - i)))
        }, t.create = function (t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03, this._rotateDir = "h" === this.options.dir ? "Y" : "X", this._calcFactor = "h" === this.options.dir ? 1 : -1
        }, MSSlideController.registerView("box", MSBoxView)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function () {
                this.options = {
                    prefix: "ms-",
                    autohide: !0,
                    overVideo: !0,
                    customClass: null
                }
            },
            e = t.prototype;
        e.slideAction = function () {}, e.setup = function () {
            this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont, this.options.overVideo || this._hideOnvideoStarts()
        }, e.checkHideUnder = function () {
            this.options.hideUnder && (this.needsRealign = !this.options.insetTo && ("left" === this.options.align || "right" === this.options.align) && !1 === this.options.inset, $(window).bind("resize", {
                that: this
            }, this.onResize), this.onResize())
        }, e.onResize = function (t) {
            var e = t && t.data.that || this,
                i = window.innerWidth;
            i <= e.options.hideUnder && !e.detached ? (e.hide(!0), e.detached = !0, e.onDetach()) : i >= e.options.hideUnder && e.detached && (e.detached = !1, e.visible(), e.onAppend())
        }, e.create = function () {
            this.options.autohide && (this.hide(!0), this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), this.$element && this.$element.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), $(document).mouseup($.proxy(this._onMouseUp, this))), this.options.align && this.$element.addClass("ms-align-" + this.options.align), this.options.customClass && this.$element && this.$element.addClass(this.options.customClass)
        }, e._onMouseEnter = function () {
            this._disableAH || this.mdown || this.visible(), this.mleave = !1
        }, e._onMouseLeave = function () {
            this.mdown || this.hide(), this.mleave = !0
        }, e._onMouseDown = function () {
            this.mdown = !0
        }, e._onMouseUp = function () {
            this.mdown && this.mleave && this.hide(), this.mdown = !1
        }, e.onAppend = function () {
            this.needsRealign && this.slider._realignControls()
        }, e.onDetach = function () {
            this.needsRealign && this.slider._realignControls()
        }, e._hideOnvideoStarts = function () {
            var t = this;
            this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function () {
                t._disableAH = !0, t.hide()
            }), this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function () {
                t._disableAH = !1, t.visible()
            })
        }, e.hide = function (t) {
            if (t) this.$element.css("opacity", 0), this.$element.css("display", "none");
            else {
                clearTimeout(this.hideTo);
                var e = this.$element;
                this.hideTo = setTimeout(function () {
                    CTween.fadeOut(e, 400, !1)
                }, 20)
            }
            this.$element.addClass("ms-ctrl-hide")
        }, e.visible = function () {
            this.detached || (clearTimeout(this.hideTo), this.$element.css("display", ""), CTween.fadeIn(this.$element, 400, !1), this.$element.removeClass("ms-ctrl-hide"))
        }, e.destroy = function () {
            this.options && this.options.hideUnder && $(window).unbind("resize", this.onResize)
        }, window.BaseControl = t
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), $.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            var t = this;
            this.$next = $("<div></div>").addClass(this.options.prefix + "nav-next").bind("click", function () {
                t.slider.api.next(!0)
            }), this.$prev = $("<div></div>").addClass(this.options.prefix + "nav-prev").bind("click", function () {
                t.slider.api.previous(!0)
            }), i.setup.call(this), this.cont.append(this.$next), this.cont.append(this.$prev), this.checkHideUnder()
        }, e.hide = function (t) {
            return t ? (this.$prev.css("opacity", 0).css("display", "none"), void this.$next.css("opacity", 0).css("display", "none")) : (CTween.fadeOut(this.$prev, 400, !1), CTween.fadeOut(this.$next, 400, !1), this.$prev.addClass("ms-ctrl-hide"), void this.$next.addClass("ms-ctrl-hide"))
        }, e.visible = function () {
            this.detached || (CTween.fadeIn(this.$prev, 400), CTween.fadeIn(this.$next, 400), this.$prev.removeClass("ms-ctrl-hide").css("display", ""), this.$next.removeClass("ms-ctrl-hide").css("display", ""))
        }, e.destroy = function () {
            i.destroy(), this.$next.remove(), this.$prev.remove()
        }, window.MSArrows = t, MSSlideController.registerControl("arrows", t)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), this.options.dir = "h", this.options.wheel = "v" === t.dir, this.options.arrows = !1, this.options.speed = 17, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.space = 10, this.options.width = 100, this.options.height = 100, this.options.type = "thumbs", this.options.hover = !1, $.extend(this.options, t), this.thumbs = [], this.index_count = 0, this.__dimen = "h" === this.options.dir ? "width" : "height", this.__alignsize = "h" === this.options.dir ? "height" : "width", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.click_enable = !0
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "thumb-list"), "tabs" === this.options.type && this.$element.addClass(this.options.prefix + "tabs"), this.$element.addClass("ms-dir-" + this.options.dir), i.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$thumbscont = $("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows) {
                var t = this;
                this.$fwd = $("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function () {
                    t.controller.push(-15)
                }), this.$bwd = $("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function () {
                    t.controller.push(15)
                })
            }
            if (!this.options.insetTo && this.options.align) {
                var e = this.options.align;
                this.options.inset ? this.$element.css(e, this.options.margin) : "top" === e ? this.$element.detach().prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === e ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.width) : this.$element.height(this.options.height)
            }
            this.checkHideUnder()
        }, e.align = function () {
            if (!this.detached) {
                var t = this.options.align,
                    e = this.slider.reserveSpace(t, this.options[this.__alignsize] + 2 * this.options.margin);
                this.$element.css(t, -e - this.options[this.__alignsize] - this.options.margin)
            }
        }, e.slideAction = function (t) {
            var e = t.$element.find(".ms-thumb"),
                i = this,
                s = $("<div></div>").addClass("ms-thumb-frame").append(e).append($('<div class="ms-thumb-ol"></div>')).bind(this.options.hover ? "hover" : "click", function () {
                    i.changeSlide(s)
                });
            if (this.options.align && s.width(this.options.width - ("v" === this.options.dir && "tabs" === this.options.type ? 12 : 0)).height(this.options.height).css("margin-" + ("v" === this.options.dir ? "bottom" : "right"), this.options.space), s[0].index = this.index_count++, this.$thumbscont.append(s), this.options.fillMode && e.is("img")) {
                var n = new window.MSAligner(this.options.fillMode, s, e);
                e[0].aligner = n, e.one("load", function () {
                    var t = $(this);
                    t[0].aligner.init(t.width(), t.height()), t[0].aligner.align()
                }).each($.jqLoadFix)
            }
            $.browser.msie && e.on("dragstart", function (t) {
                t.preventDefault()
            }), this.thumbs.push(s)
        }, e.create = function () {
            i.create.call(this), this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.controller = new Controller(0, 0, {
                snappingMinSpeed: 2,
                friction: (100 - .5 * this.options.speed) / 100
            }), this.controller.renderCallback("h" === this.options.dir ? this._hMove : this._vMove, this);
            var t = this;
            this.resize_listener = function () {
                t.__resize()
            }, $(window).bind("resize", this.resize_listener), this.thumbSize = this.thumbs[0][this.__jdimen](!0), this.setupSwipe(), this.__resize();
            var t = this;
            this.options.wheel && (this.wheellistener = function (e) {
                var i = window.event || e.orginalEvent || e,
                    s = Math.max(-1, Math.min(1, i.wheelDelta || -i.detail));
                return t.controller.push(10 * -s), !1
            }, $.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this), this.cindex = this.slider.api.index(), this.select(this.thumbs[this.cindex])
        }, e._hMove = function (t, e) {
            return this.__contPos = e, window._cssanim ? void(this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -e + "px)" + this.__translate_end) : void(this.$thumbscont[0].style.left = -e + "px")
        }, e._vMove = function (t, e) {
            return this.__contPos = e, window._cssanim ? void(this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -e + "px)" + this.__translate_end) : void(this.$thumbscont[0].style.top = -e + "px")
        }, e.setupSwipe = function () {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.options.dir ? "horizontal" : "vertical";
            var t = this;
            this.swipeControl.onSwipe = "h" === this.options.dir ? function (e) {
                t.horizSwipeMove(e)
            } : function (e) {
                t.vertSwipeMove(e)
            }
        }, e.vertSwipeMove = function (t) {
            if (!this.dTouch) {
                var e = t.phase;
                if ("start" === e) this.controller.stop();
                else if ("move" === e) this.controller.drag(t.moveY);
                else if ("end" === e || "cancel" === e) {
                    var i = Math.abs(t.distanceY / t.duration * 50 / 3);
                    i > .1 ? this.controller.push(-t.distanceY / t.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, e.horizSwipeMove = function (t) {
            if (!this.dTouch) {
                var e = t.phase;
                if ("start" === e) this.controller.stop(), this.click_enable = !1;
                else if ("move" === e) this.controller.drag(t.moveX);
                else if ("end" === e || "cancel" === e) {
                    var i = Math.abs(t.distanceX / t.duration * 50 / 3);
                    i > .1 ? this.controller.push(-t.distanceX / t.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, e.update = function () {
            var t = this.slider.api.index();
            this.cindex !== t && (null != this.cindex && this.unselect(this.thumbs[this.cindex]), this.cindex = t, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
        }, e.realignThumbs = function () {
            this.$element.find(".ms-thumb").each(function (t, e) {
                e.aligner && e.aligner.align()
            })
        }, e.updateThumbscroll = function () {
            var t = this.thumbSize * this.cindex;
            if (NaN == this.controller.value && (this.controller.value = 0), t - this.controller.value < 0) return void this.controller.gotoSnap(this.cindex, !0);
            if (t + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
                var e = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
                return void this.controller.gotoSnap(e, !0)
            }
        }, e.changeSlide = function (t) {
            this.click_enable && this.cindex !== t[0].index && this.slider.api.gotoSlide(t[0].index)
        }, e.unselect = function (t) {
            t.removeClass("ms-thumb-frame-selected")
        }, e.select = function (t) {
            t.addClass("ms-thumb-frame-selected")
        }, e.__resize = function () {
            var t = this.$element[this.__dimen]();
            if (this.ls !== t) {
                this.ls = t, this.thumbSize = this.thumbs[0][this.__jdimen](!0);
                var e = this.slider.api.count() * this.thumbSize;
                this.$thumbscont[0].style[this.__dimen] = e + "px", t >= e ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = .5 * (t - e) + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = e - t, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll())
            }
        }, e.destroy = function () {
            i.destroy(), this.options.wheel && ($.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), $(window).unbind("resize", this.resize_listener), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, window.MSThumblist = t, MSSlideController.registerControl("thumblist", t)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), this.options.dir = "h", this.options.inset = !0, this.options.margin = 10, this.options.space = 10, $.extend(this.options, t), this.bullets = []
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            if (i.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$bullet_cont = $("<div></div>").addClass("ms-bullets-count").appendTo(this.$element), !this.options.insetTo && this.options.align) {
                var t = this.options.align;
                this.options.inset && this.$element.css(t, this.options.margin)
            }
            this.checkHideUnder()
        }, e.create = function () {
            i.create.call(this);
            var t = this;
            this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index();
            for (var e = 0; e < this.slider.api.count(); ++e) {
                var s = $("<div></div>").addClass("ms-bullet");
                s[0].index = e, s.on("click", function () {
                    t.changeSlide(this.index)
                }), this.$bullet_cont.append(s), this.bullets.push(s), "h" === this.options.dir ? s.css("margin", this.options.space / 2) : s.css("margin", this.options.space)
            }
            "h" === this.options.dir ? this.$element.width(s.outerWidth(!0) * this.slider.api.count()) : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2), this.select(this.bullets[this.cindex])
        }, e.update = function () {
            var t = this.slider.api.index();
            this.cindex !== t && (null != this.cindex && this.unselect(this.bullets[this.cindex]), this.cindex = t, this.select(this.bullets[this.cindex]))
        }, e.changeSlide = function (t) {
            this.cindex !== t && this.slider.api.gotoSlide(t)
        }, e.unselect = function (t) {
            t.removeClass("ms-bullet-selected")
        }, e.select = function (t) {
            t.addClass("ms-bullet-selected")
        }, e.destroy = function () {
            i.destroy(), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.$element.remove()
        }, window.MSBulltes = t, MSSlideController.registerControl("bullets", t)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), this.options.dir = "h", this.options.autohide = !0, this.options.width = 4, this.options.color = "#3D3D3D", this.options.margin = 10, $.extend(this.options, t), this.__dimen = "h" === this.options.dir ? "width" : "height", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.__translate_start = "h" === this.options.dir ? " translateX(" : "translateY("
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir), i.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass(this.options.prefix + "bar").appendTo(this.$element), this.slider.options.loop && (this.disable = !0, this.$element.remove()), "v" === this.options.dir ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                this.$element.css("v" === this.options.dir ? {
                    right: "auto",
                    left: "auto"
                } : {
                    top: "auto",
                    bottom: "auto"
                });
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, e.align = function () {
            if (!this.detached) {
                var t = this.options.align,
                    e = this.slider.reserveSpace(t, 2 * this.options.margin + this.options.width);
                this.$element.css(t, -e - this.options.margin - this.options.width)
            }
        }, e.create = function () {
            this.disable || (this.scroller = this.slider.api.scroller, this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this), this._resize(), this.options.autohide && this.$bar.css("opacity", "0"))
        }, e._resize = function () {
            this.vdimen = this.$element[this.__dimen](), this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value, this.$bar[this.__dimen](this.bar_dimen)
        }, e._update = function () {
            var t = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
            if (this.lvalue !== t) {
                if (this.lvalue = t, this.options.autohide) {
                    clearTimeout(this.hto), this.$bar.css("opacity", "1");
                    var e = this;
                    this.hto = setTimeout(function () {
                        e.$bar.css("opacity", "0")
                    }, 150)
                }
                return 0 > t ? void(this.$bar[0].style[this.__dimen] = this.bar_dimen + t + "px") : (t > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - t + "px"), window._cssanim ? void(this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + t + "px)" + this.__translate_end) : void(this.$bar[0].style[this.__pos] = t + "px"))
            }
        }, e.destroy = function () {
            i.destroy(), this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.$element.remove()
        }, window.MSScrollbar = t, MSSlideController.registerControl("scrollbar", t)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), this.options.autohide = !1, this.options.width = 4, this.options.color = "#FFFFFF", this.options.inset = !0, this.options.margin = 0, $.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            if (i.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "timerbar"), i.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass("ms-time-bar").appendTo(this.$element), "v" === this.options.dir ? (this.$bar.width(this.options.width), this.$element.width(this.options.width)) : (this.$bar.height(this.options.width), this.$element.height(this.options.width)), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                this.$element.css({
                    top: "auto",
                    bottom: "auto"
                });
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, e.align = function () {
            if (!this.detached) {
                var t = this.options.align,
                    e = this.slider.reserveSpace(t, 2 * this.options.margin + this.options.width);
                this.$element.css(t, -e - this.options.margin - this.options.width)
            }
        }, e.create = function () {
            i.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this), this._update()
        }, e._update = function () {
            this.$bar[0].style.width = this.slider.api._delayProgress + "%"
        }, e.destroy = function () {
            i.destroy(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove()
        }, window.MSTimerbar = t, MSSlideController.registerControl("timebar", t)
    }(jQuery),
    function ($) {
        "use strict";
        var t = function (t) {
            BaseControl.call(this), this.options.color = "#A2A2A2", this.options.stroke = 10, this.options.radius = 4, this.options.autohide = !1, $.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            i = BaseControl.prototype;
        e.setup = function () {
            return i.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = $("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = $("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element), this.$canvas[0].getContext ? (this.ctx = this.$canvas[0].getContext("2d"), this.prog = 0, this.__w = 2 * (this.options.radius + this.options.stroke / 2), this.$canvas[0].width = this.__w, this.$canvas[0].height = this.__w, void this.checkHideUnder()) : (this.destroy(), void(this.disable = !0))
        }, e.create = function () {
            if (!this.disable) {
                i.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
                var t = this;
                this.$element.click(function () {
                    t.slider.api.paused ? t.slider.api.resume() : t.slider.api.pause()
                }), this._update()
            }
        }, e._update = function () {
            var t = this;
            $(this).stop(!0).animate({
                prog: .01 * this.slider.api._delayProgress
            }, {
                duration: 200,
                step: function () {
                    t._draw()
                }
            })
        }, e._draw = function () {
            this.ctx.clearRect(0, 0, this.__w, this.__w), this.ctx.beginPath(), this.ctx.arc(.5 * this.__w, .5 * this.__w, this.options.radius, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * this.prog, !1), this.ctx.strokeStyle = this.options.color, this.ctx.lineWidth = this.options.stroke, this.ctx.stroke()
        }, e.destroy = function () {
            i.destroy(), this.disable || ($(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove())
        }, window.MSCircleTimer = t, MSSlideController.registerControl("circletimer", t)
    }(jQuery),
    function ($) {
        "use strict";
        window.MSLightbox = function (t) {
            BaseControl.call(this, t), this.options.autohide = !1, $.extend(this.options, t), this.data_list = []
        }, MSLightbox.fadeDuratation = 400, MSLightbox.extend(BaseControl);
        var t = MSLightbox.prototype,
            e = BaseControl.prototype;
        t.setup = function () {
            e.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont), this.checkHideUnder()
        }, t.slideAction = function (t) {
            $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(t.$element).append($(t.$element.find(".ms-lightbox")))
        }, t.create = function () {
            e.create.call(this)
        }, MSSlideController.registerControl("lightbox", MSLightbox)
    }(jQuery),
    function ($) {
        "use strict";
        window.MSSlideInfo = function (t) {
            BaseControl.call(this, t), this.options.autohide = !1, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.size = 100, this.options.dir = "h", $.extend(this.options, t), this.data_list = []
        }, MSSlideInfo.fadeDuratation = 400, MSSlideInfo.extend(BaseControl);
        var t = MSSlideInfo.prototype,
            e = BaseControl.prototype;
        t.setup = function () {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir), e.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), !this.options.insetTo && this.options.align) {
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
            }
            this.checkHideUnder()
        }, t.align = function () {
            if (!this.detached) {
                var t = this.options.align,
                    e = this.slider.reserveSpace(t, this.options.size + 2 * this.options.margin);
                this.$element.css(t, -e - this.options.size - this.options.margin)
            }
        }, t.slideAction = function (t) {
            var e = $(t.$element.find(".ms-info"));
            e.detach(), this.data_list[t.index] = e
        }, t.create = function () {
            e.create.call(this), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.switchEle(this.data_list[this.cindex])
        }, t.update = function () {
            var t = this.slider.api.index();
            this.switchEle(this.data_list[t]), this.cindex = t
        }, t.switchEle = function (t) {
            this.current_ele && (this.current_ele[0].tween && this.current_ele[0].tween.stop(!0), this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {
                opacity: 0
            }, {
                complete: function () {
                    this.detach(), this[0].tween = null, t.css("position", "relative")
                },
                target: this.current_ele
            }), t.css("position", "absolute")), this.__show(t)
        }, t.__show = function (t) {
            t.appendTo(this.$element).css("opacity", "0"), this.current_ele && t.height(Math.max(t.height(), this.current_ele.height())), clearTimeout(this.tou), this.tou = setTimeout(function () {
                CTween.fadeIn(t, MSSlideInfo.fadeDuratation), t.css("height", "")
            }, MSSlideInfo.fadeDuratation), t[0].tween && t[0].tween.stop(!0), this.current_ele = t
        }, t.destroy = function () {
            e.destroy(), clearTimeout(this.tou), this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, MSSlideController.registerControl("slideinfo", MSSlideInfo)
    }(jQuery),
    function ($) {
        window.MSGallery = function (t, e) {
            this.id = t, this.slider = e, this.telement = $("#" + t), this.botcont = $("<div></div>").addClass("ms-gallery-botcont").appendTo(this.telement), this.thumbcont = $("<div></div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont), this.playbtn = $("<div></div>").addClass("ms-gal-playbtn").appendTo(this.botcont), this.thumbtoggle = $("<div></div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont), e.control("thumblist", {
                insertTo: this.thumbcont,
                autohide: !1,
                dir: "h"
            }), e.control("slidenum", {
                insertTo: this.botcont,
                autohide: !1
            }), e.control("slideinfo", {
                insertTo: this.botcont,
                autohide: !1
            }), e.control("timebar", {
                insertTo: this.botcont,
                autohide: !1
            }), e.control("bullets", {
                insertTo: this.botcont,
                autohide: !1
            })
        };
        var t = MSGallery.prototype;
        t._init = function () {
            var t = this;
            this.slider.api.paused || this.playbtn.addClass("btn-pause"), this.playbtn.click(function () {
                t.slider.api.paused ? (t.slider.api.resume(), t.playbtn.addClass("btn-pause")) : (t.slider.api.pause(), t.playbtn.removeClass("btn-pause"))
            }), this.thumbtoggle.click(function () {
                t.vthumbs ? (t.thumbtoggle.removeClass("btn-hide"), t.vthumbs = !1, t.thumbcont.addClass("hide-thumbs")) : (t.thumbtoggle.addClass("btn-hide"), t.thumbcont.removeClass("hide-thumbs"), t.vthumbs = !0)
            })
        }, t.setup = function () {
            var t = this;
            $(document).ready(function () {
                t._init()
            })
        }
    }(jQuery),
    function ($) {
        var t = function (t, e, i) {
                return "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + t + "&photoset_id=" + e + "&per_page=" + i + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
            },
            e = function (t, e, i) {
                return "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" + t + "&user_id=" + e + "&per_page=" + i + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
            },
            i = function (t, e, i, s, n, r) {
                return "_o" === n && r ? r.url_o : "https://farm" + t + ".staticflickr.com/" + e + "/" + i + "_" + s + n + ".jpg"
            };
        window.MSFlickrV2 = function (i, s) {
            var n = {
                count: 10,
                type: "photoset",
                thumbSize: "q",
                imgSize: "c"
            };
            if (this.slider = i, this.slider.holdOn(), !s.key) return void this.errMsg("Flickr API Key required. Please add it in settings.");
            $.extend(n, s), this.options = n;
            var r = this;
            "photoset" === this.options.type ? $.getJSON(t(this.options.key, this.options.id, this.options.count), function (t) {
                r._photosData(t)
            }) : $.getJSON(e(this.options.key, this.options.id, this.options.count), function (t) {
                r.options.type = "photos", r._photosData(t)
            }), "" !== this.options.imgSize && "-" !== this.options.imgSize && (this.options.imgSize = "_" + this.options.imgSize), this.options.thumbSize = "_" + this.options.thumbSize, this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
        };
        var s = MSFlickrV2.prototype;
        s._photosData = function (t) {
            if ("fail" === t.stat) return void this.errMsg("Flickr API ERROR#" + t.code + ": " + t.message);
            var e = this;
            this.options.author || this.options.desc, $.each(t[this.options.type].photo, function (t, i) {
                var s = e.slideTemplate.replace(/{{[\w-]+}}/g, function (t) {
                    return t = t.replace(/{{|}}/g, ""), n[t] ? n[t](i, e) : "{{" + t + "}}"
                });
                $(s).appendTo(e.slider.$element)
            }), e._initSlider()
        }, s.errMsg = function (t) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(t)
        }, s._initSlider = function () {
            this.slider.release()
        };
        var n = {
            image: function (t, e) {
                return i(t.farm, t.server, t.id, t.secret, e.options.imgSize, t)
            },
            thumb: function (t, e) {
                return i(t.farm, t.server, t.id, t.secret, e.options.thumbSize)
            },
            title: function (t) {
                return t.title
            },
            "owner-name": function (t) {
                return t.ownername
            },
            "date-taken": function (t) {
                return t.datetaken
            },
            views: function (t) {
                return t.views
            },
            description: function (t) {
                return t.description._content
            }
        }
    }(jQuery),
    function ($) {
        window.MSFacebookGallery = function (t, e) {
            var i = {
                count: 10,
                type: "photostream",
                thumbSize: "320",
                imgSize: "orginal",
                https: !1,
                token: ""
            };
            this.slider = t, this.slider.holdOn(), $.extend(i, e), this.options = i, this.graph = "https://graph.facebook.com";
            var s = this;
            "photostream" === this.options.type ? $.getJSON(this.graph + "/" + this.options.username + "/photos/uploaded/?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function (t) {
                s._photosData(t)
            }) : $.getJSON(this.graph + "/" + this.options.albumId + "/photos?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function (t) {
                s._photosData(t)
            }), this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
        };
        var t = MSFacebookGallery.prototype;
        t._photosData = function (t) {
            if (t.error) return void this.errMsg("Facebook API ERROR#" + t.error.code + "(" + t.error.type + "): " + t.error.message);
            for (var e = this, s = (this.options.author || this.options.desc, 0), n = t.data.length; s !== n; s++) {
                var r = e.slideTemplate.replace(/{{[\w-]+}}/g, function (n) {
                    return n = n.replace(/{{|}}/g, ""), i[n] ? i[n](t.data[s], e) : "{{" + n + "}}"
                });
                $(r).appendTo(e.slider.$element)
            }
            e._initSlider()
        }, t.errMsg = function (t) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(t)
        }, t._initSlider = function () {
            this.slider.release()
        };
        var e = function (t, e) {
                if ("orginal" === e) return t[0].source;
                for (var i = 0, s = t.length; i !== s; i++)
                    if (-1 !== t[i].source.indexOf(e + "x" + e)) return t[i].source;
                return t[0].source
            },
            i = {
                image: function (t, i) {
                    return e(t.images, i.options.imgSize)
                },
                thumb: function (t, i) {
                    return e(t.images, i.options.thumbSize)
                },
                name: function (t) {
                    return t.name
                },
                "owner-name": function (t) {
                    return t.from.name
                },
                link: function (t) {
                    return t.link
                }
            }
    }(jQuery),
    function ($) {
        "use strict";
        window.MSScrollParallax = function (t, e, i, s) {
            this.fade = s, this.slider = t, this.parallax = e / 100, this.bgparallax = i / 100, t.api.addEventListener(MSSliderEvent.INIT, this.init, this), t.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this), t.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), t.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this)
        }, window.MSScrollParallax.setup = function (t, e, i, s) {
            return window._mobile ? void 0 : (null == e && (e = 50), null == i && (i = 40), new MSScrollParallax(t, e, i, s))
        };
        var t = window.MSScrollParallax.prototype;
        t.init = function () {
            this.slider.$element.addClass("ms-scroll-parallax"), this.sliderOffset = this.slider.$element.offset().top, this.updateCurrentSlide();
            for (var t, e = this.slider.api.view.slideList, i = 0, s = e.length; i !== s; i++) t = e[i], t.hasLayers && (t.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>'), t.$scrollParallaxCont = t.layerController.$layers.parent());
            $(window).on("scroll", {
                that: this
            }, this.moveParallax).trigger("scroll")
        }, t.resetLayers = function () {
            if (this.lastSlide) {
                var t = this.lastSlide.$scrollParallaxCont;
                window._css2d ? (t && (t[0].style[window._jcsspfx + "Transform"] = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style[window._jcsspfx + "Transform"] = "")) : (t && (t[0].style.top = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style.top = "0px"))
            }
        }, t.updateCurrentSlide = function () {
            this.lastSlide = this.currentSlide, this.currentSlide = this.slider.api.currentSlide, this.moveParallax({
                data: {
                    that: this
                }
            })
        }, t.moveParallax = function (t) {
            var e = t.data.that,
                i = e.slider,
                s = e.sliderOffset,
                n = $(window).scrollTop(),
                r = e.currentSlide.$scrollParallaxCont,
                o = s - n;
            0 >= o ? (r && (window._css3d ? r[0].style[window._jcsspfx + "Transform"] = "translateY(" + -o * e.parallax + "px) translateZ(0.4px)" : window._css2d ? r[0].style[window._jcsspfx + "Transform"] = "translateY(" + -o * e.parallax + "px)" : r[0].style.top = -o * e.parallax + "px"), e.updateSlidesBG(-o * e.bgparallax + "px", !0), r && e.fade && r.css("opacity", 1 - Math.min(1, -o / i.api.height))) : (r && (window._css2d ? r[0].style[window._jcsspfx + "Transform"] = "" : r[0].style.top = ""), e.updateSlidesBG("0px", !1), r && e.fade && r.css("opacity", 1))
        }, t.updateSlidesBG = function (t, e) {
            for (var i = this.slider.api.view.slideList, s = !e || $.browser.msie || $.browser.opera ? "" : "fixed", n = 0, r = i.length; n !== r; n++) i[n].hasBG && (i[n].$imgcont[0].style.position = s, i[n].$imgcont[0].style.top = t), i[n].$bgvideocont && (i[n].$bgvideocont[0].style.position = s, i[n].$bgvideocont[0].style.top = t)
        }, t.destory = function () {
            slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this), slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this), $(window).off("scroll", this.moveParallax)
        }
    }(jQuery),
    function ($, t, e) {
        var i = 0;
        if (e.MasterSlider) {
            var s = function (t) {
                this.slider = t, this.PId = i++, this.slider.options.keyboard && t.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            s.name = "MSKeyboardNav";
            var n = s.prototype;
            n.init = function () {
                var e = this.slider.api;
                $(t).on("keydown.kbnav" + this.PId, function (t) {
                    var i = t.which;
                    37 === i || 40 === i ? e.previous(!0) : (38 === i || 39 === i) && e.next(!0)
                })
            }, n.destroy = function () {
                $(t).off("keydown.kbnav" + this.PId), this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(s)
        }
    }(jQuery, document, window),
    function ($, t, e) {
        var i = 0,
            s = $(e),
            n = $(t);
        if (e.MasterSlider) {
            var r = function (t) {
                this.PId = i++, this.slider = t, this.$slider = t.$element, this.slider.options.startOnAppear && (t.holdOn(), n.ready($.proxy(this.init, this)))
            };
            r.name = "MSStartOnAppear";
            var o = r.prototype;
            o.init = function () {
                this.slider.api, s.on("scroll.soa" + this.PId, $.proxy(this._onScroll, this)).trigger("scroll")
            }, o._onScroll = function () {
                s.scrollTop() + s.height() > this.$slider.offset().top && (s.off("scroll.soa" + this.PId), this.slider.release())
            }, o.destroy = function () {}, MasterSlider.registerPlugin(r)
        }
    }(jQuery, document, window),
    function (t, e) {
        var i = {
                "hue-rotate": "deg",
                blur: "px"
            },
            s = {
                opacity: 1,
                contrast: 1,
                brightness: 1,
                saturate: 1,
                "hue-rotate": 0,
                invert: 0,
                sepia: 0,
                blur: 0,
                grayscale: 0
            };
        if (e.MasterSlider) {
            var n = function (t) {
                this.slider = t, this.slider.options.filters && t.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            n.name = "MSFilters";
            var r = n.prototype;
            r.init = function () {
                var t = this.slider.api,
                    e = t.view;
                this.filters = this.slider.options.filters, this.slideList = e.slideList, this.slidesCount = e.slidesCount, this.dimension = e[e.__dimension], this.target = "slide" === this.slider.options.filterTarget ? "$element" : "$bg_img", this.filterName = $.browser.webkit ? "WebkitFilter" : "filter";
                var i = e.controller.__renderHook.fun,
                    s = e.controller.__renderHook.ref;
                e.controller.renderCallback(function (t, e) {
                    i.call(s, t, e), this.applyEffect(e)
                }, this), this.applyEffect(e.controller.value)
            }, r.applyEffect = function (t) {
                for (var e, i, s = 0; s < this.slidesCount; ++s) i = this.slideList[s], e = Math.min(1, Math.abs(t - i.position) / this.dimension), i[this.target] && ($.browser.msie ? null != this.filters.opacity && i[this.target].opacity(1 - this.filters.opacity * e) : i[this.target][0].style[this.filterName] = this.generateStyle(e))
            }, r.generateStyle = function (t) {
                var e, n = "";
                for (var r in this.filters) e = i[r] || "", n += r + "(" + (s[r] + (this.filters[r] - s[r]) * t) + ") ";
                return n
            }, r.destroy = function () {
                this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(n)
        }
    }(document, window, jQuery),
    function ($, t, e) {
        if (e.MasterSlider) {
            var i = function (t) {
                this.slider = t, t.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            i.name = "MSScrollToAction";
            var s = i.prototype;
            s.init = function () {
                var t = this.slider.api;
                t.scrollToEnd = r, t.scrollTo = n
            }, s.destroy = function () {};
            var n = function (t, e) {
                    var t = (this.slider.$element, $(t).eq(0));
                    0 !== t.length && (null == e && (e = 1.4), $("html, body").animate({
                        scrollTop: t.offset().top
                    }, 1e3 * e, "easeInOutQuad"))
                },
                r = function (t) {
                    var e = this.slider.$element;
                    null == t && (t = 1.4), $("html, body").animate({
                        scrollTop: e.offset().top + e.outerHeight(!1)
                    }, 1e3 * t, "easeInOutQuad")
                };
            MasterSlider.registerPlugin(i)
        }
    }(jQuery, document, window),
    function ($, t) {
        "use strict";
        if (t.MSReady)
            for (var e = 0, i = MSReady.length; e !== i; e++) MSReady[e].call(null, $)
    }(jQuery, window, document),
    function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Blazy = e()
    }(this, function () {
        function t(t) {
            var i = t._util;
            i.elements = l(t.options), i.count = i.elements.length, i.destroyed && (i.destroyed = !1, t.options.container && u(t.options.container, function (t) {
                c(t, "scroll", i.validateT)
            }), c(window, "resize", i.saveViewportOffsetT), c(window, "resize", i.validateT), c(window, "scroll", i.validateT)), e(t)
        }

        function e(t) {
            for (var e = t._util, s = 0; s < e.count; s++) {
                var n = e.elements[s],
                    r, a = n;
                r = t.options;
                var l = a.getBoundingClientRect();
                r.container && g && (a = a.closest(r.containerClass)) ? (a = a.getBoundingClientRect(), r = !!i(a, m) && i(l, {
                    top: a.top - r.offset,
                    right: a.right + r.offset,
                    bottom: a.bottom + r.offset,
                    left: a.left - r.offset
                })) : r = i(l, m), (r || o(n, t.options.successClass)) && (t.load(n), e.elements.splice(s, 1), e.count--, s--)
            }
            0 === e.count && t.destroy()
        }

        function i(t, e) {
            return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
        }

        function s(t, e, i) {
            if (!o(t, i.successClass) && (e || i.loadInvisible || 0 < t.offsetWidth && 0 < t.offsetHeight))
                if (e = t.getAttribute(f) || t.getAttribute(i.src)) {
                    e = e.split(i.separator);
                    var s = e[v && 1 < e.length ? 1 : 0],
                        l = t.getAttribute(i.srcset),
                        h = "img" === t.nodeName.toLowerCase(),
                        p = (e = t.parentNode) && "picture" === e.nodeName.toLowerCase();
                    if (h || void 0 === t.src) {
                        var m = new Image,
                            g = function () {
                                i.error && i.error(t, "invalid"), a(t, i.errorClass), d(m, "error", g), d(m, "load", _)
                            },
                            _ = function () {
                                h ? p || r(t, s, l) : t.style.backgroundImage = 'url("' + s + '")', n(t, i), d(m, "load", _), d(m, "error", g)
                            };
                        p && (m = t, u(e.getElementsByTagName("source"), function (t) {
                            var e = i.srcset,
                                s = t.getAttribute(e);
                            s && (t.setAttribute("srcset", s), t.removeAttribute(e))
                        })), c(m, "error", g), c(m, "load", _), r(m, s, l)
                    } else t.src = s, n(t, i)
                } else "video" === t.nodeName.toLowerCase() ? (u(t.getElementsByTagName("source"), function (t) {
                    var e = i.src,
                        s = t.getAttribute(e);
                    s && (t.setAttribute("src", s), t.removeAttribute(e))
                }), t.load(), n(t, i)) : (i.error && i.error(t, "missing"), a(t, i.errorClass))
        }

        function n(t, e) {
            a(t, e.successClass), e.success && e.success(t), t.removeAttribute(e.src), t.removeAttribute(e.srcset), u(e.breakpoints, function (e) {
                t.removeAttribute(e.src)
            })
        }

        function r(t, e, i) {
            i && t.setAttribute("srcset", i), t.src = e
        }

        function o(t, e) {
            return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
        }

        function a(t, e) {
            o(t, e) || (t.className += " " + e)
        }

        function l(t) {
            var e = [];
            t = t.root.querySelectorAll(t.selector);
            for (var i = t.length; i--; e.unshift(t[i]));
            return e
        }

        function h(t) {
            m.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, m.right = (window.innerWidth || document.documentElement.clientWidth) + t
        }

        function c(t, e, i) {
            t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, i) : t.addEventListener(e, i, {
                capture: !1,
                passive: !0
            })
        }

        function d(t, e, i) {
            t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, i) : t.removeEventListener(e, i, {
                capture: !1,
                passive: !0
            })
        }

        function u(t, e) {
            if (t && e)
                for (var i = t.length, s = 0; s < i && !1 !== e(t[s], s); s++);
        }

        function p(t, e, i) {
            var s = 0;
            return function () {
                var n = +new Date;
                n - s < e || (s = n, t.apply(i, arguments))
            }
        }
        var f, m, v, g;
        return function (i) {
            if (!document.querySelectorAll) {
                var n = document.createStyleSheet();
                document.querySelectorAll = function (t, e, i, s, r) {
                    for (r = document.all, e = [], t = t.replace(/\[for\b/gi, "[htmlFor").split(","), i = t.length; i--;) {
                        for (n.addRule(t[i], "k:v"), s = r.length; s--;) r[s].currentStyle.k && e.push(r[s]);
                        n.removeRule(0)
                    }
                    return e
                }
            }
            var r = this,
                o = r._util = {};
            o.elements = [], o.destroyed = !0, r.options = i || {}, r.options.error = r.options.error || !1, r.options.offset = r.options.offset || 100, r.options.root = r.options.root || document, r.options.success = r.options.success || !1, r.options.selector = r.options.selector || ".b-lazy", r.options.separator = r.options.separator || "|", r.options.containerClass = r.options.container, r.options.container = !!r.options.containerClass && document.querySelectorAll(r.options.containerClass), r.options.errorClass = r.options.errorClass || "b-error", r.options.breakpoints = r.options.breakpoints || !1, r.options.loadInvisible = r.options.loadInvisible || !1, r.options.successClass = r.options.successClass || "b-loaded", r.options.validateDelay = r.options.validateDelay || 25, r.options.saveViewportOffsetDelay = r.options.saveViewportOffsetDelay || 50, r.options.srcset = r.options.srcset || "data-srcset", r.options.src = f = r.options.src || "data-src", g = Element.prototype.closest, v = 1 < window.devicePixelRatio, m = {}, m.top = 0 - r.options.offset, m.left = 0 - r.options.offset, r.revalidate = function () {
                t(r)
            }, r.load = function (t, e) {
                var i = this.options;
                void 0 === t.length ? s(t, e, i) : u(t, function (t) {
                    s(t, e, i)
                })
            }, r.destroy = function () {
                var t = this._util;
                this.options.container && u(this.options.container, function (e) {
                    d(e, "scroll", t.validateT)
                }), d(window, "scroll", t.validateT), d(window, "resize", t.validateT), d(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
            }, o.validateT = p(function () {
                e(r)
            }, r.options.validateDelay, r), o.saveViewportOffsetT = p(function () {
                h(r.options.offset)
            }, r.options.saveViewportOffsetDelay, r), h(r.options.offset), u(r.options.breakpoints, function (t) {
                if (t.width >= window.screen.width) return f = t.src, !1
            }), setTimeout(function () {
                t(r)
            })
        }
    }),
    function () {
        var t, e, i, s, n, r, o, a, l, h, c, d, u, p, f, m, v, g, _, y, w, x, b, S, T, C, M, E, k, L, P, A, O, D, R, N, z, I, j, F, V, H, B, W, q, X, Y, U, G, Q = [].slice,
            Z = {}.hasOwnProperty,
            K = function (t, e) {
                function i() {
                    this.constructor = t
                }
                for (var s in e) Z.call(e, s) && (t[s] = e[s]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            $ = [].indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        for (w = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, k = function () {
                var t;
                return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
            }, P = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == P && (P = function (t) {
                return setTimeout(t, 50)
            }, y = function (t) {
                return clearTimeout(t)
            }), O = function (t) {
                var e, i;
                return e = k(), (i = function () {
                    var s;
                    return s = k() - e, s >= 33 ? (e = k(), t(s, function () {
                        return P(i)
                    })) : setTimeout(i, 33 - s)
                })()
            }, A = function () {
                var t, e, i;
                return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
            }, x = function () {
                var t, e, i, s, n, r, o;
                for (e = arguments[0], s = 2 <= arguments.length ? Q.call(arguments, 1) : [], r = 0, o = s.length; o > r; r++)
                    if (i = s[r])
                        for (t in i) Z.call(i, t) && (n = i[t], null != e[t] && "object" == typeof e[t] && null != n && "object" == typeof n ? x(e[t], n) : e[t] = n);
                return e
            }, v = function (t) {
                var e, i, s, n, r;
                for (i = e = 0, n = 0, r = t.length; r > n; n++) s = t[n], i += Math.abs(s), e++;
                return i / e
            }, S = function (t, e) {
                var i, s, n;
                if (null == t && (t = "options"), null == e && (e = !0), n = document.querySelector("[data-pace-" + t + "]")) {
                    if (i = n.getAttribute("data-pace-" + t), !e) return i;
                    try {
                        return JSON.parse(i)
                    } catch (t) {
                        return s = t, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", s) : void 0
                    }
                }
            }, o = function () {
                function t() {}
                return t.prototype.on = function (t, e, i, s) {
                    var n;
                    return null == s && (s = !1), null == this.bindings && (this.bindings = {}), null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: i,
                        once: s
                    })
                }, t.prototype.once = function (t, e, i) {
                    return this.on(t, e, i, !0)
                }, t.prototype.off = function (t, e) {
                    var i, s, n;
                    if (null != (null != (s = this.bindings) ? s[t] : void 0)) {
                        if (null == e) return delete this.bindings[t];
                        for (i = 0, n = []; i < this.bindings[t].length;) n.push(this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : i++);
                        return n
                    }
                }, t.prototype.trigger = function () {
                    var t, e, i, s, n, r, o, a, l;
                    if (i = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (o = this.bindings) ? o[i] : void 0) {
                        for (n = 0, l = []; n < this.bindings[i].length;) a = this.bindings[i][n], s = a.handler, e = a.ctx, r = a.once, s.apply(null != e ? e : this, t), l.push(r ? this.bindings[i].splice(n, 1) : n++);
                        return l
                    }
                }, t
            }(), h = window.Pace || {}, window.Pace = h, x(h, o.prototype), L = h.options = x({}, w, window.paceOptions, S()), Y = ["ajax", "document", "eventLag", "elements"], B = 0, q = Y.length; q > B; B++) z = Y[B], !0 === L[z] && (L[z] = w[z]);
        l = function (t) {
            function e() {
                return U = e.__super__.constructor.apply(this, arguments)
            }
            return K(e, t), e
        }(Error), e = function () {
            function t() {
                this.progress = 0
            }
            return t.prototype.getElement = function () {
                var t;
                if (null == this.el) {
                    if (!(t = document.querySelector(L.target))) throw new l;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                }
                return this.el
            }, t.prototype.finish = function () {
                var t;
                return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, t.prototype.update = function (t) {
                return this.progress = t, this.render()
            }, t.prototype.destroy = function () {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (t) {
                    l = t
                }
                return this.el = void 0
            }, t.prototype.render = function () {
                var t, e, i, s, n, r, o;
                if (null == document.querySelector(L.target)) return !1;
                for (t = this.getElement(), s = "translate3d(" + this.progress + "%, 0, 0)", o = ["webkitTransform", "msTransform", "transform"], n = 0, r = o.length; r > n; n++) e = o[n], t.children[0].style[e] = s;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
            }, t.prototype.done = function () {
                return this.progress >= 100
            }, t
        }(), a = function () {
            function t() {
                this.bindings = {}
            }
            return t.prototype.trigger = function (t, e) {
                var i, s, n, r, o;
                if (null != this.bindings[t]) {
                    for (r = this.bindings[t], o = [], s = 0, n = r.length; n > s; s++) i = r[s], o.push(i.call(this, e));
                    return o
                }
            }, t.prototype.on = function (t, e) {
                var i;
                return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
            }, t
        }(), H = window.XMLHttpRequest, V = window.XDomainRequest, F = window.WebSocket, b = function (t, e) {
            var i, s, n;
            n = [];
            for (s in e.prototype) try {
                n.push(null == t[s] && "function" != typeof e[s] ? "function" == typeof Object.defineProperty ? Object.defineProperty(t, s, {
                    get: function () {
                        return e.prototype[s]
                    },
                    configurable: !0,
                    enumerable: !0
                }) : t[s] = e.prototype[s] : void 0)
            } catch (t) {
                i = t
            }
            return n
        }, M = [], h.ignore = function () {
            var t, e, i;
            return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], M.unshift("ignore"), i = e.apply(null, t), M.shift(), i
        }, h.track = function () {
            var t, e, i;
            return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], M.unshift("track"), i = e.apply(null, t), M.shift(), i
        }, N = function (t) {
            var e;
            if (null == t && (t = "GET"), "track" === M[0]) return "force";
            if (!M.length && L.ajax) {
                if ("socket" === t && L.ajax.trackWebSockets) return !0;
                if (e = t.toUpperCase(), $.call(L.ajax.trackMethods, e) >= 0) return !0
            }
            return !1
        }, c = function (t) {
            function e() {
                var t, i = this;
                e.__super__.constructor.apply(this, arguments), t = function (t) {
                    var e;
                    return e = t.open, t.open = function (s, n) {
                        return N(s) && i.trigger("request", {
                            type: s,
                            url: n,
                            request: t
                        }), e.apply(t, arguments)
                    }
                }, window.XMLHttpRequest = function (e) {
                    var i;
                    return i = new H(e), t(i), i
                };
                try {
                    b(window.XMLHttpRequest, H)
                } catch (t) {}
                if (null != V) {
                    window.XDomainRequest = function () {
                        var e;
                        return e = new V, t(e), e
                    };
                    try {
                        b(window.XDomainRequest, V)
                    } catch (t) {}
                }
                if (null != F && L.ajax.trackWebSockets) {
                    window.WebSocket = function (t, e) {
                        var s;
                        return s = null != e ? new F(t, e) : new F(t), N("socket") && i.trigger("request", {
                            type: "socket",
                            url: t,
                            protocols: e,
                            request: s
                        }), s
                    };
                    try {
                        b(window.WebSocket, F)
                    } catch (t) {}
                }
            }
            return K(e, t), e
        }(a), W = null, T = function () {
            return null == W && (W = new c), W
        }, R = function (t) {
            var e, i, s, n;
            for (n = L.ajax.ignoreURLs, i = 0, s = n.length; s > i; i++)
                if ("string" == typeof (e = n[i])) {
                    if (-1 !== t.indexOf(e)) return !0
                } else if (e.test(t)) return !0;
            return !1
        }, T().on("request", function (e) {
            var i, s, n, r, o;
            return r = e.type, n = e.request, o = e.url, R(o) ? void 0 : h.running || !1 === L.restartOnRequestAfter && "force" !== N(r) ? void 0 : (s = arguments, i = L.restartOnRequestAfter || 0, "boolean" == typeof i && (i = 0), setTimeout(function () {
                var e, i, o, a, l, c;
                if (e = "socket" === r ? n.readyState < 2 : 0 < (a = n.readyState) && 4 > a) {
                    for (h.restart(), l = h.sources, c = [], i = 0, o = l.length; o > i; i++) {
                        if ((z = l[i]) instanceof t) {
                            z.watch.apply(z, s);
                            break
                        }
                        c.push(void 0)
                    }
                    return c
                }
            }, i))
        }), t = function () {
            function t() {
                var t = this;
                this.elements = [], T().on("request", function () {
                    return t.watch.apply(t, arguments)
                })
            }
            return t.prototype.watch = function (t) {
                var e, i, s, n;
                return s = t.type, e = t.request, n = t.url, R(n) ? void 0 : (i = "socket" === s ? new p(e) : new f(e), this.elements.push(i))
            }, t
        }(), f = function () {
            function t(t) {
                var e, i, s, n, r, o, a = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (i = null, t.addEventListener("progress", function (t) {
                            return a.progress = t.lengthComputable ? 100 * t.loaded / t.total : a.progress + (100 - a.progress) / 2
                        }, !1), o = ["load", "abort", "timeout", "error"], s = 0, n = o.length; n > s; s++) e = o[s], t.addEventListener(e, function () {
                        return a.progress = 100
                    }, !1);
                else r = t.onreadystatechange, t.onreadystatechange = function () {
                    var e;
                    return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
                }
            }
            return t
        }(), p = function () {
            function t(t) {
                var e, i, s, n, r = this;
                for (this.progress = 0, n = ["error", "open"], i = 0, s = n.length; s > i; i++) e = n[i], t.addEventListener(e, function () {
                    return r.progress = 100
                }, !1)
            }
            return t
        }(), s = function () {
            function t(t) {
                var e, i, s, r;
                for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), r = t.selectors, i = 0, s = r.length; s > i; i++) e = r[i], this.elements.push(new n(e))
            }
            return t
        }(), n = function () {
            function t(t) {
                this.selector = t, this.progress = 0, this.check()
            }
            return t.prototype.check = function () {
                var t = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                    return t.check()
                }, L.elements.checkInterval)
            }, t.prototype.done = function () {
                return this.progress = 100
            }, t
        }(), i = function () {
            function t() {
                var t, e, i = this;
                this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
                    return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
                }
            }
            return t.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, t
        }(), r = function () {
            function t() {
                var t, e, i, s, n, r = this;
                this.progress = 0, t = 0, n = [], s = 0, i = k(), e = setInterval(function () {
                    var o;
                    return o = k() - i - 50, i = k(), n.push(o), n.length > L.eventLag.sampleCount && n.shift(), t = v(n), ++s >= L.eventLag.minSamples && t < L.eventLag.lagThreshold ? (r.progress = 100, clearInterval(e)) : r.progress = 3 / (t + 3) * 100
                }, 50)
            }
            return t
        }(), u = function () {
            function t(t) {
                this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = L.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = A(this.source, "progress"))
            }
            return t.prototype.tick = function (t, e) {
                var i;
                return null == e && (e = A(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / L.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, L.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + L.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, t
        }(), I = null, D = null, g = null, j = null, m = null, _ = null, h.running = !1, C = function () {
            return L.restartOnPushState ? h.restart() : void 0
        }, null != window.history.pushState && (X = window.history.pushState, window.history.pushState = function () {
            return C(), X.apply(window.history, arguments)
        }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {
            return C(), G.apply(window.history, arguments)
        }), d = {
            ajax: t,
            elements: s,
            document: i,
            eventLag: r
        }, (E = function () {
            var t, i, s, n, r, o, a, l;
            for (h.sources = I = [], o = ["ajax", "elements", "document", "eventLag"], i = 0, n = o.length; n > i; i++) t = o[i], !1 !== L[t] && I.push(new d[t](L[t]));
            for (l = null != (a = L.extraSources) ? a : [], s = 0, r = l.length; r > s; s++) z = l[s], I.push(new z(L));
            return h.bar = g = new e, D = [], j = new u
        })(), h.stop = function () {
            return h.trigger("stop"), h.running = !1, g.destroy(), _ = !0, null != m && ("function" == typeof y && y(m), m = null), E()
        }, h.restart = function () {
            return h.trigger("restart"), h.stop(), h.start()
        }, h.go = function () {
            var t;
            return h.running = !0, g.render(), t = k(), _ = !1, m = O(function (e, i) {
                var s, n, r, o, a, l, c, d, p, f, m, v, y, w, x, b;
                for (d = 100 - g.progress, n = m = 0, r = !0, l = v = 0, w = I.length; w > v; l = ++v)
                    for (z = I[l], f = null != D[l] ? D[l] : D[l] = [], a = null != (b = z.elements) ? b : [z], c = y = 0, x = a.length; x > y; c = ++y) o = a[c], p = null != f[c] ? f[c] : f[c] = new u(o), r &= p.done, p.done || (n++, m += p.tick(e));
                return s = m / n, g.update(j.tick(e, s)), g.done() || r || _ ? (g.update(100), h.trigger("done"), setTimeout(function () {
                    return g.finish(), h.running = !1, h.trigger("hide")
                }, Math.max(L.ghostTime, Math.max(L.minTime - (k() - t), 0)))) : i()
            })
        }, h.start = function (t) {
            x(L, t), h.running = !0;
            try {
                g.render()
            } catch (t) {
                l = t
            }
            return document.querySelector(".pace") ? (h.trigger("start"), h.go()) : setTimeout(h.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function () {
            return h
        }) : "object" == typeof exports ? module.exports = h : L.startOnPageLoad && h.start()
    }.call(this),
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
    }(this, function () {
        return function (t) {
            function e(s) {
                if (i[s]) return i[s].exports;
                var n = i[s] = {
                    exports: {},
                    id: s,
                    loaded: !1
                };
                return t[s].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "http://localhost:8080/dist", e(0)
        }([function (t, e, i) {
            "function" != typeof Promise && (window.Promise = i(1));
            var s = {
                version: "1.0.0",
                BaseTransition: i(4),
                BaseView: i(6),
                BaseCache: i(8),
                Dispatcher: i(7),
                HistoryManager: i(9),
                Pjax: i(10),
                Prefetch: i(13),
                Utils: i(5)
            };
            t.exports = s
        }, function (t, e, i) {
            (function (e) {
                ! function (i) {
                    function s() {}

                    function n(t, e) {
                        return function () {
                            t.apply(e, arguments)
                        }
                    }

                    function r(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
                    }

                    function o(t, e) {
                        for (; 3 === t._state;) t = t._value;
                        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void p(function () {
                            var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                            if (null === i) return void(1 === t._state ? a : l)(e.promise, t._value);
                            var s;
                            try {
                                s = i(t._value)
                            } catch (t) {
                                return void l(e.promise, t)
                            }
                            a(e.promise, s)
                        }))
                    }

                    function a(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var i = e.then;
                                if (e instanceof r) return t._state = 3, t._value = e, void h(t);
                                if ("function" == typeof i) return void d(n(i, e), t)
                            }
                            t._state = 1, t._value = e, h(t)
                        } catch (e) {
                            l(t, e)
                        }
                    }

                    function l(t, e) {
                        t._state = 2, t._value = e, h(t)
                    }

                    function h(t) {
                        2 === t._state && 0 === t._deferreds.length && p(function () {
                            t._handled || f(t._value)
                        });
                        for (var e = 0, i = t._deferreds.length; e < i; e++) o(t, t._deferreds[e]);
                        t._deferreds = null
                    }

                    function c(t, e, i) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
                    }

                    function d(t, e) {
                        var i = !1;
                        try {
                            t(function (t) {
                                i || (i = !0, a(e, t))
                            }, function (t) {
                                i || (i = !0, l(e, t))
                            })
                        } catch (t) {
                            if (i) return;
                            i = !0, l(e, t)
                        }
                    }
                    var u = setTimeout,
                        p = "function" == typeof e && e || function (t) {
                            u(t, 0)
                        },
                        f = function (t) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                        };
                    r.prototype.catch = function (t) {
                        return this.then(null, t)
                    }, r.prototype.then = function (t, e) {
                        var i = new this.constructor(s);
                        return o(this, new c(t, e, i)), i
                    }, r.all = function (t) {
                        var e = Array.prototype.slice.call(t);
                        return new r(function (t, i) {
                            function s(r, o) {
                                try {
                                    if (o && ("object" == typeof o || "function" == typeof o)) {
                                        var a = o.then;
                                        if ("function" == typeof a) return void a.call(o, function (t) {
                                            s(r, t)
                                        }, i)
                                    }
                                    e[r] = o, 0 == --n && t(e)
                                } catch (t) {
                                    i(t)
                                }
                            }
                            if (0 === e.length) return t([]);
                            for (var n = e.length, r = 0; r < e.length; r++) s(r, e[r])
                        })
                    }, r.resolve = function (t) {
                        return t && "object" == typeof t && t.constructor === r ? t : new r(function (e) {
                            e(t)
                        })
                    }, r.reject = function (t) {
                        return new r(function (e, i) {
                            i(t)
                        })
                    }, r.race = function (t) {
                        return new r(function (e, i) {
                            for (var s = 0, n = t.length; s < n; s++) t[s].then(e, i)
                        })
                    }, r._setImmediateFn = function (t) {
                        p = t
                    }, r._setUnhandledRejectionFn = function (t) {
                        f = t
                    }, void 0 !== t && t.exports ? t.exports = r : i.Promise || (i.Promise = r)
                }(this)
            }).call(e, i(2).setImmediate)
        }, function (t, e, i) {
            (function (t, s) {
                function n(t, e) {
                    this._id = t, this._clearFn = e
                }
                var r = i(3).nextTick,
                    o = Function.prototype.apply,
                    a = Array.prototype.slice,
                    l = {},
                    h = 0;
                e.setTimeout = function () {
                    return new n(o.call(setTimeout, window, arguments), clearTimeout)
                }, e.setInterval = function () {
                    return new n(o.call(setInterval, window, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function (t) {
                    t.close()
                }, n.prototype.unref = n.prototype.ref = function () {}, n.prototype.close = function () {
                    this._clearFn.call(window, this._id)
                }, e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, e.setImmediate = "function" == typeof t ? t : function (t) {
                    var i = h++,
                        s = !(arguments.length < 2) && a.call(arguments, 1);
                    return l[i] = !0, r(function () {
                        l[i] && (s ? t.apply(null, s) : t.call(null), e.clearImmediate(i))
                    }), i
                }, e.clearImmediate = "function" == typeof s ? s : function (t) {
                    delete l[t]
                }
            }).call(e, i(2).setImmediate, i(2).clearImmediate)
        }, function (t, e) {
            function i() {
                d && h && (d = !1, h.length ? c = h.concat(c) : u = -1, c.length && s())
            }

            function s() {
                if (!d) {
                    var t = o(i);
                    d = !0;
                    for (var e = c.length; e;) {
                        for (h = c, c = []; ++u < e;) h && h[u].run();
                        u = -1, e = c.length
                    }
                    h = null, d = !1, a(t)
                }
            }

            function n(t, e) {
                this.fun = t, this.array = e
            }

            function r() {}
            var o, a, l = t.exports = {};
            ! function () {
                try {
                    o = setTimeout
                } catch (t) {
                    o = function () {
                        throw new Error("setTimeout is not defined")
                    }
                }
                try {
                    a = clearTimeout
                } catch (t) {
                    a = function () {
                        throw new Error("clearTimeout is not defined")
                    }
                }
            }();
            var h, c = [],
                d = !1,
                u = -1;
            l.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                c.push(new n(t, e)), 1 !== c.length || d || o(s, 0)
            }, n.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = r, l.addListener = r, l.once = r, l.off = r, l.removeListener = r, l.removeAllListeners = r, l.emit = r, l.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, l.cwd = function () {
                return "/"
            }, l.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, l.umask = function () {
                return 0
            }
        }, function (t, e, i) {
            var s = i(5),
                n = {
                    oldContainer: void 0,
                    newContainer: void 0,
                    newContainerLoading: void 0,
                    extend: function (t) {
                        return s.extend(this, t)
                    },
                    init: function (t, e) {
                        var i = this;
                        return this.oldContainer = t, this._newContainerPromise = e, this.deferred = s.deferred(), this.newContainerReady = s.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function (t) {
                            i.newContainer = t, i.newContainerReady.resolve()
                        }), this.deferred.promise
                    },
                    done: function () {
                        this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                    },
                    start: function () {}
                };
            t.exports = n
        }, function (t, e) {
            var i = {
                getCurrentUrl: function () {
                    return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
                },
                cleanLink: function (t) {
                    return t.replace(/#.*/, "")
                },
                xhrTimeout: 5e3,
                xhr: function (t) {
                    var e = this.deferred(),
                        i = new XMLHttpRequest;
                    return i.onreadystatechange = function () {
                        if (4 === i.readyState) return 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                    }, i.ontimeout = function () {
                        return e.reject(new Error("xhr: Timeout exceeded"))
                    }, i.open("GET", t), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), e.promise
                },
                extend: function (t, e) {
                    var i = Object.create(t);
                    for (var s in e) e.hasOwnProperty(s) && (i[s] = e[s]);
                    return i
                },
                deferred: function () {
                    return new function () {
                        this.resolve = null, this.reject = null, this.promise = new Promise(function (t, e) {
                            this.resolve = t, this.reject = e
                        }.bind(this))
                    }
                },
                getPort: function (t) {
                    var e = void 0 !== t ? t : window.location.port,
                        i = window.location.protocol;
                    return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var s = i(7),
                n = i(5),
                r = {
                    namespace: null,
                    extend: function (t) {
                        return n.extend(this, t)
                    },
                    init: function () {
                        var t = this;
                        s.on("initStateChange", function (e, i) {
                            i && i.namespace === t.namespace && t.onLeave()
                        }), s.on("newPageReady", function (e, i, s) {
                            t.container = s, e.namespace === t.namespace && t.onEnter()
                        }), s.on("transitionCompleted", function (e, i) {
                            e.namespace === t.namespace && t.onEnterCompleted(), i && i.namespace === t.namespace && t.onLeaveCompleted()
                        })
                    },
                    onEnter: function () {},
                    onEnterCompleted: function () {},
                    onLeave: function () {},
                    onLeaveCompleted: function () {}
                };
            t.exports = r
        }, function (t, e) {
            var i = {
                events: {},
                on: function (t, e) {
                    this.events[t] = this.events[t] || [], this.events[t].push(e)
                },
                off: function (t, e) {
                    t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1)
                },
                trigger: function (t) {
                    if (t in this.events != 0)
                        for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var s = i(5),
                n = {
                    data: {},
                    extend: function (t) {
                        return s.extend(this, t)
                    },
                    set: function (t, e) {
                        this.data[t] = e
                    },
                    get: function (t) {
                        return this.data[t]
                    },
                    reset: function () {
                        this.data = {}
                    }
                };
            t.exports = n
        }, function (t, e) {
            var i = {
                history: [],
                add: function (t, e) {
                    e || (e = void 0), this.history.push({
                        url: t,
                        namespace: e
                    })
                },
                currentStatus: function () {
                    return this.history[this.history.length - 1]
                },
                prevStatus: function () {
                    var t = this.history;
                    return t.length < 2 ? null : t[t.length - 2]
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var s = i(5),
                n = i(7),
                r = i(11),
                o = i(8),
                a = i(9),
                l = i(12),
                h = {
                    Dom: l,
                    History: a,
                    Cache: o,
                    cacheEnabled: !0,
                    transitionProgress: !1,
                    ignoreClassLink: "no-barba",
                    start: function () {
                        this.init()
                    },
                    init: function () {
                        var t = this.Dom.getContainer();
                        this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), n.trigger("initStateChange", this.History.currentStatus()), n.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), n.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                    },
                    bindEvents: function () {
                        document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                    },
                    getCurrentUrl: function () {
                        return s.cleanLink(s.getCurrentUrl())
                    },
                    goTo: function (t) {
                        window.history.pushState(null, null, t), this.onStateChange()
                    },
                    forceGoTo: function (t) {
                        window.location = t
                    },
                    load: function (t) {
                        var e, i = s.deferred(),
                            n = this;
                        return e = this.Cache.get(t), e || (e = s.xhr(t), this.Cache.set(t, e)), e.then(function (t) {
                            var e = n.Dom.parseResponse(t);
                            n.Dom.putContainer(e), n.cacheEnabled || n.Cache.reset(), i.resolve(e)
                        }, function () {
                            n.forceGoTo(t), i.reject()
                        }), i.promise
                    },
                    getHref: function (t) {
                        if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                    },
                    onLinkClick: function (t) {
                        for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                        if (this.preventCheck(t, e)) {
                            t.stopPropagation(), t.preventDefault(), n.trigger("linkClicked", e, t);
                            var i = this.getHref(e);
                            this.goTo(i)
                        }
                    },
                    preventCheck: function (t, e) {
                        if (!window.history.pushState) return !1;
                        var i = this.getHref(e);
                        return !(!e || !i || t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || e.target && "_blank" === e.target || window.location.protocol !== e.protocol || window.location.hostname !== e.hostname || s.getPort() !== s.getPort(e.port) || i.indexOf("#") > -1 || e.getAttribute && "string" == typeof e.getAttribute("download") || s.cleanLink(i) == s.cleanLink(location.href) || e.classList.contains(this.ignoreClassLink))
                    },
                    getTransition: function () {
                        return r
                    },
                    onStateChange: function () {
                        var t = this.getCurrentUrl();
                        if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                        this.History.add(t);
                        var e = this.load(t),
                            i = Object.create(this.getTransition());
                        this.transitionProgress = !0,
                            n.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                        var s = i.init(this.Dom.getContainer(), e);
                        e.then(this.onNewContainerLoaded.bind(this)), s.then(this.onTransitionEnd.bind(this))
                    },
                    onNewContainerLoaded: function (t) {
                        this.History.currentStatus().namespace = this.Dom.getNamespace(t), n.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                    },
                    onTransitionEnd: function () {
                        this.transitionProgress = !1, n.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                    }
                };
            t.exports = h
        }, function (t, e, i) {
            var s = i(4),
                n = s.extend({
                    start: function () {
                        this.newContainerLoading.then(this.finish.bind(this))
                    },
                    finish: function () {
                        document.body.scrollTop = 0, this.done()
                    }
                });
            t.exports = n
        }, function (t, e) {
            var i = {
                dataNamespace: "namespace",
                wrapperId: "barba-wrapper",
                containerClass: "barba-container",
                currentHTML: document.documentElement.innerHTML,
                parseResponse: function (t) {
                    this.currentHTML = t;
                    var e = document.createElement("div");
                    e.innerHTML = t;
                    var i = e.querySelector("title");
                    return i && (document.title = i.textContent), this.getContainer(e)
                },
                getWrapper: function () {
                    var t = document.getElementById(this.wrapperId);
                    if (!t) throw new Error("Barba.js: wrapper not found!");
                    return t
                },
                getContainer: function (t) {
                    if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                    var e = this.parseContainer(t);
                    if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                    return e
                },
                getNamespace: function (t) {
                    return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
                },
                putContainer: function (t) {
                    t.style.visibility = "hidden", this.getWrapper().appendChild(t)
                },
                parseContainer: function (t) {
                    return t.querySelector("." + this.containerClass)
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var s = i(5),
                n = i(10),
                r = {
                    ignoreClassLink: "no-barba-prefetch",
                    init: function () {
                        return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
                    },
                    onLinkEnter: function (t) {
                        for (var e = t.target; e && !n.getHref(e);) e = e.parentNode;
                        if (e && !e.classList.contains(this.ignoreClassLink)) {
                            var i = n.getHref(e);
                            if (n.preventCheck(t, e) && !n.Cache.get(i)) {
                                var r = s.xhr(i);
                                n.Cache.set(i, r)
                            }
                        }
                    }
                };
            t.exports = r
        }])
    });
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var s = function (t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    n = function (t, e, i) {
                        var s, n, r = t.cycle;
                        for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                        delete t.cycle
                    },
                    r = function (t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    h = a.isArray,
                    c = r.prototype = i.to({}, .1, {}),
                    d = [];
                r.version = "1.19.1", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function (t, e) {
                    var s, n = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || r)
                        for (var a, l = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                    return this
                }, c.render = function (t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, n, r, l, h, c, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        v = this._cycle,
                        g = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= p - 1e-7 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > _ || 0 >= t && t >= -1e-7 || _ === o && "isPause" !== this.data) && _ !== t && (i = !0, _ > o && (n = "onReverseComplete")), this._rawPrevTime = u = !e || t || _ === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && _ > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = u = !e || t || _ === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, c = this._easeType, d = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h : 2 === c ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), f === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = _, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === g && this._rawPrevTime === o && u !== o && (this._rawPrevTime = 0))
                }, r.to = function (t, e, i) {
                    return new r(t, e, i)
                }, r.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function (t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function (t, e, o, a, c, u, p) {
                    a = a || 0;
                    var f, m, v, g, _ = 0,
                        y = [],
                        w = function () {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || o.callbackScope || this, u || d)
                        },
                        x = o.cycle,
                        b = o.startAt && o.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, v = 0; f >= v; v++) {
                        m = {};
                        for (g in o) m[g] = o[g];
                        if (x && (n(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), b) {
                            b = m.startAt = {};
                            for (g in o.startAt) b[g] = o.startAt[g];
                            n(m.startAt, t, v)
                        }
                        m.delay = _ + (m.delay || 0), v === f && c && (m.onComplete = w), y[v] = new r(t[v], e, m), _ += a
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function (t, e, i, s, n, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, o, a)
                }, r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, o, a, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, o, a, l)
                }, r.delayedCall = function (t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function (t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function (t, e) {
                        for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), s = s.concat(u(r, e)), n = s.length), r = r._next;
                        return s
                    },
                    p = r.getAllTweens = function (e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function (t, i, s, n) {
                    null == i && (i = !0), null == s && (s = !0);
                    var r, o, a, l = p(0 != n),
                        h = l.length,
                        c = i && s && n;
                    for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var n, o, c, d, u, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                            for (d = t.length; --d > -1;) r.killChildTweensOf(t[d], e);
                        else {
                            n = [];
                            for (c in p)
                                for (o = p[c].target.parentNode; o;) o === t && (n = n.concat(p[c].tweens)), o = o.parentNode;
                            for (u = n.length, d = 0; u > d; d++) e && n[d].totalTime(n[d].totalDuration()), n[d]._enabled(!1, !1)
                        }
                    }
                };
                var f = function (t, i, s, n) {
                    i = !1 !== i, s = !1 !== s, n = !1 !== n;
                    for (var r, o, a = p(n), l = i && s && n, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && s || i && !r) && o.paused(t)
                };
                return r.pauseAll = function (t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function (t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function (e) {
                    var s = t._rootTimeline,
                        n = i.ticker.time;
                    return arguments.length ? (e = e || o, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, c.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var s = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, n = this.vars;
                        for (s in n) i = n[s], l(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                        l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                    },
                    n = 1e-10,
                    r = i._internals,
                    o = s._internals = {},
                    a = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    c = r.lazyRender,
                    d = _gsScope._gsDefine.globals,
                    u = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function (t, e, i) {
                        var s, n, r = t.cycle;
                        for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                        delete t.cycle
                    },
                    f = o.pauseCallback = function () {},
                    m = function (t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    v = s.prototype = new e;
                return s.version = "1.19.1", v.constructor = s, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function (t, e, s, n) {
                    var r = s.repeat && d.TweenMax || i;
                    return e ? this.add(new r(t, e, s), n) : this.set(t, s, n)
                }, v.from = function (t, e, s, n) {
                    return this.add((s.repeat && d.TweenMax || i).from(t, e, s), n)
                }, v.fromTo = function (t, e, s, n, r) {
                    var o = n.repeat && d.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, s, n), r) : this.set(t, n, r)
                }, v.staggerTo = function (t, e, n, r, o, l, h, c) {
                    var d, f, v = new s({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = n.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, 0 > r && (t = m(t), t.reverse(), r *= -1), f = 0; f < t.length; f++) d = u(n), d.startAt && (d.startAt = u(d.startAt), d.startAt.cycle && p(d.startAt, t, f)), g && (p(d, t, f), null != d.duration && (e = d.duration, delete d.duration)), v.to(t[f], e, d, f * r);
                    return this.add(v, o)
                }, v.staggerFrom = function (t, e, i, s, n, r, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, o, a)
                }, v.staggerFromTo = function (t, e, i, s, n, r, o, a, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, o, a, l)
                }, v.call = function (t, e, s, n) {
                    return this.add(i.delayedCall(0, t, e, s), n)
                }, v.set = function (t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var n, r, o = new s(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = r;
                    return a.add(o, 0), o
                }, v.add = function (n, r, o, a) {
                    var h, c, d, u, p, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                        if (n instanceof Array || n && n.push && l(n)) {
                            for (o = o || "normal", a = a || 0, h = r, c = n.length, d = 0; c > d; d++) l(u = n[d]) && (u = new s({
                                tweens: u
                            })), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === o ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === o && (u._startTime -= u.delay())), h += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, r);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n)
                    }
                    if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > n._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, v.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, v._remove = function (t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, v.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, v.insert = v.insertMultiple = function (t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, v.appendMultiple = function (t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, v.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, v.addPause = function (t, e, s, n) {
                    var r = i.delayedCall(0, f, s, n || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, v.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, v.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, v._parseTimeOrLabel = function (e, i, s, n) {
                    var r;
                    if (n instanceof t && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && l(n)))
                        for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, v.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, v.stop = function () {
                    return this.paused(!0)
                }, v.gotoAndPlay = function (t, e) {
                    return this.play(t, e)
                }, v.gotoAndStop = function (t, e) {
                    return this.pause(t, e)
                }, v.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, o, a, l, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._startTime,
                        v = this._timeScale,
                        g = this._paused;
                    if (t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (s = this._first; s && s._startTime <= t && !d;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (d = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !d;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (d = s), s = s._prev;
                            d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= f)
                            for (s = this._first; s && (o = s._next, u === this._time && (!this._paused || g));)(s._active || s._startTime <= u && !s._paused && !s._gc) && (d === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = o;
                        else
                            for (s = this._last; s && (o = s._prev, u === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= f && !s._paused && !s._gc) {
                                    if (d === s) {
                                        for (d = s._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = o
                            }
                        this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, v._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, v.getChildren = function (t, e, s, n) {
                    n = n || -9999999999;
                    for (var r = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== s && (r[a++] = o), !1 !== t && (r = r.concat(o.getChildren(!0, e, s)), a = r.length))), o = o._next;
                    return r
                }, v.getTweensOf = function (t, e) {
                    var s, n, r = this._gc,
                        o = [],
                        a = 0;
                    for (r && this._enabled(!0, !0), s = i.getTweensOf(t), n = s.length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (o[a++] = s[n]);
                    return r && this._enabled(!1, !0), o
                }, v.recent = function () {
                    return this._recent
                }, v._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, v.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                    if (e)
                        for (s in r) r[s] >= i && (r[s] += t);
                    return this._uncache(!0)
                }, v._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0);
                    return n
                }, v.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, v.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, v._enabled = function (t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, v.totalTime = function (e, i, s) {
                    this._forcingPlayhead = !0;
                    var n = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, n
                }, v.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, v.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > s && (s = i), n = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, v.paused = function (e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, v.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, v.rawTime = function (t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                var s = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    n = 1e-10,
                    r = e._internals,
                    o = r.lazyTweens,
                    a = r.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    c = s.prototype = new t;
                return c.constructor = s, c.kill()._gc = !1, s.version = "1.19.1", c.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function (t, i, s, n) {
                    return this.add(e.delayedCall(0, t, s, n), i)
                }, c.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                    return this
                }, c.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function (t, i) {
                    i = i || {};
                    var s, n, r, o = {
                            ease: h,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = i.repeat && l.TweenMax || e;
                    for (n in i) o[n] = i[n];
                    return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new a(this, s, o), o.onStart = function () {
                        r.target.paused(!0), r.vars.time !== r.target.time() && s === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, c.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, c.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, l, h, c, d, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        v = this._time,
                        g = this._totalTime,
                        _ = this._startTime,
                        y = this._timeScale,
                        w = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === n) && w !== t && this._first && (c = !0, w > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== v || 0 === m && w !== n && (w > 0 || 0 > t && w >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : w >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === m && 0 > w && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = m + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && m > t) {
                        if ((t = this._time) >= v || this._repeat && b !== this._cycle)
                            for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var S = this._yoyo && 0 != (1 & b),
                            T = S === (this._yoyo && 0 != (1 & this._cycle)),
                            C = this._totalTime,
                            M = this._cycle,
                            E = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = b * m, this._cycle < b ? S = !S : this._totalTime += m, this._time = v, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = b, this._locked = !0, v = S ? 0 : m, this.render(v, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = M, this._locked = !1, this._callback("onRepeat")), v !== this._time) return;
                        if (T && (this._cycle = b, this._locked = !0, v = S ? m + 1e-4 : -1e-4, this.render(v, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = k, this._totalTime = C, this._cycle = M, this._rawPrevTime = E
                    }
                    if (!(this._time !== v && this._first || i || c || u)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= v)
                        for (s = this._first; s && (l = s._next, p === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, p === this._time && (!this._paused || x));) {
                            if (s._active || s._startTime <= v && !s._paused && !s._gc) {
                                if (u === s) {
                                    for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (_ === this._startTime || y !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, c.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, n, r = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (s = 0; l > s; s++) n = o[s], n.isActive() && (r[a++] = n);
                    return r
                }, c.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, c.invalidate = function () {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, c.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function () {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    n = {},
                    r = _gsScope._gsDefine.globals,
                    o = function (t, e, i, s) {
                        i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function (t, e, i, s) {
                        var n = {
                                a: t
                            },
                            r = {},
                            o = {},
                            a = {
                                c: s
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + s) / 2,
                            d = (l + h) / 2,
                            u = (h + c) / 2,
                            p = (u - d) / 8;
                        return n.b = l + (t - l) / 4, r.b = d + p, n.c = r.a = (n.b + r.b) / 2, r.c = o.a = (d + u) / 2, o.b = u - p, a.b = c + (s - c) / 4, o.c = a.a = (o.b + a.b) / 2, [n, r, o, a]
                    },
                    h = function (t, n, r, o, a) {
                        var h, c, d, u, p, f, m, v, g, _, y, w, x, b = t.length - 1,
                            S = 0,
                            T = t[0].a;
                        for (h = 0; b > h; h++) p = t[S], c = p.a, d = p.d, u = t[S + 1].d, a ? (y = e[h], w = i[h], x = (w + y) * n * .25 / (o ? .5 : s[h] || .5), f = d - (d - c) * (o ? .5 * n : 0 !== y ? x / y : 0), m = d + (u - d) * (o ? .5 * n : 0 !== w ? x / w : 0), v = d - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = d - (d - c) * n * .5, m = d + (u - d) * n * .5, v = d - (f + m) / 2), f += v, m += v, p.c = g = f, p.b = 0 !== h ? T : T = p.a + .6 * (p.c - p.a), p.da = d - c, p.ca = g - c, p.ba = T - c, r ? (_ = l(c, T, g, d), t.splice(S, 1, _[0], _[1], _[2], _[3]), S += 4) : S++, T = m;
                        p = t[S], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, r && (_ = l(p.a, T, p.c, p.d), t.splice(S, 1, _[0], _[1], _[2], _[3]))
                    },
                    c = function (t, s, n, r) {
                        var a, l, h, c, d, u, p = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof (u = t[l][s]) && "=" === u.charAt(1) && (t[l][s] = r[s] + Number(u.charAt(0) + u.substr(2)));
                        if (0 > (a = t.length - 2)) return p[0] = new o(t[0][s], 0, 0, t[-1 > a ? 0 : 1][s]), p;
                        for (l = 0; a > l; l++) h = t[l][s], c = t[l + 1][s], p[l] = new o(h, 0, 0, c), n && (d = t[l + 2][s], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (d - c) * (d - c));
                        return p[l] = new o(t[l][s], 0, 0, t[l + 1][s]), p
                    },
                    d = function (t, r, o, l, d, u) {
                        var p, f, m, v, g, _, y, w, x = {},
                            b = [],
                            S = u || t[0];
                        d = "string" == typeof d ? "," + d + "," : a, null == r && (r = 1);
                        for (f in t[0]) b.push(f);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                if (f = b[p], Math.abs(S[f] - w[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, p = b.length; --p > -1;) f = b[p], n[f] = -1 !== d.indexOf("," + f + ","), x[f] = c(t, f, n[f], u);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = b.length; --p > -1;)
                                if (n[f])
                                    for (m = x[b[p]], _ = m.length - 1, v = 0; _ > v; v++) g = m[v + 1].da / i[v] + m[v].da / e[v] || 0, s[v] = (s[v] || 0) + g * g;
                            for (p = s.length; --p > -1;) s[p] = Math.sqrt(s[p])
                        }
                        for (p = b.length, v = o ? 4 : 1; --p > -1;) f = b[p], m = x[f], h(m, r, o, l, n[f]), y && (m.splice(0, v), m.splice(m.length - v, v));
                        return x
                    },
                    u = function (t, e, i) {
                        e = e || "soft";
                        var s, n, r, a, l, h, c, d, u, p, f, m = {},
                            v = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            _ = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                        for (u in t[0]) _.push(u);
                        for (h = _.length; --h > -1;) {
                            for (u = _[h], m[u] = l = [], p = 0, d = t.length, c = 0; d > c; c++) s = null == i ? t[c][u] : "string" == typeof (f = t[c][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && d - 1 > c && (l[p++] = (s + l[p - 2]) / 2), l[p++] = s;
                            for (d = p - v + 1, p = 0, c = 0; d > c; c += v) s = l[c], n = l[c + 1], r = l[c + 2], a = 2 === v ? 0 : l[c + 3], l[p++] = f = 3 === v ? new o(s, n, r, a) : new o(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            l.length = p
                        }
                        return m
                    },
                    p = function (t, e, i) {
                        for (var s, n, r, o, a, l, h, c, d, u, p, f = 1 / i, m = t.length; --m > -1;)
                            for (u = t[m], r = u.a, o = u.d - r, a = u.c - r,
                                l = u.b - r, s = n = 0, c = 1; i >= c; c++) h = f * c, d = 1 - h, s = n - (n = (h * h * o + 3 * d * (h * a + d * l)) * h), p = m * i + c - 1, e[p] = (e[p] || 0) + s * s
                    },
                    f = function (t, e) {
                        e = e >> 0 || 6;
                        var i, s, n, r, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            d = [],
                            u = [];
                        for (i in t) p(t[i], o, e);
                        for (n = o.length, s = 0; n > s; s++) l += Math.sqrt(o[s]), r = s % e, u[r] = l, r === c && (h += l, r = s / e >> 0, d[r] = u, a[r] = h, l = 0, u = []);
                        return {
                            length: h,
                            lengths: a,
                            segments: d
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, n, r, o, a, l = e.values || [],
                                h = {},
                                c = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                            ] : null;
                            for (s in c) this._props.push(s);
                            for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], h[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), a || h[s] !== l[0][s] && (a = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                                    for (o = 0; 3 > o; o++) s = p[r][o], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                                    s = p[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, s, n, r, o, a, l, h, c, d, u = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, d = this._curSeg, e *= this._length, n = this._li, e > this._l2 && u - 1 > n) {
                                    for (h = u - 1; h > n && (this._l2 = c[++n]) <= e;);
                                    this._l1 = c[n - 1], this._li = n, this._curSeg = d = this._segments[n], this._s2 = d[this._s1 = this._si = 0]
                                } else if (e < this._l1 && n > 0) {
                                    for (; n > 0 && (this._l1 = c[--n]) >= e;);
                                    0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = d = this._segments[n], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                                }
                                if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < d.length - 1) {
                                    for (h = d.length - 1; h > n && (this._s2 = d[++n]) <= e;);
                                    this._s1 = d[n - 1], this._si = n
                                } else if (e < this._s1 && n > 0) {
                                    for (; n > 0 && (this._s1 = d[--n]) >= e;);
                                    0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = d[n], this._si = n
                                }
                                a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? u - 1 : u * e >> 0, a = (e - i * (1 / u)) * u;
                            for (s = 1 - a, n = this._props.length; --n > -1;) r = this._props[n], o = this._beziers[r][i], l = (a * a * o.da + 3 * s * (a * o.ca + s * o.ba)) * a + o.a, this._mod[r] && (l = this._mod[r](l, f)), p[r] ? f[r](l) : f[r] = l;
                            if (this._autoRotate) {
                                var v, g, _, y, w, x, b, S = this._autoRotate;
                                for (n = S.length; --n > -1;) r = S[n][2], x = S[n][3] || 0, b = !0 === S[n][4] ? 1 : t, o = this._beziers[S[n][0]], v = this._beziers[S[n][1]], o && v && (o = o[i], v = v[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = v.a + (v.b - v.a) * a, w = v.b + (v.c - v.b) * a, _ += (w - _) * a, w += (v.c + (v.d - v.c) * a - w) * a, l = m ? Math.atan2(w - _, y - g) * b + x : this._initialRotations[n], this._mod[r] && (l = this._mod[r](l, f)), p[r] ? f[r](l) : f[r] = l)
                            }
                        }
                    }),
                    v = m.prototype;
                m.bezierThrough = d, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function () {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            n = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, r, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, c, d, u = e.values,
                                    p = u.length - 1,
                                    f = [],
                                    v = {};
                                if (0 > p) return a;
                                for (h = 0; p >= h; h++) d = i(t, u[h], o, a, l, p !== h), f[h] = d.end;
                                for (c in e) v[c] = e[c];
                                return v.values = f, a = new n(t, "bezier", 0, 0, d.pt, 2), a.data = d, a.plugin = l, a.setRatio = s, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (h = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != d.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != d.end.x && [
                                    ["x", "y", "rotation", h, !1]
                                ]), v.autoRotate && (o._transform || o._enableTransforms(!1), d.autoRotate = o._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(d.proxy, v, o._tween), a
                            }
                        })
                    }
                }, v._mod = function (t) {
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
                }, v._kill = function (t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    if (s = this._autoRotate)
                        for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, s, n, r, o = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new t("css");
                h.constructor = o, o.version = "1.19.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, d, u, p, f, m, v, g, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    S = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    M = /^(rgb|hsl)/,
                    E = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    L = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function (t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    N = /[\s,\(]/i,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    j = {},
                    F = {
                        style: {}
                    },
                    V = _gsScope.document || {
                        createElement: function () {
                            return F
                        }
                    },
                    H = function (t, e) {
                        return V.createElementNS ? V.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : V.createElement(t)
                    },
                    B = H("div"),
                    W = H("img"),
                    q = o._internals = {
                        _specialProps: l
                    },
                    X = (_gsScope.navigator || {}).userAgent || "",
                    Y = function () {
                        var t = X.indexOf("Android"),
                            e = H("a");
                        return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), f = u && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    U = function (t) {
                        return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function (t) {
                        _gsScope.console && console.log(t)
                    },
                    Q = "",
                    Z = "",
                    K = function (t, e) {
                        e = e || B;
                        var i, s, n = e.style;
                        if (void 0 !== n[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];);
                        return s >= 0 ? (Z = 3 === s ? "ms" : i[s], Q = "-" + Z.toLowerCase() + "-", Z + t) : null
                    },
                    $ = V.defaultView ? V.defaultView.getComputedStyle : function () {},
                    J = o.getStyle = function (t, e, i, s, n) {
                        var r;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || $(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : U(t)
                    },
                    tt = q.convertToPixels = function (t, i, s, n, r) {
                        if ("px" === n || !n) return s;
                        if ("auto" === n || !s) return 0;
                        var a, l, h, c = A.test(i),
                            d = t,
                            u = B.style,
                            p = 0 > s,
                            f = 1 === s;
                        if (p && (s = -s), f && (s *= 100), "%" === n && -1 !== i.indexOf("border")) a = s / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== n && d.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[c ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                            else {
                                if (d = t.parentNode || V.body, l = d._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * s / 100;
                                u[c ? "width" : "height"] = s + n
                            }
                            d.appendChild(B), a = parseFloat(B[c ? "offsetWidth" : "offsetHeight"]), d.removeChild(B), c && "%" === n && !1 !== o.cacheWidths && (l = d._gsCache = d._gsCache || {}, l.time = h, l.width = a / s * 100), 0 !== a || r || (a = tt(t, i, s, n, !0))
                        }
                        return f && (a /= 100), p ? -a : a
                    },
                    et = q.calculateOffset = function (t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            n = J(t, "margin" + s, i);
                        return t["offset" + s] - (tt(t, e, parseFloat(n), n.replace(b, "")) || 0)
                    },
                    it = function (t, e) {
                        var i, s, n, r = {};
                        if (e = e || $(t, null))
                            if (i = e.length)
                                for (; --i > -1;) n = e[i], (-1 === n.indexOf("-transform") || Lt === n) && (r[n.replace(k, P)] = e.getPropertyValue(n));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || kt === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, P)] = e[i]);
                        return Y || (r.opacity = U(t)), s = Bt(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Pt && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    st = function (t, e, i, s, n) {
                        var r, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(x, "") ? r : 0 : et(t, o), void 0 !== h[o] && (a = new _t(h, o, h[o], a)));
                        if (s)
                            for (o in s) "className" !== o && (l[o] = s[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    nt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function (t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || $(t))[e] || 0;
                        if (t.getCTM && Ft(t)) return t.getBBox()[e] || 0;
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            n = nt[e],
                            r = n.length;
                        for (i = i || $(t, null); --r > -1;) s -= parseFloat(J(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(J(t, "border" + n[r] + "Width", i, !0)) || 0;
                        return s
                    },
                    at = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, s = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                        if (s.length > 3 && !e) {
                            for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(at(s[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t), e || t
                    },
                    lt = function (t, e) {
                        return "function" == typeof t && (t = t(g, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ht = function (t, e) {
                        return "function" == typeof t && (t = t(g, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ct = function (t, e, i, s) {
                        var n, r, o, a, l, h = 1e-6;
                        return "function" == typeof t && (t = t(g, v)), null == t ? a = e : "number" == typeof t ? a = t : (n = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), r.length && (s && (s[i] = e + o), -1 !== t.indexOf("short") && (o %= n) !== o % (n / 2) && (o = 0 > o ? o + n : o - n), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (o / n | 0) * n : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (o / n | 0) * n)), a = e + o), h > a && a > -h && (a = 0), a
                    },
                    dt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ut = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    pt = o.parseColor = function (t, e) {
                        var i, s, n, r, o, a, l, h, c, d, u;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), n = t.charAt(2), r = t.charAt(3), t = "#" + s + s + n + n + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = u = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (a + 1) : l + a - l * a, s = 2 * l - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = ut(o + 1 / 3, s, n), i[1] = ut(o, s, n), i[2] = ut(o - 1 / 3, s, n);
                                else i = t.match(_) || dt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = dt.black;
                        return e && !u && (s = i[0] / 255, n = i[1] / 255, r = i[2] / 255, h = Math.max(s, n, r), c = Math.min(s, n, r), l = (h + c) / 2, h === c ? o = a = 0 : (d = h - c, a = l > .5 ? d / (2 - h - c) : d / (h + c), o = h === s ? (n - r) / d + (r > n ? 6 : 0) : h === n ? (r - s) / d + 2 : (s - n) / d + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ft = function (t, e) {
                        var i, s, n, r = t.match(mt) || [],
                            o = 0,
                            a = r.length ? "" : t;
                        for (i = 0; i < r.length; i++) s = r[i], n = t.substr(o, t.indexOf(s, o) - o), o += n.length + s.length, s = pt(s, e), 3 === s.length && s.push(1), a += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return a + t.substr(o)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in dt) mt += "|" + h + "\\b";
                mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function (t) {
                    var e, i = t[0] + t[1];
                    mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var vt = function (t, e, i, s) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var n, r = e ? (t.match(mt) || [""])[0] : "",
                            o = t.split(r).join("").match(w) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            d = c > 0 ? o[0].replace(_, "") : "";
                        return c ? n = e ? function (t) {
                            var e, u, p, f;
                            if ("number" == typeof t) t += d;
                            else if (s && R.test(t)) {
                                for (f = t.replace(R, "|").split("|"), p = 0; p < f.length; p++) f[p] = n(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(mt) || [r])[0], u = t.split(e).join("").match(w) || [], p = u.length, c > p--)
                                for (; ++p < c;) u[p] = i ? u[(p - 1) / 2 | 0] : o[p];
                            return a + u.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, r, u;
                            if ("number" == typeof t) t += d;
                            else if (s && R.test(t)) {
                                for (r = t.replace(R, "|").split("|"), u = 0; u < r.length; u++) r[u] = n(r[u]);
                                return r.join(",")
                            }
                            if (e = t.match(w) || [], u = e.length, c > u--)
                                for (; ++u < c;) e[u] = i ? e[(u - 1) / 2 | 0] : o[u];
                            return a + e.join(h) + l
                        } : function (t) {
                            return t
                        }
                    },
                    gt = function (t) {
                        return t = t.split(","),
                            function (e, i, s, n, r, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return n.parse(e, a, r, o)
                            }
                    },
                    _t = (q._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, n, r, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                        i[r] = n
                                    }
                                } else i[r] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function (t, e, i, s, n) {
                        this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s)
                    }),
                    yt = (q._parseToProxy = function (t, e, i, s, n, r) {
                        var o, a, l, h, c, d = s,
                            u = {},
                            p = {},
                            f = i._transform,
                            m = j;
                        for (i._transform = null, j = e, s = c = i.parse(t, e, s, n), j = m, r && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); s && s !== d;) {
                            if (s.type <= 1 && (a = s.p, p[a] = s.s + s.c, u[a] = s.s, r || (h = new _t(s, "s", a, h, s.r), s.c = 0), 1 === s.type))
                                for (o = s.l; --o > 0;) l = "xn" + o, a = s.p + "_" + l, p[a] = s.data[l], u[a] = s[l], r || (h = new _t(s, l, a, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: u,
                            end: p,
                            firstMPT: h,
                            pt: c
                        }
                    }, q.CSSPropTween = function (t, e, s, n, o, a, l, h, c, d, u) {
                        this.t = t, this.p = e, this.s = s, this.c = n, this.n = l || e, t instanceof yt || r.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === d ? s : d, this.e = void 0 === u ? s + n : u, o && (this._next = o, o._prev = this)
                    }),
                    wt = function (t, e, i, s, n, r) {
                        var o = new yt(t, e, i, s - i, n, -1, r);
                        return o.b = i, o.e = o.xs0 = s, o
                    },
                    xt = o.parseComplex = function (t, e, i, s, n, r, a, l, h, d) {
                        i = i || r || "", "function" == typeof s && (s = s(g, v)), a = new yt(t, e, 0, 0, a, d ? 2 : 1, null, !1, l, i, s), s += "", n && mt.test(s + i) && (s = [i, s], o.colorStringFilter(s), i = s[0], s = s[1]);
                        var u, p, f, m, w, x, b, S, T, C, M, E, k, L = i.split(", ").join(",").split(" "),
                            P = s.split(", ").join(",").split(" "),
                            A = L.length,
                            O = !1 !== c;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (L = L.join(" ").replace(R, ", ").split(" "), P = P.join(" ").replace(R, ", ").split(" "), A = L.length), A !== P.length && (L = (r || "").split(" "), A = L.length), a.plugin = h, a.setRatio = d, mt.lastIndex = 0, u = 0; A > u; u++)
                            if (m = L[u], w = P[u], (S = parseFloat(m)) || 0 === S) a.appendXtra("", S, lt(w, S), w.replace(y, ""), O && -1 !== w.indexOf("px"), !0);
                            else if (n && mt.test(m)) E = w.indexOf(")") + 1, E = ")" + (E ? w.substr(E) : ""), k = -1 !== w.indexOf("hsl") && Y, m = pt(m, k), w = pt(w, k), T = m.length + w.length > 6, T && !Y && 0 === w[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(P[u]).join("transparent")) : (Y || (T = !1), k ? a.appendXtra(T ? "hsla(" : "hsl(", m[0], lt(w[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(w[1], m[1]), "%,", !1).appendXtra("", m[2], lt(w[2], m[2]), T ? "%," : "%" + E, !1) : a.appendXtra(T ? "rgba(" : "rgb(", m[0], w[0] - m[0], ",", !0, !0).appendXtra("", m[1], w[1] - m[1], ",", !0).appendXtra("", m[2], w[2] - m[2], T ? "," : E, !0), T && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (w.length < 4 ? 1 : w[3]) - m, E, !1))), mt.lastIndex = 0;
                        else if (x = m.match(_)) {
                            if (!(b = w.match(y)) || b.length !== x.length) return a;
                            for (f = 0, p = 0; p < x.length; p++) M = x[p], C = m.indexOf(M, f), a.appendXtra(m.substr(f, C - f), Number(M), lt(b[p], M), "", O && "px" === m.substr(C + M.length, 2), 0 === p), f = C + M.length;
                            a["xs" + a.l] += m.substr(f)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + w : w;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (E = a.xs0 + a.data.s, u = 1; u < a.l; u++) E += a["xs" + u] + a.data["xn" + u];
                            a.e = E + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    bt = 9;
                for (h = yt.prototype, h.l = h.pr = 0; --bt > 0;) h["xn" + bt] = 0, h["xs" + bt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, s, n, r) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = s || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new yt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + a] += e + (s || ""), o)
                };
                var St = function (t, e) {
                        e = e || {}, this.p = e.prefix ? K(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Tt = q._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, n, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || o, n = new St(r[s], e)
                    },
                    Ct = q._registerPluginProp = function (t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Tt(t, {
                                parser: function (t, i, s, n, r, o, h) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[s].parse(t, i, s, n, r, o, h)) : (G("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                h = St.prototype, h.parseComplex = function (t, e, i, s, n, r) {
                    var o, a, l, h, c, d, u = this.keyword;
                    if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : u && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, u && (c = e.indexOf(u), d = i.indexOf(u), c !== d && (-1 === d ? a[o] = a[o].split(u).join("") : -1 === c && (a[o] += " " + u)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
                }, h.parse = function (t, e, i, s, r, o, a) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, n, !1, this.dflt)), this.format(e), r, o)
                }, o.registerSpecialProp = function (t, e, i) {
                    Tt(t, {
                        parser: function (t, s, n, r, o, a, l) {
                            var h = new yt(t, n, 0, 0, o, 2, n, !1, i);
                            return h.plugin = a, h.setRatio = e(t, s, r._tween, n), h
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = !0;
                var Mt, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = K("transform"),
                    Lt = Q + "transform",
                    $t = K("transformOrigin"),
                    Pt = null !== K("perspective"),
                    At = q.Transform = function () {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Pt) && (o.defaultForce3D || "auto")
                    },
                    Ot = _gsScope.SVGElement,
                    Dt = function (t, e, i) {
                        var s, n = V.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(n), n
                    },
                    Rt = V.documentElement || {},
                    Nt = function () {
                        var t, e, i, s = m || /Android/i.test(X) && !_gsScope.chrome;
                        return V.createElementNS && !s && (t = Dt("svg", Rt), e = Dt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[$t] = "50% 50%", e.style[kt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(p && Pt), Rt.removeChild(t)), s
                    }(),
                    zt = function (t, e, i, s, n, r) {
                        var a, l, h, c, d, u, p, f, m, v, g, _, y, w, x = t._gsTransform,
                            b = Ht(t, !0);
                        x && (y = x.xOrigin, w = x.yOrigin), (!s || (a = s.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = at(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = d = parseFloat(a[1]), s && b !== Vt && (u = b[0], p = b[1], f = b[2], m = b[3], v = b[4], g = b[5], (_ = u * m - p * f) && (l = c * (m / _) + d * (-f / _) + (f * g - m * v) / _, h = c * (-p / _) + d * (u / _) - (u * g - p * v) / _, c = i.xOrigin = a[0] = l, d = i.yOrigin = a[1] = h)), x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), n || !1 !== n && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = d - w, x.xOffset += l * b[0] + h * b[2] - l, x.yOffset += l * b[1] + h * b[3] - h) : x.xOffset = x.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    It = function (t) {
                        var e, i = H("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            s = this.parentNode,
                            n = this.nextSibling,
                            r = this.style.cssText;
                        if (Rt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = It
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return n ? s.insertBefore(this, n) : s.appendChild(this), Rt.removeChild(i), this.style.cssText = r, e
                    },
                    jt = function (t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return It.call(t, !0)
                        }
                    },
                    Ft = function (t) {
                        return !(!(Ot && t.getCTM && jt(t)) || t.parentNode && !t.ownerSVGElement)
                    },
                    Vt = [1, 0, 0, 1, 0, 0],
                    Ht = function (t, e) {
                        var i, s, n, r, o, a, l = t._gsTransform || new At,
                            h = 1e5,
                            c = t.style;
                        if (kt ? s = J(t, Lt, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(O), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, i && kt && ((a = "none" === $(t).display) || !t.parentNode) && (a && (r = c.display, c.display = "block"), t.parentNode || (o = 1, Rt.appendChild(t)), s = J(t, Lt, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? c.display = r : a && Yt(c, "display"), o && Rt.removeChild(t)), (l.svg || t.getCTM && Ft(t)) && (i && -1 !== (c[kt] + "").indexOf("matrix") && (s = c[kt], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (s = n, i = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Vt;
                        for (n = (s || "").match(_) || [], bt = n.length; --bt > -1;) r = Number(n[bt]), n[bt] = (o = r - (r |= 0)) ? (o * h + (0 > o ? -.5 : .5) | 0) / h + r : r;
                        return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                    },
                    Bt = q.getTransform = function (t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var r, a, l, h, c, d, u = s ? t._gsTransform || new At : new At,
                            p = u.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            v = Pt ? parseFloat(J(t, $t, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin || 0 : 0,
                            g = parseFloat(o.defaultTransformPerspective) || 0;
                        if (u.svg = !(!t.getCTM || !Ft(t)), u.svg && (zt(t, J(t, $t, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Mt = o.useSVGTransformAttr || Nt), (r = Ht(t)) !== Vt) {
                            if (16 === r.length) {
                                var _, y, w, x, b, S = r[0],
                                    T = r[1],
                                    C = r[2],
                                    M = r[3],
                                    E = r[4],
                                    k = r[5],
                                    L = r[6],
                                    P = r[7],
                                    A = r[8],
                                    O = r[9],
                                    D = r[10],
                                    R = r[12],
                                    N = r[13],
                                    z = r[14],
                                    j = r[11],
                                    F = Math.atan2(L, D);
                                u.zOrigin && (z = -u.zOrigin, R = A * z - r[12], N = O * z - r[13], z = D * z + u.zOrigin - r[14]), u.rotationX = F * I, F && (x = Math.cos(-F), b = Math.sin(-F), _ = E * x + A * b, y = k * x + O * b, w = L * x + D * b, A = E * -b + A * x, O = k * -b + O * x, D = L * -b + D * x, j = P * -b + j * x, E = _, k = y, L = w), F = Math.atan2(-C, D), u.rotationY = F * I, F && (x = Math.cos(-F), b = Math.sin(-F), _ = S * x - A * b, y = T * x - O * b, w = C * x - D * b, O = T * b + O * x, D = C * b + D * x, j = M * b + j * x, S = _, T = y, C = w), F = Math.atan2(T, S), u.rotation = F * I, F && (x = Math.cos(-F), b = Math.sin(-F), S = S * x + E * b, y = T * x + k * b, k = T * -b + k * x, L = C * -b + L * x, T = y), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (Math.sqrt(S * S + T * T) * m + .5 | 0) / m, u.scaleY = (Math.sqrt(k * k + O * O) * m + .5 | 0) / m, u.scaleZ = (Math.sqrt(L * L + D * D) * m + .5 | 0) / m, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = E || k ? Math.atan2(E, k) * I + u.rotation : u.skewX || 0, Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (p ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = j ? 1 / (0 > j ? -j : j) : 0, u.x = R, u.y = N, u.z = z, u.svg && (u.x -= u.xOrigin - (u.xOrigin * S - u.yOrigin * E), u.y -= u.yOrigin - (u.yOrigin * T - u.xOrigin * k))
                            } else if (!Pt || n || !r.length || u.x !== r[4] || u.y !== r[5] || !u.rotationX && !u.rotationY) {
                                var V = r.length >= 6,
                                    H = V ? r[0] : 1,
                                    B = r[1] || 0,
                                    W = r[2] || 0,
                                    q = V ? r[3] : 1;
                                u.x = r[4] || 0, u.y = r[5] || 0, l = Math.sqrt(H * H + B * B), h = Math.sqrt(q * q + W * W), c = H || B ? Math.atan2(B, H) * I : u.rotation || 0, d = W || q ? Math.atan2(W, q) * I + c : u.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (p ? (l *= -1, d += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, d += 0 >= d ? 180 : -180)), u.scaleX = l, u.scaleY = h, u.rotation = c, u.skewX = d, Pt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = g, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * H + u.yOrigin * W), u.y -= u.yOrigin - (u.xOrigin * B + u.yOrigin * q))
                            }
                            u.zOrigin = v;
                            for (a in u) u[a] < f && u[a] > -f && (u[a] = 0)
                        }
                        return s && (t._gsTransform = u, u.svg && (Mt && t.style[kt] ? e.delayedCall(.001, function () {
                            Yt(t.style, kt)
                        }) : !Mt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), u
                    },
                    Wt = function (t) {
                        var e, i, s = this.data,
                            n = -s.rotation * z,
                            r = n + s.skewX * z,
                            o = 1e5,
                            a = (Math.cos(n) * s.scaleX * o | 0) / o,
                            l = (Math.sin(n) * s.scaleX * o | 0) / o,
                            h = (Math.sin(r) * -s.scaleY * o | 0) / o,
                            c = (Math.cos(r) * s.scaleY * o | 0) / o,
                            d = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = l, l = -h, h = -i, e = u.filter, d.filter = "";
                            var p, f, v = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                _ = "absolute" !== u.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                w = s.x + v * s.xPercent / 100,
                                x = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (p = (s.oxp ? v * s.ox * .01 : s.ox) - v / 2, f = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, w += p - (p * a + f * l), x += f - (p * h + f * c)), _ ? (p = v / 2, f = g / 2, y += ", Dx=" + (p - (p * a + f * l) + w) + ", Dy=" + (f - (p * h + f * c) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = e.replace(D, y) : d.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !_) {
                                var T, C, M, E = 8 > m ? 1 : -1;
                                for (p = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((v - ((0 > a ? -a : a) * v + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > h ? -h : h) * v)) / 2 + x), bt = 0; 4 > bt; bt++) C = rt[bt], T = u[C], i = -1 !== T.indexOf("px") ? parseFloat(T) : tt(this.t, C, parseFloat(T), T.replace(b, "")) || 0, M = i !== s[C] ? 2 > bt ? -s.ieOffsetX : -s.ieOffsetY : 2 > bt ? p - s.ieOffsetX : f - s.ieOffsetY, d[C] = (s[C] = Math.round(i - M * (0 === bt || 2 === bt ? 1 : E))) + "px"
                            }
                        }
                    },
                    qt = q.set3DTransformRatio = q.setTransformRatio = function (t) {
                        var e, i, s, n, r, o, a, l, h, c, d, u, f, m, v, g, _, y, w, x, b, S, T, C = this.data,
                            M = this.t.style,
                            E = C.rotation,
                            k = C.rotationX,
                            L = C.rotationY,
                            P = C.scaleX,
                            A = C.scaleY,
                            O = C.scaleZ,
                            D = C.x,
                            R = C.y,
                            N = C.z,
                            I = C.svg,
                            j = C.perspective,
                            F = C.force3D,
                            V = C.skewY,
                            H = C.skewX;
                        if (V && (H += V, E += V), ((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !N && !j && !L && !k && 1 === O || Mt && I || !Pt) return void(E || H || I ? (E *= z, S = H * z, T = 1e5, i = Math.cos(E) * P, r = Math.sin(E) * P, s = Math.sin(E - S) * -A, o = Math.cos(E - S) * A, S && "simple" === C.skewType && (e = Math.tan(S - V * z), e = Math.sqrt(1 + e * e), s *= e, o *= e, V && (e = Math.tan(V * z), e = Math.sqrt(1 + e * e), i *= e, r *= e)), I && (D += C.xOrigin - (C.xOrigin * i + C.yOrigin * s) + C.xOffset, R += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset, Mt && (C.xPercent || C.yPercent) && (v = this.t.getBBox(), D += .01 * C.xPercent * v.width, R += .01 * C.yPercent * v.height), v = 1e-6, v > D && D > -v && (D = 0), v > R && R > -v && (R = 0)), w = (i * T | 0) / T + "," + (r * T | 0) / T + "," + (s * T | 0) / T + "," + (o * T | 0) / T + "," + D + "," + R + ")", I && Mt ? this.t.setAttribute("transform", "matrix(" + w) : M[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + w) : M[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + A + "," + D + "," + R + ")");
                        if (p && (v = 1e-4, v > P && P > -v && (P = O = 2e-5), v > A && A > -v && (A = O = 2e-5), !j || C.z || C.rotationX || C.rotationY || (j = 0)), E || H) E *= z, g = i = Math.cos(E), _ = r = Math.sin(E), H && (E -= H * z, g = Math.cos(E), _ = Math.sin(E), "simple" === C.skewType && (e = Math.tan((H - V) * z), e = Math.sqrt(1 + e * e), g *= e, _ *= e, C.skewY && (e = Math.tan(V * z), e = Math.sqrt(1 + e * e), i *= e, r *= e))), s = -_, o = g;
                        else {
                            if (!(L || k || 1 !== O || j || I)) return void(M[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + N + "px)" + (1 !== P || 1 !== A ? " scale(" + P + "," + A + ")" : ""));
                            i = o = 1, s = r = 0
                        }
                        c = 1, n = a = l = h = d = u = 0, f = j ? -1 / j : 0, m = C.zOrigin, v = 1e-6, x = ",", b = "0", E = L * z, E && (g = Math.cos(E), _ = Math.sin(E), l = -_, d = f * -_, n = i * _, a = r * _, c = g, f *= g, i *= g, r *= g), E = k * z, E && (g = Math.cos(E), _ = Math.sin(E), e = s * g + n * _, y = o * g + a * _, h = c * _, u = f * _, n = s * -_ + n * g, a = o * -_ + a * g, c *= g, f *= g, s = e, o = y), 1 !== O && (n *= O, a *= O, c *= O, f *= O), 1 !== A && (s *= A, o *= A, h *= A, u *= A), 1 !== P && (i *= P, r *= P, l *= P, d *= P), (m || I) && (m && (D += n * -m, R += a * -m, N += c * -m + m), I && (D += C.xOrigin - (C.xOrigin * i + C.yOrigin * s) + C.xOffset, R += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset), v > D && D > -v && (D = b), v > R && R > -v && (R = b), v > N && N > -v && (N = 0)), w = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", w += (v > i && i > -v ? b : i) + x + (v > r && r > -v ? b : r) + x + (v > l && l > -v ? b : l), w += x + (v > d && d > -v ? b : d) + x + (v > s && s > -v ? b : s) + x + (v > o && o > -v ? b : o), k || L || 1 !== O ? (w += x + (v > h && h > -v ? b : h) + x + (v > u && u > -v ? b : u) + x + (v > n && n > -v ? b : n), w += x + (v > a && a > -v ? b : a) + x + (v > c && c > -v ? b : c) + x + (v > f && f > -v ? b : f) + x) : w += ",0,0,0,0,1,0,", w += D + x + R + x + N + x + (j ? 1 + -N / j : 1) + ")", M[kt] = w
                    };
                h = At.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, i, s, r, a, l) {
                        if (s._lastParsedTransform === l) return r;
                        s._lastParsedTransform = l;
                        var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(g, t));
                        var d, u, p, f, m, _, y, w, x, b = t._gsTransform,
                            S = t.style,
                            T = 1e-6,
                            C = Et.length,
                            M = l,
                            E = {},
                            k = "transformOrigin",
                            L = Bt(t, n, !0, M.parseTransform),
                            P = M.transform && ("function" == typeof M.transform ? M.transform(g, v) : M.transform);
                        if (s._transform = L, P && "string" == typeof P && kt) u = B.style, u[kt] = P, u.display = "block", u.position = "absolute", V.body.appendChild(B), d = Bt(B, null, !1), L.svg && (_ = L.xOrigin, y = L.yOrigin, d.x -= L.xOffset, d.y -= L.yOffset, (M.transformOrigin || M.svgOrigin) && (P = {}, zt(t, at(M.transformOrigin), P, M.svgOrigin, M.smoothOrigin, !0), _ = P.xOrigin, y = P.yOrigin, d.x -= P.xOffset - L.xOffset, d.y -= P.yOffset - L.yOffset), (_ || y) && (w = Ht(B, !0), d.x -= _ - (_ * w[0] + y * w[2]), d.y -= y - (_ * w[1] + y * w[3]))), V.body.removeChild(B), d.perspective || (d.perspective = L.perspective), null != M.xPercent && (d.xPercent = ht(M.xPercent, L.xPercent)), null != M.yPercent && (d.yPercent = ht(M.yPercent, L.yPercent));
                        else if ("object" == typeof M) {
                            if (d = {
                                    scaleX: ht(null != M.scaleX ? M.scaleX : M.scale, L.scaleX),
                                    scaleY: ht(null != M.scaleY ? M.scaleY : M.scale, L.scaleY),
                                    scaleZ: ht(M.scaleZ, L.scaleZ),
                                    x: ht(M.x, L.x),
                                    y: ht(M.y, L.y),
                                    z: ht(M.z, L.z),
                                    xPercent: ht(M.xPercent, L.xPercent),
                                    yPercent: ht(M.yPercent, L.yPercent),
                                    perspective: ht(M.transformPerspective, L.perspective)
                                }, null != (m = M.directionalRotation))
                                if ("object" == typeof m)
                                    for (u in m) M[u] = m[u];
                                else M.rotation = m;
                            "string" == typeof M.x && -1 !== M.x.indexOf("%") && (d.x = 0, d.xPercent = ht(M.x, L.xPercent)), "string" == typeof M.y && -1 !== M.y.indexOf("%") && (d.y = 0, d.yPercent = ht(M.y, L.yPercent)), d.rotation = ct("rotation" in M ? M.rotation : "shortRotation" in M ? M.shortRotation + "_short" : "rotationZ" in M ? M.rotationZ : L.rotation, L.rotation, "rotation", E), Pt && (d.rotationX = ct("rotationX" in M ? M.rotationX : "shortRotationX" in M ? M.shortRotationX + "_short" : L.rotationX || 0, L.rotationX, "rotationX", E), d.rotationY = ct("rotationY" in M ? M.rotationY : "shortRotationY" in M ? M.shortRotationY + "_short" : L.rotationY || 0, L.rotationY, "rotationY", E)), d.skewX = ct(M.skewX, L.skewX), d.skewY = ct(M.skewY, L.skewY)
                        }
                        for (Pt && null != M.force3D && (L.force3D = M.force3D, f = !0), L.skewType = M.skewType || L.skewType || o.defaultSkewType, (p = L.force3D || L.z || L.rotationX || L.rotationY || d.z || d.rotationX || d.rotationY || d.perspective) || null == M.scale || (d.scaleZ = 1); --C > -1;) x = Et[C], ((P = d[x] - L[x]) > T || -T > P || null != M[x] || null != j[x]) && (f = !0, r = new yt(L, x, L[x], P, r), x in E && (r.e = E[x]), r.xs0 = 0, r.plugin = a, s._overwriteProps.push(r.n));
                        return P = M.transformOrigin, L.svg && (P || M.svgOrigin) && (_ = L.xOffset, y = L.yOffset, zt(t, at(P), d, M.svgOrigin, M.smoothOrigin), r = wt(L, "xOrigin", (b ? L : d).xOrigin, d.xOrigin, r, k), r = wt(L, "yOrigin", (b ? L : d).yOrigin, d.yOrigin, r, k), (_ !== L.xOffset || y !== L.yOffset) && (r = wt(L, "xOffset", b ? _ : L.xOffset, L.xOffset, r, k), r = wt(L, "yOffset", b ? y : L.yOffset, L.yOffset, r, k)), P = "0px 0px"), (P || Pt && p && L.zOrigin) && (kt ? (f = !0, x = $t, P = (P || J(t, x, n, !1, "50% 50%")) + "", r = new yt(S, x, 0, 0, r, -1, k), r.b = S[x], r.plugin = a, Pt ? (u = L.zOrigin, P = P.split(" "), L.zOrigin = (P.length > 2 && (0 === u || "0px" !== P[2]) ? parseFloat(P[2]) : u) || 0, r.xs0 = r.e = P[0] + " " + (P[1] || "50%") + " 0px", r = new yt(L, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = L.zOrigin) : r.xs0 = r.e = P) : at(P + "", L)), f && (s._transformType = L.svg && Mt || !p && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
                    },
                    prefix: !0
                }), Tt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Tt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, r, o, a) {
                        e = this.format(e);
                        var l, h, c, d, u, p, f, m, v, g, _, y, w, x, b, S, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < T.length; h++) this.p.indexOf("border") && (T[h] = K(T[h])), u = d = J(t, T[h], n, !1, "0px"), -1 !== u.indexOf(" ") && (d = u.split(" "), u = d[0], d = d[1]), p = c = l[h], f = parseFloat(u), y = u.substr((f + "").length), w = "=" === p.charAt(1), w ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), _ = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), _ = p.substr((m + "").length)), "" === _ && (_ = s[i] || y), _ !== y && (x = tt(t, "borderLeft", f, y), b = tt(t, "borderTop", f, y), "%" === _ ? (u = x / v * 100 + "%", d = b / g * 100 + "%") : "em" === _ ? (S = tt(t, "borderLeft", 1, "em"), u = x / S + "em", d = b / S + "em") : (u = x + "px", d = b + "px"), w && (p = parseFloat(u) + m + _, c = parseFloat(d) + m + _)), o = xt(C, T[h], u + " " + d, p + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: vt("0px 0px 0px 0px", !1, !0)
                }), Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, s, r, o) {
                        return xt(t.style, i, this.format(J(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: vt("0px 0px", !1, !0)
                }), Tt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, s, r, o) {
                        var a, l, h, c, d, u, p = "background-position",
                            f = n || $(t, null),
                            v = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== v.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (u = J(t, "backgroundImage").replace(L, "")) && "none" !== u) {
                            for (a = v.split(" "), l = g.split(" "), W.setAttribute("src", u), h = 2; --h > -1;) v = a[h], (c = -1 !== v.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (d = 0 === h ? t.offsetWidth - W.width : t.offsetHeight - W.height, a[h] = c ? parseFloat(v) / 100 * d + "px" : parseFloat(v) / d * 100 + "%");
                            v = a.join(" ")
                        }
                        return this.parseComplex(t.style, v, g, r, o)
                    },
                    formatter: at
                }), Tt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (t) {
                        return t += "", at(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), Tt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Tt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Tt("transformStyle", {
                    prefix: !0
                }), Tt("backfaceVisibility", {
                    prefix: !0
                }), Tt("userSelect", {
                    prefix: !0
                }), Tt("margin", {
                    parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                }), Tt("padding", {
                    parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Tt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, s, r, o) {
                        var a, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(J(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                    }
                }), Tt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Tt("autoRound,strictUnits", {
                    parser: function (t, e, i, s, n) {
                        return n
                    }
                }), Tt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, s, r, o) {
                        var a = J(t, "borderTopWidth", n, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(b, "");
                        return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", n, !1, "solid") + " " + J(t, "borderTopColor", n, !1, "#000")), l.join(" "), r, o)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                    }
                }), Tt("borderWidth", {
                    parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Tt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, s, n, r) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new yt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e)
                    }
                });
                var Xt = function (t) {
                    var e, i = this.t,
                        s = i.filter || J(this.data, "filter") || "",
                        n = this.s + this.c * t | 0;
                    100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = s.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(S, "opacity=" + n))
                };
                Tt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, s, r, o) {
                        var a = parseFloat(J(t, "opacity", n, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === J(t, "visibility", n) && 0 !== e && (a = 0), Y ? r = new yt(l, "opacity", a, e - a, r) : (r = new yt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Xt), h && (r = new yt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                    }
                });
                var Yt = function (t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ut = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Yt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Tt("className", {
                    parser: function (t, e, s, r, o, a, l) {
                        var h, c, d, u, p, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = r._classNamePT = new yt(t, s, 0, 0, o, 2), o.setRatio = Ut, o.pr = -11, i = !0, o.b = f, c = it(t, n), d = t._gsClassPT) {
                            for (u = {}, p = d.data; p;) u[p.p] = 1, p = p._next;
                            d.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = st(t, c, it(t), l, u), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = r.parse(t, h.difs, o, a)
                    }
                });
                var Gt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, n, r, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", n = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === a ? n = !0 : i = "transformOrigin" === i ? $t : l[i].p), Yt(o, i);
                        n && (Yt(o, kt), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Tt("clearProps", {
                        parser: function (t, e, s, n, r) {
                            return r = new yt(t, s, 0, 0, r, 2), r.setRatio = Gt, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), bt = h.length; bt--;) Ct(h[bt]);
                h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, a, h) {
                    if (!t.nodeType) return !1;
                    this._target = v = t, this._tween = a, this._vars = e, g = h, c = e.autoRound, i = !1, s = e.suffixMap || o.suffixMap, n = $(t, ""), r = this._overwriteProps;
                    var p, m, _, y, w, x, b, S, C, M = t.style;
                    if (d && "" === M.zIndex && ("auto" === (p = J(t, "zIndex", n)) || "" === p) && this._addLazySet(M, "zIndex", 0), "string" == typeof e && (y = M.cssText, p = it(t, n), M.cssText = y + ";" + e, p = st(t, p, it(t)).difs, !Y && T.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, M.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (C = 3 === this._transformType, kt ? u && (d = !0, "" === M.zIndex && ("auto" === (b = J(t, "zIndex", n)) || "" === b) && this._addLazySet(M, "zIndex", 0), f && this._addLazySet(M, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : M.zoom = 1, _ = m; _ && _._next;) _ = _._next;
                        S = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(S, null, _), S.setRatio = kt ? qt : Wt, S.data = this._transform || Bt(t, n, !0), S.tween = a, S.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (x = m._next, _ = y; _ && _.pr > m.pr;) _ = _._next;
                            (m._prev = _ ? _._prev : w) ? m._prev._next = m: y = m, (m._next = _) ? _._prev = m : w = m, m = x
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function (t, e, i, r) {
                    var o, a, h, d, u, p, f, m, _, y, w = t.style;
                    for (o in e) p = e[o], "function" == typeof p && (p = p(g, v)), a = l[o], a ? i = a.parse(t, p, o, this, i, r, e) : (u = J(t, o, n) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && M.test(p) ? (_ || (p = pt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = xt(w, o, u, p, !0, "transparent", i, 0, r)) : _ && N.test(p) ? i = xt(w, o, u, p, !0, null, i, 0, r) : (h = parseFloat(u), f = h || 0 === h ? u.substr((h + "").length) : "", ("" === u || "auto" === u) && ("width" === o || "height" === o ? (h = ot(t, o, n), f = "px") : "left" === o || "top" === o ? (h = et(t, o, n), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), y = _ && "=" === p.charAt(1), y ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), m = p.replace(b, "")) : (d = parseFloat(p), m = _ ? p.replace(b, "") : ""), "" === m && (m = o in s ? s[o] : f), p = d || 0 === d ? (y ? d + h : d) + m : e[o], f !== m && "" !== m && (d || 0 === d) && h && (h = tt(t, o, h, f), "%" === m ? (h /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (u = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, o, 1, m) : "px" !== m && (d = tt(t, o, d, m), m = "px"), y && (d || 0 === d) && (p = d + h + m)), y && (d += h), !h && 0 !== h || !d && 0 !== d ? void 0 !== w[o] && (p || p + "" != "NaN" && null != p) ? (i = new yt(w, o, d || h || 0, 0, i, -1, o, !1, 0, u, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : u) : G("invalid " + o + " tween value: " + e[o]) : (i = new yt(w, o, h, d - h, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, u, p), i.xs0 = m))), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, h.setRatio = function (t) {
                    var e, i, s, n = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; n;) {
                                if (e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.type)
                                    if (1 === n.type)
                                        if (2 === (s = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                else n.t[n.p] = e + n.xs0;
                                n = n._next
                            } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                        else
                            for (; n;) {
                                if (2 !== n.type)
                                    if (n.r && -1 !== n.type)
                                        if (e = Math.round(n.s + n.c), n.type) {
                                            if (1 === n.type) {
                                                for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                                n.t[n.p] = i
                                            }
                                        } else n.t[n.p] = e + n.xs0;
                                else n.t[n.p] = n.e;
                                else n.setRatio(t);
                                n = n._next
                            }
                }, h._enableTransforms = function (t) {
                    this._transform = this._transform || Bt(this._target, n, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Qt = function (t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function (t, e, i) {
                    var s = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Qt, s.data = this
                }, h._linkCSSP = function (t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function (t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, h._kill = function (e) {
                    var i, s, n, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (s in e) r[s] = e[s];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, r)
                };
                var Zt = function (t, e, i) {
                    var s, n, r, o;
                    if (t.slice)
                        for (n = t.length; --n > -1;) Zt(t[n], e, i);
                    else
                        for (s = t.childNodes, n = s.length; --n > -1;) r = s[n], o = r.type, r.style && (e.push(it(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Zt(r, e, i)
                };
                return o.cascadeTo = function (t, i, s) {
                    var n, r, o, a, l = e.to(t, i, s),
                        h = [l],
                        c = [],
                        d = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Zt(t, c, u), l.render(i, !0, !0), Zt(t, d), l.render(0, !0, !0), l._enabled(!0), n = u.length; --n > -1;)
                        if (r = st(u[n], c[n], d[n]), r.firstMPT) {
                            r = r.difs;
                            for (o in s) p[o] && (r[o] = s[o]);
                            a = {};
                            for (o in r) a[o] = c[n][o];
                            h.push(e.fromTo(u[n], i, a, r))
                        }
                    return h
                }, t.activate([o]), o
            }, !0),
            function () {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function (t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function () {
                    for (var t, i, s, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, a = {}, l = n._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
                    for (o = r.length; --o > -1;)
                        for (t = r[o], i = n._firstPT; i;) s = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[t] = l)), i = s;
                    return !1
                }, i._add = function (t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
                }
            }(),
            function () {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.0",
                    init: function (t, e, i, s) {
                        var n, r;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) r = e[n], "function" == typeof r && (r = r(s, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", r + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function (t, e, i, s) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360,
                        d = 1e-6;
                    for (n in e) "useRadians" !== n && (a = e[n], "function" == typeof a && (a = a(s, t)), h = (a + "").split("_"), r = h[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, l = a - o, h.length && (r = h.join("_"), -1 !== r.indexOf("short") && (l %= c) !== l % (c / 2) && (l = 0 > l ? l + c : l - c), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > d || -d > l) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
                    r = n.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = r._class,
                    h = function (e, i) {
                        var s = l("easing." + e, function () {}, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, s
                    },
                    c = t.register || function () {},
                    d = function (t, e, i, s, n) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return c(r, t), r
                    },
                    u = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function (e, i) {
                        var s = l("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, n.config = function (t) {
                            return new s(t)
                        }, s
                    },
                    f = d("Back", p("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    v = m.prototype = new t;
                return v.constructor = m, v.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), v.config = m.config = function (t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, v.config = e.config = function (t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, s, n, r, o, a, l = e.taper || "none", h = [], c = 0, d = 0 | (e.points || 20), p = d, f = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / d * p, s = v ? v.getRatio(i) : i, "none" === l ? n = g : "out" === l ? (r = 1 - i, n = r * r * g) : "in" === l ? n = i * i * g : .5 > i ? (r = 2 * i, n = r * r * .5 * g) : (r = 2 * (1 - i), n = r * r * .5 * g), f ? s += Math.random() * n - .5 * n : p % 2 ? s += .5 * n : s -= .5 * n, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[c++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function (t, e) {
                            return t.x - e.x
                        }), a = new u(1, 1, null), p = d; --p > -1;) o = h[p], a = new u(o.x, o.y, a);
                    this._prev = new u(0, 0, 0 !== a.t ? a : a.next)
                }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, v.config = function (t) {
                    return new i(t)
                }, i.ease = new i, d("Bounce", h("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", h("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function (e, i, s) {
                    var n = l("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, r.config = function (t, e) {
                        return new n(t, e)
                    }, n
                }, d("Elastic", s("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function (t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), s("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), d("Expo", h("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", h("SineOut", function (t) {
                    return Math.sin(t * a)
                }), h("SineIn", function (t) {
                    return 1 - Math.cos(t * a)
                }), h("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        var i = {},
            s = t.document,
            n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var r, o, a, l, h, c = function (t) {
                    var e, i = t.split("."),
                        s = n;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                d = c("com.greensock"),
                u = 1e-10,
                p = function (t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                f = function () {},
                m = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                v = {},
                g = function (s, r, o, a) {
                    this.sc = v[s] ? v[s].sc : [], v[s] = this, this.gsClass = null, this.func = o;
                    var l = [];
                    this.check = function (h) {
                        for (var d, u, p, f, m, _ = r.length, y = _; --_ > -1;)(d = v[r[_]] || new g(r[_], [])).gsClass ? (l[_] = d.gsClass, y--) : h && d.sc.push(this);
                        if (0 === y && o) {
                            if (u = ("com.greensock." + s).split("."), p = u.pop(), f = c(u.join("."))[p] = this.gsClass = o.apply(o, l), a)
                                if (n[p] = i[p] = f, !(m = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                                    return f
                                });
                                else if (m)
                                if (s === e) {
                                    module.exports = i[e] = f;
                                    for (_ in i) f[_] = i[_]
                                } else i[e] && (i[e][p] = f);
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                _ = t._gsDefine = function (t, e, i, s) {
                    return new g(t, e, i, s)
                },
                y = d._class = function (t, e, i) {
                    return e = e || function () {}, _(t, [], function () {
                        return e
                    }, i), e
                };
            _.globals = n;
            var w = [0, 0, 1, 1],
                x = y("easing.Ease", function (t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? w.concat(e) : w
                }, !0),
                b = x.map = {},
                S = x.register = function (t, e, i, s) {
                    for (var n, r, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], n = s ? y("easing." + r, null, !0) : d.easing[r] || {}, o = c.length; --o > -1;) a = c[o], b[r + "." + a] = b[a + r] = n[a] = t.getRatio ? t : t[a] || new t
                };
            for (a = x.prototype, a._calcEnd = !1, a.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = r.length; --o > -1;) a = r[o] + ",Power" + o, S(new x(null, null, 1, o), a, "easeOut", !0), S(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), S(new x(null, null, 3, o), a, "easeInOut");
            b.linear = d.easing.Linear.easeIn, b.swing = d.easing.Quad.easeInOut;
            var T = y("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            a = T.prototype, a.addEventListener = function (t, e, i, s, n) {
                n = n || 0;
                var r, o, a = this._listeners[t],
                    c = 0;
                for (this !== l || h || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) r = a[o], r.c === e && r.s === i ? a.splice(o, 1) : 0 === c && r.pr < n && (c = o + 1);
                a.splice(c, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: n
                })
            }, a.removeEventListener = function (t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, a.dispatchEvent = function (t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(s = n[e]) && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var C = t.requestAnimationFrame,
                M = t.cancelAnimationFrame,
                E = Date.now || function () {
                    return (new Date).getTime()
                },
                k = E();
            for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !C;) C = t[r[o] + "RequestAnimationFrame"], M = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
            y("Ticker", function (t, e) {
                var i, n, r, o, a, c = this,
                    d = E(),
                    p = !(!1 === e || !C) && "auto",
                    m = 500,
                    v = 33,
                    g = "tick",
                    _ = function (t) {
                        var e, s, l = E() - k;
                        l > m && (d += l - v), k += l, c.time = (k - d) / 1e3, e = c.time - a, (!i || e > 0 || !0 === t) && (c.frame++, a += e + (e >= o ? .004 : o - e), s = !0), !0 !== t && (r = n(_)), s && c.dispatchEvent(g)
                    };
                T.call(c), c.time = c.frame = 0, c.tick = function () {
                    _(!0)
                }, c.lagSmoothing = function (t, e) {
                    m = t || 1 / u, v = Math.min(e, m, 0)
                }, c.sleep = function () {
                    null != r && (p && M ? M(r) : clearTimeout(r), n = f, r = null, c === l && (h = !1))
                }, c.wake = function (t) {
                    null !== r ? c.sleep() : t ? d += -k + (k = E()) : c.frame > 10 && (k = E() - m + 5), n = 0 === i ? f : p && C ? C : function (t) {
                        return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                    }, c === l && (h = !0), _(2)
                }, c.fps = function (t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void c.wake()) : i
                }, c.useRAF = function (t) {
                    return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
                }, c.fps(t), setTimeout(function () {
                    "auto" === p && c.frame < 5 && "hidden" !== s.visibilityState && c.useRAF(!1)
                }, 1500)
            }), a = d.Ticker.prototype = new d.events.EventDispatcher, a.constructor = d.Ticker;
            var L = y("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                    h || l.wake();
                    var i = this.vars.useFrames ? U : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = L.ticker = new d.Ticker, a = L.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var P = function () {
                h && E() - k > 2e3 && l.wake(), setTimeout(P, 2e3)
            };
            P(), a.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, a.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, a.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, a.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, a.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function (t, e, i) {}, a.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
            }, a._enabled = function (t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, a.kill = function (t, e) {
                return this._kill(t, e), this
            }, a._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a._callback = function (t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, s[0]);
                        break;
                    case 2:
                        i.call(n, s[0], s[1]);
                        break;
                    default:
                        i.apply(n, s)
                }
            }, a.eventCallback = function (t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function (t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && Z(), this.render(t, e, !1), N.length && Z())
                }
                return this
            }, a.progress = a.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, a.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (h || t || l.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var A = y("core.SimpleTimeline", function (t) {
                L.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            a = A.prototype = new L, a.constructor = A, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (t, e, i, s) {
                var n, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (r = t._startTime; n && n._startTime > r;) n = n._prev;
                return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
            }, a._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function (t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
            }, a.rawTime = function () {
                return h || l.wake(), this._totalTime
            };
            var O = y("TweenLite", function (e, i, s) {
                    if (L.call(this, i, s), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var n, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Y[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                        for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++) r = o[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(p(r))) : (this._siblings[n] = K(r, this, !1), 1 === l && this._siblings[n].length > 1 && J(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = o[n--] = O.selector(r)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u, this.render(Math.min(0, -this._delay)))
                }, !0),
                D = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function (t, e) {
                    var i, s = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            a = O.prototype = new L, a.constructor = O, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, O.version = "1.19.1", O.defaultEase = a._ease = new x(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = l, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
                l.lagSmoothing(t, e)
            }, O.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : void 0 === s ? e : s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                z = {},
                I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                j = function (t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : s > e && e > -s && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function (t, e, i, s) {
                    var n, r, o, a, l, h, c, d = [],
                        u = 0,
                        p = "",
                        f = 0;
                    for (d.start = t, d.end = e, t = d[0] = t + "", e = d[1] = e + "", i && (i(d), t = d[0], e = d[1]), d.length = 0, n = t.match(I) || [], r = e.match(I) || [], s && (s._next = null, s.blob = 1, d._firstPT = d._applyPT = s), l = r.length, a = 0; l > a; a++) c = r[a], h = e.substr(u, e.indexOf(c, u) - u), p += h || !a ? h : ",", u += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === n[a] || n.length <= a ? p += c : (p && (d.push(p), p = ""), o = parseFloat(n[a]), d.push(o), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: f && 4 > f ? Math.round : 0
                    }), u += c.length;
                    return p += e.substr(u), p && d.push(p), d.setRatio = j, d
                },
                V = function (t, e, i, s, n, r, o, a, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h, c = typeof t[e],
                        d = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : d ? o ? t[d](o) : t[d]() : t[e],
                        p = "string" == typeof s && "=" === s.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === c,
                            pg: 0,
                            n: n || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                        };
                    return ("number" != typeof u || "number" != typeof s && !p) && (o || isNaN(u) || !p && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (f.fp = o, h = F(u, p ? f.s + f.c : s, a || O.defaultStringFilter, f), f = {
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: n || e,
                        pr: 0,
                        m: 0
                    }) : (f.s = parseFloat(u), p || (f.c = parseFloat(s) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                H = O._internals = {
                    isArray: m,
                    isSelector: D,
                    lazyTweens: N,
                    blobDif: F
                },
                B = O._plugins = {},
                W = H.tweenLookup = {},
                q = 0,
                X = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                U = L._rootFramesTimeline = new A,
                G = L._rootTimeline = new A,
                Q = 30,
                Z = H.lazyRender = function () {
                    var t, e = N.length;
                    for (z = {}; --e > -1;)(t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    N.length = 0
                };
            G._startTime = l.time, U._startTime = l.frame, G._active = U._active = !0, setTimeout(Z, 1), L._updateRoot = O.render = function () {
                var t, e, i;
                if (N.length && Z(), G.render((l.time - G._startTime) * G._timeScale, !1, !1), U.render((l.frame - U._startTime) * U._timeScale, !1, !1), N.length && Z(), l.frame >= Q) {
                    Q = l.frame + (parseInt(O.autoSleep, 10) || 120);
                    for (i in W) {
                        for (e = W[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete W[i]
                    }
                    if ((!(i = G._first) || i._paused) && O.autoSleep && !U._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", L._updateRoot);
            var K = function (t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (W[r || (t._gsTweenID = r = "t" + q++)] || (W[r] = {
                            target: t,
                            tweens: []
                        }), e && (s = W[r].tweens, s[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return W[r].tweens
                },
                $ = function (t, e, i, s) {
                    var n, r, o = t.vars.onOverwrite;
                    return o && (n = o(t, e, i, s)), o = O.onOverwrite, o && (r = o(t, e, i, s)), !1 !== n && !1 !== r
                },
                J = function (t, e, i, s, n) {
                    var r, o, a, l;
                    if (1 === s || s >= 4) {
                        for (l = n.length, r = 0; l > r; r++)
                            if ((a = n[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === s) break;
                        return o
                    }
                    var h, c = e._startTime + u,
                        d = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (r = n.length; --r > -1;)(a = n[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || tt(e, 0, f), 0 === tt(a, h, f) && (d[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (d[p++] = a)));
                    for (r = p; --r > -1;)
                        if (a = d[r], 2 === s && a._kill(i, t, e) && (o = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !$(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                tt = function (t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * u > r - e ? u : (r += t.totalDuration() / t._timeScale / n) > e + u ? 0 : r - e - u
                };
            a._init = function () {
                var t, e, i, s, n, r, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in o.startAt) n[s] = o.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== o.lazy, n.startAt = n.delay = null, this._startAt = O.to(this.target, 0, n), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in o) X[s] && "autoCSS" !== s || (i[s] = o[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = O.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || O.defaultEase : O.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, a._initProps = function (e, i, s, n, r) {
                var o, a, l, h, c, d;
                if (null == e) return !1;
                z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && B.css && !1 !== this.vars.autoCSS && R(this.vars, e);
                for (o in this.vars)
                    if (d = this.vars[o], X[o]) d && (d instanceof Array || d.push && m(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[o] = d = this._swapSelfInParams(d, this));
                    else if (B[o] && (h = new B[o])._onInitTween(e, this.vars[o], this, r)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: h._priority,
                            m: 0
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = V.call(this, e, o, "get", d, o, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), l)
            }, a.render = function (t, e, i) {
                var s, n, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        d = this._easeType,
                        p = this._easePower;
                    (1 === d || 3 === d && c >= .5) && (c = 1 - c), 3 === d && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === d ? 1 - c : 2 === d ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, N.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || s || i) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
                }
            }, a._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var s, n, r, o, a, l, h, c, d, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((m(e) || D(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, c = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) a[r] && (d || (d = []), d.push(r));
                            if ((d || !t) && !$(this, i, e, d)) return !1
                        }
                        for (r in h)(o = a[r]) && (u && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), c && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function () {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], L.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function (t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = K(s[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, O.to = function (t, e, i) {
                return new O(t, e, i)
            }, O.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function (t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new O(t, e, s)
            }, O.delayedCall = function (t, e, i, s, n) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, O.set = function (t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, s, n, r;
                if ((m(t) || D(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(O.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else
                    for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = O.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
            };
            var et = y("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (a = et.prototype, et.version = "1.19.0", et.API = 2, a._firstPT = null, a._addTween = V, a.setRatio = j, a._kill = function (t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, a._mod = a._roundProps = function (t) {
                    for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, O._onPluginEvent = function (t, e) {
                    var i, s, n, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, s = n; s && s.pr > a.pr;) s = s._next;
                            (a._prev = s ? s._prev : r) ? a._prev._next = a: n = a, (a._next = s) ? s._prev = a : r = a, a = o
                        }
                        a = e._firstPT = n
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, et.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (B[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            et.call(this, i, s), this._overwriteProps = n || []
                        }, !0 === t.global),
                        a = o.prototype = new et(i);
                    a.constructor = o, o.API = t.API;
                    for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, et.activate([o]), o
                }, r = t._gsQueue) {
                for (o = 0; o < r.length; o++) r[o]();
                for (a in v) v[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function () {
        "use strict";
        var t = function () {};
        t.version = "2.0.5", window.addEventListener("mousewheel", function () {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function (s) {
            var r, o, a = "ScrollMagic.Controller",
                l = "FORWARD",
                h = "REVERSE",
                c = "PAUSED",
                d = i.defaults,
                u = this,
                p = n.extend({}, d, s),
                f = [],
                m = !1,
                v = 0,
                g = c,
                _ = !0,
                y = 0,
                w = !0,
                x = function () {
                    for (var t in p) d.hasOwnProperty(t) || delete p[t];
                    if (p.container = n.get.elements(p.container)[0], !p.container) throw a + " init failed.";
                    _ = p.container === window || p.container === document.body || !document.body.contains(p.container), _ && (p.container = window), y = T(), p.container.addEventListener("resize", k), p.container.addEventListener("scroll", k), p.refreshInterval = parseInt(p.refreshInterval) || d.refreshInterval, b()
                },
                b = function () {
                    p.refreshInterval > 0 && (o = window.setTimeout(L, p.refreshInterval))
                },
                S = function () {
                    return p.vertical ? n.get.scrollTop(p.container) : n.get.scrollLeft(p.container)
                },
                T = function () {
                    return p.vertical ? n.get.height(p.container) : n.get.width(p.container)
                },
                C = this._setScrollPos = function (t) {
                    p.vertical ? _ ? window.scrollTo(n.get.scrollLeft(), t) : p.container.scrollTop = t : _ ? window.scrollTo(t, n.get.scrollTop()) : p.container.scrollLeft = t
                },
                M = function () {
                    if (w && m) {
                        var t = n.type.Array(m) ? m : f.slice(0);
                        m = !1;
                        var e = v;
                        v = u.scrollPos();
                        var i = v - e;
                        0 !== i && (g = i > 0 ? l : h), g === h && t.reverse(), t.forEach(function (t) {
                            t.update(!0)
                        })
                    }
                },
                E = function () {
                    r = n.rAF(M)
                },
                k = function (t) {
                    "resize" == t.type && (y = T(), g = c), !0 !== m && (m = !0, E())
                },
                L = function () {
                    if (!_ && y != T()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        p.container.dispatchEvent(t)
                    }
                    f.forEach(function (t) {
                        t.refresh()
                    }), b()
                };
            this._options = p;
            var P = function (t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function (t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function (e) {
                if (n.type.Array(e)) e.forEach(function (t) {
                    u.addScene(t)
                });
                else if (e instanceof t.Scene)
                    if (e.controller() !== u) e.addTo(u);
                    else if (f.indexOf(e) < 0) {
                    f.push(e), f = P(f), e.on("shift.controller_sort", function () {
                        f = P(f)
                    });
                    for (var i in p.globalSceneOptions) e[i] && e[i].call(e, p.globalSceneOptions[i])
                }
                return u
            }, this.removeScene = function (t) {
                if (n.type.Array(t)) t.forEach(function (t) {
                    u.removeScene(t)
                });
                else {
                    var e = f.indexOf(t);
                    e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove())
                }
                return u
            }, this.updateScene = function (e, i) {
                return n.type.Array(e) ? e.forEach(function (t) {
                    u.updateScene(t, i)
                }) : i ? e.update(!0) : !0 !== m && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = P(m), E()), u
            }, this.update = function (t) {
                return k({
                    type: "resize"
                }), t && M(), u
            }, this.scrollTo = function (i, s) {
                if (n.type.Number(i)) C.call(p.container, i, s);
                else if (i instanceof t.Scene) i.controller() === u && u.scrollTo(i.scrollOffset(), s);
                else if (n.type.Function(i)) C = i;
                else {
                    var r = n.get.elements(i)[0];
                    if (r) {
                        for (; r.parentNode.hasAttribute(e);) r = r.parentNode;
                        var o = p.vertical ? "top" : "left",
                            a = n.get.offset(p.container),
                            l = n.get.offset(r);
                        _ || (a[o] -= u.scrollPos()), u.scrollTo(l[o] - a[o], s)
                    }
                }
                return u
            }, this.scrollPos = function (t) {
                return arguments.length ? (n.type.Function(t) && (S = t), u) : S.call(u)
            }, this.info = function (t) {
                var e = {
                    size: y,
                    vertical: p.vertical,
                    scrollPos: v,
                    scrollDirection: g,
                    container: p.container,
                    isDocument: _
                };
                return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
            }, this.loglevel = function () {
                return u
            }, this.enabled = function (t) {
                return arguments.length ? (w != t && (w = !!t, u.updateScene(f, !0)), u) : w
            }, this.destroy = function (t) {
                window.clearTimeout(o);
                for (var e = f.length; e--;) f[e].destroy(t);
                return p.container.removeEventListener("resize", k), p.container.removeEventListener("scroll", k), n.cAF(r), null
            }, x(), u
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function (t, e) {
            i.defaults[t] = e
        }, t.Controller.extend = function (e) {
            var i = this;
            t.Controller = function () {
                return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
            }, n.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function (i) {
            var r, o, a = "BEFORE",
                l = "DURING",
                h = "AFTER",
                c = s.defaults,
                d = this,
                u = n.extend({}, c, i),
                p = a,
                f = 0,
                m = {
                    start: 0,
                    end: 0
                },
                v = 0,
                g = !0,
                _ = function () {
                    for (var t in u) c.hasOwnProperty(t) || delete u[t];
                    for (var e in c) E(e);
                    C()
                },
                y = {};
            this.on = function (t, e) {
                return n.type.Function(e) && (t = t.trim().split(" "), t.forEach(function (t) {
                    var i = t.split("."),
                        s = i[0],
                        n = i[1];
                    "*" != s && (y[s] || (y[s] = []), y[s].push({
                        namespace: n || "",
                        callback: e
                    }))
                })), d
            }, this.off = function (t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function (t) {
                    var i = t.split("."),
                        s = i[0],
                        n = i[1] || "";
                    ("*" === s ? Object.keys(y) : [s]).forEach(function (t) {
                        for (var i = y[t] || [], s = i.length; s--;) {
                            var r = i[s];
                            !r || n !== r.namespace && "*" !== n || e && e != r.callback || i.splice(s, 1)
                        }
                        i.length || delete y[t]
                    })
                }), d) : d
            }, this.trigger = function (e, i) {
                if (e) {
                    var s = e.trim().split("."),
                        n = s[0],
                        r = s[1],
                        o = y[n];
                    o && o.forEach(function (e) {
                        r && r !== e.namespace || e.callback.call(d, new t.Event(n, e.namespace, d, i))
                    })
                }
                return d
            }, d.on("change.internal", function (t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? b() : "reverse" === t.what && d.update())
            }).on("shift.internal", function () {
                w(), d.update()
            }), this.addTo = function (e) {
                return e instanceof t.Controller && o != e && (o && o.removeScene(d), o = e, C(), x(!0), b(!0), w(), o.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
                    controller: o
                }), d.update()), d
            }, this.enabled = function (t) {
                return arguments.length ? (g != t && (g = !!t, d.update(!0)), d) : g
            }, this.remove = function () {
                if (o) {
                    o.info("container").removeEventListener("resize", S);
                    var t = o;
                    o = void 0, t.removeScene(d), d.trigger("remove")
                }
                return d
            }, this.destroy = function (t) {
                return d.trigger("destroy", {
                    reset: t
                }), d.remove(), d.off("*.*"), null
            }, this.update = function (t) {
                if (o)
                    if (t)
                        if (o.enabled() && g) {
                            var e, i = o.info("scrollPos");
                            e = u.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, d.trigger("update", {
                                startPos: m.start,
                                endPos: m.end,
                                scrollPos: i
                            }), d.progress(e)
                        } else k && p === l && P(!0);
                else o.updateScene(d, !1);
                return d
            }, this.refresh = function () {
                return x(), b(), d
            }, this.progress = function (t) {
                if (arguments.length) {
                    var e = !1,
                        i = p,
                        s = o ? o.info("scrollDirection") : "PAUSED",
                        n = u.reverse || t >= f;
                    if (0 === u.duration ? (e = f != t, f = 1 > t && n ? 0 : 1, p = 0 === f ? a : l) : 0 > t && p !== a && n ? (f = 0, p = a, e = !0) : t >= 0 && 1 > t && n ? (f = t, p = l, e = !0) : t >= 1 && p !== h ? (f = 1, p = h, e = !0) : p !== l || n || P(), e) {
                        var r = {
                                progress: f,
                                state: p,
                                scrollDirection: s
                            },
                            c = p != i,
                            m = function (t) {
                                d.trigger(t, r)
                            };
                        c && i !== l && (m("enter"), m(i === a ? "start" : "end")), m("progress"), c && p !== l && (m(p === a ? "start" : "end"), m("leave"))
                    }
                    return d
                }
                return f
            };
            var w = function () {
                    m = {
                        start: v + u.offset
                    }, o && u.triggerElement && (m.start -= o.info("size") * u.triggerHook), m.end = m.start + u.duration
                },
                x = function (t) {
                    if (r) {
                        var e = "duration";
                        M(e, r.call(d)) && !t && (d.trigger("change", {
                            what: e,
                            newval: u[e]
                        }), d.trigger("shift", {
                            reason: e
                        }))
                    }
                },
                b = function (t) {
                    var i = 0,
                        s = u.triggerElement;
                    if (o && s) {
                        for (var r = o.info(), a = n.get.offset(r.container), l = r.vertical ? "top" : "left"; s.parentNode.hasAttribute(e);) s = s.parentNode;
                        var h = n.get.offset(s);
                        r.isDocument || (a[l] -= o.scrollPos()), i = h[l] - a[l]
                    }
                    var c = i != v;
                    v = i, c && !t && d.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                S = function () {
                    u.triggerHook > 0 && d.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                T = n.extend(s.validate, {
                    duration: function (t) {
                        if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function () {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (n.type.Function(t)) {
                            r = t;
                            try {
                                t = parseFloat(r())
                            } catch (e) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !n.type.Number(t) || 0 > t) throw r ? (r = void 0, 0) : 0;
                        return t
                    }
                }),
                C = function (t) {
                    t = arguments.length ? [t] : Object.keys(T), t.forEach(function (t) {
                        var e;
                        if (T[t]) try {
                            e = T[t](u[t])
                        } catch (i) {
                            e = c[t]
                        } finally {
                            u[t] = e
                        }
                    })
                },
                M = function (t, e) {
                    var i = !1,
                        s = u[t];
                    return u[t] != e && (u[t] = e, C(t), i = s != u[t]), i
                },
                E = function (t) {
                    d[t] || (d[t] = function (e) {
                        return arguments.length ? ("duration" === t && (r = void 0), M(t, e) && (d.trigger("change", {
                            what: t,
                            newval: u[t]
                        }), s.shifts.indexOf(t) > -1 && d.trigger("shift", {
                            reason: t
                        })), d) : u[t]
                    })
                };
            this.controller = function () {
                return o
            }, this.state = function () {
                return p
            }, this.scrollOffset = function () {
                return m.start
            }, this.triggerPosition = function () {
                var t = u.offset;
                return o && (t += u.triggerElement ? v : o.info("size") * d.triggerHook()), t
            };
            var k, L;
            d.on("shift.internal", function (t) {
                var e = "duration" === t.reason;
                (p === h && e || p === l && 0 === u.duration) && P(), e && A()
            }).on("progress.internal", function () {
                P()
            }).on("add.internal", function () {
                A()
            }).on("destroy.internal", function (t) {
                d.removePin(t.reset)
            });
            var P = function (t) {
                    if (k && o) {
                        var e = o.info(),
                            i = L.spacer.firstChild;
                        if (t || p !== l) {
                            var s = {
                                    position: L.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                r = n.css(i, "position") != s.position;
                            L.pushFollowers ? u.duration > 0 && (p === h && 0 === parseFloat(n.css(L.spacer, "padding-top")) ? r = !0 : p === a && 0 === parseFloat(n.css(L.spacer, "padding-bottom")) && (r = !0)) : s[e.vertical ? "top" : "left"] = u.duration * f, n.css(i, s), r && A()
                        } else {
                            "fixed" != n.css(i, "position") && (n.css(i, {
                                position: "fixed"
                            }), A());
                            var c = n.get.offset(L.spacer, !0),
                                d = u.reverse || 0 === u.duration ? e.scrollPos - m.start : Math.round(f * u.duration * 10) / 10;
                            c[e.vertical ? "top" : "left"] += d, n.css(L.spacer.firstChild, {
                                top: c.top,
                                left: c.left
                            })
                        }
                    }
                },
                A = function () {
                    if (k && o && L.inFlow) {
                        var t = p === l,
                            e = o.info("vertical"),
                            i = L.spacer.firstChild,
                            s = n.isMarginCollapseType(n.css(L.spacer, "display")),
                            r = {};
                        L.relSize.width || L.relSize.autoFullWidth ? t ? n.css(k, {
                            width: n.get.width(L.spacer)
                        }) : n.css(k, {
                            width: "100%"
                        }) : (r["min-width"] = n.get.width(e ? k : i, !0, !0), r.width = t ? r["min-width"] : "auto"), L.relSize.height ? t ? n.css(k, {
                            height: n.get.height(L.spacer) - (L.pushFollowers ? u.duration : 0)
                        }) : n.css(k, {
                            height: "100%"
                        }) : (r["min-height"] = n.get.height(e ? i : k, !0, !s), r.height = t ? r["min-height"] : "auto"), L.pushFollowers && (r["padding" + (e ? "Top" : "Left")] = u.duration * f, r["padding" + (e ? "Bottom" : "Right")] = u.duration * (1 - f)), n.css(L.spacer, r)
                    }
                },
                O = function () {
                    o && k && p === l && !o.info("isDocument") && P()
                },
                D = function () {
                    o && k && p === l && ((L.relSize.width || L.relSize.autoFullWidth) && n.get.width(window) != n.get.width(L.spacer.parentNode) || L.relSize.height && n.get.height(window) != n.get.height(L.spacer.parentNode)) && A()
                },
                R = function (t) {
                    o && k && p === l && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
            this.setPin = function (t, i) {
                var s = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = n.extend({}, s, i), !(t = n.get.elements(t)[0])) return d;
                if ("fixed" === n.css(t, "position")) return d;
                if (k) {
                    if (k === t) return d;
                    d.removePin()
                }
                k = t;
                var r = k.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                k.parentNode.style.display = "none";
                var a = "absolute" != n.css(k, "position"),
                    l = n.css(k, o.concat(["display"])),
                    h = n.css(k, ["width", "height"]);
                k.parentNode.style.display = r, !a && i.pushFollowers && (i.pushFollowers = !1);
                var c = k.parentNode.insertBefore(document.createElement("div"), k),
                    u = n.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || n.extend(u, n.css(k, ["width", "height"])), n.css(c, u), c.setAttribute(e, ""), n.addClass(c, i.spacerClass), L = {
                        spacer: c,
                        relSize: {
                            width: "%" === h.width.slice(-1),
                            height: "%" === h.height.slice(-1),
                            autoFullWidth: "auto" === h.width && a && n.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !k.___origStyle) {
                    k.___origStyle = {};
                    var p = k.style;
                    o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (t) {
                        k.___origStyle[t] = p[t] || ""
                    })
                }
                return L.relSize.width && n.css(c, {
                    width: h.width
                }), L.relSize.height && n.css(c, {
                    height: h.height
                }), c.appendChild(k), n.css(k, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (L.relSize.width || L.relSize.autoFullWidth) && n.css(k, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", D), k.addEventListener("mousewheel", R), k.addEventListener("DOMMouseScroll", R), P(), d
            }, this.removePin = function (t) {
                if (k) {
                    if (p === l && P(!0), t || !o) {
                        var i = L.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var s = L.spacer.style,
                                r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, r.forEach(function (t) {
                                margins[t] = s[t] || ""
                            }), n.css(i, margins)
                        }
                        L.spacer.parentNode.insertBefore(i, L.spacer), L.spacer.parentNode.removeChild(L.spacer), k.parentNode.hasAttribute(e) || (n.css(k, k.___origStyle), delete k.___origStyle)
                    }
                    window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", D), k.removeEventListener("mousewheel", R), k.removeEventListener("DOMMouseScroll", R), k = void 0
                }
                return d
            };
            var N, z = [];
            return d.on("destroy.internal", function (t) {
                d.removeClassToggle(t.reset)
            }), this.setClassToggle = function (t, e) {
                var i = n.get.elements(t);
                return 0 !== i.length && n.type.String(e) ? (z.length > 0 && d.removeClassToggle(), N = e, z = i, d.on("enter.internal_class leave.internal_class", function (t) {
                    var e = "enter" === t.type ? n.addClass : n.removeClass;
                    z.forEach(function (t) {
                        e(t, N)
                    })
                }), d) : d
            }, this.removeClassToggle = function (t) {
                return t && z.forEach(function (t) {
                    n.removeClass(t, N)
                }), d.off("start.internal_class end.internal_class"), N = void 0, z = [], d
            }, _(), d
        };
        var s = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function (t) {
                    if (t = parseFloat(t), !n.type.Number(t)) throw 0;
                    return t
                },
                triggerElement: function (t) {
                    if (t = t || void 0) {
                        var e = n.get.elements(t)[0];
                        if (!e) throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function (t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function (t) {
                    return !!t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function (t, e, i, n) {
            t in s.defaults || (s.defaults[t] = e, s.validate[t] = i, n && s.shifts.push(t))
        }, t.Scene.extend = function (e) {
            var i = this;
            t.Scene = function () {
                return i.apply(this, arguments), this.$super = n.extend({}, this), e.apply(this, arguments) || this
            }, n.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function (t, e, i, s) {
            s = s || {};
            for (var n in s) this[n] = s[n];
            return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var n = t._util = function (t) {
            var e, i = {},
                s = function (t) {
                    return parseFloat(t) || 0
                },
                n = function (e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                r = function (e, i, r, o) {
                    if ((i = i === document ? t : i) === t) o = !1;
                    else if (!d.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (r ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (r && o) {
                        var l = n(i);
                        a += "Height" === e ? s(l.marginTop) + s(l.marginBottom) : s(l.marginLeft) + s(l.marginRight)
                    }
                    return a
                },
                o = function (t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                        return t[1].toUpperCase()
                    })
                };
            i.extend = function (t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function (t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                h = t.requestAnimationFrame,
                c = t.cancelAnimationFrame;
            for (e = 0; !h && e < l.length; ++e) h = t[l[e] + "RequestAnimationFrame"], c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            h || (h = function (e) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - a)),
                    n = t.setTimeout(function () {
                        e(i + s)
                    }, s);
                return a = i + s, n
            }), c || (c = function (e) {
                t.clearTimeout(e)
            }), i.rAF = h.bind(t), i.cAF = c.bind(t);
            var d = i.type = function (t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            d.String = function (t) {
                    return "string" === d(t)
                }, d.Function = function (t) {
                    return "function" === d(t)
                }, d.Array = function (t) {
                    return Array.isArray(t)
                },
                d.Number = function (t) {
                    return !d.Array(t) && t - parseFloat(t) + 1 >= 0
                }, d.DomElement = function (t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
                };
            var u = i.get = {};
            return u.elements = function (e) {
                var i = [];
                if (d.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (t) {
                    return i
                }
                if ("nodelist" === d(e) || d.Array(e))
                    for (var s = 0, n = i.length = e.length; n > s; s++) {
                        var r = e[s];
                        i[s] = d.DomElement(r) ? r : u.elements(r)
                    } else(d.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, u.scrollTop = function (e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, u.scrollLeft = function (e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, u.width = function (t, e, i) {
                return r("width", t, e, i)
            }, u.height = function (t, e, i) {
                return r("height", t, e, i)
            }, u.offset = function (t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var s = t.getBoundingClientRect();
                    i.top = s.top, i.left = s.left, e || (i.top += u.scrollTop(), i.left += u.scrollLeft())
                }
                return i
            }, i.addClass = function (t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, i.removeClass = function (t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function (t, e) {
                if (d.String(e)) return n(t)[o(e)];
                if (d.Array(e)) {
                    var i = {},
                        s = n(t);
                    return e.forEach(function (t) {
                        i[t] = s[o(t)]
                    }), i
                }
                for (var r in e) {
                    var a = e[r];
                    a == parseFloat(a) && (a += "px"), t.style[o(r)] = a
                }
            }, i
        }(window || {});
        return t
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function (t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function (t) {
            return !!t
        }), t.Scene.extend(function () {
            var t, s = this;
            s.on("progress.plugin_gsap", function () {
                n()
            }), s.on("destroy.plugin_gsap", function (t) {
                s.removeTween(t.reset)
            });
            var n = function () {
                if (t) {
                    var e = s.progress(),
                        i = s.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === s.duration() ? e > 0 ? t.play() : t.reverse() : s.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            s.setTween = function (r, o, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = o, o = 1), r = e.to(r, o, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(r) : r, l.pause()
                } catch (t) {
                    return s
                }
                return t && s.removeTween(), t = l, r.repeat && -1 === r.repeat() && (t.repeat(-1), t.yoyo(r.yoyo())), n(), s
            }, s.removeTween = function (e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0), s
            }
        })
    });
/*!
 * VERSION: 0.5.6
 * DATE: 2016-10-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function (t) {
            var i, s = t.split("."),
                n = e;
            for (i = 0; i < s.length; i++) n[s[i]] = n = n[s[i]] || {};
            return n
        },
        s = i("com.greensock.utils"),
        n = function (t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        r = document,
        o = r.defaultView ? r.defaultView.getComputedStyle : function () {},
        a = /([A-Z])/g,
        l = function (t, e, i, s) {
            var n;
            return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), s ? n : parseInt(n, 10) || 0
        },
        h = function (t) {
            return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        },
        c = function (t) {
            var e, i, s, n = [],
                r = t.length;
            for (e = 0; r > e; e++)
                if (i = t[e], h(i))
                    for (s = i.length, s = 0; s < i.length; s++) n.push(i[s]);
                else n.push(i);
            return n
        },
        d = /(?:\r|\n|\t\t)/g,
        u = /(?:\s\s+)/g,
        p = 55296,
        f = 56319,
        m = 56320,
        v = 127462,
        g = 127487,
        _ = 127995,
        y = 127999,
        w = function (t) {
            return (t.charCodeAt(0) - p << 10) + (t.charCodeAt(1) - m) + 65536
        },
        x = r.all && !r.addEventListener,
        b = " style='position:relative;display:inline-block;" + (x ? "*display:inline;*zoom:1;'" : "'"),
        S = function (t, e) {
            t = t || "";
            var i = -1 !== t.indexOf("++"),
                s = 1;
            return i && (t = t.split("++").join("")),
                function () {
                    return "<" + e + b + (t ? " class='" + t + (i ? s++ : "") + "'>" : ">")
                }
        },
        T = s.SplitText = e.SplitText = function (t, e) {
            if ("string" == typeof t && (t = T.selector(t)), !t) throw "cannot split a null element.";
            this.elements = h(t) ? c(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        C = function (t, e, i) {
            var s = t.nodeType;
            if (1 === s || 9 === s || 11 === s)
                for (t = t.firstChild; t; t = t.nextSibling) C(t, e, i);
            else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        M = function (t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        E = function (t) {
            var e, i = [],
                s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        k = function (t, e, i) {
            for (var s; t && t !== e;) {
                if (s = t._next || t.nextSibling) return s.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        },
        L = function (t) {
            var e, i, s = E(t.childNodes),
                n = s.length;
            for (e = 0; n > e; e++) i = s[e], i._isSplit ? L(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
        },
        P = function (t, e, i, s, n, a, h) {
            var c, d, u, p, f, m, v, g, _, y, w, x, b = o(t),
                S = l(t, "paddingLeft", b),
                T = -999,
                E = l(t, "borderBottomWidth", b) + l(t, "borderTopWidth", b),
                P = l(t, "borderLeftWidth", b) + l(t, "borderRightWidth", b),
                A = l(t, "paddingTop", b) + l(t, "paddingBottom", b),
                O = l(t, "paddingLeft", b) + l(t, "paddingRight", b),
                D = .2 * l(t, "fontSize"),
                R = l(t, "textAlign", b, !0),
                N = [],
                z = [],
                I = [],
                j = e.wordDelimiter || " ",
                F = e.span ? "span" : "div",
                V = e.type || e.split || "chars,words,lines",
                H = n && -1 !== V.indexOf("lines") ? [] : null,
                B = -1 !== V.indexOf("words"),
                W = -1 !== V.indexOf("chars"),
                q = "absolute" === e.position || !0 === e.absolute,
                X = e.linesClass,
                Y = -1 !== (X || "").indexOf("++");
            for (H && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), Y && (X = X.split("++").join("")), d = t.getElementsByTagName("*"), u = d.length, f = [], c = 0; u > c; c++) f[c] = d[c];
            if (H || q)
                for (c = 0; u > c; c++) p = f[c], ((m = p.parentNode === t) || q || W && !B) && (x = p.offsetTop, H && m && Math.abs(x - T) > D && "BR" !== p.nodeName && (v = [], H.push(v), T = x), q && (p._x = p.offsetLeft, p._y = x, p._w = p.offsetWidth, p._h = p.offsetHeight), H && ((p._isSplit && m || !W && m || B && m || !B && p.parentNode.parentNode === t && !p.parentNode._isSplit) && (v.push(p), p._x -= S, k(p, t, j) && (p._wordEnd = !0)), "BR" === p.nodeName && p.nextSibling && "BR" === p.nextSibling.nodeName && H.push([])));
            for (c = 0; u > c; c++) p = f[c], m = p.parentNode === t, "BR" !== p.nodeName ? (q && (_ = p.style, B || m || (p._x += p.parentNode._x, p._y += p.parentNode._y), _.left = p._x + "px", _.top = p._y + "px", _.position = "absolute", _.display = "block", _.width = p._w + 1 + "px", _.height = p._h + "px"), !B && W ? p._isSplit ? (p._next = p.nextSibling, p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), f.splice(c--, 1), u--) : m || (x = !p.nextSibling && k(p.parentNode, t, j), p.parentNode._parent && p.parentNode._parent.appendChild(p), x && p.parentNode.appendChild(r.createTextNode(" ")), e.span && (p.style.display = "inline"), N.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? z.push(p) : W && !p._isSplit && (e.span && (p.style.display = "inline"), N.push(p))) : H || q ? (t.removeChild(p), f.splice(c--, 1), u--) : B || t.appendChild(p);
            if (H) {
                for (q && (y = r.createElement(F), t.appendChild(y), w = y.offsetWidth + "px", x = y.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(y)), _ = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (g = " " === j && (!q || !B && !W), c = 0; c < H.length; c++) {
                    for (v = H[c], y = r.createElement(F), y.style.cssText = "display:block;text-align:" + R + ";position:" + (q ? "absolute;" : "relative;"), X && (y.className = X + (Y ? c + 1 : "")), I.push(y), u = v.length, d = 0; u > d; d++) "BR" !== v[d].nodeName && (p = v[d], y.appendChild(p), g && p._wordEnd && y.appendChild(r.createTextNode(" ")), q && (0 === d && (y.style.top = p._y + "px", y.style.left = S + x + "px"), p.style.top = "0px", x && (p.style.left = p._x - x + "px")));
                    0 === u ? y.innerHTML = "&nbsp;" : B || W || (L(y), C(y, String.fromCharCode(160), " ")), q && (y.style.width = w, y.style.height = p._h + "px"), t.appendChild(y)
                }
                t.style.cssText = _
            }
            q && (h > t.clientHeight && (t.style.height = h - A + "px", t.clientHeight < h && (t.style.height = h + E + "px")), a > t.clientWidth && (t.style.width = a - O + "px", t.clientWidth < a && (t.style.width = a + P + "px"))), M(i, N), M(s, z), M(n, I)
        },
        A = function (t, e, i, s) {
            var o, a, l, h, c, m, x, b, S, T = e.span ? "span" : "div",
                M = e.type || e.split || "chars,words,lines",
                E = (M.indexOf("words"), -1 !== M.indexOf("chars")),
                k = "absolute" === e.position || !0 === e.absolute,
                L = e.wordDelimiter || " ",
                P = " " !== L ? "" : k ? "&#173; " : " ",
                A = e.span ? "</span>" : "</div>",
                O = !0,
                D = r.createElement("div"),
                R = t.parentNode;
            for (R.insertBefore(D, t), D.textContent = t.nodeValue, R.removeChild(t), t = D, o = n(t), x = -1 !== o.indexOf("<"), !1 !== e.reduceWhiteSpace && (o = o.replace(u, " ").replace(d, "")), x && (o = o.split("<").join("{{LT}}")), c = o.length, a = (" " === o.charAt(0) ? P : "") + i(), l = 0; c > l; l++)
                if ((m = o.charAt(l)) === L && o.charAt(l - 1) !== L && l) {
                    for (a += O ? A : "", O = !1; o.charAt(l + 1) === L;) a += P, l++;
                    l === c - 1 ? a += P : ")" !== o.charAt(l + 1) && (a += P + i(), O = !0)
                } else "{" === m && "{{LT}}" === o.substr(l, 6) ? (a += E ? s() + "{{LT}}</" + T + ">" : "{{LT}}", l += 5) : m.charCodeAt(0) >= p && m.charCodeAt(0) <= f || o.charCodeAt(l + 1) >= 65024 && o.charCodeAt(l + 1) <= 65039 ? (b = w(o.substr(l, 2)), S = w(o.substr(l + 2, 2)), h = b >= v && g >= b && S >= v && g >= S || S >= _ && y >= S ? 4 : 2, a += E && " " !== m ? s() + o.substr(l, h) + "</" + T + ">" : o.substr(l, h), l += h - 1) : a += E && " " !== m ? s() + m + "</" + T + ">" : m;
            t.outerHTML = a + (O ? A : ""), x && C(R, "{{LT}}", "<")
        },
        O = function (t, e, i, s) {
            var n, r, o = E(t.childNodes),
                a = o.length,
                h = "absolute" === e.position || !0 === e.absolute;
            if (3 !== t.nodeType || a > 1) {
                for (e.absolute = !1, n = 0; a > n; n++) r = o[n], (3 !== r.nodeType || /\S+/.test(r.nodeValue)) && (h && 3 !== r.nodeType && "inline" === l(r, "display", null, !0) && (r.style.display = "inline-block", r.style.position = "relative"), r._isSplit = !0, O(r, e, i, s));
                return e.absolute = h, void(t._isSplit = !0)
            }
            A(t, e, i, s)
        },
        D = T.prototype;
    D.split = function (t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, s, n = this.elements.length, r = t.span ? "span" : "div", o = ("absolute" === t.position || t.absolute, S(t.wordsClass, r)), a = S(t.charsClass, r); --n > -1;) s = this.elements[n], this._originals[n] = s.innerHTML, e = s.clientHeight, i = s.clientWidth, O(s, t, o, a), P(s, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, D.revert = function () {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, T.selector = t.$ || t.jQuery || function (e) {
        var i = t.$ || t.jQuery;
        return i ? (T.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, T.version = "0.5.6"
}(_gsScope),
function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText"), window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-21270303-84");
var $body = $("body"),
    whiteClass = "is-white",
    blackClass = "is-black",
    navigation;
$(document).ready(function () {
    pageChange(), Barba.Pjax.start(), Barba.Dispatcher.on("transitionCompleted", function () {
        loadColor($body.hasClass(whiteClass) ? "white" : $body.hasClass(blackClass) ? "black" : "gray")
    });
    var t = Barba.BaseTransition.extend({
        start: function () {
            this.newContainerLoading.then(this.smoothAnim.bind(this))
        },
        smoothAnim: function () {
            var t = this,
                e = new TimelineMax({
                    onComplete: function () {}
                });
            $(".lineTop, .lineBottom").hasClass("spin") && ($(".lineTop, .lineBottom").removeClass("spin"), navigation.reverse());
            var i = getPageType($(this.oldContainer)),
                s = getPageType($(this.newContainer));
            if ("page-intro" == i) {
                new TimelineMax({
                    onComplete: function () {
                        t.done(), pageLoadIn(s), pageChange(s), breadcrumbsFunction()
                    }
                }).add(TweenMax.to(".frame-left", 1, {
                    opacity: 0,
                    x: "-100px"
                })).add(TweenMax.to(".image-reveal", 1, {
                    clip: "rect(0px 400px 0px 0px)",
                    ease: Expo.easeOut
                }), "=-1").add(TweenMax.staggerTo(".welcome-hidden", 1, {
                    opacity: 0,
                    scale: 1.3,
                    ease: Expo.easeOut
                }, .05), "=-1").add(TweenMax.to(".image-reveal, .welcome-hidden", .1, {
                    visibility: "hidden"
                }), "=-1")
            } else if ("page-category" == i) {
                var n = new TimelineMax({
                    onComplete: function () {
                        t.done(), pageLoadIn(s), pageChange(s), breadcrumbsFunction()
                    }
                });
                n.add(TweenMax.to(".frame-left", 1, {
                    opacity: 0,
                    x: "-100px"
                })).add(TweenMax.to(".discovery, .discovery-arrow", .55, {
                    opacity: 0
                }), "=-1").add(TweenMax.to(".bg-fashion, .bg-architecture, bg-personal", 1, {
                    opacity: 0,
                    scale: .9
                }), "=-1").add(TweenMax.staggerTo($(".img-container, .img-container-opening").find(".category-img"), 2, {
                    clip: "rect(-40px 340px -40px -40px)",
                    ease: Expo.easeOut
                }, .125), "=-1")
            } else if ("page-detail" == i) {
                var r = new TimelineMax({
                    onComplete: function () {
                        t.done(), pageLoadIn(s), pageChange(s), breadcrumbsFunction()
                    }
                });
                r.add(TweenMax.to(".frame-left", 1, {
                    opacity: 0,
                    x: "-100px"
                })).add(TweenMax.to(".swiper-pagination, .swiper-button-prev, .swiper-button-next", 1, {
                    opacity: 0
                }), "=-2").add(TweenMax.to("#gallery", 2, {
                    opacity: 0,
                    ease: Expo.easeOut
                }), "=-1").add(TweenMax.to("#gallery", .1, {
                    visibility: "hidden"
                }))
            } else if ("page-about" == i) {
                var o = new TimelineMax({
                    onComplete: function () {
                        t.done(), pageLoadIn(s), pageChange(s), breadcrumbsFunction()
                    }
                });
                o.add(TweenMax.to(".frame-left", 1, {
                    opacity: 0,
                    x: "-100px"
                })).add(TweenMax.to(".bg-about", 1, {
                    opacity: 0,
                    scale: .9
                }), "=-1").add(TweenMax.to(".about-image", 1, {
                    opacity: 0,
                    y: "100%",
                    ease: Expo.easeOut
                }), "=-1").add(TweenMax.staggerTo(".about-text, .about-brands, .peter-van-alphen", 1, {
                    opacity: 0
                }, .12), "=-1")
            }
            enableSwiper()
        }
        
    });
    
    Barba.Pjax.getTransition = function () {
        window.commonItems = commonItems()
        return t
    }, pageLoadIn(getPageType($(".barba-container"))), commonItems(), breadcrumbsFunction()
    
});