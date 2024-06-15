import styles from './styles.module.scss';
import Picture1 from '../../../public/images/1.jpeg'; // Assuming the first picture is 1.jpeg
import Picture2 from '../../../public/images/2.jpeg';
import Picture3 from '../../../public/images/3.jpg';
import Picture4 from '../../../public/images/4.jpg';
import Picture5 from '../../../public/images/5.jpg';
import Picture6 from '../../../public/images/6.jpg';
import Picture7 from '../../../public/images/7.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import AboutMe from '../AboutMe/AboutMe';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // Define opacity transforms for transition
    const opacityMiddlePicture = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
    const opacityAboutMe = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    const components = [
        {
            src: Picture1,
            scale: scale4,
            middle: true // Mark this as the middle picture (first picture in this case)
        },
        {
            src: Picture2,
            scale: scale6
        },
        {
            src: Picture3,
            scale: scale5
        },
        {
            src: Picture4,
            scale: scale6
        },
        {
            src: Picture5,
            scale: scale8
        },
        {
            src: Picture6,
            scale: scale9
        },
        {
            src: Picture7,
            scale: scale9
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <section className={styles.sticky}>
                {
                    components.map(({ src, component, scale, middle }, index) => {
                        if (middle) {
                            return (
                                <motion.div key={index} style={{ scale }} className={styles.el}>
                                    <div className={styles.imageContainer}>
                                        <motion.div style={{ opacity: opacityMiddlePicture }}>
                                            <Image
                                                src={src}
                                                fill
                                                alt="image"
                                                placeholder='blur'
                                            />
                                        </motion.div>
                                        <motion.div style={{ opacity: opacityAboutMe }}>
                                            <AboutMe />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div key={index} style={{ scale }} className={styles.el}>
                                <div className={styles.imageContainer}>
                                    {component ? component : (
                                        <Image
                                            src={src}
                                            fill
                                            alt="image"
                                            placeholder='blur'
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })
                }
            </section>
        </div>
    );
}
