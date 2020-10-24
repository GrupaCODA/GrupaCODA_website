import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const staggerText = (node1, node2) => {

    gsap.fromTo([node1, node2],
        {y: '+=40',
            opacity: 0,

        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: .4,
            ease: 'power4.inOut',
            stagger: {
                amount: .3
            },
        })
}

export const DisplayBlock = (node1, node2) => {
    gsap.to([node1, node2],
        {
            duration: 0,
            css:{display:'block'}
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
                start: 'top 185%',
                trigger: node1,
                scrub: 1
            }
        })
}

export const ChangeTextColor = (node1, node2, node3, trigger) => {
    gsap.to([node1, node2, node3],
        {color: '#000',
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'top center',
                toggleActions: "play none reverse none",
            }});
}

export const ChangeBackgroundColor = (node1,trigger) => {
    gsap.to(node1,
        {backgroundColor: '#fff',
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'top center',
                toggleActions: "play none reverse none",
            }});
}