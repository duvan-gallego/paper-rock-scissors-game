import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Card, CardTitle, CardText, Cell } from 'react-md';
import './styles.scss';

const ProductCard = ({ name, description, price, brand, stock, photo, columnSize, twoColumnsSize }) => (
  <Cell size={columnSize} tabletSize={12} phoneSize={12}>
    <Card className={cn('productCard', { 'productCard--two-columns' : columnSize === twoColumnsSize })}>
      <CardTitle title={name} subtitle={brand} />
      <CardText className="productCard__content">
        <img className="productCard__image" src={photo} alt={name} />
        <div className="productCard__text">
          <div className="productCard__text--description">
            {description}
          </div>
          <div>
            <b>Stock:</b> {stock}
          </div>
          <div>
            <b>Price:</b> {price}
          </div>
        </div>
      </CardText>
    </Card>
  </Cell>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  columnSize: PropTypes.number.isRequired,
  twoColumnsSize : PropTypes.number.isRequired
};

export default ProductCard;