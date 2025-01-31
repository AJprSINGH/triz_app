import React from 'react';

function NavItem({ label, layerName }) {
  return (
    <div data-layername={layerName} className="self-stretch  basis-auto">
      {label}
    </div>
  );
}

export default NavItem;