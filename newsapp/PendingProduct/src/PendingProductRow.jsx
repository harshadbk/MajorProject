import PropTypes from 'prop-types';

function PendingProductRow({ imgSrc, title, price, category, onMarkAsSold }) {
  return (
    <tr>
      <td><img src={imgSrc} alt={title} /></td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <button className="mark-as-sold" onClick={onMarkAsSold}>Mark as Sold</button>
      </td>
    </tr>
  );
}

// Define PropTypes for the component
PendingProductRow.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onMarkAsSold: PropTypes.func.isRequired,
};

export default PendingProductRow;
