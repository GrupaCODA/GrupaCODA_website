import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const staggerText = (node1, node2) => {

    gsap.from([node1, node2],
        {y: 60,
            opacity: 0,
            duration: 1,
            delay: .2,
            ease: 'power4.inOut',
            stagger: {
                amount: .3
            },
        })
}


export const slideUpText = (node1, node2, node3, node4, node5) => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from([node1, node2, node3, node4, node5],
        {y: 60,
            opacity: 0,
            duration: 1,
            delay: .5,
            ease: 'power4.inOut',
            stagger: {
                amount: .3
            },
            scrollTrigger: {
                start: 'bootom 130%',
                trigger: node1,
                scrub: 1
            }
        })
}