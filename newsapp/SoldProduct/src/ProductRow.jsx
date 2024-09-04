import './ProductRow.css';  // Import the CSS file
import PropTypes from 'prop-types';

function ProductRow({ imgSrc, title, oldPrice, newPrice, category }) {
  return (
    <tr>
      <td><img src={imgSrc} alt={title} /></td>
      <td>{title}</td>
      <td>{oldPrice}</td>
      <td>{newPrice}</td>
      <td>{category}</td>
    </tr>
  );
}

// Define prop types
ProductRow.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductRow;