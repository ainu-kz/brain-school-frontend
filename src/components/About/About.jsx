import { useEffect } from 'react';
import headerBigPath from '../../assets/about_header.jpg';
import headerMediumPath from '../../assets/about_header_medium.jpg';
import headerSmallPath from '../../assets/about_header_small.jpg';
import Carousel from '../Carousel/Carousel';
import MonksStat from '../MonksStat/MonksStat';

const About = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
        document.title = "MediaMonksClone | About"
    })

    return (
        <section className="page__section page__about about">
            <picture>
                <source srcset={headerSmallPath} media="(max-width: 640px)" />
                <source srcset={headerMediumPath} media="(max-width: 960px)" />
                <img src={headerBigPath} alt="Header" className="about__cover"/>
            </picture>
            <div className="about__content content">
                <article className="content__text">
                    <h1 className="content__title">about</h1>
                    <p className="content__paragraph">
                    MediaMonks is a global creative production company that partners with clients across industries and markets to craft amazing work for leading businesses and brands. Its integrated production capabilities span the entire creative spectrum, covering anything you could possibly want from a production partner, and probably more.
                    </p>
                    <p className="content__paragraph">
                    From creative campaigns and content to bespoke development and design, MediaMonks works above the line and below the fold at the intersection of creativity and technology. Operating across teams, time zones, and technologies with an incredible in-house team of more than 1500 Monks, including recent S4Capital mergers. Its work is recognized by advertising and craft awards around the world, producing 131 Cannes Lions and 250+ FWAs to date.
                    </p>
                    <p className="content__paragraph">
                    Founded in 2001 and rooted in digital, you can find MediaMonks anywhere on the Web as well as in San Francisco, Los Angeles, Mountain View, Sandpoint, Toronto, New York, Mexico City, Buenos Aires, São Paulo, Dublin, London, Amsterdam, Hilversum, Cape Town, Stockholm, Kiev, Dnepr, Moscow, Nur-Sultan, Dubai, Mumbai, Bangalore, Delhi, Singapore, Shanghai, Sydney, Melbourne, and Auckland.
                    </p>
                    <a href="https://www.youtube.com/watch?v=JNU8DhMKryI&ab_channel=MediaMonks" className="content__link">
                        <p>watch our mixtape</p>
                        <span />
                    </a>
                </article>
                <Carousel />
                <MonksStat className="about__info" />
                <div className="social social_about">
                    <span className="social__follow">follow us</span>
                    <a href="https://www.instagram.com/mediamonks/" target="blank" className="social__item social__item_about">
                        <p>gram</p>
                        <span />
                    </a>
                    <a href="https://twitter.com/mediamonks" target="blank" className="social__item social__item_about">
                        <p>t</p>
                        <span />
                    </a>
                    <a href="https://www.facebook.com/mediamonks" target="blank" className="social__item social__item_about">
                        <p>f</p>
                        <span />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;