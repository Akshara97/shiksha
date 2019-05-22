import React from 'react';
import folderIcon from '../../images/folder.svg';
function ItemList() {
  return (
    <div className="upload-list-item">
      <div>
        <object data={folderIcon} type="image/svg+xml" />
      </div>

      <div className="items">
        <div className="items-title">AWS</div>
        <div>Added 21 hours ago-Dropbox</div>
      </div>
    </div>
  );
}
export default ItemList;
