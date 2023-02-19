import React from 'react';

function Index() {
    return (
        <footer className="page__section page__footer footer">
            <div className="footer__social social">
                <a href="https://www.instagram.com/mediamonks/" target="blank" className="social__item">
                    <p>gram</p>
                    <span />
                </a>
                <a href="https://twitter.com/mediamonks" target="blank" className="social__item">
                    <p>t</p>
                    <span />
                </a>
                <a href="https://www.facebook.com/mediamonks" target="blank" className="social__item">
                    <p>f</p>
                    <span />
                </a>
                <a href="https://www.linkedin.com/company/mediamonks/" className="social__item">
                    <p>in</p>
                    <span />
                </a>
            </div>
            <p className="footer__privacy">© MediaMonks | Daniyar Otynshin | <a href="https://www.mediamonks.com/privacy-notice" className="footer__privacy-link">View privacy notice</a></p>
        </footer>
    )
}

export default Index;
