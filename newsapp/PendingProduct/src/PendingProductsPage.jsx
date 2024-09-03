import React from 'react';
import PendingProductTable from './PendingProductTable';

function PendingProductsPage() {
  return (
    <div>
      <PendingProductTable />
      <div className="extra-info">
        <p>Keep track of your products that are still pending review.</p>
        <p>You can contact support if there are issues with any product status.</p>
      </div>
    </div>
  );
}

export default PendingProductsPage;
