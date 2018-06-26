import React from 'react';
import PropTypes from 'prop-types';

class StructuredData extends React.Component {
  render() {
    let structuredData = {
        '@context': 'http://schema.org',
        '@type': this.props.type,
    }
    Object.assign(structuredData, this.props.data);

    let scriptTag = `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
    return (
      <div dangerouslySetInnerHTML={{__html: scriptTag}}></div>
    );
  }
}
StructuredData.propTypes = {
    type: PropTypes.string,
}

export default StructuredData;