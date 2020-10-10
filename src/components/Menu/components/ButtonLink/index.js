import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ props }) {
  const [className, href, children] = props;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  props: '',
};

ButtonLink.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string),
};

export default ButtonLink;
