import React from 'react';
import Meta from 'components/atoms/meta';
import Shell from 'components/organisms/shell';
import SimpleCard from 'components/molecules/simpleCard';
import PageTitle from 'components/atoms/pageTitle';
import PageSubtitle from 'components/atoms/pageSubtitle';
import PropTypes from 'prop-types';
import _ from 'lang';
const _l = _('en');

// Used to produce a description
const templateData = {
  pageType: 'about',
};

/**
 * Renders the /about page.
 */
const AboutPage = ({
  pageContext: {
    logoSrc,
    splashLogoSrc,
    stringLiterals,
  },
}) => {
  return (
    <>
      <Meta
        title={ _l('About') }
        logoSrc={ splashLogoSrc }
        description={ _l`site.pageDescription${templateData}` }
      />
      <Shell
        logoSrc={ logoSrc }
        isSearch={ false }
        isListing={ false }
        withIcon
        withTitle
      >
        <PageTitle>
          { _l('About') }
        </PageTitle>
        <PageSubtitle isLight>
          { _l('A few word about us, our goals and our projects.') }
        </PageSubtitle>
        <SimpleCard title={ _l('About us') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { stringLiterals['About us'] }
          </p>
        </SimpleCard>
        <SimpleCard title={ _l('Who we are') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { stringLiterals['Who we are'] }
          </p>
          <div className='flex-row'>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/Chalarangelo.png' alt='chalarangelo' />
              <a href='https://github.com/Chalarangelo' className='button-section' target='_blank' rel='noopener noreferrer'>Angelos Chalaris</a>
            </div>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/fejes713.png' alt='fejes713' />
              <a href='https://github.com/fejes713' className='button-section' target='_blank' rel='noopener noreferrer'>Stefan Fejes</a>
            </div>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/atomiks.png' alt='atomiks' />
              <a href='https://github.com/atomiks' className='button-section' target='_blank' rel='noopener noreferrer'>atomiks</a>
            </div>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/skatcat31.png' alt='skatcat31' />
              <a href='https://github.com/skatcat31' className='button-section' target='_blank' rel='noopener noreferrer'>Robert Mennell</a>
            </div>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/Trinityyi.png' alt='Trinityyi' />
              <a href='https://github.com/Trinityyi' className='button-section' target='_blank' rel='noopener noreferrer'>Isabelle Viktoria Maciohsek</a>
            </div>
            <div className="flex-item">
              <img className='media-section' src='https://github.com/flxwu.png' alt='flxwu' />
              <a href='https://github.com/flxwu' className='button-section' target='_blank' rel='noopener noreferrer'>Felix Wu</a>
            </div>
          </div>
        </SimpleCard>
        <SimpleCard title={ _l('License') }>
          <p
            style={ {textAlign: 'justify'} }
          >
            { stringLiterals['License.code'] }
          </p>
          <br/>
          <p
            style={ {textAlign: 'justify'} }
          >
            { stringLiterals['License.logo'] }
          </p>
        </SimpleCard>
      </Shell>
    </>
  );
};

AboutPage.propTypes = {
  /** pageContext is passed from Gatsby to the page */
  pageContext: PropTypes.shape({
    /** URI for the logo image */
    logoSrc: PropTypes.string.isRequired,
    /** URI for the splash logo image */
    splashLogoSrc: PropTypes.string.isRequired,
    /** String literals for the page */
    stringLiterals: PropTypes.shape({}).isRequired,
  }),
};

export default AboutPage;