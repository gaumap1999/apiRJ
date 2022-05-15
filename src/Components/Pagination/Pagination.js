import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onChange: null,
}
function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows}
    function handlePageChange(newPage){
        if(onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            
        </div>
    );
}

export default Pagination;