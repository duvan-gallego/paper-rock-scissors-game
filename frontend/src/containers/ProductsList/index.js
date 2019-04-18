import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontIcon, TextField, Grid } from 'react-md';
import cn from 'classnames';
import ProductCard from '../../components/ProductCard';
import fetchProducts from './actions';
import loading from '../../assets/loading.gif';
import './styles.scss';

const ONE_COLUMN_SIZE = 12;
const TWO_COLUMNS_SIZE = 6;
const PAGE_SIZE = 10;
const ALL_CATEGORIES = 'All';

const ProductsList = (props) => {

  const [columnSize, setColumnSize] = useState(ONE_COLUMN_SIZE);
  const [searchString, setSearchString] = useState('');
  const [fetchMoreProducts, setFetchMoreProducts] = useState(false);
  const { fetchProducts: fetchProductsAction, products, category } = props;

  const handleScroll = () => {
    if ((window.innerHeight + document.documentElement.scrollTop + 1) <= document.documentElement.offsetHeight) return;
    setFetchMoreProducts(true);
  }

  useEffect(() => {
    if (!fetchMoreProducts || products.isFetching || ( products.totalElements - products.elementsFetched ) === 0) return;
    setFetchMoreProducts(false);
    setTimeout(() => {
      fetchProductsAction(PAGE_SIZE, Number(products.page) + 1, category || ALL_CATEGORIES);
    }, 1000);
  }, [fetchMoreProducts]);

  useEffect(() => {
    if (products && products.data) {
      setSearchString('');
      fetchProductsAction(PAGE_SIZE, 1, category || ALL_CATEGORIES);
      window.scrollTo(0,0);
    }
  }, [category]);

  useEffect(() => {
    fetchProductsAction(PAGE_SIZE, 1, category || ALL_CATEGORIES);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlerViewModeClick = (size) => {
    setColumnSize(size);
  }

  const handlerSearch = (value) => {
    fetchProductsAction(PAGE_SIZE, 1, category || ALL_CATEGORIES, value);
    setSearchString(value);
  }

  return (
    <div className="productsList">
      <header className="productsList__header">
        <div className="productsList__rows_view">
          <div>
            <FontIcon
              className={cn('productsList__icon', { 'productsList__icon--active' : columnSize === ONE_COLUMN_SIZE })}
              onClick={() => handlerViewModeClick(ONE_COLUMN_SIZE)}
            >
              view_list
            </FontIcon>
            <FontIcon
              className={cn('productsList__icon', { 'productsList__icon--active' : columnSize === TWO_COLUMNS_SIZE })}
              onClick={() => handlerViewModeClick(TWO_COLUMNS_SIZE)}
            >
              view_module
            </FontIcon>
          </div>
          <div>
            Showing <b>{products.elementsFetched || 0}</b> products - Hidden: <b>{(products.totalElements - products.elementsFetched) || 0}</b>
          </div>
        </div>
        <TextField
          id="search"
          label="Search"
          lineDirection="center"
          placeholder="Type any word to search..."
          className="md-cell md-cell--bottom productsList__search"
          onChange={handlerSearch}
          value={searchString}
        />
      </header>
      {products.isFetching &&
        <img src={loading} alt="Loading..." className="productsList__loading" />
      }
      {products && products.data &&
        <Grid>
          {  products.data.map((item) => <ProductCard key={ item.id } columnSize={columnSize} { ...item } twoColumnsSize={TWO_COLUMNS_SIZE} />) }
        </Grid>
      }
      {products && products.data && products.data.length === 0 && !products.isFetching &&
        <h2 className="productsList__error">No se han encontrado resultados...</h2>
      }
      {products && products.data && products.data.length >= 0 && products.isFetching &&
        <img src={loading} alt="Loading..." className="productsList__loading" />
      }
    </div>
  )
};

ProductsList.propTypes = {
  products: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { fetchProducts })(ProductsList);